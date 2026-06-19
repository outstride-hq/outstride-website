import { formatToolType, tools, toolsIntro, toolsTaggingNote, type ToolType } from "@/lib/os";

const toolTypeOrder: ToolType[] = [
  "diagnostic",
  "framework",
  "template",
  "conversation",
  "rhythm",
  "exercise",
];

export default function ToolPreview() {
  const toolsByType = toolTypeOrder
    .map((type) => ({
      type,
      items: tools.filter((tool) => tool.type === type),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div>
      <p className="text-5 text-muted text-center mb-5">{toolsIntro}</p>
      {toolsByType.map((group) => (
        <div key={group.type} className="mb-5">
          <h3 className="text-6 fw-600 mb-3">{formatToolType(group.type)}</h3>
          <div className="row g-3">
            {group.items.map((tool) => (
              <div key={tool.id} className="col-md-6 col-lg-4">
                <div className="featured-box p-3 h-100">
                  <h4 className="text-5 fw-600 mb-1">{tool.title}</h4>
                  <p className="text-primary small mb-2">
                    {formatToolType(tool.type)}
                  </p>
                  <p className="text-muted small mb-0">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-5 text-muted mt-4 mb-0">{toolsTaggingNote}</p>
    </div>
  );
}
