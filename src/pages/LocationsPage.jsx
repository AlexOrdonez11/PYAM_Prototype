import { Link } from 'react-router-dom'
import { locations } from '../data'

function LocationsPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">Locations & Hours</p>
          <h1>Choose the office that works best for your family.</h1>
          <p>
            Find hours, contact information, and pediatric services available at our
            Maplewood and Eagan offices.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {locations.map((location) => (
            <article className="listing-card location-card-expanded" key={location.slug}>
              <img src={location.image} alt={location.title} loading="lazy" decoding="async" />
              <div className="listing-card-body">
                <p className="card-kicker">Office Location</p>
                {location.featuredLabel ? (
                  <p className="card-kicker">{location.featuredLabel}</p>
                ) : null}
                <h2>{location.title}</h2>
                <p>{location.detail}</p>
                <div className="stacked-info">
                  <span>{location.address}</span>
                  {location.hours.map((hour) => (
                    <span key={hour}>{hour}</span>
                  ))}
                </div>
                <Link to={`/locations/${location.slug}`} className="button button-primary">
                  View office details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default LocationsPage
