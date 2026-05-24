function SquiggleLine({ className }) {
  return (
    <svg
      className={className}
      width="48"
      height="8"
      viewBox="0 0 48 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 4C4 1 8 7 12 4C16 1 20 7 24 4C28 1 32 7 36 4C40 1 44 7 48 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SquiggleLine
