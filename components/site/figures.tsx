import type { ReactNode } from "react"
import Bpmn from "./Bpmn"
import type { Lang } from "./i18n"

/*
  Grafiken für Artikel. Im Markdown einfach eine eigene Zeile:
    [[figure:bpmn-events]]
  Verfügbare Namen: siehe FIGURES ganz unten.
*/

const W = 140 // Breite einer Aufgabe
const H = 60 // Höhe einer Aufgabe

function Diagram({ caption, viewBox, minWidth, children, id }: { caption: string; viewBox: string; minWidth?: number; children: ReactNode; id: string }) {
  return (
    <figure className="bpmn diagram">
      <figcaption>{caption}</figcaption>
      <div className="bpmn-scroll">
        <svg viewBox={viewBox} role="img" aria-label={caption} style={minWidth ? { minWidth } : undefined}>
          <defs>
            <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" />
            </marker>
          </defs>
          {children}
        </svg>
      </div>
    </figure>
  )
}

const Arrow = ({ d, m }: { d: string; m: string }) => <path className="arrow" d={d} markerEnd={`url(#${m})`} />

function Lines({ x, y, lines, cls = "" }: { x: number; y: number; lines: string[]; cls?: string }) {
  return (
    <text className={cls} x={x} y={y} textAnchor="middle">
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 17}>{l}</tspan>
      ))}
    </text>
  )
}

function Task({ x, y, lines, kind }: { x: number; y: number; lines: string[]; kind?: "user" | "service" }) {
  const cy = y + H / 2 - (lines.length - 1) * 8.5 + 5 + (kind ? 8 : 0) // mit Symbol etwas tiefer
  return (
    <g className={kind === "service" ? "task auto" : "task"}>
      <rect x={x} y={y} width={W} height={H} rx={10} />
      <Lines x={x + W / 2} y={cy} lines={lines} />
      {kind === "user" && (
        <g className="icon" transform={`translate(${x + 8} ${y + 7})`}>
          <circle cx={7} cy={5} r={4} />
          <path d="M0 16c0-4 3-6 7-6s7 2 7 6z" />
        </g>
      )}
      {kind === "service" && (
        <g className="icon gear" transform={`translate(${x + 15} ${y + 14})`}>
          <path d="M0-8V-5M0 5V8M-8 0H-5M5 0H8M-5.7-5.7-3.5-3.5M3.5 3.5 5.7 5.7M-5.7 5.7-3.5 3.5M3.5-3.5 5.7-5.7" />
          <circle r={4.5} />
        </g>
      )}
    </g>
  )
}

const Event = ({ cx, cy, end }: { cx: number; cy: number; end?: boolean }) => (
  <circle className={end ? "event end" : "event"} cx={cx} cy={cy} r={end ? 18 : 17} />
)

function Gateway({ cx, cy, kind = "x" }: { cx: number; cy: number; kind?: "x" | "plus" }) {
  return (
    <g className="gateway">
      <path d={`M${cx} ${cy - 26}L${cx + 26} ${cy}L${cx} ${cy + 26}L${cx - 26} ${cy}z`} />
      {kind === "x" ? (
        <path className="x" d={`M${cx - 8} ${cy - 8}L${cx + 8} ${cy + 8}M${cx + 8} ${cy - 8}L${cx - 8} ${cy + 8}`} />
      ) : (
        <path className="x" d={`M${cx} ${cy - 10}V${cy + 10}M${cx - 10} ${cy}H${cx + 10}`} />
      )}
    </g>
  )
}

/* ---------- BPMN-Elemente ---------- */

