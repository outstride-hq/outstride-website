import type { ReactNode } from "react";
import type { ToolBlock } from "@/lib/tools-content";
import DiagramRenderer from "@/components/diagram/DiagramRenderer";
import { formatToolType, getToolBySlug } from "@/lib/os";

type ToolContentBlocksProps = {
  blocks: ToolBlock[];
};

// Inline tool links in any text field: [[tool:okrs]] renders the tool title as
// a link; [[tool:okrs|the quarterly goals]] renders the custom label instead.
const INLINE_TOOL_TOKEN = /\[\[tool:([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;

export function renderInlineText(text: string): ReactNode {
  if (!text.includes("[[tool:")) {
    return text;
  }

  const parts: ReactNode[] = [];
  let lastIndex = 0;

  const pattern = new RegExp(INLINE_TOOL_TOKEN.source, "g");
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    const [token, toolId, label] = match;
    const index = match.index;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    const tool = getToolBySlug(toolId);
    if (tool) {
      parts.push(
        <a
          key={`${toolId}-${index}`}
          href={`/os/tools/${tool.id}/`}
          className="os-inline-tool-link"
        >
          {label ?? tool.title}
        </a>,
      );
    } else {
      parts.push(label ?? toolId);
    }
    lastIndex = index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function ToolContentBlocks({ blocks }: ToolContentBlocksProps) {
  return (
    <div className="os-prose-blocks">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "paragraph":
            return (
              <p key={index} className="os-prose-body os-prose-muted">
                {renderInlineText(block.text)}
              </p>
            );
          case "heading":
            return (
              <h2 key={index} className="os-prose-heading">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="os-prose-list os-prose-muted">
                {block.items.map((item) => (
                  <li key={item}>{renderInlineText(item)}</li>
                ))}
              </ul>
            );
          case "table": {
            const emphasis = block.emphasis ?? "firstColumn";
            const wrapClassName =
              emphasis === "firstColumn"
                ? "os-table-wrap os-table-wrap--emphasize-first"
                : "os-table-wrap";

            return (
              <div key={index} className={wrapClassName}>
                <div className="table-responsive">
                  <table className="table align-middle mb-0">
                    <thead>
                      <tr>
                        {block.columns.map((column) => (
                          <th key={column} scope="col">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={`${rowIndex}-${row.join("-")}`}>
                          {row.map((cell, cellIndex) => (
                            <td key={`${cellIndex}-${cell}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }
          case "steps":
            return (
              <div key={index}>
                <div className="row g-3">
                  {block.steps.map((step, stepIndex) => (
                    <div key={step.title} className="col-md-6">
                      <div className="featured-box p-4 h-100">
                        <span className="os-number-badge mb-3">
                          {stepIndex + 1}
                        </span>
                        <h3 className="os-prose-card-title mb-2">{step.title}</h3>
                        <p className="os-prose-body os-prose-muted mb-2">
                          {renderInlineText(step.note)}
                        </p>
                        {step.example ? (
                          <p className="os-prose-body mb-0 fst-italic">
                            &ldquo;{step.example}&rdquo;
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          case "callout":
            return (
              <div key={index} className="os-tool-callout p-4">
                <p className="mb-0">{renderInlineText(block.text)}</p>
              </div>
            );
          case "diagram":
            return (
              <div key={index}>
                <DiagramRenderer diagramId={block.diagramId} variant="svg" />
              </div>
            );
          case "image":
            return (
              <div key={index} className="text-center">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="img-fluid rounded"
                  style={{ maxHeight: "640px" }}
                />
              </div>
            );
          case "toolRef": {
            const refs = block.toolIds
              .map((toolId) => getToolBySlug(toolId))
              .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

            if (refs.length === 0) {
              return null;
            }

            return (
              <div key={index} className="row g-3">
                {refs.map((tool) => (
                  <div key={tool.id} className="col-md-6">
                    <a
                      href={`/os/tools/${tool.id}/`}
                      className="text-decoration-none"
                    >
                      <div className="os-tool-ref featured-box p-3 h-100">
                        <span className="os-card-meta d-block mb-1">
                          {formatToolType(tool.type)}
                        </span>
                        <span className="os-prose-card-title d-block mb-1">
                          {tool.title}
                        </span>
                        <span className="text-muted small d-block">
                          {tool.description}
                        </span>
                        <span className="text-primary fw-700 small d-block mt-2">
                          Open tool →
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            );
          }
          case "toolEmbed": {
            const tool = getToolBySlug(block.toolId);
            if (!tool) {
              return null;
            }

            return (
              <details key={index} className="os-tool-embed">
                <summary className="os-tool-embed-summary">
                  <span className="os-card-meta d-block mb-1">
                    {formatToolType(tool.type)}
                  </span>
                  <span className="os-prose-card-title d-block">
                    {tool.title}
                  </span>
                  <span className="os-tool-embed-hint" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="os-tool-embed-body">
                  <p className="os-prose-body os-prose-muted">
                    {tool.description}
                  </p>
                  {block.note ? (
                    <p className="os-prose-body os-prose-muted">
                      {renderInlineText(block.note)}
                    </p>
                  ) : null}
                  {tool.diagramId ? (
                    <DiagramRenderer diagramId={tool.diagramId} variant="svg" />
                  ) : null}
                  <p className="mb-0 mt-3">
                    <a
                      href={`/os/tools/${tool.id}/`}
                      className="text-primary fw-700 small text-decoration-none"
                    >
                      Open the full tool →
                    </a>
                  </p>
                </div>
              </details>
            );
          }
          case "capabilityRefs":
            return null;
          default: {
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </div>
  );
}
