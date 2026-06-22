import { validateDiagramDefinition, type PyramidDiagramDefinition } from "../schema";

export const fiveDysfunctionsDefinition: PyramidDiagramDefinition = validateDiagramDefinition({
  type: "pyramid",
  id: "five-dysfunctions",
  title: "Overcoming the Five Dysfunctions of a Team",
  theme: "pastel-retro",
  canvas: {
    width: 900,
    height: 560,
    background: "#faf8f0",
  },
  accreditation: {
    originator: "Patrick Lencioni",
    source: "The Five Dysfunctions of a Team",
    note: "Adapted for Outstride OS",
  },
  layers: [
    {
      id: "trust",
      label: "Build trust",
      leftLabel: "Guardedness",
      rightLabel: "Openness",
      color: "pyramid-1",
    },
    {
      id: "conflict",
      label: "Resolve conflict",
      leftLabel: "Resentment",
      rightLabel: "Candour",
      color: "pyramid-2",
    },
    {
      id: "commit",
      label: "Commit as a team",
      leftLabel: "Hesitancy",
      rightLabel: "Clarity",
      color: "pyramid-3",
    },
    {
      id: "accountability",
      label: "Hold each other accountable",
      leftLabel: "Flakiness",
      rightLabel: "High standards",
      color: "pyramid-4",
      link: { kind: "capability", id: "give-feedback-and-hold-the-standard" },
    },
    {
      id: "results",
      label: "Focus on results",
      leftLabel: "Status games",
      rightLabel: "Collective success",
      color: "pyramid-5",
    },
  ],
}) as PyramidDiagramDefinition;
