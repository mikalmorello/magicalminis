/*
  Fish icon — paths from src/assets/fish.svg.
  Optional `rotate` (degrees) tilts the fish; omit for the default orientation.
*/

import fishSvg from '../../assets/fish.svg?raw'

const VIEWBOX = fishSvg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 293 150'
const FISH_PATH = fishSvg.match(/\bd="([^"]+)"/)?.[1] ?? ''

/* Subpaths: body silhouette, inner contour (unused), then eyes (see fish.svg). */
const FISH_SUBPATHS = FISH_PATH.trim().split(/\s(?=M\s)/).map((p) => p.trim())
const FISH_SILHOUETTE = FISH_SUBPATHS[0] ?? FISH_PATH
const FISH_EYES = FISH_SUBPATHS.slice(2)

function Fish({
  className,
  style,
  fill = 'var(--fish-fill, #fde8d4)',
  rotate,
  children,
}) {
  const svgStyle =
    rotate != null
      ? { ...style, transform: `rotate(${rotate}deg)` }
      : style

  return (
    <svg
      className={className}
      style={svgStyle}
      viewBox={VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="fish__background"
        d={FISH_SILHOUETTE}
        fill={fill}
      />

      {FISH_EYES.map((d, i) => (
        <path
          key={i}
          className="fish__eye"
          d={d}
          fill="#000"
        />
      ))}

      {children && <g className="fish__extras">{children}</g>}
    </svg>
  )
}

export default Fish
