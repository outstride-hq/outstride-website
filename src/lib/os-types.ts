import type { Accreditation } from "@/lib/accreditation";

export type { Accreditation };

export type LayerId = "company" | "founder" | "human";

export type StageId = "force" | "form" | "flow";

export type ToolType =
  | "diagnostic"
  | "framework"
  | "template"
  | "conversation"
  | "rhythm"
  | "exercise";

export type FormatType =
  | "solo"
  | "one-to-one"
  | "cofounder"
  | "team"
  | "board"
  | "company";

export type ToolMoment = "diagnose" | "define" | "design" | "deliver";

export type ToolDepth = "surface" | "operating" | "inner-work";

export type ToolFrequency =
  | "one-off"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "annually"
  | "as-needed";

export type ToolLibraryCategoryId =
  | "diagnostic-tools"
  | "direction-tools"
  | "operating-tools"
  | "leadership-tools"
  | "relationship-tools"
  | "capital-tools"
  | "human-tools";

export type OsContentStatus = "draft" | "ready";

export type RhythmFrequency =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "annual";

export type Layer = {
  id: LayerId;
  title: string;
  question: string;
  description: string;
};

export type Stage = {
  id: StageId;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: "diagnose" | "define" | "design" | "deliver";
  title: string;
  question: string;
  prompts: string[];
};

export type CapabilityGroup = {
  id: string;
  layerId: LayerId;
  title: string;
  description?: string;
  order: number;
};

export type Capability = {
  id: string;
  number: number;
  emoji: string;
  title: string;
  layerId: LayerId;
  groupId?: string;
  summary: string;
  bullets: string[];
  stageHint?: StageId;
  toolIds: string[];
  rhythmIds: string[];
  featured?: boolean;
  order: number;
  status?: OsContentStatus;
};

export type Tool = {
  id: string;
  title: string;
  categoryId: ToolLibraryCategoryId;
  type: ToolType;
  format: FormatType[];
  moments?: ToolMoment[];
  depth?: ToolDepth[];
  frequency?: ToolFrequency[];
  layerIds: LayerId[];
  capabilityIds: string[];
  description: string;
  accreditation?: Accreditation;
  diagramId?: string;
  relatedToolIds?: string[];
  status?: OsContentStatus;
};

export type Rhythm = {
  id: string;
  title: string;
  frequency: RhythmFrequency;
  layerIds: LayerId[];
  capabilityIds: string[];
  description: string;
};

export type SymptomMapEntry = {
  id: string;
  symptom: string;
  capabilityTitles: string[];
};
