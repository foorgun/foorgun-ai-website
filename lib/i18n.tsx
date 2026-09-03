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
    items: { name: string; role: string; company: string; content: string; rating: number; image?: string }[]
  }
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] }
  contact: { eyebrow: string; headlinePre: string; headlineAccent: string; description: string; cta: string }
  footer: {
    navTitle: string; nav: { label: string; href: string }[]
    companyTitle: string; company: { label: string; href: string }[]
    contactTitle: string
  }
  impressum: {
    title: string
    name: string; company: string; street: string; city: string
    contactTitle: string; phoneLabel: string; emailLabel: string
    sections: { title: string; body: string }[]
    back: string
  }
  datenschutz: {
    title: string
    sections: {
      title: string
      blocks: {
        title?: string
        paragraphs?: string[]
        lines?: string[]
        phoneLabel?: string
        emailLabel?: string
        link?: { label: string; href: string }
      }[]
    }[]
    back: string
  }
  cookies: {
    textBefore: string
    policyLabel: string
    textAfter: string
    acceptAll: string
    necessaryOnly: string
    settings: string
    calBlockedText: string
    calLoadButton: string
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
        { title: "Agency & Campaign Operations", description: "Managing the same process separately per client or campaign stops scaling. I build one system that runs it for all of them." },
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
        { name: "Daniela Dávila", role: "COO",     company: "BAZZAAL",                   content: "Furkan is really good at understanding what the business needs and finding the most practical solutions that actually work. Having worked with him for the past year, I've found him to be reliable, proactive, and always thinking of ways to make things better and more efficient.", rating: 5, image: "/testimonials/daniela-davila.jpg" },
        { name: "Sandra Schmidt", role: "Founder", company: "ViUnlimited",                content: "Furkan automated our entire content pipeline. Our team saves hours every week and the results speak for themselves.", rating: 5, image: "/testimonials/sandra-schmidt.webp" },
        { name: "Patrick Wings",  role: "Owner",   company: "Digital Marketing Services", content: "Exactly the kind of technical partner you want — delivers what he promises, no fluff.", rating: 5, image: "/testimonials/patrick-wings.avif" },
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
        { label: "Legal Notice", href: "/impressum" },
        { label: "Privacy policy", href: "/datenschutz" },
      ],
      contactTitle: "Contact info",
    },
    impressum: {
      title: "Legal Notice (Impressum)",
      name: "Furkan Cetin",
      company: "Furkan Cetin IT Beratung",
      street: "Margarete-Steiff-Straße 19",
      city: "89081 Ulm, Germany",
      contactTitle: "Contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      sections: [
        { title: "Note pursuant to Section 19 of the German VAT Act (UStG)", body: "As a small business owner within the meaning of Section 19 (1) UStG, no VAT is charged." },
        { title: "German Business Identification Number (Wirtschaftsidentifikationsnummer)", body: "DE324940872" },
        { title: "Consumer Dispute Resolution", body: "We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board." },
      ],
      back: "Back to homepage",
    },
    datenschutz: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Data Protection at a Glance",
          blocks: [
            { title: "General Information", paragraphs: ["The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you."] },
            { title: "Who is responsible for data collection on this website?", paragraphs: ["Data processing on this website is carried out by the website operator. Contact details can be found in the section “Notice concerning the responsible party.”"] },
            { title: "How do we collect your data?", paragraphs: ["Your data is collected in part when you provide it to us (e.g., via the booking calendar). Other data is collected automatically or with your consent when you visit the website (technical data such as browser, operating system, or time of page access)."] },
            { title: "What do we use your data for?", paragraphs: ["Some data is collected to ensure error-free provision of the website. Other data is processed to schedule appointments via the embedded booking calendar."] },
            { title: "What rights do you have regarding your data?", paragraphs: ["You have the right to receive free information about the origin, recipients, and purpose of your stored personal data at any time, as well as the right to have this data corrected or deleted. If you have given consent to data processing, you can revoke this consent at any time. You also have the right to lodge a complaint with the competent supervisory authority."] },
          ],
        },
        {
          title: "2. Hosting",
          blocks: [
            {
              title: "External Hosting",
              paragraphs: [
                "This website is hosted externally. The personal data collected on this website is stored on the servers of the hosting provider.",
                "External hosting is carried out for the purpose of fulfilling contracts with our prospective and existing customers (Art. 6(1)(b) GDPR) and in the interest of secure, fast, and efficient provision of our online services (Art. 6(1)(f) GDPR).",
                "We use the following hosting provider:",
              ],
              lines: ["Vercel Inc.", "340 S Lemon Ave #4133, Walnut, CA 91789, USA"],
            },
          ],
        },
        {
          title: "3. General Information and Mandatory Disclosures",
          blocks: [
            { title: "Data Protection", paragraphs: ["The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy."] },
            {
              title: "Notice Concerning the Responsible Party",
              paragraphs: ["The party responsible for data processing on this website is:"],
              lines: ["Furkan Cetin", "Furkan Cetin IT Beratung", "Margarete-Steiff-Straße 19", "89081 Ulm, Germany"],
              phoneLabel: "Phone",
              emailLabel: "Email",
            },
            { title: "Storage Duration", paragraphs: ["Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies."] },
            { title: "Revocation of Your Consent to Data Processing", paragraphs: ["You may revoke consent you have already given at any time. The legality of data processing carried out prior to revocation remains unaffected."] },
            { title: "Right to Object to Data Collection in Special Cases (Art. 21 GDPR)", paragraphs: ["Where data processing is based on Art. 6(1)(e) or (f) GDPR, you have the right to object to the processing of your data at any time for reasons arising from your particular situation."] },
            { title: "Right to Lodge a Complaint with the Competent Supervisory Authority", paragraphs: ["In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority."] },
            { title: "Right to Data Portability", paragraphs: ["You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party."] },
            { title: "Right of Access, Rectification, and Erasure", paragraphs: ["You have the right to obtain free information about your stored personal data at any time, as well as the right to have this data corrected or deleted."] },
            { title: "Right to Restriction of Processing", paragraphs: ["You have the right to request the restriction of the processing of your personal data under certain circumstances."] },
          ],
        },
        {
          title: "4. Data Collection on This Website",
          blocks: [
            {
              title: "Cookies",
              paragraphs: [
                "Our websites use cookies. Cookies are small data packages and do not cause any damage to your device. They are stored either temporarily (session cookies) or permanently (persistent cookies).",
                "Necessary cookies are stored on the basis of Art. 6(1)(f) GDPR. The website operator has a legitimate interest in the storage of necessary cookies for the technically error-free provision of its services.",
              ],
            },
          ],
        },
        {
          title: "5. Appointment Scheduling with Cal.com",
          blocks: [
            {
              paragraphs: [
                "This website integrates a booking calendar provided by Cal.com, through which you can directly schedule an appointment with us. The provider is Cal.com, Inc.",
                "When you visit the page with the embedded calendar, a connection to Cal.com’s servers is established. This may involve the transmission of personal data such as your IP address and technical information about your device and browser to Cal.com. If you book an appointment through the calendar, the data you enter (e.g., name, email address, preferred time) is also transmitted to and processed by Cal.com in order to carry out the booking.",
                "This processing is based on our legitimate interest in efficient and straightforward appointment scheduling (Art. 6(1)(f) GDPR) as well as the performance of pre-contractual measures at your request (Art. 6(1)(b) GDPR).",
                "Cal.com may process data outside the EU. Further information on data protection at Cal.com is available at:",
              ],
              link: { label: "https://cal.com/privacy", href: "https://cal.com/privacy" },
            },
          ],
        },
      ],
      back: "Back to homepage",
    },
    cookies: {
      textBefore: "This website uses cookies, including for appointment scheduling via Cal.com. Learn more in our ",
      policyLabel: "Privacy Policy",
      textAfter: ".",
      acceptAll: "Accept all",
      necessaryOnly: "Only necessary",
      settings: "Cookie settings",
      calBlockedText: "The booking calendar is loaded from Cal.com. Loading it transmits data to Cal.com, including your IP address.",
      calLoadButton: "Load calendar and book a call",
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
      title: "Woran wir arbeiten",
      subline: "Wo ich einsteige, um deine Systeme intelligenter zu machen.",
      cards: [
        { title: "Leadgenerierung", description: "Leads werden kalt, bevor jemand nachfasst. Ich baue Systeme, die automatisch qualifizieren und nachfassen." },
        { title: "Content-Planung & Produktion", description: "Content frisst deine ganze Woche oder wird unregelmäßig. Ich baue Pipelines, die nach Zeitplan planen, entwerfen und veröffentlichen." },
        { title: "Agentur- & Kampagnen-Betrieb", description: "Denselben Prozess separat pro Kunde oder Kampagne zu steuern, skaliert nicht. Ich baue ein System, das es für alle zusammen übernimmt." },
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
        { name: "Daniela Dávila", role: "COO",       company: "BAZZAAL",                   content: "Furkan versteht wirklich gut, was das Geschäft braucht, und findet die praktischsten Lösungen, die tatsächlich funktionieren. Ich arbeite schon ein Jahr mit ihm zusammen und habe ihn als zuverlässig, proaktiv und ständig auf der Suche nach Verbesserungen erlebt.", rating: 5, image: "/testimonials/daniela-davila.jpg" },
        { name: "Sandra Schmidt", role: "Gründerin", company: "ViUnlimited",                content: "Furkan hat unsere gesamte Content-Pipeline automatisiert. Unser Team spart jede Woche Stunden — die Ergebnisse sprechen für sich.", rating: 5, image: "/testimonials/sandra-schmidt.webp" },
        { name: "Patrick Wings",  role: "Inhaber",   company: "Digital Marketing Services", content: "Genau die Art von technischem Partner, den man sich wünscht — liefert was er verspricht, ohne Umwege.", rating: 5, image: "/testimonials/patrick-wings.avif" },
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
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
      ],
      contactTitle: "Kontakt",
    },
    impressum: {
      title: "Impressum",
      name: "Furkan Cetin",
      company: "Furkan Cetin IT Beratung",
      street: "Margarete-Steiff-Straße 19",
      city: "89081 Ulm",
      contactTitle: "Kontakt",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      sections: [
        { title: "Hinweis gemäß § 19 UStG", body: "Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet." },
        { title: "Wirtschaftsidentifikationsnummer", body: "DE324940872" },
        { title: "Verbraucherstreitbeilegung/Universalschlichtungsstelle", body: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." },
      ],
      back: "Zurück zur Startseite",
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      sections: [
        {
          title: "1. Datenschutz auf einen Blick",
          blocks: [
            { title: "Allgemeine Hinweise", paragraphs: ["Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."] },
            { title: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?", paragraphs: ["Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ entnehmen."] },
            { title: "Wie erfassen wir Ihre Daten?", paragraphs: ["Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. über den Buchungskalender). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website erfasst (technische Daten wie Browser, Betriebssystem, Uhrzeit des Seitenaufrufs)."] },
            { title: "Wofür nutzen wir Ihre Daten?", paragraphs: ["Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten werden zur Terminvereinbarung über den eingebundenen Buchungskalender verarbeitet."] },
            { title: "Welche Rechte haben Sie bezüglich Ihrer Daten?", paragraphs: ["Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten, sowie ein Recht auf Berichtigung oder Löschung. Erteilte Einwilligungen können Sie jederzeit widerrufen. Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu."] },
          ],
        },
        {
          title: "2. Hosting",
          blocks: [
            {
              title: "Externes Hosting",
              paragraphs: [
                "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.",
                "Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).",
                "Wir setzen folgenden Hoster ein:",
              ],
              lines: ["Vercel Inc.", "340 S Lemon Ave #4133, Walnut, CA 91789, USA"],
            },
          ],
        },
        {
          title: "3. Allgemeine Hinweise und Pflichtinformationen",
          blocks: [
            { title: "Datenschutz", paragraphs: ["Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."] },
            {
              title: "Hinweis zur verantwortlichen Stelle",
              paragraphs: ["Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:"],
              lines: ["Furkan Cetin", "Furkan Cetin IT Beratung", "Margarete-Steiff-Straße 19", "89081 Ulm"],
              phoneLabel: "Telefon",
              emailLabel: "E-Mail",
            },
            { title: "Speicherdauer", paragraphs: ["Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt."] },
            { title: "Widerruf Ihrer Einwilligung zur Datenverarbeitung", paragraphs: ["Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt."] },
            { title: "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)", paragraphs: ["Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Widerspruch einzulegen."] },
            { title: "Beschwerderecht bei der zuständigen Aufsichtsbehörde", paragraphs: ["Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu."] },
            { title: "Recht auf Datenübertragbarkeit", paragraphs: ["Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten aushändigen zu lassen."] },
            { title: "Auskunft, Berichtigung und Löschung", paragraphs: ["Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung."] },
            { title: "Recht auf Einschränkung der Verarbeitung", paragraphs: ["Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten unter bestimmten Umständen zu verlangen."] },
          ],
        },
        {
          title: "4. Datenerfassung auf dieser Website",
          blocks: [
            {
              title: "Cookies",
              paragraphs: [
                "Unsere Internetseiten verwenden Cookies. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend (Session-Cookies) oder dauerhaft (permanente Cookies) gespeichert.",
                "Notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung notwendiger Cookies zur technisch fehlerfreien Bereitstellung seiner Dienste.",
              ],
            },
          ],
        },
        {
          title: "5. Terminbuchung mit Cal.com",
          blocks: [
            {
              paragraphs: [
                "Auf dieser Website ist ein Buchungskalender des Dienstes Cal.com eingebunden, über den Sie direkt einen Termin mit uns vereinbaren können. Anbieter ist Cal.com, Inc.",
                "Wenn Sie die entsprechende Seite mit dem eingebundenen Kalender aufrufen, wird eine Verbindung zu den Servern von Cal.com hergestellt. Dabei können personenbezogene Daten wie Ihre IP-Adresse sowie technische Daten zu Ihrem Endgerät und Browser an Cal.com übermittelt werden. Wenn Sie über den Kalender einen Termin buchen, werden zusätzlich die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Terminwunsch) an Cal.com übermittelt und dort verarbeitet, um die Terminbuchung durchzuführen.",
                "Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an einer effizienten und unkomplizierten Terminvereinbarung (Art. 6 Abs. 1 lit. f DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage hin (Art. 6 Abs. 1 lit. b DSGVO).",
                "Cal.com kann Daten auch außerhalb der EU verarbeiten. Weitere Informationen zum Datenschutz bei Cal.com finden Sie unter:",
              ],
              link: { label: "https://cal.com/privacy", href: "https://cal.com/privacy" },
            },
          ],
        },
      ],
      back: "Zurück zur Startseite",
    },
    cookies: {
      textBefore: "Diese Website nutzt Cookies, u. a. für die Terminbuchung über Cal.com. Mehr dazu in unserer ",
      policyLabel: "Datenschutzerklärung",
      textAfter: ".",
      acceptAll: "Alle akzeptieren",
      necessaryOnly: "Nur technisch notwendig",
      settings: "Cookie-Einstellungen",
      calBlockedText: "Der Buchungskalender wird von Cal.com geladen. Dabei werden Daten an Cal.com übertragen, unter anderem deine IP-Adresse.",
      calLoadButton: "Kalender laden und Termin buchen",
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
