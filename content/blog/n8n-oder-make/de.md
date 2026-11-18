---
title: "n8n oder Make? Welche Automatisierung passt zu deinem Unternehmen?"
description: n8n und Make verbinden beide deine Tools, aber mit unterschiedlichen Stärken. Entscheidend sind Komplexität deines Ablaufs, Anzahl der Systeme, Betreuung und Kosten – nicht die Feature-Liste.
slug: n8n-oder-make
date: 2026-11-11
cluster: automation
---

Wenn Unternehmen Abläufe zwischen ihren Tools automatisieren wollen, landen sie schnell bei zwei Namen: **n8n** und **Make** (früher Integromat). Beide verbinden Apps wie Gmail, Google Sheets, CRM oder Slack über visuelle Workflows. Beide können KI-Schritte einbauen.

Die Frage ist also nicht, welches Tool „besser“ ist – sondern welches besser zu dir passt.

## Die Kurzfassung

| | n8n | Make |
|---|---|---|
| Betrieb | Cloud oder auf eigenem Server | nur Cloud |
| Abrechnung (Cloud) | pro Workflow-Ausführung | nach Verbrauch – jeder Schritt zählt |
| Einstieg | etwas technischer | sehr einsteigerfreundlich |
| Eigener Code | JavaScript und Python direkt im Workflow | möglich, aber begrenzter |
| KI-Agenten | eigene Bausteine für KI-Agenten | KI-Module und -Agenten verfügbar |

## Wann n8n passt

- **Daten sollen im Haus bleiben.** n8n lässt sich auf einem eigenen Server betreiben. Für viele Unternehmen mit sensiblen Kunden- oder Personaldaten ist das ein wichtiges Argument.
- **Workflows haben viele Schritte.** In der Cloud-Version zählt bei n8n eine Ausführung einmal – egal, wie viele Schritte der Workflow hat. Bei großen Workflows mit vielen Datensätzen kann das deutlich günstiger sein.
- **Es braucht Logik, die über Klicken hinausgeht.** Mit Code-Bausteinen lassen sich Sonderfälle sauber abbilden, statt sie um drei Ecken zu bauen.

## Wann Make passt

- **Das Team soll selbst kleine Automationen bauen.** Make ist sehr zugänglich: Die Oberfläche ist übersichtlich, und viele Fertigbausteine nehmen Arbeit ab.
- **Die Abläufe sind überschaubar.** Für einfache Verbindungen mit wenigen Schritten ist Make schnell eingerichtet.
- **Es soll keinen eigenen Server geben.** Make läuft komplett in der Cloud, auf Wunsch mit Rechenzentrum in der EU.

## Vier Fragen, die die Wahl entscheiden

1. **Wie komplex ist dein Ablauf?** Wenige Schritte, ein klarer Weg: Make reicht oft völlig. Viele Verzweigungen, Sonderfälle und große Datenmengen: n8n gibt dir mehr Spielraum.
2. **Wie viele Systeme hängen dran?** Je mehr Programme beteiligt sind, desto wichtiger werden Fehlerbehandlung und Übersicht. Prüfe außerdem vorab, ob die Tools, die du nutzt, in beiden Plattformen angebunden sind.
3. **Wer betreut es danach?** Bei n8n auf eigenem Server kommt Betrieb dazu: Updates, Backups, Überwachung. Make nimmt dir das ab. Dafür hast du dort weniger Kontrolle.
4. **Was kostet es im laufenden Betrieb?** Beide rechnen unterschiedlich ab (siehe Tabelle). Bei wenigen Schritten ist der Unterschied klein, bei großen Workflows mit vielen Datensätzen kann er spürbar werden. Rechne deshalb mit deinem echten Ablauf, nicht mit der Preisliste.

## Worauf es darüber hinaus ankommt

Die Tool-Frage ist meistens nicht die entscheidende. Wichtiger ist:

1. **Ist der Ablauf klar?** Wer einen unklaren Ablauf automatisiert, bekommt einen unklaren Ablauf, der schneller Fehler macht. Deshalb nehme ich Abläufe vorher auf – zum Beispiel mit [BPMN](/de/blog/bpmn-einfach-erklaert).
2. **Wer kümmert sich danach?** Eine Automation braucht jemanden, der Fehlermeldungen bekommt und kleine Anpassungen machen kann.
3. **Was passiert bei Fehlern?** Gute Workflows melden sich, wenn etwas schiefgeht – statt still Daten zu verlieren.

## Meine Empfehlung

Für die meisten Projekte mit Kundendaten, mehreren Systemen und KI-Schritten setze ich auf **n8n** – wegen der Kontrolle über die Daten und der Flexibilität. Wenn ein Team aber vor allem selbst einfache Verbindungen bauen soll, ist **Make** oft der leichtere Einstieg.

Du bist unsicher, was für deinen Ablauf passt? In einem kostenlosen 15-Minuten-Gespräch schauen wir gemeinsam, welcher Ansatz zu deinem Unternehmen passt. Danach geht es im [Automations-Pilot](/de/automation) weiter: erst der Ablauf, dann das Tool.

Was ein solches Projekt kostet, steht in [Was kostet eine individuelle Automatisierung?](/de/blog/was-kostet-automatisierung-kleine-unternehmen) Beispiele für Abläufe findest du in [7 Prozesse, die jede Marketingagentur automatisieren sollte](/de/blog/sieben-prozesse-agentur-automatisieren).
