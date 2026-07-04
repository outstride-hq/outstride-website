"use client";

import { useMemo, useState } from "react";
import {
  formatToolType,
  getToolEffectiveStatus,
  toolLibraryCategories,
  tools,
  toolsHowToUse,
  toolsTaggingNote,
  type Tool,
  type ToolType,
} from "@/lib/os";
import { OsSectionHeader } from "./OsPageHeader";

const flagshipToolIds = new Set([
  "symptom-map",
  "company-health-scorecard",
  "two-hour-constraint",
  "ownership-map",
  "leadership-hats",
  "relationship-design-canvas",
]);

const toolTypeOrder: ToolType[] = [
  "diagnostic",
  "framework",
  "template",
  "conversation",
  "exercise",
  "rhythm",
];

function compareToolsForListing(a: Tool, b: Tool): number {
  const aFlagship = flagshipToolIds.has(a.id);
  const bFlagship = flagshipToolIds.has(b.id);
  if (aFlagship !== bFlagship) {
    return aFlagship ? -1 : 1;
  }
  return a.title.localeCompare(b.title);
}

function groupToolsByCategory(filteredTools: Tool[]) {
  return toolLibraryCategories
    .map((category) => {
      const items = filteredTools
        .filter((tool) => tool.categoryId === category.id)
        .sort(compareToolsForListing);
      return { category, items };
    })
    .filter((group) => group.items.length > 0);
}

function renderToolCard(tool: Tool, variant: "ready" | "draft") {
  const isFlagship = flagshipToolIds.has(tool.id);
  const isDraft = variant === "draft";

  return (
    <div className="featured-box p-4 h-100">
      {isFlagship ? <p className="ui-kicker mb-2">Flagship tool</p> : null}
      {isDraft ? (
        <p className="os-draft-banner-label mb-2">Draft</p>
      ) : null}
      <h4 className="text-5 fw-700 mb-1">{tool.title}</h4>
      <p className="os-card-meta mb-2">{formatToolType(tool.type)}</p>
      <p className="text-muted small mb-0">{tool.description}</p>
      <p
        className={`${isDraft ? "text-muted" : "text-primary"} fw-700 small mb-0 mt-3`}
      >
        {isDraft ? "View draft →" : "View tool →"}
      </p>
    </div>
  );
}

export default function ToolPreview() {
  const [activeType, setActiveType] = useState<ToolType | "all">("all");

  const readyTools = useMemo(
    () => tools.filter((tool) => getToolEffectiveStatus(tool) === "ready"),
    [],
  );

  const draftTools = useMemo(
    () => tools.filter((tool) => getToolEffectiveStatus(tool) === "draft"),
    [],
  );

  const typeCounts = useMemo(() => {
    const counts = new Map<ToolType, number>();
    for (const tool of readyTools) {
      counts.set(tool.type, (counts.get(tool.type) ?? 0) + 1);
    }
    return counts;
  }, [readyTools]);

  const availableTypes = useMemo(
    () => toolTypeOrder.filter((type) => (typeCounts.get(type) ?? 0) > 0),
    [typeCounts],
  );

  const filteredTools = useMemo(
    () =>
      activeType === "all"
        ? readyTools
        : readyTools.filter((tool) => tool.type === activeType),
    [activeType, readyTools],
  );

  const toolsByCategory = useMemo(
    () => groupToolsByCategory(filteredTools),
    [filteredTools],
  );

  const draftToolsByCategory = useMemo(
    () => groupToolsByCategory(draftTools),
    [draftTools],
  );

  const totalVisible = filteredTools.length;

  return (
    <div>
      <section className="ui-surface p-4 mb-5">
        <p className="ui-kicker mb-2">How to use tools</p>
        <p className="text-muted mb-0">{toolsHowToUse}</p>
      </section>

      <section className="os-content-card p-4 p-lg-5 mb-5">
        <OsSectionHeader
          eyebrow="Filter"
          title="Browse by type"
          description={`${totalVisible} published tool${totalVisible === 1 ? "" : "s"} shown`}
        />
        <div
          className="os-filter-bar d-flex flex-wrap gap-2"
          role="group"
          aria-label="Filter tools by type"
        >
          <button
            type="button"
            className={`os-filter-chip${activeType === "all" ? " os-filter-chip--active" : ""}`}
            aria-pressed={activeType === "all"}
            onClick={() => setActiveType("all")}
          >
            All
            <span className="os-filter-chip-count">{readyTools.length}</span>
          </button>
          {availableTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`os-filter-chip${activeType === type ? " os-filter-chip--active" : ""}`}
              aria-pressed={activeType === type}
              onClick={() => setActiveType(type)}
            >
              {formatToolType(type)}
              <span className="os-filter-chip-count">
                {typeCounts.get(type) ?? 0}
              </span>
            </button>
          ))}
        </div>
      </section>

      {toolsByCategory.length === 0 ? (
        <section className="os-content-card p-4 p-lg-5 mb-5">
          <p className="text-muted mb-0">
            No tools match this filter. Try another type or show all tools.
          </p>
        </section>
      ) : (
        toolsByCategory.map((group) => (
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
              {group.items.map((tool) => (
                <div key={tool.id} className="col-md-6 col-lg-4">
                  <a
                    href={`/os/tools/${tool.id}/`}
                    className="text-decoration-none"
                  >
                    {renderToolCard(tool, "ready")}
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))
      )}

      {draftToolsByCategory.length > 0 ? (
        <section className="os-content-card p-4 p-lg-5 mb-5">
          <OsSectionHeader
            eyebrow="Draft tools"
            title="Tools to build"
            description={`${draftTools.length} draft tool${
              draftTools.length === 1 ? "" : "s"
            } grouped by library category.`}
          />
          {draftToolsByCategory.map((group) => (
            <div key={group.category.id} className="mb-4">
              <h3 className="text-6 fw-700 mb-1">{group.category.title}</h3>
              <p className="text-muted small mb-3">{group.category.question}</p>
              <div className="row g-3">
                {group.items.map((tool) => (
                  <div key={tool.id} className="col-md-6 col-lg-4">
                    <a
                      href={`/os/tools/${tool.id}/`}
                      className="text-decoration-none"
                    >
                      {renderToolCard(tool, "draft")}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : null}

      <div className="ui-surface p-4">
        <p className="ui-kicker mb-2">Tagging</p>
        <p className="text-muted mb-0">{toolsTaggingNote}</p>
      </div>
    </div>
  );
}
