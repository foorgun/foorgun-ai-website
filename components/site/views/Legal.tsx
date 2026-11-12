import Shell from "../Shell"
import { Datenschutz, Impressum } from "../LegalContent"
import type { Lang } from "../i18n"

export const LEGAL_META = {
  impressum: {
    de: { title: "Impressum – foorgun.ai", description: "Impressum und Kontaktdaten von Furkan Cetin IT Beratung (foorgun.ai)." },
    en: { title: "Legal notice – foorgun.ai", description: "Legal notice and contact details for Furkan Cetin IT Beratung (foorgun.ai)." },
  },
  datenschutz: {
    de: { title: "Datenschutzerklärung – foorgun.ai", description: "Wie auf foorgun.ai mit personenbezogenen Daten umgegangen wird." },
    en: { title: "Privacy policy – foorgun.ai", description: "How personal data is handled on foorgun.ai." },
  },
}

export default function Legal({ lang, kind }: { lang: Lang; kind: "impressum" | "datenschutz" }) {
  return (
    <Shell lang={lang}>
      <article className="legal">
        <div className="wrap narrow">
          {kind === "impressum" ? <Impressum lang={lang} /> : <Datenschutz lang={lang} />}
        </div>
      </article>
    </Shell>
  )
}
