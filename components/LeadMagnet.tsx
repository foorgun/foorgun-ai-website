"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { SlidingNumber } from "@/components/ui/sliding-number"
import { useLang } from "@/lib/i18n"
import {
  CATEGORY_ORDER,
  DISPLAY_DOLLAR_CAP,
  DISPLAY_HOURS_CAP,
  estimate,
  getTopCategory,
  type Category,
} from "@/lib/checkQuestions"

const TOTAL_STEPS = 5

// Display-only cap: internal math stays uncapped, the UI shows e.g. "$50,000+".
function capDisplay(value: number, cap: number) {
  return { display: Math.min(value, cap), capped: value > cap }
}

// Renders a number with comma thousands-grouping where every digit is a SlidingNumber,
// so amounts animate digit-by-digit (e.g. 4,758). minDigits pads with leading zeros so
// every digit slot exists from the start and rolls up instead of popping in.
function AnimatedAmount({ value, minDigits = 1 }: { value: number; minDigits?: number }) {
  const rounded = Math.round(value)
  const digits = String(rounded).padStart(minDigits, "0").split("")

  return (
    <span className="inline-flex items-baseline tabular-nums">
      {digits.map((digit, i) => {
        const digitsFromRight = digits.length - 1 - i
        const needsComma = digitsFromRight > 0 && digitsFromRight % 3 === 0 && i > 0
        return (
          <span key={digits.length - i} className="inline-flex items-baseline">
            <SlidingNumber value={parseInt(digit, 10)} />
            {needsComma && <span>,</span>}
          </span>
        )
      })}
    </span>
  )
}

// Starts at 0 on mount, then flips to the target so SlidingNumber rolls up.
function useCountUp(target: number) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setValue(target))
    return () => cancelAnimationFrame(id)
  }, [target])
  return value
}

function ResultNumbers({
  dollars,
  hours,
  dollarSuffix,
  hoursSuffix,
}: {
  dollars: number
  hours: number
  dollarSuffix: string
  hoursSuffix: string
}) {
  const cappedDollars = capDisplay(dollars, DISPLAY_DOLLAR_CAP)
  const cappedHours = capDisplay(hours, DISPLAY_HOURS_CAP)
  const animatedDollars = useCountUp(cappedDollars.display)
  const animatedHours = useCountUp(cappedHours.display)

  return (
    <>
      <div className="mb-2 flex items-baseline justify-center font-sans font-extrabold text-5xl md:text-6xl text-accent tracking-tight">
        ~$
        <AnimatedAmount
          value={animatedDollars}
          minDigits={String(Math.round(cappedDollars.display)).length}
        />
        {cappedDollars.capped && <span>+</span>}
        <span className="font-sans font-semibold text-xl text-white-mid ml-1">{dollarSuffix}</span>
      </div>
      <div className="mb-8 flex items-baseline justify-center font-sans font-bold text-2xl text-white tracking-tight">
        ~
        <AnimatedAmount
          value={animatedHours}
          minDigits={String(Math.round(cappedHours.display)).length}
        />
        {cappedHours.capped && <span>+</span>}
        <span className="font-sans font-light text-base text-white-mid ml-2">{hoursSuffix}</span>
      </div>
    </>
  )
}

type Screen = 1 | 2 | 3 | 4 | 5 | "result"

const stepMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3 },
}

