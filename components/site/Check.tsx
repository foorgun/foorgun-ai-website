"use client"

import { useCallback, useState } from "react"
import { translations } from "@/lib/i18n"
import {
  CATEGORY_ORDER,
  DISPLAY_DOLLAR_CAP,
  DISPLAY_HOURS_CAP,
  estimate,
  getTopCategory,
  type Category,
} from "@/lib/checkQuestions"
import CalInline from "./CalInline"
import { EMAIL } from "./config"
import type { Lang } from "./i18n"

// KI-Check im v3-Stil. Fragen, Texte und Rechenlogik kommen unverändert
// aus lib/i18n.tsx und lib/checkQuestions.ts (geteilt mit /check).

const INTRO = {
  de: {
    title: "Wie viel Zeit ließe sich bei dir sparen?",
    lead: "Fünf kurze Fragen, eine grobe Schätzung. Dauert eine Minute.",
    restart: "Nochmal starten",
    email: "Per E-Mail schreiben",
  },
  en: {
    title: "How much time could you save?",
    lead: "Five quick questions, one rough estimate. Takes a minute.",
    restart: "Start over",
    email: "Send an email",
  },
}

const TOTAL = 5

export default function Check({ lang }: { lang: Lang }) {
  const t = translations[lang === "de" ? "DE" : "EN"].check
  const intro = INTRO[lang]
  const locale = lang === "de" ? "de-DE" : "en-US"
  const money = (v: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: lang === "de" ? "EUR" : "USD",
      maximumFractionDigits: 0,
    }).format(Math.round(Math.min(v, DISPLAY_DOLLAR_CAP) / 10) * 10) + (v > DISPLAY_DOLLAR_CAP ? "+" : "")
  const hours = (v: number) =>
    new Intl.NumberFormat(locale).format(Math.round(Math.min(v, DISPLAY_HOURS_CAP))) + (v > DISPLAY_HOURS_CAP ? "+" : "")

  const [step, setStep] = useState(1) // 1–5, 6 = Ergebnis
  const [team, setTeam] = useState<number | null>(null)
  const [cats, setCats] = useState<Category[]>([])
  const [hrs, setHrs] = useState<number | null>(null)
  const [handling, setHandling] = useState<number | null>(null)
  const [timeline, setTimeline] = useState<number | null>(null)

  const [calOpen, setCalOpen] = useState(false)
  const openCal = useCallback(() => setCalOpen(true), [])
  const est = estimate(team, cats, hrs, handling)
  const top = getTopCategory(cats)

  const reset = () => {
    setCalOpen(false); setStep(1); setTeam(null); setCats([]); setHrs(null); setHandling(null); setTimeline(null)
  }

  const single = (options: string[], value: number | null, pick: (i: number) => void, grid = false) => (
    <div className={`check-options${grid ? " grid" : ""}`}>
      {options.map((o, i) => (
        <button key={o} className={value === i ? "on" : ""} aria-pressed={value === i} onClick={() => { pick(i); setStep(step + 1) }}>
          {o}
        </button>
      ))}
    </div>
  )

  const questions: Record<number, { q: string; body: React.ReactNode }> = {
    1: { q: t.step1.question, body: single(t.step1.options, team, setTeam, true) },
    2: {
      q: t.step2.question,
      body: (
        <>
          <div className="check-options">
            {t.step2.options.map((o, i) => {
              const c = CATEGORY_ORDER[i]
              const on = cats.includes(c)
              return (
                <button key={o} className={`multi${on ? " on" : ""}`} aria-pressed={on}
                  onClick={() => setCats((p) => (on ? p.filter((x) => x !== c) : [...p, c]))}>
                  <span className="box" aria-hidden="true">{on ? "✓" : ""}</span>
                  {o}
                </button>
              )
            })}
          </div>
          <button className="btn check-continue" disabled={cats.length === 0} onClick={() => setStep(3)}>
            {t.step2.continueButton} →
          </button>
        </>
      ),
    },
    3: { q: t.step3.question, body: single(t.step3.options, hrs, setHrs, true) },
    4: { q: t.step4.question, body: single(t.step4.options, handling, setHandling) },
    5: { q: t.step5.question, body: single(t.step5.options, timeline, setTimeline) },
  }

  return (
    <section className={`rule check${calOpen ? " cal-open" : ""}`} id="ki-check">
      <div className="wrap split">
        <div>
          <h2>{intro.title}</h2>
          <p className="lead">{intro.lead}</p>
          {step <= TOTAL && (
            <div className="check-live" aria-live="polite">
              <span>{t.live.label}</span>
              <strong>~{money(est?.monthlyDollars ?? 0)}</strong>
            </div>
          )}
        </div>

        <div className="check-card">
          {step <= TOTAL ? (
            <div key={step} className="check-step">
              <div className="check-head">
                <div className="check-bars" aria-hidden="true">
                  {Array.from({ length: TOTAL }, (_, n) => <span key={n} className={n < step ? "on" : ""} />)}
                </div>
                <div className="check-meta">
                  <span>{t.progressLabel.replace("{current}", String(step)).replace("{total}", String(TOTAL))}</span>
                  {step > 1 && <button onClick={() => setStep(step - 1)}>← {t.backButton}</button>}
                </div>
              </div>
              <h3>{questions[step].q}</h3>
              {questions[step].body}
            </div>
          ) : (
            est && (
              <div className="check-step check-result">
                <h3>{t.result.headline}</h3>
                <div className="amount">~{money(est.monthlyDollars)}<small>{t.result.dollarSuffix}</small></div>
                <p className="hours">~{hours(est.monthlyHours)} {t.result.hoursSuffix}</p>
                {top && <p className="biggest">{t.result.opportunityLabel.replace("{category}", t.categories[top])}</p>}
                <p className="note">{t.result.disclaimer}</p>
                <p>{t.result.calIntro}</p>
                <div className="check-book">
                  <CalInline lang={lang} label={t.result.cta} onOpen={openCal} />
                </div>
                {!calOpen && <a className="btn ghost check-mail" href={`mailto:${EMAIL}`}>{intro.email}</a>}
                <button className="check-restart" onClick={reset}>↺ {intro.restart}</button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
