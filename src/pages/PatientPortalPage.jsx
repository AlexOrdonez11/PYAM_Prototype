const portalResources = [
  {
    title: 'Patient Portal Registration',
    description: 'Registration information for setting up patient portal access.',
    href: 'https://www.pyam.com/download/ihealth-patient-portal-registration-form/',
  },
  {
    title: 'Patient Portal Proxy Access',
    description: 'Portal access documentation for a parent or authorized proxy.',
    href: 'https://www.pyam.com/download/patient-portal-proxy-access/',
  },
  {
    title: 'Young Adult Full Proxy Access',
    description: 'Portal proxy access information for young adult patients.',
    href: 'https://www.pyam.com/download/patient-portal-young-adult-full-proxy-access/',
  },
]

const portalLogin = 'https://www.followmyhealth.com/Login/Home/Index?authproviders=0&returnArea=PatientAccess#!/default'

function PatientPortalPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">Patient Portal</p>
          <h1>Access health information and communicate with your care team.</h1>
          <p>
            Sign in to FollowMyHealth or use the portal registration and proxy-access
            resources below.
          </p>
          <div className="resource-actions">
            <a className="button button-primary" href={portalLogin} target="_blank" rel="noopener noreferrer">
              Open FollowMyHealth
            </a>
            <a className="button button-secondary" href="tel:6512566717">
              Medical records: (651) 256-6717
            </a>
          </div>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {portalResources.map((resource) => (
            <article className="detail-section-card" key={resource.title}>
              <p className="card-kicker">Portal resource</p>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a className="button button-secondary" href={resource.href} target="_blank" rel="noopener noreferrer">
                View resource
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PatientPortalPage
