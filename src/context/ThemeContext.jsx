import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize with undefined to detect first render
  const [theme, setTheme] = useState(undefined);

  const themes = {
    light: { /* your config */ },
    dark: { /* your config */ },
    synthwave: { /* your config */ },
    neon: { /* your config */ }
  };

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      // Priority: localStorage > system preference > default
      const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
      setTheme(initialTheme);

      // Apply immediately to prevent flash
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

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Don't render until theme is determined
  if (typeof theme === 'undefined') {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig: themes[theme] }}>
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