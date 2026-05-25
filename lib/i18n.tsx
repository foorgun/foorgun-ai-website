"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Lang = "EN" | "DE" | "TR"

export type Translations = {
  nav: { services: string; process: string; testimonials: string; cta: string }
  hero: { before: string; words: string[]; after: string; subline: string; cta: string; secondary: string }
  stats: { labels: string[] }
  integrations: { eyebrow: string; title: string }
  services: {
    eyebrow: string; title: string; subline: string
    cards: { title: string; description: string }[]
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
}

const translations: Record<Lang, Translations> = {
  EN: {
    nav: { services: "Services", process: "Process", testimonials: "Testimonials", cta: "Book a call" },
    hero: {
      before: "I turn manual work into",
      words: ["automated", "intelligent", "effortless", "scalable", "powerful"],
      after: "systems.",
      subline: "Operations, marketing, content — if your team does it manually and repeatedly, there's a smarter way.",
      cta: "Book a call",
      secondary: "See what I do",
    },
    stats: { labels: ["Manual work eliminated monthly", "Monthly savings generated", "Custom built for your business"] },
    integrations: { eyebrow: "Integrations", title: "Works with the tools you already use" },
    services: {
      eyebrow: "Our Services",
      title: "Here's what we work on",
      subline: "Where I step in to make your systems smarter.",
      cards: [
        { title: "Automation Systems", description: "Your team spends hours on tasks that should run themselves. We build end-to-end workflows that handle the repetitive work — so your people focus on what actually matters." },
        { title: "AI Agents", description: "Autonomous agents that read, decide, and act on your behalf — 24/7, across email, chat, forms, and phone. Complex requests get escalated. Everything else runs automatically." },
        { title: "AI Integration", description: "AI connected to the tools you already use. Drafting, classifying, routing, summarizing — embedded directly into your existing stack, without rebuilding everything from scratch." },
        { title: "System Design", description: "Before building, we map. Clear data architecture, clean integrations, solid foundations — so nothing breaks when the business grows." },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Our process",
      subline: "Our way & order of doing things.",
      steps: [
        { title: "Discovery call", description: "You walk me through your workflows. I find where automation creates the most leverage — and tell you exactly what's possible." },
        { title: "System design", description: "I map out the exact tools, connections, and logic needed before writing a single line. No surprises later." },
        { title: "Implementation", description: "I build, test, and hand over everything. Fully working, fully documented, ready to run on day one." },
        { title: "Track & optimize", description: "We monitor performance, catch edge cases, and refine until the system runs itself. I stick around." },
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
        { q: "Do I need to have a technical team to work with you?", a: "No. I handle the technical side completely. You describe the problem, I build the solution. No internal IT team required." },
        { q: "How long does it take to see first results?", a: "Most clients see working automations within 2–3 weeks. We start with the highest-impact area first, so results come fast." },
        { q: "What tools do you work with?", a: "n8n, Airtable, Typeform, Google Workspace, Slack, Gmail, OpenAI, Claude API, and most tools with an API. If you're unsure, just ask." },
        { q: "Do you work with small businesses or only large companies?", a: "Both. What matters is whether automation can create real value for your business — not your company size." },
        { q: "How much does it cost?", a: "Every engagement is scoped individually. Start with a free 30-minute call and you'll get a clear, transparent proposal." },
        { q: "What happens after the project is done?", a: "You own everything. Full documentation, handover, and optional ongoing support via a monthly retainer — so the system keeps running smoothly." },
        { q: "Can you work with our existing tools, or do we need to buy new software?", a: "I work with what you already have wherever possible. If a new tool is needed, I'll recommend the most cost-effective option and set it up for you." },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      headlinePre: "Let's talk about what ",
      headlineAccent: "you're still doing by hand.",
      description: "Book a free 30-minute discovery call. No pitch, no obligation — just an honest look at what could run automatically.",
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
  },

  DE: {
    nav: { services: "Leistungen", process: "Prozess", testimonials: "Kundenstimmen", cta: "Termin buchen" },
    hero: {
      before: "Ich verwandle Prozesse in",
      words: ["automatisierte", "intelligente", "mühelose", "skalierbare", "leistungsstarke"],
      after: "Systeme.",
      subline: "Vertrieb, Marketing, Content - wenn dein Team es täglich manuell erledigt, gibt es einen besseren Weg.",
      cta: "Termin buchen",
      secondary: "Was ich mache",
    },
    stats: { labels: ["Manuell eliminierte Arbeit pro Monat", "Monatlich generierte Einsparungen", "Individuell für dein Unternehmen entwickelt"] },
    integrations: { eyebrow: "Integrationen", title: "Funktioniert mit den Tools, die du bereits nutzt" },
    services: {
      eyebrow: "Unsere Leistungen",
      title: "Was ich mache",
      subline: "Wo ich einsteige, um deine Systeme intelligenter zu machen.",
      cards: [
        { title: "Automatisierungssysteme", description: "Dein Team verbringt Stunden mit Aufgaben, die sich selbst erledigen sollten. Ich baue End-to-End-Workflows, die die Routinearbeit übernehmen — damit deine Mitarbeiter sich auf das konzentrieren können, was wirklich zählt." },
        { title: "KI-Agenten", description: "Autonome Agenten, die in deinem Namen lesen, entscheiden und handeln — 24/7, über E-Mail, Chat, Formulare und Telefon. Komplexe Anfragen werden eskaliert. Alles andere läuft automatisch." },
        { title: "KI-Integration", description: "KI, verbunden mit den Tools, die du bereits nutzt. Erstellen, klassifizieren, weiterleiten, zusammenfassen — direkt in deinen bestehenden Stack integriert, ohne alles neu aufzubauen." },
        { title: "Systemdesign", description: "Vor dem Bauen planen wir. Klare Datenarchitektur, saubere Integrationen, solide Grundlagen — damit nichts bricht, wenn das Unternehmen wächst." },
      ],
    },
    process: {
      eyebrow: "So funktioniert es",
      title: "Unser Prozess",
      subline: "Unsere Vorgehensweise.",
      steps: [
        { title: "Kennenlerngespräch", description: "Du erklärst mir deine Abläufe. Ich finde heraus, wo Automatisierung den größten Hebel erzeugt — und sage dir genau, was möglich ist." },
        { title: "Systemdesign", description: "Ich skizziere die genauen Tools, Verbindungen und die Logik, bevor ich eine einzige Zeile schreibe. Keine Überraschungen später." },
        { title: "Umsetzung", description: "Ich baue, teste und übergebe alles. Vollständig funktionierend, vollständig dokumentiert, ab Tag eins einsatzbereit." },
        { title: "Nachverfolgen & optimieren", description: "Wir beobachten die Performance, erkennen Sonderfälle und optimieren, bis das System sich selbst läuft. Ich bleibe dabei." },
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
        { q: "Brauche ich ein technisches Team, um mit dir zu arbeiten?", a: "Nein. Ich übernehme die technische Seite komplett. Du beschreibst das Problem, ich baue die Lösung. Kein internes IT-Team erforderlich." },
        { q: "Wie lange dauert es, erste Ergebnisse zu sehen?", a: "Die meisten Kunden sehen funktionierende Automatisierungen innerhalb von 2–3 Wochen. Wir starten mit dem Bereich mit dem größten Effekt — Ergebnisse kommen schnell." },
        { q: "Mit welchen Tools arbeitest du?", a: "n8n, Airtable, Typeform, Google Workspace, Slack, Gmail, OpenAI, Claude API und die meisten Tools mit einer API. Falls du unsicher bist, frag einfach." },
        { q: "Arbeitest du mit kleinen Unternehmen oder nur mit großen?", a: "Mit beiden. Was zählt, ist ob Automatisierung echten Mehrwert für dein Unternehmen schaffen kann — nicht die Unternehmensgröße." },
        { q: "Was kostet das?", a: "Jedes Projekt wird individuell kalkuliert. Starte mit einem kostenlosen 30-Minuten-Gespräch und du bekommst ein klares, transparentes Angebot." },
        { q: "Was passiert nach Abschluss des Projekts?", a: "Dir gehört alles. Vollständige Dokumentation, Übergabe und optional laufende Unterstützung per Monatsretainer — damit das System reibungslos weiterläuft." },
        { q: "Kannst du mit unseren bestehenden Tools arbeiten, oder müssen wir neue kaufen?", a: "Ich arbeite so weit wie möglich mit dem, was du bereits nutzt. Falls ein neues Tool nötig ist, empfehle ich die günstigste Option und richte sie ein." },
      ],
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      headlinePre: "Lass uns darüber sprechen, was du ",
      headlineAccent: "noch von Hand machst.",
      description: "Buch ein kostenloses 30-minütiges Gespräch. Kein Verkaufsgespräch, keine Verpflichtung — nur ein ehrlicher Blick auf das, was automatisch laufen könnte.",
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
  },

  TR: {
    nav: { services: "Hizmetler", process: "Süreç", testimonials: "Görüşler", cta: "Görüşme Ayarla" },
    hero: {
      before: "Manuel işleri",
      words: ["otomatik", "akıllı", "zahmetsiz", "ölçeklenebilir", "güçlü"],
      after: "sistemlere dönüştürüyorum.",
      subline: "Operasyon, pazarlama, içerik — ekibiniz bunu manuel yapıyorsa, daha iyi bir yol var.",
      cta: "Görüşme Ayarla",
      secondary: "Ne Yapıyorum",
    },
    stats: { labels: ["Aylık elimine edilen manuel iş", "Aylık oluşturulan tasarruf", "İşinize özel geliştirildi"] },
    integrations: { eyebrow: "Entegrasyonlar", title: "Mevcut araçlarınızla çalışır" },
    services: {
      eyebrow: "Hizmetlerimiz",
      title: "Ne Yapıyorum",
      subline: "Sistemlerinizi daha akıllı hale getirdiğim yer.",
      cards: [
        { title: "Otomasyon Sistemleri", description: "Ekibiniz kendiliğinden çalışması gereken görevlere saatler harcıyor. Rutin işleri üstlenen uçtan uca iş akışları inşa ediyorum — böylece insanlarınız gerçekten önemli olana odaklanabilir." },
        { title: "Yapay Zeka Ajanları", description: "Sizin adınıza okuyan, karar veren ve harekete geçen otonom ajanlar — 7/24, e-posta, sohbet, form ve telefon üzerinden. Karmaşık talepler iletilir. Her şey otomatik çalışır." },
        { title: "Yapay Zeka Entegrasyonu", description: "Halihazırda kullandığınız araçlara bağlı yapay zeka. Taslak oluşturma, sınıflandırma, yönlendirme, özetleme — mevcut altyapınıza doğrudan entegre, sıfırdan yeniden inşa etmeden." },
        { title: "Sistem Tasarımı", description: "Kurmadan önce haritalıyoruz. Net veri mimarisi, temiz entegrasyonlar, sağlam temeller — iş büyüdüğünde hiçbir şey bozulmasın diye." },
      ],
    },
    process: {
      eyebrow: "Nasıl çalışır",
      title: "Sürecimiz",
      subline: "Çalışma yöntemimiz.",
      steps: [
        { title: "Keşif Görüşmesi", description: "Bana iş akışlarınızı anlatırsınız. Otomasyonun en fazla kaldıraç yarattığı yeri bulur — ve neyin mümkün olduğunu tam olarak söylerim." },
        { title: "Sistem Tasarımı", description: "Tek bir satır yazmadan önce gereken araçları, bağlantıları ve mantığı haritalıyorum. Sonradan sürpriz yok." },
        { title: "Uygulama", description: "Her şeyi inşa eder, test eder ve teslim ederim. Tamamen çalışır, tamamen belgelenmiş, ilk günden hazır." },
        { title: "Takip & Optimizasyon", description: "Performansı izler, uç durumları yakalar ve sistem kendiliğinden çalışana kadar iyileştiririz. Ben buradayım." },
      ],
    },
    testimonials: {
      eyebrow: "Müşteri Görüşleri",
      title: "Müşteriler ne diyor",
      subline: "Manuel çalışmayı bırakmaya karar veren ekiplerin gerçek sonuçları.",
      items: [
        { name: "Soojin Joung", role: "CEO",    company: "BAZZAAL",                   content: "Furkan ile çalışmak, influencer kampanya yönetimimizi tamamen değiştirdi. Eskiden günler süren işler artık otomatik çalışıyor.", rating: 5 },
        { name: "Sahibi",       role: "Kurucu", company: "ViUnlimited",                content: "Furkan tüm içerik sürecimizi otomatize etti. Ekibimiz her hafta saatler kazanıyor — sonuçlar kendini gösteriyor.", rating: 5 },
        { name: "Patrick Wings",role: "Sahibi", company: "Digital Marketing Services", content: "Tam aradığınız teknik iş ortağı — söz verdiğini teslim eder, gereksiz karmaşıklık olmadan.", rating: 5 },
      ],
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık Sorulan Sorular",
      items: [
        { q: "Benimle çalışmak için teknik bir ekibe ihtiyacınız var mı?", a: "Hayır. Teknik tarafı tamamen ben üstleniyorum. Siz problemi tanımlarsınız, ben çözümü inşa ederim. Dahili bir IT ekibine gerek yok." },
        { q: "İlk sonuçları ne zaman görürüm?", a: "Çoğu müşteri 2–3 hafta içinde çalışan otomasyonlar görür. En yüksek etkiye sahip alanla başlıyoruz — sonuçlar hızlı gelir." },
        { q: "Hangi araçlarla çalışıyorsunuz?", a: "n8n, Airtable, Typeform, Google Workspace, Slack, Gmail, OpenAI, Claude API ve API'si olan çoğu araç. Emin değilseniz sormaktan çekinmeyin." },
        { q: "Küçük işletmelerle mi yoksa sadece büyük şirketlerle mi çalışıyorsunuz?", a: "Her ikisiyle de. Önemli olan otomasyonun işletmeniz için gerçek değer yaratıp yaratamayacağı — şirket büyüklüğü değil." },
        { q: "Fiyatlandırma nasıl?", a: "Her proje bireysel olarak kapsamlandırılır. Ücretsiz 30 dakikalık bir görüşme ile başlayın ve açık, şeffaf bir teklif alın." },
        { q: "Proje tamamlandıktan sonra ne olur?", a: "Her şey size ait. Tam dokümantasyon, devir teslim ve isteğe bağlı aylık retainer ile süregelen destek — sistemin sorunsuz çalışması için." },
        { q: "Mevcut araçlarımızla çalışabilir misiniz, yoksa yeni yazılım almak zorunda mıyız?", a: "Mümkün olan her yerde sahip olduklarınızla çalışırım. Yeni bir araç gerekirse, en uygun maliyetli seçeneği önerir ve sizin için kurarım." },
      ],
    },
    contact: {
      eyebrow: "İletişime Geç",
      headlinePre: "Hâlâ elle yaptıklarınızı ",
      headlineAccent: "birlikte konuşalım.",
      description: "Ücretsiz 30 dakikalık bir keşif görüşmesi ayırtın. Satış konuşması yok, yükümlülük yok — sadece otomatikleştirilebileceklere dürüst bir bakış.",
      cta: "Görüşme Ayarla →",
    },
    footer: {
      navTitle: "Navigasyon",
      nav: [
        { label: "Hizmetler", href: "#services" },
        { label: "Süreç", href: "#process" },
        { label: "Görüşler", href: "#testimonials" },
        { label: "SSS", href: "#faq" },
      ],
      companyTitle: "Şirket",
      company: [
        { label: "Hakkımızda", href: "#" },
        { label: "Kullanım Şartları", href: "#" },
        { label: "Gizlilik Politikası", href: "#" },
      ],
      contactTitle: "İletişim",
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
