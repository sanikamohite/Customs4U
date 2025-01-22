import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-gaming-dark p-8 rounded-lg border border-gaming-primary">
        <div>
          <h2 className="mt-6 text-center text-3xl font-gaming text-gaming-primary">
            Login to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gaming-light">
            Or{' '}
            <Link to="/signup" className="text-gaming-secondary hover:text-gaming-primary">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gaming-primary bg-black placeholder-gray-500 text-gaming-light focus:outline-none focus:ring-gaming-secondary focus:border-gaming-secondary focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gaming-primary bg-black placeholder-gray-500 text-gaming-light focus:outline-none focus:ring-gaming-secondary focus:border-gaming-secondary focus:z-10 sm:text-sm"
                placeholder="Password"
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
                className="h-4 w-4 text-gaming-primary focus:ring-gaming-secondary border-gaming-primary rounded bg-black"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gaming-light">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-gaming-secondary hover:text-gaming-primary">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gaming-primary hover:bg-gaming-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gaming-secondary"
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
