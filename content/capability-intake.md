# Capability intake

Answers here are the raw material for capability pages in `src/lib/capabilities-content.ts`.
Ben fills in a capability's seven questions (bullet points or voice-memo transcript both fine —
rough beats polished); an LLM session then drafts the page to the format spec in `AGENTS.md`
("Capability pages" section).

**Ground rules for whoever drafts from this:**

- Questions 1, 2 and 5 are non-negotiable. If they're empty, don't draft — leave the
  capability on fallback rendering.
- Anonymize everything per the Granola rules in `AGENTS.md`: composite scenarios,
  changed sectors/stages/numbers, no identifiable clients.
- The `beforeAfter` slot is built from Q1 (today) and Q3 (success). Make it vivid and
  first-person — it's the section that sells the capability.

## The seven questions

1. **What do founders literally say when this is broken?**
   2–3 verbatim (anonymized) quotes or fragments, not one polished line. The best one
   becomes the hook; the rest become the "where you are today" lines.
2. **What does conventional advice get wrong here?**
   Your contrarian one-liner (the "transparency isn't a value" move).
3. **A real before → after you've seen — both sides, in day-to-day terms.**
   Before: what did a normal week look and feel like? After: what does Monday morning
   look like once it's fixed — what do they do, and what do they stop doing? Observable
   beats abstract ("the exec team ran the QBR without him" beats "they aligned better").
4. **Which tool do you reach for first, and why that order?**
5. **The 2–3 failure modes you've personally watched.**
   Not generic ones — the specific ways it goes sideways.
6. **The first question you ask in a session on this topic.**
7. **One authority anchor you actually believe.**
   Book, story, person — like the Thiel/Chesky culture warning.

---

## First batch (prioritized)

### 1. Make Ownership Stick (`make-ownership-stick`)

