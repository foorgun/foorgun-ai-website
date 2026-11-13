import type { Metadata } from "next"

export type Lang = "de" | "en"

/** Pfad in der jeweiligen Sprache: Englisch ohne Präfix (Standard), Deutsch unter /de */
export function href(lang: Lang, path: string) {
  if (lang === "en") return path
  return path === "/" ? "/de" : `/de${path}`
}

/** Gegenstück eines Pfads in der anderen Sprache */
export function counterpart(pathname: string): { lang: Lang; path: string } {
  if (pathname === "/de" || pathname.startsWith("/de/")) {
    return { lang: "en", path: pathname.slice(3) || "/" }
  }
  return { lang: "de", path: href("de", pathname) }
}

export function meta(lang: Lang, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: href(lang, path),
      languages: { de: href("de", path), en: href("en", path), "x-default": href("en", path) },
    },
    openGraph: { title, description, url: href(lang, path), locale: lang === "de" ? "de_DE" : "en_US", type: "website", siteName: "foorgun.ai", images: [{ url: `/og-image/${lang}`, width: 1200, height: 630 }] },
  }
}

export const UI = {
  de: {
    nav: [
      { path: "/automation", label: "Automation" },
      { path: "/software", label: "Software & Plattformen" },
      { path: "/ki-coaching", label: "KI-Coaching" },
    ],
    blog: "Blog",
    menu: "Menü",
    book: "Gespräch buchen",
    switchLabel: "English version",
    testimonials: "Was Kunden sagen",
    logos: "Trusted by teams",
    ctaPrimary: "15-Min-Gespräch buchen",
    ctaWhatsApp: "WhatsApp schreiben",
    ctaEmail: "Per E-Mail schreiben",
    faq: "Häufige Fragen",
    fixedPrice: "Festpreis nach kostenlosem Erstgespräch.",
    footer: { check: "KI-Check", imprint: "Impressum", privacy: "Datenschutz", process: "Prozessmanagement", fde: "Forward Deployed Engineering", blog: "Blog", websites: "Websites mit Online-Buchung" },
  },
  en: {
    nav: [
      { path: "/automation", label: "Automation" },
      { path: "/software", label: "Software & platforms" },
      { path: "/ki-coaching", label: "AI coaching" },
    ],
    blog: "Blog",
    menu: "Menu",
    book: "Book a call",
    switchLabel: "Deutsche Version",
    testimonials: "What clients say",
    logos: "Trusted by teams",
    ctaPrimary: "Book a 15-min call",
    ctaWhatsApp: "Message on WhatsApp",
    ctaEmail: "Send an email",
    faq: "Frequently asked questions",
    fixedPrice: "Fixed price after a free intro call.",
    footer: { check: "AI check", imprint: "Legal notice", privacy: "Privacy policy", process: "Process management", fde: "Forward deployed engineering", blog: "Blog", websites: "Websites with online booking" },
  },
} as const
