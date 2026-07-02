/**
 * Outstride OS content data.
 *
 * Edit this file to update the /os page. Capability and tool lists are
 * complete but descriptions can still be refined over time.
 *
 * Topology: Layer → Capability Group → Capability → Tools + Rhythms
 */

import type { Accreditation } from "@/lib/accreditation";
import { hasToolContent } from "@/lib/tools-content";

export type { Accreditation };

export type LayerId = "company" | "founder" | "human";

export type StageId = "force" | "form" | "flow";

export type ToolType =
  | "diagnostic"
  | "framework"
  | "template"
  | "conversation"
  | "rhythm"
  | "exercise";

export type FormatType =
  | "solo"
  | "one-to-one"
  | "cofounder"
  | "team"
  | "board"
  | "company";

export type ToolMoment = "diagnose" | "define" | "design" | "deliver";

export type ToolDepth = "surface" | "operating" | "inner-work";

export type ToolFrequency =
  | "one-off"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "annually"
  | "as-needed";

export type ToolLibraryCategoryId =
  | "diagnostic-tools"
  | "direction-tools"
  | "operating-tools"
  | "leadership-tools"
  | "relationship-tools"
  | "capital-tools"
  | "human-tools";

export type OsContentStatus = "draft" | "ready";

export function resolveOsContentStatus(
  status?: OsContentStatus,
): OsContentStatus {
  return status ?? "ready";
}

export function getCapabilityEffectiveStatus(
  capability: Capability,
): OsContentStatus {
  if (capability.status !== undefined) {
    return capability.status;
  }

  return capability.summary.trim() ? "ready" : "draft";
}

export function getToolEffectiveStatus(tool: Tool): OsContentStatus {
  if (tool.status !== undefined) {
    return tool.status;
  }

  return hasToolContent(tool.id) ? "ready" : "draft";
}

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
  status?: OsContentStatus;
};

export type Tool = {
  id: string;
  title: string;
  categoryId: ToolLibraryCategoryId;
  type: ToolType;
  format: FormatType[];
  moments?: ToolMoment[];
  depth?: ToolDepth[];
  frequency?: ToolFrequency[];
  layerIds: LayerId[];
  capabilityIds: string[];
  description: string;
  accreditation?: Accreditation;
  diagramId?: string;
  relatedToolIds?: string[];
  status?: OsContentStatus;
};

export type Rhythm = {
  id: string;
  title: string;
  frequency: RhythmFrequency;
  layerIds: LayerId[];
  capabilityIds: string[];
  description: string;
};

