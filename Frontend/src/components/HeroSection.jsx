import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-4 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800">
        Empower Your Career With <span className="text-blue-600">Nextintern</span>
      </h1>
      <p className="text-xl mt-6 text-gray-600">
        Where professionals and recruiters connect with precision.
      </p>
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;