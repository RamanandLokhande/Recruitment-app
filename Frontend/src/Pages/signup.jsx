import React, { useRef, useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const inputRefs = {
    name: useRef(),
    email: useRef(),
    mobile: useRef(),
    password: useRef(),
    confirmPassword: useRef(),
  };

  const handleKeyDown = (e, nextField) => {
    if (e.key === 'Enter' && nextField) {
      e.preventDefault();
      inputRefs[nextField]?.current?.focus();
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@gmail\.com$/i; // Gmail-only check
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = 'Only valid Gmail addresses allowed (e.g. yourname@gmail.com)';
    if (!formData.mobile || !phoneRegex.test(formData.mobile))
      newErrors.mobile = 'Valid 10-digit mobile number is required';
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (validate()) {
      console.log('✅ Signup Successful:', formData);
      // Optionally clear form
      // setFormData({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
    }
  };

  const getInputStyle = (field) =>
    `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-500 focus:ring-red-400'
        : 'border-gray-300 focus:ring-purple-400'
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900">
      <div className="bg-black p-8 rounded-md shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">Sign Up</h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm text-white mb-1">Full Name</label>
          <input
            ref={inputRefs.name}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'email')}
            placeholder="Enter your full name"
            className={getInputStyle('name')}
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-white mb-1">Email</label>
          <input
            ref={inputRefs.email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'mobile')}
            placeholder="Enter your Gmail address"
            className={getInputStyle('email')}
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm text-white mb-1">Mobile Number</label>
          <input
            ref={inputRefs.mobile}
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'password')}
            placeholder="Enter 10-digit mobile number"
            className={getInputStyle('mobile')}
          />
          {errors.mobile && <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm text-white mb-1">Create Password</label>
          <input
            ref={inputRefs.password}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'confirmPassword')}
            placeholder="Create a password"
            className={getInputStyle('password')}
          />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm text-white mb-1">Confirm Password</label>
          <input
            ref={inputRefs.confirmPassword}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSignup();
            }}
            placeholder="Confirm your password"
            className={getInputStyle('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSignup}
          className="w-full py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Create Account
        </button>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-purple-400 font-semibold hover:underline">
            LOGIN
          </a>
        </p>
      </div>
    </div>
  );
}
