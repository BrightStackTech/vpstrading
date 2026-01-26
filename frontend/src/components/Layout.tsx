import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import MobileSidebar from './MobileSidebar';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col transition-colors">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <main className="flex-grow pt-20 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default Layout;
