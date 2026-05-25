/*
  Fish icon — paths from src/assets/fish.svg.
  Optional `rotate` (degrees) tilts the fish; omit for the default orientation.
*/

import fishSvg from '../../assets/fish.svg?raw'

const VIEWBOX = fishSvg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 293 150'
const FISH_PATH = fishSvg.match(/\bd="([^"]+)"/)?.[1] ?? ''

/* Outer silhouette = solid fill background; remaining subpaths = eye/gill detail */
const FISH_SILHOUETTE = FISH_PATH.match(/^M[^M]+/)?.[0] ?? FISH_PATH
const FISH_DETAILS = FISH_PATH.slice(FISH_SILHOUETTE.length).trim()

function Fish({
  className,
  style,
  fill = 'var(--fish-fill, #fde8d4)',
  stroke = 'var(--fish-stroke, #f0a060)',
  strokeWidth = 4,
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
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {FISH_DETAILS && (
        <path
          className="fish__detail"
          d={FISH_DETAILS}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth * 0.7}
          strokeLinejoin="round"
        />
      )}

      {children && <g className="fish__extras">{children}</g>}
    </svg>
  )
}

export default Fish
