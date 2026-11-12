import Shell from "../Shell"
import JsonLd, { serviceSchema } from "../JsonLd"
import { demoHref } from "../config"
import { UI, type Lang } from "../i18n"
import { Cta, Faq, Hl, Package, PageHero, Proof, Quotes, Section, Steps } from "../blocks"

const SVC = {"de": ["Website mit Online-Buchung", "Eigene Website mit Online-Terminbuchung für Salons, Studios und lokale Betriebe – ohne monatliche Plattformgebühren."], "en": ["Website with online booking", "Your own website with online booking for salons, studios and local businesses – no monthly platform fees."]} as const

const T = {
  de: {
    title: <>Deine Website mit <em className="hl">eigener Online-Buchung.</em></>,
    lead: <>Kunden buchen direkt bei dir – auf deiner Seite, in deinem Design. <Hl>Ohne monatliche Gebühren</Hl> an Buchungsplattformen. <Hl>Fertig in 7 Tagen.</Hl></>,
    a1: "Kostenlose Demo anfragen", a2: "Paket und Preis",
    sub: "Für Salons, Barbershops, Kosmetik-, Nagel- und Lash-Studios.",
    painTitle: "Kommt dir das bekannt vor?",
    pains: ["Ich zahle jeden Monat für ein Buchungstool, das aussieht wie von 2010.", "Die Hälfte der Termine kommt per WhatsApp und ich tippe alles von Hand ab.", "Wer mich bei Google sucht, landet auf einer Plattform statt bei mir."],
    pkgTitle: "Alles drin, was dein Laden braucht.",
    pkgName: "Website mit Online-Buchung",
    pkg: ["Website im Stil deines Ladens, optimiert fürs Handy", "Eigene Online-Buchung mit deinen Leistungen, Preisen und Zeiten", "Automatische Bestätigung und Erinnerung per E-Mail", "WhatsApp-Button und Anfahrt", "Google-Unternehmensprofil eingerichtet und verknüpft", "Impressum und Datenschutz eingebunden", "Einweisung per Video, damit du alles selbst ändern kannst"],
    priceLabel: "Einmalig", price: "ab 990 €",
    priceNote: "Optional ab 29 € im Monat für Hosting, Updates und kleine Änderungen. Keine Provision pro Buchung.",
    priceCta: "Demo anfragen",
    stepsTitle: "So läuft es ab",
    steps: [["Demo", "Ich baue dir vorab einen kostenlosen Entwurf aus deinem Instagram und deinen Leistungen."], ["Feinschliff", "Du sagst, was dir gefällt und was anders soll. Wir klären Texte, Fotos und Zeiten."], ["Live", "Die Seite geht online, die Buchung ist verbunden, dein Google-Profil verlinkt."], ["Übergabe", "Kurze Einweisung per Video. Danach buchen deine Kunden direkt bei dir."]] as [string, string][],
    proofTitle: "Bisherige Projekte",
    proof: [["Salon Majesto", "Barbershop. Minimalistische Website mit eigener Buchung als Ersatz für eine kostenpflichtige Buchungsplattform."], ["YVEA Studio", "Lash, Brow und Nails in Esslingen. Website mit Online-Buchung."], ["Eva Thaimassage Ulm", "Website für ein Thai-Massage-Studio."]] as [string, string][],
    faqTitle: "Häufige Fragen",
    faq: [["Muss ich technisch etwas können?", "Nein. Du schickst mir deine Leistungen, Preise und ein paar Fotos. Den Rest mache ich."], ["Was passiert mit meiner bisherigen Buchungsplattform?", "Du kannst sie kündigen, sobald die neue Buchung läuft. Bestehende Termine übernimmst du einfach in den neuen Kalender."], ["Kann ich selbst Zeiten und Preise ändern?", "Ja. Öffnungszeiten, Leistungen und Preise pflegst du selbst. Für Designänderungen bin ich da."], ["Was kostet die Demo?", "Nichts. Wenn sie dir nicht gefällt, war es das."], ["Wem gehört die Website?", "Dir. Domain und Inhalte laufen auf deinen Namen."]] as [string, string][],
    ctaTitle: "Willst du sehen, wie deine Seite aussehen könnte?",
    ctaText: "Schick mir deinen Instagram-Namen. Du bekommst innerhalb von 48 Stunden einen kostenlosen Entwurf.",
    ctaPrimary: "Gespräch buchen",
  },
  en: {
    title: <>Your website with <em className="hl">your own online booking.</em></>,
    lead: <>Clients book directly with you – on your site, in your design. <Hl>No monthly fees</Hl> to booking platforms. <Hl>Ready in 7 days.</Hl></>,
    a1: "Request a free demo", a2: "Package and price",
    sub: "For salons, barbershops, beauty, nail and lash studios.",
    painTitle: "Sound familiar?",
    pains: ["I pay every month for a booking tool that looks like it's from 2010.", "Half my appointments come in via WhatsApp and I type everything up by hand.", "When people search for me on Google, they land on a platform instead of on my site."],
    pkgTitle: "Everything your business needs.",
    pkgName: "Website with online booking",
    pkg: ["A website in your shop's style, optimised for mobile", "Your own online booking with your services, prices and hours", "Automatic confirmation and reminder emails", "WhatsApp button and directions", "Google Business Profile set up and linked", "Legal notice and privacy policy included", "Video walkthrough so you can change everything yourself"],
    priceLabel: "One-off", price: "from €990",
    priceNote: "Optional from €29 per month for hosting, updates and small changes. No commission per booking.",
    priceCta: "Request a demo",
    stepsTitle: "How it works",
    steps: [["Demo", "I build you a free draft upfront, based on your Instagram and your services."], ["Fine-tuning", "You tell me what you like and what should change. We sort out texts, photos and hours."], ["Live", "The site goes online, booking is connected, your Google profile is linked."], ["Handover", "A short video walkthrough. From then on, your clients book directly with you."]] as [string, string][],
    proofTitle: "Past projects",
    proof: [["Salon Majesto", "Barbershop. Minimalist website with its own booking, replacing a paid booking platform."], ["YVEA Studio", "Lash, brow and nails in Esslingen. Website with online booking."], ["Eva Thaimassage Ulm", "Website for a Thai massage studio."]] as [string, string][],
    faqTitle: "Frequently asked questions",
    faq: [["Do I need any technical skills?", "No. You send me your services, prices and a few photos. I do the rest."], ["What happens to my current booking platform?", "You can cancel it as soon as the new booking is live. Existing appointments simply move into the new calendar."], ["Can I change hours and prices myself?", "Yes. You manage opening hours, services and prices yourself. I'm there for design changes."], ["What does the demo cost?", "Nothing. If you don't like it, that's that."], ["Who owns the website?", "You do. Domain and content are in your name."]] as [string, string][],
    ctaTitle: "Want to see what your site could look like?",
    ctaText: "Send me your Instagram handle. You'll get a free draft within 48 hours.",
    ctaPrimary: "Book a call",
  },
}

