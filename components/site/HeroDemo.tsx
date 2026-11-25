"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

export type Industry = { name: string; hours: number; tasks: string[] }
export type HeroDemoLabels = { forExample: string; title: string; example: string; badge: string; hours: string }

const TICK = 700
const FADE = 350
const SWAP_STEP = 8
const LAST_STEP = 9

/**
 * Hero mit animierter "Diese Woche für dich erledigt"-Karte.
 * Ablauf pro Branche: Aufgaben werden nacheinander abgehakt, dann zählt die
 * Stundenzahl hoch, kurz halten, ausblenden, nächste Branche.
 */
export default function HeroDemo({ labels, industries, top, bottom }: {
  labels: HeroDemoLabels
  industries: Industry[]
  top: ReactNode
  bottom: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const [reduced, setReduced] = useState(false)

  const ind = industries[idx]
  const running = visible && !reduced
  const taskCount = ind.tasks.length

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
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Taktgeber
  useEffect(() => {
    if (!running) return
    const id = setTimeout(() => setStep((s) => s + 1), step === SWAP_STEP ? FADE : TICK)
    return () => clearTimeout(id)
  }, [running, step])

  // Branche wechseln
  useEffect(() => {
    if (step < LAST_STEP) return
    setIdx((i) => (i + 1) % industries.length)
    setStep(0)
    setCount(0)
  }, [step, industries.length])

  // Zähler hochlaufen lassen, sobald alle Aufgaben abgehakt sind
  useEffect(() => {
    if (step !== taskCount + 1 || reduced) return
    const start = performance.now()
    const dur = 900
    let raf = 0
    const frame = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      setCount(Math.round(ind.hours * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [step, taskCount, ind.hours, reduced])

  const checked = reduced ? taskCount : Math.min(step, taskCount)
  const hours = reduced ? ind.hours : count
  const counting = reduced || step > taskCount
  const swapping = !reduced && step >= SWAP_STEP

  return (
    <div className="hero-grid" ref={ref}>
      <div>
        {top}
        <p className="hero-for">
          <span aria-hidden="true">
            {labels.forExample} <strong className={`hero-ind${swapping ? " is-out" : ""}`}>{ind.name}</strong>.
          </span>
          <span className="sr-only">{labels.forExample} {industries.map((i) => i.name).join(", ")}.</span>
        </p>
        {bottom}
      </div>

      <div className={`hero-demo${swapping ? " is-out" : ""}`} aria-hidden="true">
        <div className="hd-head">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
          <span className="hd-title">{labels.title}</span>
          <span className="hd-example">{labels.example}</span>
        </div>
        <ul className="hd-tasks">
          {ind.tasks.map((task, n) => (
            <li key={task} className={n < checked ? "done" : undefined}>
              <span className="hd-box">
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6.5l2.6 2.5L10 3.5" />
                </svg>
              </span>
              <span className="hd-text">{task}</span>
              <span className="hd-badge">{labels.badge}</span>
            </li>
          ))}
        </ul>
        <div className={`hd-foot${counting ? " is-on" : ""}`}>
          <span className="hd-num">{hours}</span>
          <span className="hd-label">{labels.hours}</span>
        </div>
      </div>
    </div>
  )
}
