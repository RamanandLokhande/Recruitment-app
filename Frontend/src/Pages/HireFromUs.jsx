import React from 'react';

export default function HireFromUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">Hire Top Intern Talent</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          NextIntern connects you with skilled, motivated students and freshers ready to make an impact. Join 1000+ companies hiring through us.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Benefits for Employers */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Why Hire from NextIntern?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "💡",
              title: "Pre-Screened Talent",
              desc: "We evaluate candidates on skills, communication, and attitude so you get only the best.",
            },
            {
              icon: "⚙️",
              title: "Diverse Skill Sets",
              desc: "From tech to marketing, our talent pool covers a wide range of domains.",
            },
            {
              icon: "⏱️",
              title: "Quick Turnaround",
              desc: "Get matched with qualified candidates in as little as 48 hours.",
            },
            {
              icon: "🌍",
              title: "Pan-India Reach",
              desc: "Access candidates from top institutes across the country, including Tier 1 & 2 cities.",
            },
            {
              icon: "📈",
              title: "Hire at Scale",
              desc: "Need 1 or 100 interns? Our platform is built to scale with your hiring needs.",
            },
            {
              icon: "🤝",
              title: "Zero Hiring Fee",
              desc: "We believe in building value. Hire interns with no platform commission involved.",
            },
          ].map((b, i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { step: "1", title: "Tell Us Your Needs", desc: "Submit your hiring requirements in a few simple clicks." },
            { step: "2", title: "Get Curated Matches", desc: "We match you with pre-screened candidates that fit." },
            { step: "3", title: "Interview & Select", desc: "Meet candidates, conduct interviews, and select the best." },
            { step: "4", title: "Onboard Seamlessly", desc: "We assist with joining formalities & feedback loop." },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl font-bold mb-2">Step {s.step}</div>
              <h4 className="text-lg font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Hiring with NextIntern Today</h2>
        <p className="mb-6 text-lg">Post your requirements and connect with talented interns in just a few clicks.</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Post an Internship
        </a>
      </section>
    </div>
  );
}
