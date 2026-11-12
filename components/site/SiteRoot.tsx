import type { Metadata } from "next"
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import type { ReactNode } from "react"
import { ConsentProvider } from "@/lib/consent"
import JsonLd, { orgSchema } from "./JsonLd"
import type { Lang } from "./i18n"
import "../../app/globals.css"
import "../../app/site.css"

const display = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], weight: ["600", "700"], variable: "--font-display" })
const body = Instrument_Sans({ subsets: ["latin", "latin-ext"], weight: ["400", "600"], variable: "--font-body" })

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://foorgun.ai"),
  title: "foorgun.ai",
  twitter: { card: "summary_large_image" },
}

/** Root-Layout für die neuen Seiten – je Sprache mit korrektem <html lang>. */
export default function SiteRoot({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang}>
      <body className={`v3-body ${display.variable} ${body.variable}`}>
        <JsonLd data={orgSchema(lang)} />
        <ConsentProvider>
          <div className="v3">{children}</div>
        </ConsentProvider>
        <Analytics />
      </body>
    </html>
  )
}
