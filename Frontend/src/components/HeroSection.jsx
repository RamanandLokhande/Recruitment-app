import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import officeImage from '../assets/office-work.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>

      {/* 💼 Layout Option 3 */}
      <section className="bg-white py-20 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Internships that match your ambition
            </h2>
            <p className="text-lg mt-4 text-gray-600">
              Discover top roles from leading companies and gain real experience.
            </p>

          </motion.div>

          <motion.img
            className="w-full max-w-md rounded-lg hover:shadow-lg mx-auto"
            src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg"
            alt=""
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* 🚀 Blue highlight section */}
<<<<<<< HEAD
      <section className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20 px-6 lg:px-32 text-center">
=======

      <section className="bg-blue-50 py-20 px-6 md:px-16 lg:px-32 text-center">
>>>>>>> 3602ddec2cf514227c87eac216b1e3c742634416
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Empower Your Career With <span className="text-blue-600">Nextintern</span>
          </h1>
          <p className="text-lg sm:text-xl mt-6 text-gray-600">
            Where professionals and recruiters connect with precision.
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/aboutus')}
              className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-blue-50 transition"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 🌄 Background image section */}
      <section
        className="bg-cover bg-center py-24 px-6 text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <motion.div
          className="bg-black/50 p-10 rounded-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Shape Your Future With <span className="text-blue-300">Nextintern</span>
          </h1>
          <p className="text-xl mt-4 text-gray-200">
            Internships, jobs, and growth opportunities tailored for you.
          </p>

        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
