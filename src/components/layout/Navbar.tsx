
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-medium"
          >
            <span className="text-gradient font-display">AUTHENTIC</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium underline-animation">Home</Link>
            <Link to="/authenticate" className="text-sm font-medium underline-animation">Authenticate</Link>
            <Link to="/recommend" className="text-sm font-medium underline-animation">Style Recommendations</Link>
            <Link to="/about" className="text-sm font-medium underline-animation">About</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={20} />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={onLoginClick}
            >
              <User size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md overflow-hidden animate-slide-down">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/authenticate" 
              className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Authenticate
            </Link>
            <Link 
              to="/recommend" 
              className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Style Recommendations
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex items-center space-x-4 px-4 pt-4 border-t">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLoginClick && onLoginClick();
                }}
              >
                <User size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingBag size={20} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
