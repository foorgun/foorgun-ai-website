---
title: "Power Automate Cloud vs. Desktop: was ist der Unterschied?"
description: Power Automate gibt es als Cloud-Flows und als Desktop-Flows. Was die beiden unterscheidet, wann du welches nutzt und wie sie zusammenspielen.
slug: power-automate-cloud-vs-desktop
date: 2026-11-11
cluster: automation
---

Wer im Microsoft-Umfeld arbeitet, stößt beim Thema Automation schnell auf **Power Automate**. Und dann auf die erste Verwirrung: Es gibt **Cloud-Flows** und **Desktop-Flows** (das Programm dafür heißt Power Automate for desktop). Beide heißen Power Automate – funktionieren aber grundverschieden.

## Die Kurzfassung

| | Cloud-Flow | Desktop-Flow |
|---|---|---|
| Wie es arbeitet | verbindet Dienste über Schnittstellen (Konnektoren) | bedient Programme über die Oberfläche, wie ein Mensch |
| Wo es läuft | in der Microsoft-Cloud | auf einem Windows-Rechner |
| Typische Aufgaben | Mails, Teams, SharePoint, Excel Online, Genehmigungen | Altsysteme, Desktop-Programme, Webseiten ohne Schnittstelle |
| Stabilität | hoch – Schnittstellen ändern sich selten | anfälliger – jede Änderung an der Oberfläche kann stören |
| Technik dahinter | API-Automation | RPA (Robotic Process Automation) |

## Cloud-Flows: Automation über Schnittstellen

Ein Cloud-Flow startet durch einen **Auslöser** – eine neue Mail, eine neue Datei in SharePoint, ein Zeitplan oder ein Klick – und arbeitet dann eine Reihe von Schritten ab. Dafür nutzt er **Konnektoren**: fertige Verbindungen zu Diensten wie Outlook, Teams, SharePoint, Excel, aber auch zu vielen Tools außerhalb von Microsoft.

Typische Beispiele:

- Anhänge aus Mails automatisch in SharePoint ablegen
- Genehmigungen für Urlaub oder Bestellungen über Teams einholen
- Formular-Einträge in eine Liste übertragen und das Team benachrichtigen

Cloud-Flows sind schnell, stabil und laufen rund um die Uhr, ohne dass ein Rechner eingeschaltet sein muss.

## Desktop-Flows: Automation über die Oberfläche

Nicht jedes Programm hat eine Schnittstelle. Gerade ältere Fachanwendungen, Warenwirtschaftssysteme oder Branchensoftware lassen sich oft nur über ihre Oberfläche bedienen. Hier kommen **Desktop-Flows** ins Spiel: Sie zeichnen Klicks und Eingaben auf und spielen sie ab – Felder ausfüllen, Buttons klicken, Daten kopieren.

Das nennt man **RPA** (Robotic Process Automation). Es ist eine Brücke zu Systemen, die sonst gar nicht automatisierbar wären. Der Preis dafür: Wenn sich die Oberfläche ändert – ein Button wandert, ein Fenster heißt anders –, muss der Flow angepasst werden. Mehr dazu im Artikel [RPA oder API-Automation?](/blog/rpa-oder-api-automatisierung)

Man unterscheidet zwei Betriebsarten:

- **Beaufsichtigt (attended):** Der Flow läuft auf dem Rechner einer angemeldeten Person, oft von ihr selbst gestartet.
- **Unbeaufsichtigt (unattended):** Der Flow läuft ohne angemeldete Person auf einem eigenen Rechner oder einer virtuellen Maschine.

## Beides zusammen: der häufigste Fall in der Praxis

Die Stärke von Power Automate liegt in der Kombination. Ein Cloud-Flow übernimmt alles, was über Schnittstellen geht, und ruft nur für den einen Schritt ohne Schnittstelle einen Desktop-Flow auf:

[[figure:pa-hybrid]]

Die Rechnung kommt per Mail, der Cloud-Flow liest sie aus. Das alte Buchhaltungsprogramm hat keine Schnittstelle – also trägt ein Desktop-Flow die Daten dort ein. Danach informiert wieder der Cloud-Flow das Team in Teams.

## Was ist mit den Lizenzen?

Das Lizenzmodell von Microsoft ändert sich regelmäßig, deshalb nur die Grundzüge:

- Cloud-Flows mit **Standard-Konnektoren** sind in vielen Microsoft-365-Lizenzen bereits enthalten.
- Für **Premium-Konnektoren** und für Desktop-Flows, die aus der Cloud gestartet werden, braucht es eine Power-Automate-Premium-Lizenz.
- **Unbeaufsichtigte** Desktop-Flows benötigen zusätzlich eine eigene Lizenz pro Bot bzw. Rechner.
- Power Automate for desktop selbst lässt sich unter Windows kostenlos installieren – für einfache, manuell gestartete Automationen auf dem eigenen Rechner.

Prüf vor einem Projekt den aktuellen Stand bei Microsoft – oder lass dich beraten, bevor du Lizenzen kaufst, die du gar nicht brauchst.

## Meine Empfehlung

1. **Schnittstelle zuerst.** Wenn es einen Konnektor oder eine API gibt, nehmt den Cloud-Flow. Er ist stabiler und günstiger im Betrieb.
2. **Desktop-Flow als Brücke.** Nur für die Schritte, bei denen es wirklich keine Schnittstelle gibt.
3. **Erst den Ablauf verstehen.** Wer vorher aufschreibt, wie der Prozess läuft – zum Beispiel mit [BPMN](/blog/bpmn-einfach-erklaert) –, sieht sofort, welche Schritte über Schnittstellen gehen und wo eine Brücke nötig ist.

Du arbeitest mit Microsoft 365 und willst wissen, was sich bei dir automatisieren lässt? Genau das klären wir im [Automations-Pilot](/automation). Und wenn dein Team selbst mit Power Automate bauen soll: Das ist Teil meines [KI-Coachings](/ki-coaching).
