// src/App.jsx
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import StoriesSection from './components/StoriesSection.jsx'
import DonationSection from './components/DonationSection.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AnimatedCursor from './components/Cursor.jsx'
import Home from '../pages/Home.jsx'
import PostPage from '../pages/PostPage.jsx'
import FreshNews from '../pages/FreshNews.jsx'


export default function App() {
  const [session, setSession] = useState(null)


  return (
    <main>
      <ThemeProvider>
        <AnimatedCursor />
 <BrowserRouter>
          <Routes>
           <Route 
  path="/" 
  element={<Home key={window.location.pathname} />} 
/>
            <Route path="/freshnews" element={<FreshNews />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  )
}
