import newBackground from '../../assets/new-background.svg'

/*
  Scalloped blob behind the "new" label on the three most recently added products.
  The shape comes from new-background.svg; the label sits on top via z-index in SCSS.
*/
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