const TX = {
  de: {
    events: "Ereignisse: Start und Ende", start: "Startereignis", startEx: ["„Anfrage kommt", "per Mail“"], end: "Endereignis", endEx: ["„Angebot ist", "verschickt“"],
    tasks: "Aufgaben: manuell oder automatisch", userTask: ["Angebot", "prüfen"], serviceTask: ["Angebot", "verschicken"], user: "Manuelle Aufgabe", userSub: "(User Task)", service: "Automatische Aufgabe", serviceSub: "(Service Task)",
    gateways: "Gateways: entweder – oder und gleichzeitig", xor: "Exklusiv (XOR): genau ein Weg", and: "Parallel (AND): alle Wege", q: "Alles da?", yes: "ja", no: "nein", a1: ["Angebot", "erstellen"], a2: ["Infos", "nachfragen"], p1: ["Rechnung", "schreiben"], p2: ["Ware", "versenden"],
    flows: "Sequenzfluss: die Reihenfolge", f1: ["Anfrage", "auslesen"], f2: ["Ins CRM", "eintragen"],
    lanes: "Pool und Lanes: wer macht was?", pool: "Betrieb", lane1: "Vertrieb", lane2: "CRM", l1: ["Anfrage", "prüfen"], l2: ["Kunde im CRM", "anlegen"], l3: ["Angebot", "freigeben"],
    example: "Das ganze Beispiel als BPMN",
    epkElements: "Die Elemente der EPK", eEvent: "Ereignis", eEventEx: ["Anfrage ist", "eingegangen"], eFunc: "Funktion", eFuncEx: ["Anfrage", "prüfen"], eConn: "Konnektor", eOrg: "Organisationseinheit", eOrgEx: "Vertrieb",
    epk: "Dasselbe Beispiel als EPK", e1: ["Anfrage ist", "eingegangen"], f_1: ["Anfrage prüfen"], e2: ["Angaben sind", "vollständig"], e5: ["Angaben sind", "unvollständig"], f_2: ["Angebot erstellen"], e3: ["Angebot ist", "erstellt"], f_3: ["Angebot versenden"], e4: ["Angebot ist", "versendet"], f_4: ["Infos nachfragen"], e6: ["Infos sind", "angefragt"], org: "Vertrieb",
  },
  en: {
    events: "Events: start and end", start: "Start event", startEx: ["“Enquiry arrives", "by email”"], end: "End event", endEx: ["“Quote has", "been sent”"],
    tasks: "Tasks: manual or automated", userTask: ["Review", "quote"], serviceTask: ["Send", "quote"], user: "Manual task", userSub: "(user task)", service: "Automated task", serviceSub: "(service task)",
    gateways: "Gateways: either–or and at the same time", xor: "Exclusive (XOR): exactly one path", and: "Parallel (AND): all paths", q: "Complete?", yes: "yes", no: "no", a1: ["Create", "quote"], a2: ["Ask for", "missing info"], p1: ["Write", "invoice"], p2: ["Ship", "goods"],
    flows: "Sequence flow: the order", f1: ["Read", "enquiry"], f2: ["Add to", "CRM"],
    lanes: "Pool and lanes: who does what?", pool: "Business", lane1: "Sales", lane2: "CRM", l1: ["Review", "enquiry"], l2: ["Create customer", "in CRM"], l3: ["Approve", "quote"],
    example: "The full example in BPMN",
    epkElements: "The elements of an EPC", eEvent: "Event", eEventEx: ["Enquiry has", "arrived"], eFunc: "Function", eFuncEx: ["Review", "enquiry"], eConn: "Connector", eOrg: "Organisational unit", eOrgEx: "Sales",
    epk: "The same example as an EPC", e1: ["Enquiry has", "arrived"], f_1: ["Review enquiry"], e2: ["Details are", "complete"], e5: ["Details are", "incomplete"], f_2: ["Create quote"], e3: ["Quote has", "been created"], f_3: ["Send quote"], e4: ["Quote has", "been sent"], f_4: ["Ask for missing info"], e6: ["Missing info has", "been requested"], org: "Sales",
  },
}

function BpmnEvents({ lang }: { lang: Lang }) {
  const t = TX[lang]
  return (
    <Diagram id="m-ev" caption={t.events} viewBox="0 0 440 150">
      <Event cx={110} cy={36} />
      <Lines x={110} y={80} lines={[t.start]} cls="lbl strong" />
      <Lines x={110} y={102} lines={t.startEx} cls="lbl" />
      <Arrow m="m-ev" d="M130 36H308" />
      <Event cx={330} cy={36} end />
      <Lines x={330} y={80} lines={[t.end]} cls="lbl strong" />
      <Lines x={330} y={102} lines={t.endEx} cls="lbl" />
    </Diagram>
  )
}

