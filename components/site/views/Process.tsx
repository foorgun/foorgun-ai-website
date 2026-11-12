import Shell from "../Shell"
import Bpmn from "../Bpmn"
import ClusterArticles from "../ClusterArticles"
import JsonLd, { serviceSchema } from "../JsonLd"
import { CALL } from "../config"
import { UI, type Lang } from "../i18n"
import { Cta, Facts, Faq, Hl, PageHero, Proof, Section, Steps } from "../blocks"

export const PROCESS_META = {
  de: { title: "Prozessmanagement mit BPMN und EPK – foorgun.ai", description: "Abläufe aufnehmen, als BPMN oder EPK modellieren und Schwachstellen finden – als Grundlage für Automation und KI." },
  en: { title: "Process management with BPMN and EPC – foorgun.ai", description: "Map your processes, model them in BPMN or EPC and find the weak spots – as the foundation for automation and AI." },
}

const T = {
  de: {
    title: <>Erst den Prozess verstehen. <em className="hl">Dann automatisieren.</em></>,
    lead: <>Bevor ich etwas automatisiere, nehme ich auf, wie du heute arbeitest – als <Hl>BPMN- oder EPK-Diagramm</Hl>, das alle im Team lesen können. Oft ist das schon der halbe Gewinn.</>,
    a2: "So läuft es ab",
    whyTitle: "Warum zuerst der Prozess?",
    why: [["Chaos wird nicht besser, nur schneller", "Wer einen unklaren Ablauf automatisiert, bekommt einen unklaren Ablauf, der schneller Fehler macht."], ["Alle reden über dasselbe", "Ein Diagramm macht sichtbar, wer was wann macht – statt dass jede Person ihre eigene Version im Kopf hat."], ["Die Hebel werden sichtbar", "Medienbrüche, Doppelarbeit und Wartezeiten fallen erst auf, wenn der Ablauf einmal vollständig aufgeschrieben ist."]] as [string, string][],
    exampleTitle: "So sieht das aus",
    getTitle: "Was du bekommst",
    get: [["Prozessaufnahme", "Gespräche mit den Leuten, die den Ablauf wirklich machen – nicht nur mit der Chefetage."], ["Ist-Prozess", "Dein heutiger Ablauf als BPMN- oder EPK-Diagramm, verständlich auch ohne Vorwissen."], ["Schwachstellen", "Wo Zeit verloren geht, wo etwas doppelt getippt wird, wo Dinge liegen bleiben."], ["Soll-Prozess", "Wie der Ablauf künftig laufen soll – und welche Schritte sich automatisieren lassen."]] as [string, string][],
    stepsTitle: "So läuft es ab",
    steps: [["Gespräch", "15 Minuten: Um welchen Ablauf geht es, und wer ist daran beteiligt?"], ["Aufnahme", "Ich spreche mit den Beteiligten und schaue mir an, wie der Ablauf heute wirklich läuft."], ["Modell und Analyse", "Du bekommst das Diagramm und eine klare Liste der Schwachstellen."], ["Umsetzung", "Auf Wunsch automatisiere ich danach die Schritte, die sich lohnen."]] as [string, string][],
    faq: [["BPMN oder EPK – was ist besser?", "BPMN ist heute der internationale Standard und eignet sich gut, wenn später automatisiert werden soll. EPK ist im deutschsprachigen Raum verbreitet, oft durch SAP-Projekte. Ich arbeite mit dem, was zu dir passt."], ["Brauchen wir dafür eine spezielle Software?", "Nein. Die Diagramme entstehen in gängigen Modellierungstools. Wenn du schon eines nutzt, arbeite ich darin."], ["Können wir das auch selbst lernen?", "Ja. Prozessmanagement mit BPMN und EPK ist auch Thema im KI-Coaching – dann modellierst du deine Abläufe künftig selbst."], ["Müssen wir danach automatisieren?", "Nein. Manchmal reicht es schon, den Ablauf klar aufzuschreiben und Zuständigkeiten zu klären."]] as [string, string][],
    ctaTitle: "Welcher Ablauf ist bei dir unklar?",
    ctaText: "Erzähl es mir in 15 Minuten. Danach weißt du, ob eine Prozessaufnahme sinnvoll ist.",
  },
  en: {
    title: <>Understand the process first. <em className="hl">Then automate.</em></>,
    lead: <>Before I automate anything, I map how you work today – as a <Hl>BPMN or EPC diagram</Hl> that everyone on the team can read. Often that alone is half the win.</>,
    a2: "How it works",
    whyTitle: "Why start with the process?",
    why: [["Chaos doesn't get better, only faster", "Automate an unclear process and you get an unclear process that makes mistakes faster."], ["Everyone talks about the same thing", "A diagram shows who does what and when – instead of everyone carrying their own version in their head."], ["The levers become visible", "Media breaks, duplicate work and waiting times only stand out once the process is written down in full."]] as [string, string][],
    exampleTitle: "What it looks like",
    getTitle: "What you get",
    get: [["Process discovery", "Conversations with the people who actually run the process – not just management."], ["As-is process", "Your current process as a BPMN or EPC diagram, readable without prior knowledge."], ["Weak spots", "Where time gets lost, where things are typed twice, where work gets stuck."], ["To-be process", "How the process should run in future – and which steps can be automated."]] as [string, string][],
    stepsTitle: "How it works",
    steps: [["Call", "15 minutes: which process is it about, and who is involved?"], ["Discovery", "I talk to the people involved and look at how the process really runs today."], ["Model and analysis", "You get the diagram and a clear list of weak spots."], ["Implementation", "If you like, I then automate the steps that are worth it."]] as [string, string][],
    faq: [["BPMN or EPC – which is better?", "BPMN is today's international standard and works well if you want to automate later. EPC is common in German-speaking countries, often through SAP projects. I work with whatever suits you."], ["Do we need special software?", "No. The diagrams are created in common modelling tools. If you already use one, I'll work in it."], ["Can we learn this ourselves?", "Yes. Process management with BPMN and EPC is also part of the AI coaching – so you can model your processes yourselves."], ["Do we have to automate afterwards?", "No. Sometimes writing the process down clearly and sorting out responsibilities is enough."]] as [string, string][],
    ctaTitle: "Which process is unclear in your business?",
    ctaText: "Tell me about it in 15 minutes. Afterwards you'll know whether a process review makes sense.",
  },
}

export default function Process({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <Shell lang={lang}>
      <JsonLd data={serviceSchema(lang, "/prozessmanagement", PROCESS_META[lang].title, PROCESS_META[lang].description)} />
      <PageHero title={t.title} lead={t.lead} actions={[{ href: CALL, label: UI[lang].ctaPrimary }, { href: "#ablauf", label: t.a2 }]} />
      <Section><h2>{t.whyTitle}</h2><Proof items={t.why} /></Section>
      <Section><h2>{t.exampleTitle}</h2><Bpmn lang={lang} /></Section>
      <section className="rule"><div className="wrap split"><h2>{t.getTitle}</h2><Facts rows={t.get} /></div></section>
      <Section id="ablauf"><h2>{t.stepsTitle}</h2><Steps items={t.steps} /></Section>
      <ClusterArticles lang={lang} cluster="prozessmanagement" />
      <Section><h2>{UI[lang].faq}</h2><Faq items={t.faq} /></Section>
      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} />
    </Shell>
  )
}