export default function Websites({ lang }: { lang: Lang }) {
  const t = T[lang]
  const demo = demoHref(lang)
  return (
    <Shell lang={lang}>
      <JsonLd data={serviceSchema(lang, "/websites", SVC[lang][0], SVC[lang][1])} />
      <PageHero title={t.title} lead={t.lead} actions={[{ href: demo, label: t.a1 }, { href: "#paket", label: t.a2 }]} sub={t.sub} />
      <Section><h2>{t.painTitle}</h2><Quotes items={t.pains} /></Section>
      <Section id="paket">
        <h2>{t.pkgTitle}</h2>
        <Package title={t.pkgName} items={t.pkg}>
          <span>{t.priceLabel}</span>
          <div className="amount">{t.price}</div>
          <p className="price-fixed">{UI[lang].fixedPrice}</p>
          <p>{t.priceNote}</p>
          <a className="btn" href={demo}>{t.priceCta}</a>
        </Package>
      </Section>
      <Section><h2>{t.stepsTitle}</h2><Steps items={t.steps} /></Section>
      <Section><h2>{t.proofTitle}</h2><Proof items={t.proof} /></Section>
      <Section><h2>{t.faqTitle}</h2><Faq items={t.faq} /></Section>
      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} primary={t.ctaPrimary} />
    </Shell>
  )
}
