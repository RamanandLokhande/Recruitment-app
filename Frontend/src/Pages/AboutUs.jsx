import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rohitImg from "../assets/rohit_img.jpg";
import swarajImg from "../assets/swaraj_img.jpg";
import manishImg from "../assets/manish_img.jpg";


const team = [
  {
    name: "Rohit Yamgar",
    role: "Co-Founder & CEO",
    image: rohitImg,
    linkedin: "https://linkedin.com/in/rohit-yamgar",
  },
  {
    name: "Manish Patil",
    role: "Head of Engineering",
    image: manishImg,
    linkedin: "https://linkedin.com/in/manish-patil",
  },
  {
    name: "Swaraj Shedge",
    role: "Design Lead",
    image: swarajImg,
    linkedin: "https://linkedin.com/in/swaraj-shedge",
  },
];

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522199780097-0aa4f7e10b3f?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />
        <div className="relative z-10 max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            About <span className="text-blue-400">NextIntern</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            We're on a mission to bridge the gap between passionate learners and the right opportunities.
            Whether you're a student or a fresh graduate, NextIntern empowers you with curated internships,
            skill-building, and career support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
          style={{
            backgroundImage: "url('Frontend/src/assets/manishphoto.jpeg')",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">🚀 Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To provide accessible, high-quality internships and career guidance for students and early professionals,
              enabling them to gain hands-on experience and launch successful careers.
            </p>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">🎯 Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We envision a future where every student, regardless of background, has access to real-world experiences
              and mentorship that shape their career path with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-10"
          data-aos="fade-up"
        >
          <div>
            <h3 className="text-5xl font-extrabold text-blue-700">25,000+</h3>
            <p className="text-gray-600 mt-3 text-lg">Interns Placed</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-blue-700">1,000+</h3>
            <p className="text-gray-600 mt-3 text-lg">Partner Companies</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-blue-700">100%</h3>
            <p className="text-gray-600 mt-3 text-lg">Career Growth Focus</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531310131731-5fdf4f6bfb98?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-14" data-aos="zoom-in">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white p-6 rounded-xl border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-20 text-center relative" data-aos="fade-in">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Career?</h2>
          <p className="mb-6 text-lg">
            Explore internships, connect with mentors, and grow with NextIntern.
          </p>
          <a
            href="/internships"
            className="inline-block bg-white text-blue-700 px-6 py-3 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            Browse Internships
          </a>
        </div>
      </section>
    </div>
  );
}

