"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveOsContentStatus, type OsContentStatus } from "@/lib/os";
import { isOsNavActive, osNavGroups } from "@/lib/os-nav";
import OsSearch from "./OsSearch";

function sidebarLinkClass(
  pathname: string,
  href: string,
  status?: OsContentStatus,
): string {
  const active = isOsNavActive(pathname, href);
  const draft = resolveOsContentStatus(status) === "draft";

  return [
    "os-sidebar-link",
    "d-block",
    "text-decoration-none",
    "small",
    "py-1",
    active ? "text-primary fw-600" : "text-muted",
    draft ? "os-sidebar-link--draft" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function OsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="os-sidebar" aria-label="Outstride OS">
      <OsSearch />

      {osNavGroups.map((group) => (
        <div key={group.label} className="os-sidebar-group mb-4">
          {group.href ? (
            <Link
              href={group.href}
              className={`os-sidebar-heading d-block text-uppercase fw-600 small mb-2 text-decoration-none ${
                isOsNavActive(pathname, group.href) ? "text-primary" : "text-dark"
              }`}
            >
              {group.label}
            </Link>
          ) : (
            <p className="os-sidebar-heading text-uppercase fw-600 small mb-2 text-muted">
              {group.label}
            </p>
          )}

          {group.items ? (
            <ul className="list-unstyled mb-0">
              {group.items.map((item) => (
                <li key={item.href} className="mb-1">
                  <Link
                    href={item.href}
                    className={sidebarLinkClass(pathname, item.href, item.status)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

          {group.subGroups ? (
            <div>
              {group.subGroups.map((subGroup) => (
                <div key={subGroup.label} className="mb-3">
                  <p className="os-sidebar-subheading small fw-600 mb-1 text-dark">
                    {subGroup.label}
                  </p>
                  <ul className="list-unstyled mb-0">
                    {subGroup.items.map((item) => (
                      <li key={item.href} className="mb-1">
                        <Link
                          href={item.href}
                          className={sidebarLinkClass(
                            pathname,
                            item.href,
                            item.status,
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}
