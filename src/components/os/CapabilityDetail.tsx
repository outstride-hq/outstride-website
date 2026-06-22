import {
  getAdjacentCapabilities,
  getRhythmsForCapability,
  getToolsForCapability,
  type Capability,
} from "@/lib/os";
import { getCapabilityGroupTitle } from "@/lib/os-nav";
import OsPageHeader from "./OsPageHeader";
import { RelatedTools } from "./RelatedCapabilities";

type CapabilityDetailProps = {
  capability: Capability;
};

function RelatedRhythms({
  rhythms,
}: {
  rhythms: ReturnType<typeof getRhythmsForCapability>;
}) {
  if (rhythms.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 pt-4 border-top mb-0">
      <h2 className="text-7 fw-700 mb-4">Related rhythms</h2>
      <div className="row g-3">
        {rhythms.map((rhythm) => (
          <div key={rhythm.id} className="col-md-6">
            <div className="featured-box p-3 h-100">
              <p className="text-5 fw-700 mb-1">{rhythm.title}</p>
              <p className="text-muted small mb-0">{rhythm.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CapabilityDetail({ capability }: CapabilityDetailProps) {
  const tools = getToolsForCapability(capability.id);
  const rhythms = getRhythmsForCapability(capability.id);
  const { prev, next } = getAdjacentCapabilities(capability.id);
  const groupTitle = getCapabilityGroupTitle(capability.groupId);

  return (
    <article>
      <OsPageHeader
        eyebrow={`Capability ${capability.number}${
          groupTitle ? ` · ${groupTitle}` : ""
        }`}
        title={capability.title}
        description={capability.summary}
        asideVariant="square"
      >
        <span className="os-page-header-emoji" aria-hidden="true">
          {capability.emoji}
        </span>
      </OsPageHeader>

      <div className="ui-surface p-4 p-lg-5">
        <p className="ui-kicker mb-3">What this means</p>
        <ul className="text-5 ps-3 mb-0">
          {capability.bullets.map((bullet) => (
            <li key={bullet} className="mb-2">
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <RelatedTools tools={tools} />
      <RelatedRhythms rhythms={rhythms} />

      <nav
        className="d-flex justify-content-between align-items-center border-top pt-4 mt-5"
        aria-label="Capability navigation"
      >
        <div>
          {prev ? (
            <a
              href={`/os/capabilities/${prev.id}/`}
              className="text-decoration-none"
            >
              ← {prev.number}. {prev.title}
            </a>
          ) : (
            <span />
          )}
        </div>
        <div className="text-end">
          {next ? (
            <a
              href={`/os/capabilities/${next.id}/`}
              className="text-decoration-none"
            >
              {next.number}. {next.title} →
            </a>
          ) : (
            <span />
          )}
        </div>
      </nav>

      <p className="mt-4 mb-0">
        <a href="/os/capabilities/" className="text-decoration-none">
          ← All capabilities
        </a>
      </p>
    </article>
  );
}
