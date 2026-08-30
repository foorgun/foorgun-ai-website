"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SlidingNumber } from "@/components/ui/sliding-number"
import { useLang } from "@/lib/i18n"

type Stat = { prefix: string; value: number; suffix: string; grouped?: boolean }

const STATS: Stat[] = [
  { prefix: "~", value: 7000, suffix: "h", grouped: true },
  { prefix: "~$", value: 46, suffix: "K" },
  { prefix: "", value: 100, suffix: "%" },
]

const STAGGER_MS = 150

export default function Stats() {
  const { t } = useLang()
  const [hasEntered, setHasEntered] = useState(false)
  const [started, setStarted] = useState(() => STATS.map(() => false))

  useEffect(() => {
    if (!hasEntered) return
    const timers = STATS.map((_, i) =>
      setTimeout(() => {
        setStarted((prev) => prev.map((v, j) => (j === i ? true : v)))
      }, i * STAGGER_MS)
    )
    return () => timers.forEach(clearTimeout)
  }, [hasEntered])

  return (
    <section className="border-b border-line">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line"
        onViewportEnter={() => setHasEntered(true)}
        viewport={{ once: true, amount: 0.4 }}
      >
        {STATS.map((stat, i) => {
          const target = started[i] ? stat.value : 0
          const thousands = Math.floor(target / 1000)
          const hundreds = Math.floor((target % 1000) / 100)
          const tens = Math.floor((target % 100) / 10)
          const ones = target % 10

          return (
            <div key={i} className="py-12 sm:px-12 first:pl-0 last:pr-0">
              <div className="flex items-baseline font-sans font-extrabold text-5xl text-white mb-3 tracking-tight tabular-nums">
                <span>{stat.prefix}</span>
                {stat.grouped ? (
                  <>
                    <SlidingNumber value={thousands} />
                    <span>,</span>
                    <SlidingNumber value={hundreds} />
                    <SlidingNumber value={tens} />
                    <SlidingNumber value={ones} />
                  </>
                ) : (
                  <SlidingNumber value={target} />
                )}
                <span>{stat.suffix}</span>
              </div>
              <p className="font-mono text-xs text-white-muted uppercase tracking-wider">{t.stats.labels[i]}</p>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
