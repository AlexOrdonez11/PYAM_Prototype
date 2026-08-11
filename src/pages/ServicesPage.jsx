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
            Explore preventive, acute, safety, immunization, and newborn care for
            infants, children, teens, and young adults.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {services.map((service) => (
            <article className="listing-card" key={service.slug}>
              <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
              <div className="listing-card-body">
                <p className="card-kicker">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link to={service.to ?? `/services/${service.slug}`} className="button button-primary">
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
