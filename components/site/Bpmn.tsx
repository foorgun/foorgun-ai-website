import type { Lang } from "./i18n"

// Einfaches BPMN-Beispiel: Anfrage → Angebot.
// Orange = läuft automatisch, schwarz = bleibt beim Team.

const T = {
  de: {
    caption: "Beispiel: von der Anfrage zum Angebot",
    start: ["Anfrage", "per Mail"],
    a: ["Anfrage auslesen,", "ins CRM eintragen"],
    gate: "Alles da?",
    yes: "ja",
    no: "nein",
    b: ["Angebot prüfen", "und freigeben"],
    c: ["Angebot als PDF", "verschicken"],
    d: ["Nach 3 Tagen", "erinnern"],
    e: ["Fehlende Infos", "nachfragen"],
    loop: "Antwort kommt",
    end: ["Angebot", "ist raus"],
    auto: "auto",
    legendAuto: "läuft automatisch",
    legendManual: "bleibt bei dir",
    hint: "Zum Ansehen seitlich wischen",
  },
  en: {
    caption: "Example: from enquiry to quote",
    start: ["Enquiry", "by email"],
    a: ["Read enquiry,", "add to CRM"],
    gate: "Complete?",
    yes: "yes",
    no: "no",
    b: ["Review and", "approve quote"],
    c: ["Send quote", "as PDF"],
    d: ["Follow up", "after 3 days"],
    e: ["Ask for", "missing info"],
    loop: "Reply arrives",
    end: ["Quote", "sent"],
    auto: "auto",
    legendAuto: "runs automatically",
    legendManual: "stays with your team",
    hint: "Swipe sideways to see it all",
  },
}

const W = 156
const H = 72
const Y = 84 // Oberkante der Aufgaben in der Hauptzeile

function Task({ x, y = Y, lines, auto, autoLabel }: { x: number; y?: number; lines: string[]; auto?: boolean; autoLabel: string }) {
  return (
    <g className={auto ? "task auto" : "task"}>
      <rect x={x} y={y} width={W} height={H} rx={12} />
      <text x={x + W / 2} y={y + H / 2 - 4} textAnchor="middle">
        <tspan x={x + W / 2}>{lines[0]}</tspan>
        <tspan x={x + W / 2} dy={18}>{lines[1]}</tspan>
      </text>
      {auto && (
        <g className="badge">
          <rect x={x + 10} y={y - 10} width={44} height={20} rx={10} />
          <text x={x + 32} y={y + 4} textAnchor="middle">{autoLabel}</text>
        </g>
      )}
    </g>
  )
}

export default function Bpmn({ lang }: { lang: Lang }) {
  const t = T[lang]
  const my = Y + H / 2 // Mittellinie = 120
  return (
    <figure className="bpmn">
      <figcaption>{t.caption}</figcaption>
      <div className="bpmn-scroll">
        <svg viewBox="0 0 1050 330" role="img" aria-label={t.caption}>
          <defs>
            <marker id="bpmn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" />
            </marker>
          </defs>

          {/* Start */}
          <circle className="event" cx={40} cy={my} r={18} />
          <text className="lbl" x={40} y={my + 42} textAnchor="middle">
            <tspan x={40}>{t.start[0]}</tspan>
            <tspan x={40} dy={16}>{t.start[1]}</tspan>
          </text>

          {/* Flüsse Hauptzeile */}
          <g className="flow-line">
            <path d={`M58 ${my}H88`} />
            <path d={`M246 ${my}H286`} />
            <path d={`M344 ${my}H382`} />
            <path d={`M540 ${my}H578`} />
            <path d={`M736 ${my}H774`} />
            <path d={`M932 ${my}H978`} />
            {/* nein-Zweig */}
            <path d={`M316 ${my + 28}V250H382`} />
            {/* Schleife zurück */}
            <path d={`M462 286V308H168V${Y + H + 2}`} />
          </g>

          <Task x={90} lines={t.a} auto autoLabel={t.auto} />

          {/* Gateway */}
          <g className="gateway">
            <path d={`M316 ${my - 28}L344 ${my}L316 ${my + 28}L288 ${my}z`} />
            <path className="x" d={`M308 ${my - 8}L324 ${my + 8}M324 ${my - 8}L308 ${my + 8}`} />
          </g>
          <text className="lbl strong" x={316} y={my - 40} textAnchor="middle">{t.gate}</text>
          <text className="lbl" x={352} y={my - 8}>{t.yes}</text>
          <text className="lbl" x={324} y={210}>{t.no}</text>

          <Task x={384} lines={t.b} autoLabel={t.auto} />
          <Task x={580} lines={t.c} auto autoLabel={t.auto} />
          <Task x={776} lines={t.d} auto autoLabel={t.auto} />
          <Task x={384} y={214} lines={t.e} auto autoLabel={t.auto} />
          <text className="lbl" x={176} y={300}>{t.loop}</text>

          {/* Ende */}
          <circle className="event end" cx={1000} cy={my} r={20} />
          <text className="lbl" x={1000} y={my + 44} textAnchor="middle">
            <tspan x={1000}>{t.end[0]}</tspan>
            <tspan x={1000} dy={16}>{t.end[1]}</tspan>
          </text>
        </svg>
      </div>
      <div className="bpmn-legend">
        <span><i className="auto" />{t.legendAuto}</span>
        <span><i />{t.legendManual}</span>
        <span className="bpmn-hint">{t.hint}</span>
      </div>
    </figure>
  )
}
