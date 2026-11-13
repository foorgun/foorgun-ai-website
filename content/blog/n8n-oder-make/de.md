---
title: "n8n oder Make? Ein Vergleich für den Arbeitsalltag"
description: n8n und Make automatisieren beide Abläufe zwischen deinen Tools – aber mit unterschiedlichen Stärken. Worauf es bei der Wahl wirklich ankommt.
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

## Worauf es wirklich ankommt

Die Tool-Frage ist meistens nicht die entscheidende. Wichtiger ist:

1. **Ist der Ablauf klar?** Wer einen unklaren Ablauf automatisiert, bekommt einen unklaren Ablauf, der schneller Fehler macht. Deshalb nehme ich Abläufe vorher auf – zum Beispiel mit [BPMN](/de/blog/bpmn-einfach-erklaert).
2. **Wer kümmert sich danach?** Eine Automation braucht jemanden, der Fehlermeldungen bekommt und kleine Anpassungen machen kann.
3. **Was passiert bei Fehlern?** Gute Workflows melden sich, wenn etwas schiefgeht – statt still Daten zu verlieren.

## Meine Empfehlung

Für die meisten Projekte mit Kundendaten, mehreren Systemen und KI-Schritten setze ich auf **n8n** – wegen der Kontrolle über die Daten und der Flexibilität. Wenn ein Team aber vor allem selbst einfache Verbindungen bauen soll, ist **Make** oft der leichtere Einstieg.

Du bist unsicher, was für deinen Ablauf passt? Genau das klären wir im [Automations-Pilot](/de/automation): erst der Ablauf, dann das Tool.
