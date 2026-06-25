import type { ToolBlock } from "@/lib/tools-content";
import DiagramRenderer from "@/components/diagram/DiagramRenderer";

type ToolContentBlocksProps = {
  blocks: ToolBlock[];
};

export default function ToolContentBlocks({ blocks }: ToolContentBlocksProps) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "paragraph":
            return (
              <p key={index} className="text-5 text-muted mb-4">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={index} className="text-7 fw-700 mb-3 mt-4">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="text-muted mb-4 ps-3">
                {block.items.map((item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <div key={index} className="mb-4">
                <div className="row g-3">
                  {block.steps.map((step, stepIndex) => (
                    <div key={step.title} className="col-md-6">
                      <div className="featured-box p-4 h-100">
                        <span className="os-number-badge mb-3">
                          {stepIndex + 1}
                        </span>
                        <h3 className="text-6 fw-700 mb-2">{step.title}</h3>
                        <p className="text-muted mb-2">{step.note}</p>
                        {step.example ? (
                          <p className="mb-0 fst-italic">
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
              <div
                key={index}
                className="os-tool-callout p-4 mb-4"
              >
                <p className="mb-0">{block.text}</p>
              </div>
            );
          case "diagram":
            return (
              <div key={index} className="mb-4">
                <DiagramRenderer diagramId={block.diagramId} variant="svg" />
              </div>
            );
          case "image":
            return (
              <div key={index} className="mb-4 text-center">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="img-fluid rounded"
                  style={{ maxHeight: "640px" }}
                />
              </div>
            );
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
