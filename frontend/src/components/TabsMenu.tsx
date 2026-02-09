import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBox, FaInfoCircle, FaEnvelope, FaTimes } from 'react-icons/fa';
import TabCard from './TabCard';

interface TabsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const TabsMenu: React.FC<TabsMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const tabs = [
    {
      name: "Home",
      path: "/",
      icon: FaHome,
      description: "Welcome page",
      fullDescription: "Your trusted FMCG partner delivering excellence in wholesale distribution across UAE and GCC markets"
    },
    {
      name: "Products",
      path: "/products",
      icon: FaBox,
      description: "Browse our catalog",
      fullDescription: "Discover 5000+ premium international products from world-renowned brands for your business needs"
    },
    {
      name: "About Us",
      path: "/about",
      icon: FaInfoCircle,
      description: "Learn more about us",
      fullDescription: "Over 10 years of excellence in FMCG distribution, serving 800+ partners with reliability and integrity"
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: FaEnvelope,
      description: "Get in touch",
      fullDescription: "Let's build a lasting partnership together - reach out to us for inquiries and business opportunities"
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Get current page description
  const getCurrentPageDescription = () => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    return currentTab ? currentTab.fullDescription : "Navigate to your destination and explore what VPS General Trading has to offer";
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[70] w-full max-w-5xl px-4"
          >
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/50 p-8">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <FaTimes size={18} />
              </motion.button>

              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                  VPS General Trading LLC
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {getCurrentPageDescription()}
                </p>
              </div>

              {/* Tab Cards Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {tabs.map((tab) => (
                  <motion.div
                    key={tab.path}
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        y: -30,
                        scale: 0.8
                      },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 24
                        }
                      }
                    }}
                  >
                    <TabCard
                      name={tab.name}
                      path={tab.path}
                      icon={tab.icon}
                      description={tab.description}
                      isActive={isActive(tab.path)}
                      onClick={onClose}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TabsMenu;
