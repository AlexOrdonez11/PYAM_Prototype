import { formResources } from '../data'

function FormsPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">Forms & Resources</p>
          <h1>One place for the clinic forms and administrative resources families need most.</h1>
          <p>
            This page gives you a clean landing spot for downloadable forms,
            instructions, portal links, and office policies without burying them in
            the footer.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="listing-grid reveal-on-scroll">
          {formResources.map((resource) => (
            <article className="listing-card" key={resource.title}>
              <div className="listing-card-body">
                <p className="card-kicker">Forms Hub</p>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <a href="tel:6512566714" className="button button-secondary">
                  Ask the front desk
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default FormsPage
