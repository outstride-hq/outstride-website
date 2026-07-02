import LayerCard from "@/components/os/LayerCard";
import OsPageHeader, { OsSectionHeader } from "@/components/os/OsPageHeader";
import { layers } from "@/lib/os";

export const metadata = {
  title: "Three Layers - Outstride OS",
  description:
    "The Outstride OS map across company, founder and human layers.",
};

export default function LayersPage() {
  return (
    <>
      <OsPageHeader
        eyebrow="The Map"
        title="Three Layers"
        description="The system looks at the company, the founder, and the human underneath both."
      >
        <p className="ui-kicker mb-3">Where to look first</p>
        <p className="text-muted mb-0">
          Every founder challenge shows up across these layers. Name the layer
          first, then pick the capability and tool.
        </p>
      </OsPageHeader>

      <div className="mb-5">
        <OsSectionHeader
          eyebrow="Layers"
          title="Read the full system, not just symptoms"
          description="Each layer gives a different lens for diagnosing where the real bottleneck sits."
          className="mb-5"
        />
        <div className="row g-4">
          {layers.map((layer) => (
            <div key={layer.id} className="col-md-4">
              <LayerCard layer={layer} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
