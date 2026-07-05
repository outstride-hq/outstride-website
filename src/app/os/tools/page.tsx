import type { Metadata } from "next";
import OsPageHeader from "@/components/os/OsPageHeader";
import ToolPreview from "@/components/os/ToolPreview";
import { toolsIntro } from "@/lib/os";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tools - Outstride OS",
  description:
    "Diagnostics, frameworks, templates and rhythms that help diagnose, practise, install or review a capability.",
  path: "/os/tools/",
});

export default function ToolsPage() {
  return (
    <>
      <OsPageHeader
        eyebrow="Tool Library"
        title="Tool Library"
        description={toolsIntro}
      >
        <p className="ui-kicker mb-3">How to use</p>
        <p className="text-muted mb-0">
          Pick the smallest tool that helps diagnose, practise, install or
          review the capability you are training this quarter.
        </p>
      </OsPageHeader>
      <ToolPreview />
    </>
  );
}
