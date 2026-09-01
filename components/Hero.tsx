"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { useLang } from "@/lib/i18n"

export default function Hero() {
  const { t } = useLang()
  const words = t.hero.words
  const [index, setIndex] = useState(0)

  useEffect(() => { setIndex(0) }, [words])

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2200)
    return () => clearTimeout(id)
  }, [index, words])

  return (
    <>
      {/* ── Hero section — exactly one screen tall on mobile ── */}
      <section className="relative h-auto lg:min-h-screen lg:h-auto pt-16 lg:pt-0 flex items-center border-b border-line overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-8 lg:py-24 w-full">

          {/* Mobile: Image first, then text */}
          <div className="lg:hidden mb-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-2 rounded-lg">
              <Image src="/furkan.png" alt="Furkan Cetin" fill className="object-cover object-top" priority />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg/60 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Desktop: Two-column grid, Mobile: single column */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-center">

            {/* Text */}
            <div>
              <h1 className="font-sans font-extrabold text-[7.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.25] tracking-tight text-white mb-6">
                <span className="block">{t.hero.line1}</span>
                <span className="block mt-3 sm:mt-4">
                  {t.hero.line2Before}
                  <span className="relative inline-grid max-w-full overflow-hidden align-bottom pb-2 -mb-2">
                    {words.map((word, i) => (
                      <motion.span
                        key={word}
                        className="col-start-1 row-start-1 text-accent leading-[1.3]"
                        initial={{ opacity: 0, y: "100%" }}
                        animate={
                          index === i
                            ? { opacity: 1, y: "0%" }
                            : { opacity: 0, y: index > i ? "-100%" : "100%" }
                        }
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                      >
                        {word}
                        {t.hero.line2After}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </h1>

              <p className="text-white-mid text-base sm:text-lg leading-relaxed mb-10 max-w-lg font-light">
                {t.hero.subline}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://cal.eu/foorgun/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white font-mono text-sm font-medium px-7 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
                >
                  <Phone className="w-4 h-4" />
                  {t.hero.cta}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 font-mono text-sm text-white-mid hover:text-white transition-colors duration-150"
                >
                  {t.hero.secondary}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Desktop image — right column only */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-2">
                <Image src="/furkan.png" alt="Furkan Cetin" fill className="object-cover object-top" priority />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg/60 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-accent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
