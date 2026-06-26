import { formatAccreditation } from "@/lib/accreditation";
import {
  formatToolDepth,
  formatToolFormat,
  formatToolFrequency,
  formatToolMoment,
  formatToolType,
  getToolLibraryCategoryLabel,
  getRelatedCapabilities,
  getRelatedTools,
  type Tool,
} from "@/lib/os";
import { getToolContent } from "@/lib/tools-content";
import OsPageHeader from "./OsPageHeader";
import { RelatedCapabilities, RelatedTools } from "./RelatedCapabilities";
import ToolContentBlocks from "./ToolContentBlocks";

type ToolDetailProps = {
  tool: Tool;
};

export default function ToolDetail({ tool }: ToolDetailProps) {
  const content = getToolContent(tool.id);
  const relatedCapabilities = getRelatedCapabilities(tool);
  const relatedTools = getRelatedTools(tool);
  const capabilityRefsFromContent =
    content?.blocks
      .filter((block) => block.kind === "capabilityRefs")
      .flatMap((block) =>
        block.kind === "capabilityRefs" ? block.capabilityIds : [],
      ) ?? [];

  const displayCapabilities =
    capabilityRefsFromContent.length > 0
      ? relatedCapabilities.filter((capability) =>
          capabilityRefsFromContent.includes(capability.id),
        )
      : relatedCapabilities;
  const taxonomyRows = [
    {
      label: "Category",
      value: tool.categoryId ? getToolLibraryCategoryLabel(tool.categoryId) : null,
    },
    { label: "Layer", value: tool.layerIds.map((layer) => layer[0].toUpperCase() + layer.slice(1)).join(" / ") },
    {
      label: "Moment",
      value:
        tool.moments && tool.moments.length > 0
          ? tool.moments.map((moment) => formatToolMoment(moment)).join(" / ")
          : null,
    },
    { label: "Type", value: formatToolType(tool.type) },
    { label: "Format", value: tool.format.map((format) => formatToolFormat(format)).join(" / ") },
    {
      label: "Depth",
      value:
        tool.depth && tool.depth.length > 0
          ? tool.depth.map((depth) => formatToolDepth(depth)).join(" / ")
          : null,
    },
    {
      label: "Frequency",
      value:
        tool.frequency && tool.frequency.length > 0
          ? tool.frequency
              .map((frequency) => formatToolFrequency(frequency))
              .join(" / ")
          : null,
    },
  ].filter((row): row is { label: string; value: string } => Boolean(row.value));

  return (
    <article>
      <OsPageHeader
        eyebrow={formatToolType(tool.type)}
        title={tool.title}
        description={content?.intro ?? tool.description}
      />

      {tool.accreditation ? (
        <div className="ui-surface p-4 mb-4">
          <p className="ui-kicker mb-2">Source / credit</p>
          <p className="mb-0 small">
            {tool.accreditation.sourceUrl ? (
              <a
                href={tool.accreditation.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {formatAccreditation(tool.accreditation)}
              </a>
            ) : (
              formatAccreditation(tool.accreditation)
            )}
          </p>
        </div>
      ) : null}

      {taxonomyRows.length > 0 ? (
        <div className="ui-surface p-4 mb-4">
          <p className="ui-kicker mb-3">Tags</p>
          <div className="table-responsive">
            <table className="table table-sm mb-0">
              <tbody>
                {taxonomyRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="text-nowrap pe-3">
                      {row.label}
                    </th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {content ? <ToolContentBlocks blocks={content.blocks} /> : null}

      <RelatedCapabilities capabilities={displayCapabilities} />
      <RelatedTools tools={relatedTools} />

      <p className="mt-5 pt-4 border-top mb-0">
        <a href="/os/tools/" className="text-decoration-none">
          ← All tools
        </a>
      </p>
    </article>
  );
}
