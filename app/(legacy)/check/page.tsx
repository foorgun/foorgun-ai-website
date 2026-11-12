"use client"

import Link from "next/link"
import { useLang, type Lang } from "@/lib/i18n"
import LeadMagnet from "@/components/LeadMagnet"
import CalEmbedInline from "@/components/CalEmbedInline"

const LANGS: Lang[] = ["EN", "DE"]

export default function CheckPage() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line">
        <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-accent text-base tracking-tight">
            foorgun.ai
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

      <main className="flex-1 flex items-start justify-center px-6 py-16">
        <LeadMagnet embedCal={<CalEmbedInline ctaLabel={t.check.result.cta} />} />
      </main>
    </div>
  )
}
