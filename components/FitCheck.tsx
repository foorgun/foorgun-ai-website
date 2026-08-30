"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import { useLang } from "@/lib/i18n"

export default function FitCheck() {
  const { t } = useLang()

  return (
    <section className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{t.fit.eyebrow}</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight">{t.fit.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-line p-8 sm:p-10">
            <h3 className="font-sans font-semibold text-xl text-white mb-6">{t.fit.goodTitle}</h3>
            <ul className="flex flex-col gap-4">
              {t.fit.goodItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white text-sm leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line p-8 sm:p-10">
            <h3 className="font-sans font-semibold text-xl text-white-mid mb-6">{t.fit.badTitle}</h3>
            <ul className="flex flex-col gap-4">
              {t.fit.badItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-white-muted shrink-0 mt-0.5" />
                  <span className="text-white-mid text-sm leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
