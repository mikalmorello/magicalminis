import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Designers from './pages/Designers'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <BrowserRouter>
      <nav className="navbar">
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
        </button>
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <Link to="/" onClick={closeMenu} className="nav-link">Home</Link>
          <Link to="/designers" onClick={closeMenu} className="nav-link">Designers</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designers" element={<Designers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

