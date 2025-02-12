import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUpWithEmail, signInWithGoogle } from '../firebase/auth';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { serverTimestamp } from 'firebase/firestore';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const { user, error: signUpError } = await signUpWithEmail(
        formData.email,
        formData.password,
        formData.username
      );

      if (signUpError) {
        throw new Error(signUpError);
      }

      // Create user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: formData.username,
        email: user.email,
        createdAt: serverTimestamp(),
        uid: user.uid,
        role: 'user'
      });

      // Signup successful
      toast.success('Signup successful!');
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);
    try {
      const { user, error: googleError } = await signInWithGoogle();
      if (googleError) {
        throw new Error(googleError);
      }

      // Create/update user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
        uid: user.uid,
        role: 'user'
      }, { merge: true });

      toast.success('Signed in with Google successfully!');
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl border border-blue-400/30 shadow-lg backdrop-blur-sm">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-blue-400">
            Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Sign in
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
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-blue-400/30 bg-gray-800/50 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors sm:text-sm"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-blue-400/30 bg-gray-800/50 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors sm:text-sm"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
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
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full flex items-center justify-center py-2.5 px-4 border border-blue-400/30 rounded-lg text-sm font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              Sign up with Google
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