_(RESOLVED with Ben 2026-07-04: two-level split. Make Ownership Stick = org-level systems +
culture for ownership/accountability (ownership map of results, decision rights, alignment vs
autonomy, weekly ownership review, red-comes-with-a-plan norm). Build Leaders, Not
Dependencies = the same thing at individual level (co-created goals/accountability,
delegation). os.ts bullets and toolIds re-scoped accordingly; delegation tools re-homed to
Build Leaders. Rich page for this capability still needs Ben's org-level material.)_

1.
2.
3.
4.
5.
6.
7.

### 2. Know My Special Ability (`know-my-special-ability`)

_(Captured from Ben's chat notes, 2026-07-02. Q1 and Q5 use anonymized composites — the page hook and failure modes are crafted; replace with real founder lines when Ben supplies them.)_

1. Composite hook: "I'm the bottleneck on everything — product reviews, sales calls, hiring debriefs. I tell myself only I can do it right, but honestly I'm just doing a lot of things I'm merely good at."
2. Excellence is not genius. The Zone of Excellence — work you're genuinely good at — is the most seductive trap because it earns praise and feels productive. A founder who stays there becomes the ceiling.
3. Before: calendar full of excellent work, every hire routes through you, can't name your special ability in one sentence. After: one-line genius everyone knows, calendar built around it, company knows where to find your highest-leverage contribution.
4. Zone of Genius first — the diagnostic that separates incompetence, competence, excellence and genius across your last two weeks of work.
5. Drowning in the Zone of Excellence; confusing being the bottleneck with being indispensable; building the org before naming your genius.
6. Working candidate: "What could you do better than almost anyone — and what does this company need from you that no one else can deliver?"
7. Gay Hendricks, The Big Leap — the four zones (Incompetence, Competence, Excellence, Genius). The excellence trap is the key insight for founders.

### 3. Take Command of My Role (`take-command-of-my-role`)

_(Captured from Ben's voice memo, 2026-07-04. MERGE EXECUTED same day: Operate at the Right
Altitude (old cap 10) merged into this capability — its spinning-plates / dive-and-climb /
next-bottleneck material is the movement half of this page; see the altitude section below
for that capture. Q1: the "am I doing enough?" line is real — CEOs literally ask Ben this —
but the page hook is a crafted composite built on it.)_

1. Real pattern, no single verbatim quote: "Enough times I speak to CEOs and they ask me,
   am I doing enough?"
2. Your role is the happy medium between your zone of genius / special ability and what the
   company really needs. Build the job like the org: look at the next funding round and work
   backwards — what does the company need, and what is your role in getting there?
3. Before: very, very reactive founders — things just happen to them, no time for strategy.
   After: the founder who committed to a recurring deep-think block — four hours completely
   off phone and Slack, purely for strategic work — "invaluable... unless you can actively
   make time for it and fight for it, it's just not gonna happen." (Client story —
   anonymized in page/tool copy to "a recurring half-day".)
4. NEW tool: Founder Job Description — "the most important tool here." Then CEO Test ("if
   you can answer all of these questions with at least an 8/10 confidence that you're doing
   enough, go outside and play"), Calendar Audit (how much time should each part get vs how
   much it actually gets), Two-Hour Constraint, Habit Stacks. KSS from cofounders as inputs
   to your job.
5. Purely reactive calendars. (Others derived: stuck at one altitude; role frozen while the
   company's needs change.)
6. Candidate: "What does the company need to be true by the next round — and what's your
   role in getting there?"
7. The role is a mixture: putting out fires, mitigating risks, planning for the future, and
   the things only you can do (speaking to investors, convincing new executives to join).
   Peacetime vs wartime founder (Ben Horowitz) — ask which you are today. "Giving away your
   Legos" (Molly Graham, First Round Review) — the founder's role changes every six months,
   so you constantly evolve it to increase the company's capacity for the next hurdle.
   Simple hacks: meetings only in the afternoons, no-meeting days, first two hours blocked
   for deep thinking. Quarterly ritual: zoom out on "what the company needs / what I need to
   do to get there", then plan the calendar and block time.

### 4. Operate at the Right Altitude (`operate-at-the-right-altitude`)

_(Partial capture from Ben's voice memo, 2026-07-04. RESOLVED same day: capability MERGED
into Take Command of My Role (Ben supplied the take-command memo and left the call to us —
this material became the "founder who moves" half of that page; Grove's limiting step is the
anchor). The capability id `operate-at-the-right-altitude` no longer exists in os.ts.)_

1. (No verbatim quotes captured yet.) Existing symptom-map line already points here:
   "I'm still in every decision."
2. The founder's job is vertical movement, not a fixed altitude: as the company grows its
   needs change, and a team that was green can go red through no fault of its own — the
   product team that was amazing at stage one suddenly struggles when the work becomes
   heavy B2B implementation. You step in and solve it (through hiring, or by forcing it
   yourself), then step back out.
3. The picture Ben paints: scaling a company is watching spinning plates — keeping things
   green, preparing for the next hurdle. When everybody's good, you can sit back and decide
   what is going to be the bottleneck in the future.
4. Existing tools: Calendar Audit, Two-Hour Constraint, CEO Test. Cross-links: Team Traffic
   Lighting (which plate needs you), Force → Form → Flow (how you enter and leave a team).
5. (Not captured yet.)
6. Candidate from the memo: "What is going to be the bottleneck next — and are you already
   preparing for it, or still stuck inside a team that no longer needs you?"
7. Ben asked to check "the IBM president's book on effective management and kinds of
   bottlenecks" → almost certainly Andy Grove (Intel president/CEO), *High Output
   Management* (1983): the limiting step — identify the bottleneck first and build the rest
   of the process around it (the breakfast-factory egg). The other canonical bottleneck
   source is Goldratt's *The Goal* (Theory of Constraints). Grove is the better founder
   anchor here.

### 5. Give Feedback & Hold the Standard (`give-feedback-and-hold-the-standard`)

_(Captured from Ben's voice memo, 2026-07-03 — the people-management dump. Q1 has no verbatim
founder quotes yet; hook will be a crafted composite until Ben supplies real lines.)_

1. (No verbatim quotes captured yet.) The felt state Ben describes: feedback is a dirty word —
   associated with negativity, you only get it when something bad has happened. And the classic
   founder failure: indirectly mention something once ("I noticed you didn't really make any
   sales last month"), then say nothing else for a month, two months, and eventually just fire
   the employee. We avoid difficult conversations, so we go from almost-nothing to fired.
2. Feedback is a dirty word only because it's rare and negative. You get rid of that by
   normalising it: a regular cadence and a regular structure. Also: people respond better to
   painting the picture of a positive future than to fixing a broken present — "next month is
   going to be our best month ever because you're going to make more calls than ever before"
   beats "you haven't been doing a good job and you need to change" (rephrase the example
   sensitively).
3. Before: difficult conversations avoided; silence, then firing. After: a regular bilateral
   feedback session with the key people in your orbit (cofounders, direct reports) — both show
   up with a brief doc prepared, ~50 minutes split between your KSSs and mine. It normalises
   feedback, gives it structure so it stops being only negative, unlocks positivity and
   insights, and makes as many assumptions as explicit as possible.
4. KSS (Keep / Start / Stop) for the regular session. SBI (Situation, Behaviour, Impact) for
   delivering a specific piece — Ben's example: Situation: the product meeting last week.
   Behaviour: when Martha suggested an idea you said "we're not going to talk about that today,"
   very directly. Impact: Martha seemed shut down and didn't contribute for the rest of the
   meeting. Development Pipeline (new tool) as the happy path of performance improvement;
   Accountability Dial as the unhappy path — and attach the dial to a timeline with a
   quantified bar: "Ben's ability to review pull requests is currently at a five. I need him at
   a seven by the end of the month. If it hasn't happened, I move to the next step on the dial
   (e.g. the boundary)."
5. Avoiding the difficult conversation entirely — the nothing-to-fired jump. Feedback only when
   something bad happens (so it stays a dirty word). "You always do this" feedback — "you're
   always contradicting me, you always think you're right" — which triggers pure defensiveness
   ("No I don't"). Giving critical feedback over Slack: the characters don't carry the same
   emotional weight as a call.
6. (Not captured yet.) Working candidate: "When did this person last hear how they're actually
   doing — from you, in a structured way?"
7. Two types of feedback: (1) deliver immediately or within 24 hours — someone is rude in a
   meeting, you don't wait until next month; (2) pattern feedback (proactivity, attention to
   detail) — don't jump down someone's throat the first time; build the profile over time and
   bring it to the regular session. Development Pipeline is Peterson & Hicks (see tool intake).

### 6. Install the Operating Rhythm (`install-the-operating-rhythm`)

1.
2.
3.
4.
5.
6.
7.

### 7. Manage My Energy System (`manage-my-energy-system`)

_(Captured from Ben's chat notes, 2026-07-02. Q1 has no verbatim quotes yet — the page hook is a
crafted composite; Q6 not captured; replace when Ben supplies them.)_

1. (No verbatim quotes captured yet.) One real quote to use, attributed "Series A founder":
   he plans only 80% of his week because the other 20% always gets filled with random stuff.
2. Energy is a system you design, not a mood. Plan how much before what: capacity first,
   deliberate slack, then contents. And don't optimise every hour for leverage — the week also
   needs work that gives energy back (the technical founder's protected coding afternoon).
3. Before: calendar planned to 100%, surprises paid for in evenings, needs cut first under
   pressure. After: 80% planning, seven needs with cadences, deep work in mornings /
   meetings + dopamine work in afternoons, one protected slot for energy-giving work.
4. 7 Core Founder Needs first (cadence per need), then Energy Audit (personal drains/chargers).
   Habit stacks and weekly energy review carry the cadences.
5. Planning 100% of the week; cutting the needs first under pressure (sleep, exercise, friends);
   delegating away all energy-giving work in the name of leverage.
6. (Not captured yet.)
7. Dave Bailey's core-needs model — credited on the tool and diagram
   (https://www.dave-bailey.com/blog/check-ins); purposes-and-cadences version is an Outstride
   adaptation. Day-rhythm point: planning Monday first thing, deep work mornings, meetings and
   short-term dopamine work afternoons.

---

## Remaining capabilities (add sections as you get to them)

Company System: Map the Destination · Chart the Path · Design the Org · Build a Culture That
Compounds (done) · Hire & Raise the Talent Bar (see section below)

Lead Myself: Make the Right Calls

Lead Others: Know & Use the Right Leadership Hat · Build Incredible Relationships ·
Navigate Conflict & Create Psychological Safety · Build Leaders, Not Dependencies

Lead the Game: Be Storyteller in Chief · Manage Capital and Stakeholders · Find New Capital

Human System: Build Resilience & Recovery · Build My Growth System · Master My Mindset ·
Face My Shadow · Build a Life Worth Scaling For

### Build Resilience & Recovery (`build-resilience-and-recovery`)

_(Captured from Ben's chat notes, 2026-07-02. Q1 has no verbatim quotes yet — the page hook is a
crafted composite; replace with real founder quotes when Ben supplies them.)_

1. (No verbatim quotes captured yet.) Described state: very reactive, very stressed, drinking to
   switch off; conferences/travel/hotels/caffeine/alcohol stack up; fundraising and other acute
   stressors tip founders over.
2. A startup is neither a marathon nor a sprint — it's a marathon with periods of sprinting.
   Sprinting is sometimes required (critical launch, fundraise); sprinting continuously is a crash.
   Also: managing your own energy is close to job number one, not self-care around the job.
3. Before: reactive, wired, no recovery. After: founder knows their two equilibria (good:
   planning, breaks, exercise; bad: reactive, stressed, numbing), knows their triggers, and has
   pre-planned recovery moves (two-hour long run, spa day, sex, offline weekend).
4. Two Equilibria Map first (see your states and triggers), then Burnout Playbook (pre-commit
   responses), with the daily burnout score living in Habit Stacks.
5. Ben's own story: answering emails from the hospital bed within days of cancer treatment — no
   recovery window at all. Also: making quarter-defining decisions at 70% capacity; treating the
   whole startup as one continuous sprint.
6. (Not captured yet.)
7. Ben's cancer story is the authority anchor — told first person on the page. Plus the
   marathon-with-sprints line. Key structural point: as the company grows, work shifts from IC
   output to decisions/leadership — higher leverage, lower tolerance for a depleted founder.
   Cofounder accountability: share triggers and promises ("did you book that vacation?").

**Open question (Ben, 2026-07-02):** possibly merge `manage-my-energy-system` and
`build-resilience-and-recovery` into one capability — the content overlaps heavily.

### Build My Growth System (`build-my-growth-system`)

1. "I don't really have a system for my own growth. I just hope each crisis teaches me something."
   "I keep learning the same lesson in slightly different forms."
   "I read loads and talk to smart people, but I don't know if any of it is actually changing me."
2. A pile of inputs is not a growth system.
3. Before: growth was reactive. A hard board meeting, a messy people call or a cofounder wobble would become that week's "learning." The founder had lots of inputs - books, podcasts, advice, investor opinions - but no designed way to sort them, no clear support bench, and no repeatable practice. The same edges kept returning: feedback, boundaries, hard decisions, overwork.
   After: the founder had a deliberate system - coach, trusted peers, a personal board, regular reading, and clearer asks of each relationship. They reflected on what they were learning, identified the edge that mattered most right now, and put reps into the week with feedback loops and habit stacks. Monday morning looked calmer because growth was already in the calendar instead of waiting for pain to force it.
4. Personal Board first, because most founders have support by accident rather than by design. Then Habit Stacks, because insight only counts once it becomes a repeated behaviour in the week. Relationship Design Canvas comes later when an important support relationship needs clearer expectations.
5. Mistaking consumption for growth - endless books, notes, podcasts and saved links, but no system.
   Building a "personal board" out of impressive names instead of people who will actually challenge, support and tell the truth.
   Having good insights but never turning them into reps, so the same lesson comes back in a different disguise.
6. What are you reading, who are you learning from, who is supporting you - and where in your calendar does any of that turn into change?
7. Bill Campbell. The leaders of Apple, Google and Intuit still needed a coach. That is the point: intelligence and ambition are not enough; you need structured challenge, reflection and accountability.

### Be Storyteller in Chief (`be-storyteller-in-chief`)

_(Captured from Ben's chat notes, 2026-07-02. Q1 has no verbatim founder quotes yet — the page
hook is a crafted composite; Q4 and Q6 not captured; replace when Ben supplies them.)_

1. (No verbatim quotes captured yet.) The gap Ben describes: founders who go quiet because
   "I don't know which story to tell" — his response: bullshit, there are always stories to tell.
2. Storytelling isn't garnish on the real work — the delta between what you have today and the
   story you paint is literally where startup value gets created. Angels don't invest in what
   you have; they invest in the story: the future you paint and you as the protagonist in it.
3. Before: pitches and all-hands as status reporting; candidates hear facts, not a future worth
   a pay cut. After: a story at every all-hands (company commitment: someone tells one at least
   every two weeks), the story adapted per audience (team / investors / hires), and high-quality
   hires leaving bigger salaries behind because they believe.
4. (Not captured — inferred from existing OS links: Four Disciplines for the over-communication
   discipline, Investor Update for the investor version, Monthly All-Hands as the practice
   rhythm.)
5. Going quiet because no single story feels big enough — telling nothing instead of something.
   Under-communicating: saying it once and assuming it landed; people need to hear things more
   than once, over-communication beats under-communication.
   Reporting instead of storytelling: metrics readouts that inform but never move anyone.
6. (Not captured yet.)
7. Ben's friend Dave: the founder is the "Storyteller-in-Chief." Plus the angel-round truth:
   first money is raised on the story, not the traction. Framework: three ingredients —
   philosophy/mission ("democratise wealth growth for the whole world" + why it matters), a
   customer interaction (the friend at a party: "before you, I didn't even think about
   investing"), a team shout-out tied to a named value ("Tom pushed back, kept us aligned,
   delivered on time"). Techniques: the three-part sandwich (tell them what you'll tell them /
   tell them / tell them what you told them) and rhetorical questions as section breaks.

### Manage Capital and Stakeholders (`manage-capital-and-stakeholders`)

_(Captured from Ben's voice memo, 2026-07-02. Q1 uses Ben's own founder line from his first
startup; replace later if he wants a more general founder quote.)_

1. "I had a really bad relationship with my main investor in my first startup."
   Context: soon after the raise, the CEO stepped down. In an early-stage startup investors are
   investing in the founder, especially the CEO, so trust broke and the relationship stayed
   turbulent for years.
2. Investors are not your boss. Treat them as influential stakeholders to manage, not authority
   figures to report up to.
3. Before: board meetings felt like reporting upward; controversial decisions landed cold in the
   room; investors were surprised, frustrated or circling the wrong topics. After: the deck goes
   out a few days early with KPIs, highlights and challenges up front; key investors are
   pre-synced; hard decisions are pre-discussed one-to-one; the meeting has space for what
   matters and the founder is steering the room rather than defending in it. Investor updates
   become short, useful and specific: highlights, lowlights, KPIs, big decisions, a reminder of
   what the company is now if needed, a CTA, and a photo.
4. Board Pack first, because it forces clarity on KPIs, highlights, challenges and the actual
   decisions before the room reacts. Investor Update next, because regular async updates reduce
   surprises and keep angels and stakeholders warm between meetings. Relationship Design Canvas
   comes in when a key investor or stakeholder relationship is drifting, politically important, or
   needs clearer expectations. Company Health Scorecard can feed the KPI slide.
5. Treating investors like a boss and slipping into employee/reporting mode. Letting
   controversial decisions first appear in the board meeting instead of pre-socialising them with
   the influential investors. Sending bland updates with no ask, no reminder what the company is,
   and no founder magic or visual texture for busy stakeholders to latch onto.
6. What do you want from this board meeting: an honest discussion, or approval for the plan
   you're presenting?
7. Ben's own story from startup one is the anchor: trust with a lead investor can stay broken for
   years once it cracks early. Also: VCs like to be the smartest person in the room, but a lot of
   groupthink exists; boards often converge around one or two influential investors. Practical
   point of view: ask advice one-to-one before the meeting, because people like to be consulted
   and it lets you bias the room constructively. Distinctive line: "sprinkle some founder
   magic" - investors are living vicariously through the founder and want to feel part of the
   journey.

### Build a Life Worth Scaling For (`build-a-life-worth-scaling-for`)

_(Captured from Ben's chat notes, 2026-07-02. Q1 has one strong verbatim founder line; Q6 not
captured; page written to read more like a blog than the standard format at Ben's request —
if the fixed slots lose too much of his voice, the format itself is up for revision.)_

1. Real founder line, to use as the hook (attribute "founder Ben coached"): **"Champagne at 40."**
   When asked what all the sacrifice — health, relationships — was for, that was the whole answer:
   a vague utopian future where everything is finally perfect. Two things surfaced fast: (a) he
   couldn't actually describe what "Champagne at 40" looked like, and realised he'd probably still
   be working, just differently (more advisory); (b) he was sacrificing far too much today for it.
2. "I work hard today for a better life tomorrow" is not how it works. The perfect future you're
   deferring to is mostly unexamined, and large parts of it are available to start living now.
   Don't just default into the overachiever pattern — achievement has been rewarded your whole
   life, so you run it on autopilot without asking what you're saying no to for the founder years.
3. Before: sacrificing health, relationships, hobbies today, banking on a utopian future payoff
   that he can't even picture. After: he's run the five-year visualisation, knows what the life
   actually looks and feels like, and has pulled concrete pieces of it into this year — e.g. can't
   buy his parents a house yet, but rents an Airbnb once a year and gathers family and closest
   friends, living the "provide for my loved ones" dream now, not at 40.
4. Live It Today first (visualise five years out, then extract what you can live now), then the
   Anti-Wasteman System to commit to pulling one piece forward as a real goal, with Habit Stacks
   to make the recurring pieces stick.
5. The overachiever default: deferring the whole of life to a future win because achievement is
   the only story you've ever run. Sacrificing the needs (health, relationships) as if they're the
   cost of the ticket. Chasing a future state you've never actually examined — so you can't tell
   which parts you already have access to.
6. (Not captured yet.) Working candidate: "Picture your life five years out — which part of that
   could you already start living this year?"
7. "Creating Your Own Yacht" by The Real Estate God
   (https://x.com/TheRealEstateG6/status/1556643641975873536 ;
   https://therealestategod.substack.com/p/creating-your-own-yacht): you don't need the yacht (or
   the billions) to get what the yacht is really for — the relationships, the time, the providing.
   You can start building that today. Plus Ben's own view: the most meaningful part of being a
   founder was changing the lives of the people around him — a great working environment, giving
   people opportunities and skills — more than the customer or the wealth. Enneagram lens: founders
   skew Achiever/Type 3 (and Type 1), often neurodivergent, driven hard by success.

### Face My Shadow (`face-my-shadow`)

_(Captured from Ben's chat notes, 2026-07-02. Q1 has no verbatim founder quote yet — the page
hook is a crafted composite and should be replaced if Ben gives a real line.)_

1. (No verbatim quote captured yet.) The pain Ben wants named: founders often are not aware of the
   negative stories they tell themselves or the patterns that take over under stress — people
   pleasing, control, criticism, rescuing, avoidance, negativity.
2. The key reframing: do not treat these patterns as identity or as proof something is wrong with
   you. Many of them were useful earlier in life and helped you survive or cope, but no longer
   serve in the same way. Example Ben gave: people pleasing may come from trying to keep the peace
   while parents were divorcing. Back then it worked; now it is embedded and overused.
3. Before: the founder is hijacked by old scripts and only notices afterwards. After: they can see
   the pattern earlier, understand what it is trying to protect, and choose a healthier response
   without shaming or rejecting that part of themselves.
4. Start with the Saboteurs quiz as the accessible naming device. Then use the overused-strength
   quadrant image Ben shared (core quality -> pitfall -> challenge -> allergy / positive opposite)
   as a second lens. Then the "Council of Me" exercise for personifying parts. Habit Stacks is the
   practice layer for building the noticing muscle.
5. Failure modes and shadow patterns Ben explicitly named: people pleasing, control freak, overly
   critical, worrying / negativity, rescuing, avoidance, status hunger. Also: having the insight
   once but never building reps; trying to reject the part instead of updating its role.
6. Candidate first question: "When this pattern shows up, what story is it telling you — and what
   is it trying to protect?"
7. Useful anchors: Positive Intelligence's saboteurs model as a naming entrypoint; the
   unconscious incompetence -> conscious incompetence -> conscious competence -> unconscious
   competence arc for behaviour change; the therapist caveat if a pattern feels extreme or
   unhealthy; the "different versions of you in a room" visualisation as a practical reflection
   exercise.
8. Additional pattern Ben wants shown visually: a negative loop around expectations. Set
   unrealistic expectations -> meet them and ratchet the bar upward, or fail to meet them ->
   frustration -> coping mechanisms (e.g. alcohol, numbing, avoidance) -> which feeds back into
   not meeting expectations and keeps the cycle running. The point is to help founders identify
   the loop and step out of it earlier.

### Find New Capital (`find-new-capital`)

_(Captured from Ben's chat notes, 2026-07-02. Q1 has no verbatim founder quotes yet — the page
hook is a crafted composite; Q6 not captured. Ben explicitly asked to link out to the resilience
and mindset capabilities from this page. Replace the hook with a real founder line when supplied.)_

1. (No verbatim quotes captured yet.) The felt state Ben describes: fundraising is one of the most
   stressful things a founder does; it's exhausting, feels random and unfair, and can drag on far
   longer than expected while the company drifts without you. Ben's own line: a Series A extension
   was so brutal it "almost killed me."
2. Don't raise by default. The first question — before "how do I raise?" — is "what is the capital
   actually for?" Many founders assume they need to raise; some genuinely do (capital-intensive
   models like fintech), many don't. Raising means getting married to an external party who changes
   a lot about how you run the company, so make the decision consciously. Also: fundraising is not
   fair — bad companies raise, good ones don't; it's largely momentum and luck, not merit.
3. Before: pitching everyone at once with no momentum, letting the market smell desperation,
   accepting generic "no"s, the raise swallowing the founder's time while culture and execution slip.
   After: consciously decided to raise; a shared, up-front definition of what a "hell yes" round
   looks like; a categorised long list worked in phases (6–10 at a time); a Q&A library and per-pitch
   retros; momentum/FOMO managed deliberately; the company (and the founder) resilient enough to
   survive a long process.
4. (No dedicated tools exist yet — Investor Hell Yes Test and Fundraising Pipeline are only in the
   backlog.) In practice: define success first (three inputs below), then build and phase the long
   list, then rehearse the pitch on low-stakes investors. Company Health Scorecard is the only
   currently-linked tool.
5. Failure modes Ben named: (a) raising by default without deciding what the capital is for and
   getting married to an investor you didn't need; (b) blasting the whole list at once with no
   momentum, so a slow start reads as desperation and there's nowhere left to go — then crawling back
   to the same burned contacts six months later; (c) accepting generic rejections ("wrong stage",
   "come back with more traction") as answers instead of mining for the real reason.
6. (Not captured yet.) Working candidate: "Before we talk about how to raise — what is this capital
   actually for, and what changes the day you take it?"
7. Ben's own year-long Series A extension is the authority anchor — told first person, it nearly
   finished him. Key frameworks he uses:
   - **Align on success first** using three inputs: (1) existing investors, asked independently,
     "what would make the next round a hell yes for you?"; (2) the market / peers (what comparable
     companies raised and built); (3) your own view. Combine into a shared target. Expect tension
     (e.g. a few large investors vs many small ones) — "strong opinions loosely held": run one as
     primary, keep the other as backup, and pre-decide when you'd pivot from strategy A to B.
   - **Long list**, categorised by likelihood and desirability, plus ticket size, vertical, geography
     restrictions.
   - **Rehearse the pitch** (the "rehearsal dinner"): practise with existing investors, peers, coach;
     then two low-stakes pitches with less desirable investors as the trial run. After every pitch:
     a two-minute retro with your cofounder (went well / didn't) and add every question to a growing
     Q&A library with the perfect answer for next time.
   - **Phased outreach**: break the list into phases (phase 1 = 6–10 investors), give them time,
     see how it lands. Don't appear too keen; don't let the market get a whiff of desperation.
   - **Momentum / FOMO is everything**: investors only move if they fear losing out. Short, sharp
     bursts; manage the narrative (tell others you have a term sheet; announce milestones — a new
     deal, 100k DAU). Pause if it's not going well rather than burning every contact.
   - **Mine investors for feedback**: they give non-answers. Best question when they pass — "what
     three things would have had to be different to make this go from a no to a hell yes?"
   - **Term sheets**: use the first to get more (better bargaining position); get a good lawyer who
     fights for you; invest in a healthy long-term relationship — you're getting married.
   - **Resilience angle** (Ben asked to link these): fundraising takes longer than you think, so
     protect your runway and your mindset. Take a vacation before you start; make the company
     resilient without you (watch culture/execution while you're in investor meetings); look after
     yourself throughout. Cross-link to `build-resilience-and-recovery` and `master-my-mindset`.

---

## People-management voice memo (2026-07-03)

_(One long voice memo covering the whole Lead Others group plus hiring/onboarding. Group-level
framing below; per-capability sections follow. Ben explicitly opened the organisation question:
happy to split or merge capabilities — see open questions at the end of this block.)_

**Group-level framing (usable as `why` material on any of these pages):**

- What an honour it is to manage people. Ben's line, keep close to verbatim: "The most
  meaningful part of my startup journey was the lives I've changed by being an amazing boss and
  creating an amazing environment to work in." Whatever happens to your startup, you'll be
  changing lives if you're giving good people good opportunities and a good space to grow.
- Acknowledge it's scary to manage people for the first time, and it's a real responsibility.
- The root-cause quote Ben loves: **"The majority of conflict comes from implicit
  assumptions."** You're assuming something, the other person is assuming something else, and
  conflict happens in the gap. Example: I assume you'll let me know when you're stuck; you
  assume you need to figure it out by yourself.
- If there were one piece of advice for new managers: **proactively define your relationship.**
  Decide together: how you'll communicate, how frequently, which regular meetings and for what,
  how you want to give and receive feedback (i.e. not by Slack). Side note from Ben: this works
  for friends and romantic relationships too.

### Know & Use the Right Leadership Hat (`know-and-use-the-right-leadership-hat`)

_(Captured from Ben's voice memo, 2026-07-03. Q1 has no verbatim quotes yet.)_

1. (No verbatim quotes captured yet.) Implied pain: always telling people what to do — they
   don't grow, and you can't scale.
2. There's no right or wrong management style — some are direct and authoritative, some
   collaborative; a lot of it is gut feeling. The skill isn't picking a style, it's the
   reflection: "Which manager hat am I wearing right now?"
3. Before: defaulting to advice and instructions in every conversation. After: consciously
   choosing the hat per person and per situation.
4. Leadership Hats. **Ben's canonical set is four hats** (the current tool page lists six —
   open question below):
   - **Coaching hat** — summed up by "What do you think?" Help the person by asking awesome
     questions, being really curious, leading them to their own answer. Use with a smart
     employee who wants to grow. Do NOT use when something is on fire — production server down
     is not the moment for "how do you feel about this?"
   - **Mentor hat** — you have more experience; share it: advice, guidance, recommendations.
   - **Empower hat** — setting goals, ideally co-creating them, and building the systems for
     success and accountability together.
   - **Manager hat** — sometimes you have to say no. Formal performance reviews, the legal
     stuff, approving vacation and sick days, salary negotiations. Important to recognise this
     hat is part of the job too.
5. Always telling people the next step (they don't grow, you don't scale). Coaching when the
   building is on fire. Pretending the manager hat doesn't exist — avoiding the formal no's.
6. "Which manager hat am I wearing right now?" (the self-check; also the question Ben would
   put to a founder about a specific conversation).
7. (Not captured — the hats model itself is the anchor; origin/accreditation to check.)

### Build Incredible Relationships (`build-incredible-relationships`)

_(Captured from Ben's voice memo, 2026-07-03. Q1 has no verbatim quotes yet.)_

1. (No verbatim quotes captured yet.) The pattern Ben describes: founders who have a weekly
   meeting but only ever discuss operations — no time for strategy, no time for the
   relationship itself. And unnecessary conflicts everywhere, all traceable to mismatched
   assumptions.
2. "The majority of conflict comes from implicit assumptions" — so don't wait for friction:
   proactively define the relationship, before you need it. If you create an explicit
   agreement between the two of you, you dramatically reduce the number of unnecessary
   conflicts.
3. Before: assumptions collide (I assume you'll ask when stuck; you assume you must solve it
   alone); salary/bonus decided unilaterally and triggering resentment across the org. After:
   a relationship contract covering —
   - Which things we discuss together, which one person can decide, which are sole
     responsibilities. Ben's startup hard rule: **any salary or personal decisions had to be
     discussed in the management group** — one cofounder saying yes to a raise while the others
     didn't was too triggering and unfair to the rest of the org.
   - What accountability looks like; how often we exchange feedback; which meetings we have.
     Ben's preferred cofounder cadence: **a monthly deep strategy session offsite (at least a
     couple of hours thinking about the future), at least one check-in, and one social dinner
     a month.**
   - Do's and don'ts: don't give feedback over Slack (characters don't carry the emotional
     weight of a call); praise in public, anything remotely critical over the phone or in
     person.
   - "What do you need from me, and what do I need from you?" — including be/do lists: always
     be as clear as possible with objectives; always give me the resources you think will be
     useful; be proactive, be assertive.
4. Relationship Design Canvas / Relationship One-Pager first — the contract is the tool.
5. The ops-only weekly meeting (no strategy time, no relationship time). Unilateral salary and
   personal decisions. Assuming the working agreement is obvious and never making it explicit.
6. (Not captured yet.) Working candidate: "What have you and your cofounder explicitly agreed
   about how you work together — and how much of it is still assumption?"
7. The implicit-assumptions quote is the anchor. Ben's note that the same move works in
   friendships and romantic relationships gives it reach beyond the office.

### Navigate Conflict & Create Psychological Safety (`navigate-conflict-and-create-psychological-safety`)

_(Captured from Ben's voice memo, 2026-07-03. Q1 has no verbatim quotes yet. The cofounder
"magic word" story is real but anonymized.)_

1. (No verbatim quotes captured yet.) Context Ben names: startups are fast-moving and chaotic,
   often smart young people with limited experience, emotions run high — so you need a good
   way of resolving conflict. Real scenario: two cofounders with a long history who sometimes
   ended up fighting in front of the rest of the team.
2. Define how you fight before you fight. It's way easier to proactively decide how you should
   argue — while you're calm — than to improvise mid-conflict. Put a "how we resolve conflict"
   section in your relationship document.
3. Before: the two cofounders fighting in front of the team. After: their self-made rule — if
   we find ourselves going back and forth and our voices beginning to rise, one of us says a
   **magic word**, the conversation stops, and within 24 hours we book a whiteboard session in
   the meeting room and hash it out together. Ben: "I thought that was amazing."
4. Nonviolent Communication when emotions are really tight — a way of expressing yourself with
   a very low chance of triggering the other person. Plus the **crossing the line** model:
   - My intention is accessible to me.
   - My speech and behaviour are accessible to both of us.
   - Your reaction is only accessible to you.
   "Don't cross the line" = you can't assume my intention, and I can't assume your reaction.
5. Fighting in front of the team. Crossing the line — the first-time manager who went to her
   direct report's desk every single day, looking over her shoulder, correcting and suggesting.
   Her intention: be an awesome, supportive manager. The report's reading: "This person
   doesn't trust me. They think I'm a baby. They're micromanaging me. This is awful." Root
   cause, again: unexpressed assumptions. Third failure mode: no agreed off-ramp, so arguments
   just escalate.
6. (Not captured yet.) Working candidate: "How do you two argue — and did you ever agree on
   how you'd do it?"
7. NVC is Marshall Rosenberg (already credited on the tool). The magic-word cofounder story is
   the lived anchor. Crossing-the-line origin to check (placement open question below).

### Build Leaders, Not Dependencies (`build-leaders-not-dependencies`)

_(Captured from Ben's voice memo, 2026-07-03. Q1 has no verbatim quotes yet. Covers both
empowerment and delegation.)_

1. (No verbatim quotes captured yet.) Ben's framing: "delegate or die." If you delegate
   nothing, everything comes crashing down.
2. Delegation is an investment, not a time-save: it's not going to be faster tomorrow, but
   it's going to be faster in a month or two for sure. And: **delegate, don't abdicate.**
3. Before: founder holds all goals and hands teams top-down targets. After:
   - **Goals connected to mission first**: employees' and teams' goals connect to the overall
     mission of the company.
   - **Co-created goals**: easier with senior people. Example: head of growth, company goal
     100k active subscribers — "Tom, you're a smart strategic person. Based on where we are
     and the company's goal, what should the growth team's goals be? The strategic
     initiatives? The risks and pitfalls?" Run the strategy work at the team level. Co-created
     goals create a tremendous sense of ownership.
   - **Traffic-light accountability**: teams RAG their quarterly goals in the regular meeting.
     Red or amber is never bad in itself (externals happen — someone's sick, the market
     shifted) — but **if it's not green you come with a plan**: "Subscriptions is orange, but
     I've spoken to three agencies this week and I'm revamping our creative strategy."
   - **Co-created accountability**: ask "Would it be useful if I held you accountable?"
     (nearly always yes — you hire ambitious people). "What does accountability look like?"
     They define it — "check in on me, ask what happens if I haven't done it, be tough on me,
     push me." They've done your job for you, and they can't object when you execute it.
   - **Delegation planned, quarterly**: "What are you doing today that you shouldn't be doing
     at the end of the quarter?" Use the Delegation Ladder (degrees of delegation) and the
     Delegation Timeline (different responsibilities at different levels at different times).
   - **Delegation aligned with growth edges**: "What's your growth edge? What do you want to
     focus on?" — "People management." — "Awesome: from now on you lead the weekly product
     check-ins." Ben: that works like magic — you're helping them grow in the way they
     defined, by handing off the things you were doing.
4. Delegation Ladder + Delegation Timeline; Development Pipeline for growing people;
   traffic lights live inside the operating-rhythm meetings.
5. Delegate-then-abdicate: people will not be as good as you at the beginning — provide
   support, regular check-ins and touch points, review the first few iterations, make sure
   you're on the same page. Never delegating because it's slower today. Shoving top-down
   goals onto the next team instead of collaborating.
6. (Not captured yet.) Working candidate: "What are you doing today that you shouldn't be
   doing at the end of the quarter?"
7. You'll have to scale yourself and your business the whole time — often forcing an area
   until you get it to forming and then to flowing (ties to the OS Force → Form → Flow
   stages). Claude to propose concrete delegation-over-time examples when drafting.

### Hire & Raise the Talent Bar (`hire-and-raise-the-talent-bar`) — hiring & onboarding material

_(2026-07-04: Raise the Talent Bar retired as a separate capability — its surviving scope
(ongoing performance × culture evaluation rhythm) merged into the hiring capability, which
was retitled from "Hire & Onboard the Right People" and re-slugged.)_

_(Captured from Ben's voice memo, 2026-07-03. Ben's own caveat: "this is a little bit of a
start — maybe we expand it later or just weave it into the content." Q1 and Q5 not captured,
so per ground rules this page stays on fallback rendering until they exist.)_

1. (Not captured yet.)
2. Working contrarian angles: rank every hire on performance × culture — and run a premortem
   on the hire before they start, which almost nobody does.
3. (Partial.) Hiring flow Ben described: (1) look at what the organisation really needs, then
   check the job description and level of seniority against that; (2) performance vs culture
   as the main way of ranking candidates; (3) with new hires, run a **premortem**: "If this
   were to go wrong, how would it go wrong?" — e.g. "Ali wasn't able to turn his network into
   leads"; "Ali's lack of people-management experience meant the team malfunctioned" — ranked
   by likelihood.
4. Performance × Culture Grid; Premortem (new, neutral tool); 30-60-90 day plans for
   onboarding, with very transparent evaluations early on. A low score on the quadrant early
   is OK — they're new.
5. (Not captured yet.)
6. (Not captured yet.) Working candidate: "What does the organisation actually need — and
   does this job description still describe it?"
7. The anonymized CTO hiring example (interview process + task doc — captured in
   `content/tool-intake.md`) as the worked example of a serious process: "you can strip back
   from there."

**Open questions from the 2026-07-03 memo — RESOLVED with Ben same day (implemented):**

- Leadership Hats: **trimmed to Ben's 4** (coach, mentor, empower, manager) with
  when-to-wear guidance; Operator and CEO/founder rows removed.
- Premortem + opportunities-vs-threats: **two tools, cross-linked as related** (`premortem`,
  `opportunity-threat-map`).
- Crossing the Line: **both** — standalone tool (`crossing-the-line`, reusing the
  intention→action→reaction flow diagram) AND to be embedded on the conflict capability page
  when that page gets drafted.
- CTO hiring example: **new capability created** — `hire-and-onboard-the-right-people`
  (Company System, capability 8; capabilities 8+ renumbered to 9+). The example lives as a
  standalone linked tool (`senior-hire-process`). (Superseded 2026-07-04: Raise the Talent
  Bar retired entirely; capability renamed Hire & Raise the Talent Bar and now also owns the
  ongoing evaluation rhythm.)
- 30-60-90: added as **metadata-only draft tool** (`thirty-sixty-ninety`) — page content
  waits for more material from Ben.

**Still open:**

- ~~Where empowerment material lives~~ — RESOLVED 2026-07-04: org-level systems + culture in
  Make Ownership Stick, individual level in Build Leaders, Not Dependencies (Ben's framing:
  "org level: create systems + culture for ownership/accountability; individual level: same").
- Verbatim founder quotes (Q1) still missing for all five Lead Others capabilities. Pages
  DRAFTED 2026-07-04 with crafted composite hooks (all five marked here as "no verbatim
  quotes captured yet") — swap in real founder lines when Ben supplies them.

---

## AI voice memo (2026-07-04)

_(Feeds `embrace-the-ai-revolution` — currently a placeholder, cap 26, lead-the-game group.
Ben's own framing: "it's almost too simple to talk about AI as a separate capability" — the
material spans three altitudes: strategy, organisation, individual. Structure question open —
see end of this block. No verbatim founder quotes (Q1) captured yet.)_

**1. Strategy level:**

- Enormous money going into "AI for X" startups (AI for law, real estate, medicine…) promising
  to completely change how something is done. Whatever startup you have or are thinking of
  building, AI will be core to the strategy.
- The exercise Ben prescribes: go back to the **7 Powers** tool, extrapolate each power under
  AI, and ask what long-term value you're actually building. Then **traffic-light each power**
  — how is it changing? — and map **threats and opportunities** for your company going forward.
  Really imagine the world in 5 and 7 years and ask whether AI is helping or hurting you.
- AI makes you operationally far more effective and lets you build (make money) much faster —
  but some moats are diminished. Example: a complicated tech setup as a moat "will just go."
- On the "AI will eat SaaS" panic from a few months back: Ben doesn't think it's entirely true
  — even OpenAI still buys typical SaaS rather than building it themselves — but the moat that
  once existed there is now largely gone.
- Reference to include (verified 2026-07-04): the **Lean AI Native Companies Leaderboard**
  (leanaileaderboard.com, maintained by Henry Shi, ex-Super.com). Tracks lean AI-native
  companies (>$5M ARR, <50 employees, <5 years old) by revenue per employee, racing toward
  Sam Altman's prediction of the first **1-person billion-dollar company**. Top of the board:
  Cursor/Anysphere at roughly $40M revenue per employee. (Note: Ben described it as "a billion
  dollars per employee" — the actual framing is revenue-per-employee progress toward a
  one-person $1B company; page copy should use the accurate version.) The point it makes: we
  can scale dramatically more efficiently with AI.

**2. Organisational level:**

- TLDR: we should all be much more efficient at scaling our businesses now.
- Ben first-person (CTO experience): being a CTO now is completely different — "I don't need
  to hire as many engineers. I don't need to hire as many juniors, because AI does so many of
  those jobs."
- The discipline: before any hire, think aggressively about whether you actually need the hire
  or whether you need to increase the efficiency of the existing team. Default to efficiency;
  make growing headcount the option that has to justify itself.
- Cautionary story (anonymize per Granola rules — friend-of-a-friend's company): good team,
  good money, big B2B deals; Series A, ~$2M ARR, 40 people. Couldn't raise the next round —
  it just didn't look efficient enough. VCs increasingly judge whether you can **scale
  efficiently**.
- Push the leadership team: challenge every function — operations, product, tech, customer
  support — on how they'll use AI to build more efficiently.
- Tactic Ben recommends: **internal AI champions.** Find the people who are naturally most
  enthusiastic (can be junior), elevate them, name them AI champions. They take responsibility
  for trying the big new tools, act as internal AI consultants going department to department,
  and share the cool stuff with the whole team — spreads adoption through the company.

**3. Individual (and org) practice — the cadence:**

- Periodic review and implementation: once a month or once every few months, deliberately stop
  and deep-dive into what's changing in the industry, spend time exploring it, then choose
  what to implement.
- The failure modes on both sides: chase shiny things daily → permanently distracted; never
  look up → left behind.
- The cadence: **explore → trial → execute.** Works at the personal level and the company
  level.

**Proposed tools — AGREED with Ben 2026-07-04 and built same day:**

- `ai-strategy-stress-test` — traffic-light the 7 Powers under AI + 5/7-year threats &
  opportunities (direction tool; accredited as AI-era extension of Helmer's 7 Powers).
- `ai-adoption-cadence` — the explore/trial/execute loop on a monthly-to-quarterly rhythm
  (operating rhythm).
- `ai-champions` — the internal-champions playbook (operating template).

**Open structure questions — RESOLVED with Ben 2026-07-04 (implemented same day):**

- **One capability**, structured around the three altitudes (strategy / org / individual);
  rich page drafted in `capabilities-content.ts`. Hook is a **crafted composite** (no
  verbatim founder quotes yet — swap when Ben supplies real lines). Series A story kept
  anonymized/composite in the `why`.
- **Cross-references built:** `ai-strategy-stress-test` added to Chart the Path toolIds;
  efficiency-before-headcount folded into Design the Org and Hire & Raise the Talent Bar
  bullets; Find New Capital rich page got an investor-efficiency paragraph + capabilityRef
  to the AI capability.
- **Renumbered:** capability moved to number 20 (after Find New Capital, within
  lead-the-game); human-system capabilities shifted to 21–26. Nav-order quirk resolved.

**Still open:**

- Verbatim founder quotes (Q1) for the AI capability — page is live with a composite hook.

### Design the Org (`design-the-org`)

_(Captured from Ben's voice memo, 2026-07-04. Q1 has no verbatim founder quotes yet — hook will
be a crafted composite. Q5 failure modes are partly derived from Ben's do/don't guidance rather
than named war stories — firm up when he supplies them. This memo RESOLVES the "merge 3+5?"
question: Design the Org fills its own page without touching Make Ownership Stick's material
(ownership map, decision rights, alignment-autonomy) — the two stay separate, cross-linked.)_

1. (No verbatim quotes captured yet.)
2. Contrarian angles: the design question isn't "what does a proper org look like" — it's
   "what is the bottleneck for the company?" We know where we need to go (e.g. next funding
   round): is the blocker our ability to build, our ability to sell, or our ability to
   operationally deliver what we promised? What's the blocker now, and what will the blockers
   be over the next period? Structure around that. Also: in the age of AI, be conservative
   with hiring — VCs are looking for highly effective companies that operate at a higher
   level of efficiency than they could five years ago.
3. The typical journey: founder-led team → add some people → two layers of management →
   maybe three, growing and scaling over time. Ben's own startup (crypto neobank, ~40
   people): squads owning slices of the user journey — one team for banking & cards, one for
   crypto trading, one for onboarding & growth.
4. Chapters & Squads (NEW tool — Ben's favourite way of scaling a company, especially product
   & tech). Team Traffic Lighting (NEW tool — Ben: "let's build this out into a new tool").
   OKRs — "I love OKRs plus traffic lighting." Company Health Scorecard already linked.
5. (Partly derived.) Squadifying too early — ~40 people is where it earned its keep; before
   that it's overhead. Hiring ahead of the bottleneck / not conservative enough in the AI
   age. Complex, inconsistent structures — keep it as simple and consistent as possible
   (at ~30 people: three layers — C-level = founders + CPO etc., heads-of = head of growth,
   head of product etc., then employees).
6. "What is the bottleneck for the company?" (Ben called this the selling-point question —
   is it our ability to build, to sell, or to deliver?)
7. The Spotify squad & chapter model is the anchor framework (accredit: Henrik Kniberg &
   Anders Ivarsson, "Scaling Agile @ Spotify"). Plus Ben's cell-division picture: one big
   squad at first (osmosis), then above ~7 people it splits like a cell — partially split
   for a while, then fully — and you keep evolving the teams over time. (Ben asked: "meiosis
   — is that the right word?" → mitosis is the straight cell-split; use mitosis.)

**Other material in the memo (cross-links, not this page's spine):**

- C-level ownership: each founder/C-level owns one thing (CEO → sales, COO → operations &
  support, CTO → building), with VPs/heads reporting in.
- Ownership emphasis: clearly divided responsibilities + co-created team goals (from company
  goals) + the right accountability rituals → cross-link Make Ownership Stick and Build
  Leaders, Not Dependencies.
- The founder bounces between teams, especially early: customer support desperately needs
  help → founder dives in and FORCES it, moves to FORMING, leaves when it FLOWS
  independently. Traffic lighting tells you where to dive next. Reference Force → Form →
  Flow explicitly.
- Reference the operating rhythm: when do you meet the leadership team, etc.
- Hiring for the right seniority: hire someone good for at least the next two years, who can
  grow into the role and scale with the team → cross-link Hire & Raise the Talent Bar.

**Make Ownership Stick — additional capture (Ben, 2026-07-04):**

- Q1 REAL founder quote (use as the hook): **"Nothing gets done unless I personally make
  sure it gets done."**
- Q7 anchor: Lencioni, *The Five Dysfunctions of a Team* — Ben: "that talks about
  ownership." The top of the pyramid is the org-ownership failure chain: lack of
  commitment → avoidance of accountability → inattention to results. Tool already exists;
  now linked to this capability.
- Q3 before/after: Ben approved ALL THREE proposed composites (human to-do list / nobody
  owned the launch / escalation culture) — combined into the page's today/success lines.
  Composites, not a single real story; swap if a real one surfaces in his read-through.
- Q5: Ben confirmed all four proposed failure modes as personally watched (founder as the
  accountability system; shared ownership = no ownership; status theatre; owners in title
  only) — folded into three bullets on the page.
- Page DRAFTED 2026-07-04 — first page with a fully real hook quote.
- Memo 2 (real founder quotes across other pages) deferred: Ben will do a read-through
  pass in the future.
