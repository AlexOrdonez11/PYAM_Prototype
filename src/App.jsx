import { useState } from 'react'

const navigation = [
  {
    label: 'Home',
    href: '#top',
  },
  {
    label: 'About Us',
    href: '#intro',
    children: [{ label: 'Providers Listing', href: '#news' }],
  },
  {
    label: 'Locations & Hours',
    href: '#locations',
    children: [
      { label: 'St Paul Office', href: '#locations' },
      { label: 'Maplewood Office', href: '#locations' },
      { label: 'Eagan Office', href: '#locations' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Well Child Visits', href: '#services' },
      { label: 'Health Issues & Illnesses', href: '#services' },
      { label: 'Safety', href: '#services' },
      { label: 'Immunization', href: '#services' },
      { label: 'Referrals', href: '#resources' },
      { label: 'Medical Records', href: '#resources' },
      { label: 'Business Office', href: '#resources' },
    ],
  },
  {
    label: 'Forms',
    href: '#resources',
  },
  {
    label: 'Patient Portal',
    href: '#resources',
  },
]

const quickActions = [
  'Well Exam',
  'Sick Visit',
  'Medication Check',
  'Well Exam / Med Check',
]

const services = [
  {
    title: 'Well Child Visits',
    description:
      'Preventive care, screenings, and age-based support for children through every phase of growth.',
    image: '/images/care-well-child-visits-300x150-1.jpg',
  },
  {
    title: 'Immunizations',
    description:
      'Current vaccine guidance and scheduling support in a format that is easy for families to understand.',
    image: '/images/care-immunization-300x150-1.jpg',
  },
  {
    title: 'Health Issues & Illnesses',
    description:
      'Trusted pediatric care for common illnesses, acute concerns, and the questions that come with them.',
    image: '/images/care-health-issues-300x150-1.jpg',
  },
  {
    title: 'Safety',
    description:
      'Practical guidance that helps parents navigate school, home, activity, and seasonal safety with confidence.',
    image: '/images/care-safety-300x150-1.jpg',
  },
]

const locations = [
  {
    city: 'Maplewood',
    hours: 'Mon-Fri, 8:00 AM - 5:00 PM',
    detail:
      'A convenient east metro location designed around easy scheduling and quick family access.',
    image: '/images/location-maplewood-300x200-1.jpg',
  },
  {
    city: 'Eagan',
    hours: 'Mon-Fri, 8:00 AM - 5:00 PM',
    detail:
      'South metro pediatric care with a calm office experience and strong continuity of care.',
    image: '/images/location_eagan-300x200-1.jpg',
  },
  {
    city: 'Telemedicine',
    hours: 'Available for select visit types',
    detail:
      'Video visits help families stay connected to care when an in-person appointment is not the best fit.',
    image: '/images/slide-telemedicine-400x300-1-300x225.jpg',
  },
]

const news = [
  {
    category: 'Location Update',
    title: 'St. Paul location closing April 30',
    summary:
      'Important transition information can be surfaced more clearly in a modern card-based news layout.',
    image: '/images/st-paul-closing-april-30-2026-1-300x200.jpg',
  },
  {
    category: 'Care Team',
    title: 'Dr. Christopher Ordonez spotlight',
    summary:
      'Provider highlights can feel more personal with photography, short bios, and stronger visual hierarchy.',
    image: '/images/dr-christopher-ordonez-400x300.jpg',
  },
  {
    category: 'Community Care',
    title: 'iHealth collaborative support',
    summary:
      'Partnerships and family resources can live in a flexible editorial section without cluttering the homepage.',
    image: '/images/i-health-768x576.jpg',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="page-shell">
      <section className="hero-wrap">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <header className="site-header shell">
          <a className="brand-mark" href="#top" aria-label="PYAM home">
            <img
              className="brand-logo"
              src="/images/pyam_logo.jpg"
              alt="Pediatric & Young Adult Medicine"
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navigation.map((item) => (
              <div
                key={item.label}
                className={`nav-item ${item.children ? 'nav-item-dropdown' : ''}`}
              >
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
                {item.children ? (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <a key={child.label} href={child.href} className="nav-dropdown-link">
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <form className="header-search" role="search">
            <input type="search" placeholder="Search" aria-label="Search site" />
          </form>

          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <a className="nav-cta" href="#appointments">
            Schedule Visit
          </a>
        </header>

        <div className="utility-strip shell" aria-label="Quick links">
          <a href="tel:6512566714">
            <span className="utility-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6.6 3h2.7c.4 0 .7.3.8.6l.8 3.6c.1.3 0 .7-.3.9l-1.7 1.7a13.4 13.4 0 0 0 5.3 5.3l1.7-1.7c.2-.2.6-.4.9-.3l3.6.8c.4.1.6.4.6.8v2.7c0 .5-.4.9-.9.9A17.4 17.4 0 0 1 3 6.6c0-.5.4-.9.9-.9Z" />
              </svg>
            </span>
            <span>(651) 256-6714</span>
          </a>
          <a href="mailto:medicalrecords@pyam.com">
            <span className="utility-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6Zm0 1.8V8l7.5 5.1L19.5 8v-.2h-15Zm15 8.4V10l-7.1 4.8a.9.9 0 0 1-1 0L4.5 10v6.2h15Z" />
              </svg>
            </span>
            <span>medicalrecords@pyam.com</span>
          </a>
          <a href="/">
            <span className="utility-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3.8 6.8A1.8 1.8 0 0 1 5.6 5h12.8a1.8 1.8 0 0 1 1.8 1.8v10.4a1.8 1.8 0 0 1-1.8 1.8H5.6a1.8 1.8 0 0 1-1.8-1.8V6.8Zm1.8 0v2h12.8v-2H5.6Zm0 4v6.4h12.8v-6.4H5.6Zm2.2 1.5h3v1.8h-3v-1.8Z" />
              </svg>
            </span>
            <span>Payment</span>
          </a>
          <a href="/">
            <span className="utility-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.8 4.5 6v5.2c0 4.6 3.2 8.9 7.5 10 4.3-1.1 7.5-5.4 7.5-10V6L12 2.8Zm0 1.9 5.7 2.4v4.1c0 3.7-2.5 7.2-5.7 8.2-3.2-1-5.7-4.5-5.7-8.2V7.1L12 4.7Zm-.9 3.3h1.8v5.1h-1.8V8Zm0 6.5h1.8v1.8h-1.8v-1.8Z" />
              </svg>
            </span>
            <span>HIPAA</span>
          </a>
          <a href="#resources">
            <span className="utility-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Zm0 1.8c-.4 0-.7.3-.7.7v11c0 .4.3.7.7.7h11c.4 0 .7-.3.7-.7v-11c0-.4-.3-.7-.7-.7h-11Zm1.4 2.1h8.2v1.8H7.9V7.9Zm0 3.7h8.2v1.8H7.9v-1.8Zm0 3.7h5v1.8h-5v-1.8Z" />
              </svg>
            </span>
            <span>FollowMyHealth Portal</span>
          </a>
          <div className="utility-socials" aria-label="Social media">
            <a href="/" aria-label="Facebook" className="social-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-2.7 0-4.4 1.6-4.4 4.7V11H7v3h2.8v7h3.7Z" />
              </svg>
            </a>
            <a href="/" aria-label="Instagram" className="social-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
              </svg>
            </a>
            <a href="/" aria-label="YouTube" className="social-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.2 8.2a2.8 2.8 0 0 0-2-2C17.4 5.7 12 5.7 12 5.7s-5.4 0-7.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.3 12a29 29 0 0 0 .5 3.8 2.8 2.8 0 0 0 2 2c1.8.5 7.2.5 7.2.5s5.4 0 7.2-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8ZM10.2 15.1V8.9l5.4 3.1-5.4 3.1Z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`mobile-menu shell ${isMenuOpen ? 'mobile-menu-open' : ''}`}
          id="mobile-menu"
        >
          {navigation.map((item) => (
            <div key={item.label} className="mobile-menu-group">
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
              {item.children ? (
                <div className="mobile-submenu">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} onClick={closeMenu}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="shell hero-grid" id="top">
          <div className="hero-copy">
            <h1>Pediatric & Young Adult Medicine</h1>
            <p className="hero-lead">
              3 Locations Plus Telemedicine To Serve You.
            </p>
            <p className="hero-text">
              PYAM has same day appointments for acute care, please call to make an
              appointment if you feel you need to be seen urgently.
            </p>
            <p className="hero-text hero-text-secondary">
              Use the button below to schedule online.
            </p>

            <div className="hero-actions" id="appointments">
              <a className="button button-primary" href="/">
                Schedule Online
              </a>
            </div>

            <div className="quick-actions" aria-label="Quick actions">
              {quickActions.map((action) => (
                <span key={action} className="pill">
                  {action}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="section intro-section shell" id="intro">
          <div className="section-heading intro-heading">
            <h2>
              Exceptional Health Care from Experienced Pediatricians in St. Paul,
              Eagan, and Maplewood, Minnesota
            </h2>
            <p>
              At Pediatric & Young Adult Medicine, our team of board-certified
              physicians, nurse practitioners and support staff are dedicated to
              providing the highest-level of quality care for infants, children,
              and young adults. We have been a cornerstone in Minnesota&apos;s
              pediatric community since 1980.
            </p>
            <p>
              As your child&apos;s primary care clinic, we believe in delivering and
              coordinating all your child&apos;s healthcare needs. We are a
              privately-owned clinic who focuses on the individualized needs of
              your family. Our providers offer comprehensive pediatric care
              including acute care services, urgent medical care, routine well
              checkup visits, and immunizations in an intimate family-focused
              care setting. We strive to create a comfortable and safe
              environment for your family. Our goal is to put family back in
              healthcare.
            </p>
          </div>
        </section>

        <section className="section shell" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Same PYAM homepage components, now structured to scan quickly.</h2>
            <p>
              The main care categories are still here, but now they are supported by
              imagery, consistent spacing, and card layouts that adapt smoothly from
              desktop to mobile.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={service.title} />
                <div className="service-body">
                  <p className="service-index">Care Area</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-band" id="telemedicine">
          <div className="shell telemedicine-layout">
            <div className="telemedicine-copy">
              <p className="eyebrow">Telemedicine</p>
              <h2>Virtual visits should feel like part of the same care journey.</h2>
              <p>
                Instead of hiding telemedicine in a small homepage block, this design
                gives it a dedicated section with imagery, context, and a mobile-friendly
                call to action.
              </p>
              <div className="telemedicine-actions">
                <a className="button button-primary" href="/">
                  Book a Telemedicine Visit
                </a>
                <a className="button button-light" href="/">
                  Learn More
                </a>
              </div>
            </div>

            <div className="telemedicine-media">
              <img
                src="/images/slide-telemed-lt-blue.jpg"
                alt="Laptop showing a telemedicine visit"
              />
            </div>
          </div>
        </section>

        <section className="section shell" id="locations">
          <div className="section-heading">
            <p className="eyebrow">Locations & Access</p>
            <h2>Location cards are more visual, and much easier to use on mobile.</h2>
          </div>

          <div className="location-grid">
            {locations.map((location) => (
              <article className="location-card" key={location.city}>
                <img src={location.image} alt={location.city} />
                <div className="location-body">
                  <p className="location-hours">{location.hours}</p>
                  <h3>{location.city}</h3>
                  <p>{location.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="feature-panel">
            <div className="feature-copy">
              <p className="eyebrow">Resource Pathways</p>
              <h2>Support information can be organized around what families need most.</h2>
              <p>
                Refill support, portal access, forms, location updates, and community
                resources no longer need to compete for attention in one crowded zone.
              </p>
            </div>

            <div className="feature-stack">
              <article className="feature-card">
                <img
                  src="/images/prescription-hotline-phone-24.png"
                  alt="Prescription hotline"
                />
                <div>
                  <p className="card-kicker">Refill line</p>
                  <h3>Easy prescription support</h3>
                  <p>(651) 256-6796 with a more prominent mobile presentation.</p>
                </div>
              </article>

              <article className="feature-card">
                <img
                  src="/images/i-health-768x576.jpg"
                  alt="iHealth collaborative support"
                />
                <div>
                  <p className="card-kicker">Family resources</p>
                  <h3>Health guidance and community support</h3>
                  <p>
                    Resource modules can grow over time without breaking the homepage
                    layout.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section shell" id="news">
          <div className="section-heading">
            <p className="eyebrow">Latest News</p>
            <h2>Updates and announcements feel more current with real imagery.</h2>
          </div>

          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="news-body">
                  <span className="news-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="resources">
          <div className="resource-banner">
            <div className="resource-copy">
              <p className="eyebrow">Patient Resources</p>
              <h2>Portal access, forms, recipes, and family guidance in one cleaner hub.</h2>
            </div>
            <div className="resource-actions">
              <a className="button button-primary" href="/">
                Open Patient Portal
              </a>
              <a className="button button-light" href="/">
                View Forms & Resources
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="shell footer-grid">
          <div>
            <img
              className="footer-logo"
              src="/images/pyam_logo.jpg"
              alt="Pediatric & Young Adult Medicine"
            />
            <p className="footer-copy">
              Pediatric & Young Adult Medicine serving families with compassionate,
              responsive care across the Twin Cities.
            </p>
          </div>
          <div>
            <p className="footer-label">Appointments</p>
            <a href="tel:6512566714">(651) 256-6714</a>
          </div>
          <div>
            <p className="footer-label">Medical Records</p>
            <a href="mailto:medicalrecords@pyam.com">medicalrecords@pyam.com</a>
          </div>
        </div>
      </footer>

      <div className="mobile-cta-bar">
        <a href="#appointments">Schedule</a>
      </div>
    </div>
  )
}

export default App
