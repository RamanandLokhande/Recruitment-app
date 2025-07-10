import React from 'react';
import { FaLinkedin, FaGlobe, FaArrowRight } from 'react-icons/fa';

const placements = [
  {
    id: 1,
    name: 'Ananya Sharma',
    role: 'Software Engineer',
    company: 'Google',
    package: '₹45 LPA',
    location: 'Bangalore',
    type: 'Onsite',
    logo: 'https://logo.clearbit.com/google.com',
    image: 'https://source.unsplash.com/featured/?woman,developer',
    linkedIn: 'https://linkedin.com/in/ananya',
    website: 'https://google.com',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Data Scientist',
    company: 'Amazon',
    package: '₹38 LPA',
    location: 'Hyderabad',
    type: 'Remote',
    logo: 'https://logo.clearbit.com/amazon.com',
    image: 'https://source.unsplash.com/featured/?man,tech',
    linkedIn: 'https://linkedin.com/in/rahul',
    website: 'https://amazon.com',
  },
  {
    id: 3,
    name: 'Priya Singh',
    role: 'UI/UX Designer',
    company: 'Adobe',
    package: '₹28 LPA',
    location: 'Remote',
    type: 'Remote',
    logo: 'https://logo.clearbit.com/adobe.com',
    image: 'https://source.unsplash.com/featured/?woman,designer',
    linkedIn: 'https://linkedin.com/in/priya',
    website: 'https://adobe.com',
  },
  {
    id: 4,
    name: 'Arjun Patel',
    role: 'Backend Developer',
    company: 'Microsoft',
    package: '₹35 LPA',
    location: 'Hyderabad',
    type: 'Onsite',
    logo: 'https://logo.clearbit.com/microsoft.com',
    image: 'https://source.unsplash.com/featured/?man,coding',
    linkedIn: 'https://linkedin.com/in/arjun',
    website: 'https://microsoft.com',
  },
  {
    id: 5,
    name: 'Divya Reddy',
    role: 'Cloud Engineer',
    company: 'IBM',
    package: '₹32 LPA',
    location: 'Pune',
    type: 'Onsite',
    logo: 'https://logo.clearbit.com/ibm.com',
    image: 'https://source.unsplash.com/featured/?woman,cloud',
    linkedIn: 'https://linkedin.com/in/divya',
    website: 'https://ibm.com',
  },
  {
    id: 6,
    name: 'Karan Joshi',
    role: 'DevOps Engineer',
    company: 'Netflix',
    package: '₹42 LPA',
    location: 'Remote',
    type: 'Remote',
    logo: 'https://logo.clearbit.com/netflix.com',
    image: 'https://source.unsplash.com/featured/?man,devops',
    linkedIn: 'https://linkedin.com/in/karan',
    website: 'https://netflix.com',
  },
];

export default function Placement() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen px-4 py-8">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-10">
        💼 Placement Highlights
      </h1>

      {/* Filter UI (Static for now) */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {['All', 'Remote', 'Onsite', '₹30L+'].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 text-sm bg-white border border-blue-200 rounded-full shadow hover:bg-blue-100 transition"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {placements.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-64 object-cover"
              />
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                student.type === 'Remote' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {student.type}
              </span>
              <img
                src={student.logo}
                alt={student.company}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white p-1 rounded-full shadow"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
              <p className="text-gray-600 mt-1">
                {student.role} @ <span className="text-blue-600 font-medium">{student.company}</span>
              </p>
              <p className="text-green-600 mt-2 font-semibold">Package: {student.package}</p>
              <p className="text-sm text-gray-500 mt-1">{student.location}</p>

              <div className="flex justify-between items-center mt-4 text-sm">
                <div className="flex gap-3">
                  <a
                    href={student.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={student.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition"
                    title="Company Website"
                  >
                    <FaGlobe size={18} />
                  </a>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                  View Profile <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
