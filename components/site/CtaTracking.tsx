"use client"

import { track } from "@vercel/analytics"
import { useEffect } from "react"
import { CALL } from "./config"

// Zählt Klicks auf Buchungslinks (CALL) nach Position auf der Seite.
// Sendet nur Ort und Sprache, keine personenbezogenen Daten.
const PLACES: [string, string][] = [
  [".hero", "hero"],
  [".post-cta", "blog"],
  [".cta", "closing"],
  [".about", "about"],
  [".check", "check"],
  [".top", "header"],
]

export default function CtaTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a")
      if (!a || !a.href.startsWith(CALL)) return
      const place = PLACES.find(([sel]) => a.closest(sel))?.[1] ?? "other"
      try {
        track("cta_click", { place, lang: document.documentElement.lang })
      } catch {}
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])
  return null
}
