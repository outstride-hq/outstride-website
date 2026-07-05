import type { Metadata } from "next";
import OSForceFormFlow from "@/components/os/OSForceFormFlow";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Force, Form, Flow - Outstride OS",
  description:
    "A lens for moving any part of the company from founder force to structure to flow.",
  path: "/os/force-form-flow/",
});

export default function ForceFormFlowPage() {
  return <OSForceFormFlow />;
}
