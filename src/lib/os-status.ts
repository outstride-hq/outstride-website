import { hasCapabilityContent } from "@/lib/capabilities-content";
import { hasToolContent } from "@/lib/tools-content";
import type {
  Capability,
  OsContentStatus,
  Tool,
} from "@/lib/os-types";

export function resolveOsContentStatus(
  status?: OsContentStatus,
): OsContentStatus {
  return status ?? "ready";
}

export function getCapabilityEffectiveStatus(
  capability: Capability,
): OsContentStatus {
  if (capability.status !== undefined) {
    return capability.status;
  }

  return capability.summary.trim() || hasCapabilityContent(capability.id)
    ? "ready"
    : "draft";
}

export function getToolEffectiveStatus(tool: Tool): OsContentStatus {
  if (tool.status !== undefined) {
    return tool.status;
  }

  return hasToolContent(tool.id) ? "ready" : "draft";
}
