import { EMAIL } from "./config"
import { href, type Lang } from "./i18n"

const BASE = "https://foorgun.ai"

export default function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

/** Wer steckt hinter der Seite – auf jeder Seite eingebunden. */
export function orgSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${BASE}/#org`,
        name: "foorgun.ai",
        url: BASE,
        email: EMAIL,
        logo: `${BASE}/logos/foorgun-logo.png`,
        image: `${BASE}/furkan.png`,
        description:
          lang === "de"
            ? "Intelligent Automation für Unternehmen: Automationen mit KI, Software & Plattformen (interne Software, CRM, Kundenportale, Websites mit Online-Buchung) und KI-Coaching."
            : "Intelligent automation for businesses: AI-powered automations, software & platforms (internal software, CRM, client portals, websites with online booking) and AI coaching.",
        founder: { "@id": `${BASE}/#furkan` },
        areaServed: ["DE", "AT", "CH", "Europe"],
        knowsLanguage: ["de", "en", "tr"],
      },
      {
        "@type": "Person",
        "@id": `${BASE}/#furkan`,
        name: "Furkan Çetin",
        jobTitle: "AI & Intelligent Automation Engineer",
        worksFor: { "@id": `${BASE}/#org` },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Technische Hochschule Ulm" },
          { "@type": "CollegeOrUniversity", name: "Korea University" },
        ],
        knowsAbout: ["Automation", "APIs", "Cloud infrastructure", "n8n", "Business Process Management", "BPMN", "Forward Deployed Engineering", "Claude", "Power Automate"],
        url: `${BASE}${href(lang, "/")}`,
      },
    ],
  }
}

/** Leistung (für Pillar-/Leistungsseiten). */
export function serviceSchema(lang: Lang, path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE}${href(lang, path)}`,
    provider: { "@id": `${BASE}/#org` },
    inLanguage: lang,
  }
}
