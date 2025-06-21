import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from "./ThemeToggle";
import MagneticLink from './MagneticLink';

const Hero = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Theme configurations
  const themes = {
    light: {
      bg: 'bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#f1f5f9_100%)]',
      text: 'text-gray-800',
      accentText: 'from-blue-600 to-purple-600',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      buttonPrimary: 'bg-blue-600 text-white',
      buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    },
    dark: {
      bg: 'bg-[#0a0a0a]',
      text: 'text-gray-100',
      accentText: 'from-blue-400 to-indigo-500',
      cardBg: 'bg-gray-800',
      cardBorder: 'border-gray-700',
      buttonPrimary: 'bg-blue-500 text-white',
      buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
    },
    synthwave: {
      bg: 'bg-gradient-to-br from-[#2a0b3d] to-[#7d1bb5]',
      text: 'text-[#e2e8f0]',
      accentText: 'from-[#00F5FF] to-[#9D00FF]',
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black',
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black'
    },
    neon: {
      bg: 'bg-[#0F0520]',
      text: 'text-[#e2e8f0]',
      accentText: 'from-[#00F5FF] to-[#9D00FF]',
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      buttonPrimary: 'text-black bg-neon-gradient text-white',
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black'
    },
  };

  const currentTheme = themes[theme] || themes.light;

  // Story data with theme-specific accents
  const stories = [
    {
      title: "The Sensory Web",
      excerpt: "Symbiothec decodes quantum data streams in a digital void where reality blurs with virtuality...",
      readTime: "5 min read",
      accentColor: theme === 'synthwave' ? '#FF2D75' :
                  theme === 'neon' ? '#00F5FF' :
                  theme === 'dark' ? '#00A5FF' : '#0066CC'
    },
    {
      title: "Neon Nexus",
      excerpt: "A rogue AI awakens in the underbelly of Neo-Tokyo, rewriting the city's neural network...",
      readTime: "7 min read",
      accentColor: theme === 'synthwave' ? '#9D00FF' :
                  theme === 'neon' ? '#9D00FF' :
                  theme === 'dark' ? '#7D00FF' : '#9933FF'
    },
    {
      title: "Quantum Echoes",
      excerpt: "Time fractures when Symbiothec touches a mysterious artifact from a collapsed dimension...",
      readTime: "8 min read",
      accentColor: theme === 'synthwave' ? '#00F5FF' :
                  theme === 'neon' ? '#FF2D75' :
                  theme === 'dark' ? '#00DDFF' : '#00BFFF'
    },
    {
      title: "Data Phantom",
      excerpt: "A digital ghost haunts the city's surveillance network, erasing memories of its victims...",
      readTime: "6 min read",
      accentColor: theme === 'synthwave' ? '#FF4D88' :
                  theme === 'neon' ? '#FF00FF' :
                  theme === 'dark' ? '#FF6B9E' : '#FF6699'
    },
    {
      title: "The Last Interface",
      excerpt: "Humanity's final connection to the digital world rests in Symbiothec's synthetic hands...",
      readTime: "9 min read",
      accentColor: theme === 'synthwave' ? '#7d1bb5' :
                  theme === 'neon' ? '#003366' :
                  theme === 'dark' ? '#5a1d9a' : '#4a1b8c'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section id="home" className={`relative py-20 md:py-32 flex items-center justify-center overflow-hidden ${currentTheme.bg}`}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className={`
          absolute top-1/4 left-1/4 w-72 h-72 rounded-full filter blur-3xl animate-pulse mix-blend-screen
          ${theme === 'synthwave' ? 'bg-[#FF00FF]' :
            theme === 'dark' ? 'bg-[#FF2D75]' : 'bg-[#FF99CC]'}
        `}></div>
        <div className={`
          absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse delay-1000 mix-blend-screen
          ${theme === 'synthwave' ? 'bg-[#00F5FF]' :
            theme === 'dark' ? 'bg-[#00A5FF]' : 'bg-[#00DDFF]'}
        `}></div>
        <div className={`
          absolute top-1/2 left-1/2 w-64 h-64 rounded-full filter blur-2xl animate-pulse delay-500 mix-blend-screen
          ${theme === 'synthwave' ? 'bg-[#9D00FF]' :
            theme === 'dark' ? 'bg-[#7D00FF]' : 'bg-[#CC00FF]'}
        `}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              <h1 className={`text-5xl lg:text-7xl font-bold ${currentTheme.text} mb-6 leading-tight animate-scale-in`}>
                Meet
                <span className={`block bg-gradient-to-r ${currentTheme.accentText} bg-clip-text text-transparent animate-pulse`}>
                  Symbiothec
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl ${currentTheme.text} mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-300`}>
                Master of senses with advanced technological abilities. Experience immersive AI-crafted stories
                featuring original characters in extraordinary worlds.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-500">
              <a
                href="#stories"
                className={`${currentTheme.buttonPrimary} font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                Explore All Stories
              </a>
              <a
                href="#donate"
                className={`border-2 ${currentTheme.buttonSecondary} font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105`}
              >
                Support the Project
              </a>
            </div>
          </div>

          {/* Right Column - Story Slider */}
          <div className="relative w-full animate-fade-in delay-700">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 ${currentTheme.cardBg} ${currentTheme.cardBorder} p-8 border transition-all duration-500 ease-in-out transform`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                    opacity: index === currentSlide ? 1 : 0,
                    zIndex: index === currentSlide ? 10 : 1
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse"
                      style={{ background: story.accentColor }}
                    >
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="ml-3">
                      <h3 className={`text-xl font-semibold ${currentTheme.text}`}>
                        {story.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: story.accentColor }}
                      >
                        {story.readTime}
                      </p>
                    </div>
                  </div>

                  <p className={`${currentTheme.text} text-lg leading-relaxed mb-6`}>
                    {story.excerpt}
                  </p>

                  <button
                    className={`absolute bottom-6 right-6 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105`}
                    style={{
                      background: story.accentColor,
                      color: ['synthwave', 'neon'].includes(theme) ? 'black' : 'white'
                    }}
                  >
                    Read Now
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full ${currentTheme.buttonSecondary} backdrop-blur-sm`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full ${currentTheme.buttonSecondary} backdrop-blur-sm`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-current scale-125' : 'bg-gray-400/50'}`}
                  style={{
                    color: stories[currentSlide].accentColor
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="h-[2px] bg-gradient-to-r from-[#7d1bb5] via-[#5a1d9a] to-[#FF4D88]" />
    </section>
  );
};

export default Hero;