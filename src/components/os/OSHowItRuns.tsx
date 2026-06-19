import {
  howOsRunsFeltProblems,
  howOsRunsQuarterlyIntro,
  howOsRunsQuarterlySteps,
  howOsRunsTrainingPoints,
} from "@/lib/os";

export default function OSHowItRuns() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
              How the OS Runs
            </h2>
            <p className="text-5 mb-4 wow fadeInUp">
              It works like training for anything hard — there is{" "}
              <em>what you train</em>, and <em>how you train</em>.
            </p>
            <ul className="text-5 mb-4 ps-3">
              {howOsRunsTrainingPoints.map((point) => (
                <li key={point.label} className="mb-3">
                  <strong>{point.label}</strong> {point.text}
                </li>
              ))}
            </ul>
            <p className="text-5 mb-5 wow fadeInUp">
              You never start with all 26. A founder arrives with a felt problem
              —{" "}
              {howOsRunsFeltProblems.map((problem, index) => (
                <span key={problem}>
                  <em>{problem}</em>
                  {index < howOsRunsFeltProblems.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              — and the map&apos;s first job is to trace that symptom to the one
              or two capabilities actually causing it. The full map is for the
              coach, not the first conversation.
            </p>
            <p className="text-5 fw-600 mb-3">{howOsRunsQuarterlyIntro}</p>
            <ol className="text-5 text-muted ps-3">
              {howOsRunsQuarterlySteps.map((step) => (
                <li key={step.title} className="mb-4">
                  <strong className="text-dark">{step.title}</strong> —{" "}
                  {step.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
