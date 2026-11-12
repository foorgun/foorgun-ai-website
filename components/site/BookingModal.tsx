"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import CalInline from "./CalInline"
import { CALL } from "./config"
import type { Lang } from "./i18n"

// Fängt Klicks auf alle Buchungslinks (CALL) ab und öffnet den Kalender
// in einem Fenster auf derselben Seite statt auf cal.eu.
const T = {
  de: { title: "Kostenloses Gespräch buchen", sub: "15 Minuten, unverbindlich, per Video.", load: "Kalender laden", close: "Schließen" },
  en: { title: "Book a free call", sub: "15 minutes, no obligation, via video.", load: "Load calendar", close: "Close" },
}

export default function BookingModal({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false) // Kalender nach erstem Öffnen behalten
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const t = T[lang]

  const close = useCallback(() => {
    setOpen(false)
    lastFocus.current?.focus()
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement).closest?.("a")
      if (!a || !a.href.startsWith(CALL) || a.hasAttribute("data-direct")) return
      e.preventDefault()
      lastFocus.current = a
      setMounted(true)
      setOpen(true)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, close])

  if (!mounted) return null

  return (
    <div className={`booking${open ? " open" : ""}`} aria-hidden={!open}>
      <div className="booking-backdrop" onClick={close} />
      <div className="booking-panel" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <div className="booking-head">
          <div>
            <h2 id="booking-title">{t.title}</h2>
            <p>{t.sub}</p>
          </div>
          <button ref={closeRef} className="booking-close" onClick={close} aria-label={t.close}>×</button>
        </div>
        <div className="booking-body">
          <CalInline lang={lang} label={t.load} ns="v3modal" />
        </div>
      </div>
    </div>
  )
}
