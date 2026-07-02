import { stages } from "@/lib/os";
import OsPageHeader from "./OsPageHeader";
import StageCard from "./StageCard";

export default function OSForceFormFlow() {
  return (
    <div>
      <OsPageHeader
        eyebrow="Scaling Lens"
        title="Force → Form → Flow"
        description="The whole system points in one direction: away from founder force and toward structure that can run without you."
      >
        <p className="ui-kicker mb-3">Ask this</p>
        <p className="text-muted mb-0">
          What is still being held up by me, and what is the next move to change
          that?
        </p>
      </OsPageHeader>
      <div className="row g-4 mb-5">
        {stages.map((stage) => (
          <div key={stage.id} className="col-md-4">
            <StageCard stage={stage} />
          </div>
        ))}
      </div>
      <div className="ui-surface p-4 p-lg-5">
        <p className="os-prose-body os-prose-muted mb-0">
          Everything in a young company starts on Force. Scaling <em>is</em> the
          work of moving things — an area of the business, a key relationship,
          your own role — from Force to Form to Flow. Hold it over any part of
          the company and ask:{" "}
          <em>
            what is still being held up by me, and what is the next move to
            change that?
          </em>{" "}
          It is a way of operating, not a score to stamp on every capability.
        </p>
      </div>
    </div>
  );
}
