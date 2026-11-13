# foorgun.ai – Projektkontext für Claude Code

## Wer / was
Furkan Çetin, Wirtschaftsinformatiker, selbstständig als **foorgun.ai** (AI & Automation). Remote, Sprachen: DE, EN, TR.
Ziel der Seite: Leads über ein kostenloses 15-Min-Gespräch (Cal: https://cal.eu/foorgun/15min), alternativ WhatsApp/E-Mail (hello@foorgun.com).

## Positionierung (aktuell)
- Headline Startseite (bewusst so gewollt): **"Bau ein Unternehmen, das für dich arbeitet. Nicht umgekehrt."**
- Differenzierung direkt darunter: Prozess zuerst, nicht Tool. "Erst verstehe ich, wie du arbeitest. Dann baue ich das, was dir jede Woche Stunden spart."
- Positionierung: AI / Intelligent Automation Engineer. Drei Sparten, die aufeinander aufbauen: Automation → Software & Plattformen (interne Software, CRM, Kundenportale, Websites mit Online-Buchung) → KI-Coaching. Websites nicht in der Hauptnavigation, aber /websites bleibt (verlinkt von /software und Footer).
- Ablauf: Zuerst verstehen → Klein anfangen → Dann ausbauen.
- Zielgruppe: Unternehmen jeder Größe, Selbstständige, lokale Betriebe.

## Ton
Direkt, ehrlich, konkret, kein Buzzword-Bingo, keine Rechtsberatung-Formulierungen. Kundenfokus und Prozessfokus vor Tool-Fokus. Anrede: **immer duzen** (du/dich/dein), auf allen Seiten und in Blog-Artikeln. Ausnahme: Rechtstexte (Impressum/Datenschutz) bleiben beim "Sie". FAQ-Fragen aus Kundensicht dürfen "wir" verwenden ("Brauchen wir Vorwissen?").
Kein Roboyo / UiPath / Arbeitgebernamen in der Außendarstellung (bewusst entfernt). BAZZAAL darf genannt werden (Logo in "Trusted by teams", Testimonial Daniela Dávila, COO BAZZAAL), aber keine Details zur Arbeit dort (kein "n8n-Stack, 25+ Workflows, 15 Kunden" o. Ä.). Retainer beendet Okt 2026. "Wer dahinter steckt" = persönliche About-Section ohne Lebenslauf-Aufzählung.

## Zwei Codebasen
1. **Live-Seite**: Next.js 14 (App Router), Vercel, DNS Cloudflare, Repo ~/foorgun.ai. Enthält /check (Lead-Magnet-Quiz), /impressum, /datenschutz, DE/EN-Toggle, Cookie-Banner, Vercel Analytics, app/sitemap.ts, app/robots.ts. Search Console ist eingerichtet, Sitemap eingereicht.
2. **Statischer Entwurf** (foorgun-site-v3.zip): src/build.py (Python, f-Strings) erzeugt index/websites/automation/software/ki-coaching.html + style.css. Selbst gehostete Schriften in fonts/ (Bricolage Grotesque, Instrument Sans). Design-Tokens: paper #FBFAF7, ink #0C0C0C, signal #C4521A.
   Build: `python3 src/build.py`. Konfiguration oben in build.py (EMAIL, WHATSAPP, CALL, HAS_WA).

## Offene Entscheidung
Soll der Entwurf die Next.js-Seite ersetzen oder in sie überführt werden? Empfehlung: Inhalte/Struktur in die Next.js-Seite übernehmen (so bleiben /check, Legal, Analytics, Sitemap, i18n erhalten). Danach ggf. Umzug auf Coolify (zuletzt, geringe Priorität).

## To-do
- [x] WhatsApp verlinkt: https://wa.me/4917622920442 (components/site/config.ts)
- [ ] Unterseiten an neue Dach-Positionierung anpassen
- [x] Du/Ihr vereinheitlichen (jetzt durchgehend "du")
- [x] Referenzen und Preise bestätigt (12.11.2026): Software ab 3.000 €, Automation ab 1.500 €, KI-Coaching 490 €, Websites 990 € + 29 €/Monat. Testimonials freigegeben. BAZZAAL ohne Projektdetails.
- [ ] Bilder (Portrait, Testimonials, Logos) lokal ablegen statt von foorgun.ai zu laden
- [ ] OG-Image + Meta-Tags, Structured Data
- [ ] Portrait/About mit eigenem Foto verfeinern

## Regeln für die Arbeit
- Weniger planen, mehr machen: erst umsetzen, dann kurz melden.
- Vor Änderungen an der Live-Seite: Branch, Preview prüfen, dann mergen.
- Zahlen/Referenzen nicht erfinden; im Zweifel markieren und nachfragen.

## Blog & SEO (Next.js-Seite, Branch redesign-v3)
- Artikel: `content/blog/<id>/de.md` und `en.md` (immer beide Sprachen). Frontmatter: title, description, slug, date (YYYY-MM-DD), cluster, optional updated.
- Cluster = Pillar-Seite: automation → /automation, ki-coaching → /ki-coaching, prozessmanagement → /prozessmanagement, fde → /forward-deployed-engineering (siehe components/site/clusters.ts). Artikel erscheinen automatisch auf der Pillar-Seite, im Blog, in der Sitemap, mit eigenem Vorschaubild.
- Interne Links im Text setzen: auf die Pillar-Seite und passende andere Artikel (EN ohne Präfix = Standardsprache, DE mit /de). Alte /en-URLs leiten per 301 auf / um (next.config.mjs).
- Keine reinen News; KI-News nur mit eigener Einordnung für Unternehmen. Keine erfundenen Zahlen/Kundenbeispiele.
- Grafiken in Artikeln: eigene Zeile `[[figure:name]]` im Markdown. Verfügbare Namen und neue Grafiken in components/site/figures.tsx (Tabellen: bpmn-legend, epk-legend; Diagramme: bpmn-lanes, bpmn-example, epk-example; Einzelbilder: bpmn-events, bpmn-tasks, bpmn-gateways, bpmn-flows, epk-elements).
