import type { Metadata } from "next";
import CapabilityMenu from "@/components/os/CapabilityMenu";
import OsPageHeader from "@/components/os/OsPageHeader";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Capabilities - Outstride OS",
  description:
    "Twenty-six capabilities across company, founder and human layers — the full map of what has to work to scale.",
  path: "/os/capabilities/",
});

export default function CapabilitiesPage() {
  return (
    <>
      <OsPageHeader
        eyebrow="Capability Map"
        title="The Capabilities"
        description="The skills and knowledge you build to level up as a founder, leader and human — the full map of what has to work to scale."
      >
        <p className="ui-kicker mb-3">26 capabilities</p>
        <p className="text-muted mb-0">
          Start with the symptom, then trace it to the one or two capabilities
          that actually need training.
        </p>
      </OsPageHeader>
      <CapabilityMenu />
    </>
  );
}
