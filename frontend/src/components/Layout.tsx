import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HomePageNavbar from './HomePageNavbar';
import Footer from './Footer';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import MobileSidebar from './MobileSidebar';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col transition-colors">
      {isHomePage ? (
        <HomePageNavbar onMenuClick={() => setIsSidebarOpen(true)} />
      ) : (
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      )}
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-20 md:pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default Layout;
