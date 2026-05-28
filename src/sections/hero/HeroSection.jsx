import { useState, useEffect } from 'react'
import SkyBackground from './SkyBackground'
import Cloud from './Cloud'
import Rainbow from './Rainbow'
import './hero-section.scss'

const DEFAULT_SKY_BOTTOM = '#f7d5ef'

const CLOUDS = [
  { className: 'cloud--1', style: { '--drift-x': '20px', '--drift-y': '-8px', '--drift-speed': '32s', '--cloud-scale': '1.2', top: '4%', left: '-3%' } },
  { className: 'cloud--2', style: { '--drift-x': '-18px', '--drift-y': '-4px', '--drift-speed': '24s', '--cloud-scale': '1.35', top: '14%', left: '18%' } },
  { className: 'cloud--3', style: { '--drift-x': '24px', '--drift-y': '-6px', '--drift-speed': '28s', '--cloud-scale': '1.05', top: '6%', right: '-2%', left: 'auto' } },
  { className: 'cloud--4', style: { '--drift-x': '-16px', '--drift-y': '-10px', '--drift-speed': '36s', '--cloud-scale': '1.15', top: '32%', right: '14%', left: 'auto' } },
  { className: 'cloud--5', style: { '--drift-x': '14px', '--drift-y': '-5px', '--drift-speed': '30s', '--cloud-scale': '1.25', top: '36%', left: '2%' } },
  { className: 'cloud--6', style: { '--drift-x': '-22px', '--drift-y': '-7px', '--drift-speed': '26s', '--cloud-scale': '1.4', top: '48%', left: '52%' } },
]

function HeroSection() {
  const [skyBottom, setSkyBottom] = useState(DEFAULT_SKY_BOTTOM)

  useEffect(() => {
    document.documentElement.style.setProperty('--sky-bottom', skyBottom)
  }, [skyBottom])

  return (
    <section
      className="hero-section"
      aria-label="Welcome"
      style={{ '--sky-bottom': skyBottom }}
    >
      <SkyBackground />
      <div className="hero-section__clouds" aria-hidden="true">
        {CLOUDS.map((cloud) => (
          <Cloud key={cloud.className} className={cloud.className} style={cloud.style} />
        ))}
      </div>
      <Rainbow onBandSelect={setSkyBottom} />
    </section>
  )
}

export default HeroSection
