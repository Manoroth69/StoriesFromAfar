import { Sun, Moon, Stars, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Theme options data
  const themeOptions = [
    {
      name: "light",
      label: "Light",
      icon: <Sun className="w-4 h-4" />,
      color: "text-amber-500"
    },
    {
      name: "dark",
      label: "Dark",
      icon: <Moon className="w-4 h-4" />,
      color: "text-indigo-400"
    },
    {
      name: "synthwave",
      label: "Synthwave",
      icon: <Stars className="w-4 h-4" />,
      color: "text-purple-500"
    },
    {
      name: "neon",  // New theme
      label: "Neon",
      icon: <Zap className="w-4 h-4" />,
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="dropdown dropdown-end">
      {/* Toggle Button */}
      <div tabIndex={0} className="btn btn-ghost btn-circle">
        {theme === "light" ? (
          <Sun className="w-5 h-5 text-amber-500" />
        ) : theme === "dark" ? (
          <Moon className="w-5 h-5 text-indigo-400" />
        ) : theme === "synthwave" ? (
          <Stars className="w-5 h-5 text-purple-500" />
        ) : (
          <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
        )}
      </div>

      {/* Dropdown Menu */}
      <ul className="dropdown-content menu p-2 shadow-lg bg-base-200 rounded-box w-40 z-[1]">
        {themeOptions.map((option) => (
          <li key={option.name}>
            <button
              onClick={() => toggleTheme(option.name)}
              className={`flex items-center ${theme === option.name ? 'active' : ''}`}
            >
              <span className={`mr-2 ${option.color}`}>
                {option.icon}
              </span>
              <span>{option.label}</span>
              {theme === option.name && (
                <span className="ml-auto w-2 h-2 rounded-full bg-current animate-pulse" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeToggle;