import Link from "next/link"
import Shell from "../Shell"
import { postPath, postsFor } from "../blog"
import { CLUSTERS, clusterLabel, type ClusterId } from "../clusters"
import { href, type Lang } from "../i18n"

const T = {
  de: {
    title: <>Wissen aus der Praxis: <em className="hl">KI, Automation, Prozesse.</em></>,
    lead: "Anleitungen und Einordnungen für Unternehmen, die KI sinnvoll einsetzen wollen – ohne Hype.",
    topic: "Zum Thema",
    empty: "Hier erscheinen bald die ersten Artikel.",
  },
  en: {
    title: <>Practical know-how: <em className="hl">AI, automation, processes.</em></>,
    lead: "Guides and perspectives for businesses that want to use AI sensibly – without the hype.",
    topic: "Topic page",
    empty: "The first articles are coming soon.",
  },
}

export const fmtDate = (d: string, lang: Lang) =>
  new Date(d + "T12:00:00").toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", { day: "numeric", month: "long", year: "numeric" })

export default function BlogIndex({ lang }: { lang: Lang }) {
  const t = T[lang]
  const posts = postsFor(lang)
  const clusters = (Object.keys(CLUSTERS) as ClusterId[]).filter((c) => posts.some((p) => p.cluster === c))
  return (
    <Shell lang={lang}>
      <section className="hero">
        <div className="wrap">
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>
      {posts.length === 0 && <section className="rule"><div className="wrap"><p>{t.empty}</p></div></section>}
      {clusters.map((c) => (
        <section className="rule" key={c} id={c}>
          <div className="wrap">
            <div className="cluster-head">
              <h2>{clusterLabel(c, lang)}</h2>
              <Link className="more" href={href(lang, CLUSTERS[c].path)}>{t.topic} →</Link>
            </div>
            <ul className="post-list">
              {posts.filter((p) => p.cluster === c).map((p) => (
                <li key={p.id}>
                  <Link href={postPath(p)}>
                    <span className="post-meta">{fmtDate(p.date, lang)} · {p.readingMinutes} min</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </Shell>
  )
}
