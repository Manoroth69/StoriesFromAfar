import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themes = {
  // ... existing themes ...
  neon: {
    bg: 'bg-neon-bg',
    text: 'text-neon-text',
    accentText: 'from-neon-primary to-neon-secondary',
    cardBg: 'bg-neon-card backdrop-blur-lg',
    cardBorder: 'border-neon-border border-opacity-50',
    buttonPrimary: 'bg-gradient-to-r from-neon-primary to-neon-secondary text-black font-bold',
    buttonSecondary: 'border-neon-primary text-neon-primary hover:bg-neon-primary hover:text-black'
  }
}


  // Initialize theme from localStorage or preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!theme) return;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};