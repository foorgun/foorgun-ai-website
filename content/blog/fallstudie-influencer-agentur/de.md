---
title: "Fallstudie: Wie eine Influencer-Agentur über 50.000 Bewerbungen in vier Monaten verarbeitet"
description: Eine internationale Influencer-Agentur hat Creator-Bewerbungen, Kampagnen-Setup, Versand und Post-Tracking von Hand gesteuert. Was wir automatisiert haben, was bewusst beim Team bleibt und was das gebracht hat.
slug: fallstudie-influencer-agentur
date: 2026-11-20
cluster: automation
---

**Kurz gesagt:** Eine internationale Influencer-Agentur hat ihre Kampagnen über Tabellen, Formulare, E-Mail und ein Team aus Freelancern gesteuert. Heute laufen 7 von 9 Schritten vom Creator-Bewerbungseingang bis zum veröffentlichten Beitrag automatisch. Die Auswahl der Creator bleibt beim Team. In den ersten vier Monaten nach dem Start hat das System **über 50.000 Bewerbungen** verarbeitet.

Den Namen der Agentur und ihrer Kunden lasse ich weg. Die Zahlen stammen aus dem laufenden System.

## Die Ausgangslage

Die Agentur bringt Marken mit Creatorn zusammen: Creator bewerben sich auf eine Kampagne, das Team wählt passende Profile aus, der Kunde gibt die Liste frei, Produkte werden verschickt, und am Ende wird geprüft, ob der Beitrag wirklich online gegangen ist.

Vor dem Projekt sah das so aus:

- **800 bis 1.200 Creator pro Monat**, alles von Hand bearbeitet.
- **Daten an vielen Orten:** Tabellen, Formulare, Newsletter-Tool, eine Datenbank, Chat. Eine verlässliche Gesamtübersicht gab es nicht.
- **Ein Remote-Team aus mehr als sieben Freelancern** hat Bewerbungen gesichtet, Listen gepflegt, Sendungsnummern kopiert und Posts kontrolliert. Viel Abstimmung, unterschiedliche Qualität.
- **Kennzahlen kamen spät**, weil sie erst zusammengetragen werden mussten.

Das Problem war nicht ein einzelner Schritt. Es war die Summe aus vielen kleinen Übergaben, bei denen jedes Mal jemand kopieren, prüfen oder nachfragen musste. Und mit jeder neuen Kampagne wurde es mehr.

## Das Vorgehen

**Zuerst verstehen.** Am Anfang stand ein Treffen vor Ort mit der Geschäftsführung. Wir sind den kompletten Ablauf durchgegangen: wer was macht, wo Daten liegen, wo es hakt. Daraus ist ein Prozessbild entstanden, auf das sich alle einigen konnten.

**Dann bewusst nicht alles auf einmal.** Ich habe drei Ausbaustufen vorgeschlagen: nur Datenbasis und Anbindungen, eine teilautomatisierte Lösung oder eine Vollautomatisierung inklusive automatischer Vorauswahl. In einem Scope-Workshop haben wir uns für die mittlere Stufe entschieden. Sie bringt den größten Teil der Entlastung, ohne dass die Agentur gleich die Kontrolle über die Auswahl abgibt.

**Dann bauen, in kurzen Schritten.** Erst die zentrale Datenbank, dann ein Ablauf nach dem anderen, jeweils mit dem Team getestet, bevor der nächste kam.

## Was gebaut wurde

Eine zentrale Datenbank mit zehn verknüpften Tabellen, an die alle Werkzeuge angebunden sind, plus diese Abläufe:

| Schritt | Vorher | Nachher |
|---|---|---|
| Bewerbung kommt rein | Formular-Antworten von Hand in Listen übertragen | automatisch erfasst, Dubletten entfernt, Profil mit Kennzahlen angereichert, passenden Kampagnen zugeordnet |
| Auswahl | Team sichtet alles | **bleibt beim Team**, aber auf einer sauberen, vorsortierten Liste |
| Liste an den Kunden | Tabellen zusammenkopieren | freigegebene Creator landen automatisch in der Freigabeliste für den Kunden |
| Kampagne im Tracking-Tool anlegen | manuell, Creator einzeln verknüpfen | ein Klick |
| Briefing an Creator | E-Mails einzeln schreiben | ein Klick, personalisiertes Briefing geht raus |
| Prüfen, ob der Beitrag online ist | Profile einzeln durchsehen | tägliche automatische Prüfung, Status wird aktualisiert |
| Nachfassen | wenn jemand daran denkt | bis zu fünf automatische Erinnerungen, wenn bis zur Frist kein Beitrag erkannt wurde |

