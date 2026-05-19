import './sections.css'

const PRODUCTS = [
  { name: 'mini easel', price: '3.99', isNew: true },
  { name: 'rainbow mini books', price: '4.99', isNew: true },
  { name: 'cute colors', price: '2.99', isNew: true },
  { name: 'love kitty box', price: '5.99', isNew: false },
  { name: 'cutie wallet set', price: '6.99', isNew: false },
  { name: 'lil drops umbrella', price: '3.49', isNew: false },
  { name: 'teeny tiny beds', price: '4.49', isNew: false },
  { name: 'baby bow book', price: '3.99', isNew: false },
]

function ProductCard({ name, price, isNew }) {
  return (
    <article className="product-card">
      {isNew && <span className="product-card__badge">new</span>}
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">{price}</p>
      <div className="product-card__image" aria-hidden="true" />
      <button type="button" className="product-card__action" aria-label={`View ${name}`}>
        <span className="product-card__arrow" aria-hidden="true" />
      </button>
    </article>
  )
}

function ProductSection() {
  return (
    <section className="product-section" id="products" aria-labelledby="products-heading">
      <div className="product-section__header">
        <div className="product-section__heart">
          <h2 id="products-heading" className="product-section__title">
            LATEST DESIGNS
          </h2>
        </div>
        <button type="button" className="product-section__filters">
          filters
        </button>
      </div>
      <div className="product-section__grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
