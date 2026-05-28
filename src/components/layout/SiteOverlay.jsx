import { Link } from 'react-router-dom'
import './site-overlay.scss'

const MENU_ITEMS = [
  { label: 'products', to: '/#products' },
  { label: 'design team', to: '/#team' },
  { label: 'contact', to: '/#contact' },
]

function SiteOverlay({ panel, onClose }) {
  const isOpen = panel !== null

  return (
    <div
      className={`site-overlay${isOpen ? ' site-overlay--open' : ''}`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        className="site-overlay__panel"
        role="dialog"
        aria-modal="true"
        aria-label={panel === 'cart' ? 'Cart' : 'Menu'}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={`site-overlay__view site-overlay__view--menu${panel === 'menu' ? ' site-overlay__view--active' : ''}`}
          aria-hidden={panel !== 'menu'}
        >
          <nav className="site-overlay__nav" aria-label="Main">
            <ul className="site-overlay__nav-list">
              {MENU_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    className="site-overlay__nav-link"
                    to={item.to}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`site-overlay__view site-overlay__view--cart${panel === 'cart' ? ' site-overlay__view--active' : ''}`}
          aria-hidden={panel !== 'cart'}
        >
          <div className="site-overlay__cart">
            <h2 className="site-overlay__cart-title">Your cart</h2>
            <p className="site-overlay__cart-empty">Nothing is currently in your cart.</p>
            <span className="site-overlay__cart-wave" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteOverlay
