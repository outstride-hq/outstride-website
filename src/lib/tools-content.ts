export type ToolStep = {
  title: string;
  note: string;
  example?: string;
};

export type ToolBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; steps: ToolStep[] }
  | { kind: "callout"; text: string }
  | { kind: "diagram"; diagramId: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "capabilityRefs"; capabilityIds: string[] };

export type ToolContent = {
  intro: string;
  blocks: ToolBlock[];
};

export const toolsContent: Record<string, ToolContent> = {
  "strategy-one-pager": {
    intro:
      "A single-page canvas that makes the company's destination legible — problem, mission, vision, milestones and quarterly priorities across the business.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when the team is busy but not aligned, when the story keeps changing, or when you need one shared picture before a strategy reset, fundraise or quarterly planning session.",
      },
      {
        kind: "heading",
        text: "The canvas",
      },
      {
        kind: "diagram",
        diagramId: "strategy-grid",
      },
      {
        kind: "heading",
        text: "How to use it",
      },
      {
        kind: "list",
        items: [
          "Start with Problem, Mission and Vision — keep each to one clear sentence.",
          "Define the 10-year goal and the next major company milestone (e.g. funding round, product launch, profitability).",
          "Fill the matrix: 2–3 year goals, 12-month priorities and quarterly OKRs across Sales & Revenue, Product & Tech, Markets & Expansion, and Team & Ops.",
          "Review with the leadership team. Anything that cannot fit on one page is probably not clear enough yet.",
        ],
      },
      {
        kind: "callout",
        text: "The one-pager is a living document. Revisit it each quarter during your strategy reset — not as a performance review, but as a clarity check.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["map-the-destination", "chart-the-path"],
      },
    ],
  },
  "ceo-test": {
    intro:
      "A quick self-assessment — score yourself on four questions to check that the big things are covered.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when you are worrying \"am I doing enough?\" — a five-minute clarity check, not a full strategy review. Be honest. The point is to spot gaps before they become crises.",
      },
      {
        kind: "heading",
        text: "The four questions",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "We know where we're heading",
            note: "Destination is clear enough that you and the team could repeat it. Low score? Revisit the Strategy One-Pager or Six Critical Questions.",
          },
          {
            title: "We have a clear plan on how we are going to get there",
            note: "You can name the path from here to the next milestone — priorities, sequencing and trade-offs. Low score? Chart the path before adding more initiatives.",
          },
          {
            title: "Each of my team has a plan that feeds into the company plan",
            note: "Leaders can explain how their goals connect upstream. Low score? Cascade is broken — check OKRs and 1:1s before blaming execution.",
          },
          {
            title: "I'm confident that my team can execute that plan",
            note: "You trust the people and systems in place, not just the slide deck. Low score? The gap is likely talent, capacity or accountability — not more strategy.",
          },
        ],
      },
      {
        kind: "heading",
        text: "How to score",
      },
      {
        kind: "list",
        items: [
          "Rate each question 1–5. Halves are fine (e.g. 3.5).",
          "1 = not true at all · 3 = partly · 5 = fully confident",
          "Note the lowest score first — that is usually where to focus this week.",
          "Re-run monthly, or whenever the \"am I doing enough?\" anxiety spikes.",
        ],
      },
      {
        kind: "callout",
        text: "High scores on direction and plan but low on team plans or execution confidence usually mean the strategy work is done — the org work is not.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["map-the-destination", "chart-the-path"],
      },
    ],
  },
  "accountability-dial": {
    intro:
      "A graduated framework for holding standards without micromanaging — turn a missed commitment into a clear conversation before it becomes a performance problem.",
    blocks: [
      {
        kind: "paragraph",
        text: "Most founders either avoid hard conversations until resentment builds, or jump straight to ultimatums. The Accountability Dial gives you five steps between those extremes — each one slightly more serious than the last.",
      },
      {
        kind: "heading",
        text: "The five steps",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Mention",
            note: "Casual check-in. Name what you noticed without making it a big deal.",
            example:
              "Hey Anna, you missed our Zoom call this morning. Is everything ok?",
          },
          {
            title: "Invitation",
            note: "Quick private chat. More serious — invite them to reflect on the pattern.",
            example:
              "Anna, I've mentioned your attendance on all-hands meetings a few times… what's the pattern here?",
          },
          {
            title: "Conversation",
            note: "More serious tone. Express urgency and ask for a plan to resolve it.",
            example:
              "Anna, your absence from important meetings is starting to affect the team. Can we talk about how to resolve this?",
          },
          {
            title: "Boundary",
            note: "Warning conversation. Lay out consequences if nothing changes.",
            example:
              "Anna — if your ability to attend meetings doesn't change, we may have to question your commitment to the role.",
          },
          {
            title: "The Limit",
            note: "Final warning. One last chance before parting ways.",
            example:
              "Anna, this is your final warning to improve your attendance at company meetings. Your absence is causing friction — it's unacceptable. We've had this conversation before and there hasn't been an improvement.",
          },
        ],
      },
      {
        kind: "callout",
        text: "Move through the dial in order. Skipping steps erodes trust; staying on Mention when you need Boundary avoids the problem.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["give-feedback-and-hold-the-standard"],
      },
    ],
  },
  "sbi-feedback": {
    intro:
      "A three-part structure for delivering feedback that is specific, observable and actionable — without triggering defensiveness.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use SBI when you need to name a behaviour clearly: co-founder feedback, 1:1s, performance conversations, or any moment where vague criticism (\"you're not engaged\") shuts the conversation down before it starts.",
      },
      {
        kind: "heading",
        text: "The three parts",
      },
      {
        kind: "diagram",
        diagramId: "sbi-feedback",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Situation",
            note: "Anchor the feedback in a specific time and place. No generalisations — one concrete moment.",
            example:
              "Last week in our quarterly product planning meeting…",
          },
          {
            title: "Behaviour",
            note: "Describe what the person did — observable actions only, not labels or assumptions about intent.",
            example:
              "…when Alex, our new PM, started presenting their roadmap, you interrupted them before they finished their first point.",
          },
          {
            title: "Impact",
            note: "Explain the consequence — on the team, the outcome, or the working relationship. Stick to what happened, not character judgments.",
            example:
              "…after that, Alex stopped contributing for the rest of the meeting.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Why this works",
      },
      {
        kind: "list",
        items: [
          "Increases the chance feedback is heard and acted on",
          "Reduces defensiveness by separating facts from interpretation",
          "Works for positive feedback as well as corrective",
        ],
      },
      {
        kind: "callout",
        text: "Lead with situation and behaviour, not impact on your feelings. \"I feel like you don't respect me\" before naming what happened invites defensiveness. Name what you saw first — then the effect.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["give-feedback-and-hold-the-standard"],
      },
    ],
  },
  "non-violent-communication": {
    intro:
      "A four-part model for expressing what is happening for you — without blame, judgment or demands that trigger defensiveness.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use NVC when a conversation matters and emotions are running high: feedback, conflict, relationship repair, or any moment where how you say it is as important as what you say.",
      },
      {
        kind: "heading",
        text: "The four components",
      },
      {
        kind: "diagram",
        diagramId: "nvc-ofnr",
      },
      {
        kind: "heading",
        text: "The OFNR model",
      },
      {
        kind: "callout",
        text: "When I see that ___. I feel ___ because my need for ___ is / is not met. Would you be willing to ___?",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Observation",
            note: "State what happened — facts only, no interpretation or judgment.",
            example:
              "When I see that the board deck went out without the financials section…",
          },
          {
            title: "Feeling",
            note: "Name the emotion this triggered in you. Own it — don't blame them for how you feel.",
            example: "…I feel anxious and embarrassed.",
          },
          {
            title: "Need",
            note: "Connect the feeling to an underlying need or value.",
            example:
              "…because my need for us to show up prepared and credible with the board is not met.",
          },
          {
            title: "Request",
            note: "Make a specific, doable ask — not a demand.",
            example:
              "Would you be willing to run a final checklist with me 48 hours before the next board send?",
          },
        ],
      },
      {
        kind: "heading",
        text: "What to avoid",
      },
      {
        kind: "list",
        items: [
          "Mixing observation with evaluation: \"You always…\" or \"You're careless\"",
          "Expressing pseudo-feelings that blame: \"I feel ignored by you\"",
          "Making demands disguised as requests: \"I need you to…\" with no room to say no",
          "Skipping straight to the request without the observation-feeling-need context",
        ],
      },
      {
        kind: "callout",
        text: "NVC is not about being soft. It is about being clear enough that the other person can hear you without needing to defend themselves.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "give-feedback-and-hold-the-standard",
          "build-incredible-relationships",
          "navigate-conflict-and-create-psychological-safety",
        ],
      },
    ],
  },
  "seven-powers": {
    intro:
      "A framework for identifying durable competitive advantage — the benefit and barrier that let a business sustain superior returns.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when you need to pressure-test strategy, explain why you win, prep for a fundraise, or decide where to invest next. Power is not a feature list — it is a condition that materially improves cash flow and stays hard for competitors to copy.",
      },
      {
        kind: "heading",
        text: "The seven powers",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Scale Economies",
            note: "Per-unit costs fall as volume grows. The leader can price aggressively or earn higher margins while competitors struggle to match.",
          },
          {
            title: "Network Economies",
            note: "The product becomes more valuable as more people use it. New entrants face a cold-start problem the incumbent does not.",
          },
          {
            title: "Counter-Positioning",
            note: "A new model incumbents cannot copy without damaging their existing business. Common in origination — before the market leader has locked in.",
          },
          {
            title: "Switching Costs",
            note: "Customers face real cost, risk or friction to leave. Retention compounds even when alternatives exist on paper.",
          },
          {
            title: "Branding",
            note: "Durable customer preference that supports premium pricing or lower acquisition cost — built over time, not bought overnight.",
          },
          {
            title: "Cornered Resource",
            note: "Preferential access to a scarce asset competitors cannot get: talent, IP, distribution, data or relationships.",
          },
          {
            title: "Process Power",
            note: "Embedded ways of working that improve outcomes in ways rivals cannot easily replicate — often visible only after years of refinement.",
          },
        ],
      },
      {
        kind: "heading",
        text: "How to use it",
      },
      {
        kind: "list",
        items: [
          "For each power, ask: do we have a real benefit (margin, cost or pricing advantage) and a real barrier (why can't they copy it)?",
          "Score honestly against named competitors, not an abstract market.",
          "Prioritise the one or two powers you can still build — not all seven at once.",
          "Match ambition to stage: counter-positioning and cornered resource in origination; scale, network and switching costs in take-off; branding and process power in stability.",
        ],
      },
      {
        kind: "callout",
        text: "A castle without a moat is just a target. A moat without a castle is pointless. Strategy needs both benefit and barrier.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["map-the-destination"],
      },
    ],
  },
  "anti-wasteman-system": {
    intro:
      "A nine-step execution framework that turns reflection into commitment — name the dream, make it concrete, pre-mortem the failure modes, stack the deck, then take the first action.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when you have a goal that matters but keeps slipping — annual planning, a personal project, a habit you want to install, or any ambition that needs more than good intentions. Run one row per goal.",
      },
      {
        kind: "heading",
        text: "The nine steps",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Dream",
            note: "Name the ambition in plain language — what you actually want, not what sounds impressive.",
            example:
              "Write a book I'm proud of by December — not \"hit the bestseller list.\"",
          },
          {
            title: "Why?",
            note: "Why does this matter to you? A weak why loses to every other priority when things get hard.",
            example:
              "It's fun, I've committed to publishers, and it's a forcing function to clarify what I believe.",
          },
          {
            title: "SMART Goal",
            note: "Make it Specific, Measurable, Achievable, Relevant and Time-bound. Prefer goals 100% within your control — not outcomes that depend on gatekeepers.",
            example:
              "Complete a first draft by 30 June; final manuscript by 31 December.",
          },
          {
            title: "Habit?",
            note: "Can this run as a habit or system rather than willpower? What would make showing up automatic?",
            example:
              "Write for 90 minutes every weekday morning before email — same time, same place.",
          },
          {
            title: "How surprised would I be if I failed?",
            note: "Rate your genuine surprise on a scale of 1–10. Low surprise means you're not really committed yet — revisit the why or the goal.",
            example:
              "If I'd only be a 3/10 surprised, the goal isn't real enough yet.",
          },
          {
            title: "Top 3 reasons for failure?",
            note: "Pre-mortem: name the three most likely ways this falls apart. Be honest, not polite.",
            example:
              "Travel disrupts my routine; I over-edit instead of drafting; I say yes to speaking gigs that eat writing time.",
          },
          {
            title: "WHO can help?",
            note: "Who can coach, challenge, or hold you accountable? Name specific people, not vague \"support.\"",
            example:
              "Editor for fortnightly check-ins; writing group for monthly read-throughs; co-founder to protect calendar blocks.",
          },
          {
            title: "HOW can I stack the deck?",
            note: "What environments, resources, calendar blocks or constraints make success the default?",
            example:
              "Book a writing retreat; remove social apps from phone; pre-schedule six months of protected mornings.",
          },
          {
            title: "ACTION",
            note: "What's the smallest concrete next step you can take in the next 24 hours? Not planning — doing.",
            example:
              "Outline chapter one tonight; email editor to confirm first check-in date.",
          },
        ],
      },
      {
        kind: "callout",
        text: "The system only works if you finish on ACTION. Reflection without a next step is just journaling.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "build-a-life-worth-scaling-for",
          "master-my-mindset",
          "build-my-growth-system",
        ],
      },
    ],
  },
  "super-self": {
    intro:
      "A two-question mindset hack — imagine the ten-out-of-ten version of you and use that lens to cut through hesitation, drift or self-sabotage.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when you're stuck, procrastinating, overthinking, or defaulting to a smaller version of yourself. Pick a name for your best self — Super Matthew, Super You, whatever lands — and step into that mindset for a minute.",
      },
      {
        kind: "heading",
        text: "The two questions",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "What would Super You do in this situation?",
            note: "Not what feels easy or familiar — what would the hardest-working, most strategic, most on-the-ball version of you actually do right now?",
            example:
              "Send the hard message today, block two hours for the strategy doc, or say no to the meeting that doesn't move the needle.",
          },
          {
            title: "What's stopping me from doing what Super You would do right now?",
            note: "Name the real blocker — fear, fatigue, ambiguity, perfectionism, people-pleasing. Often it's smaller than it feels.",
            example:
              "I'm avoiding the conversation because it might be awkward — not because I don't know what to say.",
          },
        ],
      },
      {
        kind: "callout",
        text: "The gap between you and Super You is often not so big. One small action in the Super You direction is usually enough to shift the moment.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "master-my-mindset",
          "take-command-of-my-role",
          "make-the-right-calls",
        ],
      },
    ],
  },
  "alignment-autonomy": {
    intro:
      "A 2×2 for diagnosing whether your team has the right mix of shared direction and decision freedom — popularised by Henrik Kniberg in Spotify's engineering culture work.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when teams feel either micromanaged or rudderless, when you are unsure how much to specify versus leave open, or when more freedom has produced silos and duplicate work. Alignment and autonomy are not opposites on a slider — they are two separate dimensions. The goal is high alignment and high autonomy: everyone clear on the problem and why it matters, with room to choose the best path.",
      },
      {
        kind: "heading",
        text: "The matrix",
      },
      {
        kind: "diagram",
        diagramId: "alignment-autonomy",
      },
      {
        kind: "heading",
        text: "How leaders create alignment",
      },
      {
        kind: "list",
        items: [
          "Define the problem and why it matters now — not the detailed solution.",
          "Connect team goals to company strategy so people see how their work fits.",
          "Make priorities explicit enough that teams can trade off without escalating every call.",
        ],
      },
      {
        kind: "heading",
        text: "How to grant autonomy",
      },
      {
        kind: "list",
        items: [
          "Hand off outcomes and decision rights, not just tasks — use the Delegation Ladder to name the level.",
          "Set boundaries: budget, timeline, quality bar, and what must be coordinated with other teams.",
          "Resist revisiting decisions unless the goal has changed — autonomy dies when the goalposts move weekly.",
        ],
      },
      {
        kind: "callout",
        text: "More autonomy does not mean less alignment. Stronger alignment lets you grant more autonomy safely — because people know which direction to run.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["scale-through-delegation", "map-the-destination"],
      },
    ],
  },
  "delegation-ladder": {
    intro:
      "Five levels of delegated authority — from following instructions to full ownership — so everyone knows how much decision-making power you are handing over.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when work comes back worse than expected, when someone takes more or less initiative than you intended, or before any handoff where the decision rights are not obvious. Name the level out loud — it becomes shared language.",
      },
      {
        kind: "heading",
        text: "The five levels",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Do as I say",
            note: "Execute exactly as instructed. You have already researched the options and chosen the path.",
          },
          {
            title: "Research and report",
            note: "Gather information and bring it back. You discuss it together, then you make the call.",
          },
          {
            title: "Research and recommend",
            note: "Outline the options with pros and cons, then share your recommendation. You approve before they move forward.",
          },
          {
            title: "Decide and inform",
            note: "They make the decision and tell you what they did. You stay in the loop without approving every step.",
          },
          {
            title: "Act independently",
            note: "Full autonomy within agreed boundaries. No routine reporting — you trust them to follow through.",
          },
        ],
      },
      {
        kind: "callout",
        text: "Most delegation failures are a level mismatch, not a people problem. Clarify the level on the way in — not after something goes wrong.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["scale-through-delegation", "make-ownership-stick"],
      },
    ],
  },
  "delegation-timeline": {
    intro:
      "A forward-looking plan for what you will hand off, to whom, at which level — and when — so delegation happens on purpose instead of by accident.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when you know you need to let go but keep defaulting to doing it yourself, when someone is ready for more but you have not named what \"more\" means, or during quarterly planning with a direct report. Pair it with the Delegation Ladder to mark current and target levels.",
      },
      {
        kind: "heading",
        text: "Build the timeline",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "List what you are still holding",
            note: "Outcomes, decisions, relationships or recurring work that someone else could own — not just tasks you dislike.",
            example:
              "Vendor negotiations, weekly metrics review, first-draft hiring screens.",
          },
          {
            title: "Name the owner",
            note: "Who will take this on — now or after a transition period? Be specific about the person or role.",
          },
          {
            title: "Mark current and target level",
            note: "Use the Delegation Ladder. Where are they today on each item? Where should they be in 30, 60 or 90 days?",
            example:
              "Metrics review: Level 2 today → Level 4 by end of quarter.",
          },
          {
            title: "Define what has to be true to move up",
            note: "Context they need, skills to build, decision rights to document, or standards to align on before you step back a rung.",
            example:
              "They shadow two vendor calls, then lead one with you in the room before Level 4.",
          },
          {
            title: "Set review dates",
            note: "Put checkpoints on the calendar. Revisit in your Weekly Ownership Review or a dedicated 1:1 — adjust the plan if reality differs.",
          },
        ],
      },
      {
        kind: "callout",
        text: "Delegation is a timeline, not an event. One deliberate handoff per month beats a heroic purge that collapses in week two.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["scale-through-delegation", "make-ownership-stick"],
      },
    ],
  },
  "four-disciplines": {
    intro:
      "Organizational health is the greatest advantage a company can have — and it comes from four sequential disciplines that turn leadership alignment into how the whole company runs.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when the leadership team is smart but misaligned — when strategy keeps shifting, culture feels like posters not behaviour, or people hear different answers to the same questions. The four disciplines must be done in order.",
      },
      {
        kind: "heading",
        text: "The four disciplines",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Build a Cohesive Leadership Team",
            note: "Master the five behaviours of a team: trust, conflict, commitment, accountability and results. Without a healthy leadership team, nothing else sticks.",
          },
          {
            title: "Create Clarity",
            note: "Align on the Six Critical Questions — why you exist, how you behave, what you do, how you succeed, what matters most now, and who does what.",
          },
          {
            title: "Over-Communicate Clarity",
            note: "Repeat the answers until people can recite them. All-hands, 1:1s, onboarding, origin stories — you are the town crier, saying it clearly, loudly and often.",
          },
          {
            title: "Reinforce Clarity",
            note: "Embed clarity into systems: hiring, onboarding, performance, compensation and meetings. You are the architect — clarity lives in the walls, not just the posters.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Reinforce clarity in practice",
      },
      {
        kind: "list",
        items: [
          "Hiring — how do we hire for values, not just skills?",
          "Onboarding — does day one reinforce mission and culture?",
          "1:1s — how do we check in on focus and the rallying cry?",
          "Performance — what does \"great\" look like in each role, tied to strategy and values?",
          "Meetings — do agendas revisit what is most important right now?",
          "Compensation — is it tied to collective results, not just individual output?",
          "Pick one system to upgrade this month — onboarding, team check-ins, or goal tracking.",
        ],
      },
      {
        kind: "callout",
        text: "Skip a discipline and the next one fails. A team that cannot trust each other cannot align. A team that has not aligned cannot over-communicate anything worth hearing.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "build-a-culture-that-compounds",
          "navigate-conflict-and-create-psychological-safety",
          "be-storyteller-in-chief",
          "raise-the-talent-bar",
        ],
      },
    ],
  },
  "five-dysfunctions": {
    intro:
      "The foundation of Discipline 1 — a pyramid model showing how absence of trust leads to artificial harmony, lack of commitment, avoidance of accountability and inattention to results.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this to diagnose a leadership team that avoids hard conversations, revisits decisions, tolerates missed commitments, or optimises for individual status over collective outcomes.",
      },
      {
        kind: "heading",
        text: "The pyramid",
      },
      {
        kind: "diagram",
        diagramId: "five-dysfunctions",
      },
      {
        kind: "heading",
        text: "How to use it",
      },
      {
        kind: "list",
        items: [
          "Start at the bottom: without vulnerability-based trust, the rest of the pyramid cannot hold.",
          "Work up in order — you cannot demand accountability before the team commits, or commit without productive conflict.",
          "Name where the team is weakest and pick one behaviour to practise this quarter.",
          "Run Personal Histories + Trust as the entry exercise when trust is the gap.",
        ],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "navigate-conflict-and-create-psychological-safety",
          "build-incredible-relationships",
          "give-feedback-and-hold-the-standard",
        ],
      },
    ],
  },
  "six-critical-questions": {
    intro:
      "The heart of Discipline 2 — six questions the leadership team must answer together, with no contradictions, before clarity can cascade through the company.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this in a leadership offsite, quarterly reset, or whenever two execs describe the company differently to the same audience. Answer all six together — not in isolation.",
      },
      {
        kind: "heading",
        text: "The six questions",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Why do we exist?",
            note: "Core purpose — why the world would be worse off if you stopped. Not what you do, but why it matters.",
          },
          {
            title: "How do we behave?",
            note: "Core values as behaviours you will actually hire, promote and fire on — not aspirational wallpaper.",
          },
          {
            title: "What do we do?",
            note: "A simple, specific business definition every leader can repeat consistently.",
          },
          {
            title: "How will we succeed?",
            note: "Strategic anchors — the few fundamental choices that define how you compete or serve.",
          },
          {
            title: "What is most important right now?",
            note: "The rallying cry — one thematic goal for the next 3–12 months, not a list of five.",
          },
          {
            title: "Who must do what?",
            note: "Clear ownership at the leadership level — who owns which outcomes, decisions and metrics.",
          },
        ],
      },
      {
        kind: "callout",
        text: "Failing to align on any one question prevents the clarity the organisation needs. Disagreement in the room is the point — contradiction in the hallway is the problem.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "map-the-destination",
          "build-a-culture-that-compounds",
          "chart-the-path",
        ],
      },
    ],
  },
  "personal-histories-trust": {
    intro:
      "An entry exercise for building vulnerability-based trust on a leadership team — share formative stories, then name what each person needs to feel fully themselves.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this at the start of a leadership offsite, with a new exec joining, or when the team is polite but guarded. Allow 60–90 minutes. Psychological safety is a prerequisite, not an outcome.",
      },
      {
        kind: "heading",
        text: "The exercise",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Personal histories",
            note: "Go around the table. Each person shares one childhood challenge or formative moment — keep it human, not performative.",
            example:
              "A move between countries at 12; losing a parent young; the first time they led a team and got it wrong.",
          },
          {
            title: "What I need from this team",
            note: "Each person answers: \"What do I need from this team to feel fully myself?\" Listen without fixing.",
            example:
              "Direct feedback without softening; permission to say no to meetings; space to think before deciding.",
          },
        ],
      },
      {
        kind: "callout",
        text: "Optional warm-up: run the Light Conflict Assessment first if the team is new to hard conversations.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "navigate-conflict-and-create-psychological-safety",
          "build-incredible-relationships",
        ],
      },
    ],
  },
  "blob-tree": {
    intro:
      "A non-verbal picture of 21 blob figures on a tree — each in a different mood and position — used to surface feelings, social dynamics and where people see themselves in a group.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this solo (\"which blob am I today?\"), in a 1:1, or with a team when words are hard or politeness is masking reality. The tree can stand for the company, a leadership team, a family, or any group.",
      },
      {
        kind: "heading",
        text: "The tree",
      },
      {
        kind: "image",
        src: "/images/tools/blob-tree.png",
        alt: "Blob Tree — 21 numbered yellow figures in different moods and positions on a tree",
      },
      {
        kind: "heading",
        text: "How to use it",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Pick your blob(s)",
            note: "Which figure(s) feel most like you right now? You can choose more than one, or none — that is also data.",
          },
          {
            title: "Say why",
            note: "What about the position, posture or mood resonates? There are no official right answers — meaning is personal.",
          },
          {
            title: "Widen the lens",
            note: "In a group: where does the team sit on the tree? Who is climbing, who is falling, who is isolated at the top? What would need to change for people to move?",
          },
        ],
      },
      {
        kind: "callout",
        text: "Works well as a warm-up before Personal Histories + Trust or the Light Conflict Assessment. Keep it curious, not diagnostic — the goal is conversation, not labelling.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "navigate-conflict-and-create-psychological-safety",
          "build-incredible-relationships",
          "manage-my-energy-system",
        ],
      },
    ],
  },
  "light-conflict-assessment": {
    intro:
      "A short warm-up conversation on how each person responds to disagreement — surfacing hidden dynamics before deeper team work.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this before Personal Histories + Trust, before a hard strategic debate, or when tension keeps going underground. Fifteen minutes is enough.",
      },
      {
        kind: "heading",
        text: "The prompt",
      },
      {
        kind: "callout",
        text: "\"How do we each typically respond to disagreement or tension?\"",
      },
      {
        kind: "list",
        items: [
          "Go around — no debate, just observation. Common patterns: avoid, accommodate, compete, seek compromise, collaborate.",
          "Notice who speaks first and who holds back. That is often data about the team's real hierarchy.",
          "Name one behaviour each person wants to practise more of in the next month.",
        ],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["navigate-conflict-and-create-psychological-safety"],
      },
    ],
  },
  "cascade-storytelling": {
    intro:
      "A Discipline 3 exercise — design short clarity messages so the rallying cry and values land with every audience, consistently and often.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this after the Six Critical Questions are answered. The leadership team must be able to explain the same story to a new hire, an investor and each other — without improvising different versions.",
      },
      {
        kind: "heading",
        text: "The exercise",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Draft clarity messages",
            note: "For the rallying cry and core values, write one-liners or short stories for three audiences: a new hire, an investor, and the team next week.",
          },
          {
            title: "Plan the cascade",
            note: "Decide how often you revisit these messages and where they appear: all-hands, 1:1s, onboarding, meeting agendas, Slack.",
          },
          {
            title: "Test for consistency",
            note: "Each leader shares their version aloud. If the stories diverge, clarity is not yet real.",
          },
        ],
      },
      {
        kind: "list",
        items: [
          "Repeat origin stories — why you started, what you are fighting for.",
          "Use simple, consistent language — not a new metaphor every week.",
          "Model values in meetings, not just slides.",
          "Make the rallying cry visible in everyday talk.",
        ],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "be-storyteller-in-chief",
          "build-a-culture-that-compounds",
        ],
      },
    ],
  },
  "habit-stacks": {
    intro:
      "Habit stacking links a new behaviour to something you already do — then chains those links into a rhythm you can run without willpower.",
    blocks: [
      {
        kind: "paragraph",
        text: "The core move is simple: after [current habit], I will [new habit]. One anchor, one addition. String enough anchors together and you have a stack — a fixed sequence that carries you from body to mind to plan without deciding what comes next.",
      },
      {
        kind: "heading",
        text: "Three rhythms, three altitudes",
      },
      {
        kind: "paragraph",
        text: "Founders need more than a morning routine. Run stacks at different cadences: daily to ground and aim the day, weekly to set direction and protect the calendar, monthly to zoom out on goals and life design. The weekly stack can absorb the monthly layer on the first Monday of each month — one trigger, two depths.",
      },
      {
        kind: "list",
        items: [
          "Daily — short pre-work sequence: health, reflection, planning, handoff to deep work.",
          "Weekly — Monday morning: projects, calendar, intentions, life domains, then into the daily stack.",
          "Monthly — first Monday add-on: retro, vision board, quarterly and monthly goal review.",
        ],
      },
      {
        kind: "heading",
        text: "Example: daily pre-work stack",
      },
      {
        kind: "paragraph",
        text: "Run this before work starts. Keep the order fixed so each step triggers the next.",
      },
      {
        kind: "list",
        items: [
          "Have you taken thyroxine?",
          "Start pomodoro",
          "3 deep breaths",
          "Exist.io reflection",
          "How am I today?",
          "Affirmation: I am leading an awesome life and I'm just getting started",
          "How excited / calm am I?",
          "How can I make today 1% better?",
          "How can I bring more joy to today — to myself, to the world?",
          "Food plan",
          "Check projects",
          "Check calendar",
          "Reflect on yesterday's goals",
          "Set goals for the day",
          "Set tasks for the day",
          "Schedule wind down",
          "Visualise the day",
          "Finish pomodoro with vocab",
          "Share traffic light for today with co-founder",
        ],
      },
      {
        kind: "heading",
        text: "Example: Monday morning stack",
      },
      {
        kind: "paragraph",
        text: "Weekly zoom-out before the daily pre-work stack. On the first Monday of the month, run the monthly layer first (below).",
      },
      {
        kind: "list",
        items: [
          "Start pomodoro",
          "Monthly retro (first Monday of month only)",
          "Vision board",
          "Read through quarterly and monthly goals",
          "Go through projects",
          "This week will be a success if…",
          "What might trigger me this week?",
          "Set schedulers",
          "Check weather",
          "Go through calendar and solidify as much as possible",
          "Life domains — romance, work, social (CouchSurfing, Meetup), alone time (min. half day), culture (concerts, theatre, museums), health (sport classes, running, activities with friends), language lessons, food",
          "Do you have good books to read?",
          "Set weekly tasks",
          "Set intentions — fun, relationships, being productive, chilling",
          "Pre-work stack →",
        ],
      },
      {
        kind: "heading",
        text: "Example: monthly layer",
      },
      {
        kind: "paragraph",
        text: "Runs on the first Monday, before the rest of the weekly stack. Keeps long-horizon goals visible without a separate ritual.",
      },
      {
        kind: "list",
        items: [
          "Monthly retro — what worked, what didn't, what to change",
          "Vision board review",
          "Read through quarterly and monthly goals",
          "Then continue with the Monday morning stack",
        ],
      },
      {
        kind: "callout",
        text: "Copy the shape, not every item. Swap in your anchors — medication, journaling app, co-founder check-in — and trim until the stack fits in the time you actually have. A stack you skip is worse than a shorter one you keep.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "manage-my-energy-system",
          "build-a-life-worth-scaling-for",
          "operate-with-leverage",
        ],
      },
    ],
  },
};

export function getToolContent(toolId: string): ToolContent | undefined {
  return toolsContent[toolId];
}

export function hasToolContent(toolId: string): boolean {
  return toolId in toolsContent;
}
