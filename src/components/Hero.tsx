import TypedText from "@/components/TypedText";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-primary d-flex fullscreen-with-header position-relative"
    >
      <div className="container my-auto py-5 py-lg-0">
        <div className="row py-4">
          <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0">
            <h1 className="text-12 fw-300 mb-0 text-uppercase">I coach</h1>
            <h2 className="text-21 fw-600 text-uppercase mb-0 ms-n1">
              <TypedText strings={["FOUNDERS"]} loop={false} backDelay={5000} />
            </h2>
            <a href="#contact" className="btn btn-dark rounded-0 mt-3">
              Get in touch
            </a>
            <a
              href="https://blog.outstride.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-dark mt-3"
            >
              See my writing
            </a>
          </div>
          <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
            <div className="bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
              <img
                className="img-fluid rounded-pill d-block"
                src="/images/web-developer.jpg"
                title="I'm Ben"
                alt="Ben"
              />
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down-arrow text-dark">
        <span className="animated">
          <i className="fas fa-arrow-down"></i>
        </span>
      </a>
    </section>
  );
}
