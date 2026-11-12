---
title: "Claude Code und Codex für Nicht-Entwickler: das erste eigene interne Tool"
description: Mit KI-Coding-Agenten wie Claude Code und Codex können auch Leute ohne Programmierkenntnisse kleine interne Tools bauen. Wie du sinnvoll anfängst – und wo die Grenzen liegen.
slug: claude-code-fuer-nicht-entwickler
date: 2026-11-11
cluster: ki-coaching
---

Vor ein paar Jahren brauchte man für ein internes Tool – eine kleine Web-App, ein Formular mit Datenbank, eine Auswertung – ein Entwickler-Team oder eine Agentur. Heute können **KI-Coding-Agenten** einen großen Teil dieser Arbeit übernehmen.

Die zwei bekanntesten: **Claude Code** von Anthropic und **Codex** von OpenAI. Beide schreiben nicht nur einzelne Code-Zeilen, sondern arbeiten an ganzen Projekten: Sie legen Dateien an, führen Befehle aus, testen und korrigieren sich selbst.

## Was diese Tools sind – und was nicht

Claude Code und Codex sind **Agenten**: Du beschreibst in normaler Sprache, was entstehen soll, und sie setzen es Schritt für Schritt um. Sie laufen im Terminal, in Entwicklungsumgebungen wie VS Code oder in eigenen Apps. Für beide brauchst du ein entsprechendes Abo oder einen API-Zugang beim jeweiligen Anbieter.

Was sie **nicht** sind: ein Ersatz für Verständnis. Wer nicht weiß, was er eigentlich bauen will, bekommt sehr schnell sehr viel Code, der das falsche Problem löst.

## Gute erste Projekte

Fang mit etwas an, das klein, intern und überschaubar ist:

- **Eine Übersichtsseite** für Daten, die heute in mehreren Excel-Listen stecken
- **Ein internes Formular**, das Einträge sauber in einer Tabelle oder Datenbank speichert
- **Ein kleines Skript**, das wiederkehrende Dateien umbenennt, zusammenführt oder auswertet
- **Eine einfache Website** oder Landingpage

Schlechte erste Projekte: alles mit Zahlungen, sensiblen Personaldaten oder Kundenzugängen. Dafür braucht es Erfahrung mit Sicherheit und Datenschutz.

## So gehst du vor

1. **Erst den Ablauf beschreiben, nicht die Technik.** „Unser Vertrieb trägt Anfragen in drei Listen ein; ich will eine Seite, auf der alle Anfragen stehen und man den Status ändern kann.“ Das ist ein besserer Start als „Bau mir eine React-App“.
2. **Klein anfangen.** Lass den Agenten zuerst die einfachste Version bauen. Erst wenn die läuft, kommt die nächste Funktion.
3. **Jeden Schritt ansehen.** Die Agenten fragen nach, bevor sie etwas ausführen. Lest mit, was sie vorhaben – gerade, wenn es um Löschen oder Installieren geht.
4. **Versionen sichern.** Mit Git (oder zumindest Kopien) kannst du jederzeit zu einem funktionierenden Stand zurück.
5. **Testen mit echten Fällen.** Funktioniert das Tool auch mit den Sonderfällen aus deinem Alltag?

## Claude Code oder Codex?

Beide sind stark und entwickeln sich schnell weiter. In der Praxis entscheidet oft, welches KI-Abo du ohnehin schon nutzt und mit welcher Oberfläche du dich wohler fühlst. Wichtiger als die Wahl des Tools ist, **wie** du damit arbeitest: klare Aufgaben, kleine Schritte, immer testen.

## Wo die Grenzen liegen

- **Sicherheit:** Sobald ein Tool im Internet erreichbar ist oder mit sensiblen Daten arbeitet, sollte jemand mit Erfahrung draufschauen.
- **Wartung:** Auch ein selbst gebautes Tool braucht Pflege. Kläre vorher, wer sich darum kümmert.
- **Komplexität:** Ab einer gewissen Größe – mehrere Nutzerrollen, viele Schnittstellen – lohnt sich eine saubere Architektur von Anfang an.

## Lernen statt nur ausprobieren

Genau das ist Teil meines [KI-Coachings](/ki-coaching): Claude Code und Codex richtig einsetzen, an einem echten ersten Projekt aus deinem Alltag. Wenn du lieber direkt ein fertiges System willst, schau dir [interne Software nach Maß](/software) an.
