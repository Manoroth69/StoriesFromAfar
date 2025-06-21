import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MagneticLink from "./MagneticLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#stories", text: "Stories" },
    { href: "#donate", text: "Support" }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="bg-base-100/80 backdrop-blur-lg border-b border-base-300 sticky top-0 z-50 py-3"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <MagneticLink
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              SynthStories.AI
            </MagneticLink>
          </motion.div>

          {/* Right side - Navigation + Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <MagneticLink
                    href={link.href}
                    className="link text-base-content hover:text-primary transition-colors duration-200"
                  >
                    {link.text}
                  </MagneticLink>
                </motion.div>
              ))}

              {/* Theme Switcher - Desktop */}
              <motion.div variants={itemVariants} className="ml-2">
                <ThemeToggle />
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="md:hidden flex items-center gap-4"
            >
              <ThemeToggle />

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn btn-ghost btn-circle"
                aria-label="Toggle menu"
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
            className="md:hidden bg-base-100/95 backdrop-blur-md border-t border-base-300 overflow-hidden"
          >
            <motion.div
              variants={containerVariants}
              className="flex flex-col items-center px-2 py-10 space-y-3"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={`mobile-${link.href}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MagneticLink
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base-content hover:bg-base-200 text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </MagneticLink>
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