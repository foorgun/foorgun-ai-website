"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useLang } from "@/lib/i18n"

export default function Testimonials() {
  const { t } = useLang()
  const testimonials = t.testimonials.items
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => { if (isInView) controls.start("visible") }, [isInView, controls])

  useEffect(() => {
    const id = setInterval(() => setActiveIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }
  const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } }

  return (
    <section ref={sectionRef} id="testimonials" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <motion.div initial="hidden" animate={controls} variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div variants={item} className="flex flex-col justify-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{t.testimonials.eyebrow}</p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight mb-6">{t.testimonials.title}</h2>
            <p className="text-white-mid font-light leading-relaxed mb-10 max-w-md">{t.testimonials.subline}</p>

            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-accent" : "w-2 bg-white/20"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="relative min-h-[320px]">
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} className="absolute inset-0"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: activeIndex === i ? 1 : 0, x: activeIndex === i ? 0 : 80, scale: activeIndex === i ? 1 : 0.96 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === i ? 10 : 0 }}
              >
                <div className="bg-surface border border-line p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {Array(testimonial.rating).fill(0).map((_, si) => <Star key={si} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-white text-lg font-light leading-relaxed flex-1 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                  <Separator className="mb-6" />
                  <div className="flex items-center gap-4">
                    <Avatar className="h-11 w-11 border border-line">
                      <AvatarFallback className="font-mono text-xs text-white-mid">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-sans font-semibold text-white text-sm">{testimonial.name}</p>
                      <p className="font-mono text-xs text-white-muted mt-0.5">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/5 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/5 pointer-events-none" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
