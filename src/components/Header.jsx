import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MagneticLink from "./MagneticLink";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, themeConfig } = useTheme();

  // Enhanced animations with smoother easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        ease: [0.16, 1, 0.3, 1] // Custom easing curve
      }
    }
  };

  const itemVariants = {
    hidden: { y: -25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5 // Lighter spring
      }
    }
  };

  // Smoother mobile menu animation
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1] // Smoother easing
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const navLinks = [
    { href: "#home", text: "Home", offset: 0 },
    { href: "#stories", text: "Stories", offset: 80 }, // 80px offset from top
     { href: "#generator", text: "Story Generator", offset: 80 },
    { href: "#donate", text: "Support", offset: 80 },
    { href: "#about", text: "About", offset: 80 },

  ];

  // Theme-specific styles
  const headerStyles = {
    light: {
      bg: "bg-white/90 backdrop-blur-md",
      border: "border-gray-200",
      logo: "from-blue-600 to-indigo-600"
    },
    dark: {
      bg: "bg-gray-900/90 backdrop-blur-lg",
      border: "border-gray-700",
      logo: "from-blue-400 to-indigo-500"
    },
    synthwave: {
      bg: "bg-[#1a103d]/95 backdrop-blur-xl",
      border: "border-[#ff7edb]/30",
      logo: "from-[#ff7edb] to-[#42d6ff]"
    },
    neon: {
      bg: "bg-[#0f172a]/95 backdrop-blur-xl",
      border: "border-[#22d3ee]/40",
      logo: "from-[#22d3ee] to-[#c026d3]"
    }
  };

  // Smooth scroll function with offset
  const smoothScroll = (href, offset = 0) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Add scroll padding to all sections
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      [id] {
        scroll-margin-top: 100px; /* Space above each section */
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5
      }}
      className={`${headerStyles[theme].bg} ${headerStyles[theme].border} sticky top-0 z-50 border-b py-3 shadow-sm`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex items-center"
          >
            <MagneticLink
              onClick={() => smoothScroll("#home")}
              className={`text-2xl font-bold bg-gradient-to-r ${headerStyles[theme].logo} bg-clip-text text-transparent px-4 py-2 tracking-tight cursor-pointer`}
            >
              SynthStories.AI
            </MagneticLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-6"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <MagneticLink
                    onClick={() => smoothScroll(link.href, link.offset)}
                    className={`link ${themeConfig.text} hover:opacity-80 transition-all duration-300 px-4 py-2 font-semibold cursor-pointer`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      {link.text}
                    </motion.span>
                  </MagneticLink>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="ml-2">
                <ThemeToggle />
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="md:hidden flex items-center gap-4"
            >
              <ThemeToggle />

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn btn-ghost btn-circle p-2"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 180 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className={`md:hidden ${themeConfig.headerBg} ${themeConfig.headerBorder} border-t overflow-hidden`}
          >
            <motion.div
              variants={containerVariants}
              className="flex flex-col items-center px-2 py-8 space-y-6"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={`mobile-${link.href}`}
                  variants={itemVariants}
                  className="w-full text-center"
                >
                  <motion.button
                    onClick={() => smoothScroll(link.href, link.offset)}
                    className={`w-full px-4 py-3 rounded-lg ${themeConfig.text} hover:bg-opacity-20 hover:bg-current text-xl font-medium`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.text}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;