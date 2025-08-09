import { Sun, Moon, Stars, Zap, Gamepad2, Sprout } from "lucide-react"; // Added Gamepad2 for cyberpunk
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const themeOptions = [
    {
      name: "light",
      label: "Light",
      icon: <Sun className="w-4 h-4" />,
      color: "text-amber-500",
      animation: { rotate: 20, scale: 1.1 }
    },
    {
      name: "dark",
      label: "Dark",
      icon: <Moon className="w-4 h-4" />,
      color: "text-indigo-400",
      animation: { rotate: -15, scale: 1.1 }
    },
    {
      name: "synthwave",
      label: "Synthwave",
      icon: <Stars className="w-4 h-4" />,
      color: "text-purple-500",
      animation: { rotate: 0, scale: [1, 1.2, 1] }
    },
    {
      name: "neon",
      label: "Neon",
      icon: <Zap className="w-4 h-4" />,
      color: "text-cyan-400",
      animation: {
        rotate: [0, 10, -10, 0],
        scale: [1, 1.3, 1]
      }
    },
    // New Cyberpunk theme option
   {
  name: "garden",
  label: "Garden",
  icon: <Sprout className="w-4 h-4 text-emerald-600" />, // Using plant sprout icon
  color: "text-emerald-600",
  animation: {
    y: [0, -3, 0], // Gentle up/down like swaying grass
    scale: [1, 1.03, 1], // Subtle growth pulse
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  },
  // Optional additional garden-themed props:
  decorations: {
    leafPattern: "bg-[url('/leaf-pattern.svg')]",
    flowerAccent: "before:content-['🌸']"
  }
}
  ];

  return (
    <div className="dropdown dropdown-end">
      <motion.div
        tabIndex={0}
        className="btn btn-ghost btn-circle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="light"
              initial={{ rotate: -20, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sun className="w-5 h-5 text-amber-500" />
            </motion.div>
          ) : theme === "dark" ? (
            <motion.div
              key="dark"
              initial={{ rotate: 15, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -15, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Moon className="w-5 h-5 text-indigo-400" />
            </motion.div>
          ) : theme === "synthwave" ? (
            <motion.div
              key="synthwave"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Stars className="w-5 h-5 text-purple-500" />
            </motion.div>
          ) : theme === "neon" ? (
            <motion.div
              key="neon"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 10
                }
              }}
              exit={{ scale: 0.8, rotate: 10 }}
              whileHover={{ scale: 1.2 }}
            >
              <Zap className="w-5 h-5 text-cyan-400" />
            </motion.div>
          ) : (
            // Cyberpunk icon animation
            <motion.div
              key="cyberpunk"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 15
                }
              }}
              exit={{ scale: 0.8, rotate: 10 }}
              whileHover={{
                scale: 1.2,
                rotate: [0, 5, -5, 0], // Glitch effect on hover
                transition: { duration: 0.5 }
              }}
            >
              <Sprout className="w-5 h-5 text-green-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.ul
        className="dropdown-content menu p-2 shadow-lg bg-base-200 rounded-box w-40 z-[1]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {themeOptions.map((option) => (
          <motion.li
            key={option.name}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.button
              onClick={() => toggleTheme(option.name)}
              className={`flex items-center ${theme === option.name ? 'active' : ''}`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`mr-2 ${option.color}`}
                animate={theme === option.name ? option.animation : {}}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              >
                {option.icon}
              </motion.span>
              <span>{option.label}</span>
              <AnimatePresence>
                {theme === option.name && (
                  <motion.span
                    className="ml-auto w-2 h-2 rounded-full bg-current"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { 
                        repeat: Infinity, 
                        duration: 1.5,
                        // Cyberpunk-specific pulse for active indicator
                        ...(option.name === 'cyberpunk' && {
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.7, 1]
                        })
                      }
                    }}
                    exit={{ scale: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ThemeToggle;