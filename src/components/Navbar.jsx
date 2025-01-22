import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gaming-dark border-b border-gaming-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="font-gaming text-2xl text-gaming-primary">Customs4U</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/games" className="text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-sm font-medium">
                  Games
                </Link>
                <Link to="/tournaments" className="text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-sm font-medium">
                  Tournaments
                </Link>
                <Link to="/bgmi-customs" className="text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-sm font-medium">
                  BGMI Customs
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/login" className="text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link to="/signup" className="bg-gaming-primary text-white hover:bg-gaming-secondary px-4 py-2 rounded-md text-sm font-medium">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gaming-light hover:text-gaming-primary focus:outline-none"
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
            <Link to="/games" className="block text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-base font-medium">
              Games
            </Link>
            <Link to="/tournaments" className="block text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-base font-medium">
              Tournaments
            </Link>
            <Link to="/bgmi-customs" className="block text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-base font-medium">
              BGMI Customs
            </Link>
            <Link to="/login" className="block text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            <Link to="/signup" className="block text-gaming-light hover:text-gaming-secondary px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
