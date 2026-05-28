import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.scss'

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <button type="button" className="site-header__search" aria-label="Search">
          <span className="site-header__search-icon" aria-hidden="true" />
        </button>

        <Link to="/" className="site-header__logo" onClick={closeMenu}>
          <span className="site-header__logo-magical">Magical</span>
          <span className="site-header__logo-minis">Minis</span>
        </Link>

        <div className="site-header__actions">
          <div className="site-header__shipping">
            <span className="site-header__shipping-icon" aria-hidden="true" />
            <span className="site-header__shipping-text">
              Free <strong>SHIPPING</strong> on orders over $20
            </span>
          </div>
          <button
            type="button"
            className="site-header__menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="site-header__menu-icon" aria-hidden="true">
              <span className={`site-header__menu-line ${isMenuOpen ? 'site-header__menu-line--open' : ''}`} />
              <span className={`site-header__menu-line ${isMenuOpen ? 'site-header__menu-line--open' : ''}`} />
              <span className={`site-header__menu-line ${isMenuOpen ? 'site-header__menu-line--open' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <nav className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}>
        <Link to="/" onClick={closeMenu} className="site-header__nav-link">
          Home
        </Link>
        <a href="#team" onClick={closeMenu} className="site-header__nav-link">
          Designers
        </a>
        <a href="#products" onClick={closeMenu} className="site-header__nav-link">
          Shop
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
