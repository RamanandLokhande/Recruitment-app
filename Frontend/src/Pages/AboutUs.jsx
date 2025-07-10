import React from 'react';

const team = [
  {
    name: 'Ritika Mehra',
    role: 'Co-Founder & CEO',
    image: 'https://source.unsplash.com/featured/?woman,ceo',
    linkedin: 'https://linkedin.com/in/ritikamehra',
  },
  {
    name: 'Aryan Kapoor',
    role: 'Head of Engineering',
    image: 'https://source.unsplash.com/featured/?man,developer',
    linkedin: 'https://linkedin.com/in/aryankapoor',
  },
  {
    name: 'Sana Qureshi',
    role: 'Design Lead',
    image: 'https://source.unsplash.com/featured/?woman,designer',
    linkedin: 'https://linkedin.com/in/sanaqureshi',
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">About NextIntern</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          We're on a mission to bridge the gap between passionate learners and the right opportunities. Whether you're a student or a fresh graduate, NextIntern empowers you with curated internships, skill-building, and career support.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">🚀 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide accessible, high-quality internships and career guidance for students and early professionals, enabling them to gain hands-on experience and launch successful careers.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">🎯 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where every student, regardless of background, has access to real-world experiences and mentorship that shape their career path with confidence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
          <div>
            <h3 className="text-4xl font-bold text-blue-700">25,000+</h3>
            <p className="text-gray-600 mt-2">Interns Placed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-700">1,000+</h3>
            <p className="text-gray-600 mt-2">Partner Companies</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-700">100%</h3>
            <p className="text-gray-600 mt-2">Career Growth Focus</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="text-center hover:shadow-lg rounded-xl p-6 transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Career?</h2>
        <p className="mb-6 text-lg">Explore internships, connect with mentors, and grow with NextIntern.</p>
        <a
          href="/internships"
          className="inline-block bg-white text-blue-600 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Browse Internships
        </a>
      </section>
    </div>
  );
}
