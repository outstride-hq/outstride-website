import { validateDiagramDefinition, type FlowDiagramDefinition } from "../schema";

export const nvcFlowDefinition: FlowDiagramDefinition = validateDiagramDefinition({
  type: "flow",
  id: "crossing-the-line",
  title: "Crossing the Line: Intention → Action → Reaction",
  theme: "pastel-retro",
  canvas: {
    width: 960,
    height: 420,
    background: "#f5f5f5",
  },
  accreditation: {
    note: "Outstride adaptation — original source unverified",
  },
  showDividers: true,
  showArrows: true,
  stages: [
    {
      id: "intention",
      columnLabel: "Only Alice",
      title: "Intention",
      color: "blue",
    },
    {
      id: "action",
      columnLabel: "Both",
      title: "Action / Words",
      color: "green",
    },
    {
      id: "reaction",
      columnLabel: "Only Bob",
      title: "Reaction",
      color: "teal",
    },
  ],
  annotations: [
    {
      text: "Alice can't assume Bob's intentions",
      underStageId: "intention",
      align: "center",
    },
    {
      text: "Bob can't assume Alice's intentions",
      underStageId: "reaction",
      align: "center",
    },
  ],
}) as FlowDiagramDefinition;
