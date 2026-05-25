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

/* Subpaths: body silhouette, inner contour (unused), eye, then fin (see fish.svg). */
const FISH_SUBPATHS = FISH_PATH.trim().split(/\s(?=M\s)/).map((p) => p.trim())
const FISH_SILHOUETTE = FISH_SUBPATHS[0] ?? FISH_PATH
const FISH_EYE = FISH_SUBPATHS[2]
const FISH_FIN = FISH_SUBPATHS[3]

/* Four short marks under the upper eye, angled slightly toward the tail fin. */
const CHEEK_LINE_X = [50, 60, 70, 80]
const CHEEK_LINE_Y1 = 91
const CHEEK_LINE_Y2 = 106
const CHEEK_LINE_DX = 4
const CHEEK_LINE_STROKE = 7

function Fish({
  className,
  style,
  palette = 'pink-orange',
  fill,
  rotate,
  children,
}) {
  const rawId = useId().replace(/:/g, '')
  const gradientId = `${rawId}-fill`
  const paletteConfig = FISH_PALETTES[palette] ?? FISH_PALETTES['pink-orange']
  const fillValue = fill ?? `url(#${gradientId})`

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
      />

      {FISH_FIN && (
        <path
          className="fish__fin"
          d={FISH_FIN}
          fill={paletteConfig.fin}
        />
      )}

      {FISH_EYE && (
        <path
          className="fish__eye"
          d={FISH_EYE}
          fill="#000"
        />
      )}

      <g className="fish__cheek-lines" aria-hidden="true">
        {CHEEK_LINE_X.map((x) => (
          <line
            key={x}
            x1={x}
            y1={CHEEK_LINE_Y1}
            x2={x + CHEEK_LINE_DX}
            y2={CHEEK_LINE_Y2}
            stroke="var(--pink-primary)"
            strokeWidth={CHEEK_LINE_STROKE}
            strokeLinecap="round"
          />
        ))}
      </g>

      {children && <g className="fish__extras">{children}</g>}
    </svg>
  )
}

export default Fish
export { FISH_PALETTES } from './fishPalettes'
