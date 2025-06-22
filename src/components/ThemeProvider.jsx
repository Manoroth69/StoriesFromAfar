// ThemeProvider.jsx

// Importăm funcții de bază din React: createContext pentru context, useEffect & useState pentru logică
import React, { createContext, useEffect, useState } from 'react';

// 1️⃣ Cream contextul - un spațiu global pentru a păstra tema accesibilă oriunde în aplicație
export const ThemeContext = createContext();

// 2️⃣ Componenta ThemeProvider care va înconjura toată aplicația (ex: în main.jsx sau App.jsx)
export default function ThemeProvider({ children }) {
  // 3️⃣ State-ul în care stocăm tema actuală (valoare inițială: 'light')
  const [theme, setTheme] = useState('light');

  // 4️⃣ useEffect care rulează o singură dată la început (on mount)
  // Verifică dacă avem o temă salvată în localStorage
  // Dacă nu, se uită la preferințele sistemului (dark/light)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme"); // Temă salvată anterior
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Preferința OS
    setTheme(storedTheme || (systemDark ? "dark" : "light")); // Setează tema în consecință
  }, []);

  // 5️⃣ useEffect care rulează de fiecare dată când se schimbă tema
  // Se ocupă de:
  //   - adăugarea clasei de temă la <html>
  //   - salvarea temei în localStorage
  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme); // Ex: <html data-theme="dark">
    localStorage.setItem("theme", theme); // Persistăm alegerea
  }, [theme]);

  // 6️⃣ Returnăm un context provider care oferă `theme` și `setTheme` către toate componentele
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children} {/* Aici pot fi orice componente care au nevoie de tema actuală */}
    </ThemeContext.Provider>
  );
}
