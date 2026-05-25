"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { useLang } from "@/lib/i18n"

export default function Hero() {
  const { t } = useLang()
  const [index, setIndex] = useState(0)
  const words = useMemo(() => t.hero.words, [t.hero.words])

  useEffect(() => {
    setIndex(0)
  }, [t])

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2200)
    return () => clearTimeout(id)
  }, [index, words])

  return (
    <section className="relative min-h-screen pt-16 flex items-center border-b border-line overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-16 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-center">

        <div>
          <h1 className="font-sans font-extrabold text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.05] tracking-tight text-white mb-8">
            {t.hero.before}

            <span className="block relative h-[1.1em] overflow-hidden mt-1">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  className="absolute inset-0 text-accent"
                  initial={{ opacity: 0, y: 60 }}
                  animate={
                    index === i
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: index > i ? -60 : 60 }
                  }
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>

            <span className="block">{t.hero.after}</span>
          </h1>

          <p className="text-white-mid text-lg leading-relaxed mb-12 max-w-lg font-light">
            {t.hero.subline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
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

        <div className="relative">
          <div className="relative w-full h-[260px] lg:h-auto lg:aspect-[3/4] overflow-hidden bg-surface-2">
            <Image src="/furkan.png" alt="Furkan Cetin" fill className="object-cover object-top" priority />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg/60 to-transparent pointer-events-none" />
          </div>
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-accent pointer-events-none" />
        </div>

      </div>
    </section>
  )
}
