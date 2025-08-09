'use client';

import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

// Define themeConfig outside the component to avoid recreation on each render
const themeConfig = {
  light: {
    link: {
      text: 'text-gray-800 hover:text-blue-600',
      bg: 'hover:bg-blue-50/50',
      underline: 'from-[#ff7edb] to-[#42d6ff]',
      strength: 0.25
    },
    button: { 
      text: '',
      bg: '',
      strength: 0.15 
    }
  },
  dark: {
    link: {
      text: 'text-gray-200 hover:text-white',
      bg: 'hover:bg-white/5',
      underline: 'from-blue-400 to-indigo-500',
      strength: 0.35
    },
    button: { 
      text: '',
      bg: '',
      strength: 0.2 
    }
  },
  synthwave: {
    link: {
      text: 'text-pink-300 hover:text-white',
      bg: 'hover:bg-pink-900/20',
      underline: 'from-[#ff7edb] to-[#42d6ff]',
      strength: 0.5
    },
    button: { 
      text: '',
      bg: '',
      strength: 0.3 
    }
  },
  neon: {
    link: {
      text: 'text-cyan-300 hover:text-white',
      bg: 'hover:bg-cyan-900/20',
      underline: 'from-[#22d3ee] to-[#c026d3]',
      strength: 0.3
    },
    button: { 
      text: '',
      bg: '',
      strength: 0.2 
    }
  }
};

// Default configuration
const defaultConfig = {
  link: {
    text: 'text-gray-800 hover:text-blue-600',
    bg: 'hover:bg-blue-50/50',
    underline: 'from-[#ff7edb] to-[#42d6ff]',
    strength: 0.25
  },
  button: {
    text: '',
    bg: '',
    strength: 0.15
  }
};

export default function MagneticLink({
  children,
  className = '',
  isButton = false,
  ...props
}) {
  const ref = useRef(null);
  const { theme } = useTheme();

  // Get safe theme value
  const activeTheme = theme && themeConfig[theme] ? theme : 'light';
  const currentThemeConfig = themeConfig[activeTheme] || defaultConfig;

  // Get the appropriate config based on isButton
  const config = isButton 
    ? currentThemeConfig.button || defaultConfig.button
    : currentThemeConfig.link || defaultConfig.link;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const transform = useMotionTemplate`translate(${x}px, ${y}px) scale(${scale})`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    animate(x, distanceX * (config.strength || 0.2), { 
      type: 'spring', 
      damping: 15, 
      stiffness: 150 
    });
    animate(y, distanceY * (config.strength || 0.2), { 
      type: 'spring', 
      damping: 15, 
      stiffness: 150 
    });
    animate(scale, 1.03, { duration: 0.2 });
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', damping: 15, stiffness: 100 });
    animate(y, 0, { type: 'spring', damping: 15, stiffness: 100 });
    animate(scale, 1, { duration: 0.3 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`
        inline-block no-underline relative group
        ${!isButton ? (config.text || '') : ''}
        ${!isButton ? (config.bg || '') : ''}
        ${className}
        will-change-transform
        cursor-pointer
        rounded-lg
      `}
      {...props}
    >
      {!isButton && (
        <span
          className={`
            absolute left-0 bottom-0 h-[2px] w-full
            transform origin-left scale-x-0
            transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            bg-gradient-to-r ${config.underline || 'from-[#ff7edb] to-[#42d6ff]'}
            group-hover:scale-x-100
          `}
        />
      )}

      {props.href ? (
        <a href={props.href} className="contents">
          {children}
        </a>
      ) : (
        children
      )}
    </motion.div>
  );
}