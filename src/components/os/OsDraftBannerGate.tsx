"use client";

import { usePathname } from "next/navigation";
import { getStatusForOsPath } from "@/lib/os-nav";
import OsDraftBanner from "./OsDraftBanner";

export default function OsDraftBannerGate() {
  const pathname = usePathname();

  if (getStatusForOsPath(pathname) !== "draft") {
    return null;
  }

  return <OsDraftBanner />;
}
