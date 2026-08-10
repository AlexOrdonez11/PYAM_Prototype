import { Link, useParams } from 'react-router-dom'
import { news } from '../data'

function NewsDetailPage() {
  const { newsSlug } = useParams()
  const item = news.find((entry) => entry.slug === newsSlug)

  if (!item) {
    return (
      <main className="interior-page shell">
        <section className="empty-state reveal-on-scroll">
          <h1>News update not found.</h1>
          <Link to="/news" className="button button-primary">Back to news</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="interior-page news-detail-page">
      <section className="detail-hero shell reveal-on-scroll">
        <div className={`detail-hero-media news-detail-media news-detail-media-${item.slug}`}>
          <img src={item.image} alt="" decoding="async" />
        </div>
        <div className="detail-hero-copy">
          <div className="breadcrumbs">
            <Link to="/news">News</Link>
            <span>/</span>
            <span>{item.category}</span>
          </div>
          <p className="eyebrow">{item.dateLabel}</p>
          <h1>{item.title}</h1>
          <p className="detail-subtitle">{item.summary}</p>
        </div>
      </section>

      <section className="section shell news-article-section">
        <article className="news-article-card reveal-on-scroll">
          {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {item.action ? (
            item.action.internal ? (
              <Link className="button button-primary" to={item.action.href}>{item.action.label}</Link>
            ) : (
              <a className="button button-primary" href={item.action.href} target="_blank" rel="noopener noreferrer">
                {item.action.label}
              </a>
            )
          ) : null}
        </article>
      </section>
    </main>
  )
}

export default NewsDetailPage
