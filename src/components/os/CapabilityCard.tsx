import type { Capability } from "@/lib/os";

type CapabilityCardProps = {
  capability: Capability;
  variant?: "full" | "compact";
};

function capabilitySummary(capability: Capability): string {
  if (capability.summary.trim()) {
    return capability.summary;
  }

  return capability.bullets[0] ?? "";
}

export default function CapabilityCard({
  capability,
  variant = "full",
}: CapabilityCardProps) {
  return (
    <div>
      <div className="d-flex align-items-center gap-3 mb-3">
        <span className="os-number-badge os-emoji-badge" aria-hidden="true">
          {capability.emoji}
        </span>
        <h4 className="text-5 fw-700 mb-0">{capability.title}</h4>
      </div>
      {variant === "compact" ? (
        <p className="text-muted small mb-0">{capabilitySummary(capability)}</p>
      ) : (
        <ul className="text-muted mb-0 ps-3">
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
