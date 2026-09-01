"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLang } from "@/lib/i18n"

type Tool = { name: string; src: string; darkBg?: boolean }

const row1: Tool[] = [
  { name: "Notion",       src: "/icons/notion.png" },
  { name: "OpenAI",       src: "/icons/openai.png", darkBg: true },
  { name: "Gmail",        src: "/icons/gmail.png" },
  { name: "Slack",        src: "/icons/slack.png" },
  { name: "Shopify",      src: "/icons/shopify.png" },
  { name: "Google Drive", src: "/icons/google_drive.png" },
  { name: "HubSpot",      src: "/icons/hubspot.png" },
  { name: "Gemini",       src: "/icons/gemini.png" },
  { name: "Stripe",       src: "/icons/stripe.png" },
  { name: "Claude",       src: "/icons/claude.png" },
]

const row2: Tool[] = [
  { name: "Airtable",        src: "/icons/airtable.webp" },
  { name: "WhatsApp",        src: "/icons/whatsapp.webp" },
  { name: "Outlook",         src: "/icons/outlook.png" },
  { name: "Monday.com",      src: "/icons/mondaycom.svg" },
  { name: "SQL",             src: "/icons/sql.png" },
  { name: "Calendly",        src: "/icons/calendly.png" },
  { name: "Typeform",        src: "/icons/typeform.webp" },
  { name: "MS Teams",        src: "/icons/ms_teams.png" },
  { name: "Salesforce",      src: "/icons/salesforce.png" },
  { name: "Google Calendar", src: "/icons/google_calendar.png" },
]

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-center gap-3 bg-surface border border-line px-4 py-3 mx-2 whitespace-nowrap shrink-0">
      <span className={`flex-shrink-0 flex items-center justify-center rounded ${tool.darkBg ? "bg-[#1a1a1a] p-0.5 w-[26px] h-[26px]" : "w-[22px] h-[22px]"}`}>
        <Image src={tool.src} alt={tool.name} width={22} height={22} className="object-contain w-full h-full" />
      </span>
      <span className="font-mono text-sm text-white-mid">{tool.name}</span>
    </div>
  )
}

function MarqueeRow({ tools, reverse = false }: { tools: Tool[]; reverse?: boolean }) {
  const doubled = [...tools, ...tools]
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {doubled.map((tool, i) => <ToolChip key={i} tool={tool} />)}
      </div>
    </div>
  )
}

export default function IntegrationMarquee() {
  const { t } = useLang()

  return (
    <motion.section
      className="border-b border-line py-12 lg:py-20 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto px-6 mb-12 text-center">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-5">{t.integrations.eyebrow}</p>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white tracking-tight mb-8">{t.integrations.title}</h2>
      </div>

      <div className="relative flex flex-col gap-3">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        <MarqueeRow tools={row1} />
        <MarqueeRow tools={row2} reverse />
      </div>
    </motion.section>
  )
}
