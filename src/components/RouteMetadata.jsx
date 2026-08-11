import { useEffect } from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { locations, news, providers, services } from '../data'

const siteName = 'Pediatric & Young Adult Medicine'
const siteUrl = 'https://www.pyam.com'

const staticMetadata = {
  '/': {
    title: `${siteName} | Minnesota Pediatric Care`,
    description: 'Pediatric care for infants, children, teens, and young adults at PYAM offices in Maplewood and Eagan, Minnesota.',
  },
  '/schedule': {
    title: `Schedule a Visit | ${siteName}`,
    description: 'Choose the appropriate PYAM appointment type and continue to secure online scheduling.',
  },
  '/contact': {
    title: `Contact PYAM | ${siteName}`,
    description: 'Contact PYAM appointments, billing, medical records, referrals, prescription refills, and clinic locations.',
  },
  '/patient-portal': {
    title: `Patient Portal | ${siteName}`,
    description: 'Access FollowMyHealth and download PYAM patient portal registration and proxy-access forms.',
  },
  '/telemedicine': {
    title: `Telemedicine | ${siteName}`,
    description: 'Learn about telemedicine appointments for established PYAM patients and selected pediatric care needs.',
    image: '/images/telemedicine-family-video-visit.jpg',
  },
  '/providers': {
    title: `Pediatric Providers | ${siteName}`,
    description: 'Meet PYAM pediatricians and pediatric nurse practitioners serving families in Maplewood and Eagan.',
  },
  '/services': {
    title: `Pediatric Services | ${siteName}`,
    description: 'Explore preventive, acute, safety, immunization, and newborn care available through PYAM.',
  },
  '/locations': {
    title: `Locations & Hours | ${siteName}`,
    description: 'Find addresses, hours, and office information for PYAM in Maplewood and Eagan, Minnesota.',
  },
  '/news': {
    title: `News & Updates | ${siteName}`,
    description: 'Read provider announcements, practice updates, and important news from PYAM.',
  },
  '/search': {
    title: `Search | ${siteName}`,
    description: 'Search PYAM providers, services, locations, and patient resources.',
    noIndex: true,
  },
}

function dynamicMetadata(pathname) {
  const providerMatch = matchPath('/providers/:providerSlug', pathname)
  if (providerMatch) {
    const provider = providers.find((item) => item.slug === providerMatch.params.providerSlug)
    return provider
      ? { title: `${provider.name} | ${siteName}`, description: provider.summary, image: provider.image }
      : null
  }

  const serviceMatch = matchPath('/services/:serviceSlug', pathname)
  if (serviceMatch) {
    const service = services.find((item) => item.slug === serviceMatch.params.serviceSlug)
    return service
      ? { title: `${service.title} | ${siteName}`, description: service.description, image: service.image }
      : null
  }

  const locationMatch = matchPath('/locations/:locationSlug', pathname)
  if (locationMatch) {
    const location = locations.find((item) => item.slug === locationMatch.params.locationSlug)
    return location
      ? { title: `${location.title} | ${siteName}`, description: `${location.address}. ${location.detail}`, image: location.image }
      : null
  }

  const newsMatch = matchPath('/news/:newsSlug', pathname)
  if (newsMatch) {
    const item = news.find((entry) => entry.slug === newsMatch.params.newsSlug)
    return item
      ? { title: `${item.title} | ${siteName}`, description: item.summary, image: item.image, type: 'article' }
      : null
  }

  return undefined
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
}

function RouteMetadata() {
  const location = useLocation()

  useEffect(() => {
    const dynamic = dynamicMetadata(location.pathname)
    const metadata = staticMetadata[location.pathname] ?? dynamic ?? {
      title: `Page Not Found | ${siteName}`,
      description: 'The requested PYAM page could not be found.',
      noIndex: true,
    }
    const canonicalUrl = new URL(location.pathname, siteUrl).toString()
    const imageUrl = new URL(metadata.image ?? '/images/family-photo-optimized.jpg', siteUrl).toString()

    document.title = metadata.title
    setMeta('meta[name="description"]', { name: 'description', content: metadata.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: metadata.noIndex ? 'noindex, nofollow' : 'index, follow' })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: metadata.description })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: metadata.type ?? 'website' })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [location.pathname])

  return null
}

export default RouteMetadata
