"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Do I need to have a technical team to work with you?",
    a: "No. I handle the technical side completely. You describe the problem, I build the solution. No internal IT team required.",
  },
  {
    q: "How long does it take to see first results?",
    a: "Most clients see working automations within 2–3 weeks. We start with the highest-impact area first, so results come fast.",
  },
  {
    q: "What tools do you work with?",
    a: "n8n, Airtable, Typeform, Google Workspace, Slack, Gmail, OpenAI, Claude API, and most tools with an API. If you're unsure, just ask.",
  },
  {
    q: "Do you work with small businesses or only large companies?",
    a: "Both. What matters is whether automation can create real value for your business — not your company size.",
  },
  {
    q: "How much does it cost?",
    a: "Every engagement is scoped individually. Start with a free 30-minute call and you'll get a clear, transparent proposal.",
  },
  {
    q: "What happens after the project is done?",
    a: "You own everything. Full documentation, handover, and optional ongoing support via a monthly retainer — so the system keeps running smoothly.",
  },
  {
    q: "Can you work with our existing tools, or do we need to buy new software?",
    a: "I work with what you already have wherever possible. If a new tool is needed, I'll recommend the most cost-effective option and set it up for you.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-line bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className="font-sans font-medium text-white text-sm leading-snug">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            open ? "bg-accent" : "bg-surface-2 group-hover:bg-accent/20"
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 text-white transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
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
            <p className="px-6 pb-5 text-white-mid text-sm leading-relaxed font-light border-t border-line pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            FAQs
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight">
            Answers to your<br className="hidden sm:block" /> common questions
          </h2>
        </div>

        {/* 2-col grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
