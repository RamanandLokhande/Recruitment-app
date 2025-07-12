// src/pages/Internship.jsx
import React from 'react';

const internships = [
  {
    title: 'Frontend Developer Intern',
    company: 'TechNova',
    location: 'Remote',
    image:
      'https://images.unsplash.com/photo-1581090700227-1d6c6f3f3b96?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Data Analyst Intern',
    company: 'DataBridge',
    location: 'Bangalore, India',
    image:
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=800&q=80',
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
      'https://images.unsplash.com/photo-1606761568499-a23fdb585f30?auto=format&fit=crop&w=800&q=80',
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
      'https://images.unsplash.com/photo-1600195077072-91c9e9b0a8f3?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Internship() {
  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Explore Internships</h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover exciting internship opportunities tailored for students and freshers.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition hover:-translate-y-1"
          >
            <img
              src={internship.image}
              alt={internship.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{internship.title}</h2>
              <p className="text-gray-600 mt-1">Company: {internship.company}</p>
              <p className="text-gray-600">Location: {internship.location}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


