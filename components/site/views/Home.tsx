import Image from "next/image"
import Bpmn from "../Bpmn"
import Check from "../Check"
import Flow from "../Flow"
import Shell from "../Shell"
import Story, { type Chapter } from "../Story"
import Tools from "../Tools"
import { CALL } from "../config"
import { href, UI, type Lang } from "../i18n"
import { Actions, Cta, Faq, Hl, Section, Steps, Testimonials } from "../blocks"

type Project = { tag: string; status: string; before: string; how: string; result: string; link?: string }

const T = {
  de: {
    title1: "Bau ein Unternehmen, das für dich arbeitet.",
    title2: "Nicht umgekehrt.",
    lead: <>Ich automatisiere wiederkehrende Aufgaben, verbinde deine bestehenden Tools und baue Lösungen, die zu deinem Ablauf passen. Damit du <Hl>weniger Zeit mit E-Mails, Excel und Copy-Paste</Hl> verbringst.</>,
    services: "Leistungen ansehen",
    sub: "15 Minuten, kostenlos, unverbindlich, per Video. Keine Vorbereitung nötig.",
    trust: "Wirtschaftsinformatiker · Persönliche Umsetzung statt anonymer Agentur · Mit Dokumentation und Übergabe",
    casesTitle: "Typische Situationen, in denen sich Automatisierung lohnt",
    casesLead: "Vier Beispiele aus dem Büroalltag. Jeweils mit Problem und Lösung, damit du siehst, wie das bei dir aussehen könnte.",
    problem: "Das Problem",
    solution: "Die Lösung",
    cases: [
      { tag: "Agenturen & Dienstleister", status: "Typischer Anwendungsfall", problem: "Kundendaten werden zwischen Tools hin und her kopiert, Onboarding und Reports entstehen von Hand in Excel.", solution: "Daten fließen automatisch dorthin, wo sie gebraucht werden. Onboarding und Kundenreports laufen als fester Ablauf, dein Team prüft nur noch das Ergebnis." },
      { tag: "Architektur & Planung", status: "In Umsetzung", problem: "Projektdaten aus Werkverträgen werden immer wieder von Hand in Excel übertragen.", solution: "Informationen aus den Verträgen werden mit KI für die Projektanlage aufbereitet. Dazu eine zentrale Projektübersicht und digitale Urlaubsanträge." },
      { tag: "Handwerk & Bau", status: "Typischer Anwendungsfall", problem: "Abends noch Angebote schreiben, und das Nachfassen geht im Alltag unter.", solution: "Anfragen werden erfasst, ein Angebotsentwurf wird vorbereitet und du gibst frei. Offene Angebote werden zum richtigen Zeitpunkt nachverfolgt." },
      { tag: "Beauty & Barber", status: "Umgesetzt", problem: "Termine laufen über WhatsApp, und für jede Buchungsplattform fällt ein Abo an.", solution: "Eine eigene Website mit integrierter Online-Terminbuchung, passend zu deinen Abläufen und mit mehr Kontrolle über den Buchungsprozess." },
    ] as { tag: string; status: string; problem: string; solution: string }[],
    projectsTitle: "Echte Projekte",
    projectsLead: "Was ich bisher umgesetzt habe – und woran ich gerade arbeite. Ohne Kundennamen, wo es um interne Abläufe geht.",
    before: "Ausgangslage",
    how: "Umsetzung",
    result: "Ergebnis",
    caseLink: "Zur Fallstudie",
    projects: [
      { tag: "Internationale Influencer-Agentur", status: "Umgesetzt", before: "Creator-Bewerbungen, Kundenlisten und Versanddaten für Produktproben wurden von Hand zwischen Tools hin und her kopiert.", how: "Bewerbungen werden automatisch erfasst und mit relevanten Informationen angereichert. Kundenlisten und Versanddaten entstehen daraus automatisch.", result: "Über 50.000 Bewerbungen in den ersten vier Monaten verarbeitet. 7 von 9 Prozessschritten laufen automatisch, die Auswahl bleibt beim Team.", link: "/blog/fallstudie-influencer-agentur" },
      { tag: "Architekturbüro, ca. 10 Mitarbeitende", status: "In Umsetzung", before: "Projektdaten aus Werkverträgen werden von Hand in Excel übertragen.", how: "Informationen aus den Verträgen werden mit KI für die Projektanlage aufbereitet. Dazu kommen eine zentrale Projektübersicht und digitale Urlaubsanträge.", result: "Das Projekt läuft noch. Ziel: weniger doppelte Eingaben und eine Übersicht für alle." },
      { tag: "ViUnlimited, Kampfsport-Studio", status: "Umgesetzt", before: "Social-Media-Content entstand nebenher und kostete das Team jede Woche Zeit.", how: "Eine automatisierte Content-Pipeline, die den Ablauf von der Idee bis zum fertigen Beitrag strukturiert.", result: "Content entsteht als fester Ablauf statt nebenbei – siehe Stimme von Sandra Schmidt weiter unten." },
      { tag: "Salon Majesto, Barbershop", status: "Umgesetzt", before: "Termine liefen über eine kostenpflichtige externe Buchungsplattform.", how: "Eine eigene, minimalistische Website mit integrierter Online-Buchung.", result: "Eigene Präsenz mit direkter Buchung und volle Kontrolle über den Buchungsprozess." },
    ] as Project[],
    servicesTitle: "Drei Bausteine, die aufeinander aufbauen",
    nodes: [
      { path: "/automation", who: "Automation · für Unternehmen mit Routinearbeit", title: "Aufgaben automatisch erledigen", text: <>Ein wiederkehrender Ablauf läuft ab jetzt von allein – <Hl>in 14 Tagen live</Hl>.</>, more: "Zur Automation" },
      { path: "/software", who: "Software & Plattformen · wenn aus Automationen ein System wird", title: "Eigene Systeme für deine Abläufe", text: <>Interne Software, CRM, Kundenportale und Websites mit Buchung – <Hl>alles an einem Ort</Hl>.</>, more: "Zu Software & Plattformen" },
      { path: "/ki-coaching", who: "KI-Coaching · damit dein Team es nutzt", title: "Dein Team nutzt die neuen Abläufe selbst", text: <>Dein Team lernt, KI und die neuen Systeme <Hl>selbst einzusetzen</Hl>.</>, more: "Zum Coaching" },
    ],
    approachTitle: <>Ich fange bei deinem Ablauf an, <em className="hl">nicht beim Tool.</em></>,
    approach: [
      <>Die meisten Unternehmen brauchen keine „KI-Strategie“. Sie brauchen <Hl>weniger Copy-Paste, weniger verpasste Termine</Hl> und weniger Excel-Listen, die nur eine Person versteht.</>,
      <>Deshalb schaue ich mir zuerst an, wie du heute arbeitest. Dann baue ich <Hl>das Kleinste, das spürbar Zeit spart</Hl> – und erst danach das Nächste. Du bekommst etwas, das läuft, und verstehst, wie es funktioniert.</>,
    ],
    stepsTitle: "So wird aus KI echte Veränderung",
    steps: [
      ["Zuerst verstehen", "Ich schaue mir an, wie du heute arbeitest: Wo geht Zeit verloren, wo bleibt etwas liegen, wo wird alles doppelt getippt?"],
      ["Klein anfangen", "Ich baue das Kleinste, das spürbar entlastet. In Tagen, nicht in Monaten, und so, dass du es verstehst."],
      ["Dann ausbauen", "Erst wenn das läuft, kommt das Nächste: weitere Abläufe, ein eigenes System, eine bessere Website."],
    ] as [string, string][],
    story: {
      labels: { title: "Wer dahinter steckt", prev: "Zurück", next: "Weiter" },
      chapters: [
        {
          tab: "Wer ich bin",
          title: <>Hi,<br /><span className="hl">ich bin Furkan.</span></>,
          body: <><p>Du hast bei mir einen <strong className="hl">persönlichen Ansprechpartner</strong>, der dein Geschäft und die Technik versteht – von der ersten Prozessaufnahme bis zur laufenden Lösung. Ich baue selbst, dokumentiere alles und übergebe es so, dass du <strong className="hl">keine eigene IT-Abteilung</strong> brauchst.</p><p>Seit 2026 bin ich selbstständig und arbeite remote, auf Deutsch, Englisch und Türkisch – und sitze lieber 15 Minuten mit dir am Tisch, als dir ein Tool zu verkaufen.</p><a className="btn" href={CALL}>15-Min-Gespräch buchen</a></>,
          photo: { src: "/furkan.png", width: 889, height: 1108, alt: "Porträt von Furkan Çetin" },
        },
        {
          tab: "Erfahrung",
          title: <>Erst verstehen,<br /><span className="hl">dann bauen.</span></>,
          body: <><p>Seit 2022 baue ich Automationen und Software für Unternehmen – in Beratung und Digitalisierungsprojekten. Ich schaue mir zuerst an, wie ein Betrieb wirklich arbeitet, und baue dann die Lösung dazu.</p><p>Und ich zeige Teams, wie sie es selbst nutzen. Hier bei einem Workshop zu Power Automate.</p></>,
          photo: { src: "/about/hintergrund.jpg", width: 896, height: 1195, alt: "Furkan Çetin präsentiert einen Power-Automate-Workflow vor einer Leinwand" },
          caption: "Workshop zu Power Automate",
        },
        {
          tab: "Ausbildung",
          title: <>Die Grundlage:<br /><span className="hl">Wirtschaftsinformatik.</span></>,
          body: <><p>Ich habe Wirtschaftsinformatik an der Technischen Hochschule Ulm studiert, mit einem Auslandssemester an der Korea University in Seoul.</p><p>In meiner Bachelorarbeit ging es um Identity Management in Multicloud-Lösungen als Grundlage für eine Cloud-Strategie.</p></>,
          photo: { src: "/about/ausbildung-abschluss.jpg", width: 735, height: 1024, alt: "Furkan Çetin mit Doktorhut und seiner Bachelorarbeit der TH Ulm" },
          caption: "Abschluss an der TH Ulm",
        },
      ] as Chapter[],
    },
    faq: [
      ["Wir haben schon ein KI-Tool ausprobiert, das hat nicht funktioniert — was ist hier anders?", "Das höre ich am häufigsten. Die meisten KI-Tools werden zuerst gekauft und dann einem Prozess aufgezwungen, für den sie nie gebaut wurden. Ich mache es umgekehrt — zuerst den Prozess fixen, dann das passende Tool bauen oder anbinden. Meistens liegt genau daran, warum der erste Versuch nicht funktioniert hat."],
      ["Für welche Unternehmen lohnt sich Automatisierung?", "Nicht jeder Prozess muss automatisiert werden. Es lohnt sich besonders, wenn eine Aufgabe regelmäßig anfällt, klare Schritte hat und heute unnötig viel Zeit kostet. Im Erstgespräch schauen wir gemeinsam, ob sich die Umsetzung für dich wirtschaftlich lohnt."],
      ["Was passiert, wenn eine Automatisierung einen Fehler macht?", "Bei wichtigen Entscheidungen, etwa bei einem Angebot, gibst du vorher selbst frei. Und ich baue die Abläufe so, dass du bei einem Fehler Bescheid bekommst, statt dass etwas still schiefläuft. Wartung und laufende Betreuung klären wir vorab, auf Wunsch per Monatsretainer."],
      ["Brauche ich ein technisches Team, um mit dir zu arbeiten?", "Nein. Ich übernehme die technische Seite komplett. Du beschreibst das Problem, ich analysiere den Prozess und baue die Lösung. Kein internes IT-Team nötig."],
      ["Wie lange dauert es, bis ich erste Ergebnisse sehe?", "Die meisten Kunden sehen funktionierende Automatisierungen innerhalb von 2–3 Wochen. Wir starten zuerst mit dem Bereich mit der größten Wirkung, damit Ergebnisse schnell kommen."],
      ["Mit welchen Tools arbeitest du?", "Was auch immer zum Problem passt — n8n, Airtable, OpenAI, Claude, Google Workspace und die meisten Tools mit einer API. Aber ich starte nicht beim Tool. Ich starte bei deinem Prozess und wähle dann, was wirklich passt. Wenn du nicht sicher bist, was du brauchst, ist genau dafür das Kennenlerngespräch da."],
      ["Arbeitest du mit kleinen Unternehmen oder nur mit großen?", "Mit beiden. Entscheidend ist, ob Automatisierung echten Mehrwert für dein Unternehmen schafft — nicht die Unternehmensgröße."],
      ["Was kostet das?", "Jedes Projekt wird individuell kalkuliert. Starte mit einem kostenlosen 15-minütigen Gespräch und du bekommst ein klares, transparentes Angebot."],
      ["Kannst du speziell bei Recruiting / Bewerber-Screening helfen?", "Ja — das ist gerade einer der Bereiche mit der größten Wirkung. Ich baue Systeme, die Bewerbungen nach deinen echten Kriterien filtern und ranken, damit dein Team nur die Kandidaten prüft, die es wert sind."],
      ["Was passiert, nachdem das Projekt abgeschlossen ist?", "Dir gehört alles. Vollständige Dokumentation, Übergabe und optional laufende Unterstützung per Monatsretainer — damit das System reibungslos weiterläuft."],
      ["Kannst du mit unseren bestehenden Tools arbeiten, oder müssen wir neue Software kaufen?", "Ich arbeite so weit wie möglich mit dem, was du schon hast. Falls ein neues Tool nötig ist, empfehle ich die kosteneffizienteste Option und richte sie für dich ein."],
    ] as [string, string][],
    ctaTitle: "Lass uns schauen, wo du gerade Zeit verlierst.",
    ctaText: "In 15 Minuten gehen wir durch, wie du heute arbeitest. Du bekommst eine ehrliche Einschätzung, was sich lohnt – auch wenn das Ergebnis ist, dass du mich nicht brauchst. Du brauchst keine Vorbereitung und keine technischen Vorkenntnisse.",
  },
  en: {
    title1: "Build a business that works for you.",
    title2: "Not the other way around.",
    lead: <>I automate recurring tasks, connect the tools you already use and build solutions that fit how you work. So you spend <Hl>less time on email, Excel and copy-paste</Hl>.</>,
    services: "See services",
    sub: "15 minutes, free, no obligation, via video. No preparation needed.",
    trust: "Business information systems graduate · Personal delivery instead of an anonymous agency · Documented and handed over",
    casesTitle: "Typical situations where automation pays off",
    casesLead: "Four examples from everyday office work. Each with the problem and the solution, so you can see what it could look like for you.",
    problem: "The problem",
    solution: "The solution",
    cases: [
      { tag: "Agencies & service providers", status: "Typical use case", problem: "Client data gets copied back and forth between tools, onboarding and reports are built by hand in Excel.", solution: "Data flows to where it's needed automatically. Onboarding and client reports run as a fixed process, your team only reviews the result." },
      { tag: "Architecture & planning", status: "In progress", problem: "Project data from contracts is typed into Excel by hand, again and again.", solution: "Information from the contracts is prepared with AI for project setup. Plus a central project overview and digital leave requests." },
      { tag: "Trades & construction", status: "Typical use case", problem: "Writing quotes in the evening, and follow-ups get lost in the daily routine.", solution: "Enquiries are captured, a quote draft is prepared and you approve it. Open quotes are followed up at the right time." },
      { tag: "Beauty & barber", status: "Delivered", problem: "Appointments run through WhatsApp, and every booking platform comes with a subscription.", solution: "Your own website with built-in online booking, fitted to how you work, with more control over the booking process." },
    ] as { tag: string; status: string; problem: string; solution: string }[],
    projectsTitle: "Real projects",
    projectsLead: "What I've delivered so far – and what I'm working on right now. Without client names where internal processes are involved.",
    before: "Starting point",
    how: "What I built",
    result: "Outcome",
    caseLink: "Read the case study",
    projects: [
      { tag: "International influencer agency", status: "Delivered", before: "Creator applications, client lists and shipping data for product samples were copied between tools by hand.", how: "Applications are captured automatically and enriched with relevant information. Client lists and shipping data are generated from that automatically.", result: "More than 50,000 applications processed in the first four months. 7 of 9 process steps run automatically, the selection stays with the team.", link: "/blog/case-study-influencer-agency" },
      { tag: "Architecture firm, approx. 10 people", status: "In progress", before: "Project data from contracts is typed into Excel by hand.", how: "Information from the contracts is prepared with AI for project setup. Plus a central project overview and digital leave requests.", result: "The project is still running. Goal: fewer duplicate entries and one overview for everyone." },
      { tag: "ViUnlimited, martial arts studio", status: "Delivered", before: "Social media content was produced on the side and cost the team time every week.", how: "An automated content pipeline that structures the process from idea to finished post.", result: "Content is now a fixed process instead of a side task – see Sandra Schmidt's words further down." },
      { tag: "Salon Majesto, barbershop", status: "Delivered", before: "Appointments ran through a paid external booking platform.", how: "Its own minimalist website with built-in online booking.", result: "Its own presence with direct booking and full control over the booking process." },
    ] as Project[],
    servicesTitle: "Three building blocks that build on each other",
    nodes: [
      { path: "/automation", who: "Automation · for businesses with routine work", title: "Get recurring tasks done automatically", text: <>A recurring process runs on its own from now on – <Hl>live in 14 days</Hl>.</>, more: "Go to automation" },
      { path: "/software", who: "Software & platforms · when automations become a system", title: "Your own systems for your workflows", text: <>Internal software, CRM, client portals and websites with booking – <Hl>all in one place</Hl>.</>, more: "Go to software & platforms" },
      { path: "/ki-coaching", who: "AI coaching · so your team uses it", title: "Your team runs the new workflows themselves", text: <>Your team learns to use AI and the new systems <Hl>on their own</Hl>.</>, more: "Go to coaching" },
    ],
    approachTitle: <>I start with your process, <em className="hl">not with the tool.</em></>,
    approach: [
      <>Most businesses don&apos;t need an “AI strategy”. They need <Hl>less copy-paste, fewer missed appointments</Hl> and fewer spreadsheets that only one person understands.</>,
      <>So first I look at how you work today. Then I build <Hl>the smallest thing that noticeably saves time</Hl> – and only then the next one. You get something that runs, and you understand how it works.</>,
    ],
    stepsTitle: "How AI turns into real change",
    steps: [
      ["Understand first", "I look at how you work today: where time gets lost, where things fall through the cracks, where everything is typed twice."],
      ["Start small", "I build the smallest thing that takes real work off your plate. In days, not months, and in a way you understand."],
      ["Then expand", "Only once that runs comes the next step: more processes, your own system, a better website."],
    ] as [string, string][],
    story: {
      labels: { title: "Who's behind it", prev: "Back", next: "Next" },
      chapters: [
        {
          tab: "Who I am",
          title: <>Hi,<br /><span className="hl">I&apos;m Furkan.</span></>,
          body: <><p>You get <strong className="hl">a personal point of contact</strong> who understands your business and the technology – from the first process mapping to a running solution. I build it myself, document everything and hand it over so you <strong className="hl">don&apos;t need your own IT department</strong>.</p><p>I&apos;ve been self-employed since 2026, working remotely in German, English and Turkish – and I&apos;d rather spend 15 minutes at the table with you than sell you a tool.</p><a className="btn" href={CALL}>Book a 15-min call</a></>,
          photo: { src: "/furkan.png", width: 889, height: 1108, alt: "Portrait of Furkan Çetin" },
        },
        {
          tab: "Experience",
          title: <>Understand first,<br /><span className="hl">then build.</span></>,
          body: <><p>Since 2022 I&apos;ve been building automations and software for businesses – in consulting and digitalisation projects. I first look at how a business really works, then build the solution to fit.</p><p>And I show teams how to use it themselves. Here at a workshop on Power Automate.</p></>,
          photo: { src: "/about/hintergrund.jpg", width: 896, height: 1195, alt: "Furkan Çetin presenting a Power Automate workflow in front of a projection screen" },
          caption: "Workshop on Power Automate",
        },
        {
          tab: "Education",
          title: <>The foundation:<br /><span className="hl">business information systems.</span></>,
          body: <><p>I studied Business Information Systems at Ulm University of Applied Sciences, including a semester abroad at Korea University in Seoul.</p><p>My bachelor&apos;s thesis was on identity management in multi-cloud solutions as the foundation for a cloud strategy.</p></>,
          photo: { src: "/about/ausbildung-abschluss.jpg", width: 735, height: 1024, alt: "Furkan Çetin in a graduation cap holding his bachelor's thesis from THU Ulm" },
          caption: "Graduation at THU Ulm",
        },
      ] as Chapter[],
    },
    faq: [
      ["We already tried an AI tool and it didn't work out — how is this different?", "That's the most common story I hear. Most AI tools get bought first, then forced onto a process that was never built for them. I do it the other way — fix the process first, then build or connect the right tool. That's usually why the first attempt didn't stick."],
      ["Which businesses benefit from automation?", "Not every process needs to be automated. It pays off most when a task comes up regularly, has clear steps and costs more time than it should. In the first call we'll look together at whether it makes economic sense for you."],
      ["What happens if an automation makes a mistake?", "For important decisions, such as a quote, you approve it yourself first. And I build the workflows so that you get notified when something fails, instead of it going wrong silently. We agree on maintenance and ongoing support up front, optionally as a monthly retainer."],
      ["Do I need to have a technical team to work with you?", "No. I handle the technical side completely. You describe the problem, I map the process and build the solution. No internal IT team required."],
      ["How long does it take to see first results?", "Most clients see working automations within 2–3 weeks. We start with the highest-impact area first, so results come fast."],
      ["What tools do you work with?", "Whatever fits the problem — n8n, Airtable, OpenAI, Claude, Google Workspace, and most tools with an API. But I don't start with the tool. I start with your process, then pick what actually fits. If you're unsure what you need, that's exactly what the discovery call is for."],
      ["Do you work with small businesses or only large companies?", "Both. What matters is whether automation can create real value for your business — not your company size."],
      ["How much does it cost?", "Every engagement is scoped individually. Start with a free 15-minute call and you'll get a clear, transparent proposal."],
      ["Can you help with recruiting/applicant screening specifically?", "Yes — it's one of the areas I see the most impact in right now. I build systems that filter and rank applications against your actual criteria, so your team only reviews the candidates worth their time."],
      ["What happens after the project is done?", "You own everything. Full documentation, handover, and optional ongoing support via a monthly retainer — so the system keeps running smoothly."],
      ["Can you work with our existing tools, or do we need to buy new software?", "I work with what you already have wherever possible. If a new tool is needed, I'll recommend the most cost-effective option and set it up for you."],
    ] as [string, string][],
    ctaTitle: "Let's find out where you're losing time.",
    ctaText: "In 15 minutes we'll walk through how you work today. You'll get an honest assessment of what's worth doing – even if the answer is that you don't need me. No preparation or technical knowledge needed.",
  },
}

