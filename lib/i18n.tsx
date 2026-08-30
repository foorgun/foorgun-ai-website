"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Lang = "EN" | "DE"

export type Translations = {
  nav: { services: string; process: string; testimonials: string; cta: string }
  hero: { eyebrow: string; line1: string; line2Before: string; words: string[]; line2After: string; subline: string; cta: string; secondary: string }
  trust: { copy: string }
  problem: {
    eyebrow: string; title: string; subline: string
    items: { title: string; description: string }[]
  }
  approach: { eyebrow: string; headline: string; paragraphs: string[] }
  fit: { eyebrow: string; title: string; goodTitle: string; goodItems: string[]; badTitle: string; badItems: string[] }
  stats: { labels: string[] }
  integrations: { eyebrow: string; title: string }
  services: {
    eyebrow: string; title: string; subline: string
    cards: { title: string; description: string; note?: string }[]
  }
  process: {
    eyebrow: string; title: string; subline: string
    steps: { title: string; description: string }[]
  }
  testimonials: {
    eyebrow: string; title: string; subline: string
    items: { name: string; role: string; company: string; content: string; rating: number }[]
  }
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] }
  contact: { eyebrow: string; headlinePre: string; headlineAccent: string; description: string; cta: string }
  footer: {
    navTitle: string; nav: { label: string; href: string }[]
    companyTitle: string; company: { label: string; href: string }[]
    contactTitle: string
  }
  check: {
    progressLabel: string
    backButton: string
    step1: { question: string; options: string[] }
    step2: { question: string; options: string[]; continueButton: string }
    step3: { question: string; options: string[] }
    step4: { question: string; options: string[] }
    step5: { question: string; options: string[] }
    live: { label: string }
    result: {
      headline: string
      dollarSuffix: string
      hoursSuffix: string
      opportunityLabel: string
      disclaimer: string
      calIntro: string
      cta: string
    }
    categories: { leads: string; recruiting: string; content: string; sales: string; ops: string }
  }
}

