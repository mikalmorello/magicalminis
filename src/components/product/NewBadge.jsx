import newBackground from '../../assets/new-background.svg'

function NewBadge({ className, children }) {
  return (
    <span className={className}>
      <img
        className="product-card__badge-shape"
        src={newBackground}
        alt=""
        aria-hidden="true"
      />
      <span className="product-card__badge-label">{children}</span>
    </span>
  )
}

export default NewBadge
