"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPrevNext } from "@/lib/os-nav";

export default function OsPrevNext() {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);

  if (!prev && !next) {
    return null;
  }

  return (
    <nav
      className="os-prev-next d-flex flex-sm-row justify-content-sm-between align-items-sm-center border-top pt-4 mt-5"
      aria-label="Page navigation"
    >
      <div>
        {prev ? (
          <Link href={prev.href} className="text-decoration-none">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
      </div>
      <div className="text-end">
        {next ? (
          <Link href={next.href} className="text-decoration-none">
            {next.label} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
