import type { Capability, Tool } from "@/lib/os";
import { formatToolType } from "@/lib/os";

type RelatedCapabilitiesProps = {
  capabilities: Capability[];
};

export function RelatedCapabilities({ capabilities }: RelatedCapabilitiesProps) {
  if (capabilities.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 pt-4 border-top mb-0">
      <h2 className="os-prose-related-heading mb-3">Related capabilities</h2>
      <ul className="os-related-cap-list list-unstyled mb-0">
        {capabilities.map((capability) => (
          <li key={capability.id}>
            <a
              href={`/os/capabilities/${capability.id}/`}
              className="text-decoration-none"
            >
              <span aria-hidden="true">{capability.emoji}</span>{" "}
              {capability.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

type RelatedToolsProps = {
  tools: Tool[];
};

export function RelatedTools({ tools }: RelatedToolsProps) {
  if (tools.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 pt-4 border-top mb-0">
      <h2 className="os-prose-related-heading mb-4">Related tools</h2>
      <div className="row g-3">
        {tools.map((tool) => (
          <div key={tool.id} className="col-md-6">
            <a href={`/os/tools/${tool.id}/`} className="text-decoration-none">
              <div className="featured-box p-3 h-100">
                <h3 className="os-prose-card-title mb-1">{tool.title}</h3>
                <p className="os-card-meta mb-2">{formatToolType(tool.type)}</p>
                <p className="text-muted small mb-0">{tool.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
