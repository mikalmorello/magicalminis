import Star from './Star'
import Heart from './Heart'
import Halo from './Halo'
import './team-card.scss'

/*
  Tombstone-shaped artist card.

  Props
  - name         shown at the bottom of the card (case is preserved from the data)
  - photo        URL/import to use as the circular photo; falls back to a
                 gentle pink gradient placeholder when omitted
  - decorations  array of decoration objects layered on top of the photo:
                   { shape, color, top, right, bottom, left, size, rotate }
                 `shape` is one of 'star' | 'heart' | 'halo' (default 'star').
  - style        inline style on the root element; primarily used to set
                 per-card CSS variable overrides:
                   --team-card-bg
                   --team-card-name-color
                   --team-card-shadow
*/

const SHAPES = { star: Star, heart: Heart, halo: Halo }

function Decoration({
  shape = 'star',
  color,
  top,
  right,
  bottom,
  left,
  size = 24,
  rotate,
}) {
  const Component = SHAPES[shape] ?? Star
  return (
    <Component
      className={`team-card__decoration team-card__decoration--${shape}`}
      color={color}
      style={{
        top,
        right,
        bottom,
        left,
        width: size,
        height: size,
        '--deco-rotate': rotate ?? '0deg',
      }}
    />
  )
}

function TeamCard({ name, photo, decorations = [], style }) {
  const photoStyle = photo ? { backgroundImage: `url(${photo})` } : undefined

  return (
    <article className="team-card" style={style}>
      <div className="team-card__media">
        <div
          className="team-card__photo"
          role="img"
          aria-label={`Photo of ${name}`}
          style={photoStyle}
        />
        {decorations.length > 0 && (
          <div className="team-card__decor" aria-hidden="true">
            {decorations.map((deco, i) => (
              <Decoration key={i} {...deco} />
            ))}
          </div>
        )}
      </div>
      <span className="team-card__name">{name}</span>
    </article>
  )
}

export default TeamCard
