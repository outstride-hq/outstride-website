import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { articles, services, testimonials } from "../src/lib/data";
import {
  capabilities,
  capabilityGroups,
  futureToolBacklog,
  howOsRunsFeltProblems,
  howOsRunsQuarterlyIntro,
  howOsRunsQuarterlySteps,
  howOsRunsTrainingPoints,
  layers,
  osQuote,
  processSteps,
  rhythms,
  stages,
  symptomMap,
  symptomMapIntro,
  symptomMapOutro,
  toolLibraryCategories,
  tools,
  toolsHowToUse,
  toolsIntro,
  toolsTaggingNote,
} from "../src/lib/os";
import { osNavGroups, osPageSequence, osPages } from "../src/lib/os-nav";
import { toolsContent } from "../src/lib/tools-content";
import { uiPaletteGroups, uiStickies } from "../src/lib/ui";
import { variants } from "../src/lib/variants";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const outputPath = path.join(repoRoot, "public", "json");

async function main() {
  const contextDump = {
    meta: {
      site: "outstride.co",
      generatedAt: new Date().toISOString(),
      version: 1,
    },
    homepage: {
      testimonials,
      services,
      articles,
    },
    os: {
      osQuote,
      howOsRunsTrainingPoints,
      howOsRunsFeltProblems,
      howOsRunsQuarterlyIntro,
      howOsRunsQuarterlySteps,
      symptomMapIntro,
      symptomMapOutro,
      toolsIntro,
      toolsTaggingNote,
      toolsHowToUse,
      toolLibraryCategories,
      futureToolBacklog,
      layers,
      stages,
      processSteps,
      capabilityGroups,
      capabilities,
      symptomMap,
      tools,
      rhythms,
      toolsContent,
      osPages,
      osPageSequence,
      osNavGroups,
    },
    ui: {
      uiPaletteGroups,
      uiStickies,
      variants,
    },
  };

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(contextDump, null, 2)}\n`, "utf8");

  console.log(`Wrote context dump to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
