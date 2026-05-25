"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/lib/i18n"

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-line bg-surface">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
        <span className="font-sans font-medium text-white text-sm leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${open ? "bg-accent" : "bg-surface-2 group-hover:bg-accent/20"}`}>
          <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-white-mid text-sm leading-relaxed font-light border-t border-line pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()

  return (
    <section id="faq" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{t.faq.eyebrow}</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight">{t.faq.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          {t.faq.items.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
