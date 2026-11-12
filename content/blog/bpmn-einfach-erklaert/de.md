---
title: "BPMN einfach erklärt: die 5 Elemente, die du wirklich brauchst"
description: BPMN hat über hundert Symbole – für die meisten Abläufe reichen fünf. Eine verständliche Einführung, plus der Unterschied zwischen BPMN und EPK.
slug: bpmn-einfach-erklaert
date: 2026-11-11
cluster: prozessmanagement
---

**BPMN** steht für *Business Process Model and Notation*. Es ist eine standardisierte Art, Abläufe als Diagramm aufzuschreiben – so, dass sie Fachabteilung, Geschäftsführung und IT gleichermaßen lesen können.

Der Standard (aktuell BPMN 2.0) wird von der Object Management Group gepflegt und ist auch als ISO-Norm veröffentlicht. Das klingt schwer. Ist es aber nicht, solange du dich auf das Wesentliche beschränkt.

## Die 5 Elemente, die du wirklich brauchst

Ein Bild zeigt Lücken, die ein Text versteckt. Du brauchst dafür nicht den ganzen Standard: Fünf Elemente – Ereignisse, Aufgaben, Gateways, Sequenzflüsse sowie Pools und Lanes – decken fast alles ab, was du zeichnen wirst.

[[figure:bpmn-legend]]

Lest ein Diagramm von links nach rechts. Ein Ablauf hat meist ein Startereignis, mindestens ein Ende, und jede Aufgabe liegt in der Lane von dem, der sie erledigt. Passt ein Schritt in keine Lane, ist noch niemand dafür zuständig.

Jeder Pfeil, der die Lane wechselt, ist eine Übergabe – und Übergaben sind die Stellen, an denen am häufigsten etwas liegen bleibt:

[[figure:bpmn-lanes]]

## Ein Beispiel

Ein typischer Ablauf von der Anfrage zum Angebot:

1. **Start:** Anfrage kommt per Mail
2. **Aufgabe:** Anfrage auslesen und ins CRM eintragen
3. **Gateway:** Alles da?
   - nein → fehlende Infos nachfragen, dann zurück zu Schritt 2
   - ja → weiter
4. **Aufgabe:** Angebot prüfen und freigeben
5. **Aufgabe:** Angebot verschicken
6. **Ende:** Angebot ist raus

Als BPMN-Diagramm sieht das so aus. Orange markiert sind die Schritte, die automatisch laufen können:

[[figure:bpmn-example]]

Sobald der Ablauf so aufgeschrieben ist, sieht man sofort, welche Schritte sich automatisieren lassen – und welche bewusst beim Team bleiben sollten.

## Typische Fehler

- **Zu viel auf einmal:** Ein Diagramm, das nicht auf eine Seite passt, liest niemand. Lieber in Teilprozesse aufteilen.
- **Soll statt Ist:** Erst aufschreiben, wie es *heute wirklich* läuft. Den Idealzustand gibt es danach.
- **Ohne die Beteiligten:** Wer den Ablauf täglich macht, kennt die Ausnahmen. Ohne diese Leute fehlt die Hälfte.

## BPMN oder EPK?

Im deutschsprachigen Raum begegnet dir oft auch die **EPK** (Ereignisgesteuerte Prozesskette). Sie wurde Anfang der 1990er an der Universität des Saarlandes im Umfeld von ARIS entwickelt und wurde vor allem durch SAP-Projekte bekannt.

Auch die EPK kommt mit wenigen Elementen aus:

[[figure:epk-legend]]

Die wichtigste Regel: Ereignisse und Funktionen wechseln sich immer ab. Jede Funktion wird durch ein Ereignis ausgelöst und endet in einem Ereignis. Unser Beispiel sieht als EPK so aus:

[[figure:epk-example]]

| | BPMN | EPK |
|---|---|---|
| Verbreitung | international Standard | vor allem DACH, SAP-Umfeld |
| Grundidee | Aufgaben, Ereignisse, Gateways | abwechselnd Ereignis – Funktion – Ereignis |
| Stärke | gut lesbar, direkt Grundlage für Automation | sehr verbreitet in bestehender Dokumentation |

Meine Empfehlung: Für neue Projekte, besonders wenn später automatisiert werden soll, **BPMN**. Wenn dein Unternehmen schon mit EPK dokumentiert, bleib dabei – Hauptsache, es wird überhaupt aufgeschrieben.

## Kurz zusammengefasst

- Mit fünf Elementen – Ereignis, Aufgabe, Gateway, Pfeil, Lane – lassen sich die meisten Abläufe beschreiben.
- Erst den Ist-Ablauf aufnehmen, mit den Leuten, die ihn machen.
- Ein sauberes Diagramm ist die beste Grundlage, um zu entscheiden, was sich [automatisieren](/automation) lässt.
