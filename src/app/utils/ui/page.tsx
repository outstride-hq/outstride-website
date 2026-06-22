import type { CSSProperties } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { uiPaletteGroups, uiStickies } from "@/lib/ui";

export const metadata = {
  title: "UI Library - Outstride",
  robots: { index: false, follow: false },
};

function colorStyle(value: string): CSSProperties {
  return { backgroundColor: value };
}

export default function UiLibraryPage() {
  const coralScale = uiPaletteGroups[0];
  const pastelScale = uiPaletteGroups[1];
  const surfaceScale = uiPaletteGroups[2];

  return (
    <div id="main-wrapper">
      <Header />
      <main id="content" role="main">
        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <p className="ui-kicker mb-3">Outstride UI Library</p>
                <h1 className="text-12 fw-700 mb-4">
                  Coral-led, warm, modern and practical.
                </h1>
                <p className="text-5 text-muted mb-4">
                  This page replaces the variant sandbox as the shared reference
                  for colors, surfaces, buttons, cards and diagram palettes.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="#palette" className="btn btn-primary">
                    View palette
                  </a>
                  <a href="#components" className="btn btn-dark">
                    View components
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ui-surface-elevated p-4">
                  <p className="ui-kicker mb-3">Principles</p>
                  <ul className="text-muted mb-0">
                    <li>Coral is the brand anchor.</li>
                    <li>Cards are white with warm borders.</li>
                    <li>Pastels carry diagrams and tools.</li>
                    <li>Rounded shapes keep the coaching feel human.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="components" className="section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <p className="ui-kicker mb-2">Components</p>
                <h2 className="text-10 fw-700 mb-3">Default UI treatment</h2>
                <p className="text-5 text-muted mb-0">
                  Use the existing Bootstrap markup, then lean on these global
                  styles for consistency.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="featured-box p-4 h-100">
                  <span className="badge bg-light text-dark border mb-4">
                    White with border
                  </span>
                  <h3 className="text-6 fw-700 mb-3">Featured box</h3>
                  <p className="text-muted mb-4">
                    The default card style for capabilities, tools, examples and
                    grouped content.
                  </p>
                  <a href="#palette" className="text-decoration-none fw-700">
                    Explore colors
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="ui-surface p-4 h-100">
                  <p className="ui-kicker mb-3">Buttons</p>
                  <div className="d-flex flex-column align-items-start gap-3">
                    <a href="#components" className="btn btn-primary">
                      Primary action
                    </a>
                    <a href="#components" className="btn btn-dark">
                      Dark action
                    </a>
                    <a href="#components" className="fw-700">
                      Text action
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="ui-surface-elevated p-4 h-100">
                  <p className="ui-kicker mb-3">Surface</p>
                  <h3 className="text-6 fw-700 mb-3">Elevated panel</h3>
                  <p className="text-muted mb-0">
                    Use sparingly for important summaries, samples and design
                    system callouts.
                  </p>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="os-tool-callout p-4">
                  <p className="ui-kicker mb-3">Tool callout</p>
                  <p className="mb-0">
                    Use <code className="small">os-tool-callout</code> for
                    short notes on tool detail pages — a soft peach surface
                    with rounded corners, not a red alert stripe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="palette" className="section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <p className="ui-kicker mb-2">Palette</p>
                <h2 className="text-10 fw-700 mb-3">
                  Coral core plus flexible pastels
                </h2>
                <p className="text-5 text-muted mb-0">
                  The coral scale handles brand expression. The pastel set gives
                  us enough range for tool screenshots, diagrams and sticky-note
                  canvases without leaving the overall style.
                </p>
              </div>
            </div>

            {[coralScale, pastelScale, surfaceScale].map((group) => (
              <div key={group.name} className="mb-5">
                <div className="row align-items-end mb-3">
                  <div className="col-lg-8">
                    <h3 className="text-7 fw-700 mb-2">{group.name}</h3>
                    <p className="text-muted mb-0">{group.description}</p>
                  </div>
                </div>
                <div className="row g-3">
                  {group.colors.map((color) => (
                    <div key={color.token} className="col-6 col-md-4 col-lg-3">
                      <div className="ui-surface p-3 h-100">
                        <div
                          className="ui-swatch mb-3"
                          style={colorStyle(color.value)}
                        />
                        <h4 className="text-5 fw-700 mb-1">{color.name}</h4>
                        <p className="small text-primary fw-700 mb-1">
                          {color.token}
                        </p>
                        <p className="small text-muted mb-1">{color.value}</p>
                        <p className="small text-muted mb-0">{color.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <p className="ui-kicker mb-2">Tool Screenshots</p>
                <h2 className="text-10 fw-700 mb-3">
                  Sticky-note palette sample
                </h2>
                <p className="text-5 text-muted mb-0">
                  This is the direction for tools like the strategy grid:
                  off-white canvas, colored notes, soft shadows and restrained
                  labels.
                </p>
              </div>
            </div>

            <div className="ui-surface-elevated p-4 p-lg-5">
              <div className="row g-4 justify-content-center">
                {uiStickies.map((sticky) => (
                  <div key={sticky.label} className="col-6 col-md-4 col-lg-3">
                    <div className="text-center">
                      <p className="small fw-700 mb-2">{sticky.label}</p>
                      <div
                        className="mx-auto"
                        style={{
                          ...colorStyle(sticky.value),
                          aspectRatio: "1.25",
                          borderRadius: "4px",
                          boxShadow: "0 10px 24px rgba(21, 31, 39, 0.13)",
                          maxWidth: "150px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
