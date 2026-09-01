"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"

export default function Problem() {
  const { t } = useLang()

  const ProblemItem = ({ item, index }: { item: { title: string; description: string }; index: number }) => (
    <div className="pb-8 last:pb-0 last:border-b-0 border-b border-line">
      <div className="flex items-start gap-6">
        <span className="text-white-muted font-mono text-4xl md:text-5xl font-semibold flex-shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3 className="font-sans font-semibold text-lg md:text-xl text-white mb-3 leading-snug">
            {item.title}
          </h3>
          <p className="text-white-mid text-sm md:text-base leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <motion.section
      className="border-b border-line"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center mb-20">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{t.problem.eyebrow}</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">
            {t.problem.title}
          </h2>
          <p className="text-white-mid font-light max-w-2xl mx-auto">{t.problem.subline}</p>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left column */}
          <div className="space-y-8">
            {t.problem.items.slice(0, 3).map((item, i: number) => (
              <ProblemItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {t.problem.items.slice(3, 6).map((item, i: number) => (
              <ProblemItem key={i + 3} item={item} index={i + 3} />
            ))}
          </div>
        </div>

        {/* Mobile: Single column */}
        <div className="md:hidden space-y-8 max-w-2xl mx-auto">
          {t.problem.items.map((item, i: number) => (
            <ProblemItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
