import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolDetail from "@/components/os/ToolDetail";
import {
  getToolBySlug,
  getToolEffectiveStatus,
  tools,
} from "@/lib/os";
import { buildPageMetadata } from "@/lib/seo";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.id }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return { title: "Tool not found - Outstride OS" };
  }

  const isDraft = getToolEffectiveStatus(tool) === "draft";

  return buildPageMetadata({
    title: `${tool.title} - Outstride OS`,
    description: tool.description,
    path: `/os/tools/${tool.id}/`,
    index: !isDraft,
  });
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return <ToolDetail tool={tool} />;
}
