// Kontakt: HIER ANPASSEN
export const EMAIL = "hello@foorgun.com"
// Eigene Nummer eintragen (z. B. "https://wa.me/4917612345678").
// Solange leer, ersetzt E-Mail die WhatsApp-Buttons.
export const WHATSAPP: string = "https://wa.me/4917622920442"
export const CALL = "https://cal.eu/foorgun/15min"
export const HAS_WA = WHATSAPP !== ""

export const demoHref = (lang: "de" | "en") =>
  HAS_WA
    ? WHATSAPP
    : `mailto:${EMAIL}?subject=${lang === "de" ? "Kostenlose%20Website-Demo" : "Free%20website%20demo"}`
