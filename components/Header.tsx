
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavIcon: React.FC = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3.25a3.25 3.25 0 00-3.25-3.25H9.25A3.25 3.25 0 006 13.75V17m6-10V6a2 2 0 00-2-2H9a2 2 0 00-2 2v1" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary";
  const activeNavLinkClasses = "bg-primary/10 text-primary";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <NavIcon />
              <span className="text-xl font-bold text-primary">mg-to-ml.com</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} end>Home</NavLink>
              <NavLink to="/calculator" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Calculator</NavLink>
              <NavLink to="/blog" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Blog</NavLink>
              <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Contact</NavLink>
            </nav>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} end onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/calculator" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} onClick={() => setIsOpen(false)}>Calculator</NavLink>
            <NavLink to="/blog" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/about" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
