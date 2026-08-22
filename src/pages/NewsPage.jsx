import { Link } from 'react-router-dom'
import { news } from '../data'

const backToSchoolNewsItem = {
  slug: 'back-to-school',
  category: 'Family Resource',
  dateLabel: 'Back-to-school guide',
  title: 'Get ready for the school year with PYAM',
  summary:
    'Plan school physicals, immunization review, and required forms before the first bell.',
  image: '/images/service-well-child-height-chart.jpg',
  to: '/back-to-school',
}

function NewsPage() {
  const newsItems = [...news, backToSchoolNewsItem]

  return (
    <main className="interior-page news-listing-page">
      <section className="interior-hero shell reveal-on-scroll">
        <div className="interior-hero-copy">
          <p className="eyebrow">PYAM News</p>
          <h1>Practice updates for patients and families.</h1>
          <p>
            Find provider announcements, organizational updates, and other important
            news from Pediatric & Young Adult Medicine.
          </p>
        </div>
      </section>

      <section className="section shell section-soft">
        <div className="news-grid reveal-on-scroll">
          {newsItems.map((item) => (
            <article className="news-card" key={item.slug}>
              <img src={item.image} alt="" loading="lazy" decoding="async" />
              <div className="news-body">
                <div className="news-meta-row">
                  <span className="news-tag">{item.category}</span>
                  <span>{item.dateLabel}</span>
                </div>
                <h2>{item.title}</h2>
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
  )
}

export default NewsPage