Zusätzlich gibt es eine Oberfläche, in der das Team sichtet und den Stand sieht. Mitten im Projekt kam der Wunsch auf, auch allgemeine Bewerbungen ohne konkrete Kampagne aufzunehmen und anzureichern. Das habe ich ohne Nachtragsangebot mitgebaut.

**Was bewusst manuell bleibt:** die Entscheidung, welche Creator zu einer Marke passen. Genau dort steckt die Erfahrung der Agentur, und genau dort soll ihr Team seine Zeit verbringen.

## Die Ergebnisse

**Nach den ersten drei Kampagnen:**

- rund **3.200 Bewerbungen** über das neue System verarbeitet
- **7 von 9 Prozessschritten** laufen automatisch
- geschätzt **gut 200 Stunden Handarbeit gespart** (Annahme: 5 Minuten pro Bewerbung, davon 80 % automatisiert)

**Nach vier Monaten im Betrieb:**

- **über 50.000 Bewerbungen** verarbeitet. Das monatliche Volumen ist in dieser Zeit von rund 9.900 auf 18.700 gestiegen.
- rund **1.700 veröffentlichte Beiträge** automatisch erkannt und nachverfolgt
- etwa **ein Viertel der Bewerbenden** passte zu mindestens einer laufenden Kampagne. Die übrigen drei Viertel muss das Team nicht mehr einzeln durchgehen, um das herauszufinden.

Was als Automatisierungsprojekt angefangen hat, ist heute ein fester Teil des Tagesgeschäfts. Nach dem Start ging das Projekt in einen Monatsretainer über: Überwachung, Fehlerbehebung und kleine Verbesserungen, damit der Betrieb stabil läuft.

## Was als Nächstes kam – und was nicht

Mit dem Volumen wuchs auch die Datenbank. Irgendwann stieß das Werkzeug, auf dem alles lief, an seine Grenzen, und der nächste Tarif wäre pro Nutzer deutlich teurer geworden. Ich habe deshalb einen Umzug auf eine eigene Plattform durchgerechnet und vorgeschlagen: eigene Datenbank, eigene Oberfläche, weniger laufende Lizenzkosten.

Die Agentur hat sich entschieden, diesen Schritt vorerst nicht zu gehen. Das ist eine legitime Entscheidung: Das bestehende System läuft, und eine Migration ist ein eigenes Projekt mit eigenem Risiko. Für mich gehört dazu, die Rechnung offen auf den Tisch zu legen und die Entscheidung beim Kunden zu lassen.

## Was andere Agenturen daraus mitnehmen können

1. **Nicht beim Tool anfangen, sondern beim Ablauf.** Erst als der ganze Weg von der Bewerbung bis zum Beitrag auf einem Blatt stand, war klar, wo die Zeit wirklich verloren geht.
2. **Die Entscheidung beim Team lassen, die Fleißarbeit nicht.** Automatisiert wurde alles rund um die Auswahl, nicht die Auswahl selbst.
3. **Mit der mittleren Stufe starten.** Der größte Teil der Entlastung kam aus den einfachen Abläufen. Eine automatische Vorauswahl kann man später ergänzen, wenn die Datenbasis sauber ist.
4. **Von Anfang an messen.** Weil jeder Ablauf protokolliert wird, lassen sich die Ergebnisse oben belegen, statt sie zu schätzen.
5. **Wachstum einplanen.** Werkzeuge, die pro Nutzer oder Datensatz abrechnen, werden mit dem Erfolg teurer. Das sollte man kennen, bevor man darauf aufbaut.

Welche Abläufe sich in Agenturen typischerweise zuerst lohnen, zeigt [7 Prozesse, die jede Marketingagentur automatisieren sollte](/de/blog/sieben-prozesse-agentur-automatisieren). Wie ein ähnlicher Ablauf beim Start neuer Kunden aussieht, beschreibt [Kunden-Onboarding automatisieren](/de/blog/kunden-onboarding-automatisieren), und mit welchen Kosten du rechnen solltest, [Was kostet eine individuelle Automatisierung?](/de/blog/was-kostet-automatisierung-kleine-unternehmen)

Wenn deine Agentur ähnlich arbeitet, schauen wir im kostenlosen 15-Minuten-Gespräch, welcher Schritt bei dir zuerst dran ist. Mehr zum Vorgehen auf der Seite [Automation](/de/automation).
