import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader'
import HeroSection from '../sections/hero/HeroSection'
import AboutSection from '../sections/about/AboutSection'
import ProductSection from '../sections/product/ProductSection'
import FooterSection from '../sections/footer/FooterSection'
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
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <FooterSection />
    </div>
  )
}

export default Home
