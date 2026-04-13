import { Link } from 'react-router-dom'
import { services } from '../data'

function ServicesPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">Services</p>
          <h1>Pediatric services organized so families can find the right care quickly.</h1>
          <p>
            This listing template is ready for your full services catalog. We can keep
            adding cards here, then deepen each one with a detail page only when it
            needs more explanation, forms, or FAQs.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {services.map((service) => (
            <article className="listing-card" key={service.slug}>
              <img src={service.image} alt={service.title} />
              <div className="listing-card-body">
                <p className="card-kicker">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="chip-row">
                  {service.bullets.map((bullet) => (
                    <span key={bullet} className="info-chip">
                      {bullet}
                    </span>
                  ))}
                </div>
                <Link to={`/services/${service.slug}`} className="button button-primary">
                  View service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
