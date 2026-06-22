import { validateDiagramDefinition, type FlowDiagramDefinition } from "../schema";

export const nvcFlowDefinition: FlowDiagramDefinition = validateDiagramDefinition({
  type: "flow",
  id: "nvc-flow",
  title: "NVC: Intention → Action → Reaction",
  theme: "pastel-retro",
  canvas: {
    width: 960,
    height: 420,
    background: "#f5f5f5",
  },
  accreditation: {
    originator: "Marshall Rosenberg",
    source: "Nonviolent Communication",
    note: "Adapted for Outstride OS",
  },
  showDividers: true,
  showArrows: true,
  stages: [
    {
      id: "intention",
      columnLabel: "Only Alice",
      title: "Intention",
      color: "blue",
      link: { kind: "tool", id: "non-violent-communication" },
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
