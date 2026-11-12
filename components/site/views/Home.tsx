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

const T = {
  de: {
    title1: "Bau ein Unternehmen, das für dich arbeitet.",
    title2: "Nicht umgekehrt.",
    lead: <>Ich bin Furkan und dein technischer Partner, wenn es um KI geht. Erst verstehe ich, wie du arbeitest. Dann baue ich das, was dir <Hl>jede Woche Stunden spart</Hl>.</>,
    services: "Leistungen ansehen",
    sub: "15 Minuten, kostenlos, unverbindlich, per Video.",
    servicesTitle: "Drei Bausteine, die aufeinander aufbauen",
    nodes: [
      { path: "/automation", who: "Für Unternehmen mit Routinearbeit", title: "Automation", text: <>Ein wiederkehrender Ablauf läuft ab jetzt von allein – <Hl>in 14 Tagen live</Hl>.</>, more: "Zur Automation" },
      { path: "/software", who: "Wenn aus Automationen ein System wird", title: "Software & Plattformen", text: <>Interne Software, CRM, Kundenportale und Websites mit Buchung – <Hl>alles an einem Ort</Hl>.</>, more: "Zu Software & Plattformen" },
      { path: "/ki-coaching", who: "Damit dein Team es nutzt", title: "KI-Coaching und Schulungen", text: <>Dein Team lernt, KI und die neuen Systeme <Hl>selbst einzusetzen</Hl>.</>, more: "Zum Coaching" },
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
          tab: "Ausbildung",
          title: <>Hi,<br /><span className="hl">ich bin Furkan.</span></>,
          body: <><p>Ich habe Wirtschaftsinformatik an der Technischen Hochschule Ulm studiert, mit einem Auslandssemester an der Korea University in Seoul.</p><p>In meiner Bachelorarbeit ging es um Identity Management in Multicloud-Lösungen als Grundlage für eine Cloud-Strategie.</p></>,
          photo: { src: "/about/ausbildung-abschluss.jpg", width: 735, height: 1024, alt: "Furkan Çetin mit Doktorhut und seiner Bachelorarbeit der TH Ulm" },
          caption: "Abschluss an der TH Ulm",
        },
        {
          tab: "Hintergrund",
          title: <>Erst verstehen,<br /><span className="hl">dann bauen.</span></>,
          body: <><p>Seit 2022 baue ich Automationen und Software für Unternehmen – erst im Studium, dann in Beratung und Digitalisierungsprojekten. Von der ersten Prozessaufnahme bis zur laufenden Lösung.</p><p>Und ich zeige Teams, wie sie es selbst nutzen. Hier bei einem Workshop zu Power Automate.</p></>,
          photo: { src: "/about/hintergrund.jpg", width: 896, height: 1195, alt: "Furkan Çetin präsentiert einen Power-Automate-Workflow vor einer Leinwand" },
          caption: "Workshop zu Power Automate",
        },
        {
          tab: "Heute",
          title: <>Heute:<br /><span className="hl">foorgun.ai.</span></>,
          body: <><p>Seit 2026 bin ich selbstständig und baue Automationen, Software und Websites mit Online-Buchung – für Unternehmen genauso wie für lokale Betriebe.</p><p>Ich arbeite remote, auf Deutsch, Englisch und Türkisch – und sitze lieber 15 Minuten mit dir am Tisch, als dir ein Tool zu verkaufen.</p><a className="btn" href={CALL}>15-Min-Gespräch buchen</a></>,
          photo: { src: "/furkan.png", width: 889, height: 1108, alt: "Porträt von Furkan Çetin" },
        },
      ] as Chapter[],
    },
    faq: [
      ["Wir haben schon ein KI-Tool ausprobiert, das hat nicht funktioniert — was ist hier anders?", "Das höre ich am häufigsten. Die meisten KI-Tools werden zuerst gekauft und dann einem Prozess aufgezwungen, für den sie nie gebaut wurden. Ich mache es umgekehrt — zuerst den Prozess fixen, dann das passende Tool bauen oder anbinden. Meistens liegt genau daran, warum der erste Versuch nicht funktioniert hat."],
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
    ctaText: "In 15 Minuten gehen wir durch, wie du heute arbeitest. Du bekommst eine ehrliche Einschätzung, was sich lohnt – auch wenn das Ergebnis ist, dass du mich nicht brauchst.",
  },
  en: {
    title1: "Build a business that works for you.",
    title2: "Not the other way around.",
    lead: <>I&apos;m Furkan, your technical partner when it comes to AI. First I understand how you work. Then I build what <Hl>saves you hours every week</Hl>.</>,
    services: "See services",
    sub: "15 minutes, free, no obligation, via video.",
    servicesTitle: "Three building blocks that build on each other",
    nodes: [
      { path: "/automation", who: "For businesses with routine work", title: "Automation", text: <>A recurring process runs on its own from now on – <Hl>live in 14 days</Hl>.</>, more: "Go to automation" },
      { path: "/software", who: "When automations become a system", title: "Software & platforms", text: <>Internal software, CRM, client portals and websites with booking – <Hl>all in one place</Hl>.</>, more: "Go to software & platforms" },
      { path: "/ki-coaching", who: "So your team uses it", title: "AI coaching and training", text: <>Your team learns to use AI and the new systems <Hl>on their own</Hl>.</>, more: "Go to coaching" },
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
          tab: "Education",
          title: <>Hi,<br /><span className="hl">I&apos;m Furkan.</span></>,
          body: <><p>I studied Business Information Systems at Ulm University of Applied Sciences, including a semester abroad at Korea University in Seoul.</p><p>My bachelor&apos;s thesis was on identity management in multi-cloud solutions as the foundation for a cloud strategy.</p></>,
          photo: { src: "/about/ausbildung-abschluss.jpg", width: 735, height: 1024, alt: "Furkan Çetin in a graduation cap holding his bachelor's thesis from THU Ulm" },
          caption: "Graduation at THU Ulm",
        },
        {
          tab: "Background",
          title: <>Understand first,<br /><span className="hl">then build.</span></>,
          body: <><p>Since 2022 I&apos;ve been building automations and software for businesses – first during my studies, then in consulting and digitalisation projects. From the first process mapping to a running solution.</p><p>And I show teams how to use it themselves. Here at a workshop on Power Automate.</p></>,
          photo: { src: "/about/hintergrund.jpg", width: 896, height: 1195, alt: "Furkan Çetin presenting a Power Automate workflow in front of a projection screen" },
          caption: "Workshop on Power Automate",
        },
        {
          tab: "Today",
          title: <>Today:<br /><span className="hl">foorgun.ai.</span></>,
          body: <><p>I&apos;ve been self-employed since 2026, building automations, software and websites with online booking – for companies as well as local businesses.</p><p>I work remotely, in German, English and Turkish – and I&apos;d rather spend 15 minutes at the table with you than sell you a tool.</p><a className="btn" href={CALL}>Book a 15-min call</a></>,
          photo: { src: "/furkan.png", width: 889, height: 1108, alt: "Portrait of Furkan Çetin" },
        },
      ] as Chapter[],
    },
    faq: [
      ["We already tried an AI tool and it didn't work out — how is this different?", "That's the most common story I hear. Most AI tools get bought first, then forced onto a process that was never built for them. I do it the other way — fix the process first, then build or connect the right tool. That's usually why the first attempt didn't stick."],
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
    ctaText: "In 15 minutes we'll walk through how you work today. You'll get an honest assessment of what's worth doing – even if the answer is that you don't need me.",
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
            </div>
            <Image className="portrait" src="/furkan.png" alt="Furkan Çetin" width={889} height={1108} sizes="(max-width: 960px) 280px, 320px" priority />
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