const translations: Record<Lang, Translations> = {
  EN: {
    nav: { services: "Services", process: "Process", testimonials: "Testimonials", cta: "Book a call" },
    hero: {
      eyebrow: "Outcomes, not AI automation",
      line1: "I don't sell automation.",
      line2Before: "I help you ",
      words: ["generate leads", "screen candidates", "run content", "answer customers", "track operations"],
      line2After: ".",
      subline: "Leads going cold before follow-up. HR drowning in applications. Content that eats your whole week. I fix the process first — then build the system that makes it disappear.",
      cta: "Book a call",
      secondary: "See what I do",
    },
    trust: { copy: "Trusted by teams" },
    problem: {
      eyebrow: "The Problem",
      title: "The problems that quietly eat your week",
      subline: "Manual work doesn't feel urgent — until you add up the hours.",
      items: [
        { title: "Leads go cold", description: "No one follows up fast enough, and by the time someone does, the lead's gone quiet." },
        { title: "Applications pile up", description: "HR spends hours sorting through hundreds of applications, most of them irrelevant." },
        { title: "Content becomes a bottleneck", description: "Either it's inconsistent, or it eats your entire week." },
        { title: "Tools don't talk to each other", description: "Data lives in five different places — a form here, a spreadsheet there, an inbox in between. Someone spends hours a week just keeping it all in sync." },
        { title: "Reporting is always outdated", description: "Decisions get made on last week's numbers because no one has time to pull fresh ones." },
        { title: "Approvals get stuck", description: "Something's waiting on a decision, and nobody follows up until someone happens to remember. Days pass. Deals cool off. Candidates go elsewhere." },
      ],
    },
    approach: {
      eyebrow: "The Approach",
      headline: "Most people buy the tool first. I do it the other way around.",
      paragraphs: [
        "Everyone's rushing to buy AI tools and hoping they fit. Most don't — and businesses end up with expensive software nobody uses right.",
        "I start by looking at how you actually work. I fix what's broken, standardize what's messy, and only then decide — together with you — which tools make sense. Sometimes that's an AI agent. Sometimes it's a spreadsheet done right.",
      ],
    },
    fit: {
      eyebrow: "Fit Check",
      title: "Is this a fit?",
      goodTitle: "Good fit if...",
      goodItems: [
        "You're noticing your team loses time to repetitive work",
        "You've already bought tools that aren't being used right",
        "You want to grow without hiring proportionally more people",
      ],
      badTitle: "Not a fit if...",
      badItems: [
        "You want \"some AI tool\" without looking at the process behind it",
        "You're looking for off-the-shelf software, not a custom system",
      ],
    },
    stats: { labels: ["Manual work eliminated monthly", "Monthly savings generated", "Custom built for your business"] },
    integrations: { eyebrow: "Integrations", title: "Works with the tools you already use" },
    services: {
      eyebrow: "Our Services",
      title: "Here's what we work on",
      subline: "Where I step in to make your systems smarter.",
      cards: [
        { title: "Lead Generation", description: "Leads go cold before anyone follows up. I build systems that qualify and follow up automatically." },
        { title: "Content Planning & Production", description: "Content eats your whole week or gets inconsistent. I build pipelines that plan, draft, and publish on schedule." },
        { title: "Agency & Campaign Operations", description: "Managing the same process separately per client or campaign stops scaling. I build one system that runs it for all of them.", note: "Saved a marketing agency 15-20 hours/week across 15+ clients." },
        { title: "Sales & Customer Communication", description: "Your team answers the same questions daily. I build AI agents that read, draft, and follow up automatically." },
        { title: "Recruiting & Applicant Screening", description: "AI made mass-applying effortless — HR drowns in it. I build systems that match and rank candidates automatically." },
        { title: "Internal Operations & Reporting", description: "Data lives in five different tools, none of them synced. I connect your stack into one source of truth." },
        { title: "Custom Platforms & Apps", description: "Off-the-shelf tools almost fit — but not quite. Once your systems run clean, I build something custom around how you work." },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Our process",
      subline: "Our way & order of doing things.",
      steps: [
        { title: "Discovery call", description: "You walk me through your workflows. I find where automation creates the most leverage — and tell you exactly what's possible." },
        { title: "Process mapping", description: "Before any tool talk: what's the process, where does it break, what needs to change." },
        { title: "System design", description: "Now we pick the tools and logic — together, based on what your process actually needs." },
        { title: "Implementation", description: "I build, test, and hand over everything. Fully working, fully documented, ready to run on day one." },
        { title: "Track & optimize", description: "We monitor performance, catch edge cases, and refine until the system runs itself. I stick around." },
        { title: "Scale", description: "Once things run clean, that's the base for a custom platform or app — if and when you're ready." },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say",
      subline: "Real results from teams that decided to stop doing things manually.",
      items: [
        { name: "Soojin Joung", role: "CEO",     company: "BAZZAAL",                   content: "Working with Furkan transformed how we manage our influencer campaigns. What used to take days now runs automatically.", rating: 5 },
        { name: "Owner",        role: "Founder", company: "ViUnlimited",                content: "Furkan automated our entire content pipeline. Our team saves hours every week and the results speak for themselves.", rating: 5 },
        { name: "Patrick Wings",role: "Owner",   company: "Digital Marketing Services", content: "Exactly the kind of technical partner you want — delivers what he promises, no fluff.", rating: 5 },
      ],
    },
    faq: {
      eyebrow: "FAQs",
      title: "Answers to your common questions",
      items: [
        { q: "We already tried an AI tool and it didn't work out — how is this different?", a: "That's the most common story I hear. Most AI tools get bought first, then forced onto a process that was never built for them. I do it the other way — fix the process first, then build or connect the right tool. That's usually why the first attempt didn't stick." },
        { q: "Do I need to have a technical team to work with you?", a: "No. I handle the technical side completely. You describe the problem, I map the process and build the solution. No internal IT team required." },
        { q: "How long does it take to see first results?", a: "Most clients see working automations within 2–3 weeks. We start with the highest-impact area first, so results come fast." },
        { q: "What tools do you work with?", a: "Whatever fits the problem — n8n, Airtable, OpenAI, Claude, Google Workspace, and most tools with an API. But I don't start with the tool. I start with your process, then pick what actually fits. If you're unsure what you need, that's exactly what the discovery call is for." },
        { q: "Do you work with small businesses or only large companies?", a: "Both. What matters is whether automation can create real value for your business — not your company size." },
        { q: "How much does it cost?", a: "Every engagement is scoped individually. Start with a free 15-minute call and you'll get a clear, transparent proposal." },
        { q: "Can you help with recruiting/applicant screening specifically?", a: "Yes — it's one of the areas I see the most impact in right now. I build systems that filter and rank applications against your actual criteria, so your team only reviews the candidates worth their time." },
        { q: "What happens after the project is done?", a: "You own everything. Full documentation, handover, and optional ongoing support via a monthly retainer — so the system keeps running smoothly." },
        { q: "Can you work with our existing tools, or do we need to buy new software?", a: "I work with what you already have wherever possible. If a new tool is needed, I'll recommend the most cost-effective option and set it up for you." },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      headlinePre: "Let's talk about what ",
      headlineAccent: "you're still doing by hand.",
      description: "Book a free 15-minute discovery call. No pitch, no obligation — just an honest look at what could run automatically.",
      cta: "Book a call →",
    },
    footer: {
      navTitle: "Navigation",
      nav: [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
      companyTitle: "Company",
      company: [
        { label: "About", href: "#" },
        { label: "Terms of service", href: "#" },
        { label: "Privacy policy", href: "#" },
      ],
      contactTitle: "Contact info",
    },
    check: {
      progressLabel: "Step {current} of {total}",
      backButton: "Back",
      step1: {
        question: "How many people are on your team?",
        options: ["1–9", "10–49", "50–199", "200+"],
      },
      step2: {
        question: "Where does your team lose the most time?",
        options: [
          "Following up with leads",
          "Reviewing candidates",
          "Planning & producing content",
          "Answering repetitive customer messages",
          "Pulling reports / keeping data in sync",
        ],
        continueButton: "Continue",
      },
      step3: {
        question: "How many hours a week does that eat, roughly?",
        options: ["Under 5", "5–20", "20–40", "40+"],
      },
      step4: {
        question: "How is this handled today?",
        options: [
          "Fully manual, no tools involved",
          "Some tools in place, but nothing connected",
          "We tried automating this before, but it didn't stick",
        ],
      },
      step5: {
        question: "When do you want to fix this?",
        options: ["As soon as possible", "This quarter", "Just exploring for now"],
      },
      live: { label: "Estimated potential:" },
      result: {
        headline: "Your estimated potential",
        dollarSuffix: "/month",
        hoursSuffix: "hours/month",
        opportunityLabel: "Your biggest opportunity: {category}",
        disclaimer: "This is a rough estimate based on typical automation outcomes — a call gets you the real number.",
        calIntro: "Grab 15 minutes for free. Let's see what's actually possible.",
        cta: "Book a free call",
      },
      categories: {
        leads: "Lead follow-up",
        recruiting: "Candidate review",
        content: "Content production",
        sales: "Customer communication",
        ops: "Reporting & data sync",
      },
    },
  },

  DE: {
    nav: { services: "Leistungen", process: "Prozess", testimonials: "Kundenstimmen", cta: "Termin buchen" },
    hero: {
      eyebrow: "Ergebnisse, keine KI-Automatisierung",
      line1: "Ich verkaufe keine Automatisierung.",
      line2Before: "Ich helfe dir bei ",
      words: ["Leads", "Bewerbern", "Content", "Kundenanfragen", "Abläufen"],
      line2After: ".",
      subline: "Leads werden kalt, bevor jemand nachfasst. HR versinkt in Bewerbungen. Content frisst deine ganze Woche. Ich fixe erst den Prozess — dann baue ich das System, das das Problem löst.",
      cta: "Termin buchen",
      secondary: "Was ich mache",
    },
    trust: { copy: "Das Vertrauen von Teams wie" },
    problem: {
      eyebrow: "Das Problem",
      title: "Die Probleme, die deine Woche leise auffressen",
      subline: "Manuelle Arbeit fühlt sich nicht dringend an — bis du die Stunden zusammenzählst.",
      items: [
        { title: "Leads werden kalt", description: "Niemand meldet sich schnell genug, und bis es jemand tut, ist der Lead schon wieder still." },
        { title: "Bewerbungen stapeln sich", description: "HR verbringt Stunden damit, Hunderte Bewerbungen zu sichten — die meisten davon irrelevant." },
        { title: "Content bremst alles aus", description: "Entweder unregelmäßig, oder er frisst deine ganze Woche." },
        { title: "Tools kommunizieren nicht miteinander", description: "Daten liegen an fünf verschiedenen Orten — hier ein Formular, dort eine Tabelle, dazwischen ein Postfach. Jemand verbringt Stunden pro Woche nur damit, das alles synchron zu halten." },
        { title: "Reporting ist immer veraltet", description: "Entscheidungen basieren auf Zahlen von letzter Woche, weil niemand Zeit hat, aktuelle zu ziehen." },
        { title: "Freigaben bleiben hängen", description: "Irgendetwas wartet auf eine Entscheidung, und niemand hakt nach, bis zufällig jemand dran denkt. Tage vergehen. Deals kühlen ab. Kandidaten wandern ab." },
      ],
    },
    approach: {
      eyebrow: "Der Ansatz",
      headline: "Die meisten kaufen zuerst das Tool. Ich mache es andersrum.",
      paragraphs: [
        "Alle stürzen sich gerade auf KI-Tools und hoffen, dass sie passen. Die meisten passen nicht — und am Ende steht teure Software da, die niemand richtig nutzt.",
        "Ich schaue mir zuerst an, wie du wirklich arbeitest. Ich behebe, was kaputt ist, vereinheitliche, was chaotisch ist, und entscheide erst dann — gemeinsam mit dir — welche Tools sinnvoll sind. Manchmal ist das ein KI-Agent. Manchmal eine Excel-Tabelle, die richtig gemacht ist.",
      ],
    },
    fit: {
      eyebrow: "Fit-Check",
      title: "Passt das zusammen?",
      goodTitle: "Guter Fit, wenn...",
      goodItems: [
        "Dir auffällt, dass dein Team Zeit an sich wiederholende Arbeit verliert",
        "Du schon Tools gekauft hast, die nicht richtig genutzt werden",
        "Du wachsen willst, ohne proportional mehr Leute einzustellen",
      ],
      badTitle: "Kein Fit, wenn...",
      badItems: [
        "Du \"irgendein KI-Tool\" willst, ohne dir den Prozess dahinter anzuschauen",
        "Du nach Standardsoftware suchst, nicht nach einem individuellen System",
      ],
    },
    stats: { labels: ["Manuell eliminierte Arbeit pro Monat", "Monatlich generierte Einsparungen", "Individuell für dein Unternehmen entwickelt"] },
    integrations: { eyebrow: "Integrationen", title: "Funktioniert mit den Tools, die du bereits nutzt" },
    services: {
      eyebrow: "Unsere Leistungen",
      title: "Was ich mache",
      subline: "Wo ich einsteige, um deine Systeme intelligenter zu machen.",
      cards: [
        { title: "Leadgenerierung", description: "Leads werden kalt, bevor jemand nachfasst. Ich baue Systeme, die automatisch qualifizieren und nachfassen." },
        { title: "Content-Planung & Produktion", description: "Content frisst deine ganze Woche oder wird unregelmäßig. Ich baue Pipelines, die nach Zeitplan planen, entwerfen und veröffentlichen." },
        { title: "Agentur- & Kampagnen-Betrieb", description: "Denselben Prozess separat pro Kunde oder Kampagne zu steuern, skaliert nicht. Ich baue ein System, das es für alle zusammen übernimmt.", note: "Hat einer Marketing-Agentur 15–20 Stunden pro Woche über 15+ Kunden hinweg gespart." },
        { title: "Vertrieb & Kundenkommunikation", description: "Dein Team beantwortet täglich dieselben Fragen. Ich baue KI-Agenten, die lesen, entwerfen und automatisch nachfassen." },
        { title: "Recruiting & Bewerber-Screening", description: "KI macht Massenbewerbungen mühelos — HR versinkt darin. Ich baue Systeme, die Kandidaten automatisch matchen und ranken." },
        { title: "Interne Abläufe & Reporting", description: "Daten liegen in fünf verschiedenen Tools, keines davon synchron. Ich verbinde deinen Stack zu einer einzigen verlässlichen Quelle." },
        { title: "Individuelle Plattformen & Apps", description: "Standardtools passen fast — aber eben nicht ganz. Sobald deine Systeme sauber laufen, baue ich etwas Individuelles, genau nach deiner Arbeitsweise." },
      ],
    },
    process: {
      eyebrow: "So funktioniert es",
      title: "Unser Prozess",
      subline: "Unsere Vorgehensweise.",
      steps: [
        { title: "Kennenlerngespräch", description: "Du erklärst mir deine Abläufe. Ich finde heraus, wo Automatisierung den größten Hebel erzeugt — und sage dir genau, was möglich ist." },
        { title: "Prozess-Mapping", description: "Bevor es um Tools geht: Wie läuft der Prozess, wo bricht er, was muss sich ändern." },
        { title: "Systemdesign", description: "Jetzt wählen wir gemeinsam die Tools und die Logik — passend zu dem, was dein Prozess wirklich braucht." },
        { title: "Umsetzung", description: "Ich baue, teste und übergebe alles. Vollständig funktionierend, vollständig dokumentiert, ab Tag eins einsatzbereit." },
        { title: "Nachverfolgen & optimieren", description: "Wir beobachten die Performance, erkennen Sonderfälle und optimieren, bis das System sich selbst läuft. Ich bleibe dabei." },
        { title: "Skalieren", description: "Sobald alles sauber läuft, ist das die Basis für eine individuelle Plattform oder App — falls und wenn du so weit bist." },
      ],
    },
    testimonials: {
      eyebrow: "Kundenstimmen",
      title: "Was Kunden sagen",
      subline: "Echte Ergebnisse von Teams, die aufgehört haben, alles manuell zu erledigen.",
      items: [
        { name: "Soojin Joung", role: "CEO",       company: "BAZZAAL",                   content: "Die Zusammenarbeit mit Furkan hat unser Influencer-Kampagnen-Management komplett verändert. Was früher Tage dauerte, läuft jetzt automatisch.", rating: 5 },
        { name: "Inhaberin",    role: "Gründerin", company: "ViUnlimited",                content: "Furkan hat unsere gesamte Content-Pipeline automatisiert. Unser Team spart jede Woche Stunden — die Ergebnisse sprechen für sich.", rating: 5 },
        { name: "Patrick Wings",role: "Inhaber",   company: "Digital Marketing Services", content: "Genau die Art von technischem Partner, den man sich wünscht — liefert was er verspricht, ohne Umwege.", rating: 5 },
      ],
    },
    faq: {
      eyebrow: "FAQs",
      title: "Häufige Fragen",
      items: [
        { q: "Wir haben schon ein KI-Tool ausprobiert, das hat nicht funktioniert — was ist hier anders?", a: "Das höre ich am häufigsten. Die meisten KI-Tools werden zuerst gekauft und dann einem Prozess aufgezwungen, für den sie nie gebaut wurden. Ich mache es umgekehrt — zuerst den Prozess fixen, dann das passende Tool bauen oder anbinden. Meistens liegt genau daran, warum der erste Versuch nicht funktioniert hat." },
        { q: "Brauche ich ein technisches Team, um mit dir zu arbeiten?", a: "Nein. Ich übernehme die technische Seite komplett. Du beschreibst das Problem, ich analysiere den Prozess und baue die Lösung. Kein internes IT-Team nötig." },
        { q: "Wie lange dauert es, bis ich erste Ergebnisse sehe?", a: "Die meisten Kunden sehen funktionierende Automatisierungen innerhalb von 2–3 Wochen. Wir starten zuerst mit dem Bereich mit der größten Wirkung, damit Ergebnisse schnell kommen." },
        { q: "Mit welchen Tools arbeitest du?", a: "Was auch immer zum Problem passt — n8n, Airtable, OpenAI, Claude, Google Workspace und die meisten Tools mit einer API. Aber ich starte nicht beim Tool. Ich starte bei deinem Prozess und wähle dann, was wirklich passt. Wenn du nicht sicher bist, was du brauchst, ist genau dafür das Kennenlerngespräch da." },
        { q: "Arbeitest du mit kleinen Unternehmen oder nur mit großen?", a: "Mit beiden. Entscheidend ist, ob Automatisierung echten Mehrwert für dein Unternehmen schafft — nicht die Unternehmensgröße." },
        { q: "Was kostet das?", a: "Jedes Projekt wird individuell kalkuliert. Starte mit einem kostenlosen 15-minütigen Gespräch und du bekommst ein klares, transparentes Angebot." },
        { q: "Kannst du speziell bei Recruiting / Bewerber-Screening helfen?", a: "Ja — das ist gerade einer der Bereiche mit der größten Wirkung. Ich baue Systeme, die Bewerbungen nach deinen echten Kriterien filtern und ranken, damit dein Team nur die Kandidaten prüft, die es wert sind." },
        { q: "Was passiert, nachdem das Projekt abgeschlossen ist?", a: "Dir gehört alles. Vollständige Dokumentation, Übergabe und optional laufende Unterstützung per Monatsretainer — damit das System reibungslos weiterläuft." },
        { q: "Kannst du mit unseren bestehenden Tools arbeiten, oder müssen wir neue Software kaufen?", a: "Ich arbeite so weit wie möglich mit dem, was du schon hast. Falls ein neues Tool nötig ist, empfehle ich die kosteneffizienteste Option und richte sie für dich ein." },
      ],
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      headlinePre: "Lass uns darüber sprechen, was du ",
      headlineAccent: "noch von Hand machst.",
      description: "Buch ein kostenloses 15-minütiges Gespräch. Kein Verkaufsgespräch, keine Verpflichtung — nur ein ehrlicher Blick auf das, was automatisch laufen könnte.",
      cta: "Termin buchen →",
    },
    footer: {
      navTitle: "Navigation",
      nav: [
        { label: "Leistungen", href: "#services" },
        { label: "Prozess", href: "#process" },
        { label: "Kundenstimmen", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
      companyTitle: "Unternehmen",
      company: [
        { label: "Über uns", href: "#" },
        { label: "Nutzungsbedingungen", href: "#" },
        { label: "Datenschutz", href: "#" },
      ],
      contactTitle: "Kontakt",
    },
    check: {
      progressLabel: "Schritt {current} von {total}",
      backButton: "Zurück",
      step1: {
        question: "Wie viele Leute sind in deinem Team?",
        options: ["1–9", "10–49", "50–199", "200+"],
      },
      step2: {
        question: "Wo verliert dein Team die meiste Zeit?",
        options: [
          "Leads nachfassen",
          "Bewerber sichten",
          "Content planen & produzieren",
          "Wiederkehrende Kundenanfragen beantworten",
          "Reports ziehen / Daten synchron halten",
        ],
        continueButton: "Weiter",
      },
      step3: {
        question: "Wie viele Stunden pro Woche frisst das, grob geschätzt?",
        options: ["Unter 5", "5–20", "20–40", "40+"],
      },
      step4: {
        question: "Wie läuft das heute?",
        options: [
          "Komplett manuell, ohne Tools",
          "Ein paar Tools im Einsatz, aber nichts verbunden",
          "Wir haben schon mal versucht, das zu automatisieren — hat nicht gehalten",
        ],
      },
      step5: {
        question: "Wann willst du das lösen?",
        options: ["So schnell wie möglich", "Dieses Quartal", "Schaue mich erstmal nur um"],
      },
      live: { label: "Geschätztes Potenzial:" },
      result: {
        headline: "Dein geschätztes Potenzial",
        dollarSuffix: "/Monat",
        hoursSuffix: "Stunden/Monat",
        opportunityLabel: "Dein größter Hebel: {category}",
        disclaimer: "Das ist eine grobe Schätzung auf Basis typischer Automatisierungsergebnisse — die echte Zahl bekommst du im Gespräch.",
        calIntro: "Nimm dir 15 kostenlose Minuten. Schauen wir, was wirklich möglich ist.",
        cta: "Kostenloses Gespräch buchen",
      },
      categories: {
        leads: "Lead-Nachfassen",
        recruiting: "Bewerber-Sichtung",
        content: "Content-Produktion",
        sales: "Kundenkommunikation",
        ops: "Reporting & Datenabgleich",
      },
    },
  },
}

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextValue>({
  lang: "EN",
  setLang: () => {},
  t: translations.EN,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN")
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
