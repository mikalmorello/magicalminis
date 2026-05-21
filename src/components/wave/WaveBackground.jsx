import './wave-background.scss'

/*
  Each path traces a wavy curve across the strip and closes UP to the
  top edge, so its fill is everything ABOVE the curve. Layer 1's fill
  reads as the sky/pink continuing down with a scalloped bottom edge.
  Layers 2 and 3 use the same wave shape shifted progressively downward,
  so each one shows only as a thin band peeking out from beneath the
  layer above it — the foam lines below the main wave.

  ViewBox is 0 0 1440 100. Six full wave cycles across the width
  (12 cubic segments, each 120 wide). Layers are spaced 18px apart
  vertically so the foam bands read cleanly.
*/
const WAVE_PATHS = [
  'M0,35 C40,10 80,10 120,35 C160,60 200,60 240,35 C280,10 320,10 360,35 C400,60 440,60 480,35 C520,10 560,10 600,35 C640,60 680,60 720,35 C760,10 800,10 840,35 C880,60 920,60 960,35 C1000,10 1040,10 1080,35 C1120,60 1160,60 1200,35 C1240,10 1280,10 1320,35 C1360,60 1400,60 1440,35 L1440,0 L0,0 Z',
  'M0,53 C40,28 80,28 120,53 C160,78 200,78 240,53 C280,28 320,28 360,53 C400,78 440,78 480,53 C520,28 560,28 600,53 C640,78 680,78 720,53 C760,28 800,28 840,53 C880,78 920,78 960,53 C1000,28 1040,28 1080,53 C1120,78 1160,78 1200,53 C1240,28 1280,28 1320,53 C1360,78 1400,78 1440,53 L1440,0 L0,0 Z',
  'M0,71 C40,46 80,46 120,71 C160,96 200,96 240,71 C280,46 320,46 360,71 C400,96 440,96 480,71 C520,46 560,46 600,71 C640,96 680,96 720,71 C760,46 800,46 840,71 C880,96 920,96 960,71 C1000,46 1040,46 1080,71 C1120,96 1160,96 1200,71 C1240,46 1280,46 1320,71 C1360,96 1400,96 1440,71 L1440,0 L0,0 Z',
]

function WaveLayer({ index, path }) {
  return (
    <div
      className={`wave-bg__layer wave-bg__layer--${index}`}
      aria-hidden="true"
    >
      <svg
        className="wave-bg__svg"
        viewBox="0 0 1440 100"
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