function BpmnTasks({ lang }: { lang: Lang }) {
  const t = TX[lang]
  return (
    <Diagram id="m-ta" caption={t.tasks} viewBox="0 0 440 140">
      <Task x={40} y={10} lines={t.userTask} kind="user" />
      <Lines x={110} y={98} lines={[t.user]} cls="lbl strong" />
      <Lines x={110} y={116} lines={[t.userSub]} cls="lbl" />
      <Task x={260} y={10} lines={t.serviceTask} kind="service" />
      <Lines x={330} y={98} lines={[t.service]} cls="lbl strong" />
      <Lines x={330} y={116} lines={[t.serviceSub]} cls="lbl" />
    </Diagram>
  )
}

function BpmnGateways({ lang }: { lang: Lang }) {
  const t = TX[lang]
  return (
    <Diagram id="m-gw" caption={t.gateways} viewBox="0 0 440 412">
      {/* XOR */}
      <Lines x={220} y={18} lines={[t.xor]} cls="lbl strong" />
      <Arrow m="m-gw" d="M20 110H82" />
      <Gateway cx={110} cy={110} />
      <Lines x={46} y={96} lines={[t.q]} cls="lbl" />
      <Arrow m="m-gw" d="M110 84V62H268" />
      <Arrow m="m-gw" d="M110 136V158H268" />
      <text className="lbl" x={150} y={56}>{t.yes}</text>
      <text className="lbl" x={150} y={174}>{t.no}</text>
      <Task x={270} y={32} lines={t.a1} />
      <Task x={270} y={128} lines={t.a2} />
      {/* AND */}
      <line className="sep" x1={0} y1={204} x2={440} y2={204} />
      <Lines x={220} y={230} lines={[t.and]} cls="lbl strong" />
      <Arrow m="m-gw" d="M20 324H82" />
      <Gateway cx={110} cy={324} kind="plus" />
      <Arrow m="m-gw" d="M110 298V276H268" />
      <Arrow m="m-gw" d="M110 350V372H268" />
      <Task x={270} y={246} lines={t.p1} />
      <Task x={270} y={342} lines={t.p2} />
    </Diagram>
  )
}

function BpmnFlows({ lang }: { lang: Lang }) {
  const t = TX[lang]
  return (
    <Diagram id="m-fl" caption={t.flows} viewBox="0 0 440 90">
      <Task x={40} y={14} lines={t.f1} />
      <Arrow m="m-fl" d="M180 44H258" />
      <Task x={260} y={14} lines={t.f2} />
    </Diagram>
  )
}

function BpmnLanes({ lang }: { lang: Lang }) {
  const t = TX[lang]
  return (
    <Diagram id="m-ln" caption={t.lanes} viewBox="0 0 800 264" minWidth={600}>
      <g className="pool">
        <rect x={2} y={2} width={796} height={260} rx={6} />
        <line x1={38} y1={2} x2={38} y2={262} />
        <line x1={76} y1={2} x2={76} y2={262} />
        <line x1={38} y1={132} x2={798} y2={132} />
      </g>
      <text className="lbl strong" transform="translate(25 132) rotate(-90)" textAnchor="middle">{t.pool}</text>
      <text className="lbl" transform="translate(62 67) rotate(-90)" textAnchor="middle">{t.lane1}</text>
      <text className="lbl" transform="translate(62 197) rotate(-90)" textAnchor="middle">{t.lane2}</text>
      <Event cx={118} cy={67} />
      <Arrow m="m-ln" d="M135 67H178" />
      <Task x={180} y={37} lines={t.l1} kind="user" />
      <Arrow m="m-ln" d="M320 67H345V197H378" />
      <Task x={380} y={167} lines={t.l2} kind="service" />
      <Arrow m="m-ln" d="M520 197H545V67H578" />
      <Task x={580} y={37} lines={t.l3} kind="user" />
      <Arrow m="m-ln" d="M720 67H746" />
      <Event cx={766} cy={67} end />
    </Diagram>
  )
}

