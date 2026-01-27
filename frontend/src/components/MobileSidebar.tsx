import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSun, FaMoon, FaSearch, FaHome, FaShoppingCart, FaInfoCircle, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { contactDetails } from '../data/contactdetails';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const menuItems = [
    { icon: FaHome, name: 'Home', path: '/' },
    { icon: FaShoppingCart, name: 'Products', path: '/products' },
    { icon: FaInfoCircle, name: 'About Us', path: '/about' },
    { icon: FaEnvelope, name: 'Contact Us', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] block lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl z-[9999] block lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
              <Link to={`/`} onClick={onClose} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl shadow-lg flex items-center justify-center text-white">
                  <img
                    src="https://res.cloudinary.com/domckasfk/image/upload/v1769429221/vps_logo_pqff1u.png"
                    alt="VPS Logo"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    VPS General Trading LLC
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    EXCELLENCE DELIVERED
                  </p>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Search Bar */}
              <div className="p-6 pb-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                      onClose();
                    }
                  }}
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                />
              </div>
              </div>

              {/* Menu Items */}
              <div className="px-6 pb-6 space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-xl transition-colors font-medium flex items-center gap-2 ${
                      isActive
                        ? 'bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-400 backdrop-blur-sm border border-green-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {item.name}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    )}
                  </Link>
                );
              })}
              </div>

              {/* Theme Toggle */}
              <div className="p-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Appearance</span>
                  <button
                    onClick={toggleTheme}
                    className="relative w-24 h-8 rounded-full bg-slate-200 dark:bg-slate-700 p-0.5 flex items-center"
                  >
                    {/* Background track icons */}
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <FaSun size={12} className={`transition-colors ${!isDarkMode ? 'text-white' : 'text-slate-400'}`} />
                      <FaMoon size={12} className={`transition-colors ${isDarkMode ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    
                    {/* Sliding toggle button */}
                    <motion.div
                      animate={{ x: isDarkMode ? '32px' : '0' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="relative w-14 h-7 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full shadow-md flex items-center justify-center z-10"
                    >
                      {isDarkMode ? (
                        <FaMoon size={12} className="text-white" />
                      ) : (
                        <FaSun size={12} className="text-white" />
                      )}
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details - Fixed at Bottom */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 space-y-3 flex-shrink-0 bg-white dark:bg-slate-900">
              {/* Email */}
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>{contactDetails.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactDetails.phone}`}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <FaPhone className="w-4 h-4" />
                <span>{contactDetails.phoneDisplay}</span>
              </a>

              {/* WhatsApp (Second Phone) */}
              {/* <a
                href={contactDetails.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <FaPhone className="w-4 h-4" />
                <span>+{contactDetails.whatsapp.number}</span>
              </a> */}

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-2">
                {contactDetails.social?.facebook && (
                  <a
                    href={contactDetails.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                )}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                {contactDetails.social?.instagram && (
                  <a
                    href={contactDetails.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;