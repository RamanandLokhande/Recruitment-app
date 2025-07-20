import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50"
    >
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
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left group of links */}
          <div className="flex space-x-1">
            {['/internships', '/placements', '/Aboutus', '/HireFromUs'].map((path, index) => (
              <motion.span
                key={path}
                onClick={() => navigate(path)}
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 text-lg px-4 py-2 rounded hover:cursor-pointer hover:underline"
              >
                {path.replace('/', '').replace(/([A-Z])/g, ' $1')}
              </motion.span>
            ))}
          </div>

          {/* Right group of links */}
          <div className="flex space-x-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/signup')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col px-4 pb-4 gap-2 w-full"
          >
            {['/internships', '/placements', '/Aboutus', '/HireFromUs', '/login', '/signup'].map((path) => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                key={path}
                onClick={() => {
                  navigate(path);
                  setMenuOpen(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {path.replace('/', '').replace(/([A-Z])/g, ' $1')}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
