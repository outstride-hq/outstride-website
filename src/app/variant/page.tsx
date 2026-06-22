import Link from "next/link";
import { variants } from "@/lib/variants";

export const metadata = {
  title: "Legacy UI Variants - Outstride",
  robots: { index: false, follow: false },
};

export default function VariantIndexPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-primary fw-600 mb-2">Legacy exploration</p>
            <h1 className="text-10 fw-600 mb-3">UI refresh variants</h1>
            <p className="text-5 text-muted mb-5">
              These sandboxed previews have been superseded by the UI library.
              Use that page as the source of truth for palette, typography,
              spacing and cards.
            </p>

            <p className="mb-5">
              <Link href="/utils/ui/" className="btn btn-primary">
                Open UI library
              </Link>
            </p>

            <div className="d-flex flex-column gap-3">
              {variants.map((variant) => (
                <Link
                  key={variant.id}
                  href={`/variant/${variant.id}/`}
                  className="text-decoration-none"
                >
                  <div className="featured-box p-4">
                    <div className="d-flex justify-content-between align-items-start gap-3">
                      <div>
                        <h2 className="text-6 fw-600 mb-1">
                          Variant {variant.id}: {variant.name}
                        </h2>
                        <p className="text-muted mb-2">{variant.vibe}</p>
                        <span className="badge bg-light text-dark border">
                          {variant.brand === "coral"
                            ? "Coral anchor"
                            : "New palette"}
                        </span>
                      </div>
                      <span className="text-primary fw-600 text-nowrap">
                        Preview →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-5 mb-0">
              <Link href="/" className="text-decoration-none">
                ← Back to site
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
