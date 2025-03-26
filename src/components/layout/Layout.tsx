
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AuthModal from '../authentication/AuthModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLoginClick={openAuthModal} />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Layout;
