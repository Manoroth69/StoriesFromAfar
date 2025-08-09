// src/pages/Home.jsx
import Header from '../src/components/Header.jsx'
import Hero from '../src/components/Hero.jsx'
import About from '../src/components/About.jsx'
import StoriesSection from '../src/components/StoriesSection.jsx'
import DonationSection from '../src/components/DonationSection.jsx'
import FreshNews from '../pages/FreshNews.jsx'






export default function Home() {
  return (
    <>
      <Header />
      <Hero />
       <StoriesSection />
      <About />
     
      <DonationSection />
    </>
  )
}
