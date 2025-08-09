import { useEffect, useState, useRef } from 'react';
import { useTheme } from "../context/ThemeContext";

export default function AnimatedCursor() {
  const { theme } = useTheme(); // Get theme from context
  const [cursorVariant, setCursorVariant] = useState('default');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  // Theme-specific cursor styles
  const cursorThemes = {
    light: {
      default: { 
        borderColor: '#176DF9', 
        innerSize: 18,
        outerSize: 36,
        glowColor: '#176DF9',
        bgColor: 'rgba(23, 109, 249, 0.2)',
        textColor: '#176DF9',
        textBg: 'rgba(255, 255, 255, 0.9)'
      },
      hover: { 
        borderColor: '#1d4ed8', 
        innerSize: 28,
        outerSize: 56,
        glowColor: '#1d4ed8',
        bgColor: 'rgba(29, 78, 216, 0.3)',
        textColor: '#1d4ed8',
        textBg: 'rgba(255, 255, 255, 0.95)'
      }
    },
    dark: {
      default: { 
        borderColor: '#22d3ee', 
        innerSize: 18,
        outerSize: 36,
        glowColor: '#22d3ee',
        bgColor: 'rgba(34, 211, 238, 0.2)',
        textColor: '#22d3ee',
        textBg: 'rgba(0, 0, 0, 0.9)'
      },
      hover: { 
        borderColor: '#06b6d4', 
        innerSize: 28,
        outerSize: 56,
        glowColor: '#06b6d4',
        bgColor: 'rgba(6, 182, 212, 0.3)',
        textColor: '#06b6d4',
        textBg: 'rgba(0, 0, 0, 0.95)'
      }
    },
    synthwave: {
      default: { 
        borderColor: '#ff7edb', 
        innerSize: 18,
        outerSize: 36,
        glowColor: '#ff7edb',
        bgColor: 'rgba(255, 126, 219, 0.2)',
        textColor: '#ff7edb',
        textBg: 'rgba(20, 5, 30, 0.9)'
      },
      hover: { 
        borderColor: '#42d6ff', 
        innerSize: 28,
        outerSize: 56,
        glowColor: '#42d6ff',
        bgColor: 'rgba(66, 214, 255, 0.3)',
        textColor: '#42d6ff',
        textBg: 'rgba(20, 5, 30, 0.95)'
      }
    },
    neon: {
      default: { 
        borderColor: '#22d3ee', 
        innerSize: 18,
        outerSize: 36,
        glowColor: '#22d3ee',
        bgColor: 'rgba(34, 211, 238, 0.2)',
        textColor: '#22d3ee',
        textBg: 'rgba(0, 0, 0, 0.9)'
      },
      garden: {
borderColor: '#000',
bgColor:'#000'
      },
      hover: { 
        borderColor: '#c026d3', 
        innerSize: 28,
        outerSize: 56,
        glowColor: '#c026d3',
        bgColor: 'rgba(192, 38, 211, 0.3)',
        textColor: '#c026d3',
        textBg: 'rgba(0, 0, 0, 0.95)'
      }
    }
  };

  // Smooth cursor movement using requestAnimationFrame
  const updateCursorPosition = () => {
    if (cursorRef.current && ringRef.current) {
      const { x, y } = lastPosition.current;
      
      // Inner cursor follows immediately
      cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      
      // Outer ring follows with slight delay for smooth effect
      const ringX = lerp(parseFloat(ringRef.current.style.transform.split('(')[1].split('px')[0]) || x, x, 0.2);
      const ringY = lerp(parseFloat(ringRef.current.style.transform.split(', ')[1].split('px')[0]) || y, y, 0.2);
      ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
    }
    
    animationFrameId.current = requestAnimationFrame(updateCursorPosition);
  };

  // Linear interpolation for smooth movement
  const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end;
  };

  useEffect(() => {
    const moveCursor = (e) => {
      lastPosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setCursorVariant('hover');
    const handleHoverEnd = () => setCursorVariant('default');

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(updateCursorPosition);

    document.addEventListener('mousemove', moveCursor);

    // Watch for hoverable elements
    const hoverables = document.querySelectorAll(
      'a, button, [data-cursor-hover], input, textarea, select'
    );

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      document.removeEventListener('mousemove', moveCursor);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  const currentTheme = cursorThemes[theme] || cursorThemes.dark;
  const cursorStyle = currentTheme[cursorVariant];

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: `${cursorStyle.innerSize}px`,
          height: `${cursorStyle.innerSize}px`,
          backgroundColor: cursorStyle.bgColor,
          border: `2px solid ${cursorStyle.borderColor}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(0, 0)',
          transition: `
            width 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28),
            height 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28),
            background-color 0.2s ease,
            border-color 0.2s ease
          `,
          boxShadow: `
            0 0 ${cursorStyle.innerSize}px ${cursorStyle.glowColor}40,
            0 0 ${cursorStyle.innerSize * 1.5}px ${cursorStyle.glowColor}20,
            inset 0 0 ${cursorStyle.innerSize * 0.3}px ${cursorStyle.glowColor}30
          `,
          backdropFilter: 'blur(1px)',
          mixBlendMode: theme === 'light' ? 'multiply' : 'screen',
          willChange: 'transform'
        }}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: `${cursorStyle.outerSize}px`,
          height: `${cursorStyle.outerSize}px`,
          border: `1px solid ${cursorStyle.borderColor}60`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(0, 0)',
          transition: `
            width 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28),
            height 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28),
            border-color 0.3s ease
          `,
          opacity: cursorVariant === 'hover' ? 0.8 : 0.4,
          animation: 'ring-pulse 3s infinite ease-in-out',
          willChange: 'transform'
        }}
      />

         <style>{`
  @keyframes ring-pulse {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.2;
    }
  }

  * {
    cursor: none !important;
  }
`}</style>
    </>
  );
}