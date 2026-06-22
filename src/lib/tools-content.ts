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
        text: "The OFNR model",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Observation",
            note: "State what happened — facts only, no interpretation or judgment.",
            example:
              "When the board deck went out without the financials section…",
          },
          {
            title: "Feeling",
            note: "Name the emotion this triggered in you. Own it — don't blame them for how you feel.",
            example: "...I felt anxious and embarrassed.",
          },
          {
            title: "Need",
            note: "Connect the feeling to an underlying need or value.",
            example:
              "...because I need us to show up prepared and credible with the board.",
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
};

export function getToolContent(toolId: string): ToolContent | undefined {
  return toolsContent[toolId];
}

export function hasToolContent(toolId: string): boolean {
  return toolId in toolsContent;
}
