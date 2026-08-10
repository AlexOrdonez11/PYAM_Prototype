import { Link, useParams } from 'react-router-dom'
import { providers } from '../data'

function ProviderDetailPage() {
  const { providerSlug } = useParams()
  const provider = providers.find((entry) => entry.slug === providerSlug)

  if (!provider) {
    return (
      <main className="interior-page shell">
        <section className="empty-state reveal-on-scroll">
          <h1>Provider not found.</h1>
          <Link to="/providers" className="button button-primary">
            Back to providers
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="interior-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media">
          <img src={provider.image} alt={provider.name} decoding="async" />
        </div>
        <div className="detail-hero-copy">
          <div className="breadcrumbs">
            <Link to="/providers">Providers</Link>
            <span>/</span>
            <span>{provider.name}</span>
          </div>
          <p className="eyebrow">{provider.role}</p>
          <h1>{provider.name}</h1>
          {provider.credentials ? (
            <p className="detail-subtitle">{provider.credentials}</p>
          ) : null}
          <p>{provider.bio}</p>
          <div className="chip-row">
            {provider.specialties.map((specialty) => (
              <span key={specialty} className="info-chip">
                {specialty}
              </span>
            ))}
          </div>
          <a href="tel:6512566714" className="button button-primary">
            Call to schedule
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProviderDetailPage
