import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Breakfast from './components/Breakfast'
import Rooms from './components/Rooms'
import Pool from './components/Pool'
import Footer from './components/Footer'

import Link from './pages/Link'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
          <>
            <Hero />
            <About />
            <Breakfast />
            <Rooms />
            <Pool />
            <Footer />
          </>
          }
        />

        <Route path="/about" element={<Link />} />
        <Route path="/rooms" element={<Link />} />
        <Route path="/gallery" element={<Link />} />
        <Route path="/contact" element={<Link />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App