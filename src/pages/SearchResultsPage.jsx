import { Link, useSearchParams } from 'react-router-dom'
import { locations, news, providers, services } from '../data'

const searchablePages = [
  {
    type: 'Page',
    title: 'Schedule a Visit',
    description: 'Choose the correct online scheduling workflow or call the appointment line.',
    to: '/schedule',
    keywords: ['appointment', 'well exam', 'sick visit', 'medication check', 'Saturday'],
  },
  {
    type: 'Page',
    title: 'Contact PYAM',
    description: 'Contact appointments, billing, medical records, referrals, or prescription refills.',
    to: '/contact',
    keywords: ['phone', 'fax', 'email', 'billing', 'medical records', 'referrals'],
  },
  {
    type: 'Page',
    title: 'Patient Portal',
    description: 'Open FollowMyHealth and find portal registration or proxy-access resources.',
    to: '/patient-portal',
    keywords: ['FollowMyHealth', 'registration', 'proxy access'],
  },
  ...providers.map((provider) => ({
    type: 'Provider',
    title: provider.name,
    description: provider.summary,
    to: `/providers/${provider.slug}`,
    keywords: [provider.role, provider.credentials, provider.bio, provider.specialties, provider.officeLocations],
  })),
  ...services.map((service) => ({
    type: 'Service',
    title: service.title,
    description: service.description,
    to: `/services/${service.slug}`,
    keywords: [service.eyebrow, service.detail, service.bullets, service.bestFor],
  })),
  ...locations.map((location) => ({
    type: 'Location',
    title: location.title,
    description: `${location.address}. ${location.detail}`,
    to: `/locations/${location.slug}`,
    keywords: [location.city, location.hours, location.visitTypes],
  })),
  ...news.map((item) => ({
    type: 'News',
    title: item.title,
    description: item.summary,
    to: `/news/${item.slug}`,
    keywords: [item.category, item.dateLabel, item.body],
  })),
]

function normalizeSearchText(value) {
  return [value].flat(Infinity).filter(Boolean).join(' ').toLowerCase()
}

function SearchResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q')?.trim() ?? ''
  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean)
  const results = searchablePages.filter((page) => {
    const content = normalizeSearchText([page.title, page.description, page.keywords])
    return searchTerms.length > 0 && searchTerms.every((term) => content.includes(term))
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextQuery = new FormData(event.currentTarget).get('q').trim()
    setSearchParams(nextQuery ? { q: nextQuery } : {})
  }

  return (
    <main className="interior-page shell search-page">
      <section className="interior-hero search-hero">
        <p className="eyebrow">Site search</p>
        <h1>Find care and clinic information</h1>
        <form className="search-page-form" role="search" onSubmit={handleSubmit}>
          <input key={query} name="q" type="search" defaultValue={query} placeholder="Try a provider, service, or location" aria-label="Search the site" />
          <button className="button button-primary" type="submit">Search</button>
        </form>
      </section>

      <section className="search-results" aria-live="polite">
        <h2>{query ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query}”` : 'Enter a search above'}</h2>
        {query && results.length === 0 ? (
          <div className="search-empty">
            <p>We couldn&apos;t find that. Try a provider name, service such as immunizations, or a location such as Eagan.</p>
            <Link className="button button-secondary" to="/">Return home</Link>
          </div>
        ) : (
          <div className="search-results-list">
            {results.map((result) => (
              <article className="search-result-card" key={`${result.type}-${result.title}`}>
                <p className="eyebrow">{result.type}</p>
                <h3><Link to={result.to}>{result.title}</Link></h3>
                <p>{result.description}</p>
                <Link className="section-link" to={result.to}>View {result.title}</Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default SearchResultsPage
