import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';

const routePrefetchers: Record<string, () => Promise<unknown>> = {
  '/': () => import('../pages/Home'),
  '/about': () => import('../pages/About'),
  '/courses': () => import('../pages/Courses'),
  '/gallery': () => import('../pages/Gallery'),
  '/blog': () => import('../pages/Blog'),
  '/contact': () => import('../pages/Contact'),
};

const prefetchRoute = (path: string) => {
  const prefetch = routePrefetchers[path];
  if (prefetch) prefetch();
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses & Fees' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog/News' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91-9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@defenceacademy.com</span>
            </div>
          </div>
          <div className="text-center mt-1 md:mt-0">
            <span className="text-yellow-400 font-semibold">Excellence in Defence Training Since 2010</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-blue-900" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Elite Defence Academy</h1>
                <p className="text-sm text-gray-600">Excellence Through Discipline</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => prefetchRoute(item.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => prefetchRoute(item.path)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 bg-yellow-500 text-blue-900 font-semibold rounded-md text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;