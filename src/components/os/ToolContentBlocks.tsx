import type { ToolBlock } from "@/lib/tools-content";
import DiagramRenderer from "@/components/diagram/DiagramRenderer";
import { formatToolType, getToolBySlug } from "@/lib/os";

type ToolContentBlocksProps = {
  blocks: ToolBlock[];
};

export default function ToolContentBlocks({ blocks }: ToolContentBlocksProps) {
  return (
    <div className="os-prose-blocks">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "paragraph":
            return (
              <p key={index} className="os-prose-body os-prose-muted">
                {block.text}
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
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={index} className="os-table-wrap">
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
                          {step.note}
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
                <p className="mb-0">{block.text}</p>
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
