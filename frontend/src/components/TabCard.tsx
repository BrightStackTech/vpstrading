import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface TabCardProps {
  name: string;
  path: string;
  icon: IconType;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const TabCard: React.FC<TabCardProps> = ({ name, path, icon: Icon, description, isActive, onClick }) => {
  return (
    <Link to={path} onClick={onClick}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-md border transition-all duration-300 ${
          isActive
            ? 'bg-white/30 dark:bg-slate-800/50 border-primary-500 shadow-lg shadow-primary-500/20'
            : 'bg-white/20 dark:bg-slate-800/30 border-white/30 dark:border-slate-700/50 hover:bg-white/40 dark:hover:bg-slate-800/40'
        }`}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 ${
            isActive
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
              : 'bg-white/30 dark:bg-slate-700/30 text-slate-700 dark:text-slate-300'
          }`}>
            <Icon size={28} />
          </div>
          <div>
            <h3 className={`font-bold text-lg mb-1 transition-all duration-300 group-hover:-translate-y-1 ${
              isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-800 dark:text-white'
            }`}>
              {name}
            </h3>
            <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {description}
              </p>
            </div>
          </div>
        </div>
        {isActive && (
          <motion.div
            layoutId="active-tab-indicator"
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
            initial={false}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default TabCard;
