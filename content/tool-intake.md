# Tool intake

Answers here are the raw material for tool pages in `src/lib/os.ts` (metadata) and
`src/lib/tools-content.ts` (page body). Ben fills in a tool's seven questions (bullet
points or voice-memo transcript both fine — rough beats polished); an LLM session then
drafts the tool to the format spec in `AGENTS.md` ("Adding OS tools" section).

**Ground rules for whoever drafts from this:**

- Questions 1, 3 and 4 are non-negotiable. If they're empty, don't draft — leave the
  tool without page content or mark it draft in `os.ts`.
- Anonymize everything per the Granola rules in `AGENTS.md`: composite scenarios,
  changed sectors/stages/numbers, no identifiable clients.
- Capture the majority of what Ben says; paraphrase for tightness but don't cut large
  chunks or lose distinctive phrasings.
- Mark crafted composites explicitly (e.g. "(No verbatim example captured yet)") so they
  can be replaced later.
- Park open questions and side-decisions at the bottom of each tool section.

## The seven questions

1. **What is it — one line?**
   Becomes `description` in `os.ts`. Standalone sentence clear enough for a future MCP
   or tool registry without page context.
2. **When do you reach for it / what's broken?**
   Becomes `intro` plus the opening paragraph in `tools-content.ts` — the moment a
   founder would pull this off the shelf.
3. **How do you run it, step by step?**
   Becomes a `steps` or `list` block. Include examples or prompts where Ben gives them.
4. **The one insight or POV that makes it yours?**
   Becomes a `callout` — the line that separates this from generic advice.
5. **Is there a picture in your head?**
   Diagram sketch, Miro reference, or layout notes. If yes, plan a definition in
   `src/lib/diagram/definitions/` and a registry entry; link via `diagramId` on the tool
   and/or a `diagram` block in `tools-content.ts`.
6. **Whose framework is this?**
   Original owner/source for `accreditation` in `src/lib/accreditation.ts`, or
   "Outstride original". If a diagram represents the same framework, credit it on the
   diagram definition too.
7. **Which capabilities does it serve / related tools?**
   Becomes `capabilityIds` and `relatedToolIds` in `os.ts`, plus optional
   `capabilityRefs` / `toolRef` blocks at the bottom of the page.

---

## Tools (add sections as you capture them)

### Example template (`tool-id-here`)

