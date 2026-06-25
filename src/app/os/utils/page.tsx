import Link from "next/link";
import OsPageHeader from "@/components/os/OsPageHeader";
import { variants } from "@/lib/variants";

const utils = [
  {
    id: "ui-library",
    title: "UI Library",
    description:
      "Shared reference for colors, surfaces, buttons, cards and diagram palettes.",
    href: "/utils/ui/",
    meta: "Design source of truth",
  },
  {
    id: "variants",
    title: "UI refresh variants",
    description:
      "Sandboxed previews of a site-wide restyle — palette, typography, spacing and cards. Live pages are unchanged.",
    href: "/variant/",
    meta: `${variants.length} variants`,
  },
  {
    id: "diagrams",
    title: "Diagram generation",
    description:
      "Compare diagram-as-code renderer prototypes for Strategy Grid, Accountability Dial, NVC flow, and Five Dysfunctions.",
    href: "/os/diagrams/",
    meta: "3 renderer candidates",
  },
] as const;

export const metadata = {
  title: "OS Utils - Outstride",
  description: "Internal tools for exploring UI variants and diagram renderers.",
  robots: { index: false, follow: false },
};

export default function OSUtilsPage() {
  return (
    <>
      <OsPageHeader
        eyebrow="Internal Utility"
        title="Utils"
        description="Quick links to design and diagram tooling. Not linked from the main nav."
      >
        <p className="ui-kicker mb-3">Reference first</p>
        <p className="text-muted mb-0">
          Start with the UI Library when deciding how OS pages, tools and
          diagrams should feel.
        </p>
      </OsPageHeader>

      <div className="d-flex flex-column gap-3">
        {utils.map((util) => (
          <Link key={util.id} href={util.href} className="text-decoration-none">
            <div className="featured-box p-4">
              <div className="os-utils-card-row d-flex justify-content-between align-items-start gap-3">
                <div>
                  <h2 className="text-6 fw-700 mb-1">{util.title}</h2>
                  <p className="text-muted mb-2">{util.description}</p>
                  <span className="badge bg-light text-dark border">
                    {util.meta}
                  </span>
                </div>
                <span className="text-primary fw-700 flex-shrink-0">Open →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-5 mb-0">
        <Link href="/os/" className="text-decoration-none">
          ← Back to Outstride OS
        </Link>
      </p>
    </>
  );
}
