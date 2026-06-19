/**
 * Outstride OS content data.
 *
 * Edit this file to update the /os page. Capability and tool lists are
 * complete but descriptions can still be refined over time.
 *
 * Topology: Layer → Capability Group → Capability → Tools + Rhythms
 */

export type LayerId = "company" | "founder" | "human";

export type StageId = "force" | "form" | "flow";

export type ToolType =
  | "diagnostic"
  | "framework"
  | "template"
  | "conversation"
  | "rhythm"
  | "exercise";

export type FormatType = "solo" | "one-to-one" | "team" | "company";

export type RhythmFrequency =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "annual";

export type Layer = {
  id: LayerId;
  title: string;
  question: string;
  description: string;
};

export type Stage = {
  id: StageId;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: "diagnose" | "define" | "design" | "deliver";
  title: string;
  question: string;
  prompts: string[];
};

export type CapabilityGroup = {
  id: string;
  layerId: LayerId;
  title: string;
  description?: string;
  order: number;
};

export type Capability = {
  id: string;
  number: number;
  emoji: string;
  title: string;
  layerId: LayerId;
  groupId?: string;
  summary: string;
  bullets: string[];
  stageHint?: StageId;
  toolIds: string[];
  rhythmIds: string[];
  featured?: boolean;
  order: number;
};

export type Tool = {
  id: string;
  title: string;
  type: ToolType;
  format: FormatType[];
  layerIds: LayerId[];
  capabilityIds: string[];
  description: string;
};

export type Rhythm = {
  id: string;
  title: string;
  frequency: RhythmFrequency;
  layerIds: LayerId[];
  capabilityIds: string[];
  description: string;
};

export type SymptomMapEntry = {
  id: string;
  symptom: string;
  capabilityTitles: string[];
};

export const osQuote =
  "Founders do not scale by becoming more heroic. They scale by building the systems, rhythms, relationships and capabilities that make heroics less necessary.";

export const howOsRunsTrainingPoints = [
  {
    label: "The Capabilities are what you train.",
    text: "The skills and knowledge you build to level up as a founder, leader and human — the full map of what has to work to scale.",
  },
  {
    label: "The Process is how you train.",
    text: "The cadence you run with your coach — the four Ds — to stay honest about where you are and decide what to work on next.",
  },
] as const;

export const howOsRunsFeltProblems = [
  "my team keeps dropping things",
  "I'm in every decision",
  "I need to raise and we're not ready",
] as const;

export const howOsRunsQuarterlyIntro =
  "Each quarter, the cadence runs:";

export const howOsRunsQuarterlySteps = [
  {
    title: "Diagnose",
    description:
      "Start with the pain the founder can name, then trace it to its root: what is working, what is fragile, what is still entirely on you — and whether the loudest symptom is the real problem or a downstream effect of a deeper one.",
  },
  {
    title: "Define",
    description:
      "Set the destination and the next milestone. This decides which capabilities actually matter right now — a pre-seed founder and a Series B founder need different things from the same map.",
  },
  {
    title: "Design",
    description:
      "Pick the two to four capabilities to train this quarter: the ones that are holding you back and stand between you and the next milestone. Not all 26 — just the few that count.",
  },
  {
    title: "Deliver",
    description:
      "Install the cadence, tools and accountability to actually shift them. Then re-Diagnose next quarter.",
  },
];

export const symptomMapIntro =
  "The way into a Diagnose conversation. A founder recognises themselves in a sentence long before they recognise a capability — so start with what they say, then follow it to what it points to.";

export const symptomMapOutro =
  "A symptom usually points to more than one capability, and the loudest one is rarely the whole story — so the map opens the conversation rather than closing it. From there, Define and Design turn the chosen capabilities into the work for the quarter.";

export const toolsIntro =
  "Tools sit underneath capabilities. A tool is anything that helps diagnose, practise, install or review a capability.";

export const toolsTaggingNote =
  "Tools can be tagged by layer (Company / Founder / Human), capability (1–26), type (Diagnostic / Framework / Template / Conversation / Rhythm / Exercise) and format (Solo / 1:1 / Team / Company).";