/* ---------- EPK ---------- */

const hex = (x0: number, y0: number, w: number, h: number) =>
  `M${x0 + 16} ${y0}H${x0 + w - 16}L${x0 + w} ${y0 + h / 2}L${x0 + w - 16} ${y0 + h}H${x0 + 16}L${x0} ${y0 + h / 2}z`

function EpkEvent({ cx, y, lines }: { cx: number; y: number; lines: string[] }) {
  return (
    <g className="epk-event">
      <path d={hex(cx - 110, y, 220, 56)} />
      <Lines x={cx} y={y + 28 - (lines.length - 1) * 8.5 + 5} lines={lines} />
    </g>
  )
}

function EpkFunc({ cx, y, lines }: { cx: number; y: number; lines: string[] }) {
  return (
    <g className="task">
      <rect x={cx - 110} y={y} width={220} height={52} rx={12} />
      <Lines x={cx} y={y + 26 - (lines.length - 1) * 8.5 + 5} lines={lines} />
    </g>
  )
}

function EpkElements({ lang }: { lang: Lang }) {
  const t = TX[lang]
  return (
    <Diagram id="m-ee" caption={t.epkElements} viewBox="0 0 440 280">
      <g className="epk-event"><path d={hex(10, 14, 190, 56)} /></g>
      <Lines x={105} y={38} lines={t.eEventEx} />
      <Lines x={105} y={92} lines={[t.eEvent]} cls="lbl strong" />
      <g className="task"><rect x={240} y={16} width={190} height={52} rx={12} /></g>
      <Lines x={335} y={38} lines={t.eFuncEx} />
      <Lines x={335} y={92} lines={[t.eFunc]} cls="lbl strong" />
      <g className="connector"><circle cx={105} cy={180} r={24} /><text x={105} y={185} textAnchor="middle">XOR</text></g>
      <Lines x={105} y={234} lines={[t.eConn]} cls="lbl strong" />
      <Lines x={105} y={252} lines={["XOR · AND · OR"]} cls="lbl" />
      <g className="org"><ellipse cx={335} cy={180} rx={86} ry={28} /><line x1={262} y1={162} x2={262} y2={198} /></g>
      <Lines x={340} y={185} lines={[t.eOrgEx]} />
      <Lines x={335} y={234} lines={[t.eOrg]} cls="lbl strong" />
    </Diagram>
  )
}

function EpkExample({ lang }: { lang: Lang }) {
  const t = TX[lang]
  const L = 200 // linker Zweig
  const R = 560 // rechter Zweig
  const M = 380 // Mitte
  return (
    <Diagram id="m-epk" caption={t.epk} viewBox="0 0 760 650" minWidth={560}>
      <EpkEvent cx={M} y={10} lines={t.e1} />
      <Arrow m="m-epk" d={`M${M} 66V94`} />
      <EpkFunc cx={M} y={96} lines={t.f_1} />
      <line className="assoc" x1={M + 110} y1={122} x2={580} y2={122} />
      <g className="org"><ellipse cx={660} cy={122} rx={80} ry={26} /><line x1={592} y1={106} x2={592} y2={138} /></g>
      <Lines x={666} y={127} lines={[t.org]} />
      <Arrow m="m-epk" d={`M${M} 148V174`} />
      <g className="connector"><circle cx={M} cy={198} r={22} /><text x={M} y={203} textAnchor="middle">XOR</text></g>
      <Arrow m="m-epk" d={`M${M - 22} 198H${L}V244`} />
      <Arrow m="m-epk" d={`M${M + 22} 198H${R}V244`} />
      {/* links: vollständig */}
      <EpkEvent cx={L} y={246} lines={t.e2} />
      <Arrow m="m-epk" d={`M${L} 302V330`} />
      <EpkFunc cx={L} y={332} lines={t.f_2} />
      <Arrow m="m-epk" d={`M${L} 384V412`} />
      <EpkEvent cx={L} y={414} lines={t.e3} />
      <Arrow m="m-epk" d={`M${L} 470V498`} />
      <EpkFunc cx={L} y={500} lines={t.f_3} />
      <Arrow m="m-epk" d={`M${L} 552V580`} />
      <EpkEvent cx={L} y={582} lines={t.e4} />
      {/* rechts: unvollständig */}
      <EpkEvent cx={R} y={246} lines={t.e5} />
      <Arrow m="m-epk" d={`M${R} 302V330`} />
      <EpkFunc cx={R} y={332} lines={t.f_4} />
      <Arrow m="m-epk" d={`M${R} 384V412`} />
      <EpkEvent cx={R} y={414} lines={t.e6} />
    </Diagram>
  )
}

