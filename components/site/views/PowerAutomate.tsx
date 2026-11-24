import Link from "next/link"
import Shell from "../Shell"
import ClusterArticles from "../ClusterArticles"
import JsonLd, { serviceSchema } from "../JsonLd"
import { CALL } from "../config"
import { UI, type Lang } from "../i18n"
import { Cta, Facts, Faq, Hl, Package, PageHero, Proof, Section, Steps } from "../blocks"

export const PA_PATH = "/power-automate"
export const PA_CERT_URL = "https://learn.microsoft.com/en-us/users/furkan-9794/credentials/fdc2579963da7e6a"

export const PA_META = {
  de: { title: "Power Automate Beratung & Entwicklung – foorgun.ai", description: "Power Automate Dienstleister für Unternehmen mit Microsoft 365: Beratung, Entwicklung von Cloud- und Desktop-Flows und Lösungen auf der Power Platform. Festpreis nach kostenlosem Erstgespräch." },
  en: { title: "Power Automate consulting & development – foorgun.ai", description: "Power Automate consultant for businesses on Microsoft 365: advice, development of cloud and desktop flows, and solutions on the Power Platform. Fixed price after a free intro call." },
}

/** Artikel, die zu dieser Leistungsseite gehören (IDs = Ordner in content/blog). */
const ARTICLES = ["power-automate-cloud-vs-desktop", "rpa-oder-api", "bpmn-einfach-erklaert"]

