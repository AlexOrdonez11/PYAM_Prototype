import { Link } from 'react-router-dom'
import { providers } from '../data'

function ProvidersPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">Providers</p>
          <h1>Meet the pediatric care team families get to know by name.</h1>
          <p>
            Get to know our pediatricians and nurse practitioners, their experience,
            specialties, and office availability.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid provider-listing-grid reveal-on-scroll">
          {providers.map((provider) => (
            <article className="listing-card provider-card" key={provider.slug}>
              <img src={provider.image} alt={provider.name} loading="lazy" decoding="async" />
              <div className="listing-card-body">
                <p className="card-kicker">
                  {provider.role}
                  {provider.credentials ? ` | ${provider.credentials}` : ''}
                </p>
                <h2>{provider.name}</h2>
                <p>{provider.summary}</p>
                {provider.officeLocations?.length ? (
                  <div className="chip-row">
                    {provider.officeLocations.map((office) => (
                      <span key={office} className="info-chip">
                        {office}
                      </span>
                    ))}
                  </div>
                ) : null}
                <Link to={`/providers/${provider.slug}`} className="button button-primary">
                  View profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProvidersPage
