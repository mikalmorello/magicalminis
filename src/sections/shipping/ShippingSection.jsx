import Cloud from '../hero/Cloud'
import './shipping-section.scss'

function ShippingSection() {
  return (
    <section className="shipping-section" aria-label="Shipping promotion">
      <div className="shipping-section__inner">
        <div className="shipping-section__banner">
          <Cloud className="shipping-section__cloud" />
          <p className="shipping-section__content">
            <span className="shipping-section__icon" aria-hidden="true" />
            <span className="shipping-section__copy">
              <span className="shipping-section__headline">
                Free Shipping
              </span>
              <span className="shipping-section__detail">on orders over $20</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ShippingSection
