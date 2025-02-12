import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <nav className="bg-gray-900 border-b border-blue-400/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img className="h-16 w-auto" src={logo} alt="Workflow" />
            </Link>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/analyze" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  Analyze Voice
                </Link>
                <Link to="/music" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  Music Library
                </Link>
                <Link to="/dashboard" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/aboutUs" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </Link>
                {isAuthenticated && (
                  <Link to="/record" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                    Record Audio
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </Link>
                  <Link to="/signup" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    window.location.reload();
                  }}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/analyze" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
              Analyze Voice
            </Link>
            <Link to="/music" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
              Music Library
            </Link>
            <Link to="/dashboard" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
              Dashboard
            </Link>
            <Link to="/login" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            <Link to="/signup" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </Link>
            {isAuthenticated && (
              <Link to="/record" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
                Record Audio
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
