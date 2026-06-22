import Link from "next/link";
import { notFound } from "next/navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LayerCard from "@/components/os/LayerCard";
import ToolDetail from "@/components/os/ToolDetail";
import ToolPreview from "@/components/os/ToolPreview";
import { getToolBySlug, layers } from "@/lib/os";
import { getVariantById, variants } from "@/lib/variants";

type VariantPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return variants.map((variant) => ({ id: variant.id }));
}

export async function generateMetadata({ params }: VariantPageProps) {
  const { id } = await params;
  const variant = getVariantById(id);

  if (!variant) {
    return { title: "Variant not found" };
  }

  return {
    title: `Variant ${id}: ${variant.name} - Outstride`,
    robots: { index: false, follow: false },
  };
}

export default async function VariantPage({ params }: VariantPageProps) {
  const { id } = await params;
  const variant = getVariantById(id);

  if (!variant) {
    notFound();
  }

  const sampleTool = getToolBySlug("non-violent-communication");

  if (!sampleTool) {
    notFound();
  }

  return (
    <div id="main-wrapper" className={`variant-${id}`}>
      <div className="variant-banner">
        <div className="container py-2 d-flex flex-wrap justify-content-between align-items-center gap-2">
          <span className="variant-banner-label">
            Preview: Variant {id} — {variant.name}
          </span>
          <div className="d-flex flex-wrap gap-3">
            {variants
              .filter((item) => item.id !== id)
              .map((item) => (
                <Link key={item.id} href={`/variant/${item.id}/`}>
                  {item.id}
                </Link>
              ))}
            <Link href="/variant/">All variants</Link>
            <Link href="/">Live site</Link>
          </div>
        </div>
      </div>

      <Header />
      <main id="content" role="main">
        <Hero />
        <About />
        <Services />

        <section className="section">
          <div className="container">
            <h2 className="text-10 fw-600 text-center mb-5">Three Layers</h2>
            <div className="row g-4">
              {layers.map((layer) => (
                <div key={layer.id} className="col-md-4">
                  <LayerCard layer={layer} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="section bg-light">
          <div className="container">
            <h2 className="text-10 fw-600 text-center mb-5">Tools</h2>
            <ToolPreview />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <p className="text-primary fw-600 mb-2 text-center">
                  Tool detail sample
                </p>
                <ToolDetail tool={sampleTool} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
