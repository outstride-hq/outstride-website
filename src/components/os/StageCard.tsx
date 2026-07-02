import type { Stage } from "@/lib/os";

type StageCardProps = {
  stage: Stage;
};

export default function StageCard({ stage }: StageCardProps) {
  return (
    <div className="featured-box p-4 h-100">
      <p className="os-card-meta mb-3">{stage.id}</p>
      <h3 className="os-prose-card-title mb-3">{stage.title}</h3>
      <p className="os-prose-body os-prose-muted mb-0">{stage.description}</p>
    </div>
  );
}