export default function Home({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <Shell lang={lang}>
      <section className="hero hero-home">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                {t.title1} <span className="line2">{t.title2}</span>
              </h1>
              <p className="lead">{t.lead}</p>
              <Actions items={[{ href: CALL, label: UI[lang].ctaPrimary }, { href: "#leistungen", label: t.services }]} />
              <p className="hero-sub">{t.sub}</p>
              <p className="hero-sub hero-trust">{t.trust}</p>
            </div>
            <Image className="portrait" src="/furkan.png" alt="Furkan Çetin" width={889} height={1108} sizes="(max-width: 960px) 280px, 320px" priority />
          </div>


        </div>
      </section>

      <section className="rule" id="beispiele">
        <div className="wrap">
          <h2>{t.casesTitle}</h2>
          <p className="lead">{t.casesLead}</p>
          <div className="usecases">
            {t.cases.map((c) => (
              <article key={c.tag} className="usecase">
                <p className="uc-meta"><span className="uc-tag">{c.tag}</span><span className="uc-status">{c.status}</span></p>
                <h3>{t.problem}</h3>
                <p>{c.problem}</p>
                <h3>{t.solution}</h3>
                <p>{c.solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="wrap">
          <h2 id="leistungen" className="services-title flush">{t.servicesTitle}</h2>
          <Flow nodes={t.nodes.map((n) => ({ ...n, href: href(lang, n.path) }))} />
        </div>
      </section>

      <section className="rule">
        <div className="wrap split">
          <h2>{t.approachTitle}</h2>
          <div className="prose">
            {t.approach.map((p, n) => <p key={n}>{p}</p>)}
          </div>
        </div>
        <div className="wrap">
          <Bpmn lang={lang} />
        </div>
      </section>

      <section className="rule" id="projekte">
        <div className="wrap">
          <h2>{t.projectsTitle}</h2>
          <p className="lead">{t.projectsLead}</p>
          <div className="usecases">
            {t.projects.map((c) => (
              <article key={c.tag} className="usecase">
                <p className="uc-meta"><span className="uc-tag">{c.tag}</span><span className="uc-status">{c.status}</span></p>
                <h3>{t.before}</h3>
                <p>{c.before}</p>
                <h3>{t.how}</h3>
                <p>{c.how}</p>
                <h3>{t.result}</h3>
                <p>{c.result}</p>
                {c.link && <p><a className="more" href={href(lang, c.link)}>{t.caseLink} →</a></p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Tools lang={lang} />

      <Section>
        <h2>{t.stepsTitle}</h2>
        <Steps items={t.steps} />
      </Section>

      <Testimonials lang={lang} keys={["daniela", "sandra", "patrick"]} logos />

      <Story id="ueber-mich" labels={t.story.labels} chapters={t.story.chapters} />

      <Check lang={lang} />

      <Section id="faq">
        <h2>{UI[lang].faq}</h2>
        <Faq items={t.faq} />
      </Section>

      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} />
    </Shell>
  )
}
