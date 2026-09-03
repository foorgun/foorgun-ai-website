"use client"

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react"

export type Consent = "all" | "necessary"

const STORAGE_KEY = "cookieConsent"

type ConsentContextValue = {
  /** null = no decision stored yet */
  consent: Consent | null
  /** false until localStorage has been read on the client */
  ready: boolean
  /** whether the banner should currently be visible */
  bannerOpen: boolean
  decide: (value: Consent) => void
  openSettings: () => void
}

const ConsentContext = createContext<ConsentContextValue>({
  consent: null,
  ready: false,
  bannerOpen: false,
  decide: () => {},
  openSettings: () => {},
})

function read(): Consent | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    return v === "all" || v === "necessary" ? v : null
  } catch {
    // private mode or storage disabled — behave as if undecided
    return null
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent | null>(null)
  const [ready, setReady] = useState(false)
  const [reopened, setReopened] = useState(false)

  // Read on the client only, so server and first client render match.
  useEffect(() => {
    setConsent(read())
    setReady(true)
  }, [])

  const decide = useCallback((value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // storage unavailable — keep the choice for this session at least
    }
    setConsent(value)
    setReopened(false)
  }, [])

  const openSettings = useCallback(() => setReopened(true), [])

  const bannerOpen = ready && (consent === null || reopened)

  return (
    <ConsentContext.Provider value={{ consent, ready, bannerOpen, decide, openSettings }}>
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  return useContext(ConsentContext)
}
