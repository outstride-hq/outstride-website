import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Referrals",
  description:
    "Refer a founder to Ben's coaching program and help them grow their startup.",
  path: "/referrals/",
});

export default function ReferralsPage() {
  return (
    <div id="main-wrapper">
      <Header />
      <main id="content" role="main">
        {/* Page Header */}
        <section className="section bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="text-10 fw-600 text-white mb-4 wow fadeInUp">
                  Refer a Founder
                </h1>
                <p
                  className="text-5 text-white wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Know someone who could benefit from founder coaching?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Content */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                {/* Who I work with */}
                <div className="mb-5">
                  <h2 className="text-8 fw-600 mb-4">Who I work with</h2>
                  <p className="text-5 mb-4">
                    I work with ambitious, exciting founders who give me energy.
                    I support funded startups from pre-seed all the way to
                    Series C.
                  </p>

                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="featured-box text-center p-4 h-100">
                        <div className="featured-box-icon text-primary text-8 mb-3">
                          🚀
                        </div>
                        <h4 className="text-5 fw-600 mb-3">Early Stage</h4>
                        <p className="text-muted mb-0">
                          Pre-seed to Series A founders looking to scale their
                          team and operations.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="featured-box text-center p-4 h-100">
                        <div className="featured-box-icon text-primary text-8 mb-3">
                          📈
                        </div>
                        <h4 className="text-5 fw-600 mb-3">Growth Stage</h4>
                        <p className="text-muted mb-0">
                          Series A to C founders navigating complex
                          organizational challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What I help with */}
                <div className="mb-5">
                  <h2 className="text-8 fw-600 mb-4">What I help with</h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <span className="text-primary me-3">⛰</span>
                        <div>
                          <h5 className="fw-600 mb-1">Vision & Strategy</h5>
                          <p className="text-muted mb-0 small">
                            Defining and aligning on core identity and purpose
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <span className="text-primary me-3">🏆</span>
                        <div>
                          <h5 className="fw-600 mb-1">Culture & Values</h5>
                          <p className="text-muted mb-0 small">
                            Building the right company culture from the start
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <span className="text-primary me-3">💪</span>
                        <div>
                          <h5 className="fw-600 mb-1">Leadership Growth</h5>
                          <p className="text-muted mb-0 small">
                            Personal development plans for founders
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <span className="text-primary me-3">🙌</span>
                        <div>
                          <h5 className="fw-600 mb-1">Co-founder Relations</h5>
                          <p className="text-muted mb-0 small">
                            Building strong co-founder relationships
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <span className="text-primary me-3">🤖</span>
                        <div>
                          <h5 className="fw-600 mb-1">Product & Tech</h5>
                          <p className="text-muted mb-0 small">
                            Design, build and execute strategies
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <span className="text-primary me-3">💸</span>
                        <div>
                          <h5 className="fw-600 mb-1">Fundraising</h5>
                          <p className="text-muted mb-0 small">
                            Pitch decks and investor introductions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How to refer */}
                <div className="mb-5">
                  <h2 className="text-8 fw-600 mb-4">How to refer someone</h2>
                  <p className="text-5 mb-4">
                    The best way to refer someone is to simply introduce us via
                    email. Here's what to include:
                  </p>

                  <div className="bg-light p-4 rounded mb-4">
                    <h5 className="fw-600 mb-3">Email template:</h5>
                    <div className="text-muted small">
                      <p>
                        <strong>To:</strong> ben [at] outstride.co
                      </p>
                      <p>
                        <strong>Subject:</strong> Referral: [Founder Name] -
                        [Company Name]
                      </p>
                      <p>
                        <strong>Body:</strong>
                      </p>
                      <p>Hi Ben,</p>
                      <p>
                        I'd like to introduce you to [Founder Name], the
                        [CEO/Co-founder] of [Company Name].
                      </p>
                      <p>
                        [Brief description of their company and what they're
                        working on]
                      </p>
                      <p>[Why you think they'd benefit from coaching]</p>
                      <p>
                        I think they'd be a great fit for your coaching program.
                      </p>
                      <p>
                        Best,
                        <br />
                        [Your name]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="text-center">
                  <h3 className="text-6 fw-600 mb-4">
                    Ready to make a referral?
                  </h3>
                  <p className="text-5 mb-4">
                    Send me an email at
                    <strong> ben [at] outstride.co</strong> or use the contact
                    form below.
                  </p>
                  <a href="/#contact" className="btn btn-primary rounded-0">
                    Contact Ben
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
