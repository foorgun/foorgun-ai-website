"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const testimonials = [
  {
    id: 1,
    name: "Soojin Joung",
    role: "CEO",
    company: "BAZZAAL",
    content:
      "Working with Furkan transformed how we manage our influencer campaigns. What used to take days now runs automatically.",
    rating: 5,
  },
  {
    id: 2,
    name: "Owner",
    role: "Founder",
    company: "ViUnlimited",
    content:
      "Furkan automated our entire content pipeline. Our team saves hours every week and the results speak for themselves.",
    rating: 5,
  },
  {
    id: 3,
    name: "Patrick Wings",
    role: "Owner",
    company: "Digital Marketing Services",
    content:
      "Exactly the kind of technical partner you want — delivers what he promises, no fluff.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  }

  return (
    <section ref={sectionRef} id="testimonials" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* ── Left: heading + dot nav ── */}
          <motion.div variants={item} className="flex flex-col justify-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              Testimonials
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight mb-6">
              What clients say
            </h2>
            <p className="text-white-mid font-light leading-relaxed mb-10 max-w-md">
              Real results from teams that decided to stop doing things manually.
            </p>

            {/* Dot navigation */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-8 bg-accent" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Right: animated card ── */}
          <motion.div variants={item} className="relative min-h-[320px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  x: activeIndex === i ? 0 : 80,
                  scale: activeIndex === i ? 1 : 0.96,
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === i ? 10 : 0 }}
              >
                <div className="bg-surface border border-line p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array(t.rating).fill(0).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white text-lg font-light leading-relaxed flex-1 mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <Separator className="mb-6" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-11 w-11 border border-line">
                      <AvatarFallback className="font-mono text-xs text-white-mid">
                        {t.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-sans font-semibold text-white text-sm">{t.name}</p>
                      <p className="font-mono text-xs text-white-muted mt-0.5">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative corners */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/5 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/5 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
