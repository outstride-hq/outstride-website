import {
  formatToolType,
  tools,
  toolsTaggingNote,
  type ToolType,
} from "@/lib/os";
import { hasToolContent } from "@/lib/tools-content";
import { OsSectionHeader } from "./OsPageHeader";

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
      {toolsByType.map((group) => (
        <section key={group.type} className="os-content-card p-4 p-lg-5 mb-5">
          <OsSectionHeader
            eyebrow="Tool Type"
            title={formatToolType(group.type)}
            description={`${group.items.length} tool${
              group.items.length === 1 ? "" : "s"
            } in this category.`}
          />
          <div className="row g-3">
            {group.items.map((tool) => {
              const card = (
                <div className="featured-box p-4 h-100">
                  <h4 className="text-5 fw-700 mb-1">{tool.title}</h4>
                  <p className="os-card-meta mb-2">
                    {formatToolType(tool.type)}
                  </p>
                  <p className="text-muted small mb-0">{tool.description}</p>
                  {hasToolContent(tool.id) ? (
                    <p className="text-primary fw-700 small mb-0 mt-3">
                      View tool →
                    </p>
                  ) : null}
                </div>
              );

              return (
                <div key={tool.id} className="col-md-6 col-lg-4">
                  {hasToolContent(tool.id) ? (
                    <a
                      href={`/os/tools/${tool.id}/`}
                      className="text-decoration-none"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
      <div className="ui-surface p-4">
        <p className="ui-kicker mb-2">Tagging</p>
        <p className="text-muted mb-0">{toolsTaggingNote}</p>
      </div>
    </div>
  );
}
