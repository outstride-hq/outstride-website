import Link from "next/link";
import LayerCard from "@/components/os/LayerCard";
import { layers, osQuote, symptomMap } from "@/lib/os";

const featuredSymptomIds = [
  "every-decision",
  "team-dropping-things",
  "not-ready-to-raise",
  "exhausted",
  "cofounder-tension",
  "busy-not-moving",
  "bottleneck",
  "lost-sight",
] as const;

const featuredSymptoms = featuredSymptomIds
  .map((id) => symptomMap.find((entry) => entry.id === id))
  .filter((entry) => entry !== undefined);

export default function OperatingSystem() {
  return (
    <section id="os" className="section bg-light">
      <div className="container">
        <p className="text-3 text-uppercase text-center text-muted mb-2 wow fadeInUp">
          Outstride OS
        </p>
        <h2 className="text-10 fw-600 text-center mb-4 wow fadeInUp">
          The system behind the coaching
        </h2>
        <p className="text-5 text-center text-muted mx-auto mb-5 wow fadeInUp" style={{ maxWidth: "42rem" }}>
          {osQuote}
        </p>

        <div className="mb-5 wow fadeInUp">
          <h3 className="text-7 fw-600 text-center mb-2">Does this sound like you?</h3>
          <p className="text-muted text-center mb-4">
            Founders arrive with a felt problem — not a request for an operating system.
          </p>
          <div className="row g-3">
            {featuredSymptoms.map((entry) => (
              <div key={entry.id} className="col-md-6">
                <div className="featured-box p-4 h-100">
                  <p className="text-5 fw-600 mb-2">&ldquo;{entry.symptom}&rdquo;</p>
                  <p className="text-muted mb-0 small">
                    Usually points to: {entry.capabilityTitles.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5 wow fadeInUp">
          <h3 className="text-7 fw-600 text-center mb-2">Three layers to scale</h3>
          <p className="text-muted text-center mb-4">
            Company, founder and human — the full map of what has to work.
          </p>
          <div className="row g-4">
            {layers.map((layer) => (
              <div key={layer.id} className="col-md-4 d-flex">
                <LayerCard layer={layer} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center wow fadeInUp">
          <Link href="/os/" className="btn btn-dark rounded-0 me-2 mb-2">
            Explore the OS
          </Link>
          <a href="#contact" className="btn btn-outline-dark rounded-0 mb-2">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
