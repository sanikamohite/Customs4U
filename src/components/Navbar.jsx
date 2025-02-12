import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../firebase/auth';
import ProfileDropdown from './ProfileDropdown';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOutUser();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-blue-400/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-16 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>
            
          <div className="hidden md:block flex-1">
            <div className="ml-6 flex items-baseline justify-end space-x-4">
              <Link to="/aboutUs" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
              {user && (
                <Link to="/record" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  Record Audio
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {!user ? (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </Link>
                  <Link to="/signup" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Sign Up
                  </Link>
                </>
              ) : (
                <ProfileDropdown user={user} />
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
            <Link to="/aboutUs" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <Link to="/contact" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </Link>
            {!user ? (
              <>
                <Link to="/login" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
                <Link to="/signup" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/record" className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
                  Record Audio
                </Link>
                <div className="px-3 py-2">
                  <ProfileDropdown user={user} />
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
