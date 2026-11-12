import Shell from "../Shell"
import JsonLd, { serviceSchema } from "../JsonLd"
import ClusterArticles from "../ClusterArticles"
import { CALL } from "../config"
import { UI, type Lang } from "../i18n"
import { Cta, Faq, Hl, PageHero, Proof, Quotes, Section } from "../blocks"

const SVC = {"de": ["KI-Coaching und Schulungen", "KI-Kickstart, Team-Schulungen und Begleitung: Microsoft Power Platform und Copilot, Claude Code und Codex, Prozessmanagement."], "en": ["AI coaching and training", "AI kickstart, team training and ongoing support: Microsoft Power Platform and Copilot, Claude Code and Codex, process management."]} as const

const T = {
  de: {
    title: <>Du willst KI nutzen, weißt aber nicht, <em className="hl">wo du anfangen sollst?</em></>,
    lead: <>Ich zeige dir an <Hl>deinen echten Aufgaben</Hl>, wo KI Zeit spart – und richte es direkt mit dir ein. <Hl>Keine Theorie, kein Hype.</Hl></>,
    a1: "Kickstart anfragen", a2: "Formate ansehen",
    painTitle: "Das höre ich oft",
    pains: ["Wir haben ChatGPT, aber jeder nutzt es anders – oder gar nicht.", "Ich weiß, dass da mehr geht, aber mir fehlt die Zeit, mich reinzufuchsen.", "Wir wissen nicht, was wir mit Kundendaten eigentlich dürfen."],
    topicsTitle: "Themen, die ich mit dir angehe",
    topics: [
      { title: "Microsoft", text: "Abläufe automatisieren und kleine Apps bauen – in den Tools, die du schon hast.", items: ["Power Automate", "Power Apps", "Copilot"] },
      { title: "Interne Apps und Websites bauen", text: "Mit KI selbst Software bauen, ohne Entwickler-Team.", items: ["Claude Code und Codex richtig einsetzen", "Erste eigene Projekte"] },
      { title: "Prozessmanagement", text: "Bevor etwas automatisiert wird: verstehen und aufschreiben, wie es heute läuft.", items: ["Prozesse verstehen", "EPK", "BPMN"] },
    ],
    fmtTitle: "Drei Formate",
    fmt: [["KI-Kickstart", "2 bis 3 Stunden, 1:1 oder mit dem Team. Wir gehen deine Abläufe durch, finden die drei größten Hebel und setzen sie direkt um."], ["Team-Schulung", "Ein halber oder ganzer Tag. KI im Arbeitsalltag: Prompts, Vorlagen, eigene Assistenten – geübt an deinen eigenen Aufgaben."], ["Begleitung", "Feste Calls im Monat, neue Anwendungsfälle, Fragen zwischendurch. Damit es nicht beim ersten Workshop bleibt."]] as [string, string][],
    takeTitle: "Was du mitnimmst",
    take: ["Eine Liste der Aufgaben, bei denen KI dir wirklich Zeit spart", "Eingerichtete Assistenten und Vorlagen für deine Arbeit", "Orientierung, worauf du bei Kundendaten achten musst", "Ein Team, das KI selbstständig nutzt"],
    priceLabel: "KI-Kickstart",
    price: "ab 490 €",
    priceNote: "2 bis 3 Stunden, 1:1 oder mit dem Team.",
    more: "Weitere Formate im Gespräch: Team-Schulung (halber oder ganzer Tag) und laufende Begleitung.",
    faq: [["Mit welchen Tools arbeitest du?", "Mit denen, die zu dir passen: ChatGPT, Claude, Microsoft Copilot oder Gemini. Ich bin an keinen Anbieter gebunden."], ["Brauchen wir Vorwissen?", "Nein. Wir starten da, wo du stehst."], ["Online oder vor Ort?", "Beides ist möglich. Die meisten Kickstarts laufen per Video."], ["Und wenn wir danach mehr wollen?", "Oft entsteht aus dem Kickstart eine Automation oder ein internes Tool. Muss aber nicht."]] as [string, string][],
    ctaTitle: "Finde heraus, wo KI dir am meisten bringt.",
    ctaText: "Im kostenlosen Erstgespräch klären wir, welches Format zu dir passt.",
    ctaPrimary: "Erstgespräch buchen",
  },
  en: {
    title: <>You want to use AI but don&apos;t know <em className="hl">where to start?</em></>,
    lead: <>I show you, using <Hl>your real tasks</Hl>, where AI saves time – and set it up with you right away. <Hl>No theory, no hype.</Hl></>,
    a1: "Request a kickstart", a2: "See formats",
    painTitle: "What I hear a lot",
    pains: ["We have ChatGPT, but everyone uses it differently – or not at all.", "I know there's more to get out of it, but I don't have the time to dig in.", "We don't really know what we're allowed to do with client data."],
    topicsTitle: "Topics we can work on",
    topics: [
      { title: "Microsoft", text: "Automate processes and build small apps – in the tools you already have.", items: ["Power Automate", "Power Apps", "Copilot"] },
      { title: "Building internal apps and websites", text: "Build software yourself with AI, without a developer team.", items: ["Using Claude Code and Codex properly", "Your first own projects"] },
      { title: "Process management", text: "Before anything gets automated: understand and document how it works today.", items: ["Understanding processes", "EPC", "BPMN"] },
    ],
    fmtTitle: "Three formats",
    fmt: [["AI kickstart", "2 to 3 hours, 1:1 or with your team. We go through your processes, find the three biggest levers and put them into practice right away."], ["Team training", "Half a day or a full day. AI in everyday work: prompts, templates, your own assistants – practised on your own tasks."], ["Ongoing support", "Regular monthly calls, new use cases, questions in between. So it doesn't stop after the first workshop."]] as [string, string][],
    takeTitle: "What you take away",
    take: ["A list of the tasks where AI genuinely saves you time", "Assistants and templates set up for your work", "Guidance on what to watch out for with client data", "A team that uses AI on its own"],
    priceLabel: "AI kickstart",
    price: "from €490",
    priceNote: "2 to 3 hours, 1:1 or with your team.",
    more: "More formats on request: team training (half or full day) and ongoing support.",
    faq: [["Which tools do you work with?", "Whichever suit you: ChatGPT, Claude, Microsoft Copilot or Gemini. I'm not tied to any provider."], ["Do we need prior knowledge?", "No. We start where you are."], ["Online or on site?", "Both are possible. Most kickstarts run via video."], ["And if we want more afterwards?", "A kickstart often leads to an automation or an internal tool. But it doesn't have to."]] as [string, string][],
    ctaTitle: "Find out where AI helps you most.",
    ctaText: "In a free intro call we'll work out which format suits you.",
    ctaPrimary: "Book an intro call",
  },
}

