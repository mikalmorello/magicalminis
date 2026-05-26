import { Link } from 'react-router-dom'
import SquiggleLine from './SquiggleLine'
import NewBadge from './NewBadge'
import './product-card.scss'

function formatPrice(price) {
  const [whole, cents = '00'] = price.toFixed(2).split('.')
  return { whole, cents }
}

function ProductCard({ id, name, price, image, variant, alignment, size, isNew }) {
  const { whole, cents } = formatPrice(price)

  const classNames = [
    'product-card',
    `product-card--${variant}`,
    `product-card--info-${alignment}`,
    size === 'wide' && 'product-card--wide',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link to={`/products/${id}`} className={classNames} aria-label={`View ${name}`}>
      {isNew && <NewBadge className="product-card__badge">new</NewBadge>}
      <div className="product-card__info">
        <h3 className="product-card__title">{name}</h3>
        <SquiggleLine className="product-card__squiggle" />
        <p className="product-card__price">
          <span className="product-card__price-whole">{whole}</span>
          <span className="product-card__price-cents">.{cents}</span>
        </p>
        <span className="product-card__action" aria-hidden="true">
          <span className="product-card__arrow" />
        </span>
      </div>
      <div className="product-card__media">
        {image && (
          <img className="product-card__image" src={image} alt="" />
        )}
      </div>
    </Link>
  )
}

export default ProductCard
