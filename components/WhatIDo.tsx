"use client"

import { Target, FileText, Building2, MessageSquare, UserCheck, BarChart3, Layers } from "lucide-react"
import { useLang } from "@/lib/i18n"

const ICONS = [
  <Target        key="target"        width="20" height="20" strokeWidth={1.8} />,
  <FileText      key="filetext"      width="20" height="20" strokeWidth={1.8} />,
  <Building2     key="building2"     width="20" height="20" strokeWidth={1.8} />,
  <MessageSquare key="messagesquare" width="20" height="20" strokeWidth={1.8} />,
  <UserCheck     key="usercheck"     width="20" height="20" strokeWidth={1.8} />,
  <BarChart3     key="barchart3"     width="20" height="20" strokeWidth={1.8} />,
  <Layers        key="layers"        width="20" height="20" strokeWidth={1.8} />,
]

export default function WhatIDo() {
  const { t } = useLang()

  return (
    <section id="services" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{t.services.eyebrow}</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">{t.services.title}</h2>
          <p className="text-white-mid font-light">{t.services.subline}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {t.services.cards.map((card, i) => (
            <div
              key={i}
              className={`bg-surface p-8 h-full flex flex-col gap-6 hover:bg-surface-2 transition-colors duration-200 ${
                i === t.services.cards.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className="w-11 h-11 flex items-center justify-center bg-accent/10 text-accent border border-accent/20">
                {ICONS[i]}
              </div>
              <h3 className="font-sans font-semibold text-xl text-white">{card.title}</h3>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-white-mid text-sm leading-relaxed font-light">{card.description}</p>
              </div>
              {card.note && (
                <p className="text-white-muted text-xs leading-relaxed font-light">{card.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
