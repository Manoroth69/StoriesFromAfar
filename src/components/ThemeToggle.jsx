// Importăm câteva iconițe din lucide-react pentru a reprezenta fiecare temă în UI
import { Sun, Moon, Stars, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Adăugăm animații fluide
import { useTheme } from "../context/ThemeContext";

// Componenta principală care oferă un dropdown de selecție pentru temă
const ThemeToggle = () => {
  // Obținem tema curentă și funcția care o poate schimba din context
  const { theme, toggleTheme } = useTheme();

  // Definim opțiunile disponibile pentru temă, fiecare cu nume, etichetă, icon și culoare
  const themeOptions = [
    {
      name: "light",
      label: "Light",
      icon: <Sun className="w-4 h-4" />,
      color: "text-amber-500",
      animation: { rotate: 20, scale: 1.1 } // Animatie specială pentru soare
    },
    {
      name: "dark",
      label: "Dark",
      icon: <Moon className="w-4 h-4" />,
      color: "text-indigo-400",
      animation: { rotate: -15, scale: 1.1 } // Lună oscilantă
    },
    {
      name: "synthwave",
      label: "Synthwave",
      icon: <Stars className="w-4 h-4" />,
      color: "text-purple-500",
      animation: { rotate: 0, scale: [1, 1.2, 1] } // Pulsare stele
    },
    {
      name: "neon",
      label: "Neon",
      icon: <Zap className="w-4 h-4" />,
      color: "text-cyan-400",
      animation: {
        rotate: [0, 10, -10, 0], // Scânteiere electrică
        scale: [1, 1.3, 1]
      }
    }
  ];

  return (
    // Wrapper-ul dropdown-ului, aliniat spre colțul din dreapta
    <div className="dropdown dropdown-end">
      {/* Butonul principal care afișează iconița temei active */}
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
          ) : (
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
          )}
        </AnimatePresence>
      </motion.div>

      {/* Meniul dropdown care apare când utilizatorul dă click pe iconiță */}
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
              {/* Iconița temei din listă cu animație specială */}
              <motion.span
                className={`mr-2 ${option.color}`}
                animate={theme === option.name ? option.animation : {}}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              >
                {option.icon}
              </motion.span>

              {/* Eticheta cu numele temei */}
              <span>{option.label}</span>

              {/* Indicator animat pentru tema activă */}
              <AnimatePresence>
                {theme === option.name && (
                  <motion.span
                    className="ml-auto w-2 h-2 rounded-full bg-current"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { repeat: Infinity, duration: 1.5 }
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