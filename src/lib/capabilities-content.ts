/**
 * Rich content for capability detail pages.
 *
 * Always-present elements live in typed slots so every capability page keeps
 * the same spine: hook → beforeAfter → why → whatGoodLooksLike →
 * whereFoundersGoWrong → doNow. The optional `blocks` body sits between the
 * fixed sections and `doNow` for deep dives, starter questions and named
 * examples. Capabilities without an entry here fall back to the summary +
 * bullets rendering on the capability page.
 */

import type { ToolBlock } from "@/lib/tools-content";

export type CapabilityBeforeAfter = {
  today: string[];
  success: string[];
};

export type CapabilityAction = {
  action: string;
  note: string;
  toolId?: string;
};

export type CapabilityContent = {
  hook: string;
  beforeAfter: CapabilityBeforeAfter;
  why: string;
  whatGoodLooksLike: string[];
  whereFoundersGoWrong: string[];
  doNow?: CapabilityAction[];
  blocks?: ToolBlock[];
};

export const capabilitiesContent: Record<string, CapabilityContent> = {
  "map-the-destination": {
    hook:
      "I can rattle off our metrics in my sleep. But an investor asked me why this company deserves to exist, and I froze — I realised I'd never actually put it into words.",
    beforeAfter: {
      today: [
        "You can describe what you build, but not the deeper reason it has to exist.",
        "Ask three people on the team where you're heading in ten years and you get three different answers.",
        "The mission lives in your head, so every retelling of it comes out slightly different.",
      ],
      success: [
        "Problem, mission, vision and 10-year goal fit on one page you can recite cold.",
        "The team repeats the destination back to each other — in their own words, without you in the room.",
        "Every pitch, all-hands and hard call traces back to the same north.",
      ],
    },
    why:
      "This is the DNA of the company — the reason you'll work this hard, this long, for something this far away. The best versions are almost embarrassingly simple: Stripe's mission is to increase the GDP of the internet; JFK's 10-year goal was to put a man on the moon. Startups are inherently future-oriented, so this has to be aspirational — but it only works if it stays deeply connected to reality. Get it right and it becomes the essence of the company: the thing most founders should be able to state clearly, and connect everything they do back to.",
    whatGoodLooksLike: [
      "You can state the problem, mission, vision and 10-year goal in a single clear sentence each.",
      "The vision is genuinely aspirational — a world you'd stop working the day you reached it — and the mission is your specific role in getting there.",
      "The 10-year goal is audacious and measurable: a number that gets the blood racing, not a hedge.",
    ],
    whereFoundersGoWrong: [
      "Confusing the four — a mission that's really a product roadmap, a vision that's really next year's revenue target.",
      "A vision so safe it inspires no one, or a goal so vague no one could ever tell whether you hit it.",
      "Writing it once for the deck, then never using it — so it never shapes a hire, a pitch or a decision.",
    ],
    doNow: [
      {
        action: "Write the four in one sentence each",
        note: "Problem, mission, vision, 10-year goal. If any takes a paragraph, it isn't clear yet. Draft them on the one-pager and pressure-test with your cofounder.",
        toolId: "strategy-one-pager",
      },
      {
        action: "Fact-check your vision",
        note: "If you actually reached it, would you stop? If the answer is no, you've written a milestone, not a vision — push it further out and higher up.",
      },
      {
        action: "Put a number on the 10-year goal",
        note: "Vague ambition doesn't move anyone. Give it a figure that makes the team's pulse jump — and that you'd know unambiguously if you hit.",
      },
      {
        action: "Answer the six critical questions",
        note: "Use them as the interrogation that turns fuzzy intent into a destination the team can repeat.",
        toolId: "six-critical-questions",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "What problem, mission, vision and goal actually mean",
      },
      {
        kind: "diagram",
        diagramId: "strategy-destination",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Problem",
            note: "A solid, square fact about what's imperfect in the world today. Concrete enough that everyone nods.",
            example: "Language learning is slow, boring and inefficient.",
          },
          {
            title: "Vision",
            note: "The aspirational future where the problem is gone. If you were already there, you'd have nothing left to do.",
            example: "Oxfam's version: a world without poverty.",
          },
          {
            title: "Mission",
            note: "Your specific role in going from problem to vision — the contribution only you make. The small, relentless thing you do about it.",
            example: "Stripe's version: increase the GDP of the internet.",
          },
          {
            title: "10-year goal",
            note: "Where you want to be in a decade, with a number that gets the blood racing. Big, hairy, ambitious — and unambiguous.",
            example: "JFK's version: put a man on the moon.",
          },
        ],
      },
      {
        kind: "callout",
        text: "A composite of one I've seen work: a health-tech founder whose 10-year goal was that 1 in 10 of the world's clinicians would run their exams on the product. It puts a number on it, it's exciting, and it begins to answer the questions that define who you are.",
      },
      {
        kind: "heading",
        text: "Where you'll actually use this",
      },
      {
        kind: "list",
        items: [
          "In your storytelling — the through-line of every version of the story you tell.",
          "When you pitch: to investors, to a hire you're trying to win, to a partner.",
          "When you tell your team, for the hundredth time, what the mission is and why it matters.",
          "To guide yourselves and hold yourselves accountable — together with your values, this is the essence of the company.",
        ],
      },
      {
        kind: "callout",
        text: "It's what lets a founder stand up and say: \"I want to shout out someone who sat with a customer for an hour explaining how to run their exam. That's why we get up in the morning — our mission is 1 in 10 of the world's clinicians, and we get there one at a time.\" The destination is what turns a metric into a reason.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["be-storyteller-in-chief", "build-a-culture-that-compounds"],
      },
    ],
  },
  "chart-the-path": {
    hook:
      "We set OKRs every quarter, but if you asked my designer how her work ladders up to the raise, she couldn't tell you. Honestly, half the time neither could I.",
    beforeAfter: {
      today: [
        "Goals get set each quarter, but no one can trace their day-to-day work up to the next milestone.",
        "\"What good looks like\" for the raise is a number you picked, not one your investors would recognise.",
        "OKRs measure activity — tickets shipped, calls made — instead of outcomes that move the company.",
      ],
      success: [
        "One page connects every team's quarter to the next milestone, and back to the mission.",
        "You know what makes the next round a hell yes — because your investors, the market and you all defined it.",
        "Anyone in the company can explain how this quarter's work moves a company goal.",
      ],
    },
    why:
      "This is where you flip from the aspirational and long-term to what matters now. Most companies run on a rhythm, and for many that rhythm is the funding round — so the next milestone is what everything else has to serve. The discipline that connects it all is OKRs: objectives that are ambitious, key results that measure outcomes rather than inputs (Andy Grove's idea, made famous by John Doerr in Measure What Matters). Done well, the whole company fits on one page — and everyone, from support to design, can see how their work ladders up to the milestone and the mission.",
    whatGoodLooksLike: [
      "A clear picture of the next milestone and what \"good\" looks like — defined with your investors, your market and yourself, not in a vacuum.",
      "Goals that cascade: long-, medium- and short-term OKRs that each ladder up to the milestone.",
      "OKRs that measure outcomes, are ambitious and measurable, and that everyone can connect their own work to.",
    ],
    whereFoundersGoWrong: [
      "Setting the next-round bar alone, so your investors don't actually share your definition of success.",
      "OKRs that measure inputs and activity instead of outcomes — or vanity numbers no one can act on.",
      "A plan only the leadership team understands, so most of the company can't see how they contribute.",
    ],
    doNow: [
      {
        action: "Define what good looks like for the next milestone",
        note: "Ask your existing investors, independently, what would make the next round a hell yes. Line their answers up against your peers and the market, and your own view. Turn it into a concrete bar — e.g. 10,000 paying users, strong activation, CAC under €30.",
        toolId: "ceo-test",
      },
      {
        action: "Work backwards and cascade",
        note: "From that bar, set long-, medium- and short-term OKRs so each layer clearly leads to the next milestone.",
        toolId: "okrs",
      },
      {
        action: "Pressure-test every key result",
        note: "For each one ask: is this an outcome or an input? Rewrite anything that measures effort into something that measures result.",
      },
      {
        action: "Run the one-page test",
        note: "Can you explain the long-term goal and the pieces you need to get there, clearly and enthusiastically, on a single page? If not, it isn't sharp enough yet.",
        toolId: "strategy-one-pager",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Start with the next milestone",
      },
      {
        kind: "paragraph",
        text: "Begin with the next big milestone for the company. Often this is a funding round, because that's the rhythm you operate by — but it could be a launch, a new market, or profitability. Whatever it is, define what good looks like: ask your existing investors what would make the next round a hell yes, look at your peers and the competition, and ask yourselves. Fold those into one concrete picture, then work backwards and cascade it down.",
      },
      {
        kind: "diagram",
        diagramId: "strategy-path",
      },
      {
        kind: "heading",
        text: "Write OKRs that actually connect",
      },
      {
        kind: "list",
        items: [
          "Objective plus key results — a direction paired with the measures that prove you got there.",
          "Measure outcomes, not inputs: results that moved, not effort that was spent.",
          "Set them ambitious, keep them measurable, and make sure they make sense together.",
          "Cascade so everyone connects: support, design, engineering — each person can see how their work moves a company goal, toward the milestone, toward the mission.",
        ],
      },
      {
        kind: "callout",
        text: "The test of a good path: a founder should be able to express the most important things about the company in a single one-page document — the long-term goal, and the pieces you need to gather to get there — clearly, concisely and enthusiastically.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["map-the-destination", "make-ownership-stick"],
      },
    ],
  },
  "build-a-culture-that-compounds": {
    hook: "We've grown fast, but it doesn't feel like the same company anymore. New people don't get how we do things — and I can't put my finger on what changed.",
    beforeAfter: {
      today: [
        "Alignment depends on you being in the room.",
        "New hires take months to \"get it\" — and some never do.",
        "Values exist on a slide, but they don't change a single decision.",
      ],
      success: [
        "Your values do the aligning — the team holds the line when you're not there.",
        "People can feel the culture on day one, and hiring selects for it.",
        "A hundred people decide the way you would, without asking.",
      ],
    },
    why: "The one warning Peter Thiel gave Brian Chesky after funding Airbnb was \"don't fuck up the culture\" — because culture is what keeps a team aligned through hard times, and it erodes by default as you scale. Culture is not everyone being happy; it is the shared priorities and standards that make a hundred people decide the way you would, without asking.",
    whatGoodLooksLike: [
      "A small set of values that are genuinely unique to you — not words any company could claim.",
      "Values that show up in real decisions: what you build, who you hire, and what you refuse to tolerate.",
      "Culture you can feel on day one and that survives you being out of the room.",
    ],
    whereFoundersGoWrong: [
      "Generic values — \"transparency\", \"integrity\" — that commit you to nothing, because no one would ever claim the opposite.",
      "Values on the wall but absent from hiring, feedback and reviews, so they carry no real consequences.",
      "Treating culture as morale — keeping everyone happy — rather than alignment: keeping everyone pointed the same way when it is hard.",
    ],
    doNow: [
      {
        action: "Run the intern test on yourself",
        note: "Write the three words you'd want a new hire to say after day one — then the three they'd actually say today. The gap is your work list.",
      },
      {
        action: "Name one value in feedback this week",
        note: "Next time you praise or correct someone, tie it to a value by name. If no value fits, that's a finding too.",
      },
      {
        action: "Pressure-test each value",
        note: "Would a credible competitor ever claim the opposite? Strike or sharpen any that fail.",
        toolId: "values-deck",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Two questions to start",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "The intern test",
            note: "A new hire finishes their first day and says \"I love it here — three words I'd use are ___, ___, ___.\" What do you want them to say? What would they actually say today? The gap is the work.",
          },
          {
            title: "The hire post-mortem",
            note: "Which hires thrived and which didn't — and what was culturally, not technically, true of each? The pattern usually names a value you are already selecting for.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Make each value unique to you",
      },
      {
        kind: "paragraph",
        text: "A value only earns its place if it is distinctively true of you. The test: would a credible competitor ever claim the opposite? If not, it is table stakes, not a value.",
      },
      {
        kind: "callout",
        text: "\"Transparency\" is not a value — nobody argues for opacity. It only counts if you take it somewhere specific and costly, the way Netflix shared performance feedback openly. If your value would look identical on any startup's wall, sharpen it until it commits you to something.",
      },
      {
        kind: "heading",
        text: "Embed the values or lose them",
      },
      {
        kind: "list",
        items: [
          "Hiring: screen and debrief candidates explicitly against the values, not just the skills.",
          "Feedback: reference the values by name when you praise and when you correct.",
          "Performance reviews: score behaviour against values alongside role outcomes, so culture carries real consequences.",
          "Rituals and stories: repeat the moments where someone lived a value at a cost — that is what makes it believable.",
        ],
      },
    ],
  },
  "make-the-right-calls": {
    hook:
      "When we were four people I just did the work. Now half my week is calls I can't take back — do we hire her, do we bet on A or B — and I catch myself making them exhausted, on the fly, between two other meetings.",
    beforeAfter: {
      today: [
        "The biggest calls get made in the cracks between meetings, on whatever energy is left over.",
        "The same decision keeps coming back because no one's sure whose it was — or whether it's actually closed.",
        "You're still in every call, so the trivial ones drain you and the important ones wait on you.",
      ],
      success: [
        "You spend real time on the decisions you can't undo, and move fast on the ones you can.",
        "Every big call has an owner and a moment it's settled — no zombie debates.",
        "You make your few high-stakes calls rested and deliberate, not reactive and depleted.",
      ],
    },
    why:
      "Jeff Bezos says a senior executive is paid to make a small number of high-quality decisions, not a thousand small ones: \"If I make three good decisions a day, that's enough\" — and Warren Buffett reckons he's good if he makes three good decisions a year. As you scale, your job shifts from doing the work to making the calls, and the weightiest ones — who to hire, which strategy to back — quietly make or break the company. That's exactly why Bezos guards his sleep and does his hard thinking before lunch: a decision made at 70% capacity costs far more than a task done at 70%. The all-nighter that shipped a module when you were three people is a bad trade once your real output is judgement.",
    whatGoodLooksLike: [
      "You match rigour to stakes: reversible calls get made quickly, irreversible ones get real time and room for dissent.",
      "Every significant decision has a clear owner and a clear point at which it's closed — so it stops getting re-litigated.",
      "Your calendar protects time to think, and the big calls get made in good health, not on fumes.",
    ],
    whereFoundersGoWrong: [
      "Spending the same energy on every decision, so a hundred small calls crowd out the handful that actually matter.",
      "Chasing full consensus — waiting for everyone to agree instead of getting aligned enough to commit and move.",
      "Deciding while depleted: pulling the all-nighter, then betting the quarter the next bleary-eyed morning.",
    ],
    doNow: [
      {
        action: "Block time for your biggest call this week",
        note: "Put a recurring strategic-thinking slot on the calendar and give this week's one irreversible decision real, undistracted time. My own biggest regret was being too busy to ever step back and think.",
      },
      {
        action: "Sort this week's decisions into one-way and two-way doors",
        note: "Reversible calls: decide fast or delegate them. Irreversible calls: slow down and spend your time there. The point is to stop treating them the same.",
        toolId: "ownership-map",
      },
      {
        action: "Ask for dissent out loud, then get commitment",
        note: "Before you close the next big call, ask the quietest person what they'd push back on. Then aim for 80% alignment and 100% commitment — including from those who disagreed.",
      },
      {
        action: "Run one stuck decision through the Six Hats",
        note: "Take a call that's going in circles and walk the group through the six modes one at a time. It usually surfaces the missing option or the unchallenged fear.",
        toolId: "six-thinking-hats",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Match the time to the stakes",
      },
      {
        kind: "paragraph",
        text: "Correlate the weight of a decision with the time you give it. Small, reversible calls — two-way doors you can walk back through — should be fast, or delegated outright. The big, irreversible ones deserve the opposite: space, options and real thinking. The failure mode is treating them all the same, so the trivial many drown out the vital few.",
      },
      {
        kind: "callout",
        text: "One of my own biggest regrets as a founder was being so busy that I never blocked time to step back and look at the whole thing. Protect a recurring slot for strategic thinking the way you'd protect an investor meeting — the decisions that shape the company rarely get made in the gaps between Slack messages.",
      },
      {
        kind: "heading",
        text: "Mindsets that make calls better",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Strong opinions, weakly held",
            note: "Commit to a clear view so the team has something concrete to react to — but hold it loosely enough to change your mind the moment better evidence turns up. A firm opinion moves people; the willingness to drop it keeps you honest.",
          },
          {
            title: "80% alignment, 100% commitment",
            note: "You'll never all agree on everything, and a company pulling in different directions is a nightmare. Get aligned enough — roughly 80% — then everyone commits fully, including the people who argued the other way. Disagree and commit.",
          },
          {
            title: "Give dissent room before you close",
            note: "Make sure everyone had a real chance to raise concerns and push back before the decision lands. Silence isn't agreement — it's usually the objection you'll hear later, at a worse time.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Get the company aligned enough to move",
      },
      {
        kind: "paragraph",
        text: "Aim for aligned autonomy: you define the problem and the why, and teams own the how. That's what lets a decision hold once it leaves the room — people know which direction to run without checking back on every call. The grid below is the quick diagnostic for whether you have enough shared direction and enough decision freedom.",
      },
      {
        kind: "diagram",
        diagramId: "alignment-autonomy",
      },
      {
        kind: "heading",
        text: "Frameworks worth reaching for",
      },
      {
        kind: "list",
        items: [
          "Six Thinking Hats — when a call is going in circles or one voice dominates, look at it from six angles one at a time.",
          "Double Diamond — when you might be solving the wrong problem, widen before you narrow: find the right problem, then the right solution.",
          "First Principles Thinking — when received wisdom is boxing you in, strip the problem back to what's actually true and reason up from there.",
        ],
      },
      {
        kind: "toolRef",
        toolIds: ["six-thinking-hats", "double-diamond", "first-principles-thinking"],
      },
      {
        kind: "heading",
        text: "Run the decision: create, collaborate, communicate",
      },
      {
        kind: "paragraph",
        text: "Be explicit about which mode a decision is in. Create is the thinking you do to form a view. Collaborate is inviting the few people who should shape it to give input and dissent — while it's still open. Communicate is sharing the settled decision and the why with everyone who has to act on it. In a company of around thirty, most big calls run: founders and heads collaborate, and once that's done, it gets communicated to the team.",
      },
      {
        kind: "diagram",
        diagramId: "three-cs-decision",
      },
      {
        kind: "callout",
        text: "You don't only decide alone. Two sources worth pulling in: your personal board, for outside perspective on a call you're too close to, and your Super Self — asking what your ten-out-of-ten version would do here, and what's stopping you doing it now.",
      },
      {
        kind: "toolRef",
        toolIds: ["three-cs-decision", "personal-board", "super-self"],
      },
    ],
  },
  "manage-my-energy-system": {
    hook:
      "My calendar is full of everyone else's priorities. By Thursday I'm running on caffeine, and the work I actually love hasn't happened in weeks.",
    beforeAfter: {
      today: [
        "The week is planned to 100%, so every surprise gets paid for in evenings.",
        "Sleep, exercise and friends are the first things cut when pressure rises.",
        "The work that used to give you energy has quietly disappeared from your calendar.",
      ],
      success: [
        "You plan 80% of the week and let the inevitable chaos fill the rest.",
        "Each of your seven core needs has a cadence — and most of them actually happen.",
        "Deep work owns your mornings, and one slot a week is reserved for the work you love.",
      ],
    },
    why:
      "Energy is not a mood — it is a system with inputs you can design. The anchor here is founder coach Dave Bailey's core-needs check-in: exercise, eating, sleep, people, solitude, learning and real time off, where each need funds a different capacity. Exercise buys willpower, sleep buys patience, solitude buys clarity, vacation buys perspective. That is why you can't substitute one for another — and why cutting them under pressure is a loan against exactly the capacities the pressure will demand.",
    whatGoodLooksLike: [
      "Weekly planning starts with how much — capacity honestly assessed, slack deliberately left — before deciding what goes in.",
      "The seven core needs each have a cadence you actually track: three workouts, three meetups, three walks a week.",
      "The shape of the day matches your energy: planning first thing Monday, deep work before lunch, meetings after it.",
    ],
    whereFoundersGoWrong: [
      "Planning 100% of the week. The unplanned 20% always arrives, and it collects from your evenings and weekends.",
      "Cutting the needs first under pressure — sleep, exercise, friends — precisely the inputs that fund willpower and patience when you need them most.",
      "Treating energy-giving work as an indulgence to delegate away. If you're a technical founder who loves to code, the weekly coding afternoon isn't a guilty pleasure — it's fuel.",
    ],
    doNow: [
      {
        action: "Cut next week's plan to 80%",
        note: "Open next week's calendar and remove or shrink commitments until a fifth of it is genuinely empty. The random 20% is coming either way — decide now that it lands in slack, not in your evenings.",
      },
      {
        action: "Score your seven needs out of 10",
        note: "Two minutes: exercise, eating, sleep, friends & family, solitude, training, vacation. The two lowest scores are next week's calendar edits.",
        toolId: "seven-founder-needs",
      },
      {
        action: "Move one meeting out of tomorrow morning",
        note: "Reclaim the morning for deep work and push the check-ins and quick calls to after lunch. One swap is enough to feel the difference.",
      },
      {
        action: "Book the slot for the work you love",
        note: "If coding charges you, one afternoon a week, recurring. Treat it like an investor meeting: it doesn't move.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Plan the week: how much, then what",
      },
      {
        kind: "paragraph",
        text: "Most founders plan what goes into the week and never ask how much should. Decide your real capacity first, then fill it — and leave deliberate slack, because the interruptions are not an exception, they are a known quantity.",
      },
      {
        kind: "callout",
        text: "\"I only plan 80% of my week. The other 20% gets filled with random stuff whether I plan it or not — this way it doesn't cost me my evenings.\" — Series A founder",
      },
      {
        kind: "paragraph",
        text: "Then look at what fills it, through two lenses. Leverage: is this work only you can do? (That is its own capability — Operate at the Right Altitude.) And balance: does the week contain work that gives energy back, not just work that matters? Optimising every hour for leverage until nothing in the week charges you is how high performers hollow themselves out.",
      },
      {
        kind: "heading",
        text: "Match the day to your energy",
      },
      {
        kind: "list",
        items: [
          "Monday, first thing: plan the week before the week plans you.",
          "Mornings: deep work, while the tank is full.",
          "Afternoons: meetings, quick wins and the short-term dopamine work.",
          "Guard the boundary: a 9am \"quick call\" costs a full deep-work block, not thirty minutes.",
        ],
      },
    ],
  },
  "build-resilience-and-recovery": {
    hook:
      "I know I'm in a bad place when every Slack ping makes me flinch. I'm wired all day, and the only off switch I've found is a drink in the evening.",
    beforeAfter: {
      today: [
        "Every week runs you: reactive, wired, no recovery in sight.",
        "A conference or a fundraise tips you over — and you stay tipped for weeks.",
        "You're making quarter-defining decisions at 70% capacity and calling it commitment.",
      ],
      success: [
        "You know your two states, and you can name what tips you from one into the other.",
        "A daily burnout score triggers a pre-agreed plan, not a negotiation with yourself.",
        "Sprints are deliberate and bounded, with recovery booked before the sprint starts.",
      ],
    },
    why:
      "This one is personal. When I had cancer, I was answering emails from the hospital bed within a couple of days — I never gave myself a chance to recover, because it never occurred to me that recovery was part of the job. It is. As the company grows, your work shifts from doing things to making calls, and decisions have a far lower tolerance for a depleted founder than tasks do: choosing the wrong quarter focus at 70% capacity costs more than any week of lost output. If you crash out, it is a disaster for the company — which makes managing your own energy close to job number one.",
    whatGoodLooksLike: [
      "You can describe your good equilibrium and your bad one in concrete behaviours — and you know which one you're in today.",
      "Known triggers — travel, conferences, fundraising — come with counterweights planned and booked in advance.",
      "Recovery is scheduled like any other commitment: the long run, the offline weekend and the quarterly vacation actually happen.",
    ],
    whereFoundersGoWrong: [
      "Treating recovery as a reward for finishing. The work never finishes, so the recovery never comes.",
      "Running the startup as one long sprint. Continuous sprinting isn't intensity — it's a slow crash with a delay on it.",
      "Keeping the struggle private from cofounders, so nobody can catch the slide into bad equilibrium until it shows up in your decisions.",
    ],
    doNow: [
      {
        action: "Score your burnout right now, out of 10",
        note: "Ten seconds. Then add it to your daily habit stack so tomorrow's score exists too.",
        toolId: "habit-stacks",
      },
      {
        action: "Book one piece of recovery before Friday",
        note: "The long run, the spa day, the offline weekend — in the calendar, not on the someday list.",
      },
      {
        action: "Text your cofounder your top trigger",
        note: "One message: \"when X stacks up, I slide — if you see it, call it.\" Accountability starts that simply.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Two stable states",
      },
      {
        kind: "paragraph",
        text: "Resilience gets easier once you see that you have two equilibria, and both are self-reinforcing. In the good one, planning, real breaks and exercise feed each other. In the bad one, reactivity, stress and drinking to switch off feed each other just as well — which is why you don't drift back to good on your own. The work is knowing what pushes you out of the good state, and having deliberate moves that pull you back.",
      },
      {
        kind: "heading",
        text: "Make it measurable",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Score it daily",
            note: "Add a burnout score out of 10 to your habit stack. Ten seconds a day is enough to catch the slide early.",
          },
          {
            title: "Pre-agree the thresholds",
            note: "Above 8: stop working — take at least a half day. Between 6 and 8: keep going, but the weekend is fully offline, no email, no laptop. Decide this while you're well; you won't decide it well when you're not.",
          },
          {
            title: "Enlist your cofounder",
            note: "Share your triggers and your thresholds. Let them ask \"did you book that vacation?\" with the same weight as \"did you ship that project?\".",
          },
        ],
      },
      {
        kind: "callout",
        text: "A startup is neither a marathon nor a sprint — it's a marathon with periods of sprinting. Sprinting is sometimes exactly right: a critical launch, a fundraise. Sprinting continuously is just burnout on a payment plan.",
      },
    ],
  },
  "build-my-growth-system": {
    hook:
      "I don't really have a system for my own growth. I just hope each crisis teaches me something.",
    beforeAfter: {
      today: [
        "Each hard week becomes the next lesson you scramble to absorb.",
        "You take in advice, but nothing organizes what changes you.",
        "The same growth edge keeps coming back.",
      ],
      success: [
        "You have a deliberate system: coach, peers and a personal board.",
        "You know the growth edge that matters now.",
        "Insight turns into practice through feedback loops and habits.",
      ],
    },
    why:
      "A startup may be the most intense professional growth opportunity you ever get, but opportunity alone does not guarantee growth. Bill Campbell is the anchor here: the leaders of Apple, Google and Intuit still used a coach because raw intelligence does not give you distance from yourself. Founder growth compounds when support, reflection and accountability are designed on purpose.",
    whatGoodLooksLike: [
      "A deliberate mix of coach, peers, personal board members, friends and family, with clarity on what each source gives you.",
      "A few trusted inputs such as books, podcasts and feedback loops that sharpen the current edge instead of becoming background noise.",
      "Weekly and monthly rhythms that turn reflection into practice, so growth lives in behaviour rather than aspiration.",
    ],
    whereFoundersGoWrong: [
      "Treating consumption as growth: more books, more podcasts, more notes, no system.",
      "Building a support network around prestige or convenience rather than truth, challenge and real perspective.",
      "Having good insights but never turning them into reps, so the same lesson comes back in a different disguise.",
    ],
    doNow: [
      {
        action: "Name your current growth edge in one sentence",
        note: "Not \"get better at leadership\" — the specific behaviour or pattern that keeps costing you.",
      },
      {
        action: "List the five people you actually learn from",
        note: "Next to each: what you ask of them today, and what you should ask. That's the first draft of your personal board.",
        toolId: "personal-board",
      },
      {
        action: "Put one rep in next week's calendar",
        note: "A habit stack, a feedback moment or a reading block tied to the edge. Growth that isn't scheduled loses to whatever is.",
        toolId: "habit-stacks",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "The ingredients for a growth system",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Coaching",
            note: "A coach gives you a place to pause, zoom out, ask what really matters, and be held accountable to the things you say are important.",
          },
          {
            title: "Peers",
            note: "A personal board is not just famous founders. It is a few trusted people who challenge your thinking, widen your lens and help you grow faster than you would alone.",
          },
          {
            title: "Family & friends",
            note: "Some of the best board members are not operators at all. They are people you respect for their joy, steadiness, courage or perspective when life and company both get hard.",
          },
          {
            title: "Books & podcasts",
            note: "Keep learning from strong inputs, but choose them deliberately. The point is not volume; it is exposing yourself to ideas that sharpen the growth edge you are working on now.",
          },
        ],
      },
      {
        kind: "heading",
        text: "How you really make progress",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Reflect",
            note: "Gather insight from feedback, books, conversations, wins, lowlights and whatever keeps repeating. The raw material for growth is already around you if you are paying attention.",
          },
          {
            title: "Identify",
            note: "Name the real growth edge underneath the noise. Do not settle for \"I want to be better\"; get specific about the behaviour, pattern or blind spot that most needs work.",
          },
          {
            title: "Practice",
            note: "Install a repeatable system that changes the week: a habit stack, a feedback rhythm, a reading block, a check-in, or a concrete rep you can actually keep.",
          },
        ],
      },
      {
        kind: "callout",
        text: "You can have all the conversations and all the books you want, but it does not matter unless they affect you. If feedback is the edge, the work is not the intention to improve. The work is installing the system: every Tuesday and Thursday, acknowledge two people well; after a tense meeting, write the feedback before the day ends. Growth compounds when it becomes behaviour.",
      },
    ],
  },
  "be-storyteller-in-chief": {
    hook:
      "When I pitch, I walk them through what we've built and I can feel the room staying cold. I don't know what story I'm supposed to tell — there's nothing that exciting yet.",
    beforeAfter: {
      today: [
        "You present facts and features, and watch investors stay polite and unmoved.",
        "Your best candidate nodded along, then took the corporate offer — nothing you said beat the pay cut.",
        "All-hands is a status update: the team leaves informed, not inspired.",
      ],
      success: [
        "You raise on the future you paint, not just the traction you have.",
        "Great people take pay cuts to join, because they want to be part of the story.",
        "The team retells your story to each other — alignment without you in the room.",
      ],
    },
    why:
      "My friend Dave calls the founder the Storyteller-in-Chief, and he's right. When you raise your first money, angels aren't investing in what you have today — they're investing in the story: the future you're painting and you as the protagonist in it. That's not a trick; it's the nature of the business. There is always a delta between what you have and the story you tell, and closing that delta is literally how a startup creates value. You'll tell the story everywhere — to your team to keep them focused, to investors when you raise, to hires who need a reason to walk away from a bigger salary.",
    whatGoodLooksLike: [
      "One core story — why you started, what you're changing in the world — that you can tell in your sleep, adapted for team, candidates, customers and investors.",
      "A practice rhythm: every all-hands carries a story, and every pitch, interview and update is treated as a rep.",
      "A repertoire that's always in stock: the mission, a customer moment from this month, and a teammate worth shouting out.",
    ],
    whereFoundersGoWrong: [
      "\"I don't know which story to tell.\" Bullshit — there's always a customer from this week, a teammate who delivered, the mission itself. Going quiet is the only wrong choice.",
      "Reporting instead of storytelling: all-hands as metrics readouts that inform everyone and move no one.",
      "Saying it once and assuming it landed. People need to hear things more than once — over-communication beats under-communication every time.",
    ],
    doNow: [
      {
        action: "Tell your origin story out loud tonight",
        note: "To a mirror, or record 90 seconds on your phone and watch it back once. You'll hear exactly where the story goes flat.",
      },
      {
        action: "Draft one three-ingredient story",
        note: "Fifteen minutes: the mission, one customer moment from this month, one teammate worth naming. That's your next all-hands opener.",
      },
      {
        action: "Put a story slot on the all-hands agenda",
        note: "A standing five minutes, at least one story every two weeks — and rotate the teller so it isn't always you.",
      },
      {
        action: "Rewrite the first paragraph of your next investor update as a story",
        note: "Future first, metrics second. The update is a monthly rep for the investor version of your story.",
        toolId: "investor-update",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "The three-ingredient story",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Philosophy",
            note: "Start with the big picture: the mission and why it matters. \"Our goal is to democratise wealth growth for the whole world\" — then a few lines on why that's worth someone's career.",
          },
          {
            title: "A customer",
            note: "Connect it to a real interaction. The friend at a party who said \"before you, I didn't even think about investing — now it feels natural and I'm in control of my money.\" Impact in the customer's own words.",
          },
          {
            title: "The team",
            note: "Close with a person. Shout out the teammate who pushed back when we were heading the wrong way, kept everyone on the same page and still delivered on time — and tie it to a company value by name.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Two techniques that carry any story",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Sandwich it",
            note: "\"Today I'm going to tell you about A, B and C.\" Tell them. \"Today I've told you about A, B and C.\" It feels repetitive from the stage; from the audience, it's the version they remember.",
          },
          {
            title: "Ask, then answer",
            note: "\"So what's the most important thing for us to focus on next quarter?\" A rhetorical question tells the room a section just ended — and pulls their attention into the next one.",
          },
        ],
      },
    ],
  },
  "manage-capital-and-stakeholders": {
    hook:
      "I had a really bad relationship with my main investor in my first startup.",
    beforeAfter: {
      today: [
        "Board meetings feel like reporting upward, so you walk in tense and half-defensive.",
        "The first real conversation about a hard decision happens in the room, when everyone's posturing has already started.",
        "Investor updates go out as summaries, with no clear ask and no reason for people to feel part of the journey.",
      ],
      success: [
        "KPIs, highlights and challenges land before the meeting, so everyone starts from the same picture.",
        "The key investors have been pre-synced, the contentious points have already been aired, and the room can work the real decision.",
        "Every update gives stakeholders a way to help and enough founder magic that they want to stay close.",
      ],
    },
    why:
      "This one comes from scar tissue. In my first startup, our CEO stepped down soon after the round and the trust with our lead investor never really recovered. In an early-stage company, investors are betting on the founder as much as the numbers, so when trust breaks the relationship gets heavy fast. That's why this capability matters: board meetings and investor updates are not admin. They're how you keep belief, context and influence working for the company instead of against it.",
    whatGoodLooksLike: [
      "A board pack sent a few days early with KPIs first, then highlights, challenges and the decisions that matter.",
      "A pre-sync cadence that surfaces what investors want to discuss and socializes any controversial topic before it becomes a room-wide debate.",
      "Stakeholder communication that includes a clear ask, a reminder of what the company is now, and enough story or texture to make people want to help.",
    ],
    whereFoundersGoWrong: [
      "Slipping into employee mode and treating investors like your boss, which turns the meeting into a defensive report instead of a conversation you are steering.",
      "Saving the contentious decision for the board meeting itself, so people take positions in public before you've had the useful one-to-one conversations.",
      "Sending flat updates with no CTA, no refresher on the company, and nothing human or visual for busy angels to latch onto.",
    ],
    doNow: [
      {
        action: "Decide what the next board meeting is for",
        note: "Write one line before you build the deck: do you want honest discussion on an open question, or approval for a plan you've already shaped?",
      },
      {
        action: "Send the pack 72 hours early",
        note: "Lead with KPIs, highlights, lowlights and the big decisions so the meeting starts from shared reality, not slide-reading.",
        toolId: "board-pack",
      },
      {
        action: "Map and pre-sync the key voices",
        note: "Identify the one or two investors the room tends to orbit, ask what they most want to cover, and road-test anything controversial before the meeting.",
        toolId: "relationship-design-canvas",
      },
      {
        action: "Add a CTA and one visual to the next investor update",
        note: "Close with the specific help you want, then include a team, product or customer photo so people feel the company, not just the metrics.",
        toolId: "investor-update",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Two questions before any board meeting",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "What do I want from this room?",
            note: "Be conscious about the job of the meeting. An honest debate and a smooth approval path are different outcomes, and they require different prep.",
          },
          {
            title: "Who actually shapes the room?",
            note: "Boards are rarely flat democracies. Most investors converge around one or two influential voices, so know where the center of gravity is.",
          },
          {
            title: "What needs to be discussed one-to-one first?",
            note: "If a choice is likely to be contentious - partner A vs partner B, a leadership change, a reset in plan - take it private before you take it public.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Remember: they are not your boss",
      },
      {
        kind: "paragraph",
        text: "Investors have capital, influence and a real stake in the company, but they are not your line manager. Treat their views as important inputs, not operating authority. That mindset shift matters because it lets you stop performing for the room and start managing it.",
      },
      {
        kind: "callout",
        text: "Stakeholders want more than a spreadsheet. They want to feel the momentum, the team and the texture of the thing they're backing. If you're in person, let them feel the office or the product. If you're remote, use stories, specifics and strong visuals. Sprinkle a little founder magic.",
      },
    ],
  },
  "face-my-shadow": {
    hook:
      "I can usually see the pattern afterwards. In the moment, though, it still feels like the safest move.",
    beforeAfter: {
      today: [
        "Under pressure, the same reactions keep showing up: control, people-pleasing, criticism, avoidance, rescuing.",
        "A part of you still believes the old script keeps you safe, even when it now creates tension, delay or distance.",
        "You explain the pattern as personality instead of seeing it as an adaptation you can work with.",
      ],
      success: [
        "You can name the story or part that is taking over before it runs the meeting.",
        "You understand what that part is trying to protect, so you respond with less shame and more choice.",
        "Old patterns still visit, but they stop driving your leadership by default.",
      ],
    },
    why:
      "Positive Intelligence gives a helpful starting point here: saboteurs begin life as guardians. That is the key. The behaviour is not random or proof you are broken; it solved something once. A people-pleasing response may have been brilliant in a chaotic home because it kept the peace. Years later, the same move shows up in the boardroom and calls itself diplomacy while quietly eroding trust. The work is not to reject that part of you or declare war on it. It is to make the pattern conscious, thank it for the job it once did, and decide whether it still serves the life and company you are building.",
    whatGoodLooksLike: [
      "You can name your recurring shadow patterns and the situations that tend to trigger them.",
      "You can see the strength underneath the pattern: the care beneath people-pleasing, the standards beneath criticism, the agency beneath control.",
      "You have a repeatable interruption: notice, name, choose, and repair if needed.",
    ],
    whereFoundersGoWrong: [
      "Treating the shadow as identity: \"that's just how I am\" instead of a pattern that formed for a reason.",
      "Swinging to the opposite extreme and trying to amputate a real strength instead of finding its healthier expression.",
      "Using insight as a substitute for reps: taking the quiz, having the conversation, then never building the daily noticing muscle.",
    ],
    doNow: [
      {
        action: "Take the Saboteurs Quiz",
        note: "Use the official Positive Intelligence assessment as a naming device, not a diagnosis. Notice the Judge plus the two or three accomplices that most often hijack you.",
        toolId: "saboteurs-quiz",
      },
      {
        action: "Map one overused strength",
        note: "Pick a genuine strength and trace how too much of it becomes your pitfall, what balancing quality it needs, and what you attack in others when you are triggered.",
        toolId: "strength-in-shadow",
      },
      {
        action: "Run a Council of Me meeting",
        note: "List three versions of you — people-pleaser you, control-freak you, backpacker you — invite them into the same room, and ask what each is trying to protect.",
        toolId: "council-of-me",
      },
      {
        action: "Install one noticing rep",
        note: "For the next week, review the last workday and mark where you got overly critical, avoidant or controlling. If you catch it live, do the opposite within the hour: encourage, appreciate, ask the question, or loosen the grip.",
        toolId: "habit-stacks",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Old protection, new cost",
      },
      {
        kind: "paragraph",
        text: "A lot of shadow work gets easier once you see the pattern as old protection. Maybe you became a people-pleaser when the adults around you were volatile and keeping the peace felt essential. Maybe control became your way of staying safe in chaos. Back then, the pattern worked. The issue is not that it existed; the issue is that it stayed in charge long after the original danger passed.",
      },
      {
        kind: "callout",
        text: "If a pattern feels extreme, traumatic or destabilising, work with a therapist rather than trying to self-coach your way through it from a website.",
      },
      {
        kind: "heading",
        text: "Spot the loop",
      },
      {
        kind: "paragraph",
        text: "A lot of shadow patterns run as loops, not one-off incidents. You set an unrealistic expectation. Sometimes you meet it once and quietly decide that now this should always be normal. Sometimes you miss it, feel the frustration, and reach for a coping move — a drink, numbing out, avoidance, more self-criticism — which makes the next miss more likely. The win is seeing the loop early enough to step out of it.",
      },
      {
        kind: "image",
        src: "/images/os/expectation-loop.svg",
        alt: "A loop showing unrealistic expectations leading either to raising the bar again or to frustration and coping mechanisms that feed the cycle.",
      },
      {
        kind: "callout",
        text: "Exit points are simple but not easy: make the expectation realistic, name the frustration before it hardens, and choose a cleaner coping move while the pattern is still small.",
      },
      {
        kind: "heading",
        text: "Build the noticing muscle",
      },
      {
        kind: "paragraph",
        text: "This is a reps game. First the pattern runs unconsciously. Then you notice it after the fact. Then you catch it in the moment and choose differently. Eventually the healthier move gets easier. That is the whole arc: from unconscious incompetence, to conscious incompetence, to conscious competence, and finally to a more natural response.",
      },
      {
        kind: "list",
        items: [
          "Unconscious incompetence: the pattern runs you and you barely notice.",
          "Conscious incompetence: you spot it, often after the fact.",
          "Conscious competence: you catch it earlier and choose a better move.",
          "Unconscious competence: the healthier response starts to feel more like you.",
        ],
      },
    ],
  },
  "build-a-life-worth-scaling-for": {
    hook:
      "Someone asked me what all the sacrifice was for — the health, the friendships I'd let slide. All I had was \"Champagne at 40.\" And when I really looked at it, I couldn't tell you what that even looks like.",
    beforeAfter: {
      today: [
        "You're trading your health, your relationships and your hobbies now for a payoff you keep calling \"later\".",
        "Ask what \"later\" actually looks like and you go blank — it's a feeling, not a picture.",
        "Achievement is the only setting you've ever run, so you never stopped to ask what you're saying no to.",
      ],
      success: [
        "You can describe the life you're building toward in vivid, specific detail — the day, the people, the feeling.",
        "You've pulled concrete pieces of it into this year, instead of banking the whole thing on 40.",
        "You know which parts of founding genuinely serve you — and you spend more of your time there on purpose.",
      ],
    },
    why:
      "The founder who told me \"Champagne at 40\" couldn't describe the life he was sacrificing everything for. When we pulled it apart, two things fell out fast: he'd probably still be working at 40, just differently — more advisory — and he was giving up far too much today for a picture that didn't survive a second look. \"I work hard now for a better life later\" sounds like discipline, but it's usually a deferral you never examine — and most of what you're waiting for, you already have some access to. The point of the wealth, the exit, the yacht, was never the thing itself; it's the relationships, the time and the freedom underneath it. You don't need the yacht to start building those.",
    whatGoodLooksLike: [
      "You can picture your five-years-out life in concrete detail — where you wake up, who's there, how you spend the day, how much you're still working.",
      "At least one piece of that future is already in this year's calendar: the yearly gathering, the protected hobby, the relationship you stopped deferring.",
      "You've named the parts of founding that actually serve you — growth, mission, changing the lives of people around you — and you steer toward them.",
    ],
    whereFoundersGoWrong: [
      "Deferring the whole of life to a future win, because achievement is the only story you've ever run — the overachiever on autopilot.",
      "Sacrificing the needs first — health, relationships, hobbies — as if they're just the price of the ticket, when they're most of the destination.",
      "Chasing a future state you've never actually examined, so you can't see the parts of it you could be living right now.",
    ],
    doNow: [
      {
        action: "Do the five-year visualisation",
        note: "Close your eyes and walk through an ordinary day five years out: where you wake up, who's next to you, how the day feels, whether and how you're still working, your health, your money. Watch it, don't design it.",
        toolId: "live-it-today",
      },
      {
        action: "Pick one piece and live it this year",
        note: "Take the most vivid part of that future and find the cheap version now. Can't buy your parents a house? Rent an Airbnb once a year and gather the people you love. Book it.",
      },
      {
        action: "List your founder-years no's and yes's",
        note: "Two columns: what am I saying no to for these years, and what am I saying yes to? Be honest about which no's you actually chose and which you drifted into.",
      },
      {
        action: "Name the part of founding that serves you",
        note: "Growth, mission, the people whose lives you're changing — pick the one that's genuinely yours and put more of next week there.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "The overachiever's trap",
      },
      {
        kind: "paragraph",
        text: "Founders are intense people — a lot of us neurodivergent, most of us wired as achievers, the Enneagram Type 3s and the Type 1s. Achievement has been rewarded your whole life, so you run it on autopilot: the next milestone, the next round, the next win. The trap isn't working hard. It's never stopping to ask what you're trading for it, because the trade has always paid off before. These founder years are a specific chapter with specific costs — name them, or they get charged to you silently.",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "What am I saying no to?",
            note: "The health, the relationships, the version of a normal life you're postponing. Write the real list. Some of it is a genuine, chosen trade; some of it you drifted into without deciding.",
          },
          {
            title: "What am I saying yes to?",
            note: "The parts of this you'd choose again — the growth, the freedom, the mission. This is the list you want to protect and lean into, not just endure.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Build your own yacht",
      },
      {
        kind: "paragraph",
        text: "A very common founder dream is \"I'll provide for the people I love — buy my parents a house.\" You might not have the money for the house today. But you almost certainly have enough to rent an Airbnb once a year and bring your closest friends and family together — and start living the thing the house was really for. That's the move: don't wait for the destination to start living what the destination is for.",
      },
      {
        kind: "callout",
        text: "This is the \"build your own yacht\" idea (from The Real Estate God's essay of that name): a billionaire's yacht buys relationships, time and status — but you don't need the yacht to get what the yacht is for. You can start building that now, at a fraction of the cost.",
      },
      {
        kind: "heading",
        text: "Which parts of founding actually serve you?",
      },
      {
        kind: "paragraph",
        text: "The flip side of naming the cost is getting honest about the payoff that's real for you now, not at 40. Being a founder is a genuine engine for personal growth — but push past that: how is this true to your values, and are you still connected to your mission? For me, the most meaningful part was never the customers or the wealth. It was changing the lives of the people around me — building a working environment people loved, and giving them opportunities and skills they'd carry for the rest of their careers. Find your version of that, and you're already living part of the life you're scaling for.",
      },
    ],
  },
  "find-new-capital": {
    hook:
      "I've been out raising for months. Every pitch feels like a coin toss, half the no's come with a reason that means nothing, and the whole time the company is drifting without me. I'm exhausted and I can't even tell if I'm close.",
    beforeAfter: {
      today: [
        "You're raising because that's what founders do — you never stopped to ask what the capital is actually for.",
        "Outreach goes to everyone at once, with no momentum, and the market can smell the desperation.",
        "The raise has become your whole job, and culture and execution are quietly slipping while you're in investor meetings.",
      ],
      success: [
        "You've decided consciously to raise, and you know exactly what a great round looks like — because your investors, your peers and you defined it up front.",
        "You work a categorised list in short, sharp bursts that build FOMO, so investors move because they're afraid to miss out.",
        "The company keeps compounding while you're out raising, and you come back to a business that held the line without you.",
      ],
    },
    why:
      "Fundraising is not fair, and pretending otherwise will break you. Plenty of weak companies raise easily and plenty of great ones never do — momentum and luck matter far more than founders want to admit. I had a Series A extension that took a brutal year, and it very nearly finished me. So start with the question almost nobody asks: what is the capital actually for? Some businesses genuinely need it — a capital-intensive model like fintech, say — but many founders raise by default. Raising isn't a rite of passage; it's choosing to get married to an external party who will shape your decisions for years. Make that decision consciously, then treat the raise itself as a bounded, high-stakes sprint you prepare for rather than a thing that happens to you.",
    whatGoodLooksLike: [
      "You can say in one line what makes the next round a hell yes — and your existing investors, asked independently, would say the same thing.",
      "You work a long list categorised by likelihood and desirability, in phases of six to ten, rather than blasting everyone at once.",
      "Every pitch feeds a two-minute retro and a growing Q&A library, so your tenth conversation is far sharper than your first.",
    ],
    whereFoundersGoWrong: [
      "Raising by default — never asking what the capital is for, and getting married to an investor they didn't need.",
      "Going out to the whole list at once with no momentum, so a slow start reads as desperation and there's nowhere left to turn.",
      "Accepting generic rejections — \"wrong stage\", \"come back with more traction\" — as answers, instead of mining for the real reason they passed.",
    ],
    doNow: [
      {
        action: "Decide whether to raise at all",
        note: "Before anything else, write down exactly what the capital is for and what changes the day you take it on. If you can reach the next milestone without it, that's a finding.",
      },
      {
        action: "Run the hell-yes question",
        note: "Ask your existing investors, independently, what would make the next round a hell yes for them. Line their answers up next to your peers' rounds and your own view of success.",
      },
      {
        action: "Build and rank your long list",
        note: "List every plausible investor and tag each by likelihood and desirability; note ticket size, vertical and geography limits. Then carve off the top as a first phase of six to ten.",
      },
      {
        action: "Book a rehearsal-dinner pitch",
        note: "Do two low-stakes pitches with less desirable investors first. After each, run a two-minute retro with your cofounder and add every question you got to a Q&A library.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Momentum is the whole game",
      },
      {
        kind: "paragraph",
        text: "Investors move for one reason: fear of missing out. A raise isn't a series of independent meetings — it's a single narrative you manage. Go out in short, sharp bursts to a phase of six to ten investors, give them a deadline, and keep feeding the story with real progress: a signed customer, a milestone hit, and above all another investor's interest. The first term sheet isn't the finish line — it's the lever you use to pull the next one forward. And if a phase stalls, pause. Don't burn your whole network and crawl back to the same people six months later; stop, fix what isn't landing, and come back with a stronger hand.",
      },
      {
        kind: "callout",
        text: "When an investor passes, don't accept \"wrong stage\" or \"needs more traction\" — those are non-answers. Ask the one question that gets a real one: \"What three things would have had to be different for this to go from a no to a hell yes?\"",
      },
      {
        kind: "heading",
        text: "Protect yourself and the company before you start",
      },
      {
        kind: "paragraph",
        text: "A raise takes far longer than you think, and it pulls you out of the business for months. Two things quietly break in that time: you, and the company. Look after yourself — take the vacation before you start, not after — and build enough resilience to survive a process that is genuinely unfair. Then make the company resilient without you: if you're in investor meetings all day, watch for culture and execution slipping, and stress-test now whether the business can thrive while you step back.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["build-resilience-and-recovery", "master-my-mindset"],
      },
    ],
  },
  "know-my-special-ability": {
    hook:
      "I'm the bottleneck on everything — product reviews, sales calls, hiring debriefs. I tell myself only I can do it right, but honestly I'm just doing a lot of things I'm merely good at.",
    beforeAfter: {
      today: [
        "Your calendar is full of work you're excellent at — and none of it is the thing only you can do.",
        "Every new hire still routes through you because you haven't named what actually needs your genius.",
        "You can't articulate your special ability in one sentence, so the company can't build around it.",
      ],
      success: [
        "You can name your zone of genius in one line — and everyone around you knows it too.",
        "Your calendar is built around that work; the rest is hired, delegated or designed away.",
        "When the company needs its highest-leverage founder contribution, it knows exactly where to find you.",
      ],
    },
    why:
      "Gay Hendricks' distinction in The Big Leap is the one most founders miss: excellence is not genius. The Zone of Excellence — work you're genuinely good at — is the most seductive trap because it earns praise and feels productive. But a founder who stays there becomes the ceiling. Your special ability is the work at the intersection of unique skill, energy and company need — and the company can only scale past you once you stop hoarding everything you're merely excellent at.",
    whatGoodLooksLike: [
      "You can state your zone of genius in one sentence — specific enough that it couldn't describe any other founder.",
      "Your calendar, org design and hiring all trace back to that answer: you keep the genius work, everything else has an owner.",
      "The team knows what only you can do and protects that time — because they've seen what happens when you're in it.",
    ],
    whereFoundersGoWrong: [
      "Drowning in the Zone of Excellence — doing a lot of things you're good at because they feel important, while the genius work gets the scraps.",
      "Confusing being the bottleneck with being indispensable — holding work that others could own because it feels safer than letting go.",
      "Building the org before naming your genius, so you hire for gaps you haven't diagnosed and still end up doing everything.",
    ],
    doNow: [
      {
        action: "Run the Zone of Genius diagnostic",
        note: "List your last two weeks of work. Mark each item: incompetence, competence, excellence or genius. Count how much time landed in excellence — that's your leak.",
        toolId: "zone-of-genius",
      },
      {
        action: "Answer the three questions out loud",
        note: "What could you do better than almost anyone? What gives you energy rather than draining it? What does this company need from you that no one else can deliver? The overlap is your answer.",
      },
      {
        action: "Name one excellence trap to exit this month",
        note: "Pick the highest-volume task you're merely excellent at and decide who owns it by end of month — hire, delegate or kill.",
      },
      {
        action: "Tell your cofounder or coach your one-line genius",
        note: "If you can't say it in one sentence, it isn't clear enough yet. Their job is to hold you to it when excellence tries to pull you back.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Three questions to start",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "What could you do better than almost anyone?",
            note: "Creating, selling, storytelling, building product, reading a room, closing a deal — name the thing, not the job title.",
          },
          {
            title: "What gives you energy rather than draining it?",
            note: "Genius work leaves you more alive after four hours. Excellence work earns praise but costs you. Be honest about the difference.",
          },
          {
            title: "What does this company need from you that no one else can deliver?",
            note: "Your genius has to connect to what the company actually needs — not just what you enjoy. The overlap is your special ability.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Connect genius to what the company needs",
      },
      {
        kind: "paragraph",
        text: "Naming your genius is only half the job. The other half is wiring it into the company: designing the org so your genius has room, hiring people who are geniuses where you're not, and building ownership so the excellent work doesn't keep boomeranging back to you.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "design-the-org",
          "raise-the-talent-bar",
          "make-ownership-stick",
          "take-command-of-my-role",
        ],
      },
    ],
  },
  "master-my-mindset": {
    hook:
      "Somewhere along the way I decided I'm the technical one, not the front-person. So I walk into investor meetings already braced to be bad at them — and then I am. It feels less like a skill I'm missing and more like just who I am.",
    beforeAfter: {
      today: [
        "Your self-talk runs on autopilot, and most of it is a low ceiling: \"I'm not a salesperson,\" \"I'm not a natural leader.\"",
        "When the pressure spikes you shrink to a smaller, more defensive version of yourself — and the team catches it before you say a word.",
        "You treat your personality as fixed, so today's weak spots feel like a life sentence rather than a stage you're passing through.",
      ],
      success: [
        "You can tell a fact from a story you're telling yourself — and you rewrite the story: not \"I'm bad at pitching\" but \"I'm on my way to being great at it.\"",
        "You can step into your best-self mindset on demand, in the moments that actually decide things.",
        "The mindset you walk in with sets the weather for the whole room — steady and ambitious enough that others borrow it.",
      ],
    },
    why:
      "Carol Dweck draws a hard line between two beliefs: that your abilities are fixed, or that they can be grown. It sounds academic until you notice that a fixed mindset makes you spend your energy proving you're good instead of getting good — and that \"I'm just not a leader\" behaves like a prediction that quietly comes true. The higher stake is that, once you lead, your inner world becomes the team's outer world. Founders rarely see how much their own state leaks: walk in braced and scarce and the room tightens; walk in as your best self and people borrow the certainty. Mindset stops being self-help the moment other people have to work inside the weather you bring.",
    whatGoodLooksLike: [
      "You catch your own narration in the moment and can name the belief driving a reaction — before it drives the decision.",
      "You have a repeatable way to reach your best self when it counts, instead of waiting to feel ready.",
      "Your default frame is \"on my way to,\" so setbacks read as reps and feedback lands as data, not a verdict on who you are.",
    ],
    whereFoundersGoWrong: [
      "Dismissing mindset as fluff — \"just think positive\" — so they never actually practise it, and drop it the instant real pressure hits.",
      "Mistaking a fixed self-image for the truth: \"I'm not a numbers person,\" \"I'm not the inspiring type\" — an old conclusion applied to a present that has already moved on.",
      "Reaching for affirmations instead of evidence. Repeating \"I'm a great leader\" you don't believe changes nothing; collecting proof you can't argue with does.",
    ],
    doNow: [
      {
        action: "Rewrite one limiting sentence",
        note: "Catch yourself saying \"I'm bad at X\" and say it again out loud as \"I'm on my way to being great at X.\" Small, but it moves you from a verdict to a direction.",
      },
      {
        action: "Run the two Super Self questions",
        note: "On whatever you're avoiding right now: what would your best self do, and what's actually stopping you from doing it?",
        toolId: "super-self",
      },
      {
        action: "Collect three pieces of evidence against your loudest limiting belief",
        note: "Facts, not affirmations: the round you closed, the hire who chose you, the call you turned around. Keep them somewhere you'll see them when the story flares up.",
      },
      {
        action: "Name the mindset the next stage needs",
        note: "One or two words — \"calm and decisive,\" \"ferociously focused\" — then pick one moment this week to show up as exactly that.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Rewrite the story, then act as if",
      },
      {
        kind: "paragraph",
        text: "Most limiting beliefs aren't observations, they're old conclusions — usually formed long before the company and applied to a present that has moved on. The story is a hypothesis, not the truth. The fix isn't to argue with it or paper over it with affirmations you don't believe; it's to gather evidence that contradicts it and keep that evidence somewhere you can reach when the story gets loud.",
      },
      {
        kind: "paragraph",
        text: "Then flip the order. James Clear's line is that every action is a vote for the person you're becoming — identity comes first, behaviour follows. You don't wait until you feel like a founder who's going to change the world and then act like one; you act like one, and the feeling catches up as the votes stack. \"On my way to being a great pitcher\" is a different person from \"someone who's bad at pitching,\" and the two of them walk into the room differently.",
      },
      {
        kind: "callout",
        text: "Acting as if isn't faking it — it's rehearsing the identity until it's yours. One founder who dreaded selling built a \"closer\" version of himself: a different playlist before calls, a sharper way of dressing for them, one line he repeated walking in. He wasn't pretending to be someone else; he was practising the version of himself that already showed up on his best days. The Super Self tool is the two-question shortcut to the same place.",
      },
      {
        kind: "heading",
        text: "Your mindset is the team's weather",
      },
      {
        kind: "paragraph",
        text: "The moment you lead, your mindset stops being private. Teams read your state faster than your words: come back from a hard week with clarity and the energy in the room lifts; carry scarcity or self-judgment in and the team quietly inherits both. This is why managing your own head is part of the job, not a distraction from it — everyone else is working inside the weather you bring, and a founder operating from possibility gives them permission to do the same.",
      },
    ],
  },
};

export function getCapabilityContent(
  capabilityId: string,
): CapabilityContent | undefined {
  return capabilitiesContent[capabilityId];
}

export function hasCapabilityContent(capabilityId: string): boolean {
  return capabilitiesContent[capabilityId] !== undefined;
}
