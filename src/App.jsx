import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/designers" element={<Navigate to="/#team" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
