import Link from "next/link"
import Shell from "../Shell"
import ClusterArticles from "../ClusterArticles"
import JsonLd from "../JsonLd"
import { postPath, translationOf, type Post } from "../blog"
import { CLUSTERS, clusterLabel } from "../clusters"
import { CALL } from "../config"
import { href, type Lang } from "../i18n"
import { fmtDate } from "./BlogIndex"
import { FIGURES } from "../figures"

const BASE = "https://foorgun.ai"
const T = {
  de: { blog: "Blog", updated: "aktualisiert", ctaTitle: "Soll ich mir deinen Ablauf ansehen?", ctaText: "In 15 Minuten schauen wir gemeinsam, wo sich bei dir etwas lohnt – kostenlos und unverbindlich.", cta: "15-Min-Gespräch buchen", topic: "Mehr zum Thema", more: "Weitere Artikel zum Thema", by: "von" },
  en: { blog: "Blog", updated: "updated", ctaTitle: "Want me to look at your process?", ctaText: "In 15 minutes we'll look at where it pays off for you – free and with no obligation.", cta: "Book a 15-min call", topic: "More on this topic", more: "More articles on this topic", by: "by" },
}

export default function Article({ post }: { post: Post }) {
  const lang: Lang = post.lang
  const t = T[lang]
  const tr = translationOf(post)
  const cluster = CLUSTERS[post.cluster]
  const url = `${BASE}${postPath(post)}`
  return (
    <Shell lang={lang} alt={tr ? postPath(tr) : href(lang === "de" ? "en" : "de", "/blog")}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.updated ?? post.date,
              inLanguage: lang,
              url,
              mainEntityOfPage: url,
              author: { "@id": `${BASE}/#furkan` },
              publisher: { "@id": `${BASE}/#org` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "foorgun.ai", item: `${BASE}${href(lang, "/")}` },
                { "@type": "ListItem", position: 2, name: t.blog, item: `${BASE}${href(lang, "/blog")}` },
                { "@type": "ListItem", position: 3, name: post.title, item: url },
              ],
            },
          ],
        }}
      />
      <article className="post">
        <header className="post-head">
          <div className="wrap narrow">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href={href(lang, "/blog")}>{t.blog}</Link> / <Link href={href(lang, cluster.path)}>{clusterLabel(post.cluster, lang)}</Link>
            </nav>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
            <p className="post-meta">
              {t.by} Furkan Çetin · {fmtDate(post.date, lang)}
              {post.updated && <> · {t.updated} {fmtDate(post.updated, lang)}</>} · {post.readingMinutes} min
            </p>
          </div>
        </header>
        <div className="wrap narrow">
          <div className="prose-post">
            {post.html.split(/<p>\[\[figure:([a-z0-9-]+)\]\]<\/p>/).map((part, i) => {
              if (i % 2 === 0) return part.trim() ? <div key={i} dangerouslySetInnerHTML={{ __html: part }} /> : null
              const Fig = FIGURES[part]
              if (!Fig) throw new Error(`Unbekannte Grafik "${part}" in ${post.id}/${lang}.md`)
              return <Fig key={i} lang={lang} />
            })}
          </div>
          <aside className="post-cta">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <div className="actions">
              <a className="btn" href={CALL}>{t.cta}</a>
              <Link className="btn ghost" href={href(lang, cluster.path)}>{t.topic}: {clusterLabel(post.cluster, lang)}</Link>
            </div>
          </aside>
        </div>
      </article>
      <ClusterArticles lang={lang} cluster={post.cluster} exclude={post.id} title={t.more} />
    </Shell>
  )
}
