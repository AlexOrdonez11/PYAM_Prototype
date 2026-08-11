import { Link, useParams } from 'react-router-dom'
import { locations } from '../data'

function LocationDetailPage() {
  const { locationSlug } = useParams()
  const location = locations.find((entry) => entry.slug === locationSlug)

  if (!location) {
    return (
      <main className="interior-page shell">
        <section className="empty-state reveal-on-scroll">
          <h1>Location not found.</h1>
          <Link to="/locations" className="button button-primary">
            Back to locations
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="interior-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media">
          <img src={location.image} alt={location.title} decoding="async" />
        </div>
        <div className="detail-hero-copy">
          <div className="breadcrumbs">
            <Link to="/locations">Locations</Link>
            <span>/</span>
            <span>{location.city}</span>
          </div>
          <p className="eyebrow">{location.featuredLabel ?? 'Office Details'}</p>
          <h1>{location.title}</h1>
          <p>{location.detail}</p>
          <div className="stacked-info">
            <span>{location.address}</span>
            <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}>{location.phone}</a>
            {location.hours.map((hour) => (
              <span key={hour}>{hour}</span>
            ))}
          </div>
          <div className="chip-row">
            {location.highlights.map((highlight) => (
              <span key={highlight} className="info-chip">
                {highlight}
              </span>
            ))}
          </div>
          <div className="page-action-row">
            <a
              className="button button-primary"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
            <Link className="button button-secondary" to="/schedule">Schedule a visit</Link>
          </div>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="detail-sections reveal-on-scroll">
          <article className="detail-section-card">
            <p className="card-kicker">Available Visit Types</p>
            <h2>Care available at this office.</h2>
            <ul className="stacked-list">
              {location.visitTypes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="detail-section-card">
            <p className="card-kicker">Before You Arrive</p>
            <h2>Make check-in easier.</h2>
            <ul className="stacked-list">
              {location.arrivalTips.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="detail-section-card">
            <p className="card-kicker">Scheduling</p>
            <h2>Plan the right appointment.</h2>
            <p>{location.schedulingNote}</p>
            <a className="section-link" href="tel:6512566714">Call the appointment line</a>
          </article>

          <article className="detail-section-card">
            <p className="card-kicker">Getting Here</p>
            <h2>Parking and local access.</h2>
            <p>{location.parking}</p>
            <p>{location.transit}</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default LocationDetailPage
