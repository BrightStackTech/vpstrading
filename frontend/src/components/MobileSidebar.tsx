import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl overflow-y-auto z-[9999]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl shadow-lg flex items-center justify-center text-white">
                  <img
                    src="https://res.cloudinary.com/domckasfk/image/upload/v1769429221/vps_logo_pqff1u.png"
                    alt="VPS Logo"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    VPS Trading
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    EXCELLENCE DELIVERED
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <span className="font-medium">Theme</span>
                <div className="flex items-center space-x-2">
                  {isDarkMode ? (
                    <>
                      <FaMoon size={18} className="text-yellow-400" />
                      <span className="text-sm">Dark</span>
                    </>
                  ) : (
                    <>
                      <FaSun size={18} className="text-orange-500" />
                      <span className="text-sm">Light</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;