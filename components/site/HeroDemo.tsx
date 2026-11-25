"use client"

import { useEffect, useRef, useState } from "react"

export type DemoTask = { icon: string; app: string; label: string; minutes: number }
export type HeroDemoLabels = {
  /** Satzrest hinter dem Zähler, z. B. "zurück diese Woche" */
  title: string
  /** Fußzeile unter der Karte, kennzeichnet das Beispiel */
  example: string
  badge: string
  hour: string
  hours: string
  minutes: string
  /** Statischer Text für Screenreader, die Karte selbst ist Deko. */
  alt: string
}

const STEP_MS = 1000
const FIRST_MS = 900
const HOLD_MS = 2600
const FADE_MS = 400

function fmt(total: number, l: HeroDemoLabels) {
  const h = Math.floor(total / 60)
  const m = total % 60
  if (h === 0) return `${m} ${l.minutes}`
  return `${h} ${h === 1 ? l.hour : l.hours} ${m} ${l.minutes}`
}

/**
 * Hero-Karte "Zeit zurück diese Woche": Aufgaben werden nacheinander
 * abgehakt, das App-Logo wird zum Haken, der Zähler oben rollt hoch.
 * Nach der letzten Aufgabe kurzer Abschlussmoment, dann weich von vorn.
 */
export default function HeroDemo({ labels, tasks }: { labels: HeroDemoLabels; tasks: DemoTask[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const n = tasks.length
  const total = tasks.reduce((s, t) => s + t.minutes, 0)

  // step 0..n = erledigte Aufgaben, n+1 = Abschlussmoment, n+2 = Ausblenden
  const [step, setStep] = useState(0)
  const [shown, setShown] = useState(0)
  const [visible, setVisible] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !("IntersectionObserver" in window)) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const running = visible && !reduced

  // Taktgeber
  useEffect(() => {
    if (!running) return
    const delay = step === 0 ? FIRST_MS : step === n + 1 ? HOLD_MS : step === n + 2 ? FADE_MS : STEP_MS
    const id = setTimeout(() => setStep((s) => (s >= n + 2 ? 0 : s + 1)), delay)
    return () => clearTimeout(id)
  }, [running, step, n])

  // Zähler rollt zum neuen Zielwert
  const done = Math.min(step, n)
  const target = tasks.slice(0, done).reduce((s, t) => s + t.minutes, 0)
  useEffect(() => {
    if (reduced) return
    if (target === 0) { setShown(0); return }
    let raf = 0
    let from = 0
    const start = performance.now() + 380
    const dur = 650
    setShown((v) => { from = v; return v })
    const frame = (now: number) => {
      const p = Math.max(0, Math.min(1, (now - start) / dur))
      setShown(Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [target, reduced])

  const count = reduced ? total : shown
  const doneCount = reduced ? n : done
  const finished = reduced || step >= n + 1
  const out = !reduced && step === n + 2

  return (
    <div ref={ref} className="hero-card-wrap">
      <p className="sr-only">{labels.alt}</p>
      <div className={`hero-demo${finished ? " is-done" : ""}${out ? " is-out" : ""}`} aria-hidden="true">
        <p className="hd-sum">
          <span className="hd-num">{fmt(count, labels)}</span>
          <span className="hd-sumtext">{labels.title}</span>
        </p>

        <ul className="hd-tasks">
          {tasks.map((t, i) => (
            <li key={t.app} className={i < doneCount ? "done" : undefined}>
              <span className="hd-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.icon} alt="" width="22" height="22" />
                <svg className="hd-check" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8.5l3.3 3.2L13 4.5" />
                </svg>
              </span>
              <span className="hd-text"><span>{t.label}</span></span>
              <span className="hd-slot">
                <span className="hd-cost">{t.minutes} {labels.minutes}</span>
                <span className="hd-badge">{labels.badge}</span>
                <span className="hd-gain">+{t.minutes} {labels.minutes}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="hd-caption" aria-hidden="true">{labels.example}</p>
    </div>
  )
}
