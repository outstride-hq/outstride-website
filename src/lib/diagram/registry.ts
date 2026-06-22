import type { DiagramDefinition } from "./schema";
import { accountabilityDialDefinition } from "./definitions/accountability-dial";
import { fiveDysfunctionsDefinition } from "./definitions/five-dysfunctions";
import { nvcFlowDefinition } from "./definitions/nvc-flow";
import { strategyGridDefinition } from "./definitions/strategy-grid";

const definitions: Record<string, DiagramDefinition> = {
  [strategyGridDefinition.id]: strategyGridDefinition,
  [accountabilityDialDefinition.id]: accountabilityDialDefinition,
  [nvcFlowDefinition.id]: nvcFlowDefinition,
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
    definition: fiveDysfunctionsDefinition,
    referenceImage: {
      src: "/images/diagrams/five-dysfunctions-original.png",
      alt: "Original Five Dysfunctions pyramid reference",
    },
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
