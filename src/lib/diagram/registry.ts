import type { DiagramDefinition } from "./schema";
import { accountabilityDialDefinition } from "./definitions/accountability-dial";
import { alignmentAutonomyDefinition } from "./definitions/alignment-autonomy";
import { fiveDysfunctionsDefinition } from "./definitions/five-dysfunctions";
import { nvcFlowDefinition } from "./definitions/nvc-flow";
import { nvcOfnrDefinition } from "./definitions/nvc-ofnr";
import { sbiFeedbackDefinition } from "./definitions/sbi-feedback";
import { strategyGridDefinition } from "./definitions/strategy-grid";

const definitions: Record<string, DiagramDefinition> = {
  [strategyGridDefinition.id]: strategyGridDefinition,
  [accountabilityDialDefinition.id]: accountabilityDialDefinition,
  [alignmentAutonomyDefinition.id]: alignmentAutonomyDefinition,
  [nvcFlowDefinition.id]: nvcFlowDefinition,
  [nvcOfnrDefinition.id]: nvcOfnrDefinition,
  [sbiFeedbackDefinition.id]: sbiFeedbackDefinition,
  [fiveDysfunctionsDefinition.id]: fiveDysfunctionsDefinition,
};

export type DiagramReferenceImage = {
  src: string;
  alt: string;
};

export type DiagramSandboxEntry = {
  definition: DiagramDefinition;
  referenceImage?: DiagramReferenceImage;
};

const sandboxEntries: DiagramSandboxEntry[] = [
  {
    definition: strategyGridDefinition,
    referenceImage: {
      src: "/images/diagrams/strategy-grid-original.png",
      alt: "Original Strategy One-Pager reference",
    },
  },
  {
    definition: accountabilityDialDefinition,
  },
  {
    definition: nvcFlowDefinition,
    referenceImage: {
      src: "/images/diagrams/nvc-flow-original.png",
      alt: "Original NVC Intention-Action-Reaction reference",
    },
  },
  {
    definition: nvcOfnrDefinition,
    referenceImage: {
      src: "/images/diagrams/nvc-ofnr-original.png",
      alt: "Original NVC four components reference",
    },
  },
  {
    definition: sbiFeedbackDefinition,
    referenceImage: {
      src: "/images/diagrams/sbi-feedback-original.png",
      alt: "Original SBI Situation-Behaviour-Impact reference",
    },
  },
  {
    definition: fiveDysfunctionsDefinition,
    referenceImage: {
      src: "/images/diagrams/five-dysfunctions-original.png",
      alt: "Original Five Dysfunctions pyramid reference",
    },
  },
  {
    definition: alignmentAutonomyDefinition,
  },
];

export function getDiagramDefinition(id: string): DiagramDefinition | undefined {
  return definitions[id];
}

export function getAllDiagramDefinitions(): DiagramDefinition[] {
  return Object.values(definitions);
}

export function getDiagramSandboxEntries(): DiagramSandboxEntry[] {
  return sandboxEntries;
}
