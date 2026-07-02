import {
  howOsRunsFeltProblems,
  howOsRunsTrainingPoints,
} from "@/lib/os";
import { OsSectionHeader } from "./OsPageHeader";

export default function OSHowItRuns() {
  return (
    <div className="os-content-card p-4 p-lg-5">
      <OsSectionHeader
        eyebrow="How it runs"
        title="How the OS Runs"
        description={
          <>
            It works like training for anything hard — there is{" "}
            <em>what you train</em>, and <em>how you train</em>.
          </>
        }
      />

      <div className="row g-4 mb-4">
        {howOsRunsTrainingPoints.map((point) => (
          <div key={point.label} className="col-md-6">
            <div className="ui-surface p-4 h-100">
              <h3 className="text-5 fw-700 mb-2">{point.label}</h3>
              <p className="text-muted mb-0">{point.text}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-5 mb-5">
        You never start with all 26. A founder arrives with a felt problem —{" "}
        {howOsRunsFeltProblems.map((problem, index) => (
          <span key={problem}>
            <em>{problem}</em>
            {index < howOsRunsFeltProblems.length - 1 ? ", " : ""}
          </span>
        ))}{" "}
        — and the map&apos;s first job is to trace that symptom to the one or two
        capabilities actually causing it. The full map is for the coach, not the
        first conversation.
      </p>
    </div>
  );
}
