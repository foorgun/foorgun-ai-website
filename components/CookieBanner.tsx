"use client"

import Link from "next/link"
import { useConsent } from "@/lib/consent"
import { useLang } from "@/lib/i18n"

export default function CookieBanner() {
  const { bannerOpen, decide } = useConsent()
  const { t } = useLang()
  const c = t.cookies

  if (!bannerOpen) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={c.settings}
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-line bg-bg/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="text-white-mid font-light text-sm leading-relaxed flex-1">
          {c.textBefore}
          <Link href="/datenschutz" className="text-accent hover:text-white transition-colors duration-150 underline underline-offset-2">
            {c.policyLabel}
          </Link>
          {c.textAfter}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:shrink-0">
          <button
            onClick={() => decide("necessary")}
            className="font-mono text-xs px-5 py-2.5 border border-line text-white-mid hover:text-white hover:border-accent/40 transition-colors duration-150 whitespace-nowrap"
          >
            {c.necessaryOnly}
          </button>
          <button
            onClick={() => decide("all")}
            className="font-mono text-xs font-medium px-5 py-2.5 bg-accent text-white hover:opacity-90 transition-opacity duration-150 whitespace-nowrap"
          >
            {c.acceptAll}
          </button>
        </div>
      </div>
    </div>
  )
}
