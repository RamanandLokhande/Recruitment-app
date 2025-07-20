// src/pages/Internship.jsx
import React from 'react';

const internships = [
  {
    title: 'Frontend Developer Intern',
    company: 'TechNova',
    location: 'Remote',
    image:
      'https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Data Analyst Intern',
    company: 'DataBridge',
    location: 'Bangalore, India',
    image:
      'https://plus.unsplash.com/premium_photo-1726848121953-354d20f7f522?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Marketing Intern',
    company: 'Brandify',
    location: 'Delhi, India',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'UI/UX Design Intern',
    company: 'PixelCraft',
    location: 'Remote',
    image:
      'https://images.unsplash.com/photo-1737619285988-e6f0f43a9981?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Software Engineering Intern',
    company: 'DevSpark',
    location: 'Hyderabad, India',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Human Resources Intern',
    company: 'PeopleFirst',
    location: 'Remote',
    image:
      'https://images.unsplash.com/photo-1698047681452-08eba22d0c64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Internship() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-10 text-white">
        <h1 className="text-4xl font-bold text-white mb-4">Explore Internships</h1>
        <p className="text-lg mb-8">
          Discover exciting internship opportunities tailored for students and freshers.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-white/90 text-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition hover:-translate-y-1 backdrop-blur-md"
            >
              <img
                src={internship.image}
                alt={internship.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{internship.title}</h2>
                <p className="text-gray-700 mt-1">Company: {internship.company}</p>
                <p className="text-gray-700">Location: {internship.location}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
