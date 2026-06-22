import { formatAccreditation } from "@/lib/accreditation";
import {
  formatToolType,
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
