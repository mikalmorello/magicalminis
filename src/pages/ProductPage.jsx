import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'

function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <main className="product-page">
        <p>Product not found.</p>
        <Link to="/#products">Back to shop</Link>
      </main>
    )
  }

  return (
    <main className="product-page">
      <Link to="/#products">Back to shop</Link>
      <h1>{product.name}</h1>
      <p>Product page coming soon.</p>
    </main>
  )
}

export default ProductPage
