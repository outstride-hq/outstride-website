import type { Metadata } from "next";
import OSHowItRuns from "@/components/os/OSHowItRuns";
import OsPageHeader, { OsSectionHeader } from "@/components/os/OsPageHeader";
import ProcessStepCard from "@/components/os/ProcessStepCard";
import SymptomMap from "@/components/os/SymptomMap";
import { processSteps } from "@/lib/os";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "The Four D's - Outstride OS",
  description:
    "Diagnose, Define, Design and Deliver — the coaching cadence that turns the Outstride OS into quarterly work.",
  path: "/os/process/",
});

export default function ProcessPage() {
  return (
    <>
      <OsPageHeader
        eyebrow="Operating Cadence"
        title="The Four D's"
        description="Diagnose, Define, Design and Deliver — the coaching cadence that turns the Outstride OS into quarterly work."
      >
        <p className="ui-kicker mb-3">Quarterly rhythm</p>
        <p className="text-muted mb-0">
          Use the map to choose the work, then use the cadence to make it real.
        </p>
      </OsPageHeader>
      <OSHowItRuns />

      <div className="mt-5 pt-5 border-top">
        <OsSectionHeader
          eyebrow="Process"
          title="The Process"
          description="A simple loop for moving from felt pain to focused practice."
          className="mb-5"
        />
        <div className="row g-4">
          {processSteps.map((step) => (
            <div key={step.id} className="col-md-6">
              <ProcessStepCard step={step} />
            </div>
          ))}
        </div>
      </div>

      <SymptomMap />
    </>
  );
}
