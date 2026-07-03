import type { DiagramDefinition } from "./schema";
import { accountabilityDialDefinition } from "./definitions/accountability-dial";
import { alignmentAutonomyDefinition } from "./definitions/alignment-autonomy";
import { culturePerformanceGridDefinition } from "./definitions/culture-performance-grid";
import { fiveDysfunctionsDefinition } from "./definitions/five-dysfunctions";
import { human9MiroDefinition } from "./definitions/human-9-miro";
import { operatingCadenceDefinition } from "./definitions/operating-cadence";
import { nvcFlowDefinition } from "./definitions/nvc-flow";
import { developmentPipelineDefinition } from "./definitions/development-pipeline";
import { opportunityThreatMapDefinition } from "./definitions/opportunity-threat-map";
import { nvcOfnrDefinition } from "./definitions/nvc-ofnr";
import { sbiFeedbackDefinition } from "./definitions/sbi-feedback";
import { sevenFounderNeedsDefinition } from "./definitions/seven-founder-needs";
import { strategyDestinationDefinition } from "./definitions/strategy-destination";
import { strategyGridDefinition } from "./definitions/strategy-grid";
import { strategyPathDefinition } from "./definitions/strategy-path";
import { threeCsDecisionDefinition } from "./definitions/three-cs-decision";
import { twoEquilibriaDefinition } from "./definitions/two-equilibria";
import { zoneOfGeniusDefinition } from "./definitions/zone-of-genius";

const definitions: Record<string, DiagramDefinition> = {
  [strategyGridDefinition.id]: strategyGridDefinition,
  [strategyDestinationDefinition.id]: strategyDestinationDefinition,
  [strategyPathDefinition.id]: strategyPathDefinition,
  [accountabilityDialDefinition.id]: accountabilityDialDefinition,
  [alignmentAutonomyDefinition.id]: alignmentAutonomyDefinition,
  [culturePerformanceGridDefinition.id]: culturePerformanceGridDefinition,
  [nvcFlowDefinition.id]: nvcFlowDefinition,
  [nvcOfnrDefinition.id]: nvcOfnrDefinition,
  [sbiFeedbackDefinition.id]: sbiFeedbackDefinition,
  [fiveDysfunctionsDefinition.id]: fiveDysfunctionsDefinition,
  [human9MiroDefinition.id]: human9MiroDefinition,
  [twoEquilibriaDefinition.id]: twoEquilibriaDefinition,
  [sevenFounderNeedsDefinition.id]: sevenFounderNeedsDefinition,
  [threeCsDecisionDefinition.id]: threeCsDecisionDefinition,
  [zoneOfGeniusDefinition.id]: zoneOfGeniusDefinition,
  [operatingCadenceDefinition.id]: operatingCadenceDefinition,
  [developmentPipelineDefinition.id]: developmentPipelineDefinition,
  [opportunityThreatMapDefinition.id]: opportunityThreatMapDefinition,
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
    definition: strategyDestinationDefinition,
  },
  {
    definition: strategyPathDefinition,
  },
  {
    definition: accountabilityDialDefinition,
  },
  {
    definition: nvcFlowDefinition,
    referenceImage: {
      src: "/images/diagrams/nvc-flow-original.png",
      alt: "Original Crossing the Line (intention-action-reaction) reference",
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
  {
    definition: culturePerformanceGridDefinition,
  },
  {
    definition: human9MiroDefinition,
  },
  {
    definition: twoEquilibriaDefinition,
  },
  {
    definition: sevenFounderNeedsDefinition,
  },
  {
    definition: threeCsDecisionDefinition,
  },
  {
    definition: zoneOfGeniusDefinition,
  },
  {
    definition: operatingCadenceDefinition,
  },
  {
    definition: developmentPipelineDefinition,
  },
  {
    definition: opportunityThreatMapDefinition,
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
