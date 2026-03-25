import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  const location = useLocation();
  const isLearnPage = location.pathname.startsWith('/learn');

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      <Navbar />
      
      <main className={`flex-1 ${!isLearnPage ? 'pb-20' : ''}`}>
        <Outlet />
      </main>

      {!isLearnPage && <Footer />}
    </div>
  );
};

export default MainLayout;