/* ---------- Legenden-Tabellen: Element | Symbol | Bedeutung ---------- */

const I = ({ children, w = 34 }: { children: ReactNode; w?: number }) => (
  <svg className="legend-icon" viewBox={`0 0 ${w} 24`} width={w} height={24} aria-hidden="true">{children}</svg>
)

const ICONS = {
  start: <I><circle cx={17} cy={12} r={9} /></I>,
  end: <I><circle className="thick" cx={17} cy={12} r={8.5} /></I>,
  task: <I><rect x={3} y={4} width={28} height={16} rx={5} /></I>,
  service: <I><rect className="auto" x={3} y={4} width={28} height={16} rx={5} /><circle className="gear" cx={10} cy={10} r={2.6} /></I>,
  xor: <I><path d="M17 2L27 12L17 22L7 12z" /><path className="mark" d="M13.5 8.5l7 7M20.5 8.5l-7 7" /></I>,
  and: <I><path d="M17 2L27 12L17 22L7 12z" /><path className="mark" d="M17 7v10M12 12h10" /></I>,
  flow: <I><path d="M4 12H27" /><path className="fill" d="M26 8l6 4-6 4z" /></I>,
  lane: <I><rect x={3} y={3} width={28} height={18} rx={1} /><path d="M3 12H31" /></I>,
  pool: <I><rect x={3} y={3} width={28} height={18} rx={1} /><path d="M9 3V21" /></I>,
  epkEvent: <I><path className="epk" d="M8 4H26L31 12L26 20H8L3 12z" /></I>,
  epkFunc: <I><rect x={3} y={4} width={28} height={16} rx={5} /></I>,
  conXor: <I><circle cx={17} cy={12} r={9} /><text x={17} y={15.5} textAnchor="middle">×</text></I>,
  conAnd: <I><circle cx={17} cy={12} r={9} /><text x={17} y={16} textAnchor="middle">∧</text></I>,
  conOr: <I><circle cx={17} cy={12} r={9} /><text x={17} y={15} textAnchor="middle">∨</text></I>,
  org: <I><ellipse cx={17} cy={12} rx={14} ry={8} /><path d="M7 6.5V17.5" /></I>,
}

type Row = [string, keyof typeof ICONS, string]

