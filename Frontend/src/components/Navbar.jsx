import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-3xl font-bold text-blue-600">Skillize</div>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;