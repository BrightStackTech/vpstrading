import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaEnvelope, FaSearch, FaPhoneAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { contactDetails } from "../data/contactdetails";

interface HomePageNavbarProps {
  onMenuClick: () => void;
}

const HomePageNavbar: React.FC<HomePageNavbarProps> = ({ onMenuClick }) => {
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled ? "py-3" : "py-3"
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`flex items-center space-x-3 transition-all duration-500 ${
              scrolled 
                ? "" 
                : "bg-black/20 backdrop-blur-md rounded-2xl px-4 py-3"
            }`}>
              <motion.div
                animate={{ scale: scrolled ? 1 : 1.1 }}
                transition={{ duration: 0.3 }}
                className={`${
                  scrolled ? "w-10 h-10 md:w-12 md:h-12" : "w-12 h-12 md:w-14 md:h-14"
                } bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl shadow-lg flex items-center justify-center text-white transition-all duration-500`}
              >
                <img
                  src="https://res.cloudinary.com/domckasfk/image/upload/v1769429221/vps_logo_pqff1u.png"
                  alt="VPS General Trading LLC Logo"
                  className="relative w-full h-full rounded-xl"
                />
              </motion.div>
              <div className="flex flex-col">
                {scrolled ? (
                  <>
                    <span className="text-xl md:text-2xl font-display font-bold text-slate-800 dark:text-white leading-none transition-all duration-500">
                      VPS{" "}
                      <span className="text-primary-600 dark:text-primary-400">
                        General Trading LLC
                      </span>
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wider mt-1 transition-all duration-500">
                      EXCELLENCE DELIVERED
                    </span>
                  </>
                ) : (
                  <>
                    {/* Mobile: Two lines */}
                    <span className="block lg:hidden text-2xl font-display font-bold text-white drop-shadow-lg leading-tight transition-all duration-500">
                      VPS <span className="text-primary-400">General</span>
                    </span>
                    <span className="block lg:hidden text-2xl font-display font-bold text-primary-400 drop-shadow-lg leading-tight transition-all duration-500">
                      Trading LLC
                    </span>
                    
                    {/* Desktop: Single line */}
                    <span className="hidden lg:block text-2xl md:text-3xl font-display font-bold text-white drop-shadow-lg leading-none transition-all duration-500">
                      VPS <span className="text-primary-400">General Trading LLC</span>
                    </span>
                    
                    <span className="text-xs text-white/90 font-medium tracking-wider mt-1 transition-all duration-500">
                      EXCELLENCE DELIVERED
                    </span>
                  </>
                )}
              </div>
            </div>
          </Link>

          {/* Mobile Controls - Theme Toggle + Hamburger */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Theme Toggle - Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full shadow-md border bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-primary-600 dark:text-yellow-400 flex items-center justify-center focus:outline-none hover:cursor-pointer transition-all duration-500"
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
              className={`w-10 h-10 rounded-full shadow-md border flex items-center justify-center focus:outline-none hover:cursor-pointer transition-all duration-500 ${
                scrolled
                  ? "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-primary-600 dark:text-primary-400"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-primary-600 dark:text-primary-400"
              }`}
              aria-label="Open menu"
            >
              <FaBars size={18} />
            </motion.button>
          </div>

          {/* Desktop Right Side - Contact Info + Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone */}
            <a 
              href={`tel:${contactDetails.phone}`}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-md border transition-all duration-500 ${
                scrolled
                  ? "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
            >
              <FaPhoneAlt size={14} />
              <span className="text-sm font-medium">{contactDetails.phoneDisplay}</span>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${contactDetails.email}`}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-md border transition-all duration-500 ${
                scrolled
                  ? "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
            >
              <FaEnvelope size={14} />
              <span className="text-sm font-medium">{contactDetails.email}</span>
            </a>

            {/* Theme Toggle - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full shadow-md border flex items-center justify-center focus:outline-none hover:cursor-pointer transition-all duration-500 ${
                scrolled
                  ? "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-primary-600 dark:text-yellow-400"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-primary-600 dark:text-yellow-400"
              }`}
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
          <div className={`hidden lg:block
          ${scrolled ? 'border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md' : 'border-white/20 bg-transparent'}
      transition-all duration-500 bg-transparent`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Navigation Tabs - Left */}
            <div className={`flex items-center space-x-6 shadow-md border rounded-full px-8 py-2 transition-all duration-500 ${
              scrolled
                ? "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700"
                : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700"
            }`}>
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
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
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
            <div className="relative w-64 shadow-md border rounded-lg transition-all duration-500 bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-slate-400" />
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
                className="w-full pl-9 pr-4 py-2 rounded-lg border-none text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all bg-transparent text-slate-900 dark:text-white placeholder-slate-400"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomePageNavbar;
