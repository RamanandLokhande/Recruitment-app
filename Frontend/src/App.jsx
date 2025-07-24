// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
import MainPage from './Pages/MainPage';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Internship from './Pages/Internship'; // Corrected capitalization based on common React conventions
import Placement from './Pages/Placement';
import AboutUS from './Pages/AboutUs';
import HireFromUs from './Pages/HireFromUs';


function App() {
  return (
    <Router>
      {/* RENDER THE NAVBAR HERE */}
      <Navbar />

      {/* Add a main content wrapper with padding to prevent overlap with fixed navbar */}
      <main className="pt-20"> {/* Adjust 'pt-20' based on your Navbar's actual height */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/placements" element={<Placement />} />
          <Route path="/Aboutus" element={<AboutUS />} />
          <Route path="/HireFromUs" element={<HireFromUs />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;