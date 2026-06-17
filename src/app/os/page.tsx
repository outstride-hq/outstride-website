import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OSHero from "@/components/os/OSHero";
import LayerCard from "@/components/os/LayerCard";
import StageCard from "@/components/os/StageCard";
import ProcessStepCard from "@/components/os/ProcessStepCard";
import CapabilityMenu from "@/components/os/CapabilityMenu";
import ToolPreview from "@/components/os/ToolPreview";
import { layers, processSteps, stages } from "@/lib/os";

export const metadata = {
  title: "Outstride OS - Outstride",
  description:
    "A practical operating system for founders scaling themselves, their teams and their companies.",
};

export default function OSPage() {
  return (
    <div id="main-wrapper">
      <Header />
      <main id="content" role="main">
        <OSHero />

        <section className="section">
          <div className="container">
            <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
              Three Layers
            </h2>
            <div className="row g-4">
              {layers.map((layer) => (
                <div key={layer.id} className="col-md-4 wow fadeInUp">
                  <LayerCard layer={layer} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <h2 className="text-10 fw-600 text-center mb-4 wow fadeInUp">
              Force → Form → Flow
            </h2>
            <p className="text-5 text-center text-muted mb-5 wow fadeInUp">
              Force, Form and Flow are not a scoring system. They describe the
              direction of travel: from founder-dependent to structured to
              self-sustaining.
            </p>
            <div className="row g-4">
              {stages.map((stage) => (
                <div key={stage.id} className="col-md-4 wow fadeInUp">
                  <StageCard stage={stage} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
              The 4D Process
            </h2>
            <div className="row g-4">
              {processSteps.map((step) => (
                <div key={step.id} className="col-md-6 col-lg-3 wow fadeInUp">
                  <ProcessStepCard step={step} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
              Capability Menu
            </h2>
            <CapabilityMenu />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
              Tools Preview
            </h2>
            <ToolPreview />
          </div>
        </section>

        <section className="section bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="text-8 fw-600 text-white mb-4 wow fadeInUp">
                  Want to install this in your company?
                </h2>
                <p className="text-5 text-white mb-4 wow fadeInUp">
                  Outstride OS is used as a coaching cadence to help founders
                  discover what matters, define success, design the next stage
                  and deliver through rhythm and accountability.
                </p>
                <a
                  href="/#contact"
                  className="btn btn-light rounded-0 wow fadeInUp"
                >
                  Work with me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
