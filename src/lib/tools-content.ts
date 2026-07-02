export type ToolStep = {
  title: string;
  note: string;
  example?: string;
};

export type ToolBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; columns: string[]; rows: string[][] }
  | { kind: "steps"; steps: ToolStep[] }
  | { kind: "callout"; text: string }
  | { kind: "diagram"; diagramId: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "toolRef"; toolIds: string[] }
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
        kind: "paragraph",
        text: "The goal is not a polished deck — it is a plan the leadership team is genuinely committed to. If the session produces boxes ticked but no conviction, you have planning theatre, not strategy.",
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
          "Start with Problem, Mission and Vision — keep each to one clear sentence. Mission clarity often unlocks product bets that felt fuzzy for months.",
          "Define the 10-year goal and the next major company milestone (e.g. funding round, product launch, profitability). Anchor the quarter to that milestone, not a wish list.",
          "Fill the matrix: 2–3 year goals, 12-month priorities and quarterly OKRs across Sales & Revenue, Product & Tech, Markets & Expansion, and Team & Ops.",
          "Review with the leadership team. Anything that cannot fit on one page is probably not clear enough yet.",
          "Pressure-test capacity: if the quarter needs more than the team can execute, cut scope before you cascade — not after.",
        ],
      },
      {
        kind: "callout",
        text: "The one-pager is a living document. Revisit it each quarter during your strategy reset — not as a performance review, but as a clarity check. A good quarter plan should feel challenging but feasible — something you would be proud to have executed, not just submitted.",
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
        kind: "callout",
        text: "Different funding paths — raise, profitability, debt — often look distinct on paper but converge on the same requirement: performance. If direction and plan score high but metrics are soft, the answer is rarely a new strategy doc.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["map-the-destination", "chart-the-path"],
      },
    ],
  },
  "values-deck": {
    intro:
      "Turn company values from posters into operating guidance by showing what each value looks like in practice: too little, right amount, and too much.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when values are vague, inconsistently interpreted, or weaponised. A Values Deck helps people apply values with judgement instead of swinging between underplaying and over-indexing.",
      },
      {
        kind: "heading",
        text: "Why this works",
      },
      {
        kind: "list",
        items: [
          "Gives values behavioural clarity teams can actually use day to day.",
          "Prevents values from becoming slogans with no consequences.",
          "Reduces conflict caused by different interpretations of the same value.",
          "Creates shared language for hiring, feedback and performance reviews.",
        ],
      },
      {
        kind: "heading",
        text: "Build each value card",
      },
      {
        kind: "table",
        columns: ["Section", "Prompt"],
        rows: [
          ["Value", "What is the value and why does it matter here?"],
          ["Live it", "What 3-5 concrete behaviours show this value in daily work?"],
          ["Right amount", "What does healthy application look like in normal decisions?"],
          ["Too much", "How does over-indexing on this value hurt execution or culture?"],
          ["Too little", "What warning signs show this value is missing?"],
        ],
      },
      {
        kind: "heading",
        text: "Worked example: Live the revolution",
      },
      {
        kind: "paragraph",
        text: "Value statement: Blockchain is going to change the world. We are here to build in that future, not watch from the sidelines.",
      },
      {
        kind: "heading",
        text: "Live it",
      },
      {
        kind: "list",
        items: [
          "Stay close to the frontier through credible research, product trends and technical developments.",
          "Participate in the ecosystem by joining meetups, conversations and practitioner communities.",
          "Bring ideas back to the company and ask where they create real customer value.",
        ],
      },
      {
        kind: "heading",
        text: "Right amount",
      },
      {
        kind: "list",
        items: [
          "Get excited about blockchain technology and keep your understanding current.",
          "Go to meetups and talk with people building in the space.",
          "Read up regularly on major developments and emerging patterns.",
          "Think critically about where blockchain does and does not make sense for the business.",
        ],
      },
      {
        kind: "heading",
        text: "Too much",
      },
      {
        kind: "list",
        items: [
          "Trying to shoehorn every new blockchain solution into the company regardless of user need.",
          "Chasing novelty at the expense of focus, reliability or economics.",
        ],
      },
      {
        kind: "heading",
        text: "Too little",
      },
      {
        kind: "list",
        items: [
          "Showing little interest in the space and missing major developments.",
          "Treating the value as branding language rather than a lived standard.",
        ],
      },
      {
        kind: "callout",
        text: "A good Values Deck does not reward extremism. It teaches range: enough to create edge, not so much that it creates chaos.",
      },
      {
        kind: "heading",
        text: "Facilitation cadence",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Draft with leadership",
            note: "Create one page per core value with concrete behavioural language and real examples.",
          },
          {
            title: "Pressure-test with team leads",
            note: "Check whether examples feel practical and whether they help with real trade-off decisions.",
          },
          {
            title: "Use in operating moments",
            note: "Reference value cards in hiring debriefs, performance conversations, retros and all-hands storytelling.",
          },
          {
            title: "Refresh quarterly",
            note: "Update examples as the company stage changes so the value stays alive and relevant.",
          },
        ],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["build-a-culture-that-compounds", "raise-the-talent-bar"],
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
  "kss-feedback": {
    intro:
      "A simple feedback structure that balances reinforcement and change: Keep doing, Start doing, Stop doing.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use KSS when feedback feels heavy, personal or one-sided. The model depersonalises the conversation by focusing on observable behaviours and practical next moves, not character judgments.",
      },
      {
        kind: "paragraph",
        text: "It works especially well with co-founders, direct reports and leadership peers because it forces a fuller picture: what should continue, what is missing, and what is getting in the way.",
      },
      {
        kind: "heading",
        text: "The three prompts",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Keep doing",
            note: "Name behaviours that are working and should continue. Be specific so the person knows what success to repeat.",
            example:
              "Keep doing your weekly stakeholder updates - they reduce surprises and improve trust.",
          },
          {
            title: "Start doing",
            note: "Add one or two behaviours that would increase impact. Keep asks concrete and realistic.",
            example:
              "Start sharing your decision rationale in leadership meetings so the team can align faster.",
          },
          {
            title: "Stop doing",
            note: "Identify behaviours that create friction, confusion or risk. Focus on behaviour and impact, not intent.",
            example:
              "Stop rewriting briefs at the last minute - it creates churn and unclear ownership.",
          },
        ],
      },
      {
        kind: "heading",
        text: "How to run it",
      },
      {
        kind: "list",
        items: [
          "Prepare 1-2 points per section. More than that usually dilutes the conversation.",
          "Start with Keep to anchor strengths, then move to Start and Stop.",
          "Use specific examples from recent weeks, not vague patterns from months ago.",
          "End with one commitment per section and a review date.",
        ],
      },
      {
        kind: "callout",
        text: "KSS is not a softer way to avoid hard feedback. It is a clearer way to hold standards while preserving trust.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "build-incredible-relationships",
          "give-feedback-and-hold-the-standard",
        ],
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
            example:
              "Amazon fulfilment — logistics cost per package drops as volume grows.",
          },
          {
            title: "Network Economies",
            note: "The product becomes more valuable as more people use it. New entrants face a cold-start problem the incumbent does not.",
            example:
              "LinkedIn — more members make the graph more valuable for recruiters and job-seekers.",
          },
          {
            title: "Counter-Positioning",
            note: "A new model incumbents cannot copy without damaging their existing business. Common in origination — before the market leader has locked in.",
            example:
              "Vanguard — index funds undercut active managers without incumbents copying without cannibalising fees.",
          },
          {
            title: "Switching Costs",
            note: "Customers face real cost, risk or friction to leave. Retention compounds even when alternatives exist on paper.",
            example:
              "Salesforce — years of custom workflows and integrations make switching CRM painful.",
          },
          {
            title: "Branding",
            note: "Durable customer preference that supports premium pricing or lower acquisition cost — built over time, not bought overnight.",
            example:
              "Apple — customers pay premium prices and queue for launches without comparison shopping.",
          },
          {
            title: "Cornered Resource",
            note: "Preferential access to a scarce asset competitors cannot get: talent, IP, distribution, data or relationships.",
            example:
              "Pixar — a creative team and culture competitors could not assemble overnight.",
          },
          {
            title: "Process Power",
            note: "Embedded ways of working that improve outcomes in ways rivals cannot easily replicate — often visible only after years of refinement.",
            example:
              "Google — search ranking and ad auction quality refined over decades of iteration.",
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
        kind: "callout",
        text: "Before a fundraise, investors will pressure-test your powers — not your feature list. Ask: what would make this company a hell yes on durable advantage, not just current traction?",
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
  "saboteurs-quiz": {
    intro:
      "Use the Positive Intelligence Saboteur Assessment as a simple doorway into the negative stories and inner critics that hijack you under pressure.",
    blocks: [
      {
        kind: "paragraph",
        text: "This works best as a naming device, not a diagnosis. The point is not to become obsessed with a score; it is to get language for the patterns that most often take the wheel in hard moments.",
      },
      {
        kind: "callout",
        text: "The Source / credit link below goes straight to the official assessment.",
      },
      {
        kind: "heading",
        text: "What to expect",
      },
      {
        kind: "list",
        items: [
          "Everyone has the Judge: the universal inner critic that attacks you, others, or your circumstances.",
          "Most founders also have two or three accomplice saboteurs that show up in their stress patterns.",
          "After you take the quiz, do not stop at the label. Ask when it shows up, what it says, and what it thinks it is protecting.",
        ],
      },
      {
        kind: "heading",
        text: "The 10 saboteurs",
      },
      {
        kind: "table",
        columns: ["Saboteur", "How it often shows up in founders"],
        rows: [
          ["Judge", "The master critic: self-attack, blame, catastrophising, and constant focus on what is wrong."],
          ["Avoider", "Keeps things pleasant, dodges hard conversations, and stays busy around the real issue."],
          ["Controller", "Tightens grip, struggles to trust, and gets impatient when people do not move your way."],
          ["Hyper-Achiever", "Ties self-worth to winning, status and visible success; the last achievement never feels like enough."],
          ["Hyper-Rational", "Over-indexes on logic, analysis and detachment; relationships start to feel like messy data problems."],
          ["Hyper-Vigilant", "Scans for threats, assumes something is about to go wrong, and finds it hard to stand down."],
          ["Pleaser", "Rescues, accommodates and smooths things over to stay liked, then quietly resents the cost."],
          ["Restless", "Chases novelty, busyness and the next hit of stimulation; struggles to stay with the boring important thing."],
          ["Stickler", "Turns standards into perfectionism and order into rigidity; good work gets stuck waiting to be flawless."],
          ["Victim", "Gets pulled into the pain of the story, hardship or martyrdom, and can start organising identity around it."],
        ],
      },
      {
        kind: "heading",
        text: "What to do with the result",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Name your top patterns",
            note: "Circle the Judge and the two or three accomplices that feel most familiar. Fewer patterns, noticed well, beats a long list you never use.",
          },
          {
            title: "Spot the trigger",
            note: "For each one, ask what tends to wake it up: disagreement, ambiguity, criticism, a board meeting, a missed deadline, a cofounder wobble.",
          },
          {
            title: "Choose one interruption",
            note: "Do not promise total transformation. Pick one small move that breaks the pattern: a pause, a question, a compliment, a looser grip, a harder truth told sooner.",
          },
        ],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["face-my-shadow"],
      },
    ],
  },
  "strength-in-shadow": {
    intro:
      "Map how one of your best qualities turns into a liability when overused, then find the balancing quality that brings it back into service.",
    blocks: [
      {
        kind: "paragraph",
        text: "This is useful when a pattern feels confusing because it has a virtue baked into it. People-pleasing often starts as care. Criticism often starts as standards. Control often starts as agency. The point is not to amputate the strength; it is to see what happens when it tips into shadow.",
      },
      {
        kind: "heading",
        text: "Example map",
      },
      {
        kind: "image",
        src: "/images/os/strength-in-shadow.svg",
        alt: "Strength in Shadow example showing detail-oriented and realistic becoming worrying when overused, with cautiously optimistic as the balancing quality.",
      },
      {
        kind: "heading",
        text: "How to fill it in",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Name the strength",
            note: "Start with the quality other people appreciate in you and that you often take for granted in yourself.",
          },
          {
            title: "Name the shadow",
            note: "Ask what too much of that good thing looks like when pressure rises. This is usually the thing other people end up blaming you for.",
          },
          {
            title: "Find the counterbalance",
            note: "Look for the healthy opposite that would make the strength usable again rather than overbearing. Not the negation of the strength — the balancing quality.",
          },
          {
            title: "Notice the overreaction",
            note: "Then ask what you cannot stand in others. That irritation often points to the balancing quality pushed too far, which reveals what you are missing in yourself.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Prompt bubbles",
      },
      {
        kind: "list",
        items: [
          "What I take for granted in myself",
          "What others appreciate in me",
          "What I expect or demand in others",
          "What others blame me for",
          "What I tend to justify in myself",
          "What I admire in others",
          "What others wish I had more of",
          "What I miss in myself",
          "What I despise in others",
          "What I would hate in myself",
        ],
      },
      {
        kind: "callout",
        text: "The helpful reframe is simple: your weakness is often not the opposite of your strength. It is your strength, turned up too far.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["face-my-shadow"],
      },
    ],
  },
  "council-of-me": {
    intro:
      "Personify the versions of you that keep showing up, bring them into the same room, and ask what each is trying to protect.",
    blocks: [
      {
        kind: "paragraph",
        text: "This is a light-touch reflection exercise for making inner patterns easier to hear. The move is not to exile a part of you; it is to understand what role it thinks it is playing, then choose more consciously which version of you gets the microphone.",
      },
      {
        kind: "heading",
        text: "Set up the room",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Name the characters",
            note: "Write down three or four recurring selves: people-pleaser you, control-freak you, backpacker you, critic you, peacemaker you, whatever is real.",
          },
          {
            title: "Invite them in",
            note: "Picture them sitting around a table. Let each one have a voice instead of trying to flatten them into one blurry mood.",
          },
          {
            title: "Ask the same questions",
            note: "What are you trying to protect? What are you afraid will happen if you stop? What do you need from me? What do you want for me?",
          },
          {
            title: "Choose the chair at the head of the table",
            note: "Thank each part for what it is trying to do, then decide which adult version of you makes the call now.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Questions worth asking",
      },
      {
        kind: "list",
        items: [
          "When do you usually show up?",
          "What story do you keep telling me?",
          "What are you trying to save me from?",
          "What do you help me do well?",
          "What cost do you create when you take over?",
          "What would help you relax a little?",
        ],
      },
      {
        kind: "callout",
        text: "If this exercise opens something that feels extreme, traumatic or destabilising, pause and work with a therapist rather than forcing your way through it alone.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["face-my-shadow"],
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
        capabilityIds: ["make-ownership-stick", "map-the-destination"],
      },
    ],
  },
  "six-thinking-hats": {
    intro:
      "A way to pull a group — or your own head — through six modes of thinking one at a time, so a decision gets looked at from every angle instead of the loudest voice or your default lens.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when a decision is going in circles, when one person dominates the room, or when you notice you only ever look at calls through a single lens — usually all risk, or all optimism. The trick is that everyone wears the same hat at the same time: you get the whole group's caution, then the whole group's optimism, rather than the pessimist and the optimist fighting.",
      },
      {
        kind: "heading",
        text: "The six hats",
      },
      {
        kind: "table",
        columns: ["Hat", "Mode", "The question it asks"],
        rows: [
          ["White", "Facts", "What do we actually know, and what's missing?"],
          ["Red", "Feelings", "What's your gut say? No justification needed."],
          ["Black", "Caution", "What could go wrong? (Useful — but don't let it run the whole meeting.)"],
          ["Yellow", "Optimism", "What's the upside, the best case, why it could work?"],
          ["Green", "Creativity", "What other options haven't we considered?"],
          ["Blue", "Process", "How are we running this? Set the agenda, then summarise the call."],
        ],
      },
      {
        kind: "callout",
        text: "Start and end with the Blue hat: open by framing the decision, close by naming what was actually decided. Most stuck decisions are really a missing Green hat (no real alternatives) or an unchallenged Black hat (fear masquerading as analysis).",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["make-the-right-calls"],
      },
    ],
  },
  "three-cs-decision": {
    intro:
      "A simple model for running a decision: decide how much of it you Create yourself, who you Collaborate with, and how you Communicate it — so everyone knows whether they're being asked to shape a call or just hear it.",
    blocks: [
      {
        kind: "paragraph",
        text: "Most decision friction is a mismatch of expectations: people think they're collaborating when you've already decided, or you think you communicated something you never actually created a clear view on. Naming which mode you're in removes most of that friction before it starts.",
      },
      {
        kind: "diagram",
        diagramId: "three-cs-decision",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Create",
            note: "You form the strategy or decision yourself, or with a cofounder. The thinking work only you can do — don't outsource it to a meeting.",
          },
          {
            title: "Collaborate",
            note: "Bring in the few people who should genuinely shape the call. Ask for input, dissent and feedback while it's still open — not after it's fixed.",
          },
          {
            title: "Communicate",
            note: "Once it's decided, share it and the why with everyone who has to act on it. This is not the moment to reopen the debate.",
          },
        ],
      },
      {
        kind: "callout",
        text: "In a ~30-person company, most big calls run the same way: the founders and heads collaborate, and once that's done it gets communicated to the team. Trouble starts when you skip a stage — communicating something you never collaborated on, or 'collaborating' on something you'd already decided.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["make-the-right-calls", "make-ownership-stick"],
      },
    ],
  },
  "double-diamond": {
    intro:
      "A four-phase shape for solving a problem well: diverge then converge, twice — first to find the right problem, then to find the right solution.",
    blocks: [
      {
        kind: "paragraph",
        text: "Founders — technical ones especially — tend to jump to the first workable solution. The Double Diamond forces you to widen before you narrow, so you don't end up building the wrong thing beautifully.",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Discover (widen)",
            note: "Explore the problem broadly. Talk to users, gather signal, resist the urge to solve it yet.",
          },
          {
            title: "Define (narrow)",
            note: "Converge on the real problem worth solving — a single, sharp problem statement.",
          },
          {
            title: "Develop (widen)",
            note: "Generate many possible solutions, not just the obvious one.",
          },
          {
            title: "Deliver (narrow)",
            note: "Pick, prototype and ship the strongest option.",
          },
        ],
      },
      {
        kind: "callout",
        text: "The two diamonds map neatly onto the Outstride process: Diagnose/Define, then Design/Deliver. Same discipline — understand before you decide, options before you commit.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["make-the-right-calls", "chart-the-path"],
      },
    ],
  },
  "first-principles-thinking": {
    intro:
      "Break a problem down to the things you know are actually true, then reason back up — instead of reasoning by analogy from what everyone else does.",
    blocks: [
      {
        kind: "paragraph",
        text: "Reach for this when received wisdom is boxing you in — \"this is just how it's done\", \"it costs what it costs\" — or when a decision feels stuck because you're copying a template that may not fit your company.",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Name the assumption",
            note: "What are you taking as given? (\"We have to hire a senior sales leader now.\")",
          },
          {
            title: "Break it down",
            note: "Strip away convention. What is actually true underneath, independent of how others do it?",
          },
          {
            title: "Rebuild from the truths",
            note: "Reason up from the facts alone. What would you do if no one had ever solved this before?",
          },
        ],
      },
      {
        kind: "callout",
        text: "The classic example: pricing batteries from raw materials rather than the market rate. Reasoning by analogy said \"expensive\"; reasoning from first principles said \"far cheaper than everyone assumes.\"",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["make-the-right-calls", "chart-the-path"],
      },
    ],
  },
  "performance-culture-grid": {
    intro:
      "A simple 2x2 for rating people on role performance and culture fit so talent decisions are explicit, comparable and faster.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this for existing employees and for hiring debriefs. Keep the flow simple: score three role outcomes and three values first, plot the person on the grid second, then use the matching decision card.",
      },
      {
        kind: "heading",
        text: "Score inputs (before plotting)",
      },
      {
        kind: "table",
        columns: ["Performance box (3x JD outcomes)", "Culture box (3x values)"],
        rows: [
          ["1. Role outcome #1 - __/10", "1. Own outcomes - __/10"],
          ["2. Role outcome #2 - __/10", "2. Raise the bar - __/10"],
          ["3. Role outcome #3 - __/10", "3. Build others up - __/10"],
          ["Average = performance score", "Average = culture score"],
        ],
      },
      {
        kind: "list",
        items: [
          "Write each JD line as an outcome, not an activity.",
          "Use evidence from the last 30-90 days for each score.",
          "For hiring, score from structured interview signal, work sample and references.",
        ],
      },
      {
        kind: "heading",
        text: "Culture vs performance grid",
      },
      {
        kind: "diagram",
        diagramId: "culture-performance-grid",
      },
      {
        kind: "heading",
        text: "Decision cards (after plotting)",
      },
      {
        kind: "table",
        columns: ["Card", "Decision", "What to do now"],
        rows: [
          [
            "High performance + high culture",
            "Scale responsibility",
            "Give more scope and build a team around them.",
          ],
          [
            "Low performance + low culture",
            "Exit quickly",
            "They are both a performance miss and cultural detractor.",
          ],
          [
            "High performance + low culture",
            "Manage out at the right time",
            "Short-term output may be useful; long-term culture damage is costly.",
          ],
          [
            "High culture + low performance",
            "Invest if capacity allows",
            "Set a focused development plan with clear timeline and milestones.",
          ],
        ],
      },
      {
        kind: "callout",
        text: "Run this quarterly in calibration meetings and force one clear action per person: scale, invest, manage out, or exit.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "build-a-culture-that-compounds",
          "raise-the-talent-bar",
          "give-feedback-and-hold-the-standard",
        ],
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
        capabilityIds: ["make-ownership-stick"],
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
        capabilityIds: ["make-ownership-stick"],
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
        kind: "callout",
        text: "A common signal: two co-founders describe the company differently to the same investor within a week. That is rarely a comms problem — it usually means one or more of these six answers is still unsettled.",
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
        text: "Optional warm-up: run Blob Tree first if the team is new to hard conversations.",
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
        text: "Works well as a warm-up before Personal Histories + Trust. Keep it curious, not diagnostic — the goal is conversation, not labelling.",
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
  "seven-founder-needs": {
    intro:
      "Seven inputs that keep a founder running, each feeding a different capacity — with a target cadence for every one.",
    blocks: [
      {
        kind: "paragraph",
        text: "What makes this more than a wellness checklist: each need funds a specific capacity. Exercise buys willpower. Sleep buys patience. Solitude buys clarity. Vacation buys perspective. Skip one and you don't just feel worse — a particular capability degrades, usually in the week you need it most.",
      },
      {
        kind: "diagram",
        diagramId: "seven-founder-needs",
      },
      {
        kind: "heading",
        text: "How to use it",
      },
      {
        kind: "list",
        items: [
          "Score each need out of 10 for the last month. The chronically low ones are your energy leaks.",
          "Set your own cadences — the ones shown are starting points, not prescriptions.",
          "Put the two biggest gaps into your habit stack or straight into the calendar this week, then check them in your weekly energy review.",
          "Under pressure, defend these first — they fund exactly the capacities that pressure taxes.",
        ],
      },
      {
        kind: "callout",
        text: "Cheat meals are on the list on purpose: sustainable beats perfect. A diet with three cheats a week is one you'll still be running next year.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["manage-my-energy-system"],
      },
    ],
  },
  "two-equilibria-map": {
    intro:
      "A one-page map of your two stable states — the good equilibrium that keeps you sharp, the bad one that quietly runs you — with the triggers that tip you over and the recovery moves that bring you back.",
    blocks: [
      {
        kind: "paragraph",
        text: "Both states are equilibria: they hold themselves in place. In the good one, planning, real breaks and exercise feed each other and you stay there without effort. In the bad one, reactivity, stress and the caffeine-up, alcohol-down cycle feed each other just as reliably — which is why you do not drift back to good on your own. Getting back takes a deliberate move.",
      },
      {
        kind: "diagram",
        diagramId: "two-equilibria",
      },
      {
        kind: "heading",
        text: "How to fill it in",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Describe your two states",
            note: "In observable behaviours, not moods. What do you do more of in a good stretch — plan the week, take breaks, train? What shows up in a bad one — inbox-driven days, snapping at people, a drink to switch off?",
          },
          {
            title: "Name what tips you over",
            note: "Triggers are personal and they stack: a conference plus travel plus hotels plus caffeine plus late drinks is a different event than any one alone. Acute stressors like a fundraise count too.",
            example: "Two conferences back-to-back plus a board meeting is a known tip-over — plan for it like one.",
          },
          {
            title: "Pre-plan your recovery moves",
            note: "Decide them in advance, because from inside the bad equilibrium you will not invent them. A two-hour slot for a long run, a spa day, sex, a weekend fully offline — whatever reliably resets you, written down and bookable.",
          },
          {
            title: "Wire in a tripwire",
            note: "Add a daily burnout score out of 10 to your habit stack and pre-agree the responses: above 8, stop — take at least a half day. Between 6 and 8, keep working but protect a fully offline weekend.",
          },
          {
            title: "Share it with your cofounder",
            note: "Tell them your triggers and your promises, and hold each other accountable — \"did you book that vacation?\" belongs next to \"did you ship that project?\".",
          },
        ],
      },
      {
        kind: "callout",
        text: "A startup is neither a marathon nor a sprint — it is a marathon with periods of sprinting. Sprints are sometimes the right call: a critical launch, a fundraise. The danger is the sprint with no end date and no recovery booked on the other side.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "build-resilience-and-recovery",
          "manage-my-energy-system",
        ],
      },
    ],
  },
  "live-it-today": {
    intro:
      "A two-part exercise: picture your life five years out in vivid detail, then find the parts of it you can start living this year instead of banking the whole thing on a future payoff.",
    blocks: [
      {
        kind: "paragraph",
        text: "Most founders are running an unexamined trade: sacrifice health, relationships and hobbies now in exchange for a perfect life later. But \"later\" is usually a blur — and when you actually look at it, large parts of it turn out to be available today. This exercise makes the future concrete, then mines it for what you can pull into the present.",
      },
      {
        kind: "heading",
        text: "Part one — visualise five years out",
      },
      {
        kind: "paragraph",
        text: "Close your eyes and drop into an ordinary day five years from now. Don't design it — watch it. Move slowly through the prompts and let the detail fill in.",
      },
      {
        kind: "list",
        items: [
          "Where do you wake up, and who is next to you? Kids, animals, anyone else in the house?",
          "What is the feeling in your body as you wake — and what does the perfect day ahead look like?",
          "Are you still working? What kind, and how much? All-in, or more advisory?",
          "How are your friendships and family time? What are you doing with them?",
          "What are you actually into — the hobbies, the training, the things that are just yours?",
          "How is your health and your mental health? What is your relationship with money — living off wealth, or still earning?",
        ],
      },
      {
        kind: "heading",
        text: "Part two — which part can you live today?",
      },
      {
        kind: "paragraph",
        text: "Now take each vivid piece and ask the only question that matters: which part of this could I already start living this year? Not the whole thing — one concrete piece. You may not have the money to buy your parents a house, but you can rent an Airbnb once a year and gather the people you love. You don't need the destination to start living what the destination is for.",
      },
      {
        kind: "callout",
        text: "The \"build your own yacht\" idea (from The Real Estate God's essay of that name): a billionaire's yacht buys relationships, time and status — but you don't need the yacht to get what the yacht is for. You can start building that now, at a fraction of the cost.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["build-a-life-worth-scaling-for"],
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
          "build-my-growth-system",
          "build-a-life-worth-scaling-for",
          "take-command-of-my-role",
        ],
      },
    ],
  },
  "human-9": {
    intro:
      "A simple life-wheel diagnostic for founders: score nine human domains, spot the weak links, and turn reflection into one or two concrete next moves.",
    blocks: [
      { kind: "heading", text: "Purpose" },
      {
        kind: "paragraph",
        text: "Create a clear snapshot of how life is actually feeling across relationships, health, lifestyle and money. This is not about perfection; it is about awareness, trade-offs and deliberate choices.",
      },
      { kind: "heading", text: "When to use it" },
      {
        kind: "paragraph",
        text: "Run monthly as a deeper check-in, and revisit quickly in weekly reviews when energy, motivation or stress feels off.",
      },
      { kind: "heading", text: "How to score" },
      {
        kind: "list",
        items: [
          "Score each area from 0-10 (halves are fine, e.g. 7.5).",
          "Use these anchors: 0-3 fragile, 4-6 unstable, 7-8 solid, 9-10 thriving.",
          "Add trend for each area: up, flat or down versus last check-in.",
          "Name one +1 move: the smallest action that would increase this score by one point.",
          "Prioritise one or two areas only; do not try to fix all nine at once.",
        ],
      },
      { kind: "heading", text: "The Human 9" },
      {
        kind: "paragraph",
        text: "You can run this as a Miro-style sticky-note board first (quick visual scan), then complete the table below for trend and +1 moves.",
      },
      {
        kind: "diagram",
        diagramId: "human-9-miro",
      },
      {
        kind: "table",
        columns: ["Pillar", "Area", "Score (0-10)", "Trend", "Why this score?", "+1 move"],
        rows: [
          ["Relationships", "Romantic", "", "", "", ""],
          ["Relationships", "Family", "", "", "", ""],
          ["Relationships", "Friends / Community", "", "", "", ""],
          ["Health", "Physical", "", "", "", ""],
          ["Health", "Mental", "", "", "", ""],
          ["Lifestyle", "Work-Life Balance", "", "", "", ""],
          ["Lifestyle", "Travel, Fun & Hobbies", "", "", "", ""],
          ["Money", "Income", "", "", "", ""],
          ["Money", "Wealth", "", "", "", ""],
        ],
      },
      { kind: "heading", text: "Coaching questions" },
      {
        kind: "list",
        items: [
          "Which score surprises you most?",
          "Which low score is causing downstream pressure elsewhere?",
          "Where are you telling yourself a story that the data does not support?",
          "If one area improved by one point this month, which would create the biggest life lift?",
          "What is the smallest action you can commit to this week?",
        ],
      },
      { kind: "heading", text: "Output / artefact" },
      {
        kind: "list",
        items: [
          "A complete Human 9 score snapshot",
          "Trend signals by area (up, flat, down)",
          "One to two priority +1 moves for the next month",
        ],
      },
      { kind: "heading", text: "Tags" },
      {
        kind: "table",
        columns: ["Layer", "Moment", "Type", "Format", "Depth", "Frequency"],
        rows: [["Human", "Diagnose", "Diagnostic", "Solo / 1:1", "Surface / Operating", "Monthly / Weekly pulse"]],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["manage-my-energy-system"],
      },
    ],
  },
  "symptom-map": {
    intro:
      "Translate felt founder pain into likely capability gaps so coaching focuses on root causes, not surface noise.",
    blocks: [
      { kind: "heading", text: "Purpose" },
      {
        kind: "paragraph",
        text: "Start in the founder's language, then map symptoms to capabilities and choose one or two capabilities to investigate deeply.",
      },
      { kind: "heading", text: "When to use it" },
      {
        kind: "paragraph",
        text: "Use at the start of a coaching relationship, during quarterly planning, or when a recurring complaint keeps returning.",
      },
      { kind: "heading", text: "How it works" },
      {
        kind: "steps",
        steps: [
          { title: "Capture symptom in plain words", note: "Use the founder's sentence exactly as stated." },
          { title: "Map to likely capabilities", note: "Generate 2-4 plausible capability links across Company, Founder and Human layers." },
          { title: "Challenge first diagnosis", note: "Test whether the loudest symptom is a downstream effect." },
          { title: "Select priority focus", note: "Choose one or two capabilities for this quarter's training focus." },
        ],
      },
      { kind: "heading", text: "Example mappings" },
      {
        kind: "table",
        columns: ["Symptom", "Likely capability links"],
        rows: [
          ["My team keeps dropping things.", "Make Ownership Stick / Install the Operating Rhythm / Give Feedback & Hold the Standard"],
          ["I'm still in every decision.", "Make Ownership Stick / Operate at the Right Altitude / Make the Right Calls"],
          ["Everything waits on me.", "Operate at the Right Altitude / Build Leaders, Not Dependencies"],
          ["Things are tense with my cofounder.", "Build Incredible Relationships / Navigate Conflict & Create Psychological Safety"],
          ["We're busy but not moving.", "Found the Cult / Chart the Path"],
          ["I delegate and it comes back worse.", "Make Ownership Stick / Know & Use the Right Leadership Hat"],
          ["I need to raise and we're not ready.", "Find New Capital / Chart the Path"],
          ["I'm exhausted.", "Manage My Energy System / Build Resilience & Recovery"],
          ["I've lost sight of why I'm doing this.", "Build a Life Worth Scaling For"],
        ],
      },
      { kind: "heading", text: "Coaching questions" },
      {
        kind: "list",
        items: [
          "What is the symptom you can name?",
          "How long has this been happening?",
          "What does this usually trigger in you?",
          "Is this the real problem, or a downstream effect?",
          "Which capability, if improved, would make this symptom reduce naturally?",
          "What keeps repeating?",
        ],
      },
      { kind: "heading", text: "Output / artefact" },
      {
        kind: "list",
        items: [
          "Short diagnosis linking symptom to capabilities",
          "Recommended capability focus for the quarter",
        ],
      },
      { kind: "heading", text: "Tags" },
      {
        kind: "table",
        columns: ["Layer", "Moment", "Type", "Format", "Depth", "Frequency"],
        rows: [["Company / Founder / Human", "Diagnose", "Diagnostic / Framework", "1:1 / Team", "Surface / Operating", "Quarterly / As needed"]],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "map-the-destination",
          "chart-the-path",
          "design-the-org",
          "install-the-operating-rhythm",
          "make-ownership-stick",
          "build-a-culture-that-compounds",
          "raise-the-talent-bar",
          "know-my-special-ability",
          "take-command-of-my-role",
          "operate-at-the-right-altitude",
          "make-the-right-calls",
          "know-and-use-the-right-leadership-hat",
          "give-feedback-and-hold-the-standard",
          "build-incredible-relationships",
          "navigate-conflict-and-create-psychological-safety",
          "build-leaders-not-dependencies",
          "be-storyteller-in-chief",
          "manage-capital-and-stakeholders",
          "find-new-capital",
          "manage-my-energy-system",
          "build-resilience-and-recovery",
          "build-my-growth-system",
          "master-my-mindset",
          "face-my-shadow",
          "build-a-life-worth-scaling-for",
        ],
      },
    ],
  },
  "company-health-scorecard": {
    intro:
      "Create a quick quantified view of company health so strategy and operating decisions start from shared reality.",
    blocks: [
      { kind: "heading", text: "Purpose" },
      {
        kind: "paragraph",
        text: "Use score as a conversation opener, not as truth. The point is clarity and priorities, not optics.",
      },
      { kind: "heading", text: "When to use it" },
      {
        kind: "paragraph",
        text: "Run in quarterly planning, strategy days, founder check-ins, board prep, or whenever the founder feels overwhelmed.",
      },
      { kind: "heading", text: "How it works" },
      {
        kind: "list",
        items: [
          "Score each dimension out of 10.",
          "Ask why the score is what it is.",
          "Ask what would move it +1 point.",
          "Mark trend: up, down, or sideways.",
          "Pick one score that matters most this quarter.",
        ],
      },
      { kind: "heading", text: "Suggested dimensions" },
      {
        kind: "table",
        columns: ["Dimension", "Score (0-10)", "Trend", "Notes / next action"],
        rows: [
          ["Growth", "", "", ""],
          ["Strategy", "", "", ""],
          ["Product / service quality", "", "", ""],
          ["Sales / revenue engine", "", "", ""],
          ["Team quality", "", "", ""],
          ["Culture", "", "", ""],
          ["Operating rhythm", "", "", ""],
          ["Ownership / accountability", "", "", ""],
          ["Cash / runway", "", "", ""],
          ["Founder confidence", "", "", ""],
        ],
      },
      { kind: "heading", text: "Coaching questions" },
      {
        kind: "list",
        items: [
          "What score would you give this area out of 10?",
          "Why that score?",
          "What would make it one point higher?",
          "Is this trending up, down or sideways?",
          "Which score matters most this quarter?",
          "Which number, if it moved, would pull the others up?",
        ],
      },
      { kind: "heading", text: "Output / artefact" },
      { kind: "list", items: ["Health score table with trends", "Priority actions for quarter/month"] },
      { kind: "heading", text: "Tags" },
      {
        kind: "table",
        columns: ["Layer", "Moment", "Type", "Format", "Depth", "Frequency"],
        rows: [["Company", "Diagnose / Define", "Diagnostic", "1:1 / Team / Board", "Operating", "Monthly / Quarterly"]],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "map-the-destination",
          "chart-the-path",
          "design-the-org",
          "install-the-operating-rhythm",
          "make-ownership-stick",
          "build-a-culture-that-compounds",
          "raise-the-talent-bar",
          "manage-capital-and-stakeholders",
          "find-new-capital",
        ],
      },
    ],
  },
  "two-hour-constraint": {
    intro:
      "Force prioritisation by asking what survives if the founder only has two hours a day.",
    blocks: [
      { kind: "heading", text: "Purpose" },
      {
        kind: "paragraph",
        text: "Reveal highest-leverage founder work and expose low-value activity hiding as productivity.",
      },
      { kind: "heading", text: "When to use it" },
      {
        kind: "paragraph",
        text: "Use when everything feels important, leverage is unclear, and the founder is busy but not moving the needle.",
      },
      { kind: "heading", text: "How it works" },
      {
        kind: "steps",
        steps: [
          { title: "Apply the constraint", note: "Assume only two working hours per day for the next month." },
          { title: "Choose survivors", note: "List work that still deserves time under the constraint." },
          { title: "Cut list", note: "Mark what disappears immediately: stop, delegate or automate." },
          { title: "Reset calendar", note: "Protect highest-leverage blocks and remove low-value defaults." },
        ],
      },
      { kind: "heading", text: "Coaching questions" },
      {
        kind: "list",
        items: [
          "If you only had two hours a day, what would you do?",
          "What would immediately disappear from your calendar?",
          "What work creates the most value per hour?",
          "What are you doing because it feels productive rather than because it matters?",
          "If you doubled the time on your highest-leverage activity, what would you have to stop?",
          "Who could do this at 80% of your quality, and is 80% enough?",
        ],
      },
      { kind: "heading", text: "Output / artefact" },
      { kind: "list", items: ["Highest-leverage activity list", "Stop/delegate/automate list", "Calendar changes"] },
      { kind: "heading", text: "Tags" },
      {
        kind: "table",
        columns: ["Layer", "Moment", "Type", "Format", "Depth", "Frequency"],
        rows: [["Founder", "Diagnose / Design", "Exercise / Framework", "Solo / 1:1", "Operating", "As needed"]],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "take-command-of-my-role",
          "operate-at-the-right-altitude",
          "make-ownership-stick",
          "build-leaders-not-dependencies",
        ],
      },
    ],
  },
  "ownership-map": {
    intro:
      "Clarify who owns what, what success means, and what decisions each owner can make without founder intervention.",
    blocks: [
      { kind: "heading", text: "Purpose" },
      {
        kind: "paragraph",
        text: "Move ownership from activity to outcomes and install accountability into the system.",
      },
      { kind: "heading", text: "When to use it" },
      {
        kind: "paragraph",
        text: "Use when work keeps dropping, the founder is constantly chasing, or decision rights are unclear.",
      },
      { kind: "heading", text: "How it works" },
      {
        kind: "table",
        columns: ["Outcome", "Owner", "Success metric", "Decision rights", "Cadence", "Escalation", "Evidence"],
        rows: [["", "", "", "", "", "", ""]],
      },
      {
        kind: "callout",
        text: "Start with quarter-critical outcomes only. Too many rows usually means no real priority.",
      },
      { kind: "heading", text: "Coaching questions" },
      {
        kind: "list",
        items: [
          "Who owns this outcome?",
          "Do they own the result or just the activity?",
          "What does good look like?",
          "What decisions can they make without you?",
          "What evidence will tell us it is working?",
          "Where are you still chasing instead of the system creating accountability?",
          "What happens if the owner misses the commitment?",
        ],
      },
      { kind: "heading", text: "Output / artefact" },
      {
        kind: "list",
        items: ["Ownership table", "Decision-rights map", "Accountability cadence"],
      },
      { kind: "heading", text: "Tags" },
      {
        kind: "table",
        columns: ["Layer", "Moment", "Type", "Format", "Depth", "Frequency"],
        rows: [["Company / Founder", "Design / Deliver", "Framework / Template", "1:1 / Team", "Operating", "Quarterly / Monthly"]],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "install-the-operating-rhythm",
          "make-ownership-stick",
          "raise-the-talent-bar",
          "make-the-right-calls",
          "give-feedback-and-hold-the-standard",
          "build-leaders-not-dependencies",
        ],
      },
    ],
  },
  "leadership-hats": {
    intro:
      "Choose the right leadership mode for the person and situation instead of defaulting to advice, control or rescue.",
    blocks: [
      { kind: "heading", text: "Purpose" },
      {
        kind: "paragraph",
        text: "Improve conversation quality and reduce dependency by naming the right hat before you speak.",
      },
      { kind: "heading", text: "When to use it" },
      {
        kind: "paragraph",
        text: "Use before or after important conversations, especially when a founder is frustrated or over-functioning.",
      },
      { kind: "heading", text: "How it works" },
      {
        kind: "table",
        columns: ["Hat", "Primary move"],
        rows: [
          ["Coach", "Help the person think for themselves"],
          ["Mentor", "Share pattern recognition and experience"],
          ["Manager", "Set expectations, standards and accountability"],
          ["Empowerer", "Transfer ownership and decision rights"],
          ["Operator", "Jump in directly to solve"],
          ["CEO / founder", "Set direction, context and constraints"],
        ],
      },
      {
        kind: "list",
        items: [
          "Name which hat you wore.",
          "Check which hat the moment actually needed.",
          "Align on the hat before the next conversation.",
        ],
      },
      { kind: "heading", text: "Coaching questions" },
      {
        kind: "list",
        items: [
          "What hat were you wearing in that conversation?",
          "What hat did the situation actually need?",
          "Were you coaching, mentoring, managing, empowering or rescuing?",
          "Did they know what kind of conversation this was?",
          "What would change if you named the hat upfront?",
          "Where is your default hat creating dependency?",
        ],
      },
      { kind: "heading", text: "Output / artefact" },
      { kind: "list", items: ["Conversation plan", "Leadership mode choice", "Follow-up action"] },
      { kind: "heading", text: "Tags" },
      {
        kind: "table",
        columns: ["Layer", "Moment", "Type", "Format", "Depth", "Frequency"],
        rows: [["Founder", "Diagnose / Design / Deliver", "Framework / Conversation", "1:1 / Team", "Operating", "Weekly / As needed"]],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "know-and-use-the-right-leadership-hat",
          "make-ownership-stick",
          "give-feedback-and-hold-the-standard",
          "build-incredible-relationships",
          "navigate-conflict-and-create-psychological-safety",
          "build-leaders-not-dependencies",
        ],
      },
    ],
  },
  "relationship-design-canvas": {
    intro:
      "Proactively design important relationships so they run on agreements, not assumptions or reactive repair.",
    blocks: [
      { kind: "heading", text: "Purpose" },
      {
        kind: "paragraph",
        text: "Define how a key relationship works before tension hardens into repeated friction.",
      },
      { kind: "heading", text: "When to use it" },
      {
        kind: "paragraph",
        text: "Use for cofounders, execs, key reports, investors, advisors, family members or strategic partners, especially when expectations are implicit.",
      },
      { kind: "heading", text: "How it works" },
      {
        kind: "table",
        columns: ["Canvas element", "Prompt"],
        rows: [
          ["Purpose", "Why does this relationship exist?"],
          ["Needs", "What does each person need to work well?"],
          ["Communication preferences", "How do we each best communicate?"],
          ["Decision rights", "Who decides what?"],
          ["Cadence", "How often do we check in?"],
          ["Tension points", "Where do we predict friction?"],
          ["Repair process", "How do we repair after rupture?"],
          ["Great vs bad", "What does this relationship look like at best and at worst?"],
        ],
      },
      { kind: "heading", text: "Coaching questions" },
      {
        kind: "list",
        items: [
          "What does this relationship need to work well?",
          "What expectations are currently implicit?",
          "Where is trust high, and where is it fragile?",
          "What cadence would keep this relationship healthy?",
          "What communication preference have you not respected?",
          "What conversation are you avoiding?",
          "How do you repair after rupture?",
          "What would this relationship look like at its best?",
        ],
      },
      { kind: "heading", text: "Output / artefact" },
      {
        kind: "list",
        items: ["Relationship operating agreement", "Cadence plan", "Conflict/repair rules"],
      },
      { kind: "heading", text: "Tags" },
      {
        kind: "table",
        columns: ["Layer", "Moment", "Type", "Format", "Depth", "Frequency"],
        rows: [["Founder / Human", "Diagnose / Design / Deliver", "Framework / Conversation / Template", "1:1 / Cofounder / Team", "Operating / Inner work", "Quarterly / As needed"]],
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "build-incredible-relationships",
          "navigate-conflict-and-create-psychological-safety",
          "manage-capital-and-stakeholders",
          "build-my-growth-system",
        ],
      },
    ],
  },
  "relationship-one-pager": {
    intro:
      "A shared one-page operating note for an important relationship: why it matters, what each person needs, and how you keep drift from turning into friction.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when a relationship matters enough that ambiguity is expensive: cofounders, direct reports, lead investors, advisors, chiefs of staff or strategic partners. Build it together. The value is not the document alone; it is the quality of the alignment conversation it forces.",
      },
      {
        kind: "heading",
        text: "What goes on the page",
      },
      {
        kind: "table",
        columns: ["Section", "Prompt"],
        rows: [
          ["Purpose", "Why does this relationship matter right now?"],
          [
            "What great looks like",
            "What would make this relationship obviously working this quarter?",
          ],
          [
            "Mutual expectations",
            "What are we each counting on from the other?",
          ],
          [
            "Communication norms",
            "Which channel, cadence and prep style works best for each of us?",
          ],
          [
            "Decision boundaries",
            "Who decides what, and what should be escalated together?",
          ],
          [
            "Friction signs",
            "What usually tells us this relationship is drifting off track?",
          ],
          [
            "Repair rules",
            "How will we raise tension early and reset when something feels off?",
          ],
          [
            "Current asks",
            "What does each person most need from the other right now?",
          ],
        ],
      },
      {
        kind: "heading",
        text: "How to use it",
      },
      {
        kind: "list",
        items: [
          "Draft it live together. If one person writes it alone, it often lands like a disguised performance memo.",
          "Keep it to one page. Compression forces the real trade-offs and expectations into the open.",
          "Review it monthly in a 1:1, or sooner when roles, stakes or pressure change.",
          "Use the Relationship Design Canvas to open the conversation, then compress the agreements into this working version.",
        ],
      },
      {
        kind: "callout",
        text: "When tension appears, pull out the page and update the agreement before arguing about whose memory is right.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: [
          "build-incredible-relationships",
          "manage-capital-and-stakeholders",
        ],
      },
    ],
  },
  "zone-of-genius": {
    intro:
      "Identify the work only you can do at your highest level of contribution — the intersection of what you're uniquely great at, what gives you energy, and what the company actually needs from you.",
    blocks: [
      {
        kind: "paragraph",
        text: "Use this when you're drowning in work you're good at but that isn't yours to carry, when every hire still routes through you, or when you're about to redesign your role and need a honest filter for what stays on your plate.",
      },
      {
        kind: "diagram",
        diagramId: "zone-of-genius",
      },
      {
        kind: "heading",
        text: "The four zones",
      },
      {
        kind: "list",
        items: [
          "Zone of Incompetence — work you're bad at. Delegate or eliminate.",
          "Zone of Competence — work you can do adequately. Others can handle this.",
          "Zone of Excellence — work you're genuinely good at. This is the seductive trap: it earns praise, feels productive, and quietly eats the time your genius needs.",
          "Zone of Genius — work only you can do at your highest level, that gives you energy rather than draining it.",
        ],
      },
      {
        kind: "callout",
        text: "The things you're merely good at are the most seductive place to waste your time. Excellence feels like contribution — but a founder stuck in the Zone of Excellence is usually the bottleneck the company can't scale past.",
      },
      {
        kind: "heading",
        text: "Find yours",
      },
      {
        kind: "list",
        items: [
          "Energy: what work leaves you more alive after four hours, not less?",
          "Results: where do your outputs clearly outperform what anyone else on the team would produce?",
          "Uniqueness: what could you do better than almost anyone — creating, selling, storytelling, building product, reading a room?",
          "Evidence: when has the company moved fastest because you were in the work, not managing it?",
        ],
      },
      {
        kind: "callout",
        text: "Use genius as a filter: what you keep is built around it; the rest gets hired, delegated or designed away. Your calendar, your org chart and your next hire should all trace back to this answer.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["know-my-special-ability", "take-command-of-my-role"],
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
