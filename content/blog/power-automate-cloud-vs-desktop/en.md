---
title: "Power Automate cloud vs. desktop: what's the difference?"
description: Power Automate comes as cloud flows and desktop flows. What separates the two, when to use which and how they work together.
slug: power-automate-cloud-vs-desktop
date: 2026-11-11
cluster: automation
---

If you work in the Microsoft world, you'll quickly come across **Power Automate** when it comes to automation. And then the first confusion: there are **cloud flows** and **desktop flows** (the app for the latter is called Power Automate for desktop). Both are called Power Automate – but they work in fundamentally different ways.

## The short version

| | Cloud flow | Desktop flow |
|---|---|---|
| How it works | connects services through interfaces (connectors) | operates programs through the user interface, like a human |
| Where it runs | in the Microsoft cloud | on a Windows machine |
| Typical tasks | email, Teams, SharePoint, Excel Online, approvals | legacy systems, desktop programs, websites without an API |
| Stability | high – interfaces rarely change | more fragile – any change to the interface can break it |
| Technology | API automation | RPA (robotic process automation) |

## Cloud flows: automation through interfaces

A cloud flow starts with a **trigger** – a new email, a new file in SharePoint, a schedule or a button – and then works through a series of steps. To do that it uses **connectors**: ready-made connections to services like Outlook, Teams, SharePoint, Excel, as well as many tools outside Microsoft.

Typical examples:

- Automatically save email attachments to SharePoint
- Collect approvals for leave or purchases via Teams
- Transfer form entries to a list and notify the team

Cloud flows are fast, stable and run around the clock, without any machine needing to be switched on.

## Desktop flows: automation through the user interface

Not every program has an interface. Older line-of-business applications, ERP systems or industry software in particular can often only be operated through their user interface. That's where **desktop flows** come in: they record clicks and inputs and replay them – filling in fields, clicking buttons, copying data.

This is called **RPA** (robotic process automation). It's a bridge to systems that otherwise couldn't be automated at all. The price: when the interface changes – a button moves, a window gets renamed – the flow has to be adjusted. More on this in the article [RPA or API automation?](/en/blog/rpa-vs-api-automation)

There are two modes:

- **Attended:** the flow runs on the machine of a signed-in person, often started by them.
- **Unattended:** the flow runs without anyone signed in, on a dedicated machine or virtual machine.

## Both together: the most common case in practice

Power Automate's strength lies in the combination. A cloud flow handles everything that works through interfaces and only calls a desktop flow for the one step without an interface:

[[figure:pa-hybrid]]

The invoice arrives by email and the cloud flow reads it. The old accounting program has no interface – so a desktop flow enters the data there. Afterwards, the cloud flow notifies the team in Teams.

## What about licensing?

Microsoft's licensing model changes regularly, so only the basics:

- Cloud flows with **standard connectors** are already included in many Microsoft 365 licences.
- **Premium connectors** and desktop flows triggered from the cloud require a Power Automate Premium licence.
- **Unattended** desktop flows additionally require their own licence per bot or machine.
- Power Automate for desktop itself can be installed on Windows for free – for simple, manually started automations on your own machine.

Check the current state with Microsoft before a project – or get advice before buying licences you don't actually need.

## My recommendation

1. **Interface first.** If there's a connector or an API, use a cloud flow. It's more stable and cheaper to run.
2. **Desktop flow as a bridge.** Only for the steps where there really is no interface.
3. **Understand the process first.** If you write down how the process runs beforehand – for example with [BPMN](/en/blog/bpmn-explained-simply) – you immediately see which steps work through interfaces and where a bridge is needed.

You work with Microsoft 365 and want to know what can be automated? That's exactly what we clarify in the [automation pilot](/en/automation). And if your team should build with Power Automate themselves: that's part of my [AI coaching](/en/ki-coaching).
