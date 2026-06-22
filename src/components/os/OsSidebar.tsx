"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isOsNavActive, osNavGroups } from "@/lib/os-nav";
import OsSearch from "./OsSearch";

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
                    className={`os-sidebar-link d-block text-decoration-none small py-1 ${
                      isOsNavActive(pathname, item.href)
                        ? "text-primary fw-600"
                        : "text-muted"
                    }`}
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
                          className={`os-sidebar-link d-block text-decoration-none small py-1 ${
                            isOsNavActive(pathname, item.href)
                              ? "text-primary fw-600"
                              : "text-muted"
                          }`}
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
