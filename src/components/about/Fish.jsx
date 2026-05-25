/*
  Fish icon — paths from src/assets/fish.svg.
  Optional `rotate` (degrees) tilts the fish; omit for the default orientation.
  Optional `palette` picks a named gradient from fishPalettes.js.
*/

import { useId } from 'react'
import fishSvg from '../../assets/fish.svg?raw'
import { FISH_PALETTES } from './fishPalettes'

const VIEWBOX = fishSvg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 293 150'
const FISH_PATH = fishSvg.match(/\bd="([^"]+)"/)?.[1] ?? ''

/* Subpaths: body silhouette, inner contour (unused), then eyes (see fish.svg). */
const FISH_SUBPATHS = FISH_PATH.trim().split(/\s(?=M\s)/).map((p) => p.trim())
const FISH_SILHOUETTE = FISH_SUBPATHS[0] ?? FISH_PATH
const FISH_EYES = FISH_SUBPATHS.slice(2)

function Fish({
  className,
  style,
  palette = 'pink-orange',
  fill,
  stroke,
  rotate,
  children,
}) {
  const rawId = useId().replace(/:/g, '')
  const gradientId = `${rawId}-fill`
  const paletteConfig = FISH_PALETTES[palette] ?? FISH_PALETTES['pink-orange']
  const fillValue = fill ?? `url(#${gradientId})`
  const strokeValue = stroke ?? paletteConfig.stroke

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
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          gradientUnits="objectBoundingBox"
        >
          {paletteConfig.stops.map((stop) => (
            <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>

      <path
        className="fish__background"
        d={FISH_SILHOUETTE}
        fill={fillValue}
        stroke={strokeValue}
        strokeWidth="4"
        strokeLinejoin="round"
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
export { FISH_PALETTES } from './fishPalettes'
