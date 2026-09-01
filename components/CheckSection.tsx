"use client"

import { useLang } from "@/lib/i18n"
import LeadMagnet from "@/components/LeadMagnet"
import CalEmbedInline from "@/components/CalEmbedInline"

export default function CheckSection() {
  const { t } = useLang()

  return (
    <section id="check" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
        <LeadMagnet embedCal={<CalEmbedInline ctaLabel={t.check.result.cta} />} />
      </div>
    </section>
  )
}
