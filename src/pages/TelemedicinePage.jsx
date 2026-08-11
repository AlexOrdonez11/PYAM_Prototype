import { Link } from 'react-router-dom'

const visitSteps = [
  {
    title: 'Call to schedule',
    text: 'Our scheduling team will review the reason for the visit and help determine whether telemedicine is appropriate.',
  },
  {
    title: 'Open your visit link',
    text: 'At appointment time, use the secure waiting-room link sent by email or text on your phone, tablet, or computer.',
  },
  {
    title: 'Meet with your provider',
    text: 'Discuss symptoms and next steps live. When appropriate, prescriptions can be sent to your pharmacy.',
  },
]

const visitBasics = [
  {
    kicker: 'Who can use it',
    title: 'Established PYAM patients',
    text: 'Telemedicine is available for established patients and selected visit types. Please call so we can confirm the right setting for your child.',
  },
  {
    kicker: 'What you need',
    title: 'A connected device',
    text: 'Use a phone, tablet, or computer with reliable internet access, a camera, audio, and a current web browser.',
  },
  {
    kicker: 'What to expect',
    title: 'A live provider visit',
    text: 'You can review concerns, ask questions, discuss treatment, and receive clear follow-up guidance from home.',
  },
]

function TelemedicinePage() {
  return (
    <main className="interior-page telemedicine-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className="detail-hero-media telemedicine-hero-media">
          <img
            src="/images/telemedicine-family-video-visit.jpg"
            alt="A parent and child meeting with a pediatric provider by video"
            decoding="async"
          />
        </div>
        <div className="detail-hero-copy">
          <div className="breadcrumbs">
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>Telemedicine</span>
          </div>
          <p className="eyebrow">Virtual Care</p>
          <h1>Connect with your provider from the comfort of home.</h1>
          <p className="detail-subtitle">
            Telemedicine offers established PYAM patients a convenient option for select visits.
          </p>
          <p>
            Not every concern can be evaluated virtually. Call our Central Appointment Line and we will help choose the safest, most useful visit type.
          </p>
          <div className="page-action-row">
            <a className="button button-primary" href="tel:6512566714">
              Call (651) 256-6714
            </a>
            <Link className="button button-secondary" to="/locations">
              View office locations
            </Link>
          </div>
        </div>
      </section>

      <section className="section shell section-soft telemedicine-basics-section">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Virtual Visit Basics</p>
          <h2>A simple way to stay connected to your child&apos;s care team.</h2>
          <p>Our team will confirm whether a virtual appointment fits your child&apos;s needs before the visit.</p>
        </div>
        <div className="telemedicine-info-grid reveal-on-scroll">
          {visitBasics.map((item) => (
            <article className="detail-section-card telemedicine-info-card" key={item.title}>
              <p className="card-kicker">{item.kicker}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell section-soft-alt">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">How It Works</p>
          <h2>Prepare for your telemedicine appointment in three steps.</h2>
        </div>
        <div className="telemedicine-step-grid reveal-on-scroll">
          {visitSteps.map((step, index) => (
            <article className="detail-section-card telemedicine-step-card" key={step.title}>
              <span className="portal-step-number" aria-hidden="true">{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="detail-sections reveal-on-scroll">
          <article className="detail-section-card">
            <p className="card-kicker">When In-Person Care Is Needed</p>
            <h2>Some concerns need a closer examination.</h2>
            <p>
              Your provider may recommend an office visit for a physical examination, testing, lab work, imaging, or additional evaluation. This may be decided while scheduling or during the virtual visit.
            </p>
          </article>
          <article className="detail-section-card">
            <p className="card-kicker">Cost &amp; Insurance</p>
            <h2>Telemedicine is a billable medical visit.</h2>
            <p>
              Insurance coverage and patient responsibility vary by plan. Contact your insurance company directly if you have questions about telemedicine benefits or expected costs.
            </p>
          </article>
        </div>
      </section>

      <section className="section shell telemedicine-help-section">
        <div className="telemedicine-help-card reveal-on-scroll">
          <div>
            <p className="eyebrow">Ready to Get Started?</p>
            <h2>Call to find out if telemedicine is right for this visit.</h2>
            <p>Our scheduling team can review your child&apos;s needs and help arrange the appropriate appointment.</p>
          </div>
          <a className="button button-light" href="tel:6512566714">Call the appointment line</a>
        </div>
      </section>
    </main>
  )
}

export default TelemedicinePage
