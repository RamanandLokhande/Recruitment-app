// src/components/Navbar.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="p-4 bg-black text-white flex justify-between items-center">
      <div className="text-3xl font-bold text-blue-600">Skillize</div>
      <div className="space-x-4">
        <button 
          onClick={() => navigate('/login')} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>
        <button 
          onClick={() => navigate('/signup')} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
