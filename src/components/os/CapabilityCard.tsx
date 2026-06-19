import type { Capability } from "@/lib/os";

type CapabilityCardProps = {
  capability: Capability;
};

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="mb-4">
      <h4 className="text-5 fw-600 mb-2">
        {capability.number}. {capability.emoji} {capability.title}
      </h4>
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
