import Link from "next/link"
import { postPath, postsFor } from "./blog"
import type { ClusterId } from "./clusters"
import type { Lang } from "./i18n"

const T = { de: "Artikel zum Thema", en: "Articles on this topic" }

/** Verlinkt die Artikel eines Clusters – auf Pillar-Seiten eingebunden. */
export default function ClusterArticles({ lang, cluster, exclude, title }: { lang: Lang; cluster: ClusterId; exclude?: string; title?: string }) {
  const posts = postsFor(lang, cluster).filter((p) => p.id !== exclude)
  if (posts.length === 0) return null
  return (
    <section className="rule">
      <div className="wrap">
        <h2>{title ?? T[lang]}</h2>
        <ul className="post-list">
          {posts.map((p) => (
            <li key={p.id}>
              <Link href={postPath(p)}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="more">{lang === "de" ? "Weiterlesen" : "Read more"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
