import SkyBackground from './SkyBackground'
import Cloud from './Cloud'
import Rainbow from './Rainbow'
import WaveDivider from './WaveDivider'
import './hero.css'

const CLOUDS = [
  { className: 'cloud--1', style: { '--drift-x': '20px', '--drift-y': '-8px', '--drift-speed': '32s', '--cloud-scale': '0.7', top: '12%', left: '5%' } },
  { className: 'cloud--2', style: { '--drift-x': '-18px', '--drift-y': '-4px', '--drift-speed': '24s', '--cloud-scale': '0.9', top: '8%', left: '28%' } },
  { className: 'cloud--3', style: { '--drift-x': '24px', '--drift-y': '-6px', '--drift-speed': '28s', '--cloud-scale': '0.85', top: '18%', right: '8%', left: 'auto' } },
  { className: 'cloud--4', style: { '--drift-x': '-16px', '--drift-y': '-10px', '--drift-speed': '36s', '--cloud-scale': '0.6', top: '6%', right: '22%', left: 'auto' } },
  { className: 'cloud--5', style: { '--drift-x': '14px', '--drift-y': '-5px', '--drift-speed': '30s', '--cloud-scale': '0.75', top: '22%', left: '55%' } },
  { className: 'cloud--6', style: { '--drift-x': '-22px', '--drift-y': '-7px', '--drift-speed': '26s', '--cloud-scale': '0.65', top: '14%', left: '78%' } },
]

function HeroScene() {
  return (
    <section className="hero-scene" aria-label="Welcome">
      <SkyBackground />
      <div className="hero-scene__decor">
        {CLOUDS.map((cloud) => (
          <Cloud key={cloud.className} className={cloud.className} style={cloud.style} />
        ))}
        <Rainbow />
      </div>
      <WaveDivider />
    </section>
  )
}

export default HeroScene
