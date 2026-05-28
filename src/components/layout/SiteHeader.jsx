import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.scss'

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <button
          type="button"
          className="site-header__menu-btn"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="site-header__menu-icon" aria-hidden="true">
            <span className={`site-header__menu-line ${isMenuOpen ? 'site-header__menu-line--open' : ''}`} />
            <span className={`site-header__menu-line ${isMenuOpen ? 'site-header__menu-line--open' : ''}`} />
            <span className={`site-header__menu-line ${isMenuOpen ? 'site-header__menu-line--open' : ''}`} />
          </span>
        </button>

        <Link to="/" className="site-header__logo">
          <span className="site-header__logo-magical">Magical</span>
          <span className="site-header__logo-minis">Minis</span>
        </Link>

        <button type="button" className="site-header__cart" aria-label="Cart">
          <span className="site-header__cart-icon" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default SiteHeader
