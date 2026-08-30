"use client"

import { PhoneCall, Map, Settings2, Wrench, Activity, Rocket } from "lucide-react"
import { useLang } from "@/lib/i18n"

const ICONS = [
  <PhoneCall key="phonecall" width="18" height="18" strokeWidth={1.8} />,
  <Map       key="map"       width="18" height="18" strokeWidth={1.8} />,
  <Settings2 key="settings2" width="18" height="18" strokeWidth={1.8} />,
  <Wrench    key="wrench"    width="18" height="18" strokeWidth={1.8} />,
  <Activity  key="activity"  width="18" height="18" strokeWidth={1.8} />,
  <Rocket    key="rocket"    width="18" height="18" strokeWidth={1.8} />,
]

export default function Process() {
  const { t } = useLang()

  return (
    <section id="process" className="border-b border-line">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center mb-16">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-5">{t.process.eyebrow}</p>
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">{t.process.title}</h2>
        <p className="text-white-mid font-light">{t.process.subline}</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative">
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-accent/25"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6 md:gap-10">
            {t.process.steps.map((s, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={i}
                  className="relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[1fr_2.5rem_1fr] gap-x-4 md:gap-x-8 items-center"
                >
                  <div className="col-start-1 md:col-start-2 flex justify-start md:justify-center">
                    <div className="w-10 h-10 rounded-full bg-accent text-white font-mono text-sm flex items-center justify-center shrink-0 z-10">
                      {i + 1}
                    </div>
                  </div>

                  <div className={`col-start-2 md:row-start-1 ${isEven ? "md:col-start-1" : "md:col-start-3"}`}>
                    <div className="bg-surface border border-line p-5">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 flex items-center justify-center bg-accent/10 text-accent border border-accent/20 shrink-0">
                          {ICONS[i]}
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-white">{s.title}</h3>
                      </div>
                      <p className="text-white-mid text-sm leading-relaxed font-light">{s.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
