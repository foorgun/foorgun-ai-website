"use client"

// Rechtstexte (Impressum, Datenschutz) – Inhalt unverändert aus lib/i18n.tsx,
// nur im Stil der neuen Seite dargestellt.
import { translations } from "@/lib/i18n"
import type { Lang } from "./i18n"

const PHONE = "+49 (0) 17622920442"
const PHONE_HREF = "tel:+4917622920442"
const EMAIL = "hello@foorgun.com"

const Contact = ({ phoneLabel, emailLabel }: { phoneLabel?: string; emailLabel?: string }) => (
  <dl className="legal-contact">
    {phoneLabel && (
      <div><dt>{phoneLabel}</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
    )}
    {emailLabel && (
      <div><dt>{emailLabel}</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
    )}
  </dl>
)

export function Impressum({ lang }: { lang: Lang }) {
  const c = translations[lang === "de" ? "DE" : "EN"].impressum
  return (
    <>
      <h1>{c.title}</h1>
      <address className="legal-address">
        <strong>{c.name}</strong>
        <span>{c.company}</span>
        <span>{c.street}</span>
        <span>{c.city}</span>
      </address>
      <section>
        <h2>{c.contactTitle}</h2>
        <Contact phoneLabel={c.phoneLabel} emailLabel={c.emailLabel} />
      </section>
      {c.sections.map((s) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </>
  )
}

export function Datenschutz({ lang }: { lang: Lang }) {
  const c = translations[lang === "de" ? "DE" : "EN"].datenschutz
  return (
    <>
      <h1>{c.title}</h1>
      {c.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.blocks.map((b, i) => (
            <div className="legal-block" key={b.title ?? i}>
              {b.title && <h3>{b.title}</h3>}
              {b.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
              {b.lines && (
                <address className="legal-address">
                  {b.lines.map((l, j) => (j === 0 ? <strong key={j}>{l}</strong> : <span key={j}>{l}</span>))}
                </address>
              )}
              {(b.phoneLabel || b.emailLabel) && <Contact phoneLabel={b.phoneLabel} emailLabel={b.emailLabel} />}
              {b.link && (
                <p><a href={b.link.href} target="_blank" rel="noopener noreferrer" className="legal-link">{b.link.label}</a></p>
              )}
            </div>
          ))}
        </section>
      ))}
    </>
  )
}