const T = {
  de: {
    title: <>Power Automate: Beratung und Entwicklung, <em className="hl">damit Microsoft 365 für dich arbeitet.</em></>,
    lead: <>Du hast Microsoft 365 und damit oft schon Power Automate – nur nutzt es niemand. Ich schaue mir deine Abläufe an und baue die Flows, die <Hl>Mails, Freigaben und Datenübertragungen</Hl> übernehmen. Erst der Prozess, dann das Tool.</>,
    a2: "Was ist Power Automate?",
    whatTitle: "Was ist Power Automate – und wofür ist es gut?",
    what: [
      <>Power Automate ist das Automations-Werkzeug von Microsoft und Teil der Power Platform. Es verbindet Outlook, Teams, SharePoint, Excel und viele weitere Dienste, sodass wiederkehrende Aufgaben <Hl>von selbst ablaufen</Hl>: Eine Mail kommt rein, der Anhang wird abgelegt, die zuständige Person gibt in Teams frei, die Daten landen in der Liste.</>,
      <>Es gibt zwei Arten von Flows. <strong>Cloud-Flows</strong> arbeiten über Schnittstellen und laufen rund um die Uhr in der Microsoft-Cloud. <strong>Desktop-Flows</strong> bedienen Programme über die Oberfläche, wie ein Mensch mit Maus und Tastatur – gedacht für ältere Software ohne Schnittstelle. Den Unterschied erkläre ich im Artikel <Link href="/de/blog/power-automate-cloud-vs-desktop">Power Automate: Cloud-Flows und Desktop-Flows</Link>.</>,
      <>Der Haken: Ein Flow ist schnell zusammengeklickt, aber selten sauber gebaut. Ohne Fehlerbehandlung, Dokumentation und klare Zuständigkeit bleibt er stehen, sobald sich etwas ändert. Dabei helfe ich.</>,
    ],
    buildTitle: "Was ich mit Power Automate entwickle",
    build: [["Cloud-Flows", "Workflows zwischen Outlook, Teams, SharePoint, Excel und deinen anderen Tools: Anhänge ablegen, Daten übertragen, Benachrichtigungen und Erinnerungen verschicken."], ["Genehmigungen und Freigaben", "Urlaub, Bestellungen, Rechnungen, Dokumente: Freigaben laufen über Teams oder Outlook, nachvollziehbar und ohne Nachfragen per Mail."], ["Desktop-Automatisierung", "Desktop-Flows (RPA) für Fachanwendungen und Altsysteme ohne Schnittstelle. Nur dort, wo es keinen stabileren Weg gibt."], ["Power Apps und Listen", "Kleine Apps und SharePoint-Listen als Eingabemaske, damit Daten sauber ankommen und der Flow damit arbeiten kann."]] as [string, string][],
    helpTitle: "Wobei ich dich unterstütze",
    help: [
      ["Beratung", "Welche Abläufe lohnen sich, was deckt deine Lizenz ab, wo reicht ein Cloud-Flow und wo braucht es mehr? Du bekommst eine klare Einschätzung, bevor Geld fließt."],
      ["Entwicklung", "Ich baue die Flows, teste sie mit echten Fällen und übergebe sie dokumentiert. Mit Fehlerbehandlung, damit du merkst, wenn etwas hakt."],
      ["Bestehende Flows", "Flows, die jemand gebaut hat und die niemand mehr versteht: Ich räume auf, mache sie stabil und dokumentiere sie."],
      ["Schulung", <>Dein Team soll selbst bauen? Im <Link href="/de/ki-coaching">Coaching</Link> zeige ich es an euren eigenen Abläufen.</>],
    ] as [string, React.ReactNode][],
    whyTitle: "Zertifiziert und aus der Praxis",
    certKicker: "Microsoft Certified", certName: "Power Platform Functional Consultant Associate", certNote: "Zertifiziert seit Januar 2025", certVerify: "Bei Microsoft verifizieren",
    why: [
      ["Erfahrung", "Fast zwei Jahre habe ich als Intelligent Automation Engineer in der Beratung Lösungen auf der Microsoft Power Platform entworfen und entwickelt: Power Automate, Power Apps und Copilot Studio."],
      ["KI im Ablauf", "KI-Schritte, APIs und Datenverarbeitung gehören dazu – dort, wo sie im Ablauf wirklich etwas übernehmen."],
      ["Vom Fachbereich zur Lösung", "Ich übersetze, was dein Team braucht, in eine Lösung, die im Alltag läuft und sich später erweitern lässt."],
    ] as [string, string][],
    stepsTitle: "So läuft ein Power-Automate-Projekt ab",
    steps: [["Gespräch", "15 Minuten: Welcher Ablauf kostet am meisten Zeit? Wir wählen den einen, der sich am meisten lohnt."], ["Prozess-Check", "Ich nehme den Ablauf auf, prüfe Systeme und Lizenzen und lege fest, was automatisiert wird."], ["Entwicklung", "Ich baue den Flow in deiner Microsoft-Umgebung und teste ihn mit echten Fällen."], ["Übergabe", "Dokumentation und Einweisung. Der Flow gehört dir und läuft in deinem Tenant."]] as [string, string][],
    pkgName: "Power-Automate-Pilot",
    pkg: ["Ein kompletter Ablauf, live und getestet", "Gebaut in deiner Microsoft-365-Umgebung", "Fehlerbehandlung und Benachrichtigung, wenn etwas hakt", "Einschätzung, welche Lizenzen du wirklich brauchst", "Dokumentation und Einweisung"],
    priceLabel: "Festpreis", price: "ab 1.500 €", priceNote: "Microsoft-Lizenzen sind nicht enthalten. Danach weitere Abläufe zum Festpreis oder laufende Betreuung.", priceCta: "Gespräch buchen",
    fitTitle: "Wann Power Automate passt – und wann nicht",
    fit: [
      ["Passt gut", "Dein Team arbeitet in Microsoft 365, die Daten liegen in Outlook, SharePoint, Teams oder Excel, und die IT möchte in der Microsoft-Umgebung bleiben."],
      ["Passt bedingt", "Es gibt Altsysteme ohne Schnittstelle. Dann braucht es Desktop-Flows – möglich, aber wartungsintensiver."],
      ["Passt eher nicht", <>Die meisten Tools liegen außerhalb von Microsoft oder es braucht viele Premium-Konnektoren. Dann ist n8n oft die bessere Wahl. Auch das sage ich dir – siehe <Link href="/de/automation">Automation</Link>.</>],
    ] as [string, React.ReactNode][],
    articlesTitle: "Mehr zu Power Automate und Prozessen",
    faq: [
      ["Was kann man mit Power Automate machen?", "Alles, was nach festen Regeln immer wieder passiert: Mails und Anhänge ablegen, Genehmigungen einholen, Daten zwischen Excel, SharePoint und anderen Systemen übertragen, Erinnerungen verschicken, Berichte zusammenstellen."],
      ["Brauchen wir zusätzliche Lizenzen?", "Kommt auf den Ablauf an. Cloud-Flows mit Standard-Konnektoren sind in vielen Microsoft-365-Lizenzen enthalten. Für Premium-Konnektoren und Desktop-Flows braucht es meist eine zusätzliche Lizenz. Das kläre ich vor dem Projekt, damit du nichts kaufst, was du nicht brauchst."],
      ["Wo laufen die Flows und die Daten?", "In deiner eigenen Microsoft-Umgebung. Ich baue in deinem Tenant, die Flows gehören dir."],
      ["Power Automate oder n8n?", "Power Automate, wenn fast alles in Microsoft 365 passiert. n8n, wenn viele verschiedene Tools verbunden werden sollen oder du selbst hosten willst. Ich arbeite mit beidem und empfehle, was zum Ablauf passt."],
      ["Power Automate oder Camunda?", "Power Automate ist ein Low-Code-Werkzeug für Abläufe rund um Microsoft 365. Camunda ist eine Prozess-Engine für Entwicklerteams, die BPMN-Modelle direkt ausführt und eher bei großen, systemübergreifenden Prozessen eingesetzt wird. Für die meisten Büroabläufe ist Power Automate der kürzere Weg."],
      ["Kannst du bestehende Flows übernehmen?", "Ja. Ich schaue mir an, was da ist, mache es stabil und dokumentiere es, sodass dein Team damit weiterarbeiten kann."],
    ] as [string, string][],
    ctaTitle: "Welcher Ablauf in Microsoft 365 kostet dich am meisten Zeit?",
    ctaText: "Erzähl es mir in 15 Minuten. Du bekommst eine ehrliche Einschätzung, ob Power Automate dafür das richtige Werkzeug ist.",
  },
  en: {
    title: <>Power Automate: consulting and development <em className="hl">that puts Microsoft 365 to work for you.</em></>,
    lead: <>You have Microsoft 365, which often means you already have Power Automate – and nobody uses it. I look at your processes and build the flows that take over <Hl>emails, approvals and data transfers</Hl>. Process first, then the tool.</>,
    a2: "What is Power Automate?",
    whatTitle: "What is Power Automate – and what is it good for?",
    what: [
      <>Power Automate is Microsoft&apos;s automation tool and part of the Power Platform. It connects Outlook, Teams, SharePoint, Excel and many other services, so recurring tasks <Hl>run by themselves</Hl>: an email arrives, the attachment is filed, the right person approves in Teams, the data lands in the list.</>,
      <>There are two kinds of flows. <strong>Cloud flows</strong> work through interfaces and run around the clock in the Microsoft cloud. <strong>Desktop flows</strong> operate programs through the user interface, like a person with mouse and keyboard – meant for older software without an interface. I explain the difference in <Link href="/blog/power-automate-cloud-vs-desktop">Power Automate: cloud flows and desktop flows</Link>.</>,
      <>The catch: a flow is quickly clicked together but rarely built properly. Without error handling, documentation and clear ownership, it stops as soon as something changes. That&apos;s where I help.</>,
    ],
    buildTitle: "What I build with Power Automate",
    build: [["Cloud flows", "Workflows between Outlook, Teams, SharePoint, Excel and your other tools: filing attachments, transferring data, sending notifications and reminders."], ["Approvals", "Leave, orders, invoices, documents: approvals run through Teams or Outlook, traceable and without chasing people by email."], ["Desktop automation", "Desktop flows (RPA) for line-of-business applications and legacy systems without an interface. Only where there is no more stable way."], ["Power Apps and lists", "Small apps and SharePoint lists as input forms, so data arrives clean and the flow can work with it."]] as [string, string][],
    helpTitle: "How I can help",
    help: [
      ["Consulting", "Which processes are worth it, what does your licence cover, where is a cloud flow enough and where do you need more? You get a clear assessment before any money is spent."],
      ["Development", "I build the flows, test them with real cases and hand them over documented. With error handling, so you notice when something gets stuck."],
      ["Existing flows", "Flows someone built and nobody understands any more: I clean them up, make them stable and document them."],
      ["Training", <>Should your team build flows themselves? In <Link href="/ki-coaching">coaching</Link> I teach it on your own processes.</>],
    ] as [string, React.ReactNode][],
    whyTitle: "Certified and hands-on",
    certKicker: "Microsoft Certified", certName: "Power Platform Functional Consultant Associate", certNote: "Certified since January 2025", certVerify: "Verify with Microsoft",
    why: [
      ["Experience", "For almost two years I designed and developed solutions on the Microsoft Power Platform as an Intelligent Automation Engineer in consulting: Power Automate, Power Apps and Copilot Studio."],
      ["AI in the process", "AI steps, APIs and data processing are part of it – where they actually take work over in the process."],
      ["From business need to solution", "I translate what your team needs into a solution that runs day to day and can be extended later."],
    ] as [string, string][],
    stepsTitle: "How a Power Automate project works",
    steps: [["Call", "15 minutes: which process costs the most time? We pick the one that's most worth it."], ["Process check", "I map the process, check systems and licences and define what gets automated."], ["Development", "I build the flow in your Microsoft environment and test it with real cases."], ["Handover", "Documentation and a walkthrough. The flow is yours and runs in your tenant."]] as [string, string][],
    pkgName: "Power Automate pilot",
    pkg: ["One complete process, live and tested", "Built in your Microsoft 365 environment", "Error handling and alerts when something goes wrong", "An assessment of which licences you actually need", "Documentation and walkthrough"],
    priceLabel: "Fixed price", price: "from €1,500", priceNote: "Microsoft licences are not included. After that, more processes at a fixed price or ongoing support.", priceCta: "Book a call",
    fitTitle: "When Power Automate fits – and when it doesn't",
    fit: [
      ["Good fit", "Your team works in Microsoft 365, the data lives in Outlook, SharePoint, Teams or Excel, and IT wants to stay within the Microsoft environment."],
      ["Partial fit", "There are legacy systems without an interface. That takes desktop flows – possible, but more maintenance."],
      ["Probably not", <>Most of your tools sit outside Microsoft, or you would need many premium connectors. Then n8n is often the better choice. I&apos;ll tell you that too – see <Link href="/automation">automation</Link>.</>],
    ] as [string, React.ReactNode][],
    articlesTitle: "More on Power Automate and processes",
    faq: [
      ["What can you do with Power Automate?", "Anything that happens again and again by fixed rules: filing emails and attachments, collecting approvals, moving data between Excel, SharePoint and other systems, sending reminders, compiling reports."],
      ["Do we need additional licences?", "It depends on the process. Cloud flows with standard connectors are included in many Microsoft 365 licences. Premium connectors and desktop flows usually need an additional licence. I clarify this before the project, so you don't buy anything you don't need."],
      ["Where do the flows and the data live?", "In your own Microsoft environment. I build in your tenant, and the flows belong to you."],
      ["Power Automate or n8n?", "Power Automate when almost everything happens in Microsoft 365. n8n when many different tools need connecting or you want to self-host. I work with both and recommend what fits the process."],
      ["Power Automate or Camunda?", "Power Automate is a low-code tool for processes around Microsoft 365. Camunda is a process engine for developer teams that executes BPMN models directly and is typically used for large, cross-system processes. For most office processes, Power Automate is the shorter route."],
      ["Can you take over existing flows?", "Yes. I look at what's there, make it stable and document it, so your team can keep working with it."],
    ] as [string, string][],
    ctaTitle: "Which process in Microsoft 365 costs you the most time?",
    ctaText: "Tell me about it in 15 minutes. You'll get an honest assessment of whether Power Automate is the right tool for it.",
  },
}

