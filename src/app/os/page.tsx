import Link from "next/link";
import OSHero from "@/components/os/OSHero";
import { OsSectionHeader } from "@/components/os/OsPageHeader";

export const metadata = {
  title: "Outstride OS - Outstride",
  description:
    "A practical operating system for founders scaling themselves, their teams and their companies.",
};

export default function OSPage() {
  return (
    <>
      <OSHero />

      <div className="os-content-card p-4 p-lg-5">
        <OsSectionHeader
          eyebrow="Why this exists"
          title="From founder pain to founder system"
          description="I built Outstride OS after learning the hard way what scaling without the right support can cost."
        />

        <div className="row g-4 align-items-center mb-4">
          <div className="col-lg-8">
            <p className="text-muted mb-3">
              I am Ben. I scaled a startup from three people to 250 and raised $70M, then watched it crash in a way
              that took more out of me than I expected.
            </p>
            <p className="text-muted mb-0">
              I did not have a coach, and in hindsight that was one of my biggest mistakes. Over the last five-plus
              years, coaching hundreds of founders, I have been codifying what consistently works into one practical
              system.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <div className="bg-light rounded-circle d-inline-block p-3 shadow-lg wow zoomIn">
              <img
                className="img-fluid rounded-circle d-block"
                src="/images/web-developer.jpg"
                title="I'm Ben"
                alt="Ben"
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Link href="/os/layers/" className="btn btn-outline-primary rounded-pill">
            Explore the three layers
          </Link>
          <Link href="/os/process/" className="btn btn-outline-primary rounded-pill">
            See how the process runs
          </Link>
        </div>
      </div>
    </>
  );
}
