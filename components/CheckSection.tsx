"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"
import LeadMagnet from "@/components/LeadMagnet"
import CalEmbedInline from "@/components/CalEmbedInline"

export default function CheckSection() {
  const { t } = useLang()

  return (
    <motion.section
      id="check"
      className="border-b border-line"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
        <LeadMagnet embedCal={<CalEmbedInline ctaLabel={t.check.result.cta} />} />
      </div>
    </motion.section>
  )
}
