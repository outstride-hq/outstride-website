import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const CONTEXT_URL = process.env.OUTSTRIDE_CONTEXT_URL ?? "https://outstride.co/json";
const CONTEXT_FILE = path.join(repoRoot, "public", "json");

async function loadContextData() {
  try {
    const response = await fetch(CONTEXT_URL, {
      headers: {
        Accept: "application/json,text/plain;q=0.9,*/*;q=0.8",
      },
    });

    if (response.ok) {
      return await response.json();
    }
  } catch {
    // Falls back to local file so the tool still works during development.
  }

  const localData = await readFile(CONTEXT_FILE, "utf8");
  return JSON.parse(localData);
}

function getByPath(input, pathValue) {
  if (!pathValue || pathValue === "/") {
    return input;
  }

  const segments = pathValue
    .split("/")
    .map((segment) => segment.trim())
    .filter(Boolean);

  let current = input;
  for (const segment of segments) {
    if (current && typeof current === "object" && segment in current) {
      current = current[segment];
    } else {
      return undefined;
    }
  }

  return current;
}

function scoreAndCollectMatches(node, query, currentPath, results) {
  if (node == null) {
    return;
  }

  if (typeof node === "string") {
    const index = node.toLowerCase().indexOf(query);
    if (index >= 0) {
      const start = Math.max(0, index - 80);
      const end = Math.min(node.length, index + query.length + 80);
      const snippet = node.slice(start, end).trim();
      results.push({
        path: currentPath || "/",
        score: 100 - (start > 0 ? 5 : 0),
        snippet,
      });
    }
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((value, index) => {
      scoreAndCollectMatches(value, query, `${currentPath}/${index}`, results);
    });
    return;
  }

  if (typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      scoreAndCollectMatches(
        value,
        query,
        currentPath ? `${currentPath}/${key}` : `/${key}`,
        results,
      );
    }
  }
}

const server = new McpServer({
  name: "outstride-context",
  version: "0.1.0",
});

server.tool(
  "get_context",
  "Fetch the full Outstride context dump or a specific path.",
  {
    path: z
      .string()
      .optional()
      .describe("Slash path inside context JSON, for example /os/capabilities"),
  },
  async ({ path: pathValue }) => {
    try {
      const data = await loadContextData();
      const selected = getByPath(data, pathValue);

      if (selected === undefined) {
        return {
          content: [
            {
              type: "text",
              text: `No data found at path: ${pathValue}`,
            },
          ],
          isError: true,
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(selected, null, 2),
          },
        ],
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return {
        content: [
          {
            type: "text",
            text: `Unable to load context data: ${message}`,
          },
        ],
        isError: true,
      };
    }
  },
);

server.tool(
  "search_context",
  "Keyword search across the Outstride context dump.",
  {
    query: z.string().min(2).describe("Search term"),
    limit: z
      .number()
      .int()
      .positive()
      .max(20)
      .default(5)
      .describe("Maximum matches returned"),
  },
  async ({ query, limit }) => {
    try {
      const data = await loadContextData();
      const normalizedQuery = query.toLowerCase();
      const matches = [];
      scoreAndCollectMatches(data, normalizedQuery, "", matches);

      if (matches.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No matches found for "${query}"`,
            },
          ],
        };
      }

      const top = matches.sort((a, b) => b.score - a.score).slice(0, limit);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(top, null, 2),
          },
        ],
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return {
        content: [
          {
            type: "text",
            text: `Search failed: ${message}`,
          },
        ],
        isError: true,
      };
    }
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
