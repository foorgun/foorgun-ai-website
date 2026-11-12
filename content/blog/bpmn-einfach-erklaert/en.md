---
title: "BPMN explained simply: the 5 elements you actually need"
description: BPMN has over a hundred symbols – most processes need five. A plain-language introduction, plus the difference between BPMN and EPC.
slug: bpmn-explained-simply
date: 2026-11-11
cluster: prozessmanagement
---

**BPMN** stands for *Business Process Model and Notation*. It's a standardised way of writing down processes as diagrams – so that business teams, management and IT can all read them.

The standard (currently BPMN 2.0) is maintained by the Object Management Group and is also published as an ISO standard. That sounds heavy. It isn't, as long as you stick to the essentials.

## The 5 elements you actually need

A picture exposes gaps that text hides. You don't need the whole standard: five elements – events, tasks, gateways, sequence flows, and pools and lanes – cover almost everything you'll draw.

[[figure:bpmn-legend]]

Read a diagram from left to right. A process usually has one start event, at least one end, and every task sits in the lane of whoever does it. If a step doesn't fit into any lane, nobody owns it yet.

Every arrow that changes lanes is a handover – and handovers are where things most often get stuck:

[[figure:bpmn-lanes]]

## An example

A typical process from enquiry to quote:

1. **Start:** Enquiry arrives by email
2. **Task:** Read enquiry and add it to the CRM
3. **Gateway:** Complete?
   - no → ask for missing info, then back to step 2
   - yes → continue
4. **Task:** Review and approve quote
5. **Task:** Send quote
6. **End:** Quote is out

As a BPMN diagram it looks like this. The steps marked in orange can run automatically:

[[figure:bpmn-example]]

Once the process is written down like this, you can immediately see which steps can be automated – and which should deliberately stay with the team.

## Common mistakes

- **Too much at once:** nobody reads a diagram that doesn't fit on one page. Split it into sub-processes instead.
- **To-be instead of as-is:** first write down how it *really* runs today. The ideal comes afterwards.
- **Without the people involved:** whoever runs the process every day knows the exceptions. Without them, half is missing.

## BPMN or EPC?

In German-speaking countries you'll often come across **EPC** (event-driven process chain, German "EPK"). It was developed in the early 1990s at Saarland University in the context of ARIS and became widely known through SAP projects.

An EPC also gets by with just a few elements:

[[figure:epk-legend]]

The key rule: events and functions always alternate. Every function is triggered by an event and ends in an event. Our example as an EPC looks like this:

[[figure:epk-example]]

| | BPMN | EPC |
|---|---|---|
| Adoption | international standard | mainly German-speaking countries, SAP world |
| Core idea | tasks, events, gateways | alternating event – function – event |
| Strength | easy to read, direct basis for automation | widespread in existing documentation |

My recommendation: for new projects, especially if you want to automate later, use **BPMN**. If your company already documents in EPC, stick with it – what matters is that it's written down at all.

## In short

- Five elements – event, task, gateway, arrow, lane – describe most processes.
- Map the as-is process first, with the people who run it.
- A clean diagram is the best basis for deciding what can be [automated](/en/automation).
