import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Article from "@/components/site/views/Article"
import { postBySlug, postPath, postsFor, translationOf } from "@/components/site/blog"

export const dynamicParams = false

export function generateStaticParams() {
  return postsFor("de").map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = postBySlug("de", params.slug)
  if (!post) return {}
  const tr = translationOf(post)
  const self = postPath(post)
  const languages: Record<string, string> = { de: self }
  if (tr) languages[tr.lang] = postPath(tr)
  languages["x-default"] = languages.de ?? self
  return {
    title: `${post.title} | foorgun.ai`,
    description: post.description,
    alternates: { canonical: self, languages },
    openGraph: { title: post.title, description: post.description, url: self, type: "article", publishedTime: post.date, locale: "de_DE" },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = postBySlug("de", params.slug)
  if (!post) notFound()
  return <Article post={post} />
}
