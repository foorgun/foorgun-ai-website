"use client"

import { Zap, Sparkles, Link2, Layers } from "lucide-react"
import { useLang } from "@/lib/i18n"

const ICONS = [
  <Zap      key="zap"      width="20" height="20" strokeWidth={1.8} />,
  <Sparkles key="sparkles" width="20" height="20" strokeWidth={1.8} />,
  <Link2    key="link2"    width="20" height="20" strokeWidth={1.8} />,
  <Layers   key="layers"   width="20" height="20" strokeWidth={1.8} />,
]

export default function WhatIDo() {
  const { t } = useLang()

  return (
    <section id="services" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{t.services.eyebrow}</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">{t.services.title}</h2>
          <p className="text-white-mid font-light">{t.services.subline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.cards.map((card, i) => (
            <div key={i} className="bg-surface p-8 flex flex-col gap-6 hover:bg-surface-2 transition-colors duration-200">
              <div className="w-11 h-11 flex items-center justify-center bg-accent/10 text-accent border border-accent/20">
                {ICONS[i]}
              </div>
              <h3 className="font-sans font-semibold text-xl text-white">{card.title}</h3>
              <p className="text-white-mid text-sm leading-relaxed font-light">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
