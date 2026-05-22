/*
  Soft, rounded heart. Defaults to currentColor so it can be themed
  via inline `color` (e.g. `<Heart color="var(--star-pink)" />`).
*/

function Heart({ color = 'currentColor', className, style }) {
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
        d="M12 21.2 C 4.5 16.3 1.5 12.4 1.5 8.4 C 1.5 5.4 3.9 3 6.9 3 C 8.85 3 10.65 4.05 12 5.85 C 13.35 4.05 15.15 3 17.1 3 C 20.1 3 22.5 5.4 22.5 8.4 C 22.5 12.4 19.5 16.3 12 21.2 Z"
        fill={color}
      />
    </svg>
  )
}

export default Heart