const LEGEND = {
  de: {
    head: ["Element", "Symbol", "Was es bedeutet"],
    bpmn: [
      ["Startereignis", "start", "Womit der Ablauf beginnt, z. B. „Anfrage kommt per Mail“."],
      ["Aufgabe", "task", "Ein Schritt, den eine Person oder ein System erledigt. Formuliert als Objekt + Verb: „Angebot prüfen“."],
      ["Automatische Aufgabe", "service", "Ein Schritt, den ein System übernimmt. Fachbegriff: Service Task. Hier steckt Automationspotenzial."],
      ["Exklusives Gateway", "xor", "Eine Frage mit mehreren Ausgängen, genau einer wird genommen – z. B. ja oder nein."],
      ["Paralleles Gateway", "and", "Alle Wege laufen gleichzeitig, z. B. Rechnung schreiben und Ware versenden."],
      ["Sequenzfluss", "flow", "Die Reihenfolge der Schritte."],
      ["Endereignis", "end", "Der Ablauf ist fertig. Es kann mehr als ein Ende geben."],
      ["Lane", "lane", "Eine Bahn, die zeigt, wer den Schritt macht: eine Person, ein Team oder ein System."],
      ["Pool", "pool", "Der Rahmen um einen ganzen Ablauf. Die Lanes liegen darin."],
    ] as Row[],
    epk: [
      ["Ereignis", "epkEvent", "Ein Zustand, der eintritt, z. B. „Anfrage ist eingegangen“. Startet und beendet jede Kette."],
      ["Funktion", "epkFunc", "Eine Tätigkeit, z. B. „Anfrage prüfen“. Steht immer zwischen zwei Ereignissen."],
      ["XOR-Konnektor", "conXor", "Entweder – oder: Genau ein Weg wird genommen."],
      ["AND-Konnektor", "conAnd", "Und: Alle Wege laufen gleichzeitig."],
      ["OR-Konnektor", "conOr", "Oder: Ein oder mehrere Wege werden genommen."],
      ["Kontrollfluss", "flow", "Die Reihenfolge von Ereignissen und Funktionen."],
      ["Organisationseinheit", "org", "Wer die Funktion ausführt, z. B. „Vertrieb“. Hängt seitlich an der Funktion."],
    ] as Row[],
  },
  en: {
    head: ["Element", "Shape", "What it means"],
    bpmn: [
      ["Start event", "start", "What starts the process, e.g. “Enquiry arrives by email”."],
      ["Task", "task", "One step that a person or a system carries out. Phrased as verb + object: “Review quote”."],
      ["Automated task", "service", "A step a system takes over. Technically a service task. This is where automation potential lies."],
      ["Exclusive gateway", "xor", "A question with several ways out; exactly one is taken – e.g. yes or no."],
      ["Parallel gateway", "and", "All paths run at the same time, e.g. write the invoice and ship the goods."],
      ["Sequence flow", "flow", "The order of the steps."],
      ["End event", "end", "The process is finished. There can be more than one end."],
      ["Lane", "lane", "A row that shows who does the step: a person, a team or a system."],
      ["Pool", "pool", "The frame around one whole process. Lanes sit inside it."],
    ] as Row[],
    epk: [
      ["Event", "epkEvent", "A state that occurs, e.g. “Enquiry has arrived”. Starts and ends every chain."],
      ["Function", "epkFunc", "An activity, e.g. “Review enquiry”. Always sits between two events."],
      ["XOR connector", "conXor", "Either–or: exactly one path is taken."],
      ["AND connector", "conAnd", "And: all paths run at the same time."],
      ["OR connector", "conOr", "Or: one or more paths are taken."],
      ["Control flow", "flow", "The order of events and functions."],
      ["Organisational unit", "org", "Who performs the function, e.g. “Sales”. Attached to the side of the function."],
    ] as Row[],
  },
}

