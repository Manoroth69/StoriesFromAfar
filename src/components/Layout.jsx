// src/components/Layout.jsx
import { useTheme } from '../context/ThemeContext';
import Header from './Header';

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 
      theme === 'synthwave' ? 'bg-[#1a103d] text-[#f0f0f0]' : 
      theme === 'neon' ? 'bg-[#0a0a0a] text-white' : 
      'bg-white text-gray-900'
    }`}>
      <Header />
      <main className="container mx-auto px-4 py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;