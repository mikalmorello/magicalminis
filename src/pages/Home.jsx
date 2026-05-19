import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader'
import HeroScene from '../components/hero/HeroScene'
import AboutSection from '../sections/AboutSection'
import ProductSection from '../sections/ProductSection'
import './home.scss'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div className="home">
      <SiteHeader />
      <div className="home__hero-wrap">
        <HeroScene />
      </div>
      <AboutSection />
      <ProductSection />
    </div>
  )
}

export default Home
