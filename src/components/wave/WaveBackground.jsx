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
  (20 cubic segments, each 72 wide). Layer 1 → 2 band is 35px tall;
  layer 2 → 3 band is 60px tall. Control points are ±10 from each
  baseline.
*/
const WAVE_PATHS = [
  'M0,35 C24,25 48,25 72,35 C96,45 120,45 144,35 C168,25 192,25 216,35 C240,45 264,45 288,35 C312,25 336,25 360,35 C384,45 408,45 432,35 C456,25 480,25 504,35 C528,45 552,45 576,35 C600,25 624,25 648,35 C672,45 696,45 720,35 C744,25 768,25 792,35 C816,45 840,45 864,35 C888,25 912,25 936,35 C960,45 984,45 1008,35 C1032,25 1056,25 1080,35 C1104,45 1128,45 1152,35 C1176,25 1200,25 1224,35 C1248,45 1272,45 1296,35 C1320,25 1344,25 1368,35 C1392,45 1416,45 1440,35 L1440,180 L0,180 Z',
  'M0,70 C24,60 48,60 72,70 C96,80 120,80 144,70 C168,60 192,60 216,70 C240,80 264,80 288,70 C312,60 336,60 360,70 C384,80 408,80 432,70 C456,60 480,60 504,70 C528,80 552,80 576,70 C600,60 624,60 648,70 C672,80 696,80 720,70 C744,60 768,60 792,70 C816,80 840,80 864,70 C888,60 912,60 936,70 C960,80 984,80 1008,70 C1032,60 1056,60 1080,70 C1104,80 1128,80 1152,70 C1176,60 1200,60 1224,70 C1248,80 1272,80 1296,70 C1320,60 1344,60 1368,70 C1392,80 1416,80 1440,70 L1440,180 L0,180 Z',
  'M0,130 C24,120 48,120 72,130 C96,140 120,140 144,130 C168,120 192,120 216,130 C240,140 264,140 288,130 C312,120 336,120 360,130 C384,140 408,140 432,130 C456,120 480,120 504,130 C528,140 552,140 576,130 C600,120 624,120 648,130 C672,140 696,140 720,130 C744,120 768,120 792,130 C816,140 840,140 864,130 C888,120 912,120 936,130 C960,140 984,140 1008,130 C1032,120 1056,120 1080,130 C1104,140 1128,140 1152,130 C1176,120 1200,120 1224,130 C1248,140 1272,140 1296,130 C1320,120 1344,120 1368,130 C1392,140 1416,140 1440,130 L1440,180 L0,180 Z',
]

function WaveSvg({ path }) {
  return (
    <svg
      className="wave-bg__svg"
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}

function WaveLayer({ index, path }) {
  return (
    <div
      className={`wave-bg__layer wave-bg__layer--${index}`}
      aria-hidden="true"
    >
      <div className="wave-bg__track" data-animate="scroll">
        <WaveSvg path={path} />
        <WaveSvg path={path} />
      </div>
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
