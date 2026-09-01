"use client"

import { useLang } from "@/lib/i18n"

export default function Approach() {
  const { t } = useLang()

  return (
    <section className="border-b border-line">
      <div className="max-w-2xl mx-auto px-6 py-16 lg:py-20 text-center">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-5">{t.approach.eyebrow}</p>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white leading-snug tracking-tight mb-8">
          {t.approach.headline}
        </h2>
        <div className="flex flex-col gap-5">
          {t.approach.paragraphs.map((p, i) => (
            <p key={i} className="text-white-mid font-light leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
