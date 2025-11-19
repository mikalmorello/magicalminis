import { useState } from 'react'
import './App.css'
import jackBackground from './assets/jack_website-background.png'

function App() {
  return (
    <div className="App" style={{ '--bg-image': `url(${jackBackground})` }}>
      <header className="App-header">
        <h1>Magical Minis</h1>
        <p>Welcome to magicalminishop.com by Maia and Allie Morello</p>
      </header>
      <main></main>
    </div>
  )
}

export default App

