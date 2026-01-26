import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl shadow-lg flex items-center justify-center text-white"
            >
              <span className="font-display font-bold text-xl md:text-2xl">
                V
              </span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold text-slate-800 dark:text-white leading-none">
                VPS{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  Trading
                </span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wider">
                EXCELLENCE DELIVERED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 bg-white/50 dark:bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 dark:border-white/10 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-2 py-1"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary-600 dark:text-yellow-400 focus:outline-none"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? "dark" : "light"}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {isDarkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-700 dark:text-white"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                    isActive(link.path)
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="font-medium text-lg">{link.name}</span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="mobile-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-primary-500"
                    />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
