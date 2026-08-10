const portalLogin = 'https://www.followmyhealth.com/Login/Home/Index?authproviders=0&returnArea=PatientAccess#!/default'

const portalResources = [
  {
    title: 'Patient Portal Registration',
    description: 'Use this form to begin registration for FollowMyHealth access.',
    href: '/portal-forms/patient-portal-registration.pdf',
    filename: 'PYAM-patient-portal-registration.pdf',
    action: 'Download registration form',
  },
  {
    title: 'Parent or Guardian Proxy Access',
    description: 'Request authorized portal access for a child or another patient.',
    href: '/portal-forms/patient-portal-proxy-access.pdf',
    filename: 'PYAM-patient-portal-proxy-access.pdf',
    action: 'Download proxy access form',
  },
  {
    title: 'Young Adult Full Proxy Access',
    description: 'Review the authorization needed for full proxy access to a young adult patient account.',
    href: '/portal-forms/young-adult-full-proxy-access.pdf',
    filename: 'PYAM-young-adult-full-proxy-access.pdf',
    action: 'Download young adult form',
  },
]

const portalSteps = [
  {
    title: 'Complete registration',
    text: 'Open the portal registration form and enter the requested patient information.',
  },
  {
    title: 'Send it securely',
    text: 'Email the completed registration form to medicalrecords@pyam.com for processing.',
  },
  {
    title: 'Sign in to FollowMyHealth',
    text: 'Once your access is ready, use FollowMyHealth to view information and communicate with the care team.',
  },
]

function PatientPortalPage() {
  return (
    <main className="interior-page portal-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media portal-hero-media">
          <img
            src="/images/i-health-768x576.jpg"
            alt="i-Health patient care network"
            decoding="async"
          />
        </div>
        <div className="detail-hero-copy">
          <p className="eyebrow">FollowMyHealth Patient Portal</p>
          <h1>Your child&apos;s health information, available when you need it.</h1>
          <p className="detail-subtitle">
            Track progress, message the care team, request medication refills, and review health information online.
          </p>
          <p>
            Existing portal users can sign in now. New users can follow the enrollment steps below.
          </p>
          <div className="page-action-row">
            <a className="button button-primary" href={portalLogin} target="_blank" rel="noopener noreferrer">
              Log in to FollowMyHealth
            </a>
            <a className="button button-secondary" href="mailto:medicalrecords@pyam.com">
              Email medical records
            </a>
          </div>
        </div>
      </section>

      <section className="section shell section-soft portal-enrollment-section">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">New to the Portal?</p>
          <h2>Get started in three steps.</h2>
          <p>Complete the registration process before using FollowMyHealth for the first time.</p>
        </div>

        <div className="portal-step-grid reveal-on-scroll">
          {portalSteps.map((step, index) => (
            <article className="detail-section-card portal-step-card" key={step.title}>
              <span className="portal-step-number" aria-hidden="true">{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
              {index === 0 ? (
                <a
                  className="section-link"
                  href={portalResources[0].href}
                  download={portalResources[0].filename}
                >
                  Download registration form
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section shell section-soft-alt">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Portal Access Resources</p>
          <h2>Choose the access form that applies.</h2>
          <p>These resources are limited to portal registration and authorized proxy access.</p>
        </div>

        <div className="portal-resource-grid reveal-on-scroll">
          {portalResources.map((resource) => (
            <article className="detail-section-card portal-resource-card" key={resource.title}>
              <div className="portal-file-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 2.8h8.2L19 7.6v13.6H6V2.8Zm8 1.9v3.1h3.1L14 4.7ZM7.8 4.6v14.8h9.4v-9.8h-5V4.6H7.8Zm2 8h5.4v1.7H9.8v-1.7Zm0 3.2h5.4v1.7H9.8v-1.7Z" />
                </svg>
              </div>
              <p className="card-kicker">Portal Form</p>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a className="button button-secondary" href={resource.href} download={resource.filename}>
                {resource.action}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell portal-help-section">
        <div className="portal-help-card reveal-on-scroll">
          <div>
            <p className="eyebrow">Looking for Medical Records?</p>
            <h2>The Medical Records team can help.</h2>
            <p>Call (651) 256-6717 or email medicalrecords@pyam.com for record requests and documentation questions.</p>
          </div>
          <div className="page-action-row">
            <a className="button button-light" href="tel:6512566717">Call medical records</a>
            <a className="button button-light" href="mailto:medicalrecords@pyam.com">Send an email</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PatientPortalPage
