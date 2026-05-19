const WAVE_PATH =
  'M0,40 C60,0 120,80 180,40 C240,0 300,80 360,40 C420,0 480,80 540,40 C600,0 660,80 720,40 L720,80 L0,80 Z'

function WaveSvg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={WAVE_PATH} />
    </svg>
  )
}

function WaveLayer({ variant }) {
  return (
    <div className={`wave-layer wave-layer--${variant}`} data-animate="scroll">
      <div className="wave-layer__track">
        <WaveSvg className="wave-layer__svg" />
        <WaveSvg className="wave-layer__svg" />
      </div>
    </div>
  )
}

function WaveDivider() {
  return (
    <div className="wave-divider" aria-hidden="true">
      <WaveLayer variant="back" />
      <WaveLayer variant="front" />
    </div>
  )
}

export default WaveDivider