export default function LeadMagnet({ embedCal }: { embedCal?: React.ReactNode }) {
  const { t } = useLang()
  const [screen, setScreen] = useState<Screen>(1)
  const [teamSizeIndex, setTeamSizeIndex] = useState<number | null>(null)
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [hoursIndex, setHoursIndex] = useState<number | null>(null)
  const [handlingIndex, setHandlingIndex] = useState<number | null>(null)
  const [timelineIndex, setTimelineIndex] = useState<number | null>(null)

  const liveEstimate = estimate(teamSizeIndex, selectedCategories, hoursIndex, handlingIndex)
  const topCategory = getTopCategory(selectedCategories)

  function toggleCategory(category: Category) {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const showLiveBar = screen !== "result"

  function StepHeader({ step }: { step: number }) {
    return (
      <div className="flex items-center gap-4 mb-4">
        {step > 1 && (
          <button
            onClick={() => setScreen((step - 1) as Screen)}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-white-muted hover:text-white uppercase tracking-widest transition-colors duration-150"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.check.backButton}
          </button>
        )}
        <p className="font-mono text-xs text-accent uppercase tracking-widest">
          {t.check.progressLabel
            .replace("{current}", String(step))
            .replace("{total}", String(TOTAL_STEPS))}
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-surface border border-line">
        {showLiveBar && (
          <div className="border-b border-line px-6 py-4 flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-white-muted uppercase tracking-widest">
              {t.check.live.label}
            </span>
            <span className="font-sans font-bold text-xl text-accent flex items-baseline">
              ~$
              <AnimatedAmount
                value={Math.min(liveEstimate?.monthlyDollars ?? 0, DISPLAY_DOLLAR_CAP)}
              />
              {(liveEstimate?.monthlyDollars ?? 0) > DISPLAY_DOLLAR_CAP && <span>+</span>}
            </span>
          </div>
        )}

        <div className="p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {screen === 1 && (
              <motion.div key="step1" {...stepMotion}>
                <StepHeader step={1} />
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight mb-6">
                  {t.check.step1.question}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {t.check.step1.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setTeamSizeIndex(i)
                        setScreen(2)
                      }}
                      className={`border px-5 py-4 text-white text-sm font-light transition-colors duration-150 ${
                        teamSizeIndex === i
                          ? "border-accent/60 bg-accent/10"
                          : "border-line bg-bg hover:bg-surface-2 hover:border-accent/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {screen === 2 && (
              <motion.div key="step2" {...stepMotion}>
                <StepHeader step={2} />
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight mb-6">
                  {t.check.step2.question}
                </h3>
                <div className="flex flex-col gap-3 mb-6">
                  {t.check.step2.options.map((option, i) => {
                    const category = CATEGORY_ORDER[i]
                    const selected = selectedCategories.includes(category)
                    return (
                      <button
                        key={i}
                        onClick={() => toggleCategory(category)}
                        className={`flex items-center gap-3 text-left border px-5 py-4 text-sm font-light transition-colors duration-150 ${
                          selected
                            ? "border-accent/60 bg-accent/10 text-white"
                            : "border-line bg-bg hover:bg-surface-2 text-white-mid"
                        }`}
                      >
                        <span
                          className={`w-5 h-5 shrink-0 border flex items-center justify-center transition-colors duration-150 ${
                            selected ? "bg-accent border-accent" : "border-line"
                          }`}
                        >
                          {selected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                        </span>
                        {option}
                      </button>
                    )
                  })}
                </div>
                <button
                  onClick={() => setScreen(3)}
                  disabled={selectedCategories.length === 0}
                  className="inline-flex items-center gap-2 bg-accent text-white font-mono text-sm font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {t.check.step2.continueButton}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {screen === 3 && (
              <motion.div key="step3" {...stepMotion}>
                <StepHeader step={3} />
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight mb-6">
                  {t.check.step3.question}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {t.check.step3.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setHoursIndex(i)
                        setScreen(4)
                      }}
                      className={`border px-5 py-4 text-white text-sm font-light transition-colors duration-150 ${
                        hoursIndex === i
                          ? "border-accent/60 bg-accent/10"
                          : "border-line bg-bg hover:bg-surface-2 hover:border-accent/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {screen === 4 && (
              <motion.div key="step4" {...stepMotion}>
                <StepHeader step={4} />
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight mb-6">
                  {t.check.step4.question}
                </h3>
                <div className="flex flex-col gap-3">
                  {t.check.step4.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setHandlingIndex(i)
                        setScreen(5)
                      }}
                      className={`text-left border px-5 py-4 text-white text-sm font-light transition-colors duration-150 ${
                        handlingIndex === i
                          ? "border-accent/60 bg-accent/10"
                          : "border-line bg-bg hover:bg-surface-2 hover:border-accent/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {screen === 5 && (
              <motion.div key="step5" {...stepMotion}>
                <StepHeader step={5} />
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight mb-6">
                  {t.check.step5.question}
                </h3>
                <div className="flex flex-col gap-3">
                  {t.check.step5.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setTimelineIndex(i)
                        setScreen("result")
                      }}
                      className={`text-left border px-5 py-4 text-white text-sm font-light transition-colors duration-150 ${
                        timelineIndex === i
                          ? "border-accent/60 bg-accent/10"
                          : "border-line bg-bg hover:bg-surface-2 hover:border-accent/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {screen === "result" && liveEstimate && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-tight mb-8">
                  {t.check.result.headline}
                </h3>

                <ResultNumbers
                  dollars={liveEstimate.monthlyDollars}
                  hours={liveEstimate.monthlyHours}
                  dollarSuffix={t.check.result.dollarSuffix}
                  hoursSuffix={t.check.result.hoursSuffix}
                />

                {topCategory && (
                  <p className="text-white font-light mb-4">
                    {t.check.result.opportunityLabel.replace(
                      "{category}",
                      t.check.categories[topCategory]
                    )}
                  </p>
                )}

                <p className="text-white-muted text-xs leading-relaxed max-w-sm mx-auto mb-10">
                  {t.check.result.disclaimer}
                </p>

                <p className="text-white-mid font-light mb-6">{t.check.result.calIntro}</p>

                {embedCal}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
