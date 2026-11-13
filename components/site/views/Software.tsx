import Link from "next/link"
import Shell from "../Shell"
import JsonLd, { serviceSchema } from "../JsonLd"
import { CALL } from "../config"
import { UI, type Lang } from "../i18n"
import { Cta, Facts, Faq, Hl, Package, PageHero, Quotes, Section, Steps } from "../blocks"

const SVC = {"de": ["Software & Plattformen", "Interne Software, CRM, Kundenportale, APIs, Cloud-Infrastruktur und Websites mit Online-Buchung – gebaut für deine Abläufe, mit Automationen von Anfang an."], "en": ["Software & platforms", "Internal software, CRM, client portals, APIs, cloud infrastructure and websites with online booking – built around how you work, with automations from day one."]} as const

const T = {
  de: {
    title: <>Software, die <em className="hl">zu deinem Betrieb</em> passt.</>,
    lead: <>Interne Software, CRM, Kundenportale, Schnittstellen und Cloud-Infrastruktur – statt Excel-Listen und fünf Abo-Tools, die nicht miteinander reden. <Hl>Es gehört dir</Hl>, und deine Abläufe sind <Hl>von Anfang an automatisiert</Hl>.</>,
    a1: "Erstgespräch buchen", a2: "Ablauf ansehen",
    sub: "Für Büros und Betriebe jeder Größe: Architektur, Handwerk, Agenturen, Kanzleien.",
    buildTitle: "Was ich baue",
    build: [
      { title: "Interne Systeme, CRM, ERP", text: "Ein System für Kunden, Projekte, Angebote und Rechnungen – statt Excel und fünf Abos.", href: "#system", more: "Was so ein System kann" },
      { title: "Kundenportale", text: "Deine Kunden sehen Status, Dokumente und Termine selbst, statt nachzufragen.", href: "#ablauf", more: "So entsteht es" },
      { title: "APIs & Schnittstellen", text: "Eigene APIs und Integrationen, damit deine Systeme Daten direkt austauschen – statt Copy-Paste zwischen Tools.", href: "/de/blog/rpa-oder-api-automatisierung", more: "RPA oder API?" },
      { title: "Cloud-Infrastruktur", text: "Hosting, Datenbanken und Deployments in der EU-Cloud – sicher, skalierbar, dokumentiert und mit Backups.", href: "#ablauf", more: "So entsteht es" },
      { title: "Websites mit Online-Buchung", text: "Für Salons, Studios und lokale Betriebe: eigene Buchung, ohne monatliche Plattformgebühren.", href: "/de/websites", more: "Zu den Websites" },
    ],
    painTitle: "Wenn Standard-Software nicht passt",
    pains: ["Unsere wichtigste Kundenliste ist eine Excel-Datei, die nur eine Person versteht.", "Wir zahlen für ein CRM, ein Projekttool und ein Rechnungstool – und übertragen trotzdem alles von Hand.", "Wenn jemand im Urlaub ist, weiß keiner, wo das Projekt gerade steht."],
    canTitle: "Was so ein System kann",
    can: [["Kunden und Kontakte", "Alle Informationen an einem Ort, mit Verlauf und nächster Aufgabe."], ["Projekte", "Status, Fristen, Zuständigkeiten und Dokumente pro Projekt."], ["Angebote und Rechnungen", "Aus Projektdaten erzeugt, statt neu abgetippt."], ["Automationen", "Erinnerungen, Freigaben und Berichte laufen im Hintergrund."], ["Rechte", "Jede Person sieht, was sie braucht – im Büro und unterwegs."]] as [string, string][],
    stepsTitle: "So entsteht dein System",
    steps: [["Workshop", "Wir gehen deine Abläufe durch: Wer macht was, mit welchen Tools, wo hakt es?"], ["Klickdummy", "Du klickst dich durch einen Entwurf, bevor eine Zeile Code geschrieben ist."], ["Erste Version", "In 4 bis 6 Wochen läuft der wichtigste Teil, deine Daten sind übernommen."], ["Ausbau", "Wir erweitern Schritt für Schritt nach dem, was im Alltag fehlt."]] as [string, string][],
    pkgName: "Internes System nach Maß",
    pkg: ["Workshop und Klickdummy", "Erste Version mit den wichtigsten Modulen", "Datenübernahme aus Excel und bestehenden Tools",
      "Schnittstellen (APIs) zu deinen bestehenden Tools", "Einweisung fürs Team", "Hosting in der EU, Daten gehören dir"],
    priceLabel: "Projekt", price: "ab 3.000 €", priceNote: "Im Workshop legen wir den Umfang genau fest. Danach Wartung und Ausbau im Monat.",
    faq: [["Warum nicht einfach ein fertiges CRM?", "Wenn ein fertiges Tool passt, sage ich dir das. Eigene Software lohnt sich, wenn du deine Abläufe ständig an das Tool anpassen musst."], ["Was passiert mit unseren bestehenden Daten?", "Die übernehmen wir aus Excel, Mails und deinen bisherigen Tools."], ["Sind wir von dir abhängig?", "Nein. Code und Daten gehören dir und sind dokumentiert."]] as [string, string][],
    ctaTitle: "Lass uns deine Abläufe einmal durchgehen.",
    ctaText: "Im Erstgespräch klären wir, ob eigene Software für dich sinnvoll ist – oder ob ein fertiges Tool reicht.",
  },
  en: {
    title: <>Software that <em className="hl">fits your business.</em></>,
    lead: <>Internal software, CRM, client portals, APIs and cloud infrastructure – instead of spreadsheets and five subscription tools that don&apos;t talk to each other. <Hl>You own it</Hl>, and your processes are <Hl>automated from day one</Hl>.</>,
    a1: "Book an intro call", a2: "See the process",
    sub: "For offices and businesses of any size: architecture, trades, agencies, law firms.",
    buildTitle: "What I build",
    build: [
      { title: "Internal systems, CRM, ERP", text: "One system for clients, projects, quotes and invoices – instead of spreadsheets and five subscriptions.", href: "#system", more: "What such a system can do" },
      { title: "Client portals", text: "Your clients see status, documents and appointments themselves instead of asking.", href: "#ablauf", more: "How it comes together" },
      { title: "APIs & integrations", text: "Custom APIs and integrations so your systems exchange data directly – instead of copy-paste between tools.", href: "/blog/rpa-vs-api-automation", more: "RPA or API?" },
      { title: "Cloud infrastructure", text: "Hosting, databases and deployments in the EU cloud – secure, scalable, documented and backed up.", href: "#ablauf", more: "How it comes together" },
      { title: "Websites with online booking", text: "For salons, studios and local businesses: your own booking, no monthly platform fees.", href: "/websites", more: "Go to websites" },
    ],
    painTitle: "When off-the-shelf software doesn't fit",
    pains: ["Our most important client list is a spreadsheet only one person understands.", "We pay for a CRM, a project tool and an invoicing tool – and still copy everything by hand.", "When someone is on holiday, nobody knows where the project stands."],
    canTitle: "What such a system can do",
    can: [["Clients and contacts", "All information in one place, with history and the next task."], ["Projects", "Status, deadlines, responsibilities and documents per project."], ["Quotes and invoices", "Generated from project data instead of typed up again."], ["Automations", "Reminders, approvals and reports run in the background."], ["Permissions", "Everyone sees what they need – in the office and on the go."]] as [string, string][],
    stepsTitle: "How your system comes together",
    steps: [["Workshop", "We walk through your processes: who does what, with which tools, where does it get stuck?"], ["Clickable prototype", "You click through a draft before a single line of code is written."], ["First version", "In 4 to 6 weeks the most important part is running and your data is migrated."], ["Expansion", "We extend it step by step, based on what's missing day to day."]] as [string, string][],
    pkgName: "Custom internal system",
    pkg: ["Workshop and clickable prototype", "First version with the key modules", "Data migration from Excel and existing tools",
      "APIs and integrations with your existing tools", "Team onboarding", "Hosting in the EU, your data belongs to you"],
    priceLabel: "Project", price: "from €3,000", priceNote: "In the workshop we pin down the exact scope. Then monthly maintenance and expansion.",
    faq: [["Why not just use an off-the-shelf CRM?", "If an existing tool fits, I'll tell you. Custom software pays off when you constantly have to bend your processes to fit the tool."], ["What happens to our existing data?", "We migrate it from Excel, emails and your current tools."], ["Will we depend on you?", "No. Code and data belong to you and are documented."]] as [string, string][],
    ctaTitle: "Let's walk through your processes once.",
    ctaText: "In an intro call we'll find out whether custom software makes sense for you – or whether an existing tool will do.",
  },
}

