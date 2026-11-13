import fs from "fs"
import path from "path"
import { marked } from "marked"
import { CLUSTERS, type ClusterId } from "./clusters"
import type { Lang } from "./i18n"

/*
  Artikel liegen in content/blog/<id>/de.md und en.md.
  Kopf jeder Datei (Frontmatter):
  ---
  title: Titel
  description: Ein bis zwei Sätze für Google und Vorschau
  slug: url-teil-des-artikels
  date: 2026-11-12
  cluster: automation | ki-coaching | prozessmanagement | fde
  ---
*/

export type Post = {
  id: string
  lang: Lang
  title: string
  description: string
  slug: string
  date: string
  updated?: string
  cluster: ClusterId
  html: string
  readingMinutes: number
}

const DIR = path.join(process.cwd(), "content", "blog")

function parse(file: string, id: string, lang: Lang): Post {
  const raw = fs.readFileSync(file, "utf8")
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) throw new Error(`Frontmatter fehlt: ${file}`)
  const meta: Record<string, string> = {}
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":")
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1")
  }
  for (const k of ["title", "description", "slug", "date", "cluster"]) {
    if (!meta[k]) throw new Error(`"${k}" fehlt in ${file}`)
  }
  if (!(meta.cluster in CLUSTERS)) throw new Error(`Unbekannter Cluster "${meta.cluster}" in ${file}`)
  const body = m[2]
  const words = body.split(/\s+/).filter(Boolean).length
  return {
    id,
    lang,
    title: meta.title,
    description: meta.description,
    slug: meta.slug,
    date: meta.date,
    updated: meta.updated,
    cluster: meta.cluster as ClusterId,
    html: marked.parse(body, { async: false }) as string,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  }
}

let cache: Post[] | null = null

export function allPosts(): Post[] {
  if (cache && process.env.NODE_ENV === "production") return cache
  if (!fs.existsSync(DIR)) return (cache = [])
  const posts: Post[] = []
  for (const id of fs.readdirSync(DIR)) {
    for (const lang of ["de", "en"] as Lang[]) {
      const f = path.join(DIR, id, `${lang}.md`)
      if (fs.existsSync(f)) posts.push(parse(f, id, lang))
    }
  }
  return (cache = posts.sort((a, b) => b.date.localeCompare(a.date)))
}

export const postsFor = (lang: Lang, cluster?: ClusterId) =>
  allPosts().filter((p) => p.lang === lang && (!cluster || p.cluster === cluster))

export const postBySlug = (lang: Lang, slug: string) => allPosts().find((p) => p.lang === lang && p.slug === slug)

/** Übersetzung desselben Artikels */
export const translationOf = (p: Post) => allPosts().find((q) => q.id === p.id && q.lang !== p.lang)

export const postPath = (p: Pick<Post, "lang" | "slug">) => (p.lang === "de" ? `/de/blog/${p.slug}` : `/blog/${p.slug}`)
