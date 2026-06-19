import type { ProcessStep } from "@/lib/os";

type ProcessStepCardProps = {
  step: ProcessStep;
};

export default function ProcessStepCard({ step }: ProcessStepCardProps) {
  return (
    <div className="featured-box p-4 h-100">
      <h3 className="text-6 fw-600 mb-2">{step.title}</h3>
      <p className="text-primary fw-600 mb-3">
        <em>{step.question}</em>
      </p>
      <ul className="text-muted mb-0 ps-3">
        {step.prompts.map((prompt) => (
          <li key={prompt} className="mb-2">
            {prompt}
          </li>
        ))}
      </ul>
    </div>
  );
}
