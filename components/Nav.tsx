"use client"

import { useLang, type Lang } from "@/lib/i18n"

const LANGS: Lang[] = ["EN", "DE", "TR"]

export default function Nav() {
  const { lang, setLang, t } = useLang()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-mono text-accent text-base tracking-tight">
          foorgun.ai
        </a>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services"      className="font-mono text-xs text-white-muted hover:text-white transition-colors duration-150">{t.nav.services}</a>
          <a href="#process"       className="font-mono text-xs text-white-muted hover:text-white transition-colors duration-150">{t.nav.process}</a>
          <a href="#testimonials"  className="font-mono text-xs text-white-muted hover:text-white transition-colors duration-150">{t.nav.testimonials}</a>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile: native select */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="md:hidden appearance-none bg-transparent font-mono text-xs text-white-muted border border-line px-3 py-1.5 cursor-pointer text-center [text-align-last:center]"
          >
            {LANGS.map((l) => (
              <option key={l} value={l} style={{ background: "#141414", color: "#F5F3EE" }}>{l}</option>
            ))}
          </select>

          {/* Desktop: inline EN · DE · TR */}
          <div className="hidden md:flex items-center font-mono text-xs">
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

          {/* CTA — fixed width so language changes don't shift layout */}
          <a
            href="#contact"
            className="w-[7.5rem] md:w-auto text-center whitespace-nowrap font-mono text-xs md:text-sm font-medium px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-accent text-white hover:opacity-90 transition-opacity duration-150"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
