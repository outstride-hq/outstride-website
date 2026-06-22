import type { CardLink } from "@/lib/diagram/schema";

export function getCardHref(link: CardLink): string {
  switch (link.kind) {
    case "capability":
      return `/os/capabilities/${link.id}/`;
    case "tool":
      return `/os/tools/${link.id}/`;
    default: {
      const _exhaustive: never = link.kind;
      return _exhaustive;
    }
  }
}