_(Captured from Ben's chat notes, YYYY-MM-DD.)_

1.
2.
3.
4.
5.
6.
7.

**Open questions:**

-

### Development Pipeline (`development-pipeline`) — NEW

_(Captured from Ben's voice memo, 2026-07-03. Ben asked for this explicitly: "search for that
and let's build it into a tool.")_

1. A diagnostic for where someone's development is actually stuck — insight, motivation,
   capabilities, real-world practice or accountability — so you invest effort at the
   constriction instead of defaulting to training.
2. When an employee needs to improve and generic feedback isn't moving them; when you're about
   to prescribe a course or a book but suspect the real blockage is elsewhere. Ben: "a lot of
   the time it's the motivation and the insight piece."
3. Walk the five conditions in order and ask where the pipe narrows:
   - **Insight** — do they know they need to improve?
   - **Motivation** — are they willing to improve? Are they prioritising it?
   - **Capabilities** — do they have the knowledge and skills?
   - **Real-world practice** — are they getting reps at work?
   - **Accountability** — what holds them to it?
   If it's insight/motivation, coax with questions rather than telling: "What is the number one
   thing you want to improve right now?" · "Have you thought about this?" · "What happens if
   nothing changes?" Then coach the gap and get them excited: "Where do you see yourself in
   this company? What do you think the main gap is between now and there?"
4. This is the **happy path** of performance improvement — the Accountability Dial is the
   unhappy path. Most managers throw skills training at what is actually an insight or
   motivation blockage.
5. A pipeline with five segments; the narrowest segment is the constraint. Candidate: `flow`
   diagram (or a horizontal pipe with a pinch point).
6. David B. Peterson & Mary Dee Hicks (Personnel Decisions International), *Leader as Coach*
   (1996) — the Development Pipeline. Dave Bailey has a founder-facing write-up
   (https://www.dave-bailey.com/blog/development-pipeline); Ben already credits Bailey on
   7 Core Founder Needs, so consider a "via" note.
7. Capabilities: give-feedback-and-hold-the-standard, build-leaders-not-dependencies. Related:
   accountability-dial (explicitly its twin), coaching-questions, kss-feedback.

### Premortem (`premortem`) — NEW, neutral tool

_(Captured from Ben's voice memo, 2026-07-03. Ben: "let's create the premortem as a neutral
tool that we use in many things, not just people.")_

1. Before committing — a hire, a strategy, a launch — imagine it has already failed, list how
   it went wrong ranked by likelihood, and mitigate the top risks while it's still cheap.
2. A new hire about to start; a big strategic bet; any decision where optimism is quietly
   doing the risk assessment.
3. Assume failure ("It's a year from now and this went wrong — how?"); brainstorm the failure
   modes; rank by likelihood (optionally add magnitude); pick the top 2–3 and design
   mitigations or early-warning signals. Hiring example from Ben: "Ali wasn't able to turn his
   network into leads" / "Ali's lack of people-management experience meant the team
   malfunctioned" — ranked, then watched for.
4. Everyone premortems projects; almost nobody premortems a hire. Ben does it with (sometimes
   alongside) the new hire's manager as part of onboarding design.
5. Possibly shares a canvas with the Opportunity & Threat Map (below) — open question.
6. Gary Klein — "Performing a Project Premortem", HBR 2007.
7. Capabilities: raise-the-talent-bar, chart-the-path, make-the-right-calls. Related:
   performance-culture-grid, opportunity-threat map, thirty-sixty-ninety.

### Opportunity & Threat Map (magnitude × likelihood) — NEW

_(Captured from Ben's voice memo, 2026-07-03.)_

1. Plot opportunities and threats on a magnitude × likelihood grid so strategy conversations
   rank what could help or hurt, instead of treating every risk and idea as equal.
2. Strategy sessions, quarterly planning, board prep — or as the canvas a premortem's output
   lands on.
3. Brainstorm opportunities and threats separately; score each for magnitude and likelihood;
   plot both on one grid (two colours); act on the high-magnitude / high-likelihood corner
   first.
4. One canvas for both sides: threats and opportunities deserve the same rigour, and seeing
   them together forces trade-off conversations.
5. `grid` diagram — magnitude × likelihood, pastel palette, opportunities vs threats as two
   series.
6. Outstride original (generic risk-matrix ancestry — no single owner to credit).
7. Capabilities: chart-the-path, make-the-right-calls, raise-the-talent-bar. Related:
   premortem, seven-powers, strategy-one-pager.

**Resolved (Ben, 2026-07-03):** two tools, cross-linked as related — built as `premortem`
and `opportunity-threat-map`.

### 30-60-90 Plan (`thirty-sixty-ninety`) — NEW, thin for now

_(Captured from Ben's voice memo, 2026-07-03. Ben's caveat: "a little bit of a start — maybe
we expand later or weave it into the content.")_

1. A written plan for a new hire's first 30/60/90 days with transparent evaluation checkpoints
   from day one.
2. Every meaningful hire — expectations explicit early, evaluated openly and kindly.
3. (Thin.) Key points captured: be very transparent about evaluations early on; use the
   Performance × Culture Grid at checkpoints, and a low score early is OK — they're new; what
   matters is trajectory. Pair with the premortem's watch-list.
4. Transparency about early evaluation as kindness, not surveillance.
5. (None yet.)
6. Widely used practice; Michael Watkins' *The First 90 Days* is the obvious anchor — confirm
   before crediting.
7. Capabilities: raise-the-talent-bar. Related: performance-culture-grid, premortem.

**Resolved (Ben, 2026-07-03):** added to `os.ts` as a metadata-only draft
(`thirty-sixty-ninety`); page content waits for Ben's own 30-60-90 structure.

**Update (Ben, 2026-07-05):** Ben asked to "build this out w. examples" — page drafted
from the thin capture above. The learn → contribute → own phase framing and the worked
example (first marketing lead at a Series A B2B SaaS) are **crafted composites**, not
Ben's own structure or a real engagement — replace when Ben supplies his version. Kept
verbatim from the capture: transparency about evaluations early on; Performance × Culture
Grid at checkpoints; low score early is OK — trajectory matters; pair with the
premortem's watch-list. Accreditation confirmed 2026-07-05 (was an open item in
`content/review-2026-07.md`): the 30-60-90 framing is popularised by Michael Watkins,
*The First 90 Days* (2003) — credited as Outstride adaptation. `senior-hire-process`
added to related tools (link was one-way before).

### Crossing the Line — placement TBD

_(Captured from Ben's voice memo, 2026-07-03.)_

The model: my intention is accessible to me; my speech and behaviour are accessible to both of
us; your reaction is only accessible to you. "Don't cross the line" = don't assume my
intention, and I don't assume your reaction. Story: the first-time manager at her report's
desk every day (intention: maximum support; received as: "she doesn't trust me, she's
micromanaging me"). Origin/accreditation to check.

**Resolved (Ben, 2026-07-03):** both — built as standalone tool `crossing-the-line`
(reusing the intention→action→reaction flow diagram, retitled and re-credited "Outstride
adaptation — original source unverified"), and to be embedded on the conflict capability
page when it gets drafted.

### Enrichments to existing tools (from the 2026-07-03 voice memo)

- **accountability-dial** — add Ben's timeline move: attach the dial to a quantified bar and a
  date. "Ben's ability to review pull requests is currently at a five. I need him at a seven
  by the end of the month; if not, I move to the next step on the dial (e.g. the boundary)."
  Also name it explicitly as the unhappy path twin of the Development Pipeline, and note the
  founder failure it exists to prevent: one vague mention, months of silence, then firing.
- **kss-feedback** — add the session ritual: regular cadence with the key people in your orbit
  (cofounders, direct reports), both sides show up with a brief doc prepared, ~50 minutes
  split bilaterally ("your KSSs, then mine"). Purpose: normalise feedback so it stops being a
  dirty word, and make assumptions explicit.
- **sbi-feedback** — Ben confirms the model (his shorthand "SPI" = Situation, Behaviour,
  Impact); his Martha example is captured in capability intake. Anti-pattern to include:
  "you always do this" → "no I don't" defensiveness.
- **leadership-hats** — RESOLVED (Ben, 2026-07-03): trimmed to Ben's four hats
  (coach / mentor / empower / manager) with when-to-wear guidance and the self-check line
  "Which manager hat am I wearing right now?"
- **relationship-design-canvas / relationship-one-pager** — add: the conflict protocol row
  (magic word → stop → whiteboard session within 24h); decision rights incl. the salary rule
  (all salary/personal decisions in the management group); meeting cadence (monthly strategy
  offsite + check-in + social dinner); do's/don'ts (no feedback over Slack; praise public,
  critique in person); the needs exchange ("what do you need from me / what do I need from
  you") with be/do lists.
- **coaching-questions** — add the Development Pipeline coax set: "What's the number one thing
  you want to improve right now?" · "Have you thought about this?" · "What happens if nothing
  changes?" · "Where do you see yourself in this company — and what's the main gap?"
- **delegation-ladder / delegation-timeline** — add: the quarterly prompt ("What are you doing
  today that you shouldn't be doing at the end of the quarter?"); delegate-don't-abdicate
  support notes (check-ins, review first iterations); aligning delegation with the person's
  growth edge ("people management" → "you lead the weekly product check-ins" — works like
  magic); delegation as investment (not faster tomorrow, faster in a month or two).
- **non-violent-communication** — already built; Ben's framing to keep: use when emotions are
  really tight, very low chance of triggering the other person. Consider cross-linking
  Crossing the Line.

### CTO hiring example (anonymized) — placement TBD

_(Source: Ben's real CTO hiring process; company renamed and stats changed per Ben's request,
2026-07-03. Resolved same day: built as standalone tool `senior-hire-process`, linked to the
new capability `hire-and-onboard-the-right-people`.)_

**Interview process:**

| Phase | Time | Purpose | Who |
| --- | --- | --- | --- |
| Phase 0 | — | Screening | Head of HR |
| Phase 1 | 30 mins | Leadership angle | CEO |
| Phase 2 | 30 mins | Product angle | CPO |
| | 30 mins | Engineering angle | VP Engineering |
| Phase 3 | 1.5h | Presentation of CTO task + questions | C-level |
| | Lunch | Cultural evaluation | Team leads |
| | 45 mins | External check | External tech advisor |
| | 30 mins | VC check | Investor |

**The task (anonymized from the original doc):**

> **CTO Task**
>
> This is a task to be completed by candidates for the CTO position at Finlark (name changed)
> as part of the interview process.
>
> **Format**
> - 1.5h total for presentation + Q&A. Presentation should take roughly half that time.
> - You will be presenting to the Finlark C-level.
>
> **Task:** Define a strategy to scale Finlark's tech in the next two years.
>
> **Context**
>
> *Org*
> - ~90 FTEs, of which 24 in the Engineering chapter and 5 in DevOps
> - Currently using the Spotify squad & chapter model
> - Headquartered in Europe, but open to creating tech hubs abroad
>
> *Business*
> - We expect to grow rapidly in the next two years, from the ~80k opened accounts we have
>   today to ~600k within two years.
> - We need to ship several major financial products this year (e.g. ETFs, mobile wallet
>   payments) to position ourselves as a mainstream offering.
> - We have several issues around quality — production bugs and tech debt — as a result of
>   pushing too fast in the past.
> - Assume for this exercise that we will migrate away from our white-label banking API
>   provider to our own bank within the next two years.
>
> *Tech*
> - Tech stack: TypeScript, React, React Native, GraphQL, Node, plus document and relational
>   databases; everything hosted on a major cloud provider.
> - The current tech team is ~30, split across the Engineering and Security & Infrastructure
>   chapters.
>
> **You should include**
> - Organisation structure
> - Engineering culture & best practices
> - Architecture
> - Make vs. buy, vendor choices
> - Collaboration with Product (needs / requirements, etc.)
> - In-house vs. near-shore vs. external scaling options
> - Short-term scaling
> - Cross-departmental working approach
> - Recruiting strategy and employer branding
> - Plus whatever you think is important

### Chapters & Squads (`chapters-and-squads`) — NEW

_(Captured from Ben's voice memo, 2026-07-04. "My favourite way of scaling a company,
especially in the product and tech department.")_

1. Cross-functional squads that own one slice of the user journey, with chapters keeping
   each craft consistent across squads.
2. When the product org is scaling past one team and coordination starts eating delivery —
   around 40 people at Ben's startup; explicitly not too early.
3. Squad composition example: 3 engineers, 1 product manager, 1 designer, 1 business
   analyst — owning one part of the user journey. Ben's startup (crypto neobank): banking &
   cards / crypto trading / onboarding & growth. Growth pattern: start with one big squad;
   above ~7 people, split it like a cell (mitosis — Ben said meiosis and asked; mitosis is
   the right word) — partially split for a while, then fully; keep evolving teams over time.
4. Squads own journeys, not features; chapters stop the crafts drifting apart. Don't
   squadify too early.
5. Yes — the classic squads (columns) × chapters (rows) matrix. Grid diagram.
6. Henrik Kniberg & Anders Ivarsson, "Scaling Agile @ Spotify" (2012) — accredit; Outstride
   adaptation.
7. design-the-org. Related: team-traffic-lighting, ownership-map, okrs.

### Team Traffic Lighting (`team-traffic-lighting`) — NEW

_(Captured from Ben's voice memo, 2026-07-04. Ben: "let's build this out into a new tool
called team traffic lighting and reference it.")_

1. Rate every team green, amber or red on delivery, self-improvement and ability to scale —
   so org attention goes where the org is actually blocked.
2. Org reviews, quarterly planning, and deciding where the founder dives in next.
3. Ben's definitions, close to verbatim:
   - **Green** — excelling: getting stuff done, self-improving, has the ability to scale
     itself for the next period.
   - **Amber** — able to deliver on some things but not reliably; team is not
     self-improving; unsure about ability to scale for the next period.
   - **Red** — failing: wasting a lot of time, not getting things done, perhaps infighting.
4. This rates the TEAM, not its goals — pair with OKRs ("I love OKRs plus traffic
   lighting") where the goals get their own RAG. The founder is the roving repair crew:
   dive into red, force → form → flow, leave when it runs without you.
5. Maybe a simple 3-band visual; a table probably carries it. No diagram needed initially.
6. Outstride original.
7. design-the-org, make-ownership-stick, install-the-operating-rhythm. Related:
   chapters-and-squads, okrs, company-health-scorecard.


### Stakeholder Map (`stakeholder-map`) — NEW

_(Captured from Ben's whiteboard screenshots, 2026-07-04. "First it's a mapping of key
stakeholders + scoring them each. You can include e.g. your co-founder and also your direct
reports." All names on the original board stripped; roles and numbers changed.)_

1. Map the people the company most depends on — cofounder, direct reports, board — and give
   each two scores: how the relationship is working, and how confident you are in their
   performance. The gaps tell you where to invest next.
2. Quarterly reviews, or whenever the founder feels people-risk but can't name where it sits.
3. From the board: "You" sticky in the middle; cofounder to the side, direct reports below;
   one score written on the arrow to each person, a second score written under their sticky.
   One report carried a goat emoji (GOAT). One person scored high on the arrow but very low
   under the sticky — that same person was the subject of the Performance × Culture deep-dive
   board captured the same day.
4. Two scores, not one: a warm relationship score sitting on top of a very low performance
   score is the signature of a hard conversation being avoided.
5. Yes — sticky-note org-map: You (teal) with arrows to cofounder and reports (blue), two
   scores per person. Grid diagram built as `stakeholder-map`.
6. Outstride original.
7. build-incredible-relationships, manage-capital-and-stakeholders. Related:
   relationship-design-canvas, performance-culture-grid, one-to-one-structure, kss-feedback.

**Open questions:**

- Exact meaning of the two scores is inferred from the board (arrow = relationship quality,
  under-sticky = performance confidence). Confirm with Ben; the drafted page uses this
  reading.
- Should board members / investors get both scores or relationship-only?

### Company 7 (`company-7`) — NEW

_(Captured from Ben's whiteboard screenshots, 2026-07-04. The company-layer sibling of
Human 9.)_

1. A ten-minute company diagnostic: score seven areas 0–10 — business growth, strategy,
   fundraising / runway, culture, hiring & org structure, founder / C-level performance,
   management's performance — to find where to look next.
2. Coaching check-ins, monthly reviews, quarterly planning; whenever "how's the company?"
   gets a vague answer.
3. Seven yellow stickies (verbatim from the board): Business growth · Strategy ·
   Fundraising / Runway · Culture · Hiring & Org structure · Founder / C-level Performance ·
   Management's Performance. Score each 0–10, then go deep on the lowest one or two.
4. Founder and management performance are scored like everything else — most founders will
   happily score everything except themselves.
5. Yes — the sticky board itself. Grid diagram built as `company-7`, matching the Human 9
   Miro style.
6. Outstride original.
7. Maps area-by-area to: chart-the-path (growth), map-the-destination (strategy),
   find-new-capital (fundraising/runway), build-a-culture-that-compounds (culture),
   design-the-org (hiring & org), take-command-of-my-role (founder performance),
   build-leaders-not-dependencies (management performance). Related:
   company-health-scorecard (the deeper version), human-9, team-traffic-lighting.

### The 10-Minute Retro (`ten-minute-retro`) — NEW

_(Captured from Ben's whiteboard screenshots, 2026-07-04. "The 10 minute retro (3 wins,
3 lowlights, 3 learnings)." The example board was Ben's own Q2 retro; one personal lowlight
replaced with a composite, the rest kept close to verbatim.)_

1. A ten-minute quarterly reflection — three wins, three lowlights, three learnings — that
   turns the quarter into rules you actually act on.
2. End of every quarter (works monthly too); solo, with a coach, or with a cofounder.
3. Nine stickies, ten minutes: 3 wins (personal counts as much as company — "starting somatic
   therapy" sat next to "we hit revenue"), 3 lowlights (name them, don't fix them yet),
   3 learnings written as rules. Learnings from the source board, kept near-verbatim:
   "Hard conversations don't fix themselves" · "Short term pain preferable to long term
   suffering — the choice is mine" · "Some things are harder to do than say / startup
   culture."
4. The learnings are the product; wins and lowlights are just the evidence. And ten minutes
   is the point — the retro you actually run beats the perfect one you skip.
5. Yes — 3×3 sticky board (wins blue, lowlights orange, learnings green). Grid diagram built
   as `ten-minute-retro` with a composite example.
6. Outstride original — a founder-sized cut of the classic team retrospective.
7. build-my-growth-system, install-the-operating-rhythm. Related: quarterly-retro, human-9,
   kss-feedback.

**Anonymization note:** the original board's lowlight referencing a family member's health
("# Isy deregulations") was replaced with a composite ("sleep and training fell apart").

### Notes from the 2026-07-04 whiteboard batch (existing tools)

- **human-9** — Ben's real scored board captured (Relationships 7+/2/5+, Health 3+/7,
  Lifestyle 2/8, Money ?/?). Matches the existing tool and `human-9-miro` diagram; no site
  changes needed. Real scores intentionally NOT carried onto the site.
- **performance-culture-grid** — worked-usage board captured: one person plotted mid-culture /
  low-performance, with 3 culture criteria (hunger 6.5, proactive 4, reliable 5) and 3
  performance outcomes (get calls — 3/10, excel at conferences — ?, help a teammate close —
  6/10). Enrichment shipped: anonymized worked example added to the tool page, including the
  insight that a "?" score means you lack evidence — collect it, don't guess. Named
  individuals stripped.

### Human-tools batch (2026-07-04) — Parts Work, Personal Manual, Vision Board, Personal Playbook, Personal Board + kills

_(Captured from Ben's chat notes, 2026-07-04. Ben: "we need to build out these tools. you can
look for the context in the linked capabilities. feel free to fill out if too short." Raw dump
kept close to verbatim below; drafting decisions noted after each.)_

#### Parts Work / Sub-Personas (`parts-work`) — combine with Protector Voices

Raw: "idea is to give names and space to all your parts e.g. 'self-critical ben' 'ambitious
ben' 'vacation ben'. give them all time and space to express what they want but understand
that you're in charge. undersatnd that even the parts of yourself that you don't like still
want the best for you, but that they might have learend some behaviour that was useful in the
past, but no no longer."

1. Give each of your inner parts a name and a seat — the self-critic, the striver, the
   protector — hear what each wants for you, and stay in charge of the final call.
2. When the same inner voices keep hijacking you and you can't tell them apart; pairs with
   the Saboteurs Quiz output.
3. Name the parts ("self-critical Ben", "ambitious Ben", "vacation Ben") → give each time and
   space to say what it wants → remember you're in charge → understand that even disliked
   parts want the best for you; they learned a behaviour that was useful once but no longer.
4. Even the parts you don't like are on your side — they're running an old protection script.
   You don't exile them; you thank them and keep the chair at the head of the table.
5. No new diagram.
6. Richard C. Schwartz — Internal Family Systems / No Bad Parts (accreditation carried over
   from `council-of-me`).
7. face-my-shadow. Related: saboteurs-quiz, strength-in-shadow, super-self, habit-stacks.

**Drafting decision:** built by renaming/absorbing `council-of-me` (same IFS territory,
content merged) since Ben killed the Council framing ("Council Exercise - kill"). Old slug
`/os/tools/council-of-me/` no longer exists.

#### Personal Manual (`personal-manual`) — "My Equilibriums"

Raw: "My Equilibriums — understand what good-good and bad-bad looks like. undersatnd what
triggers cause us to go from good to bad adn what recovery methods from bad to good."

1. A written manual of how you work: what good-good and bad-bad look like, the triggers that
   tip you from good to bad, and the recovery methods that bring you back.
2. Drafted around the existing Two Equilibria Map (same underlying model) — the manual is the
   written artefact; the map is the picture. Cross-linked rather than merged.
3–7. See drafted page. Outstride original. build-resilience-and-recovery,
   manage-my-energy-system. Related: two-equilibria-map, personal-playbook, energy-audit,
   seven-founder-needs.

#### Vision Board (`vision-board`)

Raw: "creaet a board of how life should look in 5 years from now. you can also do end of the
yeras. Look at human 9 tool for inspiration. Add checking your vision board to your habit
stacks."

1. A visual board of how life should look five years from now (end-of-year versions work
   too), reviewed on a rhythm through your habit stacks.
2. Human 9 domains used as the structure prompt per Ben's note. Habit-stack tie-in is
   explicit — the weekly/monthly stacks already include "Vision board".
6. Widely used visualisation practice — no single owner; noted as adapted for Outstride OS.
7. build-a-life-worth-scaling-for. Related: live-it-today, human-9, habit-stacks,
   anti-wasteman-system.

#### Personal Playbook (`personal-playbook`)

Raw: "you know yourself best of all. you can begin to craft a playbook with things like your
triggers, your rules e.g. if I'm >7 burnout I'll book a vacation. fill out pls."

1. Pre-committed if-then rules for running yourself — "if my burnout score is above 7, I book
   a vacation" — decided while you're well so you don't negotiate with yourself when you're
   not.
2. Ben asked to "fill out" — page drafted beyond the raw dump; rules examples are crafted
   composites extending Ben's one verbatim rule.
6. Outstride original.
7. build-resilience-and-recovery. Related: personal-manual, two-equilibria-map, habit-stacks.
   Supersedes Burnout Playbook + Recovery Anchors (killed below).

#### Personal Board (`personal-board`) — build out existing thin tool

Raw: "create a board of people you know and trust with a wide range of backrounds. call on
them when you need to make big decisions."

Existing tool enriched; content also draws on the build-my-growth-system capability page
(peers / family & friends ingredients). Outstride original.

#### Kills (Ben, 2026-07-04)

- Council Exercise — killed (folded into `parts-work`, see above).
- Cycle Mapping — killed.
- Inner Critic / Saboteur Diagnostic — killed ("we have saboteur test" = `saboteurs-quiz`).
- Burnout Playbook — killed; existing `burnout-playbook` tool removed, superseded by
  `personal-playbook` + `personal-manual`.
- Recovery Anchors — killed; recovery-methods material lives in `personal-manual`.
- The human-tools future-backlog group is now empty and was removed from `futureToolBacklog`.

**Open questions:**

- Personal Manual vs Two Equilibria Map overlap: kept as two cross-linked tools (map =
  picture, manual = written artefact). Merge later if it feels redundant.
- Vision Board format: physical board, Miro, or slide? Page stays format-agnostic for now.

### Human-tools batch 2 (2026-07-05) — Energy Audit + Playbook→Manual fold + Personal Board + Vision Board

_(Captured from Ben's chat notes, 2026-07-05, against a screenshot of the five DRAFT Human
tools: Energy Audit, Personal Board, Personal Manual, Personal Playbook, Vision Board.)_

Raw dump, near-verbatim: "build out these tools · wdyt we should do for energy audit? ·
personal playbook / personal manual can be folder [read: **folded** — merged into one] ·
let's link w. habit stacks & equilibrium tool & calendar audit and then give some good
examples e.g. to perform at my best i need XXX · If my burntout score is above an 7/10 I
should do this · I get my deep work done in the mornings and so I'll push metings to
afternoon · conferences are a trigger for me, so afterards I'm going to xxx"

**Drafting decisions (2026-07-05):**

- **Playbook folded into Personal Manual.** The `personal-playbook` tool (metadata-only,
  never had a page) removed from `os.ts`; its if-then rules idea and the "written while
  you're well so you don't negotiate with yourself when you're not" line live on as the
  rules section of the Personal Manual page. Old slug `/os/tools/personal-playbook/` no
  longer exists.
- **Energy Audit** built as the calendar-colouring diagnostic: colour two weeks of calendar
  green/amber/red by energy *after* each block, then protect greens / cut, delegate or
  redesign reds; findings feed the Personal Manual. Positioned against Calendar Audit:
  calendar audit = does my calendar match my job; energy audit = does my calendar match my
  battery. Accreditation checked 2026-07-05: the red/green calendar energy audit is a
  widely used practice (many sources, incl. engineering-leadership circles); no single
  originator found — noted as widely used, adapted for Outstride OS.
- **Ben's four example lines** used near-verbatim on the manual page; the completions of
  his "XXX" placeholders (which recovery move, what after conferences) are **crafted
  composites** — replace with his real rules when supplied.
- Cross-links wired per instruction: personal-manual ↔ habit-stacks ↔ two-equilibria-map ↔
  calendar-audit ↔ energy-audit (burnout score lives in the daily habit stack; "What might
  trigger me this week?" is already in the Monday stack; the deep-work-mornings rule is
  enforced via the calendar audit).
- **Personal Board** and **Vision Board** pages drafted from the 2026-07-04 raw captures
  above (no new raw material in this dump beyond "build out these tools").

_Follow-up (Ben, 2026-07-05):_ "vision board is pretty standard - I suggest doing a
visualisaiton runnning through the human 9 topics of your life in 5 years, then share
with someone." Page reworked: the guided visualisation through the Human 9 domains is
now step one (reusing Live It Today's drop-into-an-ordinary-day prompts), and "share it
with someone" added as its own step — partner / cofounder / personal-board member, so
one person can hold you to it. `personal-board` added to the page's tool links.

**Open questions:**

- Confirm the "can be folder" reading — if Ben meant a folder/group rather than a merge,
  the playbook is easy to split back out.
- The manual page's recovery completions (spa day / long run after conferences, vacation
  rule specifics) are composites pending Ben's real playbook rules.

### Company Pulse Check (`company-pulse-check`) — replaces `psychological-safety-diagnostic`

_(Captured from Ben's chat note, 2026-07-05, against a screenshot of the Psychological
Safety Diagnostic tool page: "maybe instead of this - a company pulse check e.g. enps.")_

1. A recurring anonymous company-wide survey — eNPS plus a few pulse questions — that
   tracks how people actually feel about working here before problems surface elsewhere.
2. (Not captured.)
3. (Not captured — Ben's cadence, question set and how he acts on the scores needed
   before drafting a page.)
4. (Not captured.)
5. (None yet.)
6. eNPS derives from Fred Reichheld's Net Promoter Score (Bain & Company) — accredited
   on the metadata; confirm exact wording when the page gets drafted.
7. navigate-conflict-and-create-psychological-safety (took the old tool's slot),
   build-a-culture-that-compounds. Related: happiness-check, company-health-scorecard,
   team-traffic-lighting.

**Drafting decisions (2026-07-05):** metadata-only swap — the old
`psychological-safety-diagnostic` shell (never had page content) removed from `os-data.ts`;
old slug `/os/tools/psychological-safety-diagnostic/` no longer exists. New tool stays a
draft until Ben answers Q2–Q4. References updated: five-dysfunctions and blob-tree related
lists, both capabilities' toolIds, happiness-check related list (company-scale sibling of
the 1:1 happiness check). The open accreditation item in `content/review-2026-07.md`
(Amy Edmondson's survey items) is moot now the psych-safety diagnostic is gone.

**Open questions:**

- Ben's actual pulse question set and cadence (monthly? quarterly?) — needed before a page.
- eNPS only, or eNPS + a small rotating question set?
- Does psychological safety still deserve its own measurement tool later, or does the
  pulse check carry it?

### Founder Job Description (`founder-job-description`) — NEW

_(Captured from Ben's voice memo, 2026-07-04. Ben: "the most important tool here is defining
your job description... let's start off with that.")_

1. Writes the founder's job for this stage — zone of genius crossed with what the company
   needs, worked backwards from the next milestone — and rewrites it every six months.
2. When a founder can't tell if they're doing enough; when the calendar is full but the
   important things aren't moving; at every half-year mark.
3. Work backwards from the next funding round (what does the company need / what is your
   role in getting there) → name the four ingredients (fires, risk mitigation, future
   planning, only-you work: investors, executive hires) → find the genius × needs happy
   medium → put target time percentages on each ingredient and audit the calendar against
   them → rewrite every six months.
4. The role is designed like the org: backwards from the milestone. And it expires — give
   away your Legos (credit Molly Graham) because what the company needs keeps changing.
5. No diagram — steps carry it.
6. Outstride original; "give away your Legos" credited in-text to Molly Graham (First Round
   Review). Peacetime/wartime framing (used on the capability page, not this tool) is Ben
   Horowitz. Grove's High Output Management limiting step anchors the altitude block.
7. take-command-of-my-role, know-my-special-ability. Related: ceo-test, calendar-audit,
   zone-of-genius.

### Commitment Loop (`commitment-loop`) — NEW

_(Captured from Ben's chat note, 2026-07-04: "running good meetings where everyone starts off
by saying how the commitments they made went. At the end of the meeting, everyone makes hard
commitments (measurable, time-bound) — building accountability into your systems, such as the
meetings that you run.")_

1. A meeting ritual that opens with how the last commitments went and closes with new hard
   commitments — measurable and time-bound — so accountability lives in the system, not in
   the founder's follow-up.
2. Recurring meetings that produce updates but no movement; any org where follow-up still
   routes through the founder.
3. Open the loop (each person, briefly: what I committed, how it went) → run the meeting →
   close with hard commitments (measurable, time-bound; sharpen vague ones in the room) →
   write them down; they open the next meeting.
4. Accountability built into the room, not chased between rooms — the system remembers so
   the founder doesn't have to.
5. No diagram needed.
6. Outstride original (commitment-review meeting closes are common practice; no single
   owner to credit).
7. make-ownership-stick, install-the-operating-rhythm. Related: operating-cadence,
   five-dysfunctions, okrs.

### 1:1 Structure (`one-to-one-structure`) — content added 2026-07-05

_(Captured from Ben's voice memo, 2026-07-05 — the one-on-ones dump. Ben was unsure where
this content fits; resolved: no new capability — the 1:1 is the venue where the hats,
feedback and development capabilities get delivered; tools carry the material.)_

1. (Existing shell filled.) Structure for one-to-ones built on the coaching mindset.
2. The mindset is the point: "it's just curiosity, it's just listening, it's just pushing
   back that urge to just answer."
3. Their agenda first ("What's on your mind?") → check the person, not just the work
   (Happiness Check on a cadence) → coach before you advise → close with commitments
   (Commitment Loop).
4. The 1:1 leads into so many other things — good questions, listening, the hats.
5. No diagram.
6. Outstride original (structure); the opening question is Bungay Stanier's.
7. know-and-use-the-right-leadership-hat, build-leaders-not-dependencies,
   build-incredible-relationships. Related: coaching-questions, happiness-check,
   commitment-loop.

### Coaching Questions (`coaching-questions`) — content added 2026-07-05

_(Captured from Ben's voice memo, 2026-07-05. Ben: "there's these seven coaching questions
which I think maybe I already have somewhere" — they're Michael Bungay Stanier's, The
Coaching Habit (2016), quoted verbatim by Ben; MUST carry MBS accreditation.)_

1. (Existing shell filled.)
2. Use with the coaching hat: smart people who want to grow — never when something's on fire.
3. The seven essential questions (Bungay Stanier, verbatim from Ben's memo):
   1. What's on your mind?  2. And what else?  3. What's the real challenge here for you?
   4. What do you want?  5. How can I help?
   6. If you're saying yes to this, what are you saying no to?
   7. What was most useful for you?
   Plus the Development Pipeline coax set as founder additions.
4. Mindset: curiosity, listening, resisting the urge to answer.
5. No diagram.
6. Michael Bungay Stanier, The Coaching Habit — accreditation added.
7. know-and-use-the-right-leadership-hat, build-leaders-not-dependencies. Related:
   leadership-hats, development-pipeline, one-to-one-structure.

### Happiness Check (`happiness-check`) — NEW

_(Captured from Ben's voice memo, 2026-07-05. "These questions are about making sure that
the employee is happy." Ben floated it as a possible tool — built as one.)_

1. Three questions that surface how someone actually feels about working here, on a
   regular cadence — before the resignation letter does.
2. Regular 1:1s (e.g. quarterly per person); any time someone seems flat.
3. Ben's favourite questions, near-verbatim:
   - "Out of ten, how happy are you working here right now?"
   - "How likely do you think it is that you're still working here three years from now?"
   - "Tell me your favourite things — and your least favourite things."
4. Asked regularly they normalise honesty; the number matters less than the follow-up.
5. No diagram.
6. Outstride original.
7. build-incredible-relationships, build-leaders-not-dependencies. Related:
   employee-love-languages, one-to-one-structure.

### Employee Love Languages (`employee-love-languages`) — NEW

_(Captured from Ben's voice memo, 2026-07-05. Ben: "I think I came up with them but maybe
they exist." Checked: Chapman & White's "5 Languages of Appreciation in the Workplace"
exists but has a DIFFERENT five (appreciation-focused). Ben's five motivation currencies
are his own; the name riffs on Gary Chapman's Five Love Languages — credited as such.)_

1. Five currencies of motivation — people are paid in more than money, and every employee
   weights them differently.
2. Someone's gone flat, is hinting at leaving, is negotiating — or you're designing an
   offer.
3. Ben's five: (1) Salary — regular compensation; (2) Upside — equity, bonuses;
   (3) Learning & growth; (4) Responsibility & independence; (5) Proximity to the manager.
   Ben: "I've met employees who are motivated by these different things in different ways."
4. The mistake is assuming their language is yours.
5. Maybe a five-column visual later; table carries it for now.
6. Outstride original; name riffs on Gary Chapman's The Five Love Languages.
7. build-leaders-not-dependencies, build-incredible-relationships,
   hire-and-raise-the-talent-bar. Related: happiness-check, development-pipeline.

### How to Let Someone Go (`how-to-let-someone-go`) — NEW playbook

_(Captured from Ben's chat notes, 2026-07-05.)_

1. A step-by-step playbook for the conversation where you let someone go — decision
   stated cleanly, reasons concrete, dignity intact, risks planned beforehand.
2. The decision is made and the conversation is booked. Upstream of the tool, the bar
   for the decision itself: **"if it's not a hell yeah, it's a no"** (Derek Sivers's
   phrasing — accredit if it goes on the page). The Accountability Dial is the route
   that should have led here — no silent escalation to fired (cross-ref
   `accountability-dial`).
3. Ben's steps, near-verbatim:
   - Before the convo: think about the **3 things you want to get across** and the
     **3 emotions you want to bring** to the call (maybe a separate "2-minute hard
     convo prep" — see open questions).
   - Also beforehand: if there's a risk of the employee causing harm to the company
     (e.g. a dev leaving with passwords), make a plan first — e.g. be ready to cut
     off access.
   - Open by stating clearly that **this decision has been made**. "Do not give them
     reason to think that this is still being considered."
   - Then give them the prepared bullet points on why.
   - When explaining why, use **SBI** to give concrete examples rather than just
     "you didn't perform well."
   - Give them the opportunity to ask questions now BUT suggest they take a day to
     process the news, then have a proper debrief call the next day.
   - Give the person the opportunity to **co-create the narrative** — e.g. "I'd be
     happy to share that this was a mutual decision with the rest of the team."
   - Think about what you can offer that person: gardening leave, references.
   - In the follow-up meeting, run an **exit interview** — "a wonderful opportunity
     to hear a more unfiltered view of the company." (Ben wrote "conservative,
     unfiltered" — word check: "candid" likely intended.) Remember to ask good
     questions (see truth-questions idea below).
4. Even if you do everything "right", the result might not be particularly pleasant —
   it's important to understand that. And the most load-bearing move is the first one:
   state that the decision is made.
5. No picture captured. (Candidate: a timeline strip — prep → the call → a day to
   process → debrief + exit interview.)
6. Outstride original. Sub-credits where used: SBI (Center for Creative Leadership,
   already accredited on `sbi-feedback`); "hell yeah or no" (Derek Sivers).
7. hire-and-raise-the-talent-bar (owns exits — see capability intake note 2026-07-05),
   give-feedback-and-hold-the-standard. Related: accountability-dial, sbi-feedback,
   happiness-check.

**Open questions:**

- ~~Split the 2-Minute Hard Convo Prep into its own tiny tool?~~ RESOLVED 2026-07-05:
  yes — built as `hard-convo-prep` (own page with worked example). BOTH tools BUILT
  2026-07-05 with capability links (hire-and-raise-the-talent-bar,
  give-feedback-and-hold-the-standard; hard-convo-prep also
  navigate-conflict-and-create-psychological-safety).
- **Questions to Find Truth Quickly** — Ben's idea: a generic version of the Happiness
  Check for extracting honest signal fast (exit interviews, skip-levels, post-mortems).
  Own tool or a block inside this one? Ben's actual questions NOT captured yet — needs
  his list before drafting. STILL OPEN.
- "Gardening leave" is UK-flavoured — kept in the built page for now.
- No verbatim founder story captured for the page hook (tool pages don't require one,
  but a real story would strengthen it).

### Leadership Test (`leadership-test`) — NEW, BUILT 2026-07-05

_(Captured from Ben's chat notes, 2026-07-05, alongside the leadership-team-as-a-team
capability discussion — see capability intake. Ben approved the two proposed additions
("I like your suggestions") and supplied the one-voice line "80% commitment, 100%
alignment" — built same day as a six-question test titled "The Leadership Test", homed
under make-ownership-stick + design-the-org per the hold-off decision; the 80/100
agreement is the page's callout and also anchors the new "first team" section on the
Make Ownership Stick capability page.)_

1. A short test every leadership-team member should pass — run it per person, honestly,
   on a cadence.
2. Ben's four questions (his draft; he flagged #2 for a rewrite):
   - Does this person understand and champion the company strategy?
   - Have they created a strategy for their area that's driven from and supports the
     company strategy? _(rewrite candidate: "Does their area have a strategy that flows
     straight from the company's — and visibly serves it?")_
   - Have they built a team & systems to create a high likelihood of success?
   - Does this person embody the culture?
3. Suggested additions (LLM proposals 2026-07-05, NOT Ben's — pending his call):
   - The first-team question: do they put the company above their function? (This was
     Ben's stated angle for the whole theme but isn't in his four yet.)
   - The keeper test: would you fight to keep them? (Netflix — Hastings/McCord;
     accredit if used.)
4. No picture captured. (Candidate: checklist card, or a 4–5 row per-exec grid like
   team-traffic-lighting.)
5. Outstride original (keeper test sub-credit if added).
6. Placement TBD: make-ownership-stick / design-the-org / possible new capability —
   parked in capability intake.
7. Related: team-traffic-lighting, five-dysfunctions, performance-culture-grid.

### North Star & Health Metrics (`north-star-metric`) — enrichment 2026-07-05

_(Captured from Ben's chat note + slide screenshot, 2026-07-05. Existing thin tool
`north-star-metric` retitled "North Star & Health Metrics" and filled; slug kept. Ben:
"wdyt? feel free to improve on this draft.")_

1. Purpose, verbatim: "align company around what we're trying to maximise."
2. Story from Ben's company, near-verbatim: "are we a trading company (max trading vol) or
   an investing company (max # financially active users) have to decid!!" — the North Star
   choice was an identity decision, not an analytics decision.
3. The operating rule, from Ben's example (his slide colours):
   1. "maximise green metric (absolute)" — the North Star.
   2. "as long as blue metrics are healthy e.g. ARPU > €50" — the health metrics as
      guardrails with thresholds.
   Plus "make sure metrics make sense" — what makes a good metric (Ben's checklist,
   verbatim): obviously good · understandable · measurable · aligned with company's plan ·
   not too leading / lagging.
4. Maximise one metric absolutely; hold the others above thresholds. One number to chase,
   a few numbers not to break — and choosing the North Star is choosing what company you
   are.
5. Yes — Ben's slide: green North Star pill ("Customer Value" → mFAU) on top, three blue
   health pills below (Activation → % D14 deposits · Engagement → % users logged in ·
   Revenue → ARPU). Built as grid diagram `north-star-metrics`; original slide kept as
   reference image.
6. Sean Ellis coined the North Star Metric (2010s); Amplitude's North Star Playbook (John
   Cutler) added the input/guardrail structure — accredited, Outstride adaptation.
7. chart-the-path, map-the-destination (existing links kept). Related: okrs,
   company-health-scorecard, strategy-one-pager.

**Open questions:**

- The slide metrics (mFAU, % D14 deposits, % users logged in, ARPU > €50) are from Ben's
  own company and used with his blessing ("example from my company"); no client data.
- "Not too leading / lagging" drafted on the page as: leading enough to act on, lagging
  enough to reflect real customer value. Check Ben likes the phrasing.

### Habit Stacks (`habit-stacks`) — revision 2026-07-05

_(Captured from Ben's chat note, 2026-07-05: "let's improve this. 1. add emojis 2. reduce
# of habits." Plus: "Maybe mention types of habits — journalling / reflection habits e.g.
what's the most important thing to get done today; tracking e.g. track my productivity out
of 10; action habits — do something right now; schedule habits e.g. plan something.")_

**Drafting decisions (2026-07-05):** page stacks trimmed per instruction (daily 19 → 10,
Monday 15 → 9); Ben's full emoji-annotated lists preserved below so nothing is lost. New
"Four kinds of habits" section added from his types idea. Monthly Retro question list
captured here but only summarised on the page (see open questions).

**Ben's full daily pre-work stack (verbatim, with his emojis):**

- 💊 Have you taken thyroxine?
- 🍅 Start pomodoro
- 🫁 3 deep breaths
- ✍ Exist.io reflection
- ✍ How am I today
- ✍ Affirmation: I am leading an awesome life and I'm just getting started
- ✍ How excited / calm am I?
- ✍ How can I make today 1% better?
- ✍ How can I bring more joy to today? (to myself, to the world)
- 🥦 Food plan
- 📍 Check projects
- 📅 Check calendar
- ✍ Reflect on yesterday's goals
- 🎯 Set goals for day
- ✅ Set tasks for the day
- 🕐 Schedule wind down
- ✍ Visualise the day
- 📣 Finish off Pomodoro with vocab
- 💌 Share w. co-founder my traffic light for today

**Ben's full Monday morning stack (verbatim, with his emojis):**

- 🍅 Start pomodoro
- 📅 Monthly retro (if first Monday of month)
- 💭 Vision board
- 🎯 Read through quarterly & monthly goals
- 📌 Go through Projects
- ✍️ This week will be a success if...
- 💢 What might trigger me this week?
- 📅 Set schedulers
- ☀️ Check weather
- 📅 Go through calendar and try to solidify as much as possible
  - 💌 How to be romantic
  - 👨‍💻 Work
  - 🧑‍🤝‍🧑 Social (CouchSurfing, Meetup.com)
  - 🍷 Alone time (min. 1/2 day)
  - 🗽 Culture (concerts, theatre, museums)
  - 💪 Health (sport classes e.g. Beat81, running, activities with friends)
  - 🙊 Language lessons
  - 🥦 Food
- 📚 Do you have good books to read?
- 🎯 Set weekly tasks
- ⚖️ Set your intentions (🤹‍♂️ fun, 🧑‍🤝‍🧑 relationships, 💼 being productive, 🛋️ chilling)
- ▶️ Pre-work stack

**Ben's Monthly Retro questions (verbatim):**

- What were the major events of last month?
- General highs / what brought you joy / proud of
- General lows / things you didn't enjoy
- Things you wish you did / things you could have done better
- Things you've learned
- People with whom you spent time and how they influenced you
- People you met who you want to keep in touch with / people who inspired you
- Decisions made this month and why you made them
- Big things you are contemplating / questioning
- Things you worry about
- Things you are really looking forward to
- General thoughts on work, personal, health, relationships
- Life philosophy in a sentence / title of chapter

**Open questions:**

- The Monthly Retro question list is substantial enough to be its own tool (alongside
  `quarterly-retro` and `ten-minute-retro`) — currently only summarised in one line on
  the habit-stacks page. Promote to a tool?
- "Beat81" is a real Berlin fitness brand — generalised to "sport classes" on the page.

### OKRs (`okrs`) — page build-out

_(Captured from Ben's chat note, 2026-07-05: "build out page for OKRs pls - you can reference
strategy one pager + the regular accountability traffic light check ins.")_

1. Connect the company milestone and strategy one-pager to quarterly team goals and measurable
   outcomes.
2. Use when the company has strategy on one page but people cannot yet explain how their work
   ladders up to the milestone — or when quarterly goals exist but reviews have become narrative
   status updates.
3. Draft from the Strategy One-Pager: destination / next milestone -> company objective ->
   team objectives -> key results. Write KRs as outcomes, not inputs. Review regularly with a
   traffic-light check-in: green / amber / red against the agreed goal before narrative.
4. POV: OKRs are only half the tool. The other half is the regular accountability rhythm. Without
   the traffic-light check-in, OKRs become quarterly theatre; without the one-pager, they become
   local optimisation.
5. Use existing visuals: `strategy-grid` for the cascade and `operating-cadence` for the regular
   OKR traffic-light / quarterly OKR cascade.
6. Andy Grove / Intel OKRs, popularised by John Doerr in *Measure What Matters*. Outstride
   adaptation adds the strategy one-pager bridge and regular traffic-light accountability check.
7. Capabilities: `chart-the-path`, `install-the-operating-rhythm`. Related:
   `strategy-one-pager`, `operating-cadence`, `commitment-loop`, `team-traffic-lighting`,
   `north-star-metric`.

### RAG Company Status (`rag-company-status`) — page build-out

_(Captured from Ben's chat note and screenshot, 2026-07-05. Screenshot anonymized here: a
"Squad: User growth" board with a purpose line, objective rows, key result rows, and mid-/end-
quarter status columns coloured amber/green.)_

1. A lightweight red-amber-green board for reporting company, squad or goal status against
   agreed objectives and key results.
2. Use when OKRs exist but the review is too narrative, or when the founder needs to see at a
   glance which goal needs attention now and which can be left alone.
3. The board shape from the screenshot:
   - Title: squad / function / company area.
   - Purpose: one sentence explaining what this area is for this period.
   - Columns: Objective, Key Results, Mid-period status, End-period status.
   - Rows: each objective has concrete KRs and a RAG colour at each check-in.
4. POV: the status colour comes before the explanation. This prevents update theatre and tells
   the founder where to rove and repair.
5. Picture: table/dashboard, not a new diagram yet. Example should be anonymized and use generic
   active-user / signup-flow / launch-testing language, not the original company names.
6. Outstride adaptation of the common RAG reporting pattern.
7. Capabilities: `chart-the-path`, `install-the-operating-rhythm`. Related: `okrs`,
   `operating-cadence`, `commitment-loop`, `team-traffic-lighting`,
   `company-health-scorecard`.

### 2-Minute Hard Convo Prep (`hard-convo-prep`) — page build-out 2026-07-05

_(The tool was split out of `how-to-let-someone-go` per the open question above (Ben:
"maybe a separate tool"). Source material is the single bullet from Ben's 2026-07-05
chat notes: before the convo, think about the **3 things you want to get across** and
the **3 emotions you want to bring** to the call. Page drafted from that bullet.)_

1. Two minutes before any hard conversation: write the three things you want to get
   across and the three emotions you want to bring into the room.
2. Any booked hard conversation — underperformance, cofounder tension, a board pushback,
   letting someone go.
3. The mechanic: 3 messages × 3 emotions on one note; glance at it before you walk in.
4. POV (drafted, not verbatim Ben): you bring three emotions either way — the only
   question is whether you chose them.
5. No diagram — the tool is a note, not a canvas.
6. Outstride original (accreditation already on the tool in `os-data.ts`).
7. give-feedback-and-hold-the-standard, navigate-conflict-and-create-psychological-safety.
   Related: how-to-let-someone-go, crossing-the-line, non-violent-communication.

**Provenance flags:**

- The worked example on the page (founder telling a loyal early engineer they won't get
  the Head of Engineering role) is a **crafted composite** — no verbatim founder example
  captured yet. Replace when Ben supplies a real one.
- The "chosen emotions" framing in the callout is drafted, not Ben's phrasing — confirm.

### Relationship Reset (`relationship-reset`) — rewrite of `repair-conversation-script`

_(Captured from Ben's voice memo notes, 2026-07-05. Ben: "let's rewrite to relationship
reset." The old Repair Conversation Script shell (metadata-only draft) is replaced —
new slug, old slug `/os/tools/repair-conversation-script/` no longer exists.)_

Ben's notes, near-verbatim:

1. Co-creating a happy future > fixing a broken present.
2. Get curious about what they want for themselves / their department.
3. Align with what's good for company.
4. Co-create definition of success.
5. Co-design accountability systems — get them to ask for it.

Drafting mapping:

1. One-liner: a conversation that resets a strained working relationship by co-creating
   a happy future together instead of re-litigating the broken present.
2. When: a working relationship (report, leader, cofounder) has gone sour and every
   conversation about it turns into arguing about what already happened.
3. Steps: Ben's points 2–5, with point 1 as the framing move that opens the conversation.
4. POV/callout: point 1 verbatim — "co-creating a happy future > fixing a broken present."
   The accountability twist: get THEM to ask for the accountability system (point 5).
5. No diagram.
6. Outstride original.
7. Capabilities kept from the old shell: navigate-conflict-and-create-psychological-safety,
   build-incredible-relationships. Related: non-violent-communication, crossing-the-line,
   relationship-design-canvas, commitment-loop (accountability-systems link).

**Provenance flags:**

- Step notes on the drafted page are LLM expansions of Ben's five bullets; the bullets
  themselves are his phrasing. No verbatim founder example captured yet for a page hook.

### Operating Cadence (`operating-cadence`) — page build-out 2026-07-05 + Quarterly Retro kill

_(Captured from Ben's chat note + sticky-board timeline screenshot, 2026-07-05.)_

Raw dump, near-verbatim:

- "we can kill Quarterly retro as we have another retro" (= `ten-minute-retro`).
- "for operating cadence you can use this example (reference: for a company of about
  40 people)"
- "idea is to have a retro & planning cadence + regular accountability check ins w.
  enough space for strategy."
- "link to calendar audit and suggest that you review every quarter to see if updates
  needed"

Sticky-board timeline transcription (three swimlanes: C-level / Management / Company;
t-N = days before the new quarter begins):

- **t-14 (C-level):** C-level offsite w. Coach — OKR review · strategy meeting · SWOT
- **t-12 (C-level):** Draft company OKRs
- **t-7 (Management):** Quarterly strat meetings & OKR review
- **t-5 (Management):** Team OKRs
- **t-4 (C-level):** Approve company & team OKRs
- **t-2 (Company):** Communicate to the company — OKR results · new OKRs
- **After the new quarter starts:** Check in w. management team — every 2 weeks

**Drafting decisions (2026-07-05):**

- `quarterly-retro` tool killed per instruction; the retro slot in the cadence is
  carried by `ten-minute-retro`. References rewired (capability toolIds, related
  tools, toolRef blocks).
- Timeline built as new grid diagram `quarterly-planning-timeline` (swimlane style,
  matching the sticky board); original screenshot kept as the diagram's reference
  image. The "~40 people" framing kept on the page as the reference point.
- Ben's "retro & planning cadence + regular accountability check-ins with enough
  space for strategy" line used near-verbatim as the page's organising idea.
- Calendar Audit linked per instruction, with the advice to review the cadence
  itself every quarter.

**Open questions:**

- t-N units read as working days before the new quarter — confirm with Ben.
- Whether the every-2-weeks management check-in is the fortnightly OKR traffic-light
  from the existing cadence diagram or a separate 1:1-style check-in.

### Investor Update (`investor-update`) — page build-out 2026-07-05

_(Captured from Ben's chat note, 2026-07-05, pointing at the tool URL. Existing shell
filled; his "favourite structure" kept verbatim below.)_

1. (Existing shell filled — description tightened to reflect the structure.)
2. Not captured — cadence not specified either; page stays cadence-agnostic.
3. Ben's favourite structure, verbatim:
   1. Key metrics + cash in bank + runway
   2. Highlights e.g. big sales, new hires
   3. Challenges e.g. X taking too long
   4. CTA for investors e.g. looking to be connected with good growth agencies
   5. Photo of the team
   P.S. (verbatim): "if you're small / have a lot of angels, a quick 'Startup Name is a X
   that does Y' as angels often have short memories!"
4. The P.S. and the CTA carry the POV: investors are an asset to activate, and angels
   need reminding what you do.
5. No diagram — the numbered structure carries it.
6. Outstride original (investor updates are common practice; this structure and ordering
   are Ben's).
7. be-storyteller-in-chief, manage-capital-and-stakeholders (existing links kept).
   Related: board-pack, investor-hell-yes-test, company-health-scorecard.

**Open questions:**

- Cadence (monthly vs quarterly) not specified — confirm with Ben.
- Step notes on the drafted page are LLM expansions of Ben's five bullets (his examples
  kept verbatim); only the structure itself is his phrasing. The storytelling framing
  ("future first, metrics second") is pulled from the existing be-storyteller-in-chief
  capability page for consistency, not from this dump.

### Board Pack (`board-pack`) — page build-out 2026-07-05

_(Ben: "I think I share a lot about board etc. via voice — do you have the notes?" Sourced
from Granola coaching-session transcripts, 2025-12 → 2026-07, per the Granola rules: all
client names, company names and engagement details stripped; only Ben's own frameworks and
his own phrasing used. No standalone voice memo on board packs exists in Granola.)_

1. A board meeting pack and running order — executive summary with wins and challenges,
   metrics broken down, the plan until the next meeting, a specific ask, AOB kept to
   seconds — that keeps the founder in control of the narrative.
2. Any board meeting, especially a difficult one where the founder fears losing the room.
3. Ben's structure, assembled from his coaching advice (his phrasing, verbatim where quoted):
   - **Executive summary — wins and challenges.** "When I was leading board meetings, I
     would always start with an executive summary, and I would always include wins and
     challenges... it just kind of gives you complete control of the flow rather than
     anyone in the board kind of jumping in." In a bad quarter, land the headline yourself:
     "as you can see from the challenges... currently we are not where we need to be."
   - **Metrics, broken down.** Not just the headline number — by channel/initiative:
     "while direct sales are growing like this, partnership sales really haven't taken off
     yet... out of these [initiatives], the only one that has seen any success is this one."
     Highlight the bright spots even in a hard quarter.
   - **The plan until the next board meeting.** Forward-looking, with stakes named ("if
     that plan doesn't work, then we will talk about other measures").
   - **The ask.** "I would love your inputs on this. I would love it if you connect us
     with anyone who you think can help."
   - **AOB in seconds.** Rebrands, housekeeping, side projects: "a five second in the next
     board meeting and nothing else."
   - **Before the meeting:** sync the leadership team first (the board meeting is not the
     first time they hear the narrative), and choose the emotions to bring — realism,
     positivity, confidence, clarity (→ hard-convo-prep).
4. "Strong opinions, loosely held" — come in with a confident framing, then invite input.
   The pack is a narrative-control device, not a reporting obligation. Also: demos buy
   goodwill early; metrics move investor confidence — switch as soon as you have numbers.
5. No diagram — the running order carries it.
6. Outstride original ("strong opinions, loosely held" is a common aphorism, widely
   attributed to Paul Saffo — credited in-text if needed, not as tool accreditation).
7. manage-capital-and-stakeholders (existing), be-storyteller-in-chief (added — the pack
   is narrative control). Related: investor-update, hard-convo-prep,
   company-health-scorecard.

**Open questions:**

- Nothing captured on sending the pack in advance / pre-read timing — the one obvious gap.
  Get Ben's rule (e.g. "send 3 days before, first 15 minutes assume it's unread"?).
- "Not where we need to be" / channel-breakdown lines were advice given in client sessions —
  used here as example phrasing only, fully detached from any engagement. Confirm Ben is
  happy with them on the page.
