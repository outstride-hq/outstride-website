import type { Layer } from "@/lib/os";

type LayerCardProps = {
  layer: Layer;
};

export default function LayerCard({ layer }: LayerCardProps) {
  return (
    <div className="featured-box text-center p-4 h-100">
      <h3 className="text-6 fw-600 mb-2">{layer.title}</h3>
      <p className="text-primary fw-600 mb-3">{layer.question}</p>
      <p className="text-muted mb-0">{layer.description}</p>
    </div>
  );
}
