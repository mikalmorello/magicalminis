/*
  Tilted oval halo (think angel halo). Stroke-only ellipse on a
  wide viewBox so the ring is wider than it is tall.
*/

function Halo({ color = 'currentColor', className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <ellipse
        cx="50"
        cy="20"
        rx="44"
        ry="12"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Halo
