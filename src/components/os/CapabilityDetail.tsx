import {
  getAdjacentCapabilities,
  getRhythmsForCapability,
  getToolBySlug,
  getToolsForCapability,
  type Capability,
} from "@/lib/os";
import { getCapabilityContent } from "@/lib/capabilities-content";
import { getCapabilityGroupTitle } from "@/lib/os-nav";
import JsonLd from "@/components/JsonLd";
import {
  buildBreadcrumbJsonLd,
  buildCapabilityJsonLd,
} from "@/lib/structured-data";
import OsConversionCta from "./OsConversionCta";
import OsPageHeader from "./OsPageHeader";
import { RelatedTools } from "./RelatedCapabilities";
import ToolContentBlocks from "./ToolContentBlocks";

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
      <h2 className="os-prose-related-heading mb-4">Related rhythms</h2>
      <div className="row g-3">
        {rhythms.map((rhythm) => (
          <div key={rhythm.id} className="col-md-6">
            <div className="featured-box p-3 h-100">
              <p className="os-prose-card-title mb-1">{rhythm.title}</p>
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
  const content = getCapabilityContent(capability.id);

  return (
    <article className="os-prose">
      <JsonLd
        data={[
          buildCapabilityJsonLd(capability),
          buildBreadcrumbJsonLd([
            { name: "Outstride OS", path: "/os/" },
            { name: "Capabilities", path: "/os/capabilities/" },
            {
              name: capability.title,
              path: `/os/capabilities/${capability.id}/`,
            },
          ]),
        ]}
      />
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

      {content ? (
        <blockquote className="os-cap-hook">
          <p className="ui-kicker mb-2">Founders say</p>
          <p className="os-prose-lead fst-italic mb-0">
            &ldquo;{content.hook}&rdquo;
          </p>
        </blockquote>
      ) : null}

      {content ? (
        <div className="os-cap-shift">
          <div className="os-cap-shift-cell">
            <p className="ui-kicker mb-2">Where you are today</p>
            <ul className="os-cap-shift-list mb-0">
              {content.beforeAfter.today.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <span className="os-cap-shift-arrow" aria-hidden="true">
            →
          </span>
          <div className="os-cap-shift-cell os-cap-shift-cell-success">
            <p className="ui-kicker mb-2">Where you&rsquo;re headed</p>
            <ul className="os-cap-shift-list mb-0">
              {content.beforeAfter.success.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {content ? (
        <div>
          <p className="ui-kicker mb-2">Why this matters</p>
          <p className="os-prose-body os-prose-muted mb-0">{content.why}</p>
        </div>
      ) : null}

      <div className="ui-surface p-4 p-lg-5">
        <p className="ui-kicker mb-3">What this means</p>
        <ul className="os-prose-list mb-0">
          {capability.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      {content ? (
        <div className="mt-5">
          <ToolContentBlocks
            blocks={[
              { kind: "heading", text: "What good looks like" },
              { kind: "list", items: content.whatGoodLooksLike },
              { kind: "heading", text: "Where founders get it wrong" },
              { kind: "list", items: content.whereFoundersGoWrong },
              ...(content.blocks ?? []),
            ]}
          />
        </div>
      ) : null}

      {content?.doNow?.length ? (
        <div className="ui-surface p-4 p-lg-5 mt-5">
          <p className="ui-kicker mb-3">What you can do right now</p>
          <ul className="os-prose-list mb-0">
            {content.doNow.map((item) => {
              const tool = item.toolId ? getToolBySlug(item.toolId) : undefined;
              return (
                <li key={item.action}>
                  <strong>{item.action}.</strong> {item.note}
                  {tool ? (
                    <>
                      {" "}
                      <a
                        href={`/os/tools/${tool.id}/`}
                        className="fw-700 text-decoration-none text-nowrap"
                      >
                        {tool.title} →
                      </a>
                    </>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <RelatedTools tools={tools} />
      <RelatedRhythms rhythms={rhythms} />
      <OsConversionCta />

      <nav
        className="os-cap-nav d-flex flex-sm-row justify-content-sm-between align-items-sm-center border-top pt-4 mt-5"
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
