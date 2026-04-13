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
          <img src={service.image} alt={service.title} />
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
            Ask about this service
          </a>
        </div>
      </section>

      <section className="section shell detail-sections">
        <div className="detail-section-card reveal-on-scroll">
          <p className="card-kicker">What This Includes</p>
          <h2>Typical parts of this care area</h2>
          <div className="stacked-list">
            {service.includes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="detail-section-card reveal-on-scroll">
          <p className="card-kicker">Helpful Connections</p>
          <h2>Related resources</h2>
          <div className="chip-row">
            {service.relatedLinks.map((item) => (
              <span key={item} className="info-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section-card reveal-on-scroll detail-section-wide">
          <p className="card-kicker">Common Questions</p>
          <h2>What families often want to know</h2>
          <div className="faq-list">
            {service.commonQuestions.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServiceDetailPage
