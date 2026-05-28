import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteOverlay from './SiteOverlay'
import './SiteHeader.scss'

function SiteHeader() {
  const [openPanel, setOpenPanel] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openPanel ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [openPanel])

  const togglePanel = (panel) => {
    setOpenPanel((current) => (current === panel ? null : panel))
  }

  const closePanel = () => {
    setOpenPanel(null)
  }

  const isMenuOpen = openPanel === 'menu'
  const isCartOpen = openPanel === 'cart'

  const handleMenuClick = () => {
    togglePanel('menu')
  }

  return (
    <>
      <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
        <div className="site-header__bar">
          <button
            type="button"
            className="site-header__menu-btn"
            onClick={handleMenuClick}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="site-header__menu-icon" aria-hidden="true">
              <span className={`site-header__menu-line${isMenuOpen ? ' site-header__menu-line--open' : ''}`} />
              <span className={`site-header__menu-line${isMenuOpen ? ' site-header__menu-line--open' : ''}`} />
              <span className={`site-header__menu-line${isMenuOpen ? ' site-header__menu-line--open' : ''}`} />
            </span>
          </button>

          <Link to="/" className="site-header__logo">
            <span className="site-header__logo-magical">Magical</span>
            <span className="site-header__logo-minis">Minis</span>
          </Link>

          <button
            type="button"
            className="site-header__cart"
            aria-label={isCartOpen ? 'Close cart' : 'Cart'}
            aria-expanded={isCartOpen}
            onClick={() => togglePanel('cart')}
          >
            {isCartOpen ? (
              <span className="site-header__cart-x" aria-hidden="true">
                <span className="site-header__cart-x-line" />
                <span className="site-header__cart-x-line" />
              </span>
            ) : (
              <span className="site-header__cart-icon" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <SiteOverlay panel={openPanel} onClose={closePanel} />
    </>
  )
}

export default SiteHeader
