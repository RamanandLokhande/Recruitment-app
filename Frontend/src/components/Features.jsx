import React from 'react';

const features = [
  {
    title: 'Smart Matching',
    desc: 'AI-powered suggestions that fit your skills or hiring needs.',
  },
  {
    title: 'Verified Profiles',
    desc: 'Trustworthy users with real resumes and validations.',
  },
  {
    title: 'Live Interview Tools',
    desc: 'Integrated scheduling and video interviews.',
  },
  {
    title: 'Global Reach',
    desc: 'Opportunities and talent from all over the world.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Why Choose Skillize?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;