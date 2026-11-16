import Image from "next/image"
import type { Lang } from "./i18n"

// Bewusst nur wenige, relevante Tools; Icons aus /public/icons.
// Icons wie auf der bisherigen Live-Seite aus /public/icons.

type Tool = { name: string; src: string }

const TOOLS: Tool[] = [
  { name: "Gmail", src: "/icons/gmail.png" },
  { name: "Outlook", src: "/icons/outlook.png" },
  { name: "Google Drive", src: "/icons/google_drive.png" },
  { name: "Notion", src: "/icons/notion.png" },
  { name: "Airtable", src: "/icons/airtable.webp" },
  { name: "HubSpot", src: "/icons/hubspot.png" },
  { name: "Slack", src: "/icons/slack.png" },
  { name: "WhatsApp", src: "/icons/whatsapp.webp" },
]

const T = {
  de: {
    title: "Du musst deine bestehenden Tools nicht ersetzen.",
    text: "Ich verbinde deine vorhandenen Systeme, damit Informationen automatisch dort landen, wo sie gebraucht werden.",
    note: "Auch individuelle Systeme und andere Tools mit Schnittstellen.",
  },
  en: {
    title: "You don't have to replace your existing tools.",
    text: "I connect the systems you already have, so information lands automatically where it's needed.",
    note: "Also custom systems and other tools with an interface.",
  },
}

export default function Tools({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <section className="rule tools">
      <div className="wrap">
        <h2>{t.title}</h2>
        <p className="lead">{t.text}</p>
        <ul className="tool-list">
          {TOOLS.map((x) => (
            <li key={x.name}>
              <Image src={x.src} alt="" width={22} height={22} />
              {x.name}
            </li>
          ))}
        </ul>
        <p className="hero-sub">{t.note}</p>
      </div>
    </section>
  )
}
