import { quickActions } from '../data'

function SchedulePage() {
  return (
    <main className="interior-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">Schedule a Visit</p>
          <h1>Choose the appointment type that fits your child&apos;s needs.</h1>
          <p>
            Select a visit type to continue to secure online scheduling, or call the
            central appointment line for help choosing the right appointment.
          </p>
          <div className="resource-actions">
            <a className="button button-secondary" href="tel:6512566714">
              Call (651) 256-6714
            </a>
          </div>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {quickActions.map((visit) => (
            <article className="detail-section-card" key={visit.label}>
              <p className="card-kicker">Online scheduling</p>
              <h2>{visit.label}</h2>
              <p>{visit.description}</p>
              <a
                className="button button-primary"
                href={visit.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule {visit.label}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SchedulePage
