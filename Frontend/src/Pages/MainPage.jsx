import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default MainPage;