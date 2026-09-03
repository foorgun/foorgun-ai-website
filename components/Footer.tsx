"use client"

import Link from "next/link"
import { useLang } from "@/lib/i18n"

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-6">
          <span className="font-mono text-accent text-sm">foorgun.ai</span>

          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/furkan-cetin-660004211/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-line text-white-muted hover:text-white hover:border-accent/40 transition-colors duration-200"
              aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/foorgun.ai/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-line text-white-muted hover:text-white hover:border-accent/40 transition-colors duration-200"
              aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-mono text-xs text-white-muted">Ulm, Germany</p>
            <p className="font-mono text-xs text-white-muted">© {new Date().getFullYear()} Furkan Cetin</p>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs text-white uppercase tracking-widest">{t.footer.navTitle}</p>
          <div className="w-full h-px bg-line" />
          <nav className="flex flex-col gap-4">
            {t.footer.nav.map((link) => (
              <a key={link.href} href={link.href} className="font-mono text-sm text-white-mid hover:text-white transition-colors duration-150">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 — Company */}
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs text-white uppercase tracking-widest">{t.footer.companyTitle}</p>
          <div className="w-full h-px bg-line" />
          <nav className="flex flex-col gap-4">
            {t.footer.company.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.label} href={link.href} className="font-mono text-sm text-white-mid hover:text-white transition-colors duration-150">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="font-mono text-sm text-white-mid hover:text-white transition-colors duration-150">
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Col 4 — Contact */}
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs text-white uppercase tracking-widest">{t.footer.contactTitle}</p>
          <div className="w-full h-px bg-line" />
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@foorgun.ai" className="font-mono text-sm text-white-mid hover:text-white transition-colors duration-150">hello@foorgun.ai</a>
            <a href="tel:+4917622920442" className="font-mono text-sm text-white-mid hover:text-white transition-colors duration-150">+49 176 2292 0442</a>
          </div>
        </div>

      </div>

      {/* Watermark */}
      <div className="px-4 pt-2 pb-0">
        <p className="font-sans font-extrabold text-white/[0.03] leading-none select-none whitespace-nowrap tracking-tighter text-[16vw]">
          foorgun.ai
        </p>
      </div>
    </footer>
  )
}
