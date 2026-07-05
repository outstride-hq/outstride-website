import type { MetadataRoute } from "next";
import {
  capabilities,
  getCapabilityEffectiveStatus,
  getToolEffectiveStatus,
  tools,
} from "@/lib/os";
import {
  MARKETING_ROUTES,
  OS_INDEX_ROUTES,
  SITE_URL,
} from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const marketingEntries: MetadataRoute.Sitemap = MARKETING_ROUTES.map(
    (path) => ({
      url: `${SITE_URL}${path === "/" ? "/" : path}`,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.8,
    }),
  );

  const osEntries: MetadataRoute.Sitemap = OS_INDEX_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/os/" ? 0.9 : 0.7,
  }));

  const capabilityEntries: MetadataRoute.Sitemap = capabilities
    .filter((capability) => getCapabilityEffectiveStatus(capability) === "ready")
    .map((capability) => ({
      url: `${SITE_URL}/os/capabilities/${capability.id}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const toolEntries: MetadataRoute.Sitemap = tools
    .filter((tool) => getToolEffectiveStatus(tool) === "ready")
    .map((tool) => ({
      url: `${SITE_URL}/os/tools/${tool.id}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [
    ...marketingEntries,
    ...osEntries,
    ...capabilityEntries,
    ...toolEntries,
  ];
}
