import { useState } from 'react'
import { Link } from 'react-router-dom'
import { locations, news, quickActions, services, socialLinks } from '../data'

function HomePage() {
  const [isIntroExpanded, setIsIntroExpanded] = useState(false)
  return (
    <>
      <section className="hero-wrap">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

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
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <span>
                    <strong>(651) 256-6714</strong>
                  </span>
                </a>
                <a href="mailto:medicalrecords@pyam.com">
                  <span className="utility-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6Zm0 1.8V8l7.5 5.1L19.5 8v-.2h-15Zm15 8.4V10l-7.1 4.8a.9.9 0 0 1-1 0L4.5 10v6.2h15Z" />
                    </svg>
                  </span>
                  <span>medicalrecords@pyam.com</span>
                </a>
                <a href="https://www.followmyhealth.com/Login/Home/Index?authproviders=0&returnArea=PatientAccess#!/default" target="_blank" rel="noopener noreferrer">
                  <span className="utility-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Zm0 1.8c-.4 0-.7.3-.7.7v11c0 .4.3.7.7.7h11c.4 0 .7-.3.7-.7v-11c0-.4-.3-.7-.7-.7h-11Zm1.4 2.1h8.2v1.8H7.9V7.9Zm0 3.7h8.2v1.8H7.9v-1.8Zm0 3.7h5v1.8h-5v-1.8Z" />
                    </svg>
                  </span>
                  <span>FollowMyHealth Portal</span>
                </a>
                <div className="utility-socials" aria-label="Social media">
                  <a href={socialLinks.facebook} aria-label="Facebook" className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-2.7 0-4.4 1.6-4.4 4.7V11H7v3h2.8v7h3.7Z" />
                    </svg>
                  </a>
                  <a href={socialLinks.instagram} aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
                    </svg>
                  </a>
                  <a href={socialLinks.youtube} aria-label="YouTube" className="social-link" target="_blank" rel="noopener noreferrer">
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
                  Exceptional Health Care from Experienced Pediatricians in Eagan and
                  Maplewood, Minnesota
                </h2>
              </div>

              <div className="intro-visual">
                <img src="/images/family-photo-optimized.jpg" alt="Family smiling together" loading="lazy" decoding="async" />
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
                  checkup visits, and immunizations in an intimate family-focused care
                  setting. We strive to create a comfortable and safe environment for
                  your family. Our goal is to put family back in healthcare.
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
                      aria-label={
                        isIntroExpanded
                          ? 'Collapse section details'
                          : 'Expand section details'
                      }
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
                <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>
                    {service.description}
                  <Link to={`/services/${service.slug}`} className="section-link">
                      &ensp;Learn more
                    </Link>
                  </p>
                </div>
              </article>
            ))}
            <article className="service-card">
              <img
                src="/images/sports-forms-youth-soccer.jpg"
                alt="Young soccer player holding a ball on the field"
                loading="lazy"
                decoding="async"
              />
              <div className="service-body">
                <h3>School and Sports Forms</h3>
                <p>
                  Find downloadable forms and activity paperwork for school sports
                  and other organized activities.
                  <Link to="/sports-forms" className="section-link">
                    &ensp;View forms
                  </Link>
                </p>
              </div>
            </article>
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
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="section shell section-soft section-locations" id="locations">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Locations & Access</p>
            <h2>Family-friendly Convenient Healthcare</h2>
            <p>
              Our offices are located to make pediatric care easier for busy families
              across Maplewood and Eagan. With same-day appointments, Saturday
              availability at select locations, coordinated visits for siblings, and
              telemedicine for eligible appointment types, we work to keep care
              convenient, consistent, and close to home.
            </p>
          </div>

          <div className="location-grid reveal-on-scroll">
            {locations.map((location) => (
              <article className="location-card" key={location.city}>
                <img src={location.image} alt={location.city} loading="lazy" decoding="async" />
                <div className="location-body">
                  {location.featuredLabel ? (
                    <p className="card-kicker">{location.featuredLabel}</p>
                  ) : null}
                  {location.hours.map((hour) => (
                    <p className="location-hours" key={hour}>
                      {hour}
                    </p>
                  ))}
                  <h3>{location.city}</h3>
                  <p>{location.detail}</p>
                  <Link to={`/locations/${location.slug}`} className="section-link">
                    View office details
                  </Link>
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
              For select visit types, virtual appointments make it easier to check in
              with your provider, review treatment plans, and get answers without
              always needing to come into the office.
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
              <Link
                className="button button-primary telemedicine-overlay-cta"
                to="/telemedicine"
              >
                Learn About Telemedicine
              </Link>
            </div>
          </div>
        </section>

        <section className="section shell section-soft section-news" id="news">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Latest News</p>
            <h2>Practice news and announcements help families stay informed.</h2>
            <p>
              Stay up to date with office changes, provider highlights, and
              community-related updates from Pediatric & Young Adult Medicine.
            </p>
            <Link to="/news" className="section-link section-heading-link">View all news</Link>
          </div>

          <div className="news-grid reveal-on-scroll">
            {news.slice(0, 3).map((item) => (
              <article className="news-card" key={item.title}>
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                <div className="news-body">
                  <span className="news-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link to={item.to ?? `/news/${item.slug}`} className="section-link">
                    {item.to ? 'View back-to-school guide' : 'Read update'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
