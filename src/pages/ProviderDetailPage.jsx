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

      <section className="section shell section-soft">
        <div className="detail-sections reveal-on-scroll">
          <article className="detail-section-card">
            <p className="card-kicker">Care Approach</p>
            <h2>Partnering with children and families.</h2>
            <p>{provider.philosophy}</p>
            <ul className="stacked-list">
              {provider.careFocus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="detail-section-card">
            <p className="card-kicker">Education &amp; Credentials</p>
            <h2>Training and professional background.</h2>
            <ul className="stacked-list">
              {provider.education.map((item) => <li key={item}>{item}</li>)}
              {provider.boardCertification ? <li>{provider.boardCertification}</li> : null}
            </ul>
          </article>

          {provider.officeLocations?.length ? (
            <article className="detail-section-card">
              <p className="card-kicker">Office Locations</p>
              <h2>Find this provider at PYAM.</h2>
              <div className="related-link-row">
                {provider.officeLocations.map((office) => (
                  <Link className="button button-secondary" to={`/locations/${office.toLowerCase()}`} key={office}>{office}</Link>
                ))}
              </div>
            </article>
          ) : null}

          <article className="detail-section-card">
            <p className="card-kicker">Beyond the Clinic</p>
            <h2>Languages and personal interests.</h2>
            {provider.languages?.length ? (
              <p><strong>Languages:</strong> {provider.languages.join(', ')}</p>
            ) : null}
            <ul className="stacked-list">
              {provider.personalInterests.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          {provider.faq.length ? (
            <article className="detail-section-card detail-section-wide">
              <p className="card-kicker">Common Questions</p>
              <h2>Get to know this provider.</h2>
              <div className="faq-list">
                {provider.faq.map((item) => (
                  <div className="faq-item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default ProviderDetailPage
