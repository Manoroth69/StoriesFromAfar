import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stories from './components/Stories.jsx'
import About from './components/About.jsx'
import Donate from './components/Donate.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <main>
    <Header />
    <Hero/>
    <Stories />
    <Donate />
    </main>

  )
}

export default App