export const layers: Layer[] = [
  {
    id: "company",
    title: "Company",
    question: "What are we building, and how does it run?",
    description:
      "The direction, structure, culture and operating system that allow the company to scale beyond founder force.",
  },
  {
    id: "founder",
    title: "Founder",
    question: "Who must I become to lead the next stage?",
    description:
      "The founder's role, judgement, leadership, relationships and ability to scale themselves.",
  },
  {
    id: "human",
    title: "Human",
    question: "What is this all for, and how do I stay whole?",
    description:
      "The founder's energy, resilience, identity, support system and life outside the company.",
  },
];

export const stages: Stage[] = [
  {
    id: "force",
    title: "Force",
    description: "It works because you personally push it.",
  },
  {
    id: "form",
    title: "Form",
    description:
      "It works because there is structure, cadence, ownership and standards.",
  },
  {
    id: "flow",
    title: "Flow",
    description:
      "It works because the system, team or relationship runs without you.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "diagnose",
    title: "Diagnose",
    question: "Where does it hurt, and why?",
    prompts: [
      "Start where the pain is. Founders arrive with a felt problem — \"I'm in every decision,\" \"my team keeps dropping things,\" \"I'm exhausted\" — not a request for an operating system.",
      "Trace the symptom to its root: is the loudest pain the real problem, or a downstream effect of a deeper one?",
      "Read the whole board across the company, founder and human layers, and name the biggest opportunities and threats.",
    ],
  },
  {
    id: "define",
    title: "Define",
    question: "Where are we going?",
    prompts: [
      "What drives us, and what is the next major milestone?",
      "What are the most important company goals for the next year and quarter?",
      "How will we know if we are winning, and what could throw us off?",
    ],
  },
  {
    id: "design",
    title: "Design",
    question: "What needs to change?",
    prompts: [
      "What gaps stand between current reality and the next stage?",
      "What needs to change in the org, people, culture, founder role, relationships or capital?",
      "Which two to four capabilities do we commit to this quarter?",
    ],
  },
  {
    id: "deliver",
    title: "Deliver",
    question: "How do we make it happen?",
    prompts: [
      "What cadence, tools and accountability loops will keep this alive?",
      "What weekly, monthly and quarterly rhythms need to be installed?",
      "How do we build in accountability so this actually happens?",
    ],
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "company-system",
    layerId: "company",
    title: "Company System",
    order: 1,
  },
  {
    id: "lead-myself",
    layerId: "founder",
    title: "Lead Myself",
    order: 2,
  },
  {
    id: "lead-others",
    layerId: "founder",
    title: "Lead Others",
    order: 3,
  },
  {
    id: "lead-the-game",
    layerId: "founder",
    title: "Lead the Game",
    order: 4,
  },
  {
    id: "human-system",
    layerId: "human",
    title: "Human System",
    order: 5,
  },
];

