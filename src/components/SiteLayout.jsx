import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ChatbotWidget from './ChatbotWidget'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function SiteLayout() {
  const location = useLocation()
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'))
    if (!elements.length) return

    const revealVisibleElements = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const entersViewport = rect.top <= viewportHeight * 0.86
        const remainsOnScreen = rect.bottom >= viewportHeight * 0.14

        if (entersViewport && remainsOnScreen) {
          element.classList.add('is-visible')
        } else {
          element.classList.remove('is-visible')
        }
      })
    }

    const runRevealCheck = () => {
      window.requestAnimationFrame(revealVisibleElements)
    }

    runRevealCheck()
    window.addEventListener('load', runRevealCheck)
    window.addEventListener('resize', runRevealCheck)
    window.addEventListener('scroll', runRevealCheck, { passive: true })

    return () => {
      window.removeEventListener('load', runRevealCheck)
      window.removeEventListener('resize', runRevealCheck)
      window.removeEventListener('scroll', runRevealCheck)
    }
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="page-shell">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <div className="mobile-cta-bar">
        <a href="https://phreesia.me/PYAMReturningPatient/" target="_blank" rel="noopener noreferrer">
          Schedule
        </a>
      </div>
      <ChatbotWidget />
    </div>
  )
}

export default SiteLayout
