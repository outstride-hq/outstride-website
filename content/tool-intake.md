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
