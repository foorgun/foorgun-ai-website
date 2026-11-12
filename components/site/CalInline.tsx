"use client"

import { useEffect, useRef, useState } from "react"
import { CAL_LINK, CAL_ORIGIN, loadCalSnippet } from "@/components/CalEmbedInline"
import { useConsent } from "@/lib/consent"
import { translations } from "@/lib/i18n"
import { CALL } from "./config"
import type { Lang } from "./i18n"

// Cal.com-Kalender direkt auf der Seite (heller v3-Stil).
// Geladen wird erst nach Klick – oder automatisch, wenn bereits "alle Cookies" erlaubt sind.
const FALLBACK_MS = 8000

export default function CalInline({ lang, label, onOpen, ns = "v3check" }: { lang: Lang; label: string; onOpen?: () => void; ns?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { consent, ready } = useConsent()
  const [clicked, setClicked] = useState(false)
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading")
  const open = ready && (consent === "all" || clicked)
  const c = translations[lang === "de" ? "DE" : "EN"].cookies

  useEffect(() => {
    if (open) onOpen?.()
  }, [open, onOpen])

  useEffect(() => {
    if (!open) return
    let cancelled = false
    const timer = setTimeout(() => {
      if (!cancelled && !ref.current?.querySelector("iframe")) setStatus("failed")
    }, FALLBACK_MS)
    try {
      loadCalSnippet()
      window.Cal("init", ns, { origin: CAL_ORIGIN })
      const cal = window.Cal.ns[ns]
      cal("inline", { elementOrSelector: ref.current, calLink: CAL_LINK, layout: "month_view", config: { theme: "light" } })
      cal("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#0C0C0C" } }, hideEventTypeDetails: false })
      cal("on", { action: "linkReady", callback: () => { if (!cancelled) { clearTimeout(timer); setStatus("ready") } } })
      cal("on", { action: "linkFailed", callback: () => { if (!cancelled) setStatus("failed") } })
    } catch {
      setStatus("failed")
    }
    return () => { cancelled = true; clearTimeout(timer) }
  }, [open, ns])

  if (!open) {
    return (
      <>
        <button className="btn" onClick={() => setClicked(true)}>{label}</button>
        <p className="cal-note">{c.calBlockedText}</p>
      </>
    )
  }

  if (status === "failed") return <a className="btn" href={CALL} data-direct>{label}</a>

  return (
    <div className="cal-inline">
      {status === "loading" && <p className="cal-loading">…</p>}
      <div ref={ref} />
    </div>
  )
}
