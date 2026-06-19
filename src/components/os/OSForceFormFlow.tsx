import { stages } from "@/lib/os";
import StageCard from "./StageCard";

export default function OSForceFormFlow() {
  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="text-10 fw-600 text-center mb-4 wow fadeInUp">
          Force → Form → Flow
        </h2>
        <p className="text-5 text-center mb-5 wow fadeInUp">
          The whole system points in one direction.
        </p>
        <div className="row g-4 mb-5">
          {stages.map((stage) => (
            <div key={stage.id} className="col-md-4 wow fadeInUp">
              <StageCard stage={stage} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-5 text-muted mb-0">
              Everything in a young company starts on Force. Scaling{" "}
              <em>is</em> the work of moving things — an area of the business, a
              key relationship, your own role — from Force to Form to Flow. Hold
              it over any part of the company and ask:{" "}
              <em>
                what is still being held up by me, and what is the next move to
                change that?
              </em>{" "}
              It is a way of operating, not a score to stamp on every
              capability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
