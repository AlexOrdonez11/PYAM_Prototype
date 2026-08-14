import { Link } from 'react-router-dom'
import { locations, schedulingUrl } from '../data'

const departments = [
  {
    title: 'Appointments',
    description: 'Schedule routine, same-day, and follow-up pediatric visits.',
    phone: '(651) 256-6714',
    phoneHref: 'tel:6512566714',
  },
  {
    title: 'Business Office',
    description: 'Get help with billing questions and account information.',
    phone: '(651) 227-7806, option 2',
    phoneHref: 'tel:6512277806',
    fax: '(651) 256-6707',
    email: 'Billing@pyam.com',
  },
  {
    title: 'Medical Records',
    description: 'Request records or ask about patient documentation.',
    phone: '(651) 256-6717',
    phoneHref: 'tel:6512566717',
    fax: '(888) 891-5871',
    email: 'medicalrecords@pyam.com',
  },
  {
    title: 'Insurance Referrals',
    description: 'Contact the referral team about insurance authorization needs.',
    phone: '(651) 227-7806, option 2',
    phoneHref: 'tel:6512277806',
    email: 'Referrals@pyam.com',
  },
  {
    title: 'Prescription Refills',
    description: 'Use the dedicated voicemail line to request prescription refills.',
    phone: '(651) 256-6796',
    phoneHref: 'tel:6512566796',
  },
]

function ContactPage() {
  return (
    <main className="interior-page contact-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media contact-hero-media">
          <img
            src="/images/family-photo-optimized.jpg"
            alt="Family smiling together"
            decoding="async"
          />
        </div>
        <div className="detail-hero-copy">
          <p className="eyebrow">Contact PYAM</p>
          <h1>We&apos;re here to help your family find the right next step.</h1>
          <p className="detail-subtitle">
            Reach appointments, billing, medical records, referrals, or the refill line directly.
          </p>
          <p>
            For appointment scheduling, call our central appointment line or choose
            the visit type you need online.
          </p>
          <div className="page-action-row">
            <a className="button button-primary" href="tel:6512566714">
              Call (651) 256-6714
            </a>
            <a className="button button-secondary" href={schedulingUrl}>
              Schedule online
            </a>
          </div>
        </div>
      </section>

      <section className="section shell section-soft contact-directory-section">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Direct Dial Directory</p>
          <h2>Contact the team that can help.</h2>
          <p>Choose a department below to call or email without going through a general inbox.</p>
        </div>

        <div className="detail-sections contact-directory reveal-on-scroll">
          {departments.map((department, index) => (
            <article
              className={`detail-section-card contact-card ${index === 0 ? 'contact-card-featured' : ''}`}
              key={department.title}
            >
              <div className="contact-card-heading">
                <span className="contact-card-icon" aria-hidden="true">{index + 1}</span>
                <div>
                  <p className="card-kicker">PYAM Department</p>
                  <h2>{department.title}</h2>
                </div>
              </div>
              <p>{department.description}</p>
              <div className="contact-details">
                <a href={department.phoneHref}>{department.phone}</a>
                {department.fax ? <span>Fax: {department.fax}</span> : null}
                {department.email ? (
                  <a href={`mailto:${department.email}`}>{department.email}</a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell section-soft-alt">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Our Offices</p>
          <h2>Visit PYAM in Maplewood or Eagan.</h2>
          <p>Review office hours, get directions, or open the full location details before your visit.</p>
        </div>

        <div className="location-grid reveal-on-scroll">
          {locations.map((location) => (
            <article className="location-card contact-location-card" key={location.slug}>
              <img src={location.image} alt={location.title} loading="lazy" decoding="async" />
              <div className="location-body">
                <p className="card-kicker">Office Location</p>
                <h3>{location.title}</h3>
                <p>{location.address}</p>
                {location.hours.map((hour) => <p className="location-hours" key={hour}>{hour}</p>)}
                <div className="page-action-row">
                  <Link className="section-link" to={`/locations/${location.slug}`}>Office details</Link>
                  <a
                    className="section-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ContactPage
