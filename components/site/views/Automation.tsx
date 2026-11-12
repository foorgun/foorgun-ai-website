import Shell from "../Shell"
import JsonLd, { serviceSchema } from "../JsonLd"
import ClusterArticles from "../ClusterArticles"
import { CALL } from "../config"
import { UI, type Lang } from "../i18n"
import { Cta, Facts, Faq, Hl, Package, PageHero, Proof, Section, Steps, Testimonials } from "../blocks"

const SVC = {"de": ["Automation für Unternehmen", "Wiederkehrende Abläufe mit n8n und KI automatisieren – zum Festpreis, in 14 Tagen live."], "en": ["Business automation", "Automate recurring processes with n8n and AI – fixed price, live in 14 days."]} as const

const T = {
  de: {
    title: <>Ein Ablauf, der dich jede Woche Stunden kostet – <em className="hl">in 14 Tagen automatisiert.</em></>,
    lead: <>Ich verbinde deine Tools mit n8n und KI, sodass Daten nicht mehr <Hl>von Hand übertragen</Hl>, Erinnerungen nicht mehr <Hl>vergessen</Hl> und Dokumente nicht mehr <Hl>abgetippt</Hl> werden.</>,
    a2: "Beispiele ansehen",
    exTitle: "Typische Abläufe, die ich automatisiere",
    ex: [["Dokumente auslesen", "Rechnungen, Verträge oder Formulare kommen per Mail rein. KI liest die Daten aus und trägt sie ins richtige System ein."], ["Fristen und Erinnerungen", "Vertragsenden, Wiedervorlagen, Verlängerungen: Kunden und Team werden rechtzeitig automatisch erinnert."], ["Anfragen und Deals", "Anfragen aus Mail, Formular oder Instagram landen sortiert im CRM, mit Zusammenfassung und nächster Aufgabe."], ["Berichte", "Zahlen aus mehreren Tools werden jede Woche zusammengeführt und als fertiger Bericht verschickt."]] as [string, string][],
    stepsTitle: "So läuft der Pilot ab",
    steps: [["Gespräch", "15 Minuten: Wo verlierst du Zeit? Wir wählen den einen Ablauf, der sich am meisten lohnt."], ["Prozess-Check", "Ich schaue mir den Ablauf und deine Tools genau an und lege fest, was automatisiert wird."], ["Umsetzung", "Ich baue den Workflow, teste ihn mit echten Fällen und stelle ihn live."], ["Übergabe", "Dokumentation und Video. Du weißt, was läuft und was du bei Bedarf anpasst."]] as [string, string][],
    pkgName: "Automations-Pilot",
    pkg: ["Ein kompletter Ablauf, live und getestet", "Anbindung deiner bestehenden Tools (Mail, CRM, Sheets, Slack, Monday …)", "KI-Schritte, wo sie wirklich helfen", "Fehlermeldung, wenn etwas hakt", "Dokumentation und Übergabevideo"],
    priceLabel: "Festpreis", price: "ab 1.500 €", priceNote: "Danach weitere Abläufe zum Festpreis oder laufende Betreuung im Monat.", priceCta: "Gespräch buchen",
    whyTitle: "Warum mit mir",
    why: [["Prozess-Know-how", "Wirtschaftsinformatiker mit Hintergrund in Prozessmanagement, Digitalisierung und Automation."], ["Aus der Praxis", "Automationen, die bei Kunden im Alltag laufen – keine Demos, keine Prototypen in der Schublade."], ["Pragmatisch", "Ich automatisiere, was sich rechnet – nicht alles, was technisch möglich ist."]] as [string, string][],
    faq: [["Welche Tools kannst du anbinden?", "Fast alles mit Schnittstelle: Gmail, Outlook, Google Sheets, Excel, Monday, HubSpot, Slack, WhatsApp, Notion, Airtable und viele mehr."], ["Wo laufen die Daten?", "Je nach Bedarf in n8n Cloud mit Servern in der EU oder auf deinem eigenen Server."], ["Was, wenn sich unser Ablauf ändert?", "Kleine Anpassungen machst du nach der Einweisung selbst. Für größere bin ich da."], ["Brauchen wir dafür KI?", "Nicht immer. Viele Abläufe brauchen nur saubere Regeln. KI kommt dort rein, wo Texte gelesen oder eingeordnet werden müssen."]] as [string, string][],
    ctaTitle: "Welcher Ablauf nervt dich am meisten?",
    ctaText: "Erzähl es mir in 15 Minuten. Du bekommst eine ehrliche Einschätzung, ob und wie es sich automatisieren lässt.",
  },
  en: {
    title: <>A process that costs you hours every week – <em className="hl">automated in 14 days.</em></>,
    lead: <>I connect your tools with n8n and AI, so data no longer gets <Hl>copied by hand</Hl>, reminders no longer get <Hl>forgotten</Hl> and documents no longer get <Hl>typed up</Hl>.</>,
    a2: "See examples",
    exTitle: "Typical processes I automate",
    ex: [["Reading documents", "Invoices, contracts or forms arrive by email. AI extracts the data and enters it into the right system."], ["Deadlines and reminders", "Contract ends, follow-ups, renewals: clients and team get reminded automatically, on time."], ["Enquiries and deals", "Enquiries from email, forms or Instagram land in your CRM, sorted, with a summary and the next task."], ["Reports", "Numbers from several tools are pulled together every week and sent out as a finished report."]] as [string, string][],
    stepsTitle: "How the pilot works",
    steps: [["Call", "15 minutes: where are you losing time? We pick the one process that's most worth it."], ["Process check", "I look closely at the process and your tools and define what gets automated."], ["Build", "I build the workflow, test it with real cases and put it live."], ["Handover", "Documentation and video. You know what's running and what to adjust if needed."]] as [string, string][],
    pkgName: "Automation pilot",
    pkg: ["One complete process, live and tested", "Connected to your existing tools (email, CRM, Sheets, Slack, Monday …)", "AI steps where they actually help", "Error alerts when something goes wrong", "Documentation and handover video"],
    priceLabel: "Fixed price", price: "from €1,500", priceNote: "After that, more processes at a fixed price or ongoing monthly support.", priceCta: "Book a call",
    whyTitle: "Why work with me",
    why: [["Process know-how", "Business information systems graduate with a background in process management, digitalisation and automation."], ["Hands-on", "Automations that run in my clients' day-to-day work – not demos or prototypes left in a drawer."], ["Pragmatic", "I automate what pays off – not everything that's technically possible."]] as [string, string][],
    faq: [["Which tools can you connect?", "Almost anything with an API: Gmail, Outlook, Google Sheets, Excel, Monday, HubSpot, Slack, WhatsApp, Notion, Airtable and many more."], ["Where does the data live?", "Depending on your needs, in n8n Cloud with servers in the EU or on your own server."], ["What if our process changes?", "After the walkthrough you can make small adjustments yourself. I'm there for bigger ones."], ["Do we even need AI for this?", "Not always. Many processes just need clean rules. AI comes in where text needs to be read or classified."]] as [string, string][],
    ctaTitle: "Which process annoys you the most?",
    ctaText: "Tell me about it in 15 minutes. You'll get an honest assessment of whether and how it can be automated.",
  },
}

export default function Automation({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <Shell lang={lang}>
      <JsonLd data={serviceSchema(lang, "/automation", SVC[lang][0], SVC[lang][1])} />
      <PageHero title={t.title} lead={t.lead} actions={[{ href: CALL, label: UI[lang].ctaPrimary }, { href: "#beispiele", label: t.a2 }]} />
      <Section id="beispiele"><h2>{t.exTitle}</h2><Proof items={t.ex} /></Section>
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
      <section className="rule"><div className="wrap split"><h2>{t.whyTitle}</h2><Facts rows={t.why} /></div></section>
      <Testimonials lang={lang} keys={["daniela", "sandra"]} />
      <ClusterArticles lang={lang} cluster="automation" />
      <Section><h2>{UI[lang].faq}</h2><Faq items={t.faq} /></Section>
      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} />
    </Shell>
  )
}