function Legend({ lang, kind }: { lang: Lang; kind: "bpmn" | "epk" }) {
  const t = LEGEND[lang]
  return (
    <div className="legend">
      <table>
        <thead>
          <tr>{t.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
        </thead>
        <tbody>
          {t[kind].map(([name, icon, text]) => (
            <tr key={name}>
              <th scope="row">{name}</th>
              <td className="shape">{ICONS[icon]}</td>
              <td>{text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- Automation: Power Automate hybrid, RPA vs. API ---------- */

const TA = {
  de: {
    hybrid: "Cloud-Flow und Desktop-Flow in einem Ablauf", pool: "Power Automate", lane1: "Cloud-Flow", lane2: "Desktop-Flow",
    h1: ["Rechnung aus", "Mail auslesen"], h2: ["In Altsystem", "eintragen"], h3: ["Team in Teams", "informieren"],
    rva: "RPA und API im Vergleich", rpa: "RPA: über die Oberfläche", api: "API: direkt zwischen den Systemen",
    sysA: ["System A", "(Bildschirm)"], bot: ["Bot klickt,", "kopiert, tippt"], sysB: ["System B", "(Bildschirm)"], a: ["System A"], b: ["System B"], iface: "Schnittstelle",
  },
  en: {
    hybrid: "Cloud flow and desktop flow in one process", pool: "Power Automate", lane1: "Cloud flow", lane2: "Desktop flow",
    h1: ["Read invoice", "from email"], h2: ["Enter into", "legacy system"], h3: ["Notify team", "in Teams"],
    rva: "RPA and API compared", rpa: "RPA: through the user interface", api: "API: directly between systems",
    sysA: ["System A", "(screen)"], bot: ["Bot clicks,", "copies, types"], sysB: ["System B", "(screen)"], a: ["System A"], b: ["System B"], iface: "API",
  },
}

function PaHybrid({ lang }: { lang: Lang }) {
  const t = TA[lang]
  return (
    <Diagram id="m-pa" caption={t.hybrid} viewBox="0 0 800 264" minWidth={600}>
      <g className="pool">
        <rect x={2} y={2} width={796} height={260} rx={6} />
        <line x1={38} y1={2} x2={38} y2={262} />
        <line x1={76} y1={2} x2={76} y2={262} />
        <line x1={38} y1={132} x2={798} y2={132} />
      </g>
      <text className="lbl strong" transform="translate(25 132) rotate(-90)" textAnchor="middle">{t.pool}</text>
      <text className="lbl" transform="translate(62 67) rotate(-90)" textAnchor="middle">{t.lane1}</text>
      <text className="lbl" transform="translate(62 197) rotate(-90)" textAnchor="middle">{t.lane2}</text>
      <Event cx={118} cy={67} />
      <Arrow m="m-pa" d="M135 67H178" />
      <Task x={180} y={37} lines={t.h1} kind="service" />
      <Arrow m="m-pa" d="M320 67H345V197H378" />
      <Task x={380} y={167} lines={t.h2} kind="service" />
      <Arrow m="m-pa" d="M520 197H545V67H578" />
      <Task x={580} y={37} lines={t.h3} kind="service" />
      <Arrow m="m-pa" d="M720 67H746" />
      <Event cx={766} cy={67} end />
    </Diagram>
  )
}

function RpaVsApi({ lang }: { lang: Lang }) {
  const t = TA[lang]
  return (
    <Diagram id="m-ra" caption={t.rva} viewBox="0 0 640 250" minWidth={520}>
      <text className="lbl strong" x={40} y={20}>{t.rpa}</text>
      <Task x={40} y={34} lines={t.sysA} />
      <Arrow m="m-ra" d="M180 64H248" />
      <Task x={250} y={34} lines={t.bot} kind="service" />
      <Arrow m="m-ra" d="M390 64H458" />
      <Task x={460} y={34} lines={t.sysB} />
      <line className="sep" x1={0} y1={128} x2={640} y2={128} />
      <text className="lbl strong" x={40} y={160}>{t.api}</text>
      <Task x={40} y={174} lines={t.a} />
      <Arrow m="m-ra" d="M180 204H458" />
      <text className="lbl" x={320} y={196} textAnchor="middle">{t.iface}</text>
      <Task x={460} y={174} lines={t.b} />
    </Diagram>
  )
}

function BpmnExample({ lang }: { lang: Lang }) {
  return <div className="diagram-wide"><Bpmn lang={lang} /></div>
}

export const FIGURES: Record<string, (p: { lang: Lang }) => JSX.Element> = {
  "bpmn-events": BpmnEvents,
  "bpmn-tasks": BpmnTasks,
  "bpmn-gateways": BpmnGateways,
  "bpmn-flows": BpmnFlows,
  "bpmn-lanes": BpmnLanes,
  "bpmn-example": BpmnExample,
  "epk-elements": EpkElements,
  "epk-example": EpkExample,
  "pa-hybrid": PaHybrid,
  "rpa-vs-api": RpaVsApi,
  "bpmn-legend": ({ lang }) => <Legend lang={lang} kind="bpmn" />,
  "epk-legend": ({ lang }) => <Legend lang={lang} kind="epk" />,
}
