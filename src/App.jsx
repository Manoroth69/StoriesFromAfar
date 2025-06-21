import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import StoriesSection from './components/StoriesSection.jsx';
import StoryCard from './components/StoryCard.jsx';
import DonationSection from './components/DonationSection.jsx';
// Correct import - assuming ThemeContext.jsx is in src/context/
import { ThemeProvider } from './context/ThemeContext.jsx';
import AnimatedCursor from './components/Cursor';

export default function App() {
  return (
    <main>
      <ThemeProvider>
         <AnimatedCursor />
        <div className="app">
          <Header />
          <Hero />
          <About />
          <StoriesSection />
          <DonationSection/>
          {/* All other components */}
        </div>
      </ThemeProvider>
    </main>
  );
}