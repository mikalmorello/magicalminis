import './shipping-section.scss'

function ShippingSection() {
  return (
    <section className="shipping-section" aria-label="Shipping promotion">
      <div className="shipping-section__inner">
        <p className="shipping-section__banner">
          <span className="shipping-section__icon" aria-hidden="true" />
          <span className="shipping-section__text">
            Free <strong>SHIPPING</strong> on orders over $20
          </span>
        </p>
      </div>
    </section>
  )
}

export default ShippingSection
