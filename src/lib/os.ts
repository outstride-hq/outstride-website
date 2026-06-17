/**
 * Outstride OS content data.
 *
 * Intentionally incomplete starter content — expand capabilities, tools,
 * rhythms and descriptions as the framework matures.
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
  id: "discover" | "define" | "design" | "deliver";
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
    description:
      "Things work because the founder personally pushes them. Useful early, dangerous when it becomes the only mode.",
  },
  {
    id: "form",
    title: "Form",
    description:
      "Things work because there is structure, cadence, ownership and standards.",
  },
  {
    id: "flow",
    title: "Flow",
    description:
      "Things work because the system, team or relationship runs without constant founder intervention.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover",
    question: "Where are we today?",
    prompts: [
      "How are we performing at the company, founder and personal level?",
      "What patterns, insights and hard truths appear when we zoom out?",
      "What are the biggest opportunities and threats?",
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
    description:
      "Direction, structure, rhythm, ownership, culture and talent.",
    order: 1,
  },
  {
    id: "lead-myself",
    layerId: "founder",
    title: "Lead Myself",
    description: "How the founder spends time, energy and judgement.",
    order: 2,
  },
  {
    id: "lead-others",
    layerId: "founder",
    title: "Lead Others",
    description:
      "How the founder grows people, designs relationships and builds leaders.",
    order: 3,
  },
  {
    id: "lead-the-game",
    layerId: "founder",
    title: "Lead the Game",
    description: "How the founder carries the story and the capital.",
    order: 4,
  },
  {
    id: "human-system",
    layerId: "human",
    title: "Human System",
    description: "Energy, resilience, growth, mindset, shadow and life design.",
    order: 5,
  },
];

export const capabilities: Capability[] = [
  {
    id: "map-the-destination",
    title: "Map the Destination",
    layerId: "company",
    groupId: "company-system",
    summary:
      "Define the problem, mission, vision and next big juicy milestone.",
    bullets: [
      "Clarify what the company is and what it is not.",
      "Create a destination simple enough for the team to understand and repeat.",
    ],
    stageHint: "form",
    toolIds: ["strategy-one-pager", "ceo-test"],
    rhythmIds: ["quarterly-strategy-reset"],
    featured: true,
    order: 1,
  },
  {
    id: "chart-the-path",
    title: "Chart the Path",
    layerId: "company",
    groupId: "company-system",
    summary: "Turn destination into a clear strategic path and priorities.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 2,
  },
  {
    id: "design-the-org",
    title: "Design the Org",
    layerId: "company",
    groupId: "company-system",
    summary: "Shape the organisation structure for the next stage of growth.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 3,
  },
  {
    id: "install-the-operating-rhythm",
    title: "Install the Operating Rhythm",
    layerId: "company",
    groupId: "company-system",
    summary:
      "Create the weekly, monthly, quarterly and annual cadence that runs the company.",
    bullets: [
      "Make sure the right conversations happen at the right frequency.",
      "Reduce reactive chaos by giving planning, review and accountability a home.",
    ],
    stageHint: "form",
    toolIds: ["operating-cadence", "quarterly-retro"],
    rhythmIds: ["weekly-leadership-meeting", "monthly-business-review"],
    featured: true,
    order: 4,
  },
  {
    id: "make-ownership-stick",
    title: "Make Ownership Stick",
    layerId: "company",
    groupId: "company-system",
    summary:
      "Make people own outcomes, not just tasks, so the founder is not constantly chasing.",
    bullets: [
      "Clarify who owns what, how success is measured and what decisions they can make.",
      "Build accountability into the system.",
    ],
    stageHint: "form",
    toolIds: ["ownership-map", "delegation-ladder"],
    rhythmIds: ["weekly-ownership-review"],
    featured: true,
    order: 5,
  },
  {
    id: "build-a-culture-that-compounds",
    title: "Build a Culture That Compounds",
    layerId: "company",
    groupId: "company-system",
    summary: "Design culture and values that strengthen as the company scales.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 6,
  },
  {
    id: "raise-the-talent-bar",
    title: "Raise the Talent Bar",
    layerId: "company",
    groupId: "company-system",
    summary: "Hire, develop and retain people who raise the bar over time.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 7,
  },
  {
    id: "take-command-of-my-role",
    title: "Take Command of My Role",
    layerId: "founder",
    groupId: "lead-myself",
    summary:
      "Define the founder role required for the next period and how it needs to evolve.",
    bullets: [
      "Identify your unique ability: what can you do better than almost anyone else?",
      "Clarify what only you should own now.",
    ],
    stageHint: "form",
    toolIds: ["founder-jd", "founder-calendar-audit"],
    rhythmIds: ["monthly-calendar-detox"],
    featured: true,
    order: 8,
  },
  {
    id: "operate-at-the-right-altitude",
    title: "Operate at the Right Altitude",
    layerId: "founder",
    groupId: "lead-myself",
    summary:
      "Know whether you should be doing the work, leading the team or building the system.",
    bullets: [
      "Know when to use Force, Form and Flow.",
      "Move yourself onto your highest-leverage work.",
    ],
    stageHint: "form",
    toolIds: ["force-form-flow-diagnostic", "founder-calendar-audit"],
    rhythmIds: ["weekly-planning"],
    featured: true,
    order: 9,
  },
  {
    id: "make-good-decisions-in-the-right-way",
    title: "Make Good Decisions in the Right Way",
    layerId: "founder",
    groupId: "lead-myself",
    summary: "Build decision-making habits that match the stage of the company.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 10,
  },
  {
    id: "scale-through-delegation",
    title: "Scale Through Delegation",
    layerId: "founder",
    groupId: "lead-others",
    summary: "Transfer responsibility for results, not just activities.",
    bullets: [
      "Set clear expectations around goals, standards, risks and decision boundaries.",
      "Understand the levels of delegation and create a delegation timeline.",
    ],
    stageHint: "form",
    toolIds: ["delegation-ladder", "ownership-map"],
    rhythmIds: ["weekly-ownership-review"],
    featured: true,
    order: 11,
  },
  {
    id: "use-the-right-leadership-hat",
    title: "Use the Right Leadership Hat",
    layerId: "founder",
    groupId: "lead-others",
    summary: "Switch between leadership modes as the situation demands.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 12,
  },
  {
    id: "give-feedback-and-hold-the-standard",
    title: "Give Feedback & Hold the Standard",
    layerId: "founder",
    groupId: "lead-others",
    summary: "Give clear feedback and maintain standards without avoiding tension.",
    bullets: [],
    stageHint: "form",
    toolIds: ["sbi-feedback", "kss-feedback"],
    rhythmIds: [],
    order: 13,
  },
  {
    id: "build-incredible-relationships",
    title: "Build Incredible Relationships",
    layerId: "founder",
    groupId: "lead-others",
    summary: "Proactively design your most important working relationships.",
    bullets: [
      "Clarify expectations, cadence, communication preferences and decision rights.",
      "Apply this to cofounders, execs, reports, advisors and key partners.",
    ],
    stageHint: "form",
    toolIds: ["relationship-design", "kss-feedback"],
    rhythmIds: ["monthly-relationship-review"],
    order: 14,
  },
  {
    id: "build-trust-and-navigate-conflict",
    title: "Build Trust & Navigate Conflict",
    layerId: "founder",
    groupId: "lead-others",
    summary: "Build trust and work through conflict before it becomes destructive.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 15,
  },
  {
    id: "build-leaders-not-dependencies",
    title: "Build Leaders, Not Dependencies",
    layerId: "founder",
    groupId: "lead-others",
    summary: "Develop leaders who can own outcomes without constant founder input.",
    bullets: [],
    stageHint: "flow",
    toolIds: [],
    rhythmIds: [],
    order: 16,
  },
  {
    id: "be-storyteller-in-chief",
    title: "Be Storyteller in Chief",
    layerId: "founder",
    groupId: "lead-the-game",
    summary:
      "Communicate the company's direction in a way people believe, remember and act on.",
    bullets: [
      "Adapt the story for team, candidates, customers, investors and board.",
      "Use narrative to create alignment, confidence and momentum.",
    ],
    stageHint: "flow",
    toolIds: [],
    rhythmIds: ["monthly-all-hands"],
    order: 17,
  },
  {
    id: "manage-capital-and-stakeholders",
    title: "Manage Capital and Stakeholders",
    layerId: "founder",
    groupId: "lead-the-game",
    summary: "Manage investor and board relationships with clarity and rhythm.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 18,
  },
  {
    id: "find-new-capital",
    title: "Find New Capital",
    layerId: "founder",
    groupId: "lead-the-game",
    summary: "Raise capital with a clear story, plan and stakeholder alignment.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 19,
  },
  {
    id: "manage-my-energy-system",
    title: "Manage My Energy System",
    layerId: "human",
    groupId: "human-system",
    summary: "Build a rhythm that does not depend on permanent overextension.",
    bullets: [
      "Understand what creates, drains and restores founder energy.",
      "Design work around sustainable performance, not just availability.",
    ],
    stageHint: "form",
    toolIds: ["human-9", "energy-audit"],
    rhythmIds: ["weekly-energy-review", "monthly-calendar-detox"],
    order: 20,
  },
  {
    id: "build-resilience-and-recovery",
    title: "Build Resilience & Recovery",
    layerId: "human",
    groupId: "human-system",
    summary: "Build habits and support systems that sustain you through pressure.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 21,
  },
  {
    id: "build-my-growth-system",
    title: "Build My Growth System",
    layerId: "human",
    groupId: "human-system",
    summary: "Create a personal growth system that compounds over time.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 22,
  },
  {
    id: "master-my-mindset",
    title: "Master My Mindset",
    layerId: "human",
    groupId: "human-system",
    summary: "Develop the mental habits that support clear thinking under pressure.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 23,
  },
  {
    id: "face-my-shadow",
    title: "Face My Shadow",
    layerId: "human",
    groupId: "human-system",
    summary: "Recognise and work with the patterns that limit your leadership.",
    bullets: [],
    stageHint: "form",
    toolIds: [],
    rhythmIds: [],
    order: 24,
  },
  {
    id: "build-a-life-worth-scaling-for",
    title: "Build a Life Worth Scaling For",
    layerId: "human",
    groupId: "human-system",
    summary: "Design a life outside the company that makes scaling worthwhile.",
    bullets: [],
    stageHint: "flow",
    toolIds: [],
    rhythmIds: [],
    order: 25,
  },
];

export const tools: Tool[] = [
  {
    id: "ceo-test",
    title: "CEO Test",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["company", "founder"],
    capabilityIds: ["map-the-destination"],
    description:
      "A diagnostic to test whether the founder knows the next milestone, plan, risks and team confidence.",
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
    capabilityIds: ["map-the-destination"],
    description:
      "Define the single metric that best captures progress toward the destination.",
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
      "operate-at-the-right-altitude",
    ],
    description:
      "Compares the founder's actual calendar to their intended role, energy and priorities.",
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
    id: "force-form-flow-diagnostic",
    title: "Force / Form / Flow Diagnostic",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["operate-at-the-right-altitude"],
    description:
      "Identifies where the founder is using personal force where structure or flow is needed.",
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
    id: "energy-audit",
    title: "Energy Audit",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["manage-my-energy-system"],
    description:
      "Assesses what creates, drains and restores founder energy.",
  },
];

export const rhythms: Rhythm[] = [
  {
    id: "weekly-planning",
    title: "Weekly Planning",
    frequency: "weekly",
    layerIds: ["founder"],
    capabilityIds: ["operate-at-the-right-altitude"],
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
