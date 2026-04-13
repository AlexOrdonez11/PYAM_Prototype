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
          <img src={location.image} alt={location.title} />
        </div>
        <div className="detail-hero-copy">
          <div className="breadcrumbs">
            <Link to="/locations">Locations</Link>
            <span>/</span>
            <span>{location.city}</span>
          </div>
          <p className="eyebrow">Office Details</p>
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
        </div>
      </section>

      <section className="section shell detail-sections">
        <div className="detail-section-card reveal-on-scroll">
          <p className="card-kicker">Visit Types</p>
          <h2>What families commonly come here for</h2>
          <div className="chip-row">
            {location.visitTypes.map((item) => (
              <span key={item} className="info-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section-card reveal-on-scroll">
          <p className="card-kicker">Scheduling</p>
          <h2>Before you book</h2>
          <p>{location.schedulingNote}</p>
        </div>

        <div className="detail-section-card reveal-on-scroll">
          <p className="card-kicker">Arrival Tips</p>
          <h2>Helpful visit prep</h2>
          <div className="stacked-list">
            {location.arrivalTips.map((tip) => (
              <span key={tip}>{tip}</span>
            ))}
          </div>
        </div>

        <div className="detail-section-card reveal-on-scroll">
          <p className="card-kicker">Access</p>
          <h2>Getting to the office</h2>
          <div className="stacked-list">
            <span>{location.parking}</span>
            <span>{location.transit}</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LocationDetailPage
