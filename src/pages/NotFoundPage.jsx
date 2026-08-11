import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="interior-page shell not-found-page">
      <section className="empty-state reveal-on-scroll">
        <p className="eyebrow">Page Not Found</p>
        <h1>We couldn&apos;t find the page you were looking for.</h1>
        <p>The address may have changed, or the page may no longer be available.</p>
        <div className="page-action-row">
          <Link className="button button-primary" to="/">Return home</Link>
          <Link className="button button-secondary" to="/search">Search the site</Link>
          <Link className="section-link" to="/contact">Contact PYAM</Link>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
