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
            This listing page gives you a reusable pattern for the rest of the site:
            cards for discovery now, then detail pages for richer provider bios,
            specialties, and scheduling next.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {providers.map((provider) => (
            <article className="listing-card provider-card" key={provider.slug}>
              <img src={provider.image} alt={provider.name} />
              <div className="listing-card-body">
                <p className="card-kicker">{provider.role}</p>
                <h2>{provider.name}</h2>
                <p>{provider.summary}</p>
                <div className="chip-row">
                  {provider.specialties.map((specialty) => (
                    <span key={specialty} className="info-chip">
                      {specialty}
                    </span>
                  ))}
                </div>
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
