import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found — Outstride",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div id="main-wrapper">
      <Header />
      <main id="content" role="main">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center py-5">
                <p className="ui-kicker mb-3">404</p>
                <h1 className="text-10 fw-600 mb-4">Page not found</h1>
                <p className="text-5 text-muted mb-5">
                  This page doesn&rsquo;t exist — or it&rsquo;s been folded into
                  something better.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a href="/" className="btn btn-primary rounded-pill px-4">
                    Go home
                  </a>
                  <a
                    href="/os/"
                    className="btn btn-outline-primary rounded-pill px-4"
                  >
                    Explore the OS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
