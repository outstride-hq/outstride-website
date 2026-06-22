import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <h2 className="text-10 fw-600 text-center mb-4 wow fadeInUp">
          Where I support
        </h2>

        <div className="row g-4 mt-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-sm-6 col-lg-4 d-flex wow fadeInUp"
            >
              <div className="featured-box service-card text-center p-4 h-100 w-100">
                <div className="featured-box-icon service-card-icon text-13">
                  {service.icon}
                </div>
                <h3 className="text-6 fw-600 mb-3">{service.title}</h3>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


