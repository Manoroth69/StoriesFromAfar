import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MagneticLink from "./MagneticLink";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, themeConfig } = useTheme();
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState("login"); // 'login' or 'register'
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Enhanced animations with smoother easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        ease: [0.16, 1, 0.3, 1]
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
        mass: 0.5
      }
    }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
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

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const navLinks = [
    { path: "/", text: "Home", id: "home" },
    { path: "/freshnews", text: "Fresh News", id: "freshnews" },
    { path: "/donate", text: "Support", id: "donate" },
    { path: "/about", text: "About", id: "about" },
    { path: "/subscribe", text: "Subscribe", id: "subscribe" },
  ];

  const categories = [
    { path: "/technology", text: "Technology", id: "tech" },
    { path: "/business", text: "Business", id: "business" },
    { path: "/politics", text: "Politics", id: "politics" },
    { path: "/science", text: "Science", id: "science" },
    { path: "/health", text: "Health", id: "health" },
    { path: "/entertainment", text: "Entertainment", id: "entertainment" },
    { path: "/sports", text: "Sports", id: "sports" },
  ];

  const headerStyles = {
  light: {
    bg: "bg-white/95 backdrop-blur-md",       // bump opacity for solid bg
    border: "border-gray-300",                // darker border, more visible
    logo: "from-blue-700 to-indigo-700",     // deeper blues for better pop
    dropdown: "bg-white border-gray-300"     // dropdown visible and crisp
  },
  dark: {
    bg: "bg-gray-900/98 backdrop-blur-lg",   // nearly opaque bg so text stands out
    border: "border-gray-600",                // lighter border for contrast
    logo: "from-blue-500 to-indigo-600",     // brighter neon-ish blues
    dropdown: "bg-gray-800 border-gray-600"  // clean and visible dropdown
  },
  synthwave: {
    bg: "bg-[#1a103d]/100 backdrop-blur-xl",       // full opacity for max contrast
    border: "border-[#ff7edb]",                      // solid bright border, no transparency
    logo: "from-[#ff55b1] to-[#3ac9ff]",             // brighter gradient, neon pop
    dropdown: "bg-[#1a103d] border-[#ff7edb]"       // crisp dropdown border
  },
  neon: {
    bg: "bg-[#0f172a]/100 backdrop-blur-xl",         // full opacity neon blue bg
    border: "border-[#22d3ee]",                        // brighter border
    logo: "from-[#22d3ee] to-[#d6336c]",              // tweak gradient for more punch
    dropdown: "bg-[#0f172a] border-[#22d3ee]"         // clear neon dropdown border
  },
   garden: {
 bg: 'bg-[#e9f7ef]',                   // Soft green background (like fresh leaves)
  text: 'text-[#1a3e2f]',                // Dark green text (forest shade)
  accentText: 'from-[#4CAF50] to-[#2E7D32]',  // Green gradient (lime to emerald)
  
  cardBg: 'bg-[#f8fbf9]',                // Off-white with subtle green tint
  cardBorder: 'border-[#a5d6a7]',        // Light green border (pale leaf color)
  
  buttonPrimary: 'bg-gradient-to-r from-[#66bb6a] to-[#43a047] text-white', // Vibrant green gradient
  buttonSecondary: 'border-[#4caf50] text-[#2e7d32]', // Natural green outline
  buttonControls: 'border border-[#81c784] text-[#2e7d32]' // Softer green controls
}
};

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
      className={`${headerStyles[theme].bg} ${headerStyles[theme].border} sticky top-0 z-50 border-b  py-3 shadow-sm  `}
    >
      <div className="relative z-10 max-w-[1480px]  mx-auto   sm:px-6  w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex items-center"
          >
           <Link 
  to="/" 
  className={`text-2xl font-bold bg-gradient-to-r ${headerStyles[theme].logo} bg-clip-text text-transparent  py-2 tracking-tight cursor-pointer`}
>
  <MagneticLink>
    GroundedViews
    
  </MagneticLink>
</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-6"
            >
              {navLinks.slice(0, 2).map((link) => (
                <motion.div key={link.id} variants={itemVariants}>
                  <Link to={link.path}>
                    <MagneticLink
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
                  </Link>
                </motion.div>
              ))}

              {/* Categories Dropdown */}
              <motion.div 
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <MagneticLink
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className={`link ${themeConfig.text} hover:opacity-80 transition-all duration-300 px-4 py-2 font-semibold cursor-pointer flex items-center gap-1`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      Categories
                    </motion.span>
                    <motion.span
                      animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </div>
                </MagneticLink>

                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ${headerStyles[theme].dropdown} border ${headerStyles[theme].border} z-50`}
                    >
                      <div className="px-3 py-3">
                        {categories.map((category) => (
                          <Link to={category.path} key={category.id}>
                            <motion.div
                              className={`block px-4 py-2 text-sm ${themeConfig.text} hover:bg-opacity-20 hover:bg-current rounded-md`}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              onClick={() => {
                                setIsCategoriesOpen(false);
                              }}
                            >
                              {category.text}
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.slice(2).map((link) => (
                <motion.div key={link.id} variants={itemVariants}>
                  <Link to={link.path}>
                    <MagneticLink
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
                  </Link>
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
            className={`md:hidden ${themeConfig.headerBg} ${themeConfig.headerBorder} overflow-hidden`}
          >
            <motion.div
              variants={containerVariants}
              className="flex flex-col items-center px-2 py-8 space-y-6"
            >
              {navLinks.slice(0, 2).map((link) => (
                <motion.div
                  key={`mobile-${link.id}`}
                  variants={itemVariants}
                  className="w-full text-center"
                >
                  <Link to={link.path}>
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-full px-4 py-3 rounded-lg ${themeConfig.text} hover:bg-opacity-20 hover:bg-current text-xl font-medium`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.text}
                    </motion.button>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Categories Dropdown */}
              <motion.div 
                variants={itemVariants}
                className="w-full text-center"
              >
                <motion.button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className={`w-full px-4 py-3 rounded-lg ${themeConfig.text} hover:bg-opacity-20 hover:bg-current text-xl font-medium flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Categories</span>
                  <motion.span
                    animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: { 
                          opacity: 1,
                          height: "auto",
                          transition: { 
                            staggerChildren: 0.1,
                            when: "beforeChildren"
                          }
                        },
                        closed: { 
                          opacity: 0,
                          height: 0,
                          transition: { 
                            staggerChildren: 0.1,
                            staggerDirection: -1,
                            when: "afterChildren"
                          }
                        }
                      }}
                      className="w-full overflow-hidden"
                    >
                      <div className="pt-2 space-y-2">
                        {categories.map((category) => (
                          <motion.div
                            key={`mobile-${category.id}`}
                            variants={{
                              open: { 
                                opacity: 1,
                                y: 0,
                                transition: { 
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20
                                }
                              },
                              closed: { 
                                opacity: 0,
                                y: -10,
                                transition: { 
                                  duration: 0.2
                                }
                              }
                            }}
                          >
                            <Link to={category.path}>
                              <motion.button
                                onClick={() => {
                                  setIsCategoriesOpen(false);
                                  setIsMenuOpen(false);
                                }}
                                className={`w-full px-4 py-2 rounded-lg ${themeConfig.text} hover:bg-opacity-20 hover:bg-current text-lg font-medium`}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {category.text}
                              </motion.button>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.slice(2).map((link) => (
                <motion.div
                  key={`mobile-${link.id}`}
                  variants={itemVariants}
                  className="w-full text-center"
                >
                  <Link to={link.path}>
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-full px-4 py-3 rounded-lg ${themeConfig.text} hover:bg-opacity-20 hover:bg-current text-xl font-medium`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.text}
                    </motion.button>
                  </Link>
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