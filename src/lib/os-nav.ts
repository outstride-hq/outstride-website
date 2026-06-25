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

export const osNavGroups: OsNavGroup[] = [
  {
    label: "Overview",
    items: osPages.slice(0, 3).map((page) => ({
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
    items: tools.map((tool) => ({
      label: tool.title,
      href: `/os/tools/${tool.id}/`,
      status: getToolEffectiveStatus(tool),
    })),
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
