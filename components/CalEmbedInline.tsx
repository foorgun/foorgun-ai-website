"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useConsent } from "@/lib/consent"
import { useLang } from "@/lib/i18n"

const CAL_ORIGIN = "https://cal.eu"
const CAL_LINK = "foorgun/15min"
const CAL_URL = `${CAL_ORIGIN}/${CAL_LINK}`
const NAMESPACE = "15min"
const FALLBACK_TIMEOUT_MS = 8000

/* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
declare global {
  interface Window {
    Cal?: any
  }
}

// Official Cal.com embed loader snippet (works for cal.eu — same open-source embed API).
function loadCalSnippet() {
  ;(function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar)
    }
    const d = C.document
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal
        const ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement("script")).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments)
          }
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ["initNamespace", namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
  })(window, `${CAL_ORIGIN}/embed/embed.js`, "init")
}

export default function CalEmbedInline({ ctaLabel }: { ctaLabel: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading")
  const { consent, ready } = useConsent()
  const { t } = useLang()

  // Loaded automatically only with full consent. Otherwise the visitor has to
  // ask for it explicitly, which counts as consent for this single case.
  const [loadedByClick, setLoadedByClick] = useState(false)
  const shouldLoad = ready && (consent === "all" || loadedByClick)

  useEffect(() => {
    if (!shouldLoad) return
    let cancelled = false

    const fallbackTimer = setTimeout(() => {
      if (cancelled) return
      const hasIframe = containerRef.current?.querySelector("iframe")
      if (!hasIframe) setStatus("failed")
    }, FALLBACK_TIMEOUT_MS)

    try {
      loadCalSnippet()
      window.Cal("init", NAMESPACE, { origin: CAL_ORIGIN })
      window.Cal.ns[NAMESPACE]("inline", {
        elementOrSelector: containerRef.current,
        calLink: CAL_LINK,
        layout: "month_view",
        config: { theme: "dark" },
      })
      window.Cal.ns[NAMESPACE]("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#C4521A" },
        },
        hideEventTypeDetails: false,
      })
      window.Cal.ns[NAMESPACE]("on", {
        action: "linkReady",
        callback: () => {
          if (!cancelled) {
            clearTimeout(fallbackTimer)
            setStatus("ready")
          }
        },
      })
      window.Cal.ns[NAMESPACE]("on", {
        action: "linkFailed",
        callback: () => {
          if (!cancelled) setStatus("failed")
        },
      })
    } catch {
      setStatus("failed")
    }

    return () => {
      cancelled = true
      clearTimeout(fallbackTimer)
    }
  }, [shouldLoad])

  if (!shouldLoad) {
    // Nothing is requested from Cal.com until this button is pressed.
    return (
      <div className="w-full border border-line bg-surface p-8 flex flex-col items-start gap-5">
        <p className="text-white-mid font-light text-sm leading-relaxed">
          {t.cookies.calBlockedText}
        </p>
        <button
          onClick={() => setLoadedByClick(true)}
          className="inline-flex items-center gap-2 bg-accent text-white font-mono text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-150"
        >
          {t.cookies.calLoadButton}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  if (status === "failed") {
    return (
      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-white font-mono text-sm font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
    )
  }

  return (
    <div className="w-full">
      {status === "loading" && (
        <p className="font-mono text-xs text-white-muted text-center py-8">…</p>
      )}
      <div ref={containerRef} className="w-full min-h-[500px] [&_iframe]:bg-transparent" />
    </div>
  )
}
