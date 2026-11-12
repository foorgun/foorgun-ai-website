import Image from "next/image"
import type { Lang } from "./i18n"

// "Funktioniert mit deinen Tools" – zwei gegenläufige Laufbänder (reines CSS).
// Icons wie auf der bisherigen Live-Seite aus /public/icons.

type Tool = { name: string; src: string; dark?: boolean }

const ROW1: Tool[] = [
  { name: "Notion", src: "/icons/notion.png" },
  { name: "OpenAI", src: "/icons/openai.png", dark: true },
  { name: "Gmail", src: "/icons/gmail.png" },
  { name: "Slack", src: "/icons/slack.png" },
  { name: "Shopify", src: "/icons/shopify.png" },
  { name: "Google Drive", src: "/icons/google_drive.png" },
  { name: "HubSpot", src: "/icons/hubspot.png" },
  { name: "Gemini", src: "/icons/gemini.png" },
  { name: "Stripe", src: "/icons/stripe.png" },
  { name: "Claude", src: "/icons/claude.png" },
]

const ROW2: Tool[] = [
  { name: "Airtable", src: "/icons/airtable.webp" },
  { name: "WhatsApp", src: "/icons/whatsapp.webp" },
  { name: "Outlook", src: "/icons/outlook.png" },
  { name: "Monday.com", src: "/icons/mondaycom.svg" },
  { name: "SQL", src: "/icons/sql.png" },
  { name: "Calendly", src: "/icons/calendly.png" },
  { name: "Typeform", src: "/icons/typeform.webp" },
  { name: "MS Teams", src: "/icons/ms_teams.png" },
  { name: "Salesforce", src: "/icons/salesforce.png" },
  { name: "Google Calendar", src: "/icons/google_calendar.png" },
]

const T = {
  de: "Funktioniert mit den Tools, die du schon nutzt",
  en: "Works with the tools you already use",
}

function Row({ tools, reverse }: { tools: Tool[]; reverse?: boolean }) {
  return (
    <div className="marquee">
      <ul className={`marquee-track${reverse ? " rev" : ""}`}>
        {[...tools, ...tools].map((t, i) => (
          <li key={i} aria-hidden={i >= tools.length || undefined}>
            <Image src={t.src} alt="" width={22} height={22} className={t.dark ? "dark" : undefined} />
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Tools({ lang }: { lang: Lang }) {
  return (
    <section className="rule tools">
      <div className="wrap">
        <h2>{T[lang]}</h2>
      </div>
      <div className="marquees">
        <Row tools={ROW1} />
        <Row tools={ROW2} reverse />
      </div>
    </section>
  )
}
