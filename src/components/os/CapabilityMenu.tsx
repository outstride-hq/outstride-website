import {
  getCapabilitiesByGroup,
  getGroupsForLayer,
  layers,
} from "@/lib/os";
import CapabilityCard from "./CapabilityCard";
import { OsSectionHeader } from "./OsPageHeader";

export default function CapabilityMenu() {
  return (
    <div>
      {layers.map((layer) => {
        const groups = getGroupsForLayer(layer.id);

        return (
          <section key={layer.id} className="os-content-card p-4 p-lg-5 mb-5">
            <OsSectionHeader
              eyebrow="Layer"
              title={layer.title}
              description={layer.question}
            />
            {groups.map((group) => {
              const groupCapabilities = getCapabilitiesByGroup(group.id);
              if (groupCapabilities.length === 0) {
                return null;
              }

              const showGroupTitle = layer.id === "founder";

              return (
                <div key={group.id} className="mb-4">
                  {showGroupTitle ? (
                    <h3 className="text-6 fw-700 mb-3">{group.title}</h3>
                  ) : null}
                  <div className="row g-4">
                    {groupCapabilities.map((capability) => (
                      <div
                        key={capability.id}
                        id={`capability-${capability.id}`}
                        className="col-12"
                      >
                        <a
                          href={`/os/capabilities/${capability.id}/`}
                          className="text-decoration-none d-block featured-box p-4 h-100"
                        >
                          <CapabilityCard capability={capability} />
                          <p className="text-primary fw-700 small mb-0 mt-3">
                            View capability →
                          </p>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
