import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBox, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa';
import MobileSidebar from './MobileSidebar';

const MobileNavbar: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Products', path: '/products', icon: FaBox },
    { name: 'About', path: '/about', icon: FaInfoCircle },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                  active
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{item.name}</span>
                {active && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />
                )}
              </Link>
            );
          })}
          
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex flex-col items-center justify-center space-y-1 text-slate-600 dark:text-slate-400"
          >
            <FaBars size={20} />
            <span className="text-xs font-medium">Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;