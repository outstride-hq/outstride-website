import { capabilitiesContent } from "../src/lib/capabilities-content";
import {
  capabilityContentSchema,
  toolContentSchema,
} from "../src/lib/content-schema";
import { getAllDiagramDefinitions } from "../src/lib/diagram/registry";
import {
  capabilities,
  rhythms,
  tools,
} from "../src/lib/os";
import {
  getCapabilityEffectiveStatus as getCapStatus,
  getToolEffectiveStatus as getToolStatus,
} from "../src/lib/os-status";
import { toolsContent } from "../src/lib/tools-content";
import type { ToolBlock } from "../src/lib/tools-content";

type Issue = {
  level: "error" | "warn";
  message: string;
};

const issues: Issue[] = [];

function error(message: string) {
  issues.push({ level: "error", message });
}

function warn(message: string) {
  issues.push({ level: "warn", message });
}

const capabilityIds = new Set(capabilities.map((capability) => capability.id));
const toolIds = new Set(tools.map((tool) => tool.id));
const rhythmIds = new Set(rhythms.map((rhythm) => rhythm.id));
const diagramIds = new Set(getAllDiagramDefinitions().map((diagram) => diagram.id));

const ASYMMETRIC_LINK_ALLOWLIST = new Set(["symptom-map"]);

function assertIdSet(
  label: string,
  ids: string[],
  validIds: Set<string>,
  context: string,
) {
  for (const id of ids) {
    if (!validIds.has(id)) {
      error(`${label} "${id}" not found (${context})`);
    }
  }
}

function collectBlockRefs(blocks: ToolBlock[]) {
  const toolRefs: string[] = [];
  const capabilityRefs: string[] = [];
  const diagramRefs: string[] = [];

  for (const block of blocks) {
    switch (block.kind) {
      case "diagram":
        diagramRefs.push(block.diagramId);
        break;
      case "toolRef":
        toolRefs.push(...block.toolIds);
        break;
      case "capabilityRefs":
        capabilityRefs.push(...block.capabilityIds);
        break;
      default:
        break;
    }
  }

  return { toolRefs, capabilityRefs, diagramRefs };
}

function validateToolsContentKeys() {
  for (const key of Object.keys(toolsContent)) {
    if (!toolIds.has(key)) {
      error(`toolsContent key "${key}" has no matching tool in os-data`);
    }
  }

  for (const tool of tools) {
    const hasContent = keyInToolsContent(tool.id);
    const status = getToolStatus(tool);

    if (hasContent && status === "draft") {
      warn(
        `Tool "${tool.id}" has rich content but effective status is draft`,
      );
    }

    if (!hasContent && status === "ready" && tool.status === undefined) {
      warn(
        `Tool "${tool.id}" is effectively ready but has no toolsContent entry`,
      );
    }
  }
}

function keyInToolsContent(toolId: string): boolean {
  return toolId in toolsContent;
}

function validateCapabilitiesContentKeys() {
  for (const key of Object.keys(capabilitiesContent)) {
    if (!capabilityIds.has(key)) {
      error(
        `capabilitiesContent key "${key}" has no matching capability in os-data`,
      );
    }
  }

  for (const capability of capabilities) {
    const hasContent = capability.id in capabilitiesContent;
    const status = getCapStatus(capability);

    if (hasContent && status === "draft") {
      warn(
        `Capability "${capability.id}" has rich content but effective status is draft`,
      );
    }
  }
}

function validateToolMetadata() {
  for (const tool of tools) {
    assertIdSet(
      "tool.capabilityId",
      tool.capabilityIds,
      capabilityIds,
      `tool "${tool.id}"`,
    );

    if (tool.diagramId && !diagramIds.has(tool.diagramId)) {
      error(`tool "${tool.id}" references unknown diagramId "${tool.diagramId}"`);
    }

    if (tool.relatedToolIds) {
      assertIdSet(
        "tool.relatedToolId",
        tool.relatedToolIds,
        toolIds,
        `tool "${tool.id}"`,
      );
    }
  }
}

function validateCapabilityMetadata() {
  for (const capability of capabilities) {
    assertIdSet(
      "capability.toolId",
      capability.toolIds,
      toolIds,
      `capability "${capability.id}"`,
    );
    assertIdSet(
      "capability.rhythmId",
      capability.rhythmIds,
      rhythmIds,
      `capability "${capability.id}"`,
    );
  }
}

function validateRhythms() {
  for (const rhythm of rhythms) {
    assertIdSet(
      "rhythm.capabilityId",
      rhythm.capabilityIds,
      capabilityIds,
      `rhythm "${rhythm.id}"`,
    );
  }
}

function validateContentBlocks() {
  for (const [toolId, content] of Object.entries(toolsContent)) {
    const parsed = toolContentSchema.safeParse(content);
    if (!parsed.success) {
      error(`toolsContent "${toolId}" failed schema validation: ${parsed.error.message}`);
    }

    const refs = collectBlockRefs(content.blocks);
    assertIdSet("block toolRef", refs.toolRefs, toolIds, `toolsContent "${toolId}"`);
    assertIdSet(
      "block capabilityRef",
      refs.capabilityRefs,
      capabilityIds,
      `toolsContent "${toolId}"`,
    );
    assertIdSet(
      "block diagramId",
      refs.diagramRefs,
      diagramIds,
      `toolsContent "${toolId}"`,
    );
  }

  for (const [capabilityId, content] of Object.entries(capabilitiesContent)) {
    const parsed = capabilityContentSchema.safeParse(content);
    if (!parsed.success) {
      error(
        `capabilitiesContent "${capabilityId}" failed schema validation: ${parsed.error.message}`,
      );
    }

    if (content.doNow) {
      for (const action of content.doNow) {
        if (action.toolId && !toolIds.has(action.toolId)) {
          error(
            `capabilitiesContent "${capabilityId}" doNow references unknown toolId "${action.toolId}"`,
          );
        }
      }
    }

    if (content.blocks) {
      const refs = collectBlockRefs(content.blocks);
      assertIdSet(
        "block toolRef",
        refs.toolRefs,
        toolIds,
        `capabilitiesContent "${capabilityId}"`,
      );
      assertIdSet(
        "block capabilityRef",
        refs.capabilityRefs,
        capabilityIds,
        `capabilitiesContent "${capabilityId}"`,
      );
      assertIdSet(
        "block diagramId",
        refs.diagramRefs,
        diagramIds,
        `capabilitiesContent "${capabilityId}"`,
      );
    }
  }
}

function validateBidirectionalLinks() {
  for (const tool of tools) {
    if (ASYMMETRIC_LINK_ALLOWLIST.has(tool.id)) {
      continue;
    }

    for (const capabilityId of tool.capabilityIds) {
      const capability = capabilities.find((entry) => entry.id === capabilityId);
      if (capability && !capability.toolIds.includes(tool.id)) {
        warn(
          `Asymmetric link: tool "${tool.id}" → capability "${capabilityId}" but capability.toolIds does not include tool`,
        );
      }
    }
  }

  for (const capability of capabilities) {
    for (const toolId of capability.toolIds) {
      const tool = tools.find((entry) => entry.id === toolId);
      if (tool && !tool.capabilityIds.includes(capability.id)) {
        warn(
          `Asymmetric link: capability "${capability.id}" → tool "${toolId}" but tool.capabilityIds does not include capability`,
        );
      }
    }
  }
}

function main() {
  validateToolsContentKeys();
  validateCapabilitiesContentKeys();
  validateToolMetadata();
  validateCapabilityMetadata();
  validateRhythms();
  validateContentBlocks();
  validateBidirectionalLinks();

  const errors = issues.filter((issue) => issue.level === "error");
  const warnings = issues.filter((issue) => issue.level === "warn");

  for (const issue of warnings) {
    console.warn(`WARN: ${issue.message}`);
  }

  for (const issue of errors) {
    console.error(`ERROR: ${issue.message}`);
  }

  console.log(
    `Content validation complete: ${errors.length} error(s), ${warnings.length} warning(s)`,
  );

  if (errors.length > 0) {
    process.exit(1);
  }
}

main();
