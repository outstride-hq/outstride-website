import type { Metadata } from "next";
import { renderDiagramDefinition } from "@/components/diagram/DiagramRenderer";
import OsPageHeader from "@/components/os/OsPageHeader";
import { getDiagramSandboxEntries } from "@/lib/diagram/registry";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Diagram Prototypes - Outstride OS",
    description:
      "Compare diagram-as-code renderer prototypes across Strategy One-Pager, Accountability Dial, NVC flow, and Five Dysfunctions pyramid.",
    path: "/os/diagrams/",
    index: false,
  }),
};

const rendererCandidates = [
  {
    id: "svg",
    title: "Candidate A — SVG Canvas",
    tradeoffs:
      "Fixed coordinates, deterministic output, precise positioning. Best path to SVG/PNG/PDF export. Less natural text wrapping.",
    variant: "svg" as const,
  },
  {
    id: "html",
    title: "Candidate B — HTML/CSS Canvas",
    tradeoffs:
      "Absolute-positioned divs with CSS shadows. Easier rich content, native links, and text wrapping. Less portable for export.",
    variant: "html" as const,
  },
  {
    id: "responsive",
    title: "Candidate C — Responsive Grid",
    tradeoffs:
      "Semantic layout derived from diagram structure. Mobile-friendly and accessible. Ignores fixed coordinates from the definition.",
    variant: "responsive" as const,
  },
];

export default function DiagramsPage() {
  const entries = getDiagramSandboxEntries();

  return (
    <>
      <OsPageHeader
        eyebrow="Internal Utility"
        title="Diagram Prototypes"
        description={
          <>
            Four diagram definitions rendered through three competing approaches.
            Edit files in <code>src/lib/diagram/definitions/</code> to see live
            changes.
          </>
        }
      >
        <p className="ui-kicker mb-3">Preferred renderer</p>
        <p className="text-muted mb-0">
          Candidate A uses SVG Canvas for deterministic positioning and the
          strongest export path.
        </p>
      </OsPageHeader>

      {entries.map((entry) => (
        <div key={entry.definition.id} className="mb-5 pb-4 border-bottom">
          <p className="ui-kicker mb-2">Diagram</p>
          <h2 className="text-8 fw-700 mb-4">{entry.definition.title}</h2>

          {entry.referenceImage ? (
            <div className="ui-surface p-4 mb-4">
              <h3 className="text-6 fw-700 mb-3">Target</h3>
              <div className="overflow-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.referenceImage.src}
                  alt={entry.referenceImage.alt}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          ) : null}

          {rendererCandidates.map((candidate) => (
            <div key={`${entry.definition.id}-${candidate.id}`} className="mb-4">
              <div className="featured-box p-4">
                <h3 className="text-7 fw-700 mb-2">{candidate.title}</h3>
                <p className="text-muted mb-4">{candidate.tradeoffs}</p>
                {renderDiagramDefinition(entry.definition, candidate.variant)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
