import '../App.css'
import jackBackground from '../assets/jack_website-background.png'

function Designers() {
  return (
    <div className="App" style={{ '--bg-image': `url(${jackBackground})` }}>
      <header className="App-header">
        <h1>Designers</h1>
        <p>Meet our talented designers</p>
      </header>
      <main>
        <p>Designer content coming soon...</p>
      </main>
    </div>
  )
}

export default Designers

