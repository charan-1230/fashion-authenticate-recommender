
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="page-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AUTHENTIC</h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Revolutionizing fashion with cutting-edge authentication technology and personalized style recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Features</h4>
            <ul className="space-y-2">
              <li><Link to="/authenticate" className="text-sm text-gray-500 hover:text-black transition-colors">Authentication</Link></li>
              <li><Link to="/recommend" className="text-sm text-gray-500 hover:text-black transition-colors">Style Recommendations</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Virtual Try-On</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Smart Mirror</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Press</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} AUTHENTIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
