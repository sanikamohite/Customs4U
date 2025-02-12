import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, we'll just check if the email and password are not empty
    if (formData.email && formData.password) {
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to home page
      navigate('/');
      window.location.reload(); // Reload to update navbar state
    } else {
      setError('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    setError(''); // Clear error when user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-900/50">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl border border-blue-400/30 shadow-lg backdrop-blur-sm">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-blue-400">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Or{' '}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
              create a new account
            </Link>
          </p>
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-blue-400/30 bg-gray-800/50 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors sm:text-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-blue-400/30 bg-gray-800/50 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors sm:text-sm"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-blue-400/30 rounded bg-gray-800/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 font-medium">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
