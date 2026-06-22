import {
  capabilityGroups,
  capabilities,
  getGroupsForLayer,
  layers,
  tools,
} from "@/lib/os";

export type OsNavItem = {
  label: string;
  href: string;
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
};

export const osPageSequence: OsPageLink[] = [
  { href: "/os/", label: "Home" },
  { href: "/os/process/", label: "The Four D's" },
  { href: "/os/force-form-flow/", label: "Force, Form, Flow" },
  { href: "/os/capabilities/", label: "Capabilities" },
  { href: "/os/tools/", label: "Tools" },
];

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
        })),
      };
    });
  });
}

export const osNavGroups: OsNavGroup[] = [
  {
    label: "Overview",
    items: [
      { label: "Home", href: "/os/" },
      { label: "The Four D's", href: "/os/process/" },
      { label: "Force, Form, Flow", href: "/os/force-form-flow/" },
    ],
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
