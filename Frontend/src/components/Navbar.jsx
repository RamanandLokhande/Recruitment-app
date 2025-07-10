// src/components/Navbar.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-white text-white flex justify-between items-center">
      <div className="text-3xl font-bold text-blue-600">Nextintern</div>
      
      
      
      <div className="space-x-3">
         <button 
          onClick={() => navigate('/internships')} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Internships
        </button>
        
        <button 
          onClick={() => navigate('/placements')} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Placements
        </button>
        <button 
          onClick={() => navigate('/Aboutus')} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          About Us
        </button>
        <button 
          onClick={() => navigate('/HireFromUs')} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Hire From Us
        </button>

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
