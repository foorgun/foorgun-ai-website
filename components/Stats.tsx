"use client"

import { useLang } from "@/lib/i18n"

const VALUES = ["~7,000h", "~$46K", "100%"]

export default function Stats() {
  const { t } = useLang()

  return (
    <section className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
        {VALUES.map((value, i) => (
          <div key={value} className="py-12 sm:px-12 first:pl-0 last:pr-0">
            <p className="font-sans font-extrabold text-5xl text-white mb-3 tracking-tight">{value}</p>
            <p className="font-mono text-xs text-white-muted uppercase tracking-wider">{t.stats.labels[i]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
