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
