import { osQuote } from "@/lib/os";

export default function OSHero() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="text-10 fw-600 text-white mb-4 wow fadeInUp">
              Outstride OS
            </h1>
            <p
              className="text-5 text-white mb-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              A practical operating system for founders scaling themselves,
              their teams and their companies.
            </p>
            <blockquote
              className="text-5 text-white mb-0 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              {osQuote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
