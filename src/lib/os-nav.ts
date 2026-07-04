import {
  capabilities,
  capabilityGroups,
  getCapabilityBySlug,
  getCapabilityEffectiveStatus,
  getGroupsForLayer,
  getToolBySlug,
  getToolEffectiveStatus,
  layers,
  resolveOsContentStatus,
  toolLibraryCategories,
  tools,
  type OsContentStatus,
} from "@/lib/os";

export type OsNavItem = {
  label: string;
  href: string;
  status?: OsContentStatus;
};

export type OsNavSubGroup = {
  label: string;
  items: OsNavItem[];
};

export type OsNavGroup = {
  label: string;
  href?: string;
  items?: OsNavItem[];
  subGroups?: OsNavSubGroup[];
};

export type OsPageLink = {
  href: string;
  label: string;
  status?: OsContentStatus;
};

export const osPages: OsPageLink[] = [
  { href: "/os/", label: "Home" },
  { href: "/os/layers/", label: "Three Layers" },
  { href: "/os/process/", label: "The Four D's" },
  { href: "/os/force-form-flow/", label: "Force, Form, Flow" },
  { href: "/os/capabilities/", label: "Capabilities" },
  { href: "/os/tools/", label: "Tools" },
];

export const osPageSequence: OsPageLink[] = osPages;

function buildCapabilitySubGroups(): OsNavSubGroup[] {
  return layers.flatMap((layer) => {
    const groups = getGroupsForLayer(layer.id);

    return groups.map((group) => {
      const groupCapabilities = capabilities
        .filter((capability) => capability.groupId === group.id)
        .sort((a, b) => a.order - b.order);

      return {
        label: layer.id === "founder" ? group.title : layer.title,
        items: groupCapabilities.map((capability) => ({
          label: `${capability.number}. ${capability.title}`,
          href: `/os/capabilities/${capability.id}/`,
          status: getCapabilityEffectiveStatus(capability),
        })),
      };
    });
  });
}

const flagshipToolIds = new Set([
  "symptom-map",
  "company-health-scorecard",
  "two-hour-constraint",
  "ownership-map",
  "leadership-hats",
  "relationship-design-canvas",
]);

function compareToolsForNav(
  a: (typeof tools)[number],
  b: (typeof tools)[number],
): number {
  const aFlagship = flagshipToolIds.has(a.id);
  const bFlagship = flagshipToolIds.has(b.id);
  if (aFlagship !== bFlagship) {
    return aFlagship ? -1 : 1;
  }
  return a.title.localeCompare(b.title);
}

function buildToolSubGroups(): OsNavSubGroup[] {
  return toolLibraryCategories
    .map((category) => {
      const categoryTools = tools
        .filter((tool) => tool.categoryId === category.id)
        .sort(compareToolsForNav);

      return {
        label: `Category ${category.letter}: ${category.title}`,
        items: categoryTools.map((tool) => ({
          label: tool.title,
          href: `/os/tools/${tool.id}/`,
          status: getToolEffectiveStatus(tool),
        })),
      };
    })
    .filter((group) => group.items.length > 0);
}

export const osNavGroups: OsNavGroup[] = [
  {
    label: "Overview",
    items: osPages.slice(0, 4).map((page) => ({
      label: page.label,
      href: page.href,
      status: page.status,
    })),
  },
  {
    label: "Capabilities",
    href: "/os/capabilities/",
    subGroups: buildCapabilitySubGroups(),
  },
  {
    label: "Tools",
    href: "/os/tools/",
    subGroups: buildToolSubGroups(),
  },
];

export function normalizeOsPath(pathname: string): string {
  if (pathname === "/os") {
    return "/os/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function isOsNavActive(pathname: string, href: string): boolean {
  const normalizedPath = normalizeOsPath(pathname);
  const normalizedHref = normalizeOsPath(href);

  if (normalizedHref === "/os/") {
    return normalizedPath === "/os/";
  }

  return (
    normalizedPath === normalizedHref ||
    normalizedPath.startsWith(`${normalizedHref}`)
  );
}

export function getStatusForOsPath(pathname: string): OsContentStatus {
  const normalizedPath = normalizeOsPath(pathname);

  const page = osPages.find(
    (entry) => normalizeOsPath(entry.href) === normalizedPath,
  );
  if (page) {
    return resolveOsContentStatus(page.status);
  }

  const capabilityMatch = normalizedPath.match(
    /^\/os\/capabilities\/([^/]+)\/$/,
  );
  if (capabilityMatch) {
    const capability = getCapabilityBySlug(capabilityMatch[1]);
    return capability
      ? getCapabilityEffectiveStatus(capability)
      : "ready";
  }

  const toolMatch = normalizedPath.match(/^\/os\/tools\/([^/]+)\/$/);
  if (toolMatch) {
    const tool = getToolBySlug(toolMatch[1]);
    return tool ? getToolEffectiveStatus(tool) : "ready";
  }

  return "ready";
}

export function getPrevNext(pathname: string): {
  prev: OsPageLink | null;
  next: OsPageLink | null;
} {
  const normalizedPath = normalizeOsPath(pathname);
  const index = osPageSequence.findIndex(
    (page) => normalizeOsPath(page.href) === normalizedPath,
  );

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? osPageSequence[index - 1] : null,
    next: index < osPageSequence.length - 1 ? osPageSequence[index + 1] : null,
  };
}

export function getCapabilityGroupTitle(groupId: string | undefined): string {
  if (!groupId) {
    return "";
  }

  return capabilityGroups.find((group) => group.id === groupId)?.title ?? "";
}
