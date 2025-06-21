// components/MagneticLink.jsx
// components/MagneticLink.jsx
'use client';

import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function MagneticLink({ children, className = '', ...props }) {
  const ref = useRef(null);
  const { theme } = useTheme();

  // Theme configurations
 const themeConfig = {
    light: {
      strength: 0.2,
      textColor: 'text-gray-800 hover:text-blue-600',
      hoverEffect: 'hover:after:w-full hover:after:bg-blue-600',
      padding: 'pb-2'
    },
    dark: {
      strength: 0.3,
      textColor: 'text-gray-200 hover:text-[#fff]',
      hoverEffect: 'hover:after:w-full hover:after:bg-blue-500',
      padding: 'pb-2'
    },
    synthwave: {
      strength: 0.4,
      textColor: 'text-gray-200 hover:!text-[#ff7edb]', // Added !important flag
      hoverEffect: 'hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-[#ff7edb] hover:after:to-[#42d6ff]',
      padding: 'pb-2'
    },
    neon: {
      strength: 0.5,
      textColor: 'text-gray-200 hover:text-[#22d3ee]',
      hoverEffect: 'hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-[#22d3ee] hover:after:to-[#c026d3]',
      padding: 'pb-2'
    }
  };


  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width/2) * themeConfig[theme].strength;
    const y = (e.clientY - top - height/2) * themeConfig[theme].strength;

    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative inline-block no-underline
        transition-all duration-300 ease-out
        ${themeConfig[theme].textColor}
        ${themeConfig[theme].padding}
        ${themeConfig[theme].hoverEffect}
        ${className}

        /* Underline effect */
        after:content-[''] after:absolute
        after:left-0 after:bottom-0
        after:h-[2px] after:w-0
        after:transition-all after:duration-300 after:ease-out
      `}
      {...props}
    >
      {children}
    </a>
  );
}