import { validateDiagramDefinition, type PyramidDiagramDefinition } from "../schema";

export const zoneOfGeniusDefinition: PyramidDiagramDefinition = validateDiagramDefinition({
  type: "pyramid",
  id: "zone-of-genius",
  title: "Zone of Genius",
  theme: "pastel-retro",
  canvas: {
    width: 900,
    height: 560,
    background: "#faf8f0",
  },
  accreditation: {
    originator: "Gay Hendricks",
    source: "The Big Leap",
    note: "Adapted for Outstride OS",
  },
  layers: [
    {
      id: "incompetence",
      label: "Zone of Incompetence",
      leftLabel: "Avoid",
      rightLabel: "Delegate",
      color: "pyramid-1",
    },
    {
      id: "competence",
      label: "Zone of Competence",
      leftLabel: "Adequate",
      rightLabel: "Others can do it",
      color: "pyramid-2",
    },
    {
      id: "excellence",
      label: "Zone of Excellence",
      leftLabel: "Seductive",
      rightLabel: "The trap",
      color: "pyramid-3",
    },
    {
      id: "genius",
      label: "Zone of Genius",
      leftLabel: "Energy",
      rightLabel: "Highest contribution",
      color: "pyramid-4",
      link: { kind: "tool", id: "zone-of-genius" },
    },
  ],
}) as PyramidDiagramDefinition;
