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
          <img src={provider.image} alt={provider.name} />
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

      <section className="section shell detail-sections">
        {provider.philosophy ? (
          <div className="detail-section-card reveal-on-scroll">
            <p className="card-kicker">Care Philosophy</p>
            <h2>How this provider supports families</h2>
            <p>{provider.philosophy}</p>
          </div>
        ) : null}

        {provider.careFocus?.length ? (
          <div className="detail-section-card reveal-on-scroll">
            <p className="card-kicker">Care Focus</p>
            <h2>Common areas of support</h2>
            <div className="stacked-list">
              {provider.careFocus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ) : null}

        {provider.education?.length ? (
          <div className="detail-section-card reveal-on-scroll">
            <p className="card-kicker">Background</p>
            <h2>Training and experience</h2>
            <div className="stacked-list">
              {provider.education.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ) : null}

        {provider.officeLocations?.length ? (
          <div className="detail-section-card reveal-on-scroll">
            <p className="card-kicker">Available At</p>
            <h2>Office locations</h2>
            <div className="chip-row">
              {provider.officeLocations.map((office) => (
                <span key={office} className="info-chip">
                  {office}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {provider.languages?.length ? (
          <div className="detail-section-card reveal-on-scroll">
            <p className="card-kicker">Languages</p>
            <h2>Communication support</h2>
            <div className="chip-row">
              {provider.languages.map((language) => (
                <span key={language} className="info-chip">
                  {language}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {provider.boardCertification ? (
          <div className="detail-section-card reveal-on-scroll">
            <p className="card-kicker">Certification</p>
            <h2>Professional credentials</h2>
            <p>{provider.boardCertification}</p>
          </div>
        ) : null}

        {provider.personalInterests?.length ? (
          <div className="detail-section-card reveal-on-scroll">
            <p className="card-kicker">Outside The Clinic</p>
            <h2>Personal interests</h2>
            <div className="chip-row">
              {provider.personalInterests.map((interest) => (
                <span key={interest} className="info-chip">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {provider.faq?.length ? (
          <div className="detail-section-card reveal-on-scroll detail-section-wide">
            <p className="card-kicker">Common Questions</p>
            <h2>Questions families often have</h2>
            <div className="faq-list">
              {provider.faq.map((item) => (
                <div key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default ProviderDetailPage
