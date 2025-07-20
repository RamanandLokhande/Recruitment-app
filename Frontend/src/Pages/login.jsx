import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { useNavigate , Link  } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log("Google login clicked - Implement with Google Auth");
  };

  const handleLogin = () => {
    console.log("Main LOGIN button clicked");
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1581091012184-7f5efb160cde?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Login Box */}
      <div className="relative z-10 w-full max-w-md bg-white p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-90">
        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-blue-700">Nextintern</h1>
          <p className="text-sm text-gray-600">Where Skills Meet Opportunities</p>
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Email or Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center justify-between text-sm text-gray-400">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition"
        >
          <FaGoogle className="text-red-500 text-xl" />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </button>

        {/* Sign Up Prompt */}
      <p className="mt-6 text-sm text-center text-gray-600">
  New to Nextintern?{' '}
  <Link to="/signup" className="text-blue-700 font-semibold hover:underline">
    Join now
  </Link>
</p>
      </div>
    </div>
  );
}