export type ToolBacklogCategory = {
  id: ToolLibraryCategoryId;
  title: string;
  question: string;
  items: string[];
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
  "Tools sit underneath capabilities. The capabilities are the map; tools are the practical coaching assets that help diagnose, practise, install and review the capabilities that matter right now.";

export const toolsTaggingNote =
  "Tool tags: Layer (Company / Founder / Human), Capability (1–26), Moment (Diagnose / Define / Design / Deliver), Type (Diagnostic / Framework / Template / Conversation / Rhythm / Exercise), Format (Solo / 1:1 / Cofounder / Team / Board), Depth (Surface / Operating / Inner work), Frequency (One-off / Weekly / Monthly / Quarterly / As needed).";

export const toolsHowToUse =
  "Use tools underneath the capability map: start with diagnostics to find what is really happening, then use direction and operating tools to decide and install changes, and leadership/relationship/human tools to keep the shift alive in real conversations and rhythms.";

export const toolLibraryCategories: Array<{
  id: ToolLibraryCategoryId;
  letter: string;
  title: string;
  question: string;
}> = [
  {
    id: "diagnostic-tools",
    letter: "A",
    title: "Diagnostic tools",
    question: "What is going on?",
  },
  {
    id: "direction-tools",
    letter: "B",
    title: "Direction tools",
    question: "Where are we going?",
  },
  {
    id: "operating-tools",
    letter: "C",
    title: "Operating tools",
    question: "How does this run?",
  },
  {
    id: "leadership-tools",
    letter: "D",
    title: "Leadership tools",
    question: "How do I lead others?",
  },
  {
    id: "relationship-tools",
    letter: "E",
    title: "Relationship tools",
    question: "How do we work together?",
  },
  {
    id: "capital-tools",
    letter: "F",
    title: "Capital tools",
    question: "How do we manage belief, money and stakeholders?",
  },
  {
    id: "human-tools",
    letter: "G",
    title: "Human tools",
    question: "How do I stay whole and grow?",
  },
];

export const futureToolBacklog: ToolBacklogCategory[] = [
  {
    id: "diagnostic-tools",
    title: "Diagnostic",
    question: "What is going on?",
    items: [
      "RAG Company Status",
      "Energy + Nervous-System Score",
      "Function Scorecard",
      "Human 9 / Life Wheel",
    ],
  },
  {
    id: "direction-tools",
    title: "Direction",
    question: "Where are we going?",
    items: [
      "Strategy One-Pager",
      "North Star + Health Metrics",
      "Quarterly Look-Back / Look-Forward",
      "S / A / B Priority Tiers",
    ],
  },
  {
    id: "operating-tools",
    title: "Operating",
    question: "How does this run?",
    items: [
      "Operating Cadence Map",
      "Meeting Jobs Map",
      "Decision Gate / Shots on Goal",
      "30/60/90 Performance Plan",
    ],
  },
  {
    id: "leadership-tools",
    title: "Leadership",
    question: "How do I lead others?",
    items: [
      "Delegation Ladder",
      "Drive vs Hold-Accountable Map",
      "SBI Feedback",
      "KSS Feedback",
      "Performance × Culture Quadrant",
      "Dependency Map",
    ],
  },
  {
    id: "relationship-tools",
    title: "Relationship",
    question: "How do we work together?",
    items: [
      "Cofounder Rules of Engagement",
      "Psychological Safety Diagnostic",
      "Repair Conversation Script",
    ],
  },
  {
    id: "capital-tools",
    title: "Capital",
    question: "How do we manage belief, money and stakeholders?",
    items: [
      "Stakeholder Map",
      "Investor Update Template",
      "Board Pack Template",
      "Cash-Floor Trigger",
      "Options-on-the-Table Map",
      "Investor Hell Yes Test",
      "Fundraising Pipeline",
      "Funnel Math",
    ],
  },
  {
    id: "human-tools",
    title: "Human",
    question: "How do I stay whole and grow?",
    items: [
      "Parts Work / Sub-Personas",
      "Protector Voices",
      "Council Exercise",
      "Cycle Mapping",
      "Inner Critic / Saboteur Diagnostic",
      "Principles of Fulfilment",
      "Vision Board",
      "Burnout Playbook",
      "Recovery Anchors",
      "Personal Board",
    ],
  },
];

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
    summary:
      "A subscription founder spent a quarter chasing adjacent bets until mission clarity made one product direction suddenly obvious — the whole team could repeat where they were headed.",
    bullets: [
      "Define the problem, mission, vision and next big juicy milestone.",
      "Clarify what the company is and what it is not.",
      "Create a destination simple enough for the team to understand and repeat.",
    ],
    toolIds: [
      "strategy-one-pager",
      "ceo-test",
      "seven-powers",
      "six-critical-questions",
      "company-health-scorecard",
      "symptom-map",
    ],
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
    summary:
      "Three funding options looked totally different on paper, but the leadership team realised every path required the same thing: stronger unit economics and cash discipline.",
    bullets: [
      "Turn the destination into meaningful annual and quarterly company goals.",
      "Cascade goals down the organisation so teams know how their work contributes.",
      "Connect the North Star Metric to supporting KPIs, OKRs and team goals.",
    ],
    toolIds: ["north-star-metric", "okrs", "company-health-scorecard"],
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
    toolIds: ["company-health-scorecard"],
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
    toolIds: [
      "operating-cadence",
      "quarterly-retro",
      "company-health-scorecard",
    ],
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
      "Set ownership up for success: co-create goals with the owner instead of handing them down.",
      "Co-create what accountability looks like — how progress is seen and how misses get raised — while being honest that not everything is negotiable.",
      "Scale through delegation: hand over results rather than tasks, delegate without abdicating, and move up the levels of delegation over time.",
    ],
    toolIds: [
      "ownership-map",
      "delegation-ladder",
      "delegation-timeline",
      "alignment-autonomy",
      "accountability-dial",
      "company-health-scorecard",
    ],
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
    summary:
      "Once values stopped being wall art and started shaping product trade-offs, a team that had been polite-but-misaligned finally had a shared filter for what to build and what to kill.",
    bullets: [
      "Discover the company's DNA and translate it into values, behaviours and rituals.",
      "Define what \"great\" looks like in both performance and behaviour.",
      "Make culture visible through decisions, feedback, hiring, rituals and consequences.",
    ],
    toolIds: [
      "values-deck",
      "four-disciplines",
      "six-critical-questions",
      "performance-culture-grid",
      "company-health-scorecard",
    ],
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
    toolIds: [
      "performance-culture-grid",
      "values-deck",
      "four-disciplines",
      "company-health-scorecard",
    ],
    rhythmIds: [],
    order: 7,
  },
  {
    id: "know-my-special-ability",
    number: 8,
    emoji: "🧬",
    title: "Know My Special Ability",
    layerId: "founder",
    groupId: "lead-myself",
    summary: "",
    bullets: [
      "Name your zone of genius: the work where you are better than almost anyone, and it gives you energy rather than draining it.",
      "Separate genius from mere excellence — the things you are good at are the most seductive place to waste your time.",
      "Use it as a filter: what you keep is built around your genius; the rest gets hired, delegated or designed away.",
    ],
    toolIds: ["zone-of-genius"],
    rhythmIds: [],
    order: 8,
  },
  {
    id: "take-command-of-my-role",
    number: 9,
    emoji: "🎖️",
    title: "Take Command of My Role",
    layerId: "founder",
    groupId: "lead-myself",
    summary: "",
    bullets: [
      "Define the founder/CEO job for this stage — strategy, people, capital — plus the one flavour only you bring (e.g. product).",
      "Write your role like a job description: the outcomes you own, the decisions you make, and what is explicitly no longer your job.",
      "Protect the time the role needs: deep work first, and a calendar that matches the job description.",
    ],
    toolIds: [
      "calendar-audit",
      "two-hour-constraint",
    ],
    rhythmIds: ["calendar-audit", "weekly-planning"],
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
      "Find the bottlenecks where everything waits on you — that is an altitude problem, not an effort problem.",
      "Dive deep where the company needs Force, then deliberately build the Form and Flow that let you climb back out.",
      "Scale yourself to scale the org: keep turning things only you can do into things the system does.",
    ],
    toolIds: ["calendar-audit"],
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
    summary:
      "A high-profile advisory group approached a scaling founder with a compelling pitch — but at full team capacity, saying yes would have meant months of distraction for marginal upside.",
    bullets: [
      "Know which decisions are yours to make, which to delegate, and which to escalate.",
      "Match the rigour to the stakes: move fast on reversible calls, slow down on the ones you cannot undo.",
      "Cut decision congestion — no repeated debates, no unclear ownership, no calls stuck waiting on you.",
    ],
    toolIds: ["ownership-map", "company-health-scorecard"],
    rhythmIds: [],
    order: 11,
  },
  {
    id: "know-and-use-the-right-leadership-hat",
    number: 12,
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
    toolIds: ["coaching-questions", "leadership-hats"],
    rhythmIds: [],
    order: 12,
  },
  {
    id: "give-feedback-and-hold-the-standard",
    number: 13,
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
    toolIds: [
      "sbi-feedback",
      "kss-feedback",
      "accountability-dial",
      "non-violent-communication",
      "leadership-hats",
      "ownership-map",
    ],
    rhythmIds: [],
    order: 13,
  },
  {
    id: "build-incredible-relationships",
    number: 14,
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
    toolIds: [
      "relationship-design-canvas",
      "one-to-one-structure",
      "kss-feedback",
      "non-violent-communication",
      "leadership-hats",
    ],
    rhythmIds: ["monthly-relationship-review"],
    order: 14,
  },
  {
    id: "navigate-conflict-and-create-psychological-safety",
    number: 15,
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
    toolIds: [
      "psychological-safety-diagnostic",
      "non-violent-communication",
      "five-dysfunctions",
      "personal-histories-trust",
      "blob-tree",
      "relationship-design-canvas",
    ],
    rhythmIds: [],
    order: 15,
  },
  {
    id: "build-leaders-not-dependencies",
    number: 16,
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
    toolIds: ["ownership-map", "leadership-hats"],
    rhythmIds: [],
    order: 16,
  },
  {
    id: "be-storyteller-in-chief",
    number: 17,
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
    toolIds: ["investor-update", "four-disciplines"],
    rhythmIds: ["monthly-all-hands"],
    order: 17,
  },
  {
    id: "manage-capital-and-stakeholders",
    number: 18,
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
    toolIds: [
      "board-pack",
      "investor-update",
      "company-health-scorecard",
      "relationship-design-canvas",
    ],
    rhythmIds: [],
    order: 18,
  },
  {
    id: "find-new-capital",
    number: 19,
    emoji: "💰",
    title: "Find New Capital",
    layerId: "founder",
    groupId: "lead-the-game",
    summary:
      "Before opening a data room, a founder pair each wrote what would make their next round a hell yes for investors — then pressure-tested the list with two trusted angels.",
    bullets: [
      "Create investor belief through narrative, traction, timing and process.",
      "Build and manage a fundraising pipeline with discipline.",
      "Turn company progress into the capital required for the next stage.",
    ],
    toolIds: ["company-health-scorecard"],
    rhythmIds: [],
    order: 19,
  },
  {
    id: "manage-my-energy-system",
    number: 20,
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
    toolIds: [
      "human-9",
      "energy-audit",
      "habit-stacks",
    ],
    rhythmIds: ["weekly-energy-review", "calendar-audit"],
    order: 20,
  },
  {
    id: "build-resilience-and-recovery",
    number: 21,
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
    toolIds: [
      "burnout-playbook",
    ],
    rhythmIds: [],
    order: 21,
  },
  {
    id: "build-my-growth-system",
    number: 22,
    emoji: "🌐",
    title: "Build My Growth System",
    layerId: "human",
    groupId: "human-system",
    summary:
      "Founders often read, listen and talk to smart people, but without a deliberate system of coaching, support, reflection and practice, the same growth edge keeps coming back.",
    bullets: [
      "Build the right mix of coach, mentors, peers, cofounders, friends, family and advisors.",
      "Create a personal board that supports, challenges and expands you.",
      "Turn growth into a deliberate system of support, reflection and practice rather than random inspiration.",
    ],
    toolIds: [
      "personal-board",
      "habit-stacks",
      "anti-wasteman-system",
      "relationship-design-canvas",
    ],
    rhythmIds: [],
    order: 22,
  },
  {
    id: "master-my-mindset",
    number: 23,
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
    toolIds: [
      "anti-wasteman-system",
      "super-self",
    ],
    rhythmIds: [],
    order: 23,
  },
  {
    id: "face-my-shadow",
    number: 24,
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
    order: 24,
  },
  {
    id: "build-a-life-worth-scaling-for",
    number: 25,
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
    toolIds: [
      "anti-wasteman-system",
      "habit-stacks",
    ],
    rhythmIds: [],
    order: 25,
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
      "Make Ownership Stick",
      "Operate at the Right Altitude",
      "Make the Right Calls",
    ],
  },
  {
    id: "bottleneck",
    symptom: "Everything waits on me — I'm the bottleneck.",
    capabilityTitles: [
      "Operate at the Right Altitude",
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
      "Make Ownership Stick",
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
    categoryId: "diagnostic-tools",
    type: "diagnostic",
    format: ["one-to-one", "team"],
    moments: ["diagnose"],
    depth: ["surface", "operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["company", "founder", "human"],
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
    description:
      "Start with what the founder says, then trace symptoms to the capabilities they point to.",
  },
  {
    id: "ceo-test",
    title: "CEO Test",
    categoryId: "diagnostic-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["company", "founder"],
    capabilityIds: ["map-the-destination", "chart-the-path"],
    description:
      "Score yourself 1–5 on four questions that check destination, plan, team alignment and execution confidence.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "strategy-one-pager",
      "six-critical-questions",
      "okrs",
      "north-star-metric",
    ],
  },
  {
    id: "strategy-one-pager",
    title: "Strategy One-Pager",
    categoryId: "direction-tools",
    type: "template",
    format: ["solo", "team", "company"],
    layerIds: ["company"],
    capabilityIds: ["map-the-destination"],
    description:
      "A one-page summary of destination, strategy, priorities, risks and what good looks like.",
    diagramId: "strategy-grid",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["north-star-metric", "okrs", "ceo-test", "seven-powers"],
  },
  {
    id: "seven-powers",
    title: "7 Powers",
    categoryId: "direction-tools",
    type: "framework",
    format: ["solo", "one-to-one", "team", "company"],
    layerIds: ["company"],
    capabilityIds: ["map-the-destination"],
    description:
      "A framework for identifying durable competitive advantage — the benefit and barrier that let a business sustain superior returns.",
    accreditation: {
      originator: "Hamilton Helmer",
      source: "7 Powers: The Foundations of Business Strategy",
      sourceUrl: "https://7powers.com/",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["strategy-one-pager", "north-star-metric", "ceo-test"],
  },
  {
    id: "north-star-metric",
    title: "North Star Metric",
    categoryId: "direction-tools",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["chart-the-path", "map-the-destination"],
    description:
      "Define the single metric that best captures progress toward the destination.",
  },
  {
    id: "values-deck",
    title: "Values Deck",
    categoryId: "leadership-tools",
    type: "template",
    format: ["team", "company"],
    moments: ["define", "deliver"],
    depth: ["operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["company", "founder"],
    capabilityIds: ["build-a-culture-that-compounds", "raise-the-talent-bar"],
    description:
      "Makes each company value practical with examples of too little, right amount and too much behaviour.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "performance-culture-grid",
      "four-disciplines",
    ],
  },
  {
    id: "okrs",
    title: "OKRs",
    categoryId: "direction-tools",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["chart-the-path"],
    description:
      "Connect annual and quarterly goals to team priorities and measurable outcomes.",
  },
  {
    id: "company-health-scorecard",
    title: "Company Health Scorecard",
    categoryId: "diagnostic-tools",
    type: "diagnostic",
    format: ["one-to-one", "team", "board"],
    moments: ["diagnose", "define"],
    depth: ["operating"],
    frequency: ["monthly", "quarterly"],
    layerIds: ["company"],
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
    description:
      "A quantified snapshot of company health that turns overwhelm into a focused operating conversation.",
  },
  {
    id: "operating-cadence",
    title: "Operating Cadence",
    categoryId: "operating-tools",
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
    categoryId: "operating-tools",
    type: "rhythm",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["install-the-operating-rhythm"],
    description:
      "A structured review of the previous quarter before setting the next one.",
  },
  {
    id: "calendar-audit",
    title: "Calendar Audit",
    categoryId: "operating-tools",
    type: "exercise",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "human"],
    capabilityIds: ["take-command-of-my-role", "manage-my-energy-system"],
    description:
      "Clean up the founder calendar so it reflects role, priorities and sustainable performance.",
  },
  {
    id: "two-hour-constraint",
    title: "Two-Hour Constraint",
    categoryId: "leadership-tools",
    type: "exercise",
    format: ["solo", "one-to-one"],
    moments: ["diagnose", "design"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["founder"],
    capabilityIds: [
      "take-command-of-my-role",
      "operate-at-the-right-altitude",
      "make-ownership-stick",
      "build-leaders-not-dependencies",
    ],
    description:
      "A hard prioritisation drill that reveals highest-leverage founder work by constraining time to two hours a day.",
  },
  {
    id: "zone-of-genius",
    title: "Zone of Genius",
    categoryId: "diagnostic-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["know-my-special-ability", "take-command-of-my-role"],
    description:
      "Identify the work only you can do at your highest level of contribution.",
  },
  {
    id: "delegation-ladder",
    title: "Delegation Ladder",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["make-ownership-stick"],
    description:
      "A framework for moving from task delegation to full ownership.",
    accreditation: {
      originator: "Michael Hyatt",
      source: "The Five Levels of Delegation",
      sourceUrl: "https://fullfocus.co/the-five-levels-of-delegation/",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["alignment-autonomy", "delegation-timeline", "ownership-map"],
  },
  {
    id: "alignment-autonomy",
    title: "Alignment vs. Autonomy",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["one-to-one", "team", "company"],
    layerIds: ["founder", "company"],
    capabilityIds: ["make-ownership-stick", "map-the-destination"],
    description:
      "A 2×2 for diagnosing whether teams have enough shared direction and enough decision freedom.",
    diagramId: "alignment-autonomy",
    accreditation: {
      originator: "Henrik Kniberg",
      source: "Spotify Engineering Culture",
      sourceUrl:
        "https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "delegation-ladder",
      "ownership-map",
      "six-critical-questions",
      "strategy-one-pager",
    ],
  },
  {
    id: "delegation-timeline",
    title: "Delegation Timeline",
    categoryId: "leadership-tools",
    type: "template",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "company"],
    capabilityIds: ["make-ownership-stick"],
    description:
      "A proactive plan to hand off more work at higher levels of responsibility over time.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["delegation-ladder", "ownership-map"],
  },
  {
    id: "ownership-map",
    title: "Ownership Map",
    categoryId: "operating-tools",
    type: "framework",
    format: ["one-to-one", "team"],
    moments: ["design", "deliver"],
    depth: ["operating"],
    frequency: ["monthly", "quarterly"],
    layerIds: ["company", "founder"],
    capabilityIds: [
      "install-the-operating-rhythm",
      "make-ownership-stick",
      "raise-the-talent-bar",
      "make-the-right-calls",
      "give-feedback-and-hold-the-standard",
      "build-leaders-not-dependencies",
    ],
    description:
      "Clarifies who owns which outcomes, metrics, risks and decisions.",
  },
  {
    id: "accountability-dial",
    title: "Accountability Dial",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["give-feedback-and-hold-the-standard"],
    description:
      "A graduated approach to holding standards from a nudge to a hard conversation.",
    accreditation: {
      originator: "Jonathan Raymond",
      source: "The Accountability Dial",
      sourceUrl:
        "https://bunch.ai/blog/getting-things-done/#:~:text=Management%20Coach%20Jonathan%20Raymond%20has,Accountability%20without%20Micromanagement",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["sbi-feedback", "kss-feedback"],
  },
  {
    id: "non-violent-communication",
    title: "Nonviolent Communication",
    categoryId: "relationship-tools",
    type: "framework",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "give-feedback-and-hold-the-standard",
      "build-incredible-relationships",
      "navigate-conflict-and-create-psychological-safety",
    ],
    description:
      "A four-part model for expressing observations, feelings, needs and requests without blame or judgment.",
    diagramId: "nvc-ofnr",
    accreditation: {
      originator: "Marshall Rosenberg",
      source: "Nonviolent Communication",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["sbi-feedback", "accountability-dial", "relationship-design-canvas"],
  },
  {
    id: "one-to-one-structure",
    title: "1:1 Structure",
    categoryId: "relationship-tools",
    type: "template",
    format: ["one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["build-incredible-relationships"],
    description:
      "A repeatable structure for high-quality one-to-one conversations.",
  },
  {
    id: "relationship-one-pager",
    title: "Relationship One-Pager",
    categoryId: "relationship-tools",
    type: "template",
    format: ["one-to-one", "cofounder"],
    moments: ["design", "deliver"],
    depth: ["operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["founder"],
    capabilityIds: [
      "build-incredible-relationships",
      "manage-capital-and-stakeholders",
    ],
    description:
      "A shared one-page brief that captures purpose, expectations, working norms and repair rules for an important relationship.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "relationship-design-canvas",
      "one-to-one-structure",
      "investor-update",
    ],
  },
  {
    id: "coaching-questions",
    title: "Coaching Questions",
    categoryId: "leadership-tools",
    type: "conversation",
    format: ["one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["know-and-use-the-right-leadership-hat"],
    description:
      "Questions that help people think for themselves rather than receive answers.",
  },
  {
    id: "leadership-hats",
    title: "Leadership Hats",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["one-to-one", "team"],
    moments: ["diagnose", "design", "deliver"],
    depth: ["operating"],
    frequency: ["weekly", "as-needed"],
    layerIds: ["founder"],
    capabilityIds: [
      "know-and-use-the-right-leadership-hat",
      "make-ownership-stick",
      "give-feedback-and-hold-the-standard",
      "build-incredible-relationships",
      "navigate-conflict-and-create-psychological-safety",
      "build-leaders-not-dependencies",
    ],
    description:
      "Choose the right leadership mode for the person and moment instead of defaulting to advice, control or rescue.",
  },
  {
    id: "performance-culture-grid",
    title: "Performance × Culture Grid",
    categoryId: "leadership-tools",
    type: "diagnostic",
    format: ["one-to-one", "team"],
    moments: ["diagnose", "design"],
    depth: ["operating"],
    frequency: ["monthly", "quarterly", "as-needed"],
    layerIds: ["company", "founder"],
    capabilityIds: [
      "build-a-culture-that-compounds",
      "raise-the-talent-bar",
      "give-feedback-and-hold-the-standard",
    ],
    description:
      "Scores role performance and values behaviour, then maps each person to a clear talent decision quadrant.",
    diagramId: "culture-performance-grid",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "ownership-map",
      "accountability-dial",
      "sbi-feedback",
    ],
  },
  {
    id: "sbi-feedback",
    title: "SBI Feedback",
    categoryId: "leadership-tools",
    type: "conversation",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["give-feedback-and-hold-the-standard"],
    description:
      "Situation-Behaviour-Impact feedback format for clear, actionable conversations.",
    diagramId: "sbi-feedback",
    accreditation: {
      originator: "Center for Creative Leadership",
      source: "Situation-Behavior-Impact (SBI)™",
      sourceUrl:
        "https://www.ccl.org/articles/leading-effectively-articles/sbi-feedback-model-a-quick-win-to-improve-talent-conversations-development/",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["non-violent-communication", "kss-feedback", "accountability-dial"],
  },
  {
    id: "kss-feedback",
    title: "KSS Feedback",
    categoryId: "leadership-tools",
    type: "conversation",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "build-incredible-relationships",
      "give-feedback-and-hold-the-standard",
    ],
    description:
      "A Keep / Start / Stop feedback format that depersonalises difficult conversations and sharpens behaviour change.",
  },
  {
    id: "relationship-design-canvas",
    title: "Relationship Design Canvas",
    categoryId: "relationship-tools",
    type: "framework",
    format: ["one-to-one", "cofounder", "team"],
    moments: ["diagnose", "design", "deliver"],
    depth: ["operating", "inner-work"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["founder", "human"],
    capabilityIds: [
      "build-incredible-relationships",
      "navigate-conflict-and-create-psychological-safety",
      "manage-capital-and-stakeholders",
      "build-my-growth-system",
    ],
    description:
      "Design key working relationships on purpose by making expectations, cadence, decision rights and repair rules explicit.",
    relatedToolIds: [
      "relationship-one-pager",
      "one-to-one-structure",
      "non-violent-communication",
    ],
  },
  {
    id: "psychological-safety-diagnostic",
    title: "Psychological Safety Diagnostic",
    categoryId: "relationship-tools",
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
    categoryId: "capital-tools",
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
    categoryId: "capital-tools",
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
    categoryId: "human-tools",
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
    categoryId: "human-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["manage-my-energy-system"],
    description:
      "Assesses what creates, drains and restores founder energy.",
  },
  {
    id: "habit-stacks",
    title: "Habit Stacks",
    categoryId: "human-tools",
    type: "template",
    format: ["solo"],
    layerIds: ["founder", "human"],
    capabilityIds: [
      "manage-my-energy-system",
      "build-my-growth-system",
      "build-a-life-worth-scaling-for",
      "take-command-of-my-role",
    ],
    description:
      "Anchored sequences of habits at daily, weekly and monthly rhythms that turn founder intentions into repeatable rituals.",
    accreditation: {
      originator: "James Clear",
      source: "Atomic Habits",
      sourceUrl: "https://jamesclear.com/habit-stacking",
      note: "Habit-stacking concept adapted for Outstride OS founder rhythms",
    },
    relatedToolIds: [
      "energy-audit",
      "anti-wasteman-system",
      "human-9",
      "calendar-audit",
    ],
  },
  {
    id: "personal-board",
    title: "Personal Board",
    categoryId: "human-tools",
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
    categoryId: "human-tools",
    type: "template",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["build-resilience-and-recovery"],
    description:
      "Playbooks for recognising burnout early and recovering deliberately.",
  },
  {
    id: "anti-wasteman-system",
    title: "Anti-Wasteman System",
    categoryId: "human-tools",
    type: "framework",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "human"],
    capabilityIds: [
      "build-a-life-worth-scaling-for",
      "master-my-mindset",
      "build-my-growth-system",
    ],
    description:
      "Turn a dream into a committed goal by stress-testing motivation, failure modes, support and the first action.",
    accreditation: {
      originator: "Ali Abdaal",
      source: "Annual Review / Anti-Wasteman System",
      sourceUrl: "https://www.youtube.com/watch?v=ERGbgvvCJ8o",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["personal-board", "okrs", "super-self"],
  },
  {
    id: "super-self",
    title: "Super Self",
    categoryId: "human-tools",
    type: "framework",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "human"],
    capabilityIds: [
      "master-my-mindset",
      "take-command-of-my-role",
      "make-the-right-calls",
    ],
    description:
      "Access your best-self mindset by asking what your ten-out-of-ten version would do — and what's stopping you from doing it now.",
    accreditation: {
      originator: "Matthew",
      note: "Shared in Outstride coaching; adapted for Outstride OS",
    },
    relatedToolIds: ["anti-wasteman-system", "zone-of-genius"],
  },
  {
    id: "four-disciplines",
    title: "Four Disciplines of Organizational Health",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company", "founder"],
    capabilityIds: [
      "build-a-culture-that-compounds",
      "navigate-conflict-and-create-psychological-safety",
      "be-storyteller-in-chief",
      "raise-the-talent-bar",
    ],
    description:
      "Four sequential disciplines — cohesive team, clarity, over-communication, and systems — that turn organizational health into competitive advantage.",
    accreditation: {
      originator: "Patrick Lencioni",
      source: "The Advantage",
      sourceUrl: "https://www.tablegroup.com/topics-and-resources/organizational-health/",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "five-dysfunctions",
      "six-critical-questions",
      "personal-histories-trust",
    ],
  },
  {
    id: "five-dysfunctions",
    title: "Five Dysfunctions of a Team",
    categoryId: "relationship-tools",
    type: "framework",
    format: ["team", "one-to-one"],
    layerIds: ["company", "founder"],
    capabilityIds: [
      "navigate-conflict-and-create-psychological-safety",
      "build-incredible-relationships",
      "give-feedback-and-hold-the-standard",
    ],
    description:
      "A pyramid model for building trust, productive conflict, commitment, accountability and collective results on a leadership team.",
    diagramId: "five-dysfunctions",
    accreditation: {
      originator: "Patrick Lencioni",
      source: "The Five Dysfunctions of a Team",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "four-disciplines",
      "personal-histories-trust",
      "accountability-dial",
      "psychological-safety-diagnostic",
    ],
  },
  {
    id: "six-critical-questions",
    title: "Six Critical Questions",
    categoryId: "direction-tools",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company", "founder"],
    capabilityIds: [
      "map-the-destination",
      "build-a-culture-that-compounds",
      "chart-the-path",
    ],
    description:
      "Six questions the leadership team must answer together — with no contradictions — to create real organizational clarity.",
    accreditation: {
      originator: "Patrick Lencioni",
      source: "The Advantage",
      sourceUrl: "https://www.tablegroup.com/topics-and-resources/organizational-health/",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "four-disciplines",
      "strategy-one-pager",
      "okrs",
    ],
  },
  {
    id: "personal-histories-trust",
    title: "Personal Histories + Trust",
    categoryId: "relationship-tools",
    type: "exercise",
    format: ["team"],
    layerIds: ["company", "founder"],
    capabilityIds: [
      "navigate-conflict-and-create-psychological-safety",
      "build-incredible-relationships",
    ],
    description:
      "A leadership-team exercise to build vulnerability-based trust by sharing formative stories and what each person needs to feel fully themselves.",
    accreditation: {
      originator: "Patrick Lencioni",
      source: "The Five Dysfunctions of a Team",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "five-dysfunctions",
      "blob-tree",
      "four-disciplines",
    ],
  },
  {
    id: "blob-tree",
    title: "Blob Tree",
    categoryId: "relationship-tools",
    type: "exercise",
    format: ["solo", "one-to-one", "team"],
    layerIds: ["human", "founder", "company"],
    capabilityIds: [
      "navigate-conflict-and-create-psychological-safety",
      "build-incredible-relationships",
      "manage-my-energy-system",
    ],
    description:
      "A non-verbal reflection tool — pick the blob figures that match how you feel or where you sit in a group, then use that as a starting point for honest conversation.",
    accreditation: {
      originator: "Pip Wilson & Ian Long",
      source: "Blob Tree",
      sourceUrl: "https://www.blobtree.com/",
      note: "Image © Pip Wilson & Ian Long",
    },
    relatedToolIds: [
      "personal-histories-trust",
      "psychological-safety-diagnostic",
      "non-violent-communication",
    ],
  },
];

export const rhythms: Rhythm[] = [
  {
    id: "weekly-planning",
    title: "Weekly Planning",
    frequency: "weekly",
    layerIds: ["founder"],
    capabilityIds: ["take-command-of-my-role", "operate-at-the-right-altitude"],
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
    capabilityIds: ["make-ownership-stick"],
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
    id: "calendar-audit",
    title: "Calendar Audit",
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

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.id === slug);
}

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((capability) => capability.id === slug);
}

export function getOrderedCapabilities(): Capability[] {
  return [...capabilities].sort((a, b) => a.order - b.order);
}

export function getAdjacentCapabilities(slug: string): {
  prev: Capability | null;
  next: Capability | null;
} {
  const ordered = getOrderedCapabilities();
  const index = ordered.findIndex((capability) => capability.id === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? ordered[index - 1] : null,
    next: index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}

export function getRelatedCapabilities(tool: Tool): Capability[] {
  return capabilities.filter((capability) =>
    tool.capabilityIds.includes(capability.id),
  );
}

export function getRelatedTools(tool: Tool): Tool[] {
  const relatedIds = tool.relatedToolIds ?? [];
  return relatedIds
    .map((id) => getToolBySlug(id))
    .filter((item): item is Tool => item !== undefined);
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

export function formatToolMoment(moment: ToolMoment): string {
  switch (moment) {
    case "diagnose":
      return "Diagnose";
    case "define":
      return "Define";
    case "design":
      return "Design";
    case "deliver":
      return "Deliver";
    default: {
      const _exhaustive: never = moment;
      return _exhaustive;
    }
  }
}

export function formatToolDepth(depth: ToolDepth): string {
  switch (depth) {
    case "surface":
      return "Surface";
    case "operating":
      return "Operating";
    case "inner-work":
      return "Inner work";
    default: {
      const _exhaustive: never = depth;
      return _exhaustive;
    }
  }
}

export function formatToolFrequency(frequency: ToolFrequency): string {
  switch (frequency) {
    case "one-off":
      return "One-off";
    case "weekly":
      return "Weekly";
    case "monthly":
      return "Monthly";
    case "quarterly":
      return "Quarterly";
    case "annually":
      return "Annually";
    case "as-needed":
      return "As needed";
    default: {
      const _exhaustive: never = frequency;
      return _exhaustive;
    }
  }
}

export function formatToolFormat(format: FormatType): string {
  switch (format) {
    case "solo":
      return "Solo";
    case "one-to-one":
      return "1:1";
    case "cofounder":
      return "Cofounder";
    case "team":
      return "Team";
    case "board":
      return "Board";
    case "company":
      return "Company";
    default: {
      const _exhaustive: never = format;
      return _exhaustive;
    }
  }
}

export function getToolLibraryCategoryLabel(
  categoryId: ToolLibraryCategoryId,
): string {
  return (
    toolLibraryCategories.find((category) => category.id === categoryId)?.title ??
    "Tool"
  );
}
