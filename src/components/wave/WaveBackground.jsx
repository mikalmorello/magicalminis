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

  ViewBox is 0 0 1440 180. Ten full wave cycles across the width
  (20 cubic segments, each 72 wide). Baselines 50px apart so each foam
  band is roughly 50px tall. Control points are ±10 from each baseline,
  giving a softer wave with more humps.
*/
const WAVE_PATHS = [
  'M0,35 C24,25 48,25 72,35 C96,45 120,45 144,35 C168,25 192,25 216,35 C240,45 264,45 288,35 C312,25 336,25 360,35 C384,45 408,45 432,35 C456,25 480,25 504,35 C528,45 552,45 576,35 C600,25 624,25 648,35 C672,45 696,45 720,35 C744,25 768,25 792,35 C816,45 840,45 864,35 C888,25 912,25 936,35 C960,45 984,45 1008,35 C1032,25 1056,25 1080,35 C1104,45 1128,45 1152,35 C1176,25 1200,25 1224,35 C1248,45 1272,45 1296,35 C1320,25 1344,25 1368,35 C1392,45 1416,45 1440,35 L1440,180 L0,180 Z',
  'M0,85 C24,75 48,75 72,85 C96,95 120,95 144,85 C168,75 192,75 216,85 C240,95 264,95 288,85 C312,75 336,75 360,85 C384,95 408,95 432,85 C456,75 480,75 504,85 C528,95 552,95 576,85 C600,75 624,75 648,85 C672,95 696,95 720,85 C744,75 768,75 792,85 C816,95 840,95 864,85 C888,75 912,75 936,85 C960,95 984,95 1008,85 C1032,75 1056,75 1080,85 C1104,95 1128,95 1152,85 C1176,75 1200,75 1224,85 C1248,95 1272,95 1296,85 C1320,75 1344,75 1368,85 C1392,95 1416,95 1440,85 L1440,180 L0,180 Z',
  'M0,135 C24,125 48,125 72,135 C96,145 120,145 144,135 C168,125 192,125 216,135 C240,145 264,145 288,135 C312,125 336,125 360,135 C384,145 408,145 432,135 C456,125 480,125 504,135 C528,145 552,145 576,135 C600,125 624,125 648,135 C672,145 696,145 720,135 C744,125 768,125 792,135 C816,145 840,145 864,135 C888,125 912,125 936,135 C960,145 984,145 1008,135 C1032,125 1056,125 1080,135 C1104,145 1128,145 1152,135 C1176,125 1200,125 1224,135 C1248,145 1272,145 1296,135 C1320,125 1344,125 1368,135 C1392,145 1416,145 1440,135 L1440,180 L0,180 Z',
]

function WaveLayer({ index, path }) {
  return (
    <div
      className={`wave-bg__layer wave-bg__layer--${index}`}
      aria-hidden="true"
    >
      <svg
        className="wave-bg__svg"
        viewBox="0 0 1440 180"
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
