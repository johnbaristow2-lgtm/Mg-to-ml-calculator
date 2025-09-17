
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-gray border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="/about" className="text-gray-500 hover:text-gray-900">About</Link>
            <Link to="/blog" className="text-gray-500 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900">Disclaimer</Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">&copy; {new Date().getFullYear()} mg-to-ml.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
