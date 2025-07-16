import React from 'react';
import { FaBrain, FaUserCheck, FaVideo, FaGlobe } from 'react-icons/fa';

const features = [
  {
    title: 'Smart Matching',
    desc: 'AI-powered suggestions that fit your skills or hiring needs instantly and intelligently.',
    icon: <FaBrain className="text-3xl text-blue-600" />,
  },
  {
    title: 'Verified Profiles',
    desc: 'Trustworthy candidates and recruiters, backed by resume checks and LinkedIn verification.',
    icon: <FaUserCheck className="text-3xl text-green-600" />,
  },
  {
    title: 'Live Interview Tools',
    desc: 'Built-in scheduling, assessments, and secure video calls to save time and streamline hiring.',
    icon: <FaVideo className="text-3xl text-purple-600" />,
  },
  {
    title: 'Global Reach',
    desc: 'Access internship and job opportunities from global companies across every industry.',
    icon: <FaGlobe className="text-3xl text-yellow-600" />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-800">Why Choose <span className="text-blue-600">Nextintern</span>?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          We bring students and recruiters closer through innovation and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border hover:border-blue-600 transition duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

