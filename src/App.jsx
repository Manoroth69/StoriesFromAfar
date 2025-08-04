// src/App.jsx
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import StoriesSection from './components/StoriesSection.jsx'
import DonationSection from './components/DonationSection.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AnimatedCursor from './components/Cursor.jsx'
import { supabase } from './utlis/supabase.js'


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // On mount, check session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Listen for login/logout changes
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <main>
      <ThemeProvider>
        <AnimatedCursor />

              <Header />
              <Hero />
              <About />
              <StoriesSection />
             
              <DonationSection />
              {/* Add logout button here if you want */}


      </ThemeProvider>
    </main>
  )
}
