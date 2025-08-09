import { Link } from 'react-router-dom';

import { useTheme } from '../src/context/ThemeContext';

export const BackButton = () => {
  const { theme } = useTheme();

  return (
    <Link to="/" >
      <button className={`
        flex items-start justify-start
        font-bold py-3 px-6 rounded-lg
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]
        border-1
        bg-transparent
        relative overflow-hidden
        group
        z-0
        cursor-pointer
        mt-8 mx-auto
        /* Theme-adaptive colors */
        ${
          theme === 'synthwave'
            ? 'border-[#b780db] text-[#fdfdfd] hover:bg-[#b780db] hover:text-black'
            : theme === 'neon'
            ? 'border-[#00F5FF] text-[#ffffff] hover:bg-[#00F5FF] hover:text-black'
            : theme === 'dark'
            ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
            : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }
        /* Shadow effects */
        ${
          theme === 'synthwave'
            ? 'shadow-[0_0_10px_rgba(183,128,219,0.3)] hover:shadow-[0_0_20px_rgba(183,128,219,0.6)]'
            : theme === 'neon'
            ? 'shadow-[0_0_10px_rgba(0,245,255,0.3)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]'
            : 'shadow-sm hover:shadow-md'
        }
      `}>
        {/* Theme-adaptive gradient glow (only for synthwave/neon) */}
        {(theme === 'synthwave' || theme === 'neon') && (
          <span className={`
            absolute -inset-0.5 rounded-lg
            bg-gradient-to-r
            ${theme === 'synthwave' ? 'from-[#b780db] to-[#9D00FF]' : 'from-[#00F5FF] to-[#00C2C2]'}
            opacity-0 group-hover:opacity-50
            blur-sm
            transition-opacity duration-500
            z-[-1]
          `}/>
        )}

        {/* Button content */}
        <span className="relative flex items-center gap-2">
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </span>

        {/* Retro flicker effect (only for synthwave) */}
        {theme === 'synthwave' && (
          <span className={`
            absolute inset-0 rounded-lg
            bg-[length:5px_5px]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700
            pointer-events-none
            bg-[linear-gradient(90deg,transparent_50%,rgba(183,128,219,0.1)_50%)]
          `}/>
        )}
      </button>
    </Link>
  );
};
