"use client"

import Image from "next/image"
import Link from "next/link"
import { useLang, type Lang } from "@/lib/i18n"

const LANGS: Lang[] = ["EN", "DE"]

const PHONE = "+49 (0) 17622920442"
const PHONE_HREF = "tel:+4917622920442"
const EMAIL = "hello@foorgun.com"

export default function ImpressumPage() {
  const { lang, setLang, t } = useLang()
  const c = t.impressum

  return (
    <div lang={lang === "DE" ? "de" : "en"} className="min-h-screen flex flex-col">
      <header className="border-b border-line">
        <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/foorgun-logo.png"
              alt="foorgun.ai"
              width={637}
              height={95}
              className="h-6 md:h-8 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center font-mono text-xs">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-white/[0.15] select-none">·</span>}
                <button
                  onClick={() => setLang(l)}
                  className="transition-colors duration-150"
                  style={{ color: lang === l ? "#C4521A" : "rgba(245,243,238,0.25)" }}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight mb-12 break-words">
            {c.title}
          </h1>

          <address className="not-italic flex flex-col gap-1 mb-12 text-white-mid font-light leading-relaxed">
            <span className="text-white font-medium">{c.name}</span>
            <span>{c.company}</span>
            <span>{c.street}</span>
            <span>{c.city}</span>
          </address>

          <section className="mb-10">
            <h2 className="font-sans font-semibold text-white text-lg mb-3 hyphens-auto break-words">{c.contactTitle}</h2>
            <div className="flex flex-col gap-1.5 text-white-mid font-light leading-relaxed">
              <p>
                <span className="text-white-muted">{c.phoneLabel}: </span>
                <a href={PHONE_HREF} className="hover:text-white transition-colors duration-150">
                  {PHONE}
                </a>
              </p>
              <p>
                <span className="text-white-muted">{c.emailLabel}: </span>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors duration-150">
                  {EMAIL}
                </a>
              </p>
            </div>
          </section>

          <div className="flex flex-col gap-10">
            {c.sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-sans font-semibold text-white text-lg mb-3 hyphens-auto break-words">{s.title}</h2>
                <p className="text-white-mid font-light leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <Link
              href="/"
              className="font-mono text-sm text-white-mid hover:text-white transition-colors duration-150"
            >
              ← {c.back}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
