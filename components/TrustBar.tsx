"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLang } from "@/lib/i18n"

const LOGOS = [
  { name: "BAZZAAL", src: "/logos/bazzaal.png" },
  { name: "ViUnlimited", src: "/logos/viunlimited.png" },
  { name: "ABM Becker & Cetin", src: "/logos/abm-becker-cetin.png" },
  { name: "Patrick Wings", src: "/logos/patrick-wings.png" },
]

export default function TrustBar() {
  const { t } = useLang()

  return (
    <motion.section
      className="border-b border-line"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
        <p className="font-sans font-bold text-3xl md:text-4xl text-white tracking-tight text-center md:text-left shrink-0">
          {t.trust.copy}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-80">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="relative h-8 w-24">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96px, 96px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
