"use client";

import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + count) % count);
    },
    [count]
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (count <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [count]);

  const testimonial = testimonials[activeIndex];

  return (
    <section id="testimonial" className="section">
      <div className="container">
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeIn">
          What the founders say
        </h2>
        <div className="row">
          <div className="col-lg-9 mx-auto wow fadeInUp">
            <div className="testimonial-carousel position-relative">
              <div
                className="testimonial-slide text-center"
                key={testimonial.id}
                aria-live="polite"
              >
                <span className="testimonial-quote-mark text-primary">
                  <i className="fas fa-quote-left"></i>
                </span>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <img
                  className="testimonial-avatar img-fluid d-inline-block rounded-circle shadow"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <strong className="d-block text-3 fw-500">
                  {testimonial.name} - {testimonial.role}
                </strong>
                <span>{testimonial.company}</span>
              </div>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    className="testimonial-nav testimonial-nav-prev"
                    onClick={goPrev}
                    aria-label="Previous testimonial"
                  >
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                  </button>
                  <button
                    type="button"
                    className="testimonial-nav testimonial-nav-next"
                    onClick={goNext}
                    aria-label="Next testimonial"
                  >
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                  </button>
                  <div className="testimonial-dots" role="tablist">
                    {testimonials.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        className={`testimonial-dot${
                          index === activeIndex ? " active" : ""
                        }`}
                        onClick={() => goTo(index)}
                        aria-label={`Show testimonial ${index + 1}`}
                        aria-selected={index === activeIndex}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
