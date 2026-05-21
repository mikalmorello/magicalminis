import './wave-background.scss'

/*
  Each path traces a wavy curve and closes DOWN to the strip's bottom
  edge, so its fill is everything BELOW the curve. Everything ABOVE the
  highest wave is transparent — that's the area where the hero (sky and
  rainbow) shows through.

  Layer 1's wave is the highest (smallest fill); layer 3's is the lowest
  (largest fill, the main water body). Combined with z-order in the
  SCSS (layer 3 on top, layer 1 underneath), each lower-z layer shows
  only as a thin foam band where the higher-z layers don't cover.

  ViewBox is 0 0 1440 120. Six full wave cycles across the width
  (12 cubic segments, each 120 wide). Baselines 25px apart so each foam
  band is roughly 25px tall.
*/
const WAVE_PATHS = [
  'M0,35 C40,10 80,10 120,35 C160,60 200,60 240,35 C280,10 320,10 360,35 C400,60 440,60 480,35 C520,10 560,10 600,35 C640,60 680,60 720,35 C760,10 800,10 840,35 C880,60 920,60 960,35 C1000,10 1040,10 1080,35 C1120,60 1160,60 1200,35 C1240,10 1280,10 1320,35 C1360,60 1400,60 1440,35 L1440,120 L0,120 Z',
  'M0,60 C40,35 80,35 120,60 C160,85 200,85 240,60 C280,35 320,35 360,60 C400,85 440,85 480,60 C520,35 560,35 600,60 C640,85 680,85 720,60 C760,35 800,35 840,60 C880,85 920,85 960,60 C1000,35 1040,35 1080,60 C1120,85 1160,85 1200,60 C1240,35 1280,35 1320,60 C1360,85 1400,85 1440,60 L1440,120 L0,120 Z',
  'M0,85 C40,60 80,60 120,85 C160,110 200,110 240,85 C280,60 320,60 360,85 C400,110 440,110 480,85 C520,60 560,60 600,85 C640,110 680,110 720,85 C760,60 800,60 840,85 C880,110 920,110 960,85 C1000,60 1040,60 1080,85 C1120,110 1160,110 1200,85 C1240,60 1280,60 1320,85 C1360,110 1400,110 1440,85 L1440,120 L0,120 Z',
]

function WaveLayer({ index, path }) {
  return (
    <div
      className={`wave-bg__layer wave-bg__layer--${index}`}
      aria-hidden="true"
    >
      <svg
        className="wave-bg__svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} />
      </svg>
    </div>
  )
}

function WaveBackground() {
  return (
    <div className="wave-bg" aria-hidden="true">
      {WAVE_PATHS.map((path, i) => (
        <WaveLayer key={i} index={i + 1} path={path} />
      ))}
    </div>
  )
}

export default WaveBackground
