/*
  Small 5-point star. Used as decoration on top of team photos.
  All props are optional; defaults give a magenta star sized to fit
  inside `.team-card__star`.
*/

function Star({ color = 'currentColor', className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 1.5 L14.85 8.65 L22.5 9.3 L16.7 14.4 L18.5 22 L12 17.85 L5.5 22 L7.3 14.4 L1.5 9.3 L9.15 8.65 Z"
        fill={color}
      />
    </svg>
  )
}

export default Star
