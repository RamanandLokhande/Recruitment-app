import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Nextintern</div>

        {/* Hamburger Button (Small screens only) */}
        <button
          className="text-3xl text-blue-600 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu - large screens */}
        <div className="hidden lg:flex gap-3">
          <button onClick={() => navigate('/internships')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Internships</button>
          <button onClick={() => navigate('/placements')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Placements</button>
          <button onClick={() => navigate('/Aboutus')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">About Us</button>
          <button onClick={() => navigate('/HireFromUs')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Hire From Us</button>
          <button onClick={() => navigate('/login')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
          <button onClick={() => navigate('/signup')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col px-4 pb-4 gap-2">
          <button onClick={() => navigate('/internships')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Internships</button>
          <button onClick={() => navigate('/placements')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Placements</button>
          <button onClick={() => navigate('/Aboutus')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">About Us</button>
          <button onClick={() => navigate('/HireFromUs')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Hire From Us</button>
          <button onClick={() => navigate('/login')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
          <button onClick={() => navigate('/signup')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
