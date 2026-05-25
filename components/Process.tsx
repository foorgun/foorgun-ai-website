"use client"

import { useLang } from "@/lib/i18n"

export default function Process() {
  const { t } = useLang()

  return (
    <section id="process" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{t.process.eyebrow}</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">{t.process.title}</h2>
          <p className="text-white-mid font-light">{t.process.subline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          {t.process.steps.map((s, i) => (
            <div key={i} className="relative bg-bg p-10 overflow-hidden">
              <span
                className="absolute -top-6 -right-2 font-sans font-extrabold text-[10rem] leading-none text-white/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="relative">
                <h3 className="font-sans font-semibold text-xl text-white mb-4">{s.title}</h3>
                <p className="text-white-mid text-sm leading-relaxed font-light max-w-sm">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
