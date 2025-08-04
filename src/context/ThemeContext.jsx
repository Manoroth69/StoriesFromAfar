import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(undefined);

  const themes = {
    light: {
      bg: 'bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#f1f5f9_100%)]',
      text: 'text-gray-800',
      accentText: 'from-blue-600 to-purple-600',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      buttonPrimary: 'bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300 ease-out rounded-lg',
      buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      buttonControls: 'border border-[#3B82F6] text-[#2563EB] hover:bg-[#E0F2FE] hover:text-[#1E40AF] transition duration-300 shadow-[0_0_10px_rgba(96,165,250,0.5)] hover:shadow-[0_0_20px_rgba(147,197,253,0.7)] rounded-md'
    },
    dark: {
      bg: 'bg-[#0a0a0a]',
      text: 'text-gray-100',
      accentText: 'from-blue-400 to-indigo-500',
      cardBg: 'bg-gray-800',
      cardBorder: 'border-gray-700',
      buttonPrimary: 'bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300 ease-out rounded-lg',
      buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white',
      buttonControls: 'border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-black transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]'
    },
    synthwave: {
      bg: 'bg-gradient-to-br from-[#2a0b3d] to-[#7d1bb5]',
      text: 'text-[#e2e8f0]',
      accentText: 'from-[#E0F7FF] to-[#9B3FFF]',
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-[#fffbf0] shadow-[0_0_10px_rgba(255,45,117,0.4)] hover:shadow-[0_0_20px_rgba(157,0,255,0.6)] hover:scale-105 transition-all duration-300 ease-out rounded-lg',
      buttonSecondary: 'border-[#000] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black border',
      buttonControls: 'border border-[#FF2D75] text-[#fff] hover:bg-[#FF2D75] hover:text-black transition duration-300 shadow-[0_0_10px_rgba(255,45,117,0.4)] hover:shadow-[0_0_20px_rgba(255,45,117,0.6)]'
    },
    neon: {
      bg: 'bg-[#0F0520]',
      text: 'text-[#e2e8f0]',
      accentText: 'from-[#1EB6FF] to-[#6B00CC]',
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      buttonPrimary: 'bg-gradient-to-r from-[#00F5FF] to-[#00C2C2] text-black shadow-[0_0_10px_rgba(0,245,255,0.3)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] hover:scale-105 transition-all duration-300 ease-out rounded-lg',
      buttonControls: 'border border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black transition duration-300 shadow-[0_0_10px_rgba(0,245,255,0.4)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]'
    },
    cyberpunk: {
      bg: 'bg-[#0f0f1a]',
      text: 'text-[#e0e0e0]',
      accentText: 'from-[#FF00FF] to-[#00FFFF]',
      cardBg: 'bg-[#1a1a2e]',
      cardBorder: 'border-[#FF00FF]/30',
      buttonPrimary: 'bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-black shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105 transition-all duration-300 ease-out rounded-lg',
      buttonControls: 'border border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF] hover:text-black transition duration-300'
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
      setTheme(initialTheme);
      document.documentElement.className = initialTheme;
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.documentElement.className = theme;
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme) => setTheme(newTheme);

  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
