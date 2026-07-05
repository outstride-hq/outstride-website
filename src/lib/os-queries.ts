import type {
  Capability,
  CapabilityGroup,
  FormatType,
  Layer,
  LayerId,
  Rhythm,
  Tool,
  ToolDepth,
  ToolFrequency,
  ToolLibraryCategoryId,
  ToolMoment,
  ToolType,
} from "@/lib/os-types";
import {
  capabilities,
  capabilityGroups,
  rhythms,
  toolLibraryCategories,
  tools,
} from "@/lib/os-data";

export function getCapabilitiesByLayer(layerId: LayerId): Capability[] {
  return capabilities
    .filter((capability) => capability.layerId === layerId)
    .sort((a, b) => a.order - b.order);
}

export function getCapabilitiesByGroup(groupId: string): Capability[] {
  return capabilities
    .filter((capability) => capability.groupId === groupId)
    .sort((a, b) => a.order - b.order);
}

export function getToolsForCapability(capabilityId: string): Tool[] {
  return tools.filter((tool) => tool.capabilityIds.includes(capabilityId));
}

export function getRhythmsForCapability(capabilityId: string): Rhythm[] {
  return rhythms.filter((rhythm) =>
    rhythm.capabilityIds.includes(capabilityId),
  );
}

export function getGroupsForLayer(layerId: LayerId): CapabilityGroup[] {
  return capabilityGroups
    .filter((group) => group.layerId === layerId)
    .sort((a, b) => a.order - b.order);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.id === slug);
}

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((capability) => capability.id === slug);
}

export function getOrderedCapabilities(): Capability[] {
  return [...capabilities].sort((a, b) => a.order - b.order);
}

export function getAdjacentCapabilities(slug: string): {
  prev: Capability | null;
  next: Capability | null;
} {
  const ordered = getOrderedCapabilities();
  const index = ordered.findIndex((capability) => capability.id === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? ordered[index - 1] : null,
    next: index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}

export function getRelatedCapabilities(tool: Tool): Capability[] {
  return capabilities.filter((capability) =>
    tool.capabilityIds.includes(capability.id),
  );
}

export function getRelatedTools(tool: Tool): Tool[] {
  const relatedIds = tool.relatedToolIds ?? [];
  return relatedIds
    .map((id) => getToolBySlug(id))
    .filter((item): item is Tool => item !== undefined);
}

export function formatToolType(type: ToolType): string {
  switch (type) {
    case "diagnostic":
      return "Diagnostic";
    case "framework":
      return "Framework";
    case "template":
      return "Template";
    case "conversation":
      return "Conversation";
    case "rhythm":
      return "Rhythm";
    case "exercise":
      return "Exercise";
    default: {
      const _exhaustive: never = type;
      return _exhaustive;
    }
  }
}

export function formatToolMoment(moment: ToolMoment): string {
  switch (moment) {
    case "diagnose":
      return "Diagnose";
    case "define":
      return "Define";
    case "design":
      return "Design";
    case "deliver":
      return "Deliver";
    default: {
      const _exhaustive: never = moment;
      return _exhaustive;
    }
  }
}

export function formatToolDepth(depth: ToolDepth): string {
  switch (depth) {
    case "surface":
      return "Surface";
    case "operating":
      return "Operating";
    case "inner-work":
      return "Inner work";
    default: {
      const _exhaustive: never = depth;
      return _exhaustive;
    }
  }
}

export function formatToolFrequency(frequency: ToolFrequency): string {
  switch (frequency) {
    case "one-off":
      return "One-off";
    case "weekly":
      return "Weekly";
    case "monthly":
      return "Monthly";
    case "quarterly":
      return "Quarterly";
    case "annually":
      return "Annually";
    case "as-needed":
      return "As needed";
    default: {
      const _exhaustive: never = frequency;
      return _exhaustive;
    }
  }
}

export function formatToolFormat(format: FormatType): string {
  switch (format) {
    case "solo":
      return "Solo";
    case "one-to-one":
      return "1:1";
    case "cofounder":
      return "Cofounder";
    case "team":
      return "Team";
    case "board":
      return "Board";
    case "company":
      return "Company";
    default: {
      const _exhaustive: never = format;
      return _exhaustive;
    }
  }
}

export function getToolLibraryCategoryLabel(
  categoryId: ToolLibraryCategoryId,
): string {
  return (
    toolLibraryCategories.find((category) => category.id === categoryId)?.title ??
    "Tool"
  );
}
