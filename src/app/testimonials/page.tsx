import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsList from "@/components/TestimonialsList";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { buildReviewJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Testimonials",
  description:
    "What founders say about working with Ben — founder coaching testimonials and success stories.",
  path: "/testimonials/",
});

export default function TestimonialsPage() {
  return (
    <div id="main-wrapper">
      <JsonLd data={buildReviewJsonLd()} />
      <Header />
      <main id="content" role="main">
        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center mb-5">
                <h1 className="text-10 fw-600 mb-4 wow fadeInUp">
                  Testimonials
                </h1>
                <p className="text-5 wow fadeInUp" data-wow-delay="0.2s">
                  Real testimonials from founders and investors I've worked with
                </p>
              </div>
            </div>
            <div className="row">
              <TestimonialsList />
            </div>

            {/* CTA */}
            <div className="row mt-5">
              <div className="col-lg-8 mx-auto text-center">
                <h3 className="text-6 fw-600 mb-4">Ready to work together?</h3>
                <p className="text-5 mb-4">
                  Let's discuss how I can help you grow your startup.
                </p>
                <a href="/#contact" className="btn btn-primary rounded-0">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
