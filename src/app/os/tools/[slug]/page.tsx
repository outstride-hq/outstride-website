import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolDetail from "@/components/os/ToolDetail";
import { getToolBySlug, tools } from "@/lib/os";

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

  return {
    title: `${tool.title} - Outstride OS`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return <ToolDetail tool={tool} />;
}