export default function PowerAutomate({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <Shell lang={lang}>
      <JsonLd data={serviceSchema(lang, PA_PATH, PA_META[lang].title.replace(" – foorgun.ai", ""), PA_META[lang].description)} />
      <PageHero title={t.title} lead={t.lead} actions={[{ href: CALL, label: UI[lang].ctaPrimary }, { href: "#was", label: t.a2 }]} />
      <section className="rule" id="was"><div className="wrap split"><h2>{t.whatTitle}</h2><div className="prose">{t.what.map((p, i) => <p key={i}>{p}</p>)}</div></div></section>
      <Section><h2>{t.buildTitle}</h2><Proof items={t.build} /></Section>
      <section className="rule"><div className="wrap split"><h2>{t.helpTitle}</h2><Facts rows={t.help} /></div></section>
      <section className="rule">
        <div className="wrap split">
          <div>
            <h2>{t.whyTitle}</h2>
            <a className="cert" href={PA_CERT_URL} target="_blank" rel="noopener noreferrer">
              <small>{t.certKicker}</small>
              <strong>{t.certName}</strong>
              <span className="cert-note">{t.certNote}</span>
              <span className="cert-verify">{t.certVerify} ↗</span>
            </a>
          </div>
          <Facts rows={t.why} />
        </div>
      </section>
      <Section>
        <h2>{t.stepsTitle}</h2>
        <Steps items={t.steps} />
        <Package title={t.pkgName} items={t.pkg}>
          <span>{t.priceLabel}</span>
          <div className="amount">{t.price}</div>
          <p className="price-fixed">{UI[lang].fixedPrice}</p>
          <p>{t.priceNote}</p>
          <a className="btn" href={CALL}>{t.priceCta}</a>
        </Package>
      </Section>
      <section className="rule"><div className="wrap split"><h2>{t.fitTitle}</h2><Facts rows={t.fit} /></div></section>
      <ClusterArticles lang={lang} ids={ARTICLES} title={t.articlesTitle} />
      <Section><h2>{UI[lang].faq}</h2><Faq items={t.faq} /></Section>
      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} />
    </Shell>
  )
}
