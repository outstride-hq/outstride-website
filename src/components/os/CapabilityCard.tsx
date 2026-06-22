import type { Capability } from "@/lib/os";

type CapabilityCardProps = {
  capability: Capability;
};

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div>
      <div className="d-flex align-items-center gap-3 mb-3">
        <span className="os-number-badge">{capability.number}</span>
        <h4 className="text-5 fw-700 mb-0">
          {capability.emoji} {capability.title}
        </h4>
      </div>
      <ul className="text-muted mb-0 ps-3">
        {capability.bullets.map((bullet) => (
          <li key={bullet} className="mb-1">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
