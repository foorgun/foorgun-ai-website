---
title: "Claude Code and Codex for non-developers: your first internal tool"
description: With AI coding agents like Claude Code and Codex, people without programming skills can build small internal tools. How to get started sensibly – and where the limits are.
slug: claude-code-for-non-developers
date: 2026-11-11
cluster: ki-coaching
---

A few years ago, an internal tool – a small web app, a form with a database, a report – needed a developer team or an agency. Today, **AI coding agents** can take over a large part of that work.

The two best known: **Claude Code** by Anthropic and **Codex** by OpenAI. Both don't just write individual lines of code; they work on entire projects: they create files, run commands, test and correct themselves.

## What these tools are – and what they aren't

Claude Code and Codex are **agents**: you describe in plain language what should be built, and they implement it step by step. They run in the terminal, in development environments like VS Code or in their own apps. For both you need a suitable subscription or API access with the respective provider.

What they **aren't**: a substitute for understanding. If you don't know what you actually want to build, you'll very quickly get a lot of code that solves the wrong problem.

## Good first projects

Start with something small, internal and manageable:

- **An overview page** for data that currently lives in several spreadsheets
- **An internal form** that cleanly saves entries to a table or database
- **A small script** that renames, merges or analyses recurring files
- **A simple website** or landing page

Bad first projects: anything involving payments, sensitive HR data or customer logins. Those need experience with security and data protection.

## How to go about it

1. **Describe the process, not the technology.** "Our sales team enters enquiries into three lists; I want one page that shows all enquiries and lets you change their status." That's a better start than "Build me a React app".
2. **Start small.** Let the agent build the simplest version first. Only once it works, add the next feature.
3. **Review every step.** The agents ask before they run something. Read what they're about to do – especially when it comes to deleting or installing things.
4. **Save versions.** With Git (or at least copies) you can always go back to a working state.
5. **Test with real cases.** Does the tool also handle the edge cases from your daily work?

## Claude Code or Codex?

Both are strong and evolving quickly. In practice, the decision often comes down to which AI subscription you already use and which interface you're more comfortable with. More important than the choice of tool is **how** you work with it: clear tasks, small steps, always test.

## Where the limits are

- **Security:** as soon as a tool is reachable from the internet or handles sensitive data, someone with experience should review it.
- **Maintenance:** a self-built tool also needs looking after. Clarify upfront who takes care of it.
- **Complexity:** beyond a certain size – multiple user roles, many integrations – a clean architecture from the start pays off.

## Learn instead of just trying

That's exactly part of my [AI coaching](/ki-coaching): using Claude Code and Codex properly, on a real first project from your daily work. If you'd rather have a finished system straight away, take a look at [custom internal software](/software).
