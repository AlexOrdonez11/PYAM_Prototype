import { Link } from 'react-router-dom'
import { services } from '../data'

function ServicesPage() {
  return (
    <main className="interior-page listing-landing-page">
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
                <Link to={`/services/${service.slug}`} className="button button-primary">
                  View service
                </Link>
              </div>
            </article>
          ))}
          <article className="listing-card">
            <img
              src="/images/medical-records-family-consultation.jpg"
              alt="Pediatric clinician reviewing a document with a child and parent"
              loading="lazy"
              decoding="async"
            />
            <div className="listing-card-body">
              <p className="card-kicker">Forms &amp; Requests</p>
              <h2>Medical Records</h2>
              <p>
                Download the release form and find instructions for requesting patient
                records from PYAM.
              </p>
              <Link to="/medical-records" className="button button-primary">
                View medical records
              </Link>
            </div>
          </article>
          <article className="listing-card">
            <img
              src="/images/sports-forms-youth-soccer.jpg"
              alt="Young soccer player holding a ball on the field"
              loading="lazy"
              decoding="async"
            />
            <div className="listing-card-body">
              <p className="card-kicker">Forms &amp; Downloads</p>
              <h2>School and Sports Forms</h2>
              <p>
                Find downloadable forms and activity paperwork for school sports and
                other organized activities.
              </p>
              <Link to="/sports-forms" className="button button-primary">
                View school and sports forms
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
