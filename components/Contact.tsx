"use client"

import { useLang } from "@/lib/i18n"

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="border-b border-line">
      <div className="max-w-2xl mx-auto px-6 py-16 lg:py-24 text-center">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-5">{t.contact.eyebrow}</p>
        <h2 className="font-sans font-bold text-5xl md:text-6xl leading-[1.0] tracking-tight text-white mb-8">
          {t.contact.headlinePre}
          <em className="not-italic text-accent">{t.contact.headlineAccent}</em>
        </h2>
        <p className="text-white-mid leading-relaxed mb-12 font-light text-lg">{t.contact.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://cal.eu/foorgun/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-mono text-sm font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
          >
            {t.contact.cta}
          </a>
          <a
            href="mailto:hello@foorgun.com"
            className="inline-flex items-center gap-2 border border-line text-white-mid font-mono text-sm px-8 py-4 hover:border-white/20 hover:text-white transition-colors duration-150"
          >
            hello@foorgun.com
          </a>
        </div>
      </div>
    </section>
  )
}
