// Slider.jsx
'use client';

import { useState, useEffect } from 'react'; // Added useEffect import
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MagneticLink from './MagneticLink';

const sliderThemes = {
  light: {
    cardBg: 'bg-white',
    cardBorder: 'border-gray-200',
    text: 'text-gray-800',
    buttonControls: 'border border-blue-500 text-blue-500 hover:bg-blue-50'
  },
  dark: {
    cardBg: 'bg-gray-800',
    cardBorder: 'border-gray-700',
    text: 'text-gray-100',
    buttonControls: 'border border-blue-400 text-blue-400 hover:bg-blue-900/20'
  },
  synthwave: {
    cardBg: 'bg-[#110033]/90',
    cardBorder: 'border-[#9D00FF]/30',
    text: 'text-[#e2e8f0]',
    buttonControls: 'border border-[#FF2D75] text-[#FF2D75] hover:bg-[#FF2D75]/10'
  },
  neon: {
    cardBg: 'bg-[#110033]/90',
    cardBorder: 'border-[#00F5FF]/30',
    text: 'text-[#e2e8f0]',
    buttonControls: 'border border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF]/10'
  },
  garden: {
    cardBg: 'bg-[#F8FBF9]',
    cardBorder: 'border-[#A5D6A7]',
    text: 'text-[#1A3E2F]',
    buttonControls: 'border border-[#4CAF50] text-[#4CAF50] hover:bg-[#E8F5E9]'
  }
};

const Slider = ({ 
  slides, 
  themeName,
  customTheme,
  autoRotate = false,
  rotateInterval = 5000
}) => {
  const { theme: contextTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const activeThemeName = customTheme ? 'custom' : themeName || contextTheme || 'light';
  const themeConfig = customTheme || sliderThemes[activeThemeName] || sliderThemes.light;

  const prevSlide = () => {
  setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
};

const nextSlide = () => {
  setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
};

  // Auto-rotation effect
  useEffect(() => {
  if (!autoRotate) return;

  // Setăm intervalul pentru a schimba slide-ul la fiecare rotateInterval milisecunde
  const interval = setInterval(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, rotateInterval);

  // Cleanup ca să nu-ți bage intervale duble și să previi memory leaks
  return () => clearInterval(interval);

// Dependențe: dacă se schimbă autoRotate, rotateInterval sau slides.length, refacem intervalul
}, [autoRotate, rotateInterval, slides.length]);

  function getButtonTextColor(accentColor, theme) {
    if (theme === 'synthwave') return 'white';
    if (theme === 'neon') return 'white';
    
    const hex = accentColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? 'black' : 'white';
  }

  return (
    <div className="relative w-full">
      <div className={`relative h-[400px] w-full overflow-hidden rounded-2xl ${themeConfig.sliderBg || ''}`}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${themeConfig.slideClass || ''}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 1,
            }}
          >
            <div className={`p-8 h-full w-full rounded-2xl ${themeConfig.cardBg} ${themeConfig.cardBorder}`}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: slide.accentColor }}
                >
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div className="ml-3">
                  <h3 className={`text-xl font-semibold ${themeConfig.text}`}>
                    {slide.title}
                  </h3>
                  <p className="text-sm" style={{ color: slide.accentColor }}>
                    {slide.readTime}
                  </p>
                </div>
              </div>

              <p className={`${themeConfig.text} text-lg leading-relaxed mb-6`}>
                {slide.excerpt}
              </p>

              <MagneticLink isButton>
                <button
                  className="absolute bottom-6 right-6 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: slide.accentColor,
                    color: getButtonTextColor(slide.accentColor, activeThemeName),
                  }}
                >
                  Read Now
                </button>
              </MagneticLink>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg ${themeConfig.buttonControls}`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg ${themeConfig.buttonControls}`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-current scale-125' : 'bg-gray-400/50'
            }`}
            style={{
              color: slides[currentSlide].accentColor
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;