import { Link, useParams } from 'react-router-dom'
import { services } from '../data'

const relatedRoutes = {
  'Well Child Visits': '/services/well-child-visits',
  Immunizations: '/services/immunizations',
  'Provider Profiles': '/providers',
  Providers: '/providers',
  Locations: '/locations',
  Telemedicine: '/telemedicine',
  Contact: '/contact',
  'Patient Portal': '/patient-portal',
}

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

  const relatedLinks = service.relatedLinks
    .map((label) => ({ label, to: relatedRoutes[label] }))
    .filter((item) => item.to)

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

      <section className="section shell section-soft">
        <div className="detail-sections reveal-on-scroll">
          <article className="detail-section-card">
            <p className="card-kicker">What Care Includes</p>
            <h2>Support tailored to this visit.</h2>
            <ul className="stacked-list">
              {service.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="detail-section-card">
            <p className="card-kicker">Plan Your Visit</p>
            <h2>We can help you choose the right next step.</h2>
            <p>
              Call the Central Appointment Line if you are unsure which visit type to schedule or whether your child should be seen in person.
            </p>
            <div className="page-action-row">
              <a className="button button-secondary" href="tel:6512566714">Call (651) 256-6714</a>
              <Link className="section-link" to="/schedule">View scheduling options</Link>
            </div>
          </article>

          {relatedLinks.length ? (
            <article className="detail-section-card detail-section-wide">
              <p className="card-kicker">Related Resources</p>
              <h2>Continue exploring PYAM care.</h2>
              <div className="related-link-row">
                {relatedLinks.map((item) => (
                  <Link className="button button-secondary" to={item.to} key={item.label}>{item.label}</Link>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default ServiceDetailPage
