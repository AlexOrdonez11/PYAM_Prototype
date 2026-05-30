import { useState } from 'react'
import { href, Link, NavLink } from 'react-router-dom'
import { navigation } from '../data'

function SiteHeader({ onOpenChatbot }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const closeMenus = () => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
  }

  return (
    <>
      <header className="site-header-wrap">
        <div className="header-glow header-glow-one" />
        <div className="header-glow header-glow-two" />

        <div className="site-header shell">
        <Link className="brand-mark" to="/" aria-label="PYAM home" onClick={closeMenus}>
          <img
            className="brand-logo"
            src="/images/pyam_logo.png"
            alt="Pediatric & Young Adult Medicine"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navigation.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${item.children ? 'nav-item-dropdown' : ''}`}
            >
              {item.to ? (
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ) : (
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              )}
              {item.children ? (
                <div className="nav-dropdown">
                  {item.children.map((child) =>
                    child.to ? (
                      <Link key={child.label} to={child.to} className="nav-dropdown-link">
                        {child.label}
                      </Link>
                    ) : (
                      <a key={child.label} href={child.href} className="nav-dropdown-link">
                        {child.label}
                      </a>
                    ),
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <form className="header-search" role="search">
          <input type="search" placeholder="Search" aria-label="Search site" />
        </form>

        <button
          type="button"
          className="mobile-search-button"
          aria-expanded={isSearchOpen}
          aria-controls="mobile-search-widget"
          aria-label="Open site search"
          onClick={() => {
            setIsSearchOpen((open) => !open)
            setIsMenuOpen(false)
          }}
        >
          <span className="search-icon" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => {
            setIsMenuOpen((open) => !open)
            setIsSearchOpen(false)
          }}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <button type="button" className="nav-cta" onClick={() => window.location.href = 'https://phreesia.me/PYAMReturningPatient/'}>
          Schedule Visit
        </button>
      </div>

      <form
        className={`mobile-search-widget shell ${isSearchOpen ? 'mobile-search-open' : ''}`}
        id="mobile-search-widget"
        role="search"
      >
        <input type="search" placeholder="Search" aria-label="Search site" />
      </form>

      <div
        className={`mobile-menu shell ${isMenuOpen ? 'mobile-menu-open' : ''}`}
        id="mobile-menu"
      >
        {navigation.map((item) => (
          <div key={item.label} className="mobile-menu-group">
            {item.to ? (
              <Link to={item.to} onClick={closeMenus}>
                {item.label}
              </Link>
            ) : (
              <a href={item.href} onClick={closeMenus}>
                {item.label}
              </a>
            )}
            {item.children ? (
              <div className="mobile-submenu">
                {item.children.map((child) =>
                  child.to ? (
                    <Link key={child.label} to={child.to} onClick={closeMenus}>
                      {child.label}
                    </Link>
                  ) : (
                    <a key={child.label} href={child.href} onClick={closeMenus}>
                      {child.label}
                    </a>
                  ),
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      </header>
    </>
  )
}

export default SiteHeader
