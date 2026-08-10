import { Link, useParams } from 'react-router-dom'
import { services } from '../data'

function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = services.find((entry) => entry.slug === serviceSlug)

  if (!service) {
    return (
      <main className="interior-page shell">
        <section className="empty-state reveal-on-scroll">
          <h1>Service not found.</h1>
          <Link to="/services" className="button button-primary">
            Back to services
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="interior-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media">
          <img src={service.image} alt={service.title} decoding="async" />
        </div>
        <div className="detail-hero-copy">
          <div className="breadcrumbs">
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="detail-subtitle">{service.bestFor}</p>
          <p>{service.detail}</p>
          <div className="chip-row">
            {service.bullets.map((bullet) => (
              <span key={bullet} className="info-chip">
                {bullet}
              </span>
            ))}
          </div>
          <a href="tel:6512566714" className="button button-primary">
            Schedule
          </a>
        </div>
      </section>
    </main>
  )
}

export default ServiceDetailPage
