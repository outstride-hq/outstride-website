import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CapabilityDetail from "@/components/os/CapabilityDetail";
import {
  capabilities,
  getCapabilityBySlug,
  getCapabilityEffectiveStatus,
} from "@/lib/os";
import { buildPageMetadata } from "@/lib/seo";

type CapabilityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return capabilities.map((capability) => ({ slug: capability.id }));
}

export async function generateMetadata({
  params,
}: CapabilityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    return { title: "Capability not found - Outstride OS" };
  }

  const isDraft = getCapabilityEffectiveStatus(capability) === "draft";

  return buildPageMetadata({
    title: `${capability.title} - Outstride OS`,
    description: capability.bullets[0] ?? capability.summary,
    path: `/os/capabilities/${capability.id}/`,
    index: !isDraft,
  });
}

export default async function CapabilityPage({ params }: CapabilityPageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  return <CapabilityDetail capability={capability} />;
}
