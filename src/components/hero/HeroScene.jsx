import SkyBackground from './SkyBackground'
import Cloud from './Cloud'
import Rainbow from './Rainbow'
import WaveDivider from './WaveDivider'
import './hero.scss'

const CLOUDS = [
  { className: 'cloud--1', style: { '--drift-x': '20px', '--drift-y': '-8px', '--drift-speed': '32s', '--cloud-scale': '1.35', top: '4%', left: '-3%' } },
  { className: 'cloud--2', style: { '--drift-x': '-18px', '--drift-y': '-4px', '--drift-speed': '24s', '--cloud-scale': '1.55', top: '16%', left: '20%' } },
  { className: 'cloud--3', style: { '--drift-x': '24px', '--drift-y': '-6px', '--drift-speed': '28s', '--cloud-scale': '1.2', top: '6%', right: '-2%', left: 'auto' } },
  { className: 'cloud--4', style: { '--drift-x': '-16px', '--drift-y': '-10px', '--drift-speed': '36s', '--cloud-scale': '1.1', top: '28%', right: '14%', left: 'auto' } },
  { className: 'cloud--5', style: { '--drift-x': '14px', '--drift-y': '-5px', '--drift-speed': '30s', '--cloud-scale': '1.45', top: '38%', left: '4%' } },
  { className: 'cloud--6', style: { '--drift-x': '-22px', '--drift-y': '-7px', '--drift-speed': '26s', '--cloud-scale': '1.3', top: '50%', left: '58%' } },
]

function HeroScene() {
  return (
    <section className="hero-scene" aria-label="Welcome">
      <SkyBackground />
      <div className="hero-scene__clouds" aria-hidden="true">
        {CLOUDS.map((cloud) => (
          <Cloud key={cloud.className} className={cloud.className} style={cloud.style} />
        ))}
      </div>
      <Rainbow />
      <WaveDivider />
    </section>
  )
}

export default HeroScene