export default function Coaching({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <Shell lang={lang}>
      <JsonLd data={serviceSchema(lang, "/ki-coaching", SVC[lang][0], SVC[lang][1])} />
      <PageHero title={t.title} lead={t.lead} actions={[{ href: CALL, label: t.a1 }, { href: "#formate", label: t.a2 }]} />
      <Section><h2>{t.painTitle}</h2><Quotes items={t.pains} /></Section>
      <Section id="themen">
        <h2>{t.topicsTitle}</h2>
        <div className="topics">
          {t.topics.map((tp) => (
            <article key={tp.title}>
              <h3>{tp.title}</h3>
              <p>{tp.text}</p>
              <ul>{tp.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
      </Section>
      <Section id="formate">
        <h2>{t.fmtTitle}</h2>
        <Proof items={t.fmt} />
        <div className="package">
          <div className="incl">
            <h3>{t.takeTitle}</h3>
            <ul>{t.take.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="price">
            <span>{t.priceLabel}</span>
            <div className="amount">{t.price}</div>
            <p className="price-fixed">{UI[lang].fixedPrice}</p>
            <p>{t.priceNote}</p>
            <p className="more-formats">{t.more}</p>
            <a className="btn" href={CALL}>{t.a1}</a>
          </div>
        </div>
      </Section>
      <ClusterArticles lang={lang} cluster="ki-coaching" />
      <Section><h2>{UI[lang].faq}</h2><Faq items={t.faq} /></Section>
      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} primary={t.ctaPrimary} />
    </Shell>
  )
}
