import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Your theme context

export default function AnimatedCursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Theme-specific cursor styles
  const cursorThemes = {
    light: {
      default: { borderColor: '#3b82f6', size: 16 },
      hover: { borderColor: '#1d4ed8', size: 24 }
    },
    dark: {
      default: { borderColor: '#22d3ee', size: 16 },
      hover: { borderColor: '#06b6d4', size: 24 }
    },
    synthwave: {
      default: { borderColor: '#ff7edb', size: 16 },
      hover: { borderColor: '#42d6ff', size: 24 }
    },
    neon: {
      default: { borderColor: '#22d3ee', size: 16 },
      hover: { borderColor: '#c026d3', size: 24 }
    }
  };

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setCursorVariant('hover');
    const handleHoverEnd = () => setCursorVariant('default');

    document.addEventListener('mousemove', moveCursor);

    // Watch for hoverable elements
    const hoverables = document.querySelectorAll(
      'a, button, [data-cursor-hover]'
    );

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  const currentTheme = cursorThemes[theme] || cursorThemes.light;
  const cursorStyle = currentTheme[cursorVariant];

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorStyle.size}px`,
        height: `${cursorStyle.size}px`,
        borderColor: cursorStyle.borderColor,
        transform: `translate(-50%, -50) scale(${cursorVariant === 'hover' ? 1.5 : 1})`
      }}
    />
  );
}