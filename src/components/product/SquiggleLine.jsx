import squiggle from '../../assets/squiggle.png'

function SquiggleLine({ className }) {
  return (
    <img
      className={className}
      src={squiggle}
      alt=""
      aria-hidden="true"
    />
  )
}

export default SquiggleLine
