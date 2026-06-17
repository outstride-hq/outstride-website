import {
  getCapabilitiesByGroup,
  getGroupsForLayer,
  layers,
} from "@/lib/os";
import CapabilityCard from "./CapabilityCard";

export default function CapabilityMenu() {
  return (
    <div>
      {layers.map((layer) => {
        const groups = getGroupsForLayer(layer.id);

        return (
          <div key={layer.id} className="mb-5">
            <h3 className="text-8 fw-600 mb-4">{layer.title}</h3>
            {groups.map((group) => {
              const groupCapabilities = getCapabilitiesByGroup(group.id);
              if (groupCapabilities.length === 0) {
                return null;
              }

              return (
                <div key={group.id} className="mb-4">
                  {groups.length > 1 && (
                    <h4 className="text-6 fw-600 mb-3">{group.title}</h4>
                  )}
                  <div className="row g-4">
                    {groupCapabilities.map((capability) => (
                      <div
                        key={capability.id}
                        className="col-md-6 col-lg-4 wow fadeInUp"
                      >
                        <CapabilityCard capability={capability} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
