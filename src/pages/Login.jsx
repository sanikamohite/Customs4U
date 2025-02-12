import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmail, signInWithGoogle } from '../firebase/auth';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if user is already logged in
  if (user) {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { user, error: signInError } = await signInWithEmail(
        formData.email,
        formData.password
      );

      if (signInError) {
        throw new Error(signInError);
      }

      // Login successful
      toast.success('Login successful! Welcome back!');
      navigate('/');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const { user, error: googleError } = await signInWithGoogle();
      if (googleError) {
        throw new Error(googleError);
      }
      toast.success('Successfully signed in with Google!');
      navigate('/');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
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
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg" role="alert">
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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

          <div className="space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center py-2.5 px-4 border border-blue-400/30 rounded-lg text-sm font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
