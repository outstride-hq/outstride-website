import { validateDiagramDefinition, type FlowDiagramDefinition } from "../schema";

export const sbiFeedbackDefinition: FlowDiagramDefinition = validateDiagramDefinition({
  type: "flow",
  id: "sbi-feedback",
  title: "SBI — Situation, Behaviour, Impact",
  theme: "pastel-retro",
  canvas: {
    width: 820,
    height: 360,
    background: "#f5f5f5",
  },
  accreditation: {
    originator: "Center for Creative Leadership",
    source: "Situation-Behavior-Impact (SBI)™",
    sourceUrl:
      "https://www.ccl.org/articles/leading-effectively-articles/sbi-feedback-model-a-quick-win-to-improve-talent-conversations-development/",
    note: "Adapted for Outstride OS",
  },
  showArrows: true,
  stages: [
    {
      id: "situation",
      title: "Situation",
      subtitle: "When and where it happened",
      color: "blue",
      link: { kind: "tool", id: "sbi-feedback" },
    },
    {
      id: "behaviour",
      title: "Behaviour",
      subtitle: "What they did — facts only",
      color: "coral",
    },
    {
      id: "impact",
      title: "Impact",
      subtitle: "The effect on others or outcomes",
      color: "teal",
    },
  ],
}) as FlowDiagramDefinition;
