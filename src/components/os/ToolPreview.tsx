import {
  formatToolType,
  futureToolBacklog,
  toolLibraryCategories,
  toolsHowToUse,
  tools,
  toolsTaggingNote,
} from "@/lib/os";
import { hasToolContent } from "@/lib/tools-content";
import { OsSectionHeader } from "./OsPageHeader";

const flagshipToolIds = new Set([
  "symptom-map",
  "company-health-scorecard",
  "two-hour-constraint",
  "ownership-map",
  "leadership-hats",
  "relationship-design-canvas",
]);

export default function ToolPreview() {
  const toolsByCategory = toolLibraryCategories
    .map((category) => {
      const items = tools
        .filter((tool) => tool.categoryId === category.id)
        .sort((a, b) => {
          const aFlagship = flagshipToolIds.has(a.id);
          const bFlagship = flagshipToolIds.has(b.id);
          if (aFlagship !== bFlagship) {
            return aFlagship ? -1 : 1;
          }
          return a.title.localeCompare(b.title);
        });
      return { category, items };
    })
    .filter((group) => group.items.length > 0);

  return (
    <div>
      <section className="ui-surface p-4 mb-5">
        <p className="ui-kicker mb-2">How to use tools</p>
        <p className="text-muted mb-0">{toolsHowToUse}</p>
      </section>

      {toolsByCategory.map((group) => (
        <section
          key={group.category.id}
          className="os-content-card p-4 p-lg-5 mb-5"
        >
          <OsSectionHeader
            eyebrow={`Category ${group.category.letter}`}
            title={group.category.title}
            description={`${group.items.length} tool${
              group.items.length === 1 ? "" : "s"
            } - ${group.category.question}`}
          />
          <div className="row g-3">
            {group.items.map((tool) => {
              const isFlagship = flagshipToolIds.has(tool.id);
              const card = (
                <div className="featured-box p-4 h-100">
                  {isFlagship ? (
                    <p className="ui-kicker mb-2">Flagship tool</p>
                  ) : null}
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

      <section className="os-content-card p-4 p-lg-5 mb-5">
        <OsSectionHeader
          eyebrow="Future backlog"
          title="Next tools to build"
          description="Shortlist grouped by library category."
        />
        <div className="row g-3">
          {futureToolBacklog.map((group) => (
            <div key={group.id} className="col-lg-6">
              <div className="featured-box p-4 h-100">
                <h3 className="text-6 fw-700 mb-2">{group.title}</h3>
                <p className="text-muted small mb-3">{group.question}</p>
                <ul className="text-muted mb-0 ps-3">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="ui-surface p-4">
        <p className="ui-kicker mb-2">Tagging</p>
        <p className="text-muted mb-0">{toolsTaggingNote}</p>
      </div>
    </div>
  );
}
