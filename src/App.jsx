import { useEffect, useState } from 'react'
import ChatbotWidget from './components/ChatbotWidget'

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
      { label: 'Referrals', href: '#footer' },
      { label: 'Medical Records', href: '#footer' },
      { label: 'Business Office', href: '#footer' },
    ],
  },
  {
    label: 'Forms',
    href: '#footer',
  },
  {
    label: 'Patient Portal',
    href: '/',
  },
]

const quickActions = [
  { label: 'Med Refill', href: '#refill-line' },
  { label: 'Talk to Virtual Assistant', action: 'open-chatbot' },
  { label: 'Talk with Front Desk', href: 'tel:6512566714' },
]

const services = [
  {
    title: 'Well Child Visits',
    description:
      'Routine checkups, developmental screenings, school and sports forms, and preventive care to support healthy growth at every stage.',
    image: '/images/care-well-child-visits-300x150-1.png',
  },
  {
    title: 'Immunizations',
    description:
      'Recommended childhood and adolescent vaccines, clear guidance for families, and help keeping immunization records up to date.',
    image: '/images/care-immunization-300x150-1.png',
  },
  {
    title: 'Health Issues & Illnesses',
    description:
      'Evaluation and treatment for common illnesses, minor injuries, fevers, respiratory concerns, rashes, and other everyday pediatric needs.',
    image: '/images/care-health-issues-300x150-1.png',
  },
  {
    title: 'Safety',
    description:
      'Practical support for injury prevention, seasonal concerns, school health questions, and guidance that helps families feel prepared.',
    image: '/images/care-safety-300x150-1.png',
  },
]

const locations = [
  {
    city: 'Maplewood',
    hours: ['Mon-Fri, 8:00 AM - 5:00 PM'],
    detail:
      'Our Maplewood office offers convenient east metro access for well visits, illness care, and ongoing pediatric support.',
    image: '/images/maplewood.jpg',
  },
  {
    city: 'Eagan',
    hours: ['Mon-Fri, 8:00 AM - 5:00 PM', 'Saturday 9:00 AM - 5:00 PM'],
    detail:
      'The Eagan office provides south metro families with trusted pediatric care in a convenient and welcoming setting.',
    image: '/images/eagan.jpg',
  },
]

