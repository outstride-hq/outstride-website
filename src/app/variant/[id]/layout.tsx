import { notFound } from "next/navigation";
import { getVariantById, variants } from "@/lib/variants";

type VariantLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return variants.map((variant) => ({ id: variant.id }));
}

export default async function VariantLayout({
  children,
  params,
}: VariantLayoutProps) {
  const { id } = await params;
  const variant = getVariantById(id);

  if (!variant) {
    notFound();
  }

  return (
    <>
      {variant.fontLinks.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <link rel="stylesheet" href={`/css/variants/variant-${id}.css`} />
      {children}
    </>
  );
}
