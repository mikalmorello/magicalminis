import fishSvg from '../../assets/fish.svg?raw'

const VIEWBOX = fishSvg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 293 150'
const FISH_PATH = fishSvg.match(/\bd="([^"]+)"/)?.[1] ?? ''
const FILL_RULE = fishSvg.includes('fill-rule="evenodd"') ? 'evenodd' : 'nonzero'

function Fish({
  className,
  style,
  fill = 'var(--fish-fill, #fde8d4)',
  stroke = 'var(--fish-stroke, #f0a060)',
  strokeWidth = 4,
  children,
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox={VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="fish__body"
        d={FISH_PATH}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fillRule={FILL_RULE}
      />
      {children && <g className="fish__extras">{children}</g>}
    </svg>
  )
}

export default Fish
