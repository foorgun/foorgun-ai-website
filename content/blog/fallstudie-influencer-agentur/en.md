---
title: "Case study: how an influencer agency processes 50,000+ applications in four months"
description: An international influencer agency ran creator applications, campaign setup, shipping and post tracking by hand. What we automated, what deliberately stays with the team, and what it achieved.
slug: case-study-influencer-agency
date: 2026-11-20
cluster: automation
---

**In short:** An international influencer agency ran its campaigns through spreadsheets, forms, email and a team of freelancers. Today, 7 of 9 steps from creator application to published post run automatically. Choosing the creators stays with the team. In the first four months after launch, the system processed **more than 50,000 applications**.

I'm leaving out the names of the agency and its clients. The numbers come from the live system.

## The starting point

The agency connects brands with creators: creators apply for a campaign, the team picks suitable profiles, the client approves the list, products are shipped, and finally someone checks whether the post actually went live.

Before the project, it looked like this:

- **800 to 1,200 creators per month**, all handled by hand.
- **Data in many places:** spreadsheets, forms, a newsletter tool, a database, chat. There was no reliable overall view.
- **A remote team of more than seven freelancers** reviewed applications, maintained lists, copied tracking numbers and checked posts. Lots of coordination, uneven quality.
- **Metrics came late**, because they had to be pulled together first.

The problem wasn't one single step. It was the sum of many small handovers where someone had to copy, check or chase something every time. And every new campaign added more.

## The approach

**Understand first.** It started with an on-site meeting with the management. We walked through the entire process: who does what, where the data lives, where things get stuck. The result was a process map everyone could agree on.

**Then deliberately not everything at once.** I proposed three levels: data foundation and integrations only, a semi-automated solution, or full automation including automatic shortlisting. In a scoping workshop we chose the middle level. It delivers most of the relief without the agency handing over control of the selection right away.

**Then build, in short steps.** First the central database, then one workflow after another, each tested with the team before the next one started.

## What was built

A central database with ten linked tables that all tools connect to, plus these workflows:

| Step | Before | After |
|---|---|---|
| Application comes in | form answers copied into lists by hand | captured automatically, duplicates removed, profile enriched with metrics, matched to suitable campaigns |
| Selection | team reviews everything | **stays with the team**, but on a clean, pre-sorted list |
| List for the client | copying spreadsheets together | approved creators land in the client's review list automatically |
| Set up campaign in the tracking tool | manual, linking creators one by one | one click |
| Brief to creators | writing emails one by one | one click, a personalised brief is sent |
| Check whether the post is live | looking through profiles one by one | automatic daily check, status updated |
| Follow-up | when someone remembers | up to five automatic reminders if no post is detected by the deadline |

On top of that there's an interface where the team reviews applications and sees the current status. Mid-project, the agency asked to also capture and enrich general applications not tied to a specific campaign. I built that without a change request.

**What deliberately stays manual:** deciding which creators fit a brand. That's where the agency's experience lies, and that's where its team should spend its time.

## The results

**After the first three campaigns:**

- around **3,200 applications** processed through the new system
- **7 of 9 process steps** run automatically
- an estimated **200+ hours of manual work saved** (assumption: 5 minutes per application, 80% of it automated)

**After four months in operation:**

- **more than 50,000 applications** processed. Monthly volume grew from around 9,900 to 18,700 over that period.
- around **1,700 published posts** detected and tracked automatically
- roughly **a quarter of applicants** fit at least one active campaign. The team no longer has to go through the other three quarters one by one to find that out.

What started as an automation project is now a fixed part of daily operations. After launch, the project moved into a monthly retainer: monitoring, bug fixes and small improvements to keep operations stable.

## What came next – and what didn't

As volume grew, so did the database. At some point the tool everything ran on hit its limits, and the next plan would have cost significantly more per user. So I calculated and proposed a move to an own platform: own database, own interface, lower ongoing licence costs.

The agency decided not to take that step for now. That's a legitimate decision: the existing system works, and a migration is a project with its own risk. For me, part of the job is putting the numbers openly on the table and leaving the decision with the client.

## What other agencies can take from this

1. **Start with the process, not the tool.** Only once the whole path from application to post was on one page was it clear where time was really being lost.
2. **Keep the decision with the team, not the busywork.** Everything around the selection was automated, not the selection itself.
3. **Start at the middle level.** Most of the relief came from the simple workflows. Automatic shortlisting can be added later, once the data is clean.
4. **Measure from day one.** Because every workflow is logged, the results above can be shown rather than estimated.
5. **Plan for growth.** Tools that charge per user or per record get more expensive as you succeed. Know that before you build on them.

Which workflows usually pay off first in agencies is covered in [7 processes every marketing agency should automate](/blog/seven-agency-processes-to-automate). What a similar flow looks like when new clients start is described in [Automating client onboarding](/blog/client-onboarding-automation), and what it costs in [What does custom automation cost a small business?](/blog/automation-cost-small-business)

If your agency works in a similar way, we'll look at which step comes first for you in a free 15-minute call. More on the approach on the [Automation](/automation) page.