export const capabilities: Capability[] = [
  {
    id: "map-the-destination",
    number: 1,
    emoji: "🗺️",
    title: "Map the Destination",
    layerId: "company",
    groupId: "company-system",
    summary: "",
    bullets: [
      "Define the problem, mission, vision and next big juicy milestone.",
      "Clarify what the company is and what it is not.",
      "Create a destination simple enough for the team to understand and repeat.",
    ],
    toolIds: ["strategy-one-pager", "ceo-test"],
    rhythmIds: ["quarterly-strategy-reset"],
    order: 1,
  },
  {
    id: "chart-the-path",
    number: 2,
    emoji: "🧭",
    title: "Chart the Path",
    layerId: "company",
    groupId: "company-system",
    summary: "",
    bullets: [
      "Turn the destination into meaningful annual and quarterly company goals.",
      "Cascade goals down the organisation so teams know how their work contributes.",
      "Connect the North Star Metric to supporting KPIs, OKRs and team goals.",
    ],
    toolIds: ["north-star-metric", "okrs"],
    rhythmIds: [],
    order: 2,
  },
  {
    id: "design-the-org",
    number: 3,
    emoji: "🏗️",
    title: "Design the Org",
    layerId: "company",
    groupId: "company-system",
    summary: "",
    bullets: [
      "Identify the roles, structure and leadership capacity needed for the next milestone.",
      "Spot where the current org will break before it actually breaks.",
      "Decide what needs to be hired, promoted, delegated or redesigned.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 3,
  },
  {
    id: "install-the-operating-rhythm",
    number: 4,
    emoji: "🔄",
    title: "Install the Operating Rhythm",
    layerId: "company",
    groupId: "company-system",
    summary: "",
    bullets: [
      "Create the weekly, monthly, quarterly and annual cadence that runs the company.",
      "Give each meeting a clear job — strategy, review and accountability, decisions, or connection — so the right conversation happens at the right frequency.",
      "Reduce reactive chaos by giving planning, review and accountability a home.",
    ],
    toolIds: ["operating-cadence", "quarterly-retro"],
    rhythmIds: ["weekly-leadership-meeting", "monthly-business-review"],
    order: 4,
  },
  {
    id: "make-ownership-stick",
    number: 5,
    emoji: "🎯",
    title: "Make Ownership Stick",
    layerId: "company",
    groupId: "company-system",
    summary: "",
    bullets: [
      "Make people own outcomes, not just tasks.",
      "Clarify who owns what, how success is measured and what decisions they can make.",
      "Build accountability into the system so the founder is not constantly chasing.",
    ],
    toolIds: ["ownership-map", "delegation-ladder"],
    rhythmIds: ["weekly-ownership-review"],
    order: 5,
  },
  {
    id: "build-a-culture-that-compounds",
    number: 6,
    emoji: "🌱",
    title: "Build a Culture That Compounds",
    layerId: "company",
    groupId: "company-system",
    summary: "",
    bullets: [
      "Discover the company's DNA and translate it into values, behaviours and rituals.",
      "Define what \"great\" looks like in both performance and behaviour.",
      "Make culture visible through decisions, feedback, hiring, rituals and consequences.",
    ],
    toolIds: ["company-values"],
    rhythmIds: [],
    order: 6,
  },
  {
    id: "raise-the-talent-bar",
    number: 7,
    emoji: "📈",
    title: "Raise the Talent Bar",
    layerId: "company",
    groupId: "company-system",
    summary: "",
    bullets: [
      "Build a consistent, simple way of evaluating performance and potential.",
      "Give people the tools, feedback and support to improve.",
      "Create a talent system that raises the level of the company over time.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 7,
  },
  {
    id: "take-command-of-my-role",
    number: 8,
    emoji: "🎖️",
    title: "Take Command of My Role",
    layerId: "founder",
    groupId: "lead-myself",
    summary: "",
    bullets: [
      "Identify your unique ability: what can you do better than almost anyone else?",
      "Define the founder role required for the next period.",
      "Clarify how your role needs to evolve as the company scales.",
    ],
    toolIds: ["founder-jd", "founder-calendar-audit", "zone-of-genius"],
    rhythmIds: ["monthly-calendar-detox"],
    order: 8,
  },
  {
    id: "operate-with-leverage",
    number: 9,
    emoji: "⚡",
    title: "Operate with Leverage",
    layerId: "founder",
    groupId: "lead-myself",
    summary: "",
    bullets: [
      "Identify the few activities where you create the most value — and the bottlenecks where everything waits on you.",
      "Put your time and attention there, and protect it ruthlessly.",
      "Cut, delegate or kill low-value meetings, context-switching and reactive work.",
    ],
    toolIds: ["founder-calendar-audit"],
    rhythmIds: ["weekly-planning"],
    order: 9,
  },
  {
    id: "operate-at-the-right-altitude",
    number: 10,
    emoji: "🪂",
    title: "Operate at the Right Altitude",
    layerId: "founder",
    groupId: "lead-myself",
    summary: "",
    bullets: [
      "Decide what each part of your work needs from you: doing it, leading it, or building the system that runs it (Force → Form → Flow).",
      "Climb a level as the company grows, rather than staying where you are most comfortable.",
      "Catch yourself when you have dropped back into the weeds, and get back to the right altitude.",
    ],
    toolIds: ["force-form-flow-diagnostic", "founder-calendar-audit"],
    rhythmIds: ["weekly-planning"],
    order: 10,
  },
  {
    id: "make-the-right-calls",
    number: 11,
    emoji: "⚖️",
    title: "Make the Right Calls",
    layerId: "founder",
    groupId: "lead-myself",
    summary: "",
    bullets: [
      "Know which decisions are yours to make, which to delegate, and which to escalate.",
      "Match the rigour to the stakes: move fast on reversible calls, slow down on the ones you cannot undo.",
      "Cut decision congestion — no repeated debates, no unclear ownership, no calls stuck waiting on you.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 11,
  },
  {
    id: "scale-through-delegation",
    number: 12,
    emoji: "🤝",
    title: "Scale Through Delegation",
    layerId: "founder",
    groupId: "lead-others",
    summary: "",
    bullets: [
      "Transfer responsibility for results, not just activities.",
      "Set clear expectations around goals, standards, risks and decision boundaries.",
      "Understand the levels of delegation and create a delegation timeline.",
    ],
    toolIds: ["delegation-ladder", "ownership-map"],
    rhythmIds: ["weekly-ownership-review"],
    order: 12,
  },
  {
    id: "know-and-use-the-right-leadership-hat",
    number: 13,
    emoji: "🎩",
    title: "Know & Use the Right Leadership Hat",
    layerId: "founder",
    groupId: "lead-others",
    summary: "",
    bullets: [
      "Switch deliberately between coach, mentor, empowerer and manager, depending on the person and the situation.",
      "Default to coaching where you can: help people think for themselves and leave them more capable after each conversation, rather than handing over answers.",
      "Notice your own default hat and where it creates bias, and choose the mode that best serves the person's growth and the outcome.",
    ],
    toolIds: ["coaching-questions"],
    rhythmIds: [],
    order: 13,
  },
  {
    id: "give-feedback-and-hold-the-standard",
    number: 14,
    emoji: "📣",
    title: "Give Feedback & Hold the Standard",
    layerId: "founder",
    groupId: "lead-others",
    summary: "",
    bullets: [
      "Make positive and corrective feedback a normal part of your operating cadence.",
      "Challenge missed commitments clearly and early, in a way that changes behaviour.",
      "Separate care for the person from clarity about the standard — and catch issues before they become resentment, politics or performance problems.",
    ],
    toolIds: ["sbi-feedback", "kss-feedback", "accountability-dial"],
    rhythmIds: [],
    order: 14,
  },
  {
    id: "build-incredible-relationships",
    number: 15,
    emoji: "💬",
    title: "Build Incredible Relationships",
    layerId: "founder",
    groupId: "lead-others",
    summary: "",
    bullets: [
      "Proactively design your most important working relationships.",
      "Clarify expectations, cadence, communication preferences and decision rights.",
      "Apply this to cofounders, execs, reports, advisors and key partners.",
    ],
    toolIds: ["relationship-design", "one-to-one-structure"],
    rhythmIds: ["monthly-relationship-review"],
    order: 15,
  },
  {
    id: "navigate-conflict-and-create-psychological-safety",
    number: 16,
    emoji: "🛡️",
    title: "Navigate Conflict & Create Psychological Safety",
    layerId: "founder",
    groupId: "lead-others",
    summary: "",
    bullets: [
      "Build enough trust that people can say hard truths early, disagree openly and admit mistakes without fear.",
      "Turn tension into clarity instead of politics, avoidance or resentment, and prepare for hard conversations with structure and emotional discipline.",
      "Spot when safety is missing and rebuild it deliberately.",
    ],
    toolIds: ["psychological-safety-diagnostic"],
    rhythmIds: [],
    order: 16,
  },
  {
    id: "build-leaders-not-dependencies",
    number: 17,
    emoji: "🌳",
    title: "Build Leaders, Not Dependencies",
    layerId: "founder",
    groupId: "lead-others",
    summary: "",
    bullets: [
      "Teach the capabilities you have built in yourself to the leaders around you, instead of hoarding them.",
      "Develop people who can lead their domain — make the calls, hold the standard, coach their own teams — without constant founder input.",
      "Move from managing everyone to managing managers and leaders.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 17,
  },
  {
    id: "be-storyteller-in-chief",
    number: 18,
    emoji: "📖",
    title: "Be Storyteller in Chief",
    layerId: "founder",
    groupId: "lead-the-game",
    summary: "",
    bullets: [
      "Communicate the company's direction in a way people believe, remember and act on.",
      "Adapt the story for team, candidates, customers, investors and board.",
      "Use narrative to create alignment, confidence and momentum.",
    ],
    toolIds: ["investor-update"],
    rhythmIds: ["monthly-all-hands"],
    order: 18,
  },
  {
    id: "manage-capital-and-stakeholders",
    number: 19,
    emoji: "💼",
    title: "Manage Capital and Stakeholders",
    layerId: "founder",
    groupId: "lead-the-game",
    summary: "",
    bullets: [
      "Keep existing investors, board members and key stakeholders informed and aligned.",
      "Run board and investor conversations with preparation, candour and strategic intent.",
      "Use stakeholders as assets rather than treating them as reporting obligations.",
    ],
    toolIds: ["board-pack", "investor-update"],
    rhythmIds: [],
    order: 19,
  },
  {
    id: "find-new-capital",
    number: 20,
    emoji: "💰",
    title: "Find New Capital",
    layerId: "founder",
    groupId: "lead-the-game",
    summary: "",
    bullets: [
      "Create investor belief through narrative, traction, timing and process.",
      "Build and manage a fundraising pipeline with discipline.",
      "Turn company progress into the capital required for the next stage.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 20,
  },
  {
    id: "manage-my-energy-system",
    number: 21,
    emoji: "🔋",
    title: "Manage My Energy System",
    layerId: "human",
    groupId: "human-system",
    summary: "",
    bullets: [
      "Understand what creates, drains and restores founder energy.",
      "Build a rhythm that does not depend on permanent overextension.",
      "Design work around sustainable performance, not just availability.",
    ],
    toolIds: ["human-9", "energy-audit"],
    rhythmIds: ["weekly-energy-review", "monthly-calendar-detox"],
    order: 21,
  },
  {
    id: "build-resilience-and-recovery",
    number: 22,
    emoji: "🧘",
    title: "Build Resilience & Recovery",
    layerId: "human",
    groupId: "human-system",
    summary: "",
    bullets: [
      "Watch for signs of burnout, stress and emotional overload.",
      "Create playbooks in advance for difficult periods.",
      "Build resilience to stay in a good state and recover quickly from a bad one.",
    ],
    toolIds: ["burnout-playbook"],
    rhythmIds: [],
    order: 22,
  },
  {
    id: "build-my-growth-system",
    number: 23,
    emoji: "🌐",
    title: "Build My Growth System",
    layerId: "human",
    groupId: "human-system",
    summary: "",
    bullets: [
      "Build the right mix of coach, mentors, peers, cofounders, friends, family and advisors.",
      "Create a personal board that supports, challenges and expands you.",
      "Turn growth into a deliberate system rather than random inspiration.",
    ],
    toolIds: ["personal-board"],
    rhythmIds: [],
    order: 23,
  },
  {
    id: "master-my-mindset",
    number: 24,
    emoji: "🧠",
    title: "Master My Mindset",
    layerId: "human",
    groupId: "human-system",
    summary: "",
    bullets: [
      "Explore and define the mindset that will best serve the next stage.",
      "Learn how to unlock, practise and maintain that mindset.",
      "Notice when old beliefs, fears or narratives are driving behaviour.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 24,
  },
  {
    id: "face-my-shadow",
    number: 25,
    emoji: "🪞",
    title: "Face My Shadow",
    layerId: "human",
    groupId: "human-system",
    summary: "",
    bullets: [
      "Understand the ugly or uncomfortable parts of yourself and how they show up under stress.",
      "Work with patterns like control, people-pleasing, avoidance, rescuing or status hunger.",
      "Turn self-awareness into cleaner leadership behaviour.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 25,
  },
  {
    id: "build-a-life-worth-scaling-for",
    number: 26,
    emoji: "🏡",
    title: "Build a Life Worth Scaling For",
    layerId: "human",
    groupId: "human-system",
    summary: "",
    bullets: [
      "Define what the company is meant to make possible in life.",
      "Make the business serve the human, not consume them.",
      "Connect daily effort to meaning, values, relationships, freedom and personal conviction.",
    ],
    toolIds: [],
    rhythmIds: [],
    order: 26,
  },
];

export const symptomMap: SymptomMapEntry[] = [
  {
    id: "team-dropping-things",
    symptom: "My team keeps dropping things.",
    capabilityTitles: [
      "Make Ownership Stick",
      "Install the Operating Rhythm",
      "Give Feedback & Hold the Standard",
    ],
  },
  {
    id: "every-decision",
    symptom: "I'm still in every decision.",
    capabilityTitles: [
      "Operate with Leverage",
      "Scale Through Delegation",
      "Make the Right Calls",
    ],
  },
  {
    id: "bottleneck",
    symptom: "Everything waits on me — I'm the bottleneck.",
    capabilityTitles: [
      "Operate with Leverage",
      "Build Leaders, Not Dependencies",
    ],
  },
  {
    id: "cofounder-tension",
    symptom: "Things are tense with my cofounder.",
    capabilityTitles: [
      "Build Incredible Relationships",
      "Navigate Conflict & Create Psychological Safety",
    ],
  },
  {
    id: "no-rhythm",
    symptom: "We have no rhythm — it's all reactive.",
    capabilityTitles: ["Install the Operating Rhythm"],
  },
  {
    id: "busy-not-moving",
    symptom: "We're busy but not actually moving.",
    capabilityTitles: ["Map the Destination", "Chart the Path"],
  },
  {
    id: "delegation-comes-back",
    symptom: "I delegate and it comes back worse.",
    capabilityTitles: [
      "Scale Through Delegation",
      "Know & Use the Right Leadership Hat",
    ],
  },
  {
    id: "vision-doesnt-land",
    symptom: "I keep repeating the vision and it doesn't land.",
    capabilityTitles: ["Be Storyteller in Chief", "Map the Destination"],
  },
  {
    id: "not-ready-to-raise",
    symptom: "I need to raise and we're not ready.",
    capabilityTitles: ["Find New Capital", "Chart the Path"],
  },
  {
    id: "board-painful",
    symptom: "Board meetings are painful.",
    capabilityTitles: ["Manage Capital and Stakeholders"],
  },
  {
    id: "exhausted",
    symptom: "I'm exhausted and running on empty.",
    capabilityTitles: [
      "Manage My Energy System",
      "Build Resilience & Recovery",
    ],
  },
  {
    id: "same-patterns",
    symptom: "The same patterns keep tripping me up.",
    capabilityTitles: ["Face My Shadow", "Master My Mindset"],
  },
  {
    id: "lost-sight",
    symptom: "I've lost sight of why I'm doing this.",
    capabilityTitles: ["Build a Life Worth Scaling For"],
  },
];

export const tools: Tool[] = [
  {
    id: "symptom-map",
    title: "Symptom Map",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["company", "founder", "human"],
    capabilityIds: [],
    description:
      "Start with what the founder says, then trace symptoms to the capabilities they point to.",
  },
  {
    id: "ceo-test",
    title: "CEO Test",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["company", "founder"],
    capabilityIds: ["map-the-destination"],
    description:
      "Test whether the founder knows the next milestone, plan, risks and team confidence.",
  },
  {
    id: "strategy-one-pager",
    title: "Strategy One-Pager",
    type: "template",
    format: ["solo", "team", "company"],
    layerIds: ["company"],
    capabilityIds: ["map-the-destination"],
    description:
      "A one-page summary of destination, strategy, priorities, risks and what good looks like.",
  },
  {
    id: "north-star-metric",
    title: "North Star Metric",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["chart-the-path", "map-the-destination"],
    description:
      "Define the single metric that best captures progress toward the destination.",
  },
  {
    id: "company-values",
    title: "Company Values",
    type: "template",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["build-a-culture-that-compounds"],
    description:
      "Translate company DNA into values, behaviours and rituals the team can live.",
  },
  {
    id: "okrs",
    title: "OKRs",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["chart-the-path"],
    description:
      "Connect annual and quarterly goals to team priorities and measurable outcomes.",
  },
  {
    id: "operating-cadence",
    title: "Operating Cadence",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["install-the-operating-rhythm"],
    description:
      "The weekly, monthly, quarterly and annual rhythm that keeps the company aligned.",
  },
  {
    id: "quarterly-retro",
    title: "Quarterly Retro",
    type: "rhythm",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["install-the-operating-rhythm"],
    description:
      "A structured review of the previous quarter before setting the next one.",
  },
  {
    id: "monthly-calendar-detox",
    title: "Monthly Calendar Detox",
    type: "exercise",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "human"],
    capabilityIds: ["take-command-of-my-role", "manage-my-energy-system"],
    description:
      "Clean up the founder calendar so it reflects role, priorities and sustainable performance.",
  },
  {
    id: "founder-calendar-audit",
    title: "Founder Calendar Audit",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "human"],
    capabilityIds: [
      "take-command-of-my-role",
      "operate-with-leverage",
      "operate-at-the-right-altitude",
    ],
    description:
      "Compare the founder's actual calendar to their intended role, energy and priorities.",
  },
  {
    id: "founder-jd",
    title: "Founder JD",
    type: "template",
    format: ["solo", "one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["take-command-of-my-role"],
    description:
      "Defines the founder's actual job for the current stage in a few clear bullets.",
  },
  {
    id: "zone-of-genius",
    title: "Zone of Genius",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["take-command-of-my-role"],
    description:
      "Identify the work only you can do at your highest level of contribution.",
  },
  {
    id: "delegation-ladder",
    title: "Delegation Ladder",
    type: "framework",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["scale-through-delegation", "make-ownership-stick"],
    description:
      "A framework for moving from task delegation to full ownership.",
  },
  {
    id: "ownership-map",
    title: "Ownership Map",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company", "founder"],
    capabilityIds: ["make-ownership-stick", "scale-through-delegation"],
    description:
      "Clarifies who owns which outcomes, metrics, risks and decisions.",
  },
  {
    id: "accountability-dial",
    title: "Accountability Dial",
    type: "framework",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["give-feedback-and-hold-the-standard"],
    description:
      "A graduated approach to holding standards from a nudge to a hard conversation.",
  },
  {
    id: "one-to-one-structure",
    title: "1:1 Structure",
    type: "template",
    format: ["one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["build-incredible-relationships"],
    description:
      "A repeatable structure for high-quality one-to-one conversations.",
  },
  {
    id: "coaching-questions",
    title: "Coaching Questions",
    type: "conversation",
    format: ["one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["know-and-use-the-right-leadership-hat"],
    description:
      "Questions that help people think for themselves rather than receive answers.",
  },
  {
    id: "sbi-feedback",
    title: "SBI Feedback",
    type: "conversation",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["give-feedback-and-hold-the-standard"],
    description:
      "Situation-Behaviour-Impact feedback format for clear, actionable conversations.",
  },
  {
    id: "kss-feedback",
    title: "KSS Feedback",
    type: "conversation",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "build-incredible-relationships",
      "give-feedback-and-hold-the-standard",
    ],
    description:
      "A Keep / Stop / Start feedback format for improving relationships and team behaviour.",
  },
  {
    id: "relationship-design",
    title: "Relationship Design",
    type: "conversation",
    format: ["one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["build-incredible-relationships"],
    description:
      "A structured conversation for clarifying expectations, cadence, communication and decision rights.",
  },
  {
    id: "psychological-safety-diagnostic",
    title: "Psychological Safety Diagnostic",
    type: "diagnostic",
    format: ["team", "one-to-one"],
    layerIds: ["founder", "company"],
    capabilityIds: ["navigate-conflict-and-create-psychological-safety"],
    description:
      "Assess whether people can speak up, disagree and admit mistakes without fear.",
  },
  {
    id: "board-pack",
    title: "Board Pack",
    type: "template",
    format: ["company"],
    layerIds: ["founder", "company"],
    capabilityIds: ["manage-capital-and-stakeholders"],
    description:
      "A structured pack for running board meetings with clarity and strategic intent.",
  },
  {
    id: "investor-update",
    title: "Investor Update",
    type: "template",
    format: ["company"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "be-storyteller-in-chief",
      "manage-capital-and-stakeholders",
    ],
    description:
      "A repeatable format for keeping investors and stakeholders aligned.",
  },
  {
    id: "human-9",
    title: "Human 9",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["manage-my-energy-system"],
    description:
      "A personal scoring tool across relationships, health, lifestyle, income and wealth.",
  },
  {
    id: "energy-audit",
    title: "Energy Audit",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["manage-my-energy-system"],
    description:
      "Assesses what creates, drains and restores founder energy.",
  },
  {
    id: "personal-board",
    title: "Personal Board",
    type: "framework",
    format: ["solo"],
    layerIds: ["human"],
    capabilityIds: ["build-my-growth-system"],
    description:
      "Map the coach, mentors, peers and advisors who support your growth.",
  },
  {
    id: "burnout-playbook",
    title: "Burnout Playbook",
    type: "template",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["build-resilience-and-recovery"],
    description:
      "Playbooks for recognising burnout early and recovering deliberately.",
  },
  {
    id: "force-form-flow-diagnostic",
    title: "Force / Form / Flow Diagnostic",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["operate-at-the-right-altitude"],
    description:
      "Identifies where the founder is using personal force where structure or flow is needed.",
  },
];

export const rhythms: Rhythm[] = [
  {
    id: "weekly-planning",
    title: "Weekly Planning",
    frequency: "weekly",
    layerIds: ["founder"],
    capabilityIds: ["operate-with-leverage", "operate-at-the-right-altitude"],
    description:
      "Review priorities, calendar, bottlenecks and the founder's highest-leverage work for the week.",
  },
  {
    id: "weekly-leadership-meeting",
    title: "Weekly Leadership Meeting",
    frequency: "weekly",
    layerIds: ["company"],
    capabilityIds: ["install-the-operating-rhythm"],
    description:
      "A weekly cadence for priorities, metrics, risks, decisions and accountability.",
  },
  {
    id: "weekly-ownership-review",
    title: "Weekly Ownership Review",
    frequency: "weekly",
    layerIds: ["company", "founder"],
    capabilityIds: ["make-ownership-stick", "scale-through-delegation"],
    description:
      "Review owners, outcomes, risks, blockers and decision rights.",
  },
  {
    id: "weekly-energy-review",
    title: "Weekly Energy Review",
    frequency: "weekly",
    layerIds: ["human"],
    capabilityIds: ["manage-my-energy-system"],
    description: "Review energy, recovery, stress and calendar load.",
  },
  {
    id: "monthly-business-review",
    title: "Monthly Business Review",
    frequency: "monthly",
    layerIds: ["company"],
    capabilityIds: ["install-the-operating-rhythm"],
    description:
      "Review performance, risks, people, priorities and strategic questions.",
  },
  {
    id: "monthly-calendar-detox",
    title: "Monthly Calendar Detox",
    frequency: "monthly",
    layerIds: ["founder", "human"],
    capabilityIds: ["take-command-of-my-role", "manage-my-energy-system"],
    description:
      "Clean up the founder calendar so it reflects role, priorities and sustainable performance.",
  },
  {
    id: "monthly-relationship-review",
    title: "Monthly Relationship Review",
    frequency: "monthly",
    layerIds: ["founder"],
    capabilityIds: ["build-incredible-relationships"],
    description:
      "Review the health of key relationships, feedback loops and unresolved tension.",
  },
  {
    id: "monthly-all-hands",
    title: "Monthly All-Hands",
    frequency: "monthly",
    layerIds: ["company", "founder"],
    capabilityIds: ["be-storyteller-in-chief"],
    description:
      "A monthly rhythm for repeating the company story, strategy, progress and priorities.",
  },
  {
    id: "quarterly-strategy-reset",
    title: "Quarterly Strategy Reset",
    frequency: "quarterly",
    layerIds: ["company"],
    capabilityIds: ["map-the-destination"],
    description:
      "Revisit destination, strategy, risks and priorities before setting the next quarter.",
  },
];

export function getCapabilitiesByLayer(layerId: LayerId): Capability[] {
  return capabilities
    .filter((capability) => capability.layerId === layerId)
    .sort((a, b) => a.order - b.order);
}

export function getCapabilitiesByGroup(groupId: string): Capability[] {
  return capabilities
    .filter((capability) => capability.groupId === groupId)
    .sort((a, b) => a.order - b.order);
}

export function getToolsForCapability(capabilityId: string): Tool[] {
  return tools.filter((tool) => tool.capabilityIds.includes(capabilityId));
}

export function getRhythmsForCapability(capabilityId: string): Rhythm[] {
  return rhythms.filter((rhythm) =>
    rhythm.capabilityIds.includes(capabilityId),
  );
}

export function getGroupsForLayer(layerId: LayerId): CapabilityGroup[] {
  return capabilityGroups
    .filter((group) => group.layerId === layerId)
    .sort((a, b) => a.order - b.order);
}

export function formatToolType(type: ToolType): string {
  switch (type) {
    case "diagnostic":
      return "Diagnostic";
    case "framework":
      return "Framework";
    case "template":
      return "Template";
    case "conversation":
      return "Conversation";
    case "rhythm":
      return "Rhythm";
    case "exercise":
      return "Exercise";
    default: {
      const _exhaustive: never = type;
      return _exhaustive;
    }
  }
}
