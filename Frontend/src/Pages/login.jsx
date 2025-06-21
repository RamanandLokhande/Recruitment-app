import React from 'react';
import { FaGoogle, FaLinkedin } from "react-icons/fa";

export default function Login() {
  // Handler functions for login buttons
  const handleGoogleLogin = () => {
    console.log("Google login clicked - Implement with google");
    // TODO: Implement Google OAuth
  };

  const handleLinkedInLogin = () => {
    console.log("LinkedIn login clicked - Implement with linkdein");
    // TODO: Implement LinkedIn OAuth
  };

  const handleLogin = () => {
    console.log("Main LOGIN button clicked");
    // TODO: Handle main login logic
  };

  return (
    <div className="min-h-screen flex items-center align-middle justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900
">
      <div className="bg-black p-8 rounded-md shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {/* Username Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Type your username"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Type your password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="text-right mt-1">
            <a href="#" className="text-sm text-purple-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Main Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-2 mt-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Welcome Back
        </button>

        <div className="my-4 text-center text-white-500 text-sm">Or Sign Up Using</div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {/* LinkedIn (Aadya) */}
          <button
            onClick={handleLinkedInLogin}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:scale-105 transition"
            title="Login with LinkedIn"
          >
            <span className="text-sm font-bold text-gray-700"><linkdein className="jpeg"></linkdein></span>
          </button>

          {/* Google (Rushi) */}
          <button
            onClick={handleGoogleLogin}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:scale-105 transition"
            title="Login with Google"
          >
            <span className="text-sm font-bold text-gray-700"></span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-white-600">
          Do not have an account?{" "}
          <a href="#" className="text-purple-500 font-semibold hover:underline">
            SIGN UP
          </a>
        </p>
      </div>
    </div>
  );
}
