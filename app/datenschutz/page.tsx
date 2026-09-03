"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { useLang, type Lang } from "@/lib/i18n"

const LANGS: Lang[] = ["EN", "DE"]

const PHONE = "+49 (0) 17622920442"
const PHONE_HREF = "tel:+4917622920442"
const EMAIL = "hello@foorgun.com"

export default function DatenschutzPage() {
  const { lang, setLang, t } = useLang()
  const c = t.datenschutz

  // Metadata is static and server-rendered, so keep the tab title in sync
  // with the language the visitor actually selected.
  useEffect(() => {
    document.title = lang === "DE" ? "Datenschutz — foorgun.ai" : "Privacy Policy — foorgun.ai"
  }, [lang])

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
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight mb-14 hyphens-auto break-words">
            {c.title}
          </h1>

          <div className="flex flex-col gap-14">
            {c.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-tight mb-8 hyphens-auto break-words">
                  {section.title}
                </h2>

                <div className="flex flex-col gap-8">
                  {section.blocks.map((block, bi) => (
                    <div key={block.title ?? bi}>
                      {block.title && (
                        <h3 className="font-sans font-semibold text-white text-lg mb-3 hyphens-auto break-words">
                          {block.title}
                        </h3>
                      )}

                      {block.paragraphs?.map((p, pi) => (
                        <p key={pi} className="text-white-mid font-light leading-relaxed mb-3 last:mb-0">
                          {p}
                        </p>
                      ))}

                      {block.lines && (
                        <address className="not-italic flex flex-col gap-1 mt-4 text-white-mid font-light leading-relaxed">
                          {block.lines.map((line, li) => (
                            <span key={li} className={li === 0 ? "text-white font-medium" : undefined}>
                              {line}
                            </span>
                          ))}
                        </address>
                      )}

                      {(block.phoneLabel || block.emailLabel) && (
                        <div className="flex flex-col gap-1.5 mt-4 text-white-mid font-light leading-relaxed">
                          {block.phoneLabel && (
                            <p>
                              <span className="text-white-muted">{block.phoneLabel}: </span>
                              <a href={PHONE_HREF} className="hover:text-white transition-colors duration-150">
                                {PHONE}
                              </a>
                            </p>
                          )}
                          {block.emailLabel && (
                            <p>
                              <span className="text-white-muted">{block.emailLabel}: </span>
                              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors duration-150">
                                {EMAIL}
                              </a>
                            </p>
                          )}
                        </div>
                      )}

                      {block.link && (
                        <a
                          href={block.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-accent hover:text-white transition-colors duration-150 font-light break-all"
                        >
                          {block.link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
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
