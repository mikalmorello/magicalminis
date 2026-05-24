import productsData from './products.json'
import placeholderImage from '../assets/products/placeholder.png'

const imageModules = import.meta.glob('../assets/products/*.{png,webp}', {
  eager: true,
  import: 'default',
})

function resolveImage(filename) {
  if (!filename) return placeholderImage
  return imageModules[`../assets/products/${filename}`] ?? placeholderImage
}

function computeNewestIds(products, count = 3) {
  const sorted = [...products].sort(
    (a, b) => new Date(b.addedAt) - new Date(a.addedAt),
  )
  return new Set(sorted.slice(0, count).map((product) => product.id))
}

export function getProducts() {
  const newestIds = computeNewestIds(productsData)

  return productsData.map((product) => ({
    ...product,
    image: resolveImage(product.image),
    isNew: newestIds.has(product.id),
  }))
}
