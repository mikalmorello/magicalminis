import ProductCard from '../../components/product/ProductCard'
import { getProducts } from '../../data/products'
import './product-section.scss'

const products = getProducts()

function ProductSection() {
  return (
    <section className="product-section" id="products" aria-labelledby="products-heading">
      <div className="product-section__sand" aria-hidden="true" />
      <div className="product-section__layout">
        <div className="product-section__products">
          <div className="product-section__grid">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
        <aside className="product-section__sidebar" aria-label="Product filters">
          <div className="product-section__heart">
            <h2 id="products-heading" className="product-section__title">
              LATEST DESIGNS
            </h2>
          </div>
          <button type="button" className="product-section__filters">
            filters
          </button>
        </aside>
      </div>
    </section>
  )
}

export default ProductSection
