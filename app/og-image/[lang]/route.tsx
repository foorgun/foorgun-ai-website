import { ogImage } from "@/components/site/og"

// Allgemeines Vorschaubild je Sprache (für alle Seiten ohne eigenes Bild)
const T = {
  de: { title: "Bau ein Unternehmen, das für dich arbeitet.", kicker: "Intelligent Automation für Unternehmen" },
  en: { title: "Build a business that works for you.", kicker: "Intelligent automation for businesses" },
}

export const dynamicParams = false
export function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }]
}

export function GET(_req: Request, { params }: { params: { lang: "de" | "en" } }) {
  return ogImage(T[params.lang])
}
