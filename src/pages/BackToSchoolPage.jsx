import { Link } from 'react-router-dom'
import { schedulingUrl } from '../data'

const preparationItems = [
  {
    number: '01',
    title: 'School physicals',
    copy: 'Plan a well visit to review growth, development, preventive care, and the health information needed for school or activities.',
  },
  {
    number: '02',
    title: 'Immunization review',
    copy: 'Bring any records you have so the care team can review them and discuss routine immunizations and school requirements.',
  },
  {
    number: '03',
    title: 'Required forms',
    copy: 'Bring the exact school, camp, or sports forms you need to your appointment, with the family sections completed when possible.',
  },
]

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3v3m10-3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2.5 8h2v2h-2v-2Zm5 0h2v2h-2v-2Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 3h2.7c.4 0 .7.3.8.6l.8 3.6c.1.3 0 .7-.3.9l-1.7 1.7a13.4 13.4 0 0 0 5.3 5.3l1.7-1.7c.2-.2.6-.4.9-.3l3.6.8c.4.1.6.4.6.8v2.7c0 .5-.4.9-.9.9A17.4 17.4 0 0 1 3 6.6c0-.5.4-.9.9-.9Z" />
    </svg>
  )
}

function BackToSchoolPage() {
  return (
    <main className="back-to-school-page">
      <section className="bts-hero" aria-labelledby="bts-title">
        <div className="bts-hero-shape bts-hero-shape-one" aria-hidden="true" />
        <div className="bts-hero-shape bts-hero-shape-two" aria-hidden="true" />
        <div className="shell bts-hero-grid">
          <div className="bts-hero-copy">
            <p className="bts-kicker">Back-to-school care</p>
            <h1 id="bts-title">Start the school year ready.</h1>
            <p className="bts-hero-lede">
              Schedule your child&apos;s school physical, review immunizations, and
              bring required forms—all in one well-visit plan.
            </p>

            <div className="bts-actions" aria-label="Schedule a back-to-school visit">
              <a className="button button-primary bts-primary-action" href={schedulingUrl}>
                <CalendarIcon />
                Returning patients: schedule online
              </a>
              <a className="button button-secondary bts-secondary-action" href="tel:6512566714">
                <PhoneIcon />
                Call (651) 256-6714
              </a>
            </div>
            <p className="bts-scheduling-note">
              New to PYAM or need help choosing a visit? Please call the appointment line.
            </p>
          </div>

          <div className="bts-hero-media" aria-hidden="true">
            <div className="bts-photo-frame">
              <img
                src="/images/service-well-child-height-chart.jpg"
                alt=""
                fetchpriority="high"
              />
            </div>
            <div className="bts-ready-card">
              <span className="bts-ready-check">✓</span>
              <span><strong>Ready for the visit?</strong> Bring forms and available records.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bts-prep-section shell" aria-labelledby="bts-prep-title">
        <div className="bts-section-heading">
          <p className="eyebrow">Your back-to-school checklist</p>
          <h2 id="bts-prep-title">Three things to plan before the first bell</h2>
          <p>A little preparation helps your family arrive with the right information.</p>
        </div>

        <div className="bts-prep-grid">
          {preparationItems.map((item) => (
            <article className="bts-prep-card" key={item.number}>
              <span className="bts-card-number" aria-hidden="true">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bts-details-section">
        <div className="shell bts-details-grid">
          <div className="bts-details-media">
            <img
              src="/images/service-immunizations-teen.jpg"
              alt="Teen patient speaking with a pediatric care professional"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="bts-details-copy">
            <p className="eyebrow">Before your appointment</p>
            <h2>Pack the paperwork with the backpack.</h2>
            <ul className="bts-check-list">
              <li>School, camp, or sports forms that need review</li>
              <li>Available immunization records</li>
              <li>Insurance information and an updated medication list</li>
            </ul>
            <p className="bts-detail-note">
              Have a question about records or documentation? Call the clinic before
              your visit so the team can direct you to the right resource.
            </p>
            <div className="bts-inline-links">
              <Link to="/services/well-child-visits">About well-child visits</Link>
              <Link to="/services/immunizations">About immunizations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bts-schedule-section shell" id="schedule" aria-labelledby="bts-schedule-title">
        <div className="bts-schedule-panel">
          <div>
            <p className="bts-kicker">Make the next step easy</p>
            <h2 id="bts-schedule-title">Schedule your back-to-school visit.</h2>
            <p>
              Returning patients can continue to secure online scheduling. New
              patients and families who need assistance should call the appointment line.
            </p>
          </div>
          <div className="bts-schedule-actions">
            <a className="button button-primary bts-primary-action" href={schedulingUrl}>
              Returning patients: schedule online
            </a>
            <a className="bts-phone-link" href="tel:6512566714">
              Or call <strong>(651) 256-6714</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BackToSchoolPage
