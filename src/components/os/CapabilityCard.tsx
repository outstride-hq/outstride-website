import type { Capability } from "@/lib/os";

type CapabilityCardProps = {
  capability: Capability;
};

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="featured-box p-4 h-100">
      <h4 className="text-5 fw-600 mb-2">{capability.title}</h4>
      <p className="text-muted mb-3">{capability.summary}</p>
      {capability.bullets.length > 0 && (
        <ul className="text-muted small mb-0 ps-3">
          {capability.bullets.map((bullet) => (
            <li key={bullet} className="mb-1">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
