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
        "Every hard week becomes your growth plan by default.",
        "Advice comes in from books, podcasts, investors and smart friends, but none of it has a home.",
        "You know your edge is probably feedback, delegation, boundaries or mindset, yet it keeps resurfacing because nothing in the week trains it.",
        "Support is reactive: you reach out when you are stuck, not as part of a designed system.",
      ],
      success: [
        "You can name who sharpens which part of you: coach, mentor, peer, advisor, truth-teller.",
        "One or two growth edges are chosen deliberately for the quarter instead of rediscovered the hard way.",
        "Your calendar contains the reps: reading, reflection, feedback asks and habit stacks that actually change behaviour.",
        "As the company gets harder, your growth system scales with it instead of collapsing into survival mode.",
      ],
    },
    why:
      "Bill Campbell is the anchor here: the leaders of Apple, Google and Intuit still used a coach because raw intelligence does not give you distance from yourself. Founder growth rarely fails for lack of insight. It fails because nobody has designed the support, challenge and repetition that turn insight into changed behaviour.",
    whatGoodLooksLike: [
      "A deliberate mix of coach, mentors, peers, friends and advisors, with clarity on what each relationship is for.",
      "A small number of current growth edges, named explicitly and tied to real behaviours rather than vague self-improvement goals.",
      "Weekly and monthly rhythms that turn reading, feedback and reflection into visible changes in how you lead.",
    ],
    whereFoundersGoWrong: [
      "Treating consumption as growth: more podcasts, more notes, more tabs, no practice.",
      "Building a personal board out of impressive people rather than the few who will actually challenge, support and tell the truth.",
      "Waiting until crisis to ask for help, so support arrives as rescue instead of compound interest.",
    ],
    toolBridge: {
      text: "Start by designing the people around your growth with the Personal Board, then turn one real growth edge into weekly reps with Habit Stacks.",
      toolIds: ["personal-board", "habit-stacks"],
    },
    blocks: [
      {
        kind: "heading",
        text: "Three places to look first",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Inputs",
            note: "What are you reading or listening to that is actually shaping how you lead, not just making you feel productive?",
          },
          {
            title: "People",
            note: "Who currently plays coach, mentor, peer, challenger and truth-teller in your world - and where are you still trying to grow alone?",
          },
          {
            title: "Practice",
            note: "Where in your calendar do insights turn into reps: feedback asks, reflection, reading time, or a behaviour you are deliberately rehearsing?",
          },
        ],
      },
      {
        kind: "heading",
        text: "Insight has to change the week",
      },
      {
        kind: "paragraph",
        text: "A founder can have brilliant conversations, great books and strong advice and still not grow much. The difference is whether insight changes the calendar, a key relationship, or a repeated behaviour. If the week stays the same, the founder usually does too.",
      },
      {
        kind: "callout",
        text: "If feedback is the edge, saying \"I want to get better at feedback\" is not the work. The work is a repeatable rep: every Tuesday and Thursday, name two things people did well; after a tense meeting, capture the SBI feedback before the day ends. Growth compounds when it becomes behaviour, not aspiration.",
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