const news = [
  {
    category: 'Care Team',
    title: 'Dr. Tammi Plotnik spotlight',
    summary:
      'Meet Dr. Tammi Plotnik and learn more about the experienced providers who care for infants, children, and young adults at PYAM.',
    image: '/images/dr-tammi-plotnik.png',
  },
  {
    category: 'Care Team',
    title: 'Dr. Christopher Ordonez spotlight',
    summary:
      'Get to know Dr. Christopher Ordonez and the care philosophy that guides long-term pediatric support for local families.',
    image: '/images/dr-christopher-ordonez.png',
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isIntroExpanded, setIsIntroExpanded] = useState(false)
  const [chatbotOpenSignal, setChatbotOpenSignal] = useState(0)

  const closeMenu = () => setIsMenuOpen(false)
  const closeSearch = () => setIsSearchOpen(false)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'))
    if (!elements.length) return

    const revealVisibleElements = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const entersViewport = rect.top <= viewportHeight * 0.86
        const remainsOnScreen = rect.bottom >= viewportHeight * 0.14

        if (entersViewport && remainsOnScreen) {
          element.classList.add('is-visible')
        } else {
          element.classList.remove('is-visible')
        }
      })
    }

    const runRevealCheck = () => {
      window.requestAnimationFrame(revealVisibleElements)
    }

    runRevealCheck()
    window.addEventListener('load', runRevealCheck)
    window.addEventListener('resize', runRevealCheck)
    window.addEventListener('scroll', runRevealCheck, { passive: true })

    return () => {
      window.removeEventListener('load', runRevealCheck)
      window.removeEventListener('resize', runRevealCheck)
      window.removeEventListener('scroll', runRevealCheck)
    }
  }, [])

  const handleQuickActionClick = (event, action) => {
    if (action.action !== 'open-chatbot') {
      return
    }

    event.preventDefault()
    setChatbotOpenSignal((signal) => signal + 1)
  }

  return (
    <div className="page-shell">
      <section className="hero-wrap">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <header className="site-header shell">
          <a className="brand-mark" href="#top" aria-label="PYAM home">
            <img
              className="brand-logo"
              src="/images/pyam_logo.png"
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
            className="mobile-search-button"
            aria-expanded={isSearchOpen}
            aria-controls="mobile-search-widget"
            aria-label="Open site search"
            onClick={() => {
              setIsSearchOpen((open) => !open)
              setIsMenuOpen(false)
            }}
          >
            <span className="search-icon" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
            onClick={() => {
              setIsMenuOpen((open) => !open)
              setIsSearchOpen(false)
            }}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <a className="nav-cta" href="#top">
            Schedule Visit
          </a>
        </header>

        <form
          className={`mobile-search-widget shell ${isSearchOpen ? 'mobile-search-open' : ''}`}
          id="mobile-search-widget"
          role="search"
        >
          <input type="search" placeholder="Search" aria-label="Search site" />
        </form>

        <div
          className={`mobile-menu shell ${isMenuOpen ? 'mobile-menu-open' : ''}`}
          id="mobile-menu"
        >
          {navigation.map((item) => (
            <div key={item.label} className="mobile-menu-group">
              <a
                href={item.href}
                onClick={() => {
                  closeMenu()
                  closeSearch()
                }}
              >
                {item.label}
              </a>
              {item.children ? (
                <div className="mobile-submenu">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => {
                        closeMenu()
                        closeSearch()
                      }}
                    >
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
            <h2 className="hero-lead">
              Maplewood And Eagan Locations Plus Telemedicine To Serve You.
            </h2>
            <p className="hero-text">
              PYAM has same day appointments for acute care, please call to make an
              appointment if you feel you need to be seen urgently.
            </p>
            <p className="hero-text hero-text-secondary">
              Choose the next step that fits your family&apos;s needs.
            </p>

            <div className="quick-actions" aria-label="Quick actions">
              {quickActions.map((action) => (
                <a
                  key={action.label}
                  className="pill"
                  href={action.href ?? '#'}
                  onClick={(event) => handleQuickActionClick(event, action)}
                >
                  {action.label}
                </a>
              ))}
            </div>

            <div className="hero-utility-wrap">
              <div className="hero-utility-divider" aria-hidden="true" />
              <div className="utility-strip" aria-label="Quick links">
                <a href="tel:6512566714">
                  <span className="utility-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.6 3h2.7c.4 0 .7.3.8.6l.8 3.6c.1.3 0 .7-.3.9l-1.7 1.7a13.4 13.4 0 0 0 5.3 5.3l1.7-1.7c.2-.2.6-.4.9-.3l3.6.8c.4.1.6.4.6.8v2.7c0 .5-.4.9-.9.9A17.4 17.4 0 0 1 3 6.6c0-.5.4-.9.9-.9Z" />
                    </svg>
                  </span>
                  <span><strong>(651) 256-6714</strong></span>
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
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="section intro-section section-contrast" id="intro">
          <div className="shell intro-panel reveal-on-scroll">
            <div className="intro-top">
              <div className="intro-heading">
                <p className="eyebrow intro-eyebrow">Our Approach</p>
                <h2>
                  Exceptional Health Care from Experienced Pediatricians in St. Paul,
                  Eagan, and Maplewood, Minnesota
                </h2>
              </div>

              <div className="intro-visual">
                <img
                  src="/images/family_photo.png"
                  alt="Family smiling together"
                />
                <div className="intro-visual-overlay">
                  <span className="intro-stat-kicker">since</span>
                  <span className="intro-stat-number">1980</span>
                  <span className="intro-stat-label">serving Minnesota families</span>
                </div>
              </div>
            </div>

            <div className={`intro-body ${isIntroExpanded ? 'intro-body-expanded' : ''}`}>
              <div className="intro-copy">
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

              <aside className="intro-aside">
                <div className="intro-highlight">
                  <h3>Family-first care</h3>
                  <p>
                    Personalized support, coordinated visits, and a welcoming
                    environment designed around long-term trust.
                    <button
                      type="button"
                      className="intro-mobile-toggle"
                      aria-expanded={isIntroExpanded}
                      aria-label={isIntroExpanded ? 'Collapse section details' : 'Expand section details'}
                      onClick={() => setIsIntroExpanded((open) => !open)}
                    >
                      <span className="intro-mobile-toggle-icon" aria-hidden="true" />
                    </button>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section shell section-soft section-services" id="services">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Services</p>
            <h2>Everyday pediatric care</h2>
            <p>
              From preventive visits to treatment for common illnesses, our clinic
              offers care designed to support children, teens, and young adults
              through every stage of growth.
            </p>
          </div>

          <div className="service-grid reveal-on-scroll">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={service.title} />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}
                    <a href="/" className="section-link">
                    &ensp;Learn more
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell section-soft-alt section-refill" id="refill-line">
          <div className="refill-banner reveal-on-scroll">
            <div className="refill-copy">
              <h2>Prescription refill support.</h2>
              <p>
                Call the refill line for medication requests and follow the recorded
                instructions so your child&apos;s provider has the information needed to
                process the request.
              </p>
              <div className="refill-details">
                <div className="refill-detail">
                  <span className="refill-label">Refill line</span>
                  <a href="tel:6512566796">(651) 256-6796</a>
                </div>
              </div>
            </div>

            <div className="refill-media">
              <img
                src="/images/prescription-hotline-phone-24.png"
                alt="Prescription hotline phone"
              />
            </div>
          </div>
        </section>

        <section className="section shell section-soft section-locations" id="locations">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Locations & Access</p>
            <h2>Family-friendly Convenient Healthcare</h2>
            <p>
              Our offices are located to make pediatric care easier for busy
              families across Maplewood and Eagan. With same-day
              appointments, Saturday availability at select locations,
              coordinated visits for siblings, and telemedicine for eligible
              appointment types, we work to keep care convenient, consistent,
              and close to home.
            </p>
          </div>

          <div className="location-grid reveal-on-scroll">
            {locations.map((location) => (
              <article className="location-card" key={location.city}>
                <img src={location.image} alt={location.city} />
                <div className="location-body">
                  {location.hours.map((hour, index) => (
                    <p className="location-hours" key={index}>
                      {hour}
                    </p>
                  ))}
                  <h3>{location.city}</h3>
                  <p>{location.detail}</p>
                  <a href="/" className="section-link">
                    View office details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell section-soft-alt section-telemedicine">
          <div className="section-heading reveal-on-scroll" id="telemedicine">
            <p className="eyebrow">Telemedicine</p>
            <h2>Telemedicine offers families another convenient way to connect with care.</h2>
            <p>
              For select visit types, virtual appointments make it easier to check
              in with your provider, review treatment plans, and get answers
              without always needing to come into the office.
            </p>
          </div>

          <div className="telemedicine-layout telemedicine-card reveal-on-scroll">
            <div className="telemedicine-copy">
              <div className="telemedicine-points">
                <div className="telemedicine-point">
                  <strong>Convenient access</strong>
                  <span>Video visits are available for select follow-ups and care needs.</span>
                </div>
                <div className="telemedicine-point">
                  <strong>Flexible care option</strong>
                  <span>Connect by phone, tablet, or computer from the comfort of home.</span>
                </div>
              </div>
              <a className="button button-primary telemedicine-overlay-cta" href="/">
                Book a Telemedicine Visit
              </a>
            </div>
          </div>
        </section>

        <section className="section shell section-soft section-news" id="news">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Latest News</p>
            <h2>Practice news and announcements help families stay informed.</h2>
            <p>
              Stay up to date with office changes, provider highlights, and community-related updates from Pediatric & Young Adult Medicine.
            </p>
          </div>

          <div className="news-grid reveal-on-scroll">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="news-body">
                  <span className="news-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <a href="/" className="section-link">
                    Read update
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer className="site-footer" id="footer">
        <div className="shell footer-grid reveal-on-scroll">
          <div className="footer-brand">
            <p className="footer-heading">PYAM Locations</p>
            <p className="footer-copy">
              For appointments only please call <strong>651-256-6714</strong>. To
              speak with a provider and for all other purposes please call{' '}
              <strong>651-227-7806</strong> (MN).
            </p>
          </div>
          <div className="footer-column">
            <p className="footer-heading">Locations</p>
            <div className="footer-links">
              <a href="#locations">Maplewood</a>
              <a href="#locations">Eagan</a>
              <a href="#telemedicine">Telemedicine</a>
            </div>
          </div>
          <div className="footer-column">
            <p className="footer-heading">Sitemap</p>
            <div className="footer-links">
              <a href="#services">Well Child Visits</a>
              <a href="#services">Health Issues / Illnesses</a>
              <a href="#refill-line">Prescription Refill Line</a>
              <a href="#services">Safety</a>
              <a href="#locations">Locations & Hours</a>
              <a href="#news">Latest News</a>
              <a href="#services">Immunization</a>
              <a href="#top">Site Map</a>
              <a href="/">FollowMyHealth Portal</a>
            </div>
          </div>
          <div className="footer-newsletter">
            <p className="footer-heading">Newsletter</p>
            <p className="footer-copy">
              Get the latest news, events and announcements straight to your inbox.
            </p>
            <a href="/" className="footer-newsletter-button">
              Join Newsletter
            </a>
          </div>
        </div>

        <div className="shell footer-bottom">
          <div className="footer-socials" aria-label="Footer social media">
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

          <div className="footer-legal">            <span>Copyright &copy; 2026 &middot; Pediatric & Young Adult Medicine</span>            <a href="/">Privacy Policy</a>            <a href="/">Log in</a>         </div>
        </div>
      </footer>

      <div className="mobile-cta-bar">
        <a href="#top">Schedule</a>
      </div>

      <ChatbotWidget openSignal={chatbotOpenSignal} />
    </div>
  )
}

export default App

