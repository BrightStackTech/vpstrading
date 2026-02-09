import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaEnvelope, FaSearch, FaPhoneAlt, FaWhatsapp, FaComments, FaStream } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { contactDetails } from "../data/contactdetails";
import TabsMenu from "./TabsMenu";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [tabsMenuOpen, setTabsMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  // const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const navLinks = [
  //   { name: "Home", path: "/" },
  //   { name: "Products", path: "/products" },
  //   { name: "About Us", path: "/about" },
  //   { name: "Contact Us", path: "/contact" },
  // ];

  // const isActive = (path: string) => location.pathname === path;

  const handleTabsMenuToggle = () => {
    setTabsMenuOpen(!tabsMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 shadow-lg ${
        scrolled ? "bg-gray-100 dark:bg-gray-900 pt-3 md:pt-2 pb-3" : "bg-gray-100 dark:bg-gray-900 pt-6 md:pt-4 pb-6"
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
                VPS General Trading LLC
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

          {/* Desktop Right Side - Navigation, Search, Contact Info + Theme Toggle */}
          <div className="hidden md:hidden lg:block lg:flex items-center space-x-4">
            {/* Search Bar - Expandable */}
            <div ref={searchRef} className="relative">
              <AnimatePresence>
                {searchExpanded ? (
                  <motion.div
                    initial={{ width: 40, opacity: 0 }}
                    animate={{ width: 256, opacity: 1 }}
                    exit={{ width: 40, opacity: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 30,
                      opacity: { duration: 0.2 }
                    }}
                    className="relative bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 rounded-lg overflow-hidden"
                  >
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
                      autoFocus
                      className="w-full pl-9 pr-4 py-2 rounded-lg bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                    />
                  </motion.div>
                ) : (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSearchExpanded(true)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none hover:cursor-pointer transition-colors"
                    aria-label="Search"
                  >
                    <FaSearch size={16} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Phone Button with Tooltip */}
            <div className="relative group">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${contactDetails.phone}`}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none hover:cursor-pointer transition-colors"
                aria-label="Call us"
              >
                <FaPhoneAlt size={16} />
              </motion.a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {contactDetails.phoneDisplay}
              </div>
            </div>

            {/* Email Button with Tooltip */}
            <div className="relative group">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${contactDetails.email}`}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none hover:cursor-pointer transition-colors"
                aria-label="Email us"
              >
                <FaEnvelope size={16} />
              </motion.a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {contactDetails.email}
              </div>
            </div>

            {/* WhatsApp Button with Tooltip */}
            <div className="relative group">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${contactDetails.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 focus:outline-none hover:cursor-pointer transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </motion.a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                WhatsApp: {contactDetails.phoneDisplay}
              </div>
            </div>

            {/* Chat Button - Redirects to Contact Page */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none hover:cursor-pointer transition-colors"
              aria-label="Contact us"
            >
              <FaComments size={16} />
            </motion.button>

            {/* 3 Lines Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTabsMenuToggle}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none hover:cursor-pointer transition-colors"
              aria-label="Menu"
            >
              <FaStream size={16} />
            </motion.button>

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

      {/* Tabs Menu Overlay */}
      <TabsMenu isOpen={tabsMenuOpen} onClose={() => setTabsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;
