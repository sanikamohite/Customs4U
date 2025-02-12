import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../firebase/auth';
import { toast } from 'react-toastify';

const ProfileDropdown = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOutUser();
      toast.success('Successfully logged out!');
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error signing out. Please try again.');
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Profile Info */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-lg font-medium text-white">
            {(user?.displayName || user?.email || 'U')[0].toUpperCase()}
          </span>
        </div>
        <span className="hidden md:block text-gray-300">
          {user?.displayName || user?.email?.split('@')[0]}
        </span>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default ProfileDropdown;
