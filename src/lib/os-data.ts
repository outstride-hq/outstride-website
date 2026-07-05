/**
 * Outstride OS taxonomy and marketing copy data.
 *
 * Topology: Layer → Capability Group → Capability → Tools + Rhythms
 */

import type {
  Capability,
  CapabilityGroup,
  Layer,
  ProcessStep,
  Rhythm,
  Stage,
  SymptomMapEntry,
  Tool,
  ToolLibraryCategoryId,
} from "@/lib/os-types";

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
    emoji: "🔥",
    title: "Found the Cult",
    layerId: "company",
    groupId: "company-system",
    summary:
      "A subscription founder spent a quarter chasing adjacent bets until mission clarity made one product direction suddenly obvious — the whole team could repeat where they were headed.",
    bullets: [
      "Define the problem, mission, vision and 10-year goal that make up the company's DNA.",
      "Clarify what the company is and what it is not.",
      "Create a destination simple enough for the team to understand and repeat.",
    ],
    toolIds: [
      "strategy-one-pager",
      "ceo-test",
      "seven-powers",
      "six-critical-questions",
      "company-health-scorecard",
      "company-7",
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
      "Set the next big company milestone — often a funding round — and define what good looks like.",
      "Cascade it into long-, medium- and short-term OKRs so teams know how their work contributes.",
      "Write OKRs that measure outcomes, connecting the North Star Metric to supporting KPIs and team goals.",
    ],
    toolIds: [
      "opportunity-threat-map",
      "north-star-metric",
      "okrs",
      "rag-company-status",
      "ai-strategy-stress-test",
      "company-health-scorecard",
      "company-7",
    ],
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
    summary:
      "One founder redrew his org backwards from the next milestone — bottleneck named, squads owning slices of the user journey, every team traffic-lit — and stopped being the org chart himself.",
    bullets: [
      "Identify the roles, structure and leadership capacity needed for the next milestone.",
      "Spot where the current org will break before it actually breaks.",
      "Decide what needs to be hired, promoted, delegated or redesigned — and challenge every hire against making the existing team more effective with AI first.",
    ],
    toolIds: [
      "chapters-and-squads",
      "team-traffic-lighting",
      "company-health-scorecard",
      "company-7",
    ],
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
    summary:
      "A SaaS founder left quarterly planning convinced everyone was aligned — six weeks later, half the company was building against a different set of priorities.",
    bullets: [
      "Create the weekly, monthly, quarterly and annual cadence that runs the company.",
      "Give each meeting a clear job — strategy, review and accountability, decisions, or connection — so the right conversation happens at the right frequency.",
      "Reduce reactive chaos by giving planning, review and accountability a home.",
    ],
    toolIds: [
      "commitment-loop",
      "operating-cadence",
      "okrs",
      "rag-company-status",
      "quarterly-retro",
      "ten-minute-retro",
      "three-cs-decision",
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
    summary:
      "\"Nothing gets done unless I personally make sure it gets done\" — until results got single visible owners, explicit decision rights and a weekly review, and the founder stopped being the company's follow-up system.",
    bullets: [
      "Create the org-level system for ownership: every important result has one visible owner on the ownership map.",
      "Make decision rights and autonomy explicit — what an owner decides alone, what needs alignment, and where escalation is expected.",
      "Build a culture of accountability: progress is visible in the operating rhythm, and anything not green arrives with a plan.",
    ],
    toolIds: [
      "commitment-loop",
      "ownership-map",
      "team-traffic-lighting",
      "five-dysfunctions",
      "alignment-autonomy",
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
      "company-7",
    ],
    rhythmIds: [],
    order: 6,
  },
  {
    id: "hire-and-raise-the-talent-bar",
    number: 7,
    emoji: "🧲",
    title: "Hire & Raise the Talent Bar",
    layerId: "company",
    groupId: "company-system",
    summary:
      "A serious hire deserves a serious process — work out what the organisation needs, select with evidence, onboard deliberately, and keep the evaluation rhythm running so the bar rises over time.",
    bullets: [
      "Work out what the organisation really needs before writing the job description — including whether AI and the existing team could close the gap without a hire.",
      "Rank candidates on performance × culture, and pressure-test the hire with a premortem before day one.",
      "Onboard with a 30-60-90 plan and transparent early evaluations — low early scores are fine; trajectory matters.",
      "Keep the bar rising: run performance × culture as a regular talent rhythm, with the feedback and support to improve.",
    ],
    toolIds: [
      "senior-hire-process",
      "performance-culture-grid",
      "premortem",
      "thirty-sixty-ninety",
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
    summary:
      "Name the work only you can do at your highest level — then build the company around it.",
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
    summary:
      "One CEO stopped asking \"am I doing enough?\", wrote his job backwards from the next round — fires, risks, future, only-you work — and rebuilt his calendar to match. Six months later, he wrote it again.",
    bullets: [
      "Define the founder/CEO job for this stage — strategy, people, capital — plus the one flavour only you bring (e.g. product).",
      "Write your role like a job description: the outcomes you own, the decisions you make, and what is explicitly no longer your job.",
      "Protect the time the role needs: deep work first, and a calendar that matches the job description.",
      "Move between altitudes on purpose: dive where a team needs force, build the form, climb out at flow — and keep asking what the next bottleneck will be.",
    ],
    toolIds: [
      "founder-job-description",
      "ceo-test",
      "calendar-audit",
      "two-hour-constraint",
      "company-7",
    ],
    rhythmIds: ["calendar-audit", "weekly-planning"],
    order: 9,
  },
  {
    id: "make-the-right-calls",
    number: 10,
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
    toolIds: [
      "premortem",
      "three-cs-decision",
      "six-thinking-hats",
      "double-diamond",
      "first-principles-thinking",
      "alignment-autonomy",
      "ownership-map",
      "personal-board",
      "super-self",
    ],
    rhythmIds: [],
    order: 10,
  },
  {
    id: "know-and-use-the-right-leadership-hat",
    number: 11,
    emoji: "🎩",
    title: "Know & Use the Right Leadership Hat",
    layerId: "founder",
    groupId: "lead-others",
    summary:
      "A first-time founder ran every 1:1 in advice mode until the hats reframe — now his smartest engineer arrives with options and leaves with her own plan.",
    bullets: [
      "Switch deliberately between coach, mentor, empowerer and manager, depending on the person and the situation.",
      "Default to coaching where you can: help people think for themselves and leave them more capable after each conversation, rather than handing over answers.",
      "Notice your own default hat and where it creates bias, and choose the mode that best serves the person's growth and the outcome.",
    ],
    toolIds: [
      "one-to-one-structure","coaching-questions", "leadership-hats"],
    rhythmIds: [],
    order: 11,
  },
  {
    id: "give-feedback-and-hold-the-standard",
    number: 12,
    emoji: "📣",
    title: "Give Feedback & Hold the Standard",
    layerId: "founder",
    groupId: "lead-others",
    summary:
      "One founder went from a single sideways comment and months of silence to a standing feedback rhythm — the firing that was quietly brewing became a turnaround instead.",
    bullets: [
      "Make positive and corrective feedback a normal part of your operating cadence.",
      "Challenge missed commitments clearly and early, in a way that changes behaviour.",
      "Separate care for the person from clarity about the standard — and catch issues before they become resentment, politics or performance problems.",
    ],
    toolIds: [
      "development-pipeline",
      "sbi-feedback",
      "kss-feedback",
      "accountability-dial",
      "non-violent-communication",
      "leadership-hats",
      "ownership-map",
    ],
    rhythmIds: [],
    order: 12,
  },
  {
    id: "build-incredible-relationships",
    number: 13,
    emoji: "💬",
    title: "Build Incredible Relationships",
    layerId: "founder",
    groupId: "lead-others",
    summary:
      "Two cofounders replaced their ops-only weekly with a relationship contract, a monthly strategy offsite and a social dinner — the arguments stopped being about the wrong things.",
    bullets: [
      "Proactively design your most important working relationships.",
      "Clarify expectations, cadence, communication preferences and decision rights.",
      "Apply this to cofounders, execs, reports, advisors and key partners.",
    ],
    toolIds: [
      "one-to-one-structure",
      "happiness-check",
      "relationship-design-canvas",
      "stakeholder-map",
      "kss-feedback",
      "non-violent-communication",
      "leadership-hats",
    ],
    rhythmIds: ["monthly-relationship-review"],
    order: 13,
  },
  {
    id: "navigate-conflict-and-create-psychological-safety",
    number: 14,
    emoji: "🛡️",
    title: "Navigate Conflict & Create Psychological Safety",
    layerId: "founder",
    groupId: "lead-others",
    summary:
      "Two cofounders who kept fighting in front of the team agreed a magic word that stops any heating argument — and books a whiteboard session within 24 hours.",
    bullets: [
      "Build enough trust that people can say hard truths early, disagree openly and admit mistakes without fear.",
      "Turn tension into clarity instead of politics, avoidance or resentment, and prepare for hard conversations with structure and emotional discipline.",
      "Spot when safety is missing and rebuild it deliberately.",
    ],
    toolIds: [
      "crossing-the-line",
      "psychological-safety-diagnostic",
      "non-violent-communication",
      "five-dysfunctions",
      "personal-histories-trust",
      "blob-tree",
      "relationship-design-canvas",
    ],
    rhythmIds: [],
    order: 14,
  },
  {
    id: "build-leaders-not-dependencies",
    number: 15,
    emoji: "🌳",
    title: "Build Leaders, Not Dependencies",
    layerId: "founder",
    groupId: "lead-others",
    summary:
      "A growth lead who co-created her own goals and accountability now traffic-lights the quarter herself — the founder stopped being the company's only engine.",
    bullets: [
      "Teach the capabilities you have built in yourself to the leaders around you, instead of hoarding them.",
      "Develop people who can lead their domain — make the calls, hold the standard, coach their own teams — without constant founder input.",
      "Move from managing everyone to managing managers and leaders.",
    ],
    toolIds: [
      "coaching-questions",
      "employee-love-languages",
      "development-pipeline","ownership-map", "leadership-hats", "company-7"],
    rhythmIds: [],
    order: 15,
  },
  {
    id: "be-storyteller-in-chief",
    number: 16,
    emoji: "📖",
    title: "Be Storyteller in Chief",
    layerId: "founder",
    groupId: "lead-the-game",
    summary:
      "A founder who'd gone quiet because no single story felt big enough committed to one story at every all-hands — within a quarter, candidates were quoting it back in interviews.",
    bullets: [
      "Communicate the company's direction in a way people believe, remember and act on.",
      "Adapt the story for team, candidates, customers, investors and board.",
      "Use narrative to create alignment, confidence and momentum.",
    ],
    toolIds: ["investor-update", "four-disciplines"],
    rhythmIds: ["monthly-all-hands"],
    order: 16,
  },
  {
    id: "manage-capital-and-stakeholders",
    number: 17,
    emoji: "💼",
    title: "Manage Capital and Stakeholders",
    layerId: "founder",
    groupId: "lead-the-game",
    summary:
      "A founder stopped dreading board meetings when he sent the pack early, pre-synced the influential investors, and treated the board as a room to steer rather than a boss to report to.",
    bullets: [
      "Keep existing investors, board members and key stakeholders informed and aligned.",
      "Run board and investor conversations with preparation, candour and strategic intent.",
      "Use stakeholders as assets rather than treating them as reporting obligations.",
    ],
    toolIds: [
      "board-pack",
      "investor-update",
      "company-health-scorecard",
      "stakeholder-map",
      "relationship-design-canvas",
    ],
    rhythmIds: [],
    order: 17,
  },
  {
    id: "find-new-capital",
    number: 18,
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
    toolIds: ["company-health-scorecard", "company-7"],
    rhythmIds: [],
    order: 18,
  },
  {
    id: "embrace-the-ai-revolution",
    number: 19,
    emoji: "🤖",
    title: "Embrace the AI Revolution",
    layerId: "founder",
    groupId: "lead-the-game",
    summary:
      "A founder re-ran his moats through the 7 Powers with AI in mind and realised the \"complex tech setup\" he'd spent years building had quietly stopped being a barrier — and that his next five hires probably shouldn't happen.",
    bullets: [
      "Stress-test the strategy for the AI era: traffic-light each of your 7 Powers and map the threats and opportunities five years out.",
      "Scale the org efficiently: challenge every proposed hire against making the existing team more effective with AI first.",
      "Install the adoption rhythm — explore, trial, execute — and the internal AI champions who spread it through the company.",
    ],
    toolIds: [
      "ai-strategy-stress-test",
      "ai-adoption-cadence",
      "ai-champions",
      "seven-powers",
    ],
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
    summary:
      "A founder who planned every hour of his week wondered why he ended every Friday depleted — until he started planning only 80% of it and let the inevitable chaos fill the rest.",
    bullets: [
      "Understand what creates, drains and restores founder energy.",
      "Build a rhythm that does not depend on permanent overextension.",
      "Design work around sustainable performance, not just availability.",
    ],
    toolIds: [
      "seven-founder-needs",
      "energy-audit",
      "human-9",
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
    summary:
      "Days after cancer surgery, I was answering investor emails from the hospital bed — because it had never occurred to me that protecting my own recovery was part of the job.",
    bullets: [
      "Watch for signs of burnout, stress and emotional overload.",
      "Create playbooks in advance for difficult periods.",
      "Build resilience to stay in a good state and recover quickly from a bad one.",
    ],
    toolIds: [
      "two-equilibria-map",
      "personal-manual",
      "personal-playbook",
      "habit-stacks",
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
      "ten-minute-retro",
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
    summary:
      "The founder who decides \"I'm just not a natural leader\" tends to prove it; the one who says \"I'm on my way\" tends to grow into it. Mindset is a lever you can actually pull — and once you lead, the one everyone else feels.",
    bullets: [
      "Explore and define the mindset that will best serve the next stage.",
      "Learn how to unlock, practise and maintain that mindset.",
      "Catch limiting stories as they arise and reframe them into truer, more useful ones.",
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
    summary:
      "Notice the negative stories and old protective patterns that hijack you under stress, then build the muscle to respond from choice rather than reflex.",
    bullets: [
      "Spot the saboteurs, self-talk and protective parts that show up when pressure rises.",
      "Understand how patterns like people-pleasing, control, criticism or avoidance once helped and now quietly hurt.",
      "Build the habit of noticing, interrupting and replacing those patterns over time.",
    ],
    toolIds: [
      "saboteurs-quiz",
      "strength-in-shadow",
      "parts-work",
      "habit-stacks",
    ],
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
    summary:
      "One founder said the sacrifice was all for \"Champagne at 40\" — then couldn't describe what that looked like. Picture the life you're building toward, then start living the parts of it you can already reach.",
    bullets: [
      "Define what the company is meant to make possible in life.",
      "Make the business serve the human, not consume them.",
      "Connect daily effort to meaning, values, relationships, freedom and personal conviction.",
    ],
    toolIds: [
      "live-it-today",
      "vision-board",
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
      "Take Command of My Role",
      "Make the Right Calls",
    ],
  },
  {
    id: "bottleneck",
    symptom: "Everything waits on me — I'm the bottleneck.",
    capabilityTitles: [
      "Take Command of My Role",
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
    capabilityTitles: ["Found the Cult", "Chart the Path"],
  },
  {
    id: "delegation-comes-back",
    symptom: "I delegate and it comes back worse.",
    capabilityTitles: [
      "Build Leaders, Not Dependencies",
      "Know & Use the Right Leadership Hat",
    ],
  },
  {
    id: "vision-doesnt-land",
    symptom: "I keep repeating the vision and it doesn't land.",
    capabilityTitles: ["Be Storyteller in Chief", "Found the Cult"],
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
      "hire-and-raise-the-talent-bar",
      "know-my-special-ability",
      "take-command-of-my-role",
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
    capabilityIds: [
      "map-the-destination",
      "chart-the-path",
      "take-command-of-my-role",
    ],
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
    id: "founder-job-description",
    title: "Founder Job Description",
    categoryId: "operating-tools",
    type: "template",
    format: ["solo"],
    moments: ["define", "design"],
    depth: ["operating"],
    frequency: ["quarterly"],
    layerIds: ["founder"],
    capabilityIds: ["take-command-of-my-role", "know-my-special-ability"],
    description:
      "Writes the founder's job for this stage — zone of genius crossed with what the company needs, worked backwards from the next milestone — and rewrites it every six months.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["ceo-test", "calendar-audit", "zone-of-genius"],
  },
  {
    id: "premortem",
    title: "Premortem",
    categoryId: "diagnostic-tools",
    type: "exercise",
    format: ["solo", "cofounder", "team"],
    moments: ["diagnose", "define"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["company", "founder"],
    capabilityIds: [
      "hire-and-raise-the-talent-bar",
      "make-the-right-calls",
    ],
    description:
      "Imagines a decision has already failed and lists how it went wrong, ranked by likelihood, so the top risks get mitigated while it is still cheap.",
    accreditation: {
      originator: "Gary Klein",
      source: "Performing a Project Premortem (Harvard Business Review, 2007)",
      sourceUrl: "https://hbr.org/2007/09/performing-a-project-premortem",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "opportunity-threat-map",
      "performance-culture-grid",
      "senior-hire-process",
    ],
  },
  {
    id: "opportunity-threat-map",
    title: "Opportunity & Threat Map",
    categoryId: "direction-tools",
    type: "framework",
    format: ["cofounder", "team"],
    moments: ["diagnose", "define"],
    depth: ["operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["company"],
    capabilityIds: ["chart-the-path", "make-the-right-calls"],
    description:
      "Plots opportunities and threats on one magnitude × likelihood grid so strategy conversations rank what could help or hurt instead of listing everything equally.",
    diagramId: "opportunity-threat-map",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["premortem", "strategy-one-pager", "seven-powers"],
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
    capabilityIds: [
      "embrace-the-ai-revolution","map-the-destination"],
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
    id: "ai-strategy-stress-test",
    title: "AI Strategy Stress Test",
    categoryId: "direction-tools",
    type: "framework",
    format: ["solo", "cofounder", "team"],
    moments: ["diagnose", "define"],
    depth: ["operating"],
    frequency: ["quarterly", "annually"],
    layerIds: ["company"],
    capabilityIds: ["embrace-the-ai-revolution", "chart-the-path"],
    description:
      "Traffic-lights each of your 7 Powers under AI and maps the five-to-seven-year threats and opportunities, so strategy accounts for the moats AI erodes and the ones it lets you build.",
    accreditation: {
      originator: "Hamilton Helmer",
      source: "7 Powers: The Foundations of Business Strategy",
      sourceUrl: "https://7powers.com/",
      note: "AI-era extension of 7 Powers — Outstride adaptation",
    },
    relatedToolIds: [
      "seven-powers",
      "opportunity-threat-map",
      "strategy-one-pager",
    ],
  },
  {
    id: "north-star-metric",
    title: "North Star & Health Metrics",
    categoryId: "direction-tools",
    type: "framework",
    format: ["team", "company"],
    moments: ["define"],
    depth: ["operating"],
    frequency: ["annually", "as-needed"],
    layerIds: ["company"],
    capabilityIds: ["chart-the-path", "map-the-destination"],
    description:
      "Aligns the company around one North Star metric to maximise absolutely, guarded by a small set of health metrics that must stay above agreed thresholds.",
    diagramId: "north-star-metrics",
    accreditation: {
      originator: "Sean Ellis",
      source: "North Star Metric; guardrail structure via Amplitude's North Star Playbook",
      sourceUrl: "https://amplitude.com/north-star",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "okrs",
      "company-health-scorecard",
      "strategy-one-pager",
    ],
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
    capabilityIds: ["build-a-culture-that-compounds", "hire-and-raise-the-talent-bar"],
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
    moments: ["define", "deliver"],
    depth: ["operating"],
    frequency: ["quarterly", "weekly"],
    layerIds: ["company"],
    capabilityIds: ["chart-the-path", "install-the-operating-rhythm"],
    description:
      "Connect the company milestone to quarterly team goals, measurable outcomes and regular traffic-light accountability.",
    accreditation: {
      originator: "Andy Grove",
      source: "High Output Management / John Doerr's Measure What Matters",
      sourceUrl: "https://www.whatmatters.com/faqs/okr-meaning-definition-example",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "strategy-one-pager",
      "north-star-metric",
      "operating-cadence",
      "commitment-loop",
      "team-traffic-lighting",
      "rag-company-status",
    ],
  },
  {
    id: "chapters-and-squads",
    title: "Chapters & Squads",
    categoryId: "operating-tools",
    type: "framework",
    format: ["team", "company"],
    moments: ["design"],
    depth: ["operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["company"],
    capabilityIds: ["design-the-org"],
    description:
      "Scales a product org with cross-functional squads that own one slice of the user journey, while chapters keep each craft consistent across squads.",
    diagramId: "chapters-squads",
    accreditation: {
      originator: "Henrik Kniberg & Anders Ivarsson",
      source: "Scaling Agile @ Spotify (2012)",
      sourceUrl: "https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["team-traffic-lighting", "ownership-map", "okrs"],
  },
  {
    id: "team-traffic-lighting",
    title: "Team Traffic Lighting",
    categoryId: "diagnostic-tools",
    type: "diagnostic",
    format: ["team", "company"],
    moments: ["diagnose"],
    depth: ["operating"],
    frequency: ["monthly", "quarterly"],
    layerIds: ["company"],
    capabilityIds: [
      "design-the-org",
      "make-ownership-stick",
      "install-the-operating-rhythm",
    ],
    description:
      "Rates every team green, amber or red on delivery, self-improvement and ability to scale, so org attention goes where the company is actually blocked.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "chapters-and-squads",
      "okrs",
      "rag-company-status",
      "company-health-scorecard",
    ],
  },
  {
    id: "company-7",
    title: "Company 7",
    categoryId: "diagnostic-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one", "team"],
    moments: ["diagnose"],
    depth: ["surface"],
    frequency: ["monthly", "quarterly"],
    layerIds: ["company"],
    capabilityIds: [
      "map-the-destination",
      "chart-the-path",
      "design-the-org",
      "build-a-culture-that-compounds",
      "find-new-capital",
      "take-command-of-my-role",
      "build-leaders-not-dependencies",
    ],
    description:
      "A ten-minute company diagnostic: score seven areas 0–10 — business growth, strategy, fundraising & runway, culture, hiring & org structure, founder performance, management performance — to find where to dig next.",
    diagramId: "company-7",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "company-health-scorecard",
      "human-9",
      "team-traffic-lighting",
    ],
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
      "hire-and-raise-the-talent-bar",
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
    diagramId: "operating-cadence",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["okrs", "quarterly-retro"],
  },
  {
    id: "commitment-loop",
    title: "Commitment Loop",
    categoryId: "operating-tools",
    type: "rhythm",
    format: ["team", "cofounder", "one-to-one"],
    moments: ["deliver"],
    depth: ["operating"],
    frequency: ["weekly"],
    layerIds: ["company"],
    capabilityIds: [
      "make-ownership-stick",
      "install-the-operating-rhythm",
    ],
    description:
      "A meeting ritual that opens with how the last commitments went and closes with new measurable, time-bound commitments — so accountability lives in the system, not in the founder's follow-up.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["operating-cadence", "five-dysfunctions", "okrs"],
  },
  {
    id: "ai-adoption-cadence",
    title: "AI Adoption Cadence",
    categoryId: "operating-tools",
    type: "rhythm",
    format: ["solo", "team", "company"],
    moments: ["design", "deliver"],
    depth: ["operating"],
    frequency: ["monthly", "quarterly"],
    layerIds: ["company", "founder"],
    capabilityIds: ["embrace-the-ai-revolution"],
    description:
      "A recurring explore → trial → execute review that keeps you and the company current on AI — deliberate enough to avoid falling behind, bounded enough to stop daily shiny-thing chasing.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["operating-cadence", "ai-champions"],
  },
  {
    id: "ai-champions",
    title: "AI Champions",
    categoryId: "operating-tools",
    type: "template",
    format: ["team", "company"],
    moments: ["design", "deliver"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["company"],
    capabilityIds: ["embrace-the-ai-revolution"],
    description:
      "A playbook for naming your most AI-enthusiastic people as internal champions who trial new tools, consult across departments and spread adoption through the company.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["ai-adoption-cadence", "ai-strategy-stress-test"],
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
    moments: ["diagnose"],
    depth: ["operating", "inner-work"],
    frequency: ["as-needed"],
    layerIds: ["founder"],
    capabilityIds: ["know-my-special-ability", "take-command-of-my-role"],
    description:
      "Identify the work only you can do at your highest level of contribution.",
    accreditation: {
      originator: "Gay Hendricks",
      source: "The Big Leap",
      sourceUrl: "https://hendricks.com/the-big-leap/",
      note: "Zone of Genius model adapted for Outstride OS",
    },
    diagramId: "zone-of-genius",
    relatedToolIds: [
      "two-hour-constraint",
      "calendar-audit",
      "delegation-ladder",
      "anti-wasteman-system",
      "super-self",
    ],
  },
  {
    id: "delegation-ladder",
    title: "Delegation Ladder",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["build-leaders-not-dependencies"],
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
    capabilityIds: [
      "make-ownership-stick",
      "map-the-destination",
      "make-the-right-calls",
    ],
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
    id: "six-thinking-hats",
    title: "Six Thinking Hats",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["solo", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["make-the-right-calls"],
    description:
      "Look at a decision from six angles one at a time — facts, feelings, caution, optimism, creativity and process — so it gets examined from every side instead of one loud voice.",
    accreditation: {
      originator: "Edward de Bono",
      source: "Six Thinking Hats",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["three-cs-decision", "first-principles-thinking"],
  },
  {
    id: "three-cs-decision",
    title: "Create, Collaborate, Communicate",
    categoryId: "operating-tools",
    type: "framework",
    format: ["solo", "team", "company"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "make-the-right-calls",
      "build-leaders-not-dependencies",
      "install-the-operating-rhythm",
    ],
    description:
      "A three-mode model for running a decision — how much you create yourself, who you collaborate with, and how you communicate it — so people know whether they're shaping a call or hearing one.",
    diagramId: "three-cs-decision",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["alignment-autonomy", "ownership-map", "six-thinking-hats"],
  },
  {
    id: "double-diamond",
    title: "Double Diamond",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["solo", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["make-the-right-calls", "chart-the-path"],
    description:
      "A four-phase problem-solving shape — Discover, Define, Develop, Deliver — that makes you widen before you narrow, twice, so you find the right problem before the right solution.",
    accreditation: {
      originator: "British Design Council",
      source: "The Double Diamond (2005)",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["first-principles-thinking", "six-thinking-hats"],
  },
  {
    id: "first-principles-thinking",
    title: "First Principles Thinking",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "company"],
    capabilityIds: ["make-the-right-calls", "chart-the-path"],
    description:
      "Break a problem down to what you know is actually true, then reason back up — instead of copying what everyone else does by analogy.",
    accreditation: {
      note: "Rooted in Aristotle; popularised in startups by Elon Musk. Adapted for Outstride OS",
    },
    relatedToolIds: ["double-diamond", "six-thinking-hats"],
  },
  {
    id: "delegation-timeline",
    title: "Delegation Timeline",
    categoryId: "leadership-tools",
    type: "template",
    format: ["solo", "one-to-one"],
    layerIds: ["founder", "company"],
    capabilityIds: ["build-leaders-not-dependencies"],
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
      "hire-and-raise-the-talent-bar",
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
    relatedToolIds: [
      "development-pipeline","sbi-feedback", "kss-feedback"],
  },
  {
    id: "development-pipeline",
    title: "Development Pipeline",
    categoryId: "leadership-tools",
    type: "diagnostic",
    format: ["one-to-one"],
    moments: ["diagnose", "design"],
    depth: ["operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "give-feedback-and-hold-the-standard",
      "build-leaders-not-dependencies",
    ],
    description:
      "Finds where someone's development is actually stuck — insight, motivation, capabilities, real-world practice or accountability — so effort goes to the constriction instead of defaulting to training.",
    diagramId: "development-pipeline",
    accreditation: {
      originator: "David B. Peterson & Mary Dee Hicks",
      source: "Leader as Coach (Personnel Decisions International)",
      sourceUrl: "https://www.dave-bailey.com/blog/development-pipeline",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: ["accountability-dial", "kss-feedback", "coaching-questions"],
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
    relatedToolIds: [
      "crossing-the-line","sbi-feedback", "accountability-dial", "relationship-design-canvas"],
  },
  {
    id: "crossing-the-line",
    title: "Crossing the Line",
    categoryId: "relationship-tools",
    type: "framework",
    format: ["one-to-one", "cofounder"],
    moments: ["diagnose", "deliver"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["founder", "human"],
    capabilityIds: [
      "navigate-conflict-and-create-psychological-safety",
      "build-incredible-relationships",
    ],
    description:
      "A three-zone model of any exchange — my intention, my words and behaviour, your reaction — that stops both sides assuming what only the other person can know.",
    diagramId: "crossing-the-line",
    accreditation: {
      note: "Outstride adaptation — original source unverified",
    },
    relatedToolIds: [
      "non-violent-communication",
      "sbi-feedback",
      "relationship-design-canvas",
    ],
  },
  {
    id: "one-to-one-structure",
    title: "1:1 Structure",
    categoryId: "relationship-tools",
    type: "template",
    format: ["one-to-one"],
    layerIds: ["founder"],
    capabilityIds: [
      "build-incredible-relationships",
      "know-and-use-the-right-leadership-hat",
      "build-leaders-not-dependencies",
    ],
    relatedToolIds: ["coaching-questions", "happiness-check", "commitment-loop"],
    description:
      "A repeatable structure for high-quality one-to-one conversations.",
    accreditation: {
      note: "Outstride original",
    },
  },
  {
    id: "happiness-check",
    title: "Happiness Check",
    categoryId: "diagnostic-tools",
    type: "conversation",
    format: ["one-to-one"],
    moments: ["diagnose"],
    depth: ["operating"],
    frequency: ["quarterly"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "build-incredible-relationships",
      "build-leaders-not-dependencies",
    ],
    description:
      "Three questions asked on a regular cadence that surface how someone actually feels about working here — before the resignation letter does.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["employee-love-languages", "one-to-one-structure", "kss-feedback"],
  },
  {
    id: "employee-love-languages",
    title: "Employee Love Languages",
    categoryId: "leadership-tools",
    type: "framework",
    format: ["one-to-one"],
    moments: ["diagnose", "design"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "build-leaders-not-dependencies",
      "build-incredible-relationships",
      "hire-and-raise-the-talent-bar",
    ],
    description:
      "Five currencies of motivation — salary, upside, learning, responsibility, proximity — because people are paid in more than money and everyone weights them differently.",
    accreditation: {
      note: "Outstride original — the name riffs on Gary Chapman's The Five Love Languages",
    },
    relatedToolIds: ["happiness-check", "development-pipeline", "one-to-one-structure"],
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
    capabilityIds: [
      "know-and-use-the-right-leadership-hat",
      "build-leaders-not-dependencies",
    ],
    description:
      "Questions that help people think for themselves rather than receive answers — the seven essential questions plus founder additions.",
    accreditation: {
      originator: "Michael Bungay Stanier",
      source: "The Coaching Habit (2016)",
      note: "The seven essential questions; founder additions are Outstride's",
    },
    relatedToolIds: ["leadership-hats", "development-pipeline", "one-to-one-structure"],
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
      "build-leaders-not-dependencies",
      "give-feedback-and-hold-the-standard",
      "build-incredible-relationships",
      "navigate-conflict-and-create-psychological-safety",
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
      "hire-and-raise-the-talent-bar",
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
    id: "senior-hire-process",
    title: "Senior Hire Process",
    categoryId: "leadership-tools",
    type: "template",
    format: ["team", "company"],
    moments: ["design", "deliver"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["company"],
    capabilityIds: [
      "hire-and-raise-the-talent-bar",
    ],
    description:
      "A worked example of a serious senior-hire process — a four-phase interview loop ending in a strategy task presented to the C-level — designed to be stripped back for smaller roles.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "performance-culture-grid",
      "premortem",
      "thirty-sixty-ninety",
    ],
  },
  {
    id: "thirty-sixty-ninety",
    title: "30-60-90 Plan",
    categoryId: "leadership-tools",
    type: "template",
    format: ["one-to-one"],
    moments: ["deliver"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["company"],
    capabilityIds: ["hire-and-raise-the-talent-bar"],
    description:
      "A written plan for a new hire's first 30, 60 and 90 days with transparent evaluation checkpoints from day one.",
    accreditation: {
      originator: "Michael Watkins",
      source: "The First 90 Days (2003)",
      sourceUrl:
        "https://store.hbr.org/product/the-first-90-days-updated-and-expanded-proven-strategies-for-getting-up-to-speed-faster-and-smarter/11323",
      note: "Adapted for Outstride OS",
    },
    relatedToolIds: [
      "performance-culture-grid",
      "premortem",
      "senior-hire-process",
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
    id: "how-to-let-someone-go",
    title: "How to Let Someone Go",
    categoryId: "leadership-tools",
    type: "conversation",
    format: ["one-to-one"],
    moments: ["deliver"],
    depth: ["operating"],
    frequency: ["as-needed"],
    layerIds: ["founder", "company"],
    capabilityIds: [
      "hire-and-raise-the-talent-bar",
      "give-feedback-and-hold-the-standard",
    ],
    description:
      "A step-by-step playbook for the conversation where you let someone go — the decision stated cleanly, the reasons concrete, dignity intact and the risks planned before you walk in.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: ["hard-convo-prep", "accountability-dial", "sbi-feedback"],
  },
  {
    id: "hard-convo-prep",
    title: "2-Minute Hard Convo Prep",
    categoryId: "leadership-tools",
    type: "exercise",
    format: ["solo"],
    moments: ["design"],
    depth: ["operating", "inner-work"],
    frequency: ["as-needed"],
    layerIds: ["founder"],
    capabilityIds: [
      "give-feedback-and-hold-the-standard",
      "navigate-conflict-and-create-psychological-safety",
    ],
    description:
      "Two minutes before any hard conversation: write the three things you want to get across and the three emotions you want to bring into the room.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "how-to-let-someone-go",
      "crossing-the-line",
      "non-violent-communication",
    ],
  },
  {
    id: "leadership-test",
    title: "The Leadership Test",
    categoryId: "leadership-tools",
    type: "diagnostic",
    format: ["solo"],
    moments: ["diagnose"],
    depth: ["operating"],
    frequency: ["quarterly"],
    layerIds: ["company", "founder"],
    capabilityIds: ["make-ownership-stick", "design-the-org"],
    description:
      "Six questions to run against every member of your leadership team — strategy, execution, culture, and whether the company is their first team.",
    accreditation: {
      note: "Outstride original — question six borrows Netflix's keeper test (Reed Hastings & Patty McCord)",
    },
    relatedToolIds: [
      "team-traffic-lighting",
      "development-pipeline",
      "five-dysfunctions",
    ],
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
    id: "stakeholder-map",
    title: "Stakeholder Map",
    categoryId: "relationship-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    moments: ["diagnose"],
    depth: ["surface", "operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["founder"],
    capabilityIds: [
      "build-incredible-relationships",
      "manage-capital-and-stakeholders",
    ],
    description:
      "Maps the people the company most depends on — cofounder, direct reports, board — and scores each on relationship quality and performance confidence, so people-risk gets a location instead of staying a vague feeling.",
    diagramId: "stakeholder-map",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "relationship-design-canvas",
      "performance-culture-grid",
      "one-to-one-structure",
      "kss-feedback",
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
      "build-resilience-and-recovery",
      "build-my-growth-system",
      "face-my-shadow",
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
    id: "ten-minute-retro",
    title: "The 10-Minute Retro",
    categoryId: "human-tools",
    type: "exercise",
    format: ["solo", "one-to-one", "cofounder", "team"],
    moments: ["diagnose", "deliver"],
    depth: ["surface", "operating"],
    frequency: ["quarterly", "monthly"],
    layerIds: ["human", "founder"],
    capabilityIds: [
      "build-my-growth-system",
      "install-the-operating-rhythm",
    ],
    description:
      "A ten-minute quarterly reflection — three wins, three lowlights, three learnings — that turns the quarter into rules you actually act on.",
    diagramId: "ten-minute-retro",
    accreditation: {
      note: "Outstride original — a founder-sized cut of the classic team retrospective",
    },
    relatedToolIds: ["quarterly-retro", "human-9", "kss-feedback"],
  },
  {
    id: "personal-board",
    title: "Personal Board",
    categoryId: "human-tools",
    type: "framework",
    format: ["solo"],
    moments: ["design", "deliver"],
    depth: ["operating"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["human"],
    capabilityIds: ["build-my-growth-system", "make-the-right-calls"],
    description:
      "Assemble a board of people you know and trust — deliberately wide in backgrounds — that supports your growth and gets called on when you face big decisions.",
    accreditation: {
      note: "Widely used \"personal board of directors\" concept — adapted for Outstride OS",
    },
    relatedToolIds: [
      "relationship-design-canvas",
      "super-self",
      "premortem",
    ],
  },
  {
    id: "seven-founder-needs",
    title: "7 Core Founder Needs",
    categoryId: "human-tools",
    type: "framework",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["manage-my-energy-system"],
    description:
      "Seven inputs that keep a founder running — exercise, eating, sleep, friends & family, solitude, training and vacation — each feeding a different capacity, with a target cadence for every one.",
    diagramId: "seven-founder-needs",
    accreditation: {
      originator: "Dave Bailey",
      source: "Core Needs Check-in, “How to Support a Team Under Pressure”",
      sourceUrl: "https://www.dave-bailey.com/blog/check-ins",
      note: "Adapted for Outstride OS with founder purposes and cadences",
    },
    relatedToolIds: ["energy-audit", "habit-stacks", "two-equilibria-map"],
  },
  {
    id: "two-equilibria-map",
    title: "Two Equilibria Map",
    categoryId: "human-tools",
    type: "framework",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: [
      "build-resilience-and-recovery",
      "manage-my-energy-system",
    ],
    description:
      "Map your good and bad equilibrium states, the triggers that tip you from one into the other, and the recovery moves that bring you back.",
    diagramId: "two-equilibria",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "personal-manual",
      "personal-playbook",
      "habit-stacks",
      "energy-audit",
    ],
  },
  {
    id: "personal-manual",
    title: "Personal Manual",
    categoryId: "human-tools",
    type: "template",
    format: ["solo", "one-to-one"],
    moments: ["diagnose", "design"],
    depth: ["operating", "inner-work"],
    frequency: ["quarterly", "as-needed"],
    layerIds: ["human"],
    capabilityIds: [
      "build-resilience-and-recovery",
      "manage-my-energy-system",
    ],
    description:
      "A written manual of how you work: what your good-good and bad-bad states look like, the triggers that tip you from good to bad, and the recovery methods that bring you back.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "two-equilibria-map",
      "personal-playbook",
      "energy-audit",
      "seven-founder-needs",
    ],
  },
  {
    id: "personal-playbook",
    title: "Personal Playbook",
    categoryId: "human-tools",
    type: "template",
    format: ["solo", "one-to-one"],
    moments: ["design", "deliver"],
    depth: ["operating", "inner-work"],
    frequency: ["as-needed"],
    layerIds: ["human"],
    capabilityIds: ["build-resilience-and-recovery"],
    description:
      "Pre-committed if-then rules for running yourself — \"if my burnout score is above 7, I book a vacation\" — written while you're well so you don't negotiate with yourself when you're not.",
    accreditation: {
      note: "Outstride original",
    },
    relatedToolIds: [
      "personal-manual",
      "two-equilibria-map",
      "habit-stacks",
    ],
  },
  {
    id: "vision-board",
    title: "Vision Board",
    categoryId: "human-tools",
    type: "template",
    format: ["solo"],
    moments: ["define", "deliver"],
    depth: ["inner-work"],
    frequency: ["annually", "weekly"],
    layerIds: ["human"],
    capabilityIds: ["build-a-life-worth-scaling-for"],
    description:
      "A visual board of how life should look five years from now — with end-of-year versions if that feels closer — reviewed on a rhythm through your habit stacks so the destination stays in view.",
    accreditation: {
      note: "Widely used visualisation practice — adapted for Outstride OS",
    },
    relatedToolIds: [
      "live-it-today",
      "human-9",
      "habit-stacks",
      "anti-wasteman-system",
    ],
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
    id: "live-it-today",
    title: "Live It Today",
    categoryId: "human-tools",
    type: "framework",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["build-a-life-worth-scaling-for"],
    description:
      "Picture your life five years out in vivid detail, then extract which parts of it you can start living this year instead of deferring the whole thing to a future payoff.",
    accreditation: {
      note: "Outstride original; the \"build your own yacht\" reframe draws on Creating Your Own Yacht by The Real Estate God",
    },
    relatedToolIds: ["anti-wasteman-system", "habit-stacks"],
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
    id: "saboteurs-quiz",
    title: "Saboteurs Quiz",
    categoryId: "human-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["face-my-shadow"],
    description:
      "Use the official Positive Intelligence assessment to identify the negative inner voices and patterns most likely to hijack you under pressure.",
    accreditation: {
      originator: "Shirzad Chamine / Positive Intelligence",
      source: "Saboteur Assessment",
      sourceUrl: "https://assessment.positiveintelligence.com/saboteur",
      note: "Useful naming device for founder shadow patterns",
    },
    relatedToolIds: [
      "strength-in-shadow",
      "parts-work",
      "habit-stacks",
      "super-self",
    ],
  },
  {
    id: "strength-in-shadow",
    title: "Strength in Shadow",
    categoryId: "human-tools",
    type: "framework",
    format: ["solo", "one-to-one"],
    layerIds: ["human"],
    capabilityIds: ["face-my-shadow"],
    description:
      "Map how one of your strengths turns into a liability when overexpressed, what balancing quality it needs, and what you attack in others when you are triggered.",
    accreditation: {
      originator: "Daniel Ofman",
      source: "Core Quadrant",
      sourceUrl: "https://www.corequality.nl/trainingen?lang=en",
      note: "Outstride adaptation of the overused-strength insight; renamed here because the trademarked model is reserved for certified commercial use",
    },
    relatedToolIds: ["saboteurs-quiz", "parts-work", "habit-stacks"],
  },
  {
    id: "parts-work",
    title: "Parts Work",
    categoryId: "human-tools",
    type: "exercise",
    format: ["solo", "one-to-one"],
    moments: ["diagnose", "design"],
    depth: ["inner-work"],
    frequency: ["as-needed"],
    layerIds: ["human"],
    capabilityIds: ["face-my-shadow"],
    description:
      "Give each of your inner parts a name and a seat — the self-critic, the striver, the vacationer — let each say what it wants for you, and stay in charge of the final call.",
    accreditation: {
      originator: "Richard C. Schwartz",
      source: "Internal Family Systems / No Bad Parts",
      sourceUrl: "https://ifs-institute.com/nobadparts",
      note: "Light-touch founder reflection exercise inspired by parts work; not therapy",
    },
    relatedToolIds: [
      "saboteurs-quiz",
      "strength-in-shadow",
      "habit-stacks",
      "super-self",
    ],
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
      "hire-and-raise-the-talent-bar",
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
      "make-ownership-stick",
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
  {
    id: "rag-company-status",
    title: "RAG Company Status",
    categoryId: "diagnostic-tools",
    type: "diagnostic",
    format: ["team", "company"],
    moments: ["diagnose", "deliver"],
    depth: ["operating"],
    frequency: ["weekly", "monthly", "quarterly"],
    layerIds: ["company"],
    capabilityIds: ["install-the-operating-rhythm", "chart-the-path"],
    description:
      "A red-amber-green traffic-light view of company health and quarterly goals that surfaces where the founder needs to rove and repair.",
    accreditation: {
      note: "Outstride adaptation of common RAG reporting",
    },
    relatedToolIds: [
      "okrs",
      "operating-cadence",
      "commitment-loop",
      "team-traffic-lighting",
      "company-health-scorecard",
    ],
  },
  {
    id: "meeting-jobs-map",
    title: "Meeting Jobs Map",
    categoryId: "operating-tools",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company"],
    capabilityIds: ["install-the-operating-rhythm"],
    description:
      "Clarifies what each recurring meeting is for — and what it is not — so the operating calendar does real work.",
    relatedToolIds: ["operating-cadence", "calendar-audit"],
  },
  {
    id: "decision-gate",
    title: "Decision Gate / Shots on Goal",
    categoryId: "operating-tools",
    type: "framework",
    format: ["team", "company"],
    layerIds: ["company", "founder"],
    capabilityIds: ["make-the-right-calls", "install-the-operating-rhythm"],
    description:
      "A gate for major decisions and a cap on simultaneous bets so the company takes focused shots instead of scattering effort.",
  },
  {
    id: "dependency-map",
    title: "Dependency Map",
    categoryId: "leadership-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one", "team"],
    layerIds: ["founder", "company"],
    capabilityIds: ["build-leaders-not-dependencies"],
    description:
      "Maps where the company still depends on specific people — especially the founder — so delegation targets become visible.",
    relatedToolIds: ["ownership-map", "delegation-ladder"],
  },
  {
    id: "repair-conversation-script",
    title: "Repair Conversation Script",
    categoryId: "relationship-tools",
    type: "conversation",
    format: ["one-to-one", "cofounder"],
    layerIds: ["founder"],
    capabilityIds: [
      "navigate-conflict-and-create-psychological-safety",
      "build-incredible-relationships",
    ],
    description:
      "A structured script for repairing a relationship after rupture — timing, language and moves that rebuild trust without re-litigating the fight.",
    relatedToolIds: [
      "non-violent-communication",
      "crossing-the-line",
      "relationship-design-canvas",
    ],
  },
  {
    id: "investor-hell-yes-test",
    title: "Investor Hell Yes Test",
    categoryId: "capital-tools",
    type: "diagnostic",
    format: ["solo", "one-to-one"],
    layerIds: ["founder"],
    capabilityIds: ["find-new-capital", "manage-capital-and-stakeholders"],
    description:
      "A pre-fundraise filter that defines what would make the next round a hell yes — for you, your cofounder and the market — before you start the process.",
    relatedToolIds: ["investor-update", "premortem"],
  },
];

export const rhythms: Rhythm[] = [
  {
    id: "weekly-planning",
    title: "Weekly Planning",
    frequency: "weekly",
    layerIds: ["founder"],
    capabilityIds: ["take-command-of-my-role"],
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
