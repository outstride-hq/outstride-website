import { validateDiagramDefinition, type DialDiagramDefinition } from "../schema";

export const accountabilityDialDefinition: DialDiagramDefinition = validateDiagramDefinition({
  type: "dial",
  id: "accountability-dial",
  title: "Accountability Dial",
  theme: "pastel-retro",
  canvas: {
    width: 720,
    height: 460,
    background: "#f5f5f5",
  },
  accreditation: {
    originator: "Jonathan Raymond",
    source: "The Accountability Dial",
    sourceUrl:
      "https://bunch.ai/blog/getting-things-done/#:~:text=Management%20Coach%20Jonathan%20Raymond%20has,Accountability%20without%20Micromanagement",
    note: "Adapted for Outstride OS",
  },
  segments: [
    {
      id: "mention",
      label: "Mention",
      description: "Casual check-in. Name what you noticed without making it a big deal.",
      example: "Hey Anna, you missed our Zoom call this morning. Is everything ok?",
      color: "dial-1",
      link: { kind: "tool", id: "accountability-dial" },
    },
    {
      id: "invitation",
      label: "Invitation",
      description: "Quick private chat. More serious — invite them to reflect on the pattern.",
      example:
        "Anna, I've mentioned your attendance on all-hands meetings a few times… what's the pattern here?",
      color: "dial-2",
    },
    {
      id: "conversation",
      label: "Conversation",
      description: "More serious tone. Express urgency and ask for a plan to resolve it.",
      example:
        "Anna, your absence from important meetings is starting to affect the team. Can we talk about how to resolve this?",
      color: "dial-3",
    },
    {
      id: "boundary",
      label: "Boundary",
      description: "Warning conversation. Lay out consequences if nothing changes.",
      example:
        "Anna — if your ability to attend meetings doesn't change, we may have to question your commitment to the role.",
      color: "dial-4",
    },
    {
      id: "limit",
      label: "The Limit",
      description: "Final warning. One last chance before parting ways.",
      example:
        "Anna, this is your final warning to improve your attendance at company meetings. Your absence is causing friction — it's unacceptable.",
      color: "dial-5",
      link: { kind: "capability", id: "give-feedback-and-hold-the-standard" },
    },
  ],
}) as DialDiagramDefinition;
