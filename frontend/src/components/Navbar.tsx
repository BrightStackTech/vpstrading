import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaEnvelope, FaSearch, FaPhoneAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { contactDetails } from "../data/contactdetails";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
        scrolled ? "bg-gray-100 dark:bg-gray-900 pt-3 md:pt-2 pb-3 md:pb-0" : "bg-gray-100 dark:bg-gray-900 pt-6 md:pt-4 pb-6 md:pb-0"
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl shadow-lg flex items-center justify-center text-white"
            >
              {/* <span className="font-display font-bold text-xl md:text-2xl">
                V
              </span> */}
                <img
                  src="https://res.cloudinary.com/domckasfk/image/upload/v1769429221/vps_logo_pqff1u.png"
                  alt="VPS General Trading LLC Logo"
                  className="relative w-full h-full rounded-xl"
                />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold text-slate-800 dark:text-white leading-none">
                VPS{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  General Trading LLC
                </span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wider mt-1">
                EXCELLENCE DELIVERED
              </span>
            </div>
          </Link>

          {/* Mobile Controls - Theme Toggle + Hamburger */}
          <div className="lg:hidden block md:block flex md:flex items-center space-x-3">
            {/* Theme Toggle - Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary-600 dark:text-yellow-400 focus:outline-none hover:cursor-pointer"
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

            {/* Hamburger Menu - Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuClick}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 focus:outline-none hover:cursor-pointer"
              aria-label="Open menu"
            >
              <FaBars size={18} />
            </motion.button>
          </div>

          {/* Desktop Right Side - Contact Info + Theme Toggle */}
          <div className="hidden md:hidden lg:block lg:flex items-center space-x-4">
            {/* Phone */}
            <a 
              href={`tel:${contactDetails.phone}`}
              className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FaPhoneAlt size={14} />
              <span className="text-sm font-medium">{contactDetails.phoneDisplay}</span>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${contactDetails.email}`}
              className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FaEnvelope size={14} />
              <span className="text-sm font-medium">{contactDetails.email}</span>
            </a>

            {/* Theme Toggle - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary-600 dark:text-yellow-400 focus:outline-none hover:cursor-pointer"
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
        </div>
      </div>

      {/* Child Navbar - Navigation + Search (Desktop Only) */}
      <div className="hidden md:hidden lg:block border-t border-white/20 dark:border-white/10 mt-4 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center py-3 ">
            {/* Navigation Tabs - Left */}
            <div className="flex items-center space-x-6 bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-full px-8 py-2 ">
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

            {/* Search Bar - Right */}
            <div className="relative w-64 bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-lg">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