export default function Software({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <Shell lang={lang}>
      <JsonLd data={serviceSchema(lang, "/software", SVC[lang][0], SVC[lang][1])} />
      <PageHero title={t.title} lead={t.lead} actions={[{ href: CALL, label: t.a1 }, { href: "#ablauf", label: t.a2 }]} sub={t.sub} />
      <Section>
        <h2>{t.buildTitle}</h2>
        <ul className="post-list">
          {t.build.map((b) => (
            <li key={b.title}>
              <Link href={b.href}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                <span className="more">{b.more}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section><h2>{t.painTitle}</h2><Quotes items={t.pains} /></Section>
      <section className="rule" id="system"><div className="wrap split"><h2>{t.canTitle}</h2><Facts rows={t.can} /></div></section>
      <Section id="ablauf">
        <h2>{t.stepsTitle}</h2>
        <Steps items={t.steps} />
        <Package title={t.pkgName} items={t.pkg}>
          <span>{t.priceLabel}</span>
          <div className="amount">{t.price}</div>
          <p className="price-fixed">{UI[lang].fixedPrice}</p>
          <p>{t.priceNote}</p>
          <a className="btn" href={CALL}>{t.a1}</a>
        </Package>
      </Section>
      <Section><h2>{UI[lang].faq}</h2><Faq items={t.faq} /></Section>
      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} primary={t.a1} />
    </Shell>
  )
}
