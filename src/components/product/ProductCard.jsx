import SquiggleLine from './SquiggleLine'
import './product-card.scss'

function formatPrice(price) {
  const [whole, cents = '00'] = price.toFixed(2).split('.')
  return { whole, cents }
}

function ProductCard({ name, price, image, variant, alignment, size, isNew }) {
  const { whole, cents } = formatPrice(price)
  const imageStyle = image ? { backgroundImage: `url(${image})` } : undefined

  const classNames = [
    'product-card',
    `product-card--${variant}`,
    `product-card--info-${alignment}`,
    size === 'wide' && 'product-card--wide',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classNames}>
      {isNew && <span className="product-card__badge">new</span>}
      <div className="product-card__info">
        <h3 className="product-card__title">{name}</h3>
        <SquiggleLine className="product-card__squiggle" />
        <p className="product-card__price">
          <span className="product-card__price-whole">{whole}</span>
          <span className="product-card__price-cents">.{cents}</span>
        </p>
        <button
          type="button"
          className="product-card__action"
          aria-label={`View ${name}`}
        >
          <span className="product-card__arrow" aria-hidden="true" />
        </button>
      </div>
      <div className="product-card__media">
        <div
          className="product-card__image"
          role="img"
          aria-label={name}
          style={imageStyle}
        />
      </div>
    </article>
  )
}

export default ProductCard
