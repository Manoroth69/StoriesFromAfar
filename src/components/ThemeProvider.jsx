// ThemeProvider.jsx
import React, { createContext, useEffect, useState } from 'react';

// Create the context BEFORE exporting it
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(storedTheme || (systemDark ? "dark" : "light"));
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Provide theme and setTheme to children components
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
