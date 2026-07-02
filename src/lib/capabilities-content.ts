/**
 * Rich content for capability detail pages.
 *
 * Always-present elements live in typed slots so every capability page keeps
 * the same spine: hook → beforeAfter → why → whatGoodLooksLike →
 * whereFoundersGoWrong → toolBridge. The optional `blocks` body sits between
 * the fixed sections and the tool bridge for deep dives, starter questions
 * and named examples. Capabilities without an entry here fall back to the
 * summary + bullets rendering on the capability page.
 */

import type { ToolBlock } from "@/lib/tools-content";

export type CapabilityBeforeAfter = {
  today: string[];
  success: string[];
};

export type CapabilityToolBridge = {
  text: string;
  toolIds: string[];
};

export type CapabilityContent = {
  hook: string;
  beforeAfter: CapabilityBeforeAfter;
  why: string;
  whatGoodLooksLike: string[];
  whereFoundersGoWrong: string[];
  toolBridge: CapabilityToolBridge;
  blocks?: ToolBlock[];
};

export const capabilitiesContent: Record<string, CapabilityContent> = {
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
    toolBridge: {
      text: "Turn this into practice: make each value concrete with the Values Deck, then hold people to them with the Performance × Culture Grid.",
      toolIds: ["values-deck", "performance-culture-grid"],
    },
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
  "build-my-growth-system": {
    hook:
      "I don't really have a system for my own growth. I just hope each crisis teaches me something.",
    beforeAfter: {
      today: [
        "Growth is happening to you, but not deliberately: each hard week becomes the next lesson you scramble to absorb.",
        "You read, listen and talk to smart people, but there is no system deciding what you learn, from whom, or how it changes you.",
        "You know the edge might be feedback, boundaries, mindset or hard decisions, yet it keeps resurfacing because nothing in the week trains it.",
      ],
      success: [
        "You have a deliberate growth system around you: coach, peers, trusted people and a personal board that expands your thinking.",
        "You reflect regularly, identify the growth edge that matters now, and choose support and inputs that serve it.",
        "Insight turns into practice through feedback loops and habit stacks, so your leadership keeps compounding as the company gets harder.",
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
    toolBridge: {
      text: "Start by designing the people around your growth with the Personal Board, then turn one real growth edge into weekly reps with Habit Stacks.",
      toolIds: ["personal-board", "habit-stacks"],
    },
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
};

export function getCapabilityContent(
  capabilityId: string,
): CapabilityContent | undefined {
  return capabilitiesContent[capabilityId];
}

export function hasCapabilityContent(capabilityId: string): boolean {
  return capabilitiesContent[capabilityId] !== undefined;
}
