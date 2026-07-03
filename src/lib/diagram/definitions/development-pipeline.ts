import { validateDiagramDefinition, type FlowDiagramDefinition } from "../schema";

export const developmentPipelineDefinition: FlowDiagramDefinition = validateDiagramDefinition({
  type: "flow",
  id: "development-pipeline",
  title: "Development Pipeline: Five Conditions for Growth",
  theme: "pastel-retro",
  canvas: {
    width: 1200,
    height: 420,
    background: "#f5f5f5",
  },
  accreditation: {
    originator: "David B. Peterson & Mary Dee Hicks",
    source: "Leader as Coach (Personnel Decisions International)",
    note: "Adapted for Outstride OS",
  },
  showDividers: true,
  showArrows: true,
  stages: [
    {
      id: "insight",
      columnLabel: "Do they know?",
      title: "Insight",
      color: "blue",
    },
    {
      id: "motivation",
      columnLabel: "Are they willing?",
      title: "Motivation",
      color: "purple",
    },
    {
      id: "capabilities",
      columnLabel: "Can they?",
      title: "Capabilities",
      color: "teal",
    },
    {
      id: "practice",
      columnLabel: "Are they getting reps?",
      title: "Real-World Practice",
      color: "green",
    },
    {
      id: "accountability",
      columnLabel: "What holds them?",
      title: "Accountability",
      color: "orange",
    },
  ],
  annotations: [
    {
      text: "Development flows at the rate of the tightest constraint",
      underStageId: "capabilities",
      align: "center",
    },
  ],
}) as FlowDiagramDefinition;
