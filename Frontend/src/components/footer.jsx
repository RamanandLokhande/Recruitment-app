

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 mt-20 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 z-10 relative">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Nextintern</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering students and graduates with the right opportunities in internships and placements.
          </p>
          <p className="mt-4 text-sm text-gray-500">Join our mission to bridge the gap between learning and earning.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/internships" className="hover:text-white transition">Internships</a></li>
            <li><a href="/placements" className="hover:text-white transition">Placements</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/support" className="hover:text-white transition">Support</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social & Subscribe */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition transform hover:scale-110">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition transform hover:scale-110">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition transform hover:scale-110">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition transform hover:scale-110">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-gray-500">Stay connected for updates and news.</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Nextintern</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
