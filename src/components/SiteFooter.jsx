import { Link } from 'react-router-dom'
import { locations, sitemapLinks, socialLinks } from '../data'

function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="shell footer-grid reveal-on-scroll">
        <div className="footer-brand">
          <p className="footer-heading">PYAM Locations</p>
          <p className="footer-copy">
            For appointments only please call <strong>651-256-6714</strong>. To speak
            with a provider and for all other purposes please call{' '}
            <strong>651-227-7806</strong> (MN).
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-heading">Locations</p>
          <div className="footer-links">
            {locations.map((location) => (
              <Link key={location.slug} to={`/locations/${location.slug}`}>
                {location.city}
              </Link>
            ))}
            <Link to="/schedule">Telemedicine appointments</Link>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-heading">Sitemap</p>
          <div className="footer-links">
            {sitemapLinks.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ),
            )}
          </div>
        </div>
        <div className="footer-newsletter">
          <p className="footer-heading">Patient Resources</p>
          <p className="footer-copy">
            Access your health information and communicate with your care team online.
          </p>
          <Link to="/patient-portal" className="footer-newsletter-button">
            Patient Portal
          </Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div className="footer-socials" aria-label="Footer social media">
          <a href={socialLinks.facebook} aria-label="Facebook" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-2.7 0-4.4 1.6-4.4 4.7V11H7v3h2.8v7h3.7Z" />
            </svg>
          </a>
          <a href={socialLinks.instagram} aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
            </svg>
          </a>
          <a href={socialLinks.youtube} aria-label="YouTube" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.2 8.2a2.8 2.8 0 0 0-2-2C17.4 5.7 12 5.7 12 5.7s-5.4 0-7.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.3 12a29 29 0 0 0 .5 3.8 2.8 2.8 0 0 0 2 2c1.8.5 7.2.5 7.2.5s5.4 0 7.2-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8ZM10.2 15.1V8.9l5.4 3.1-5.4 3.1Z" />
            </svg>
          </a>
        </div>

        <div className="footer-legal">
          <span>Copyright &copy; 2026 &middot; Pediatric & Young Adult Medicine</span>
          <Link to="/contact">Contact</Link>
          <a href="https://i-health.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <Link to="/patient-portal">Patient Portal</Link>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
