import Link from "next/link";
import OSHero from "@/components/os/OSHero";
import LayerCard from "@/components/os/LayerCard";
import { OsSectionHeader } from "@/components/os/OsPageHeader";
import { layers, processSteps } from "@/lib/os";

export const metadata = {
  title: "Outstride OS - Outstride",
  description:
    "A practical operating system for founders scaling themselves, their teams and their companies.",
};

export default function OSPage() {
  return (
    <>
      <OSHero />

      <div className="mb-5">
        <OsSectionHeader
          eyebrow="The Map"
          title="Three Layers"
          description="The system looks at the company, the founder, and the human underneath both."
          className="mb-5"
        />
        <div className="row g-4">
          {layers.map((layer) => (
            <div key={layer.id} className="col-md-4">
              <LayerCard layer={layer} />
            </div>
          ))}
        </div>
      </div>

      <div className="os-content-card p-4 p-lg-5">
        <OsSectionHeader
          eyebrow="How it runs"
          title="The Four D's"
          description="Diagnose, Define, Design and Deliver turn the OS map into a quarterly coaching cadence."
        />

        <div className="row g-3 mb-4">
          {processSteps.map((step) => (
            <div key={step.id} className="col-sm-6 col-xl-3">
              <div className="featured-box p-4 h-100">
                <h3 className="text-5 fw-700 mb-2">{step.title}</h3>
                <p className="text-muted mb-0">{step.question}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/os/process/" className="btn btn-outline-primary rounded-pill">
          Explore the Four D's
        </Link>
      </div>
    </>
  );
}
