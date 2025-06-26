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
    const emailRegex = /^[^\s@]+@gmail\.com$/i;
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
    }
  };

  const getInputStyle = (field) =>
    `w-full px-4 py-2 border rounded-md bg-white/80 backdrop-blur-md focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-500 focus:ring-red-400'
        : 'border-gray-300 focus:ring-blue-400'
    }`;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1581091012184-7f5efb160cde?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-blue-700">Join Skillize</h1>
          <p className="text-sm text-gray-500">Where Skills Meet Opportunities</p>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            ref={inputRefs.name}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'email')}
            placeholder="John Doe"
            className={getInputStyle('name')}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gmail Address</label>
          <input
            ref={inputRefs.email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'mobile')}
            placeholder="yourname@gmail.com"
            className={getInputStyle('email')}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            ref={inputRefs.mobile}
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'password')}
            placeholder="9876543210"
            className={getInputStyle('mobile')}
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
          <input
            ref={inputRefs.password}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'confirmPassword')}
            placeholder="••••••••"
            className={getInputStyle('password')}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            ref={inputRefs.confirmPassword}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSignup();
            }}
            placeholder="••••••••"
            className={getInputStyle('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Create Account
        </button>

        {/* Already have account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already a member?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

