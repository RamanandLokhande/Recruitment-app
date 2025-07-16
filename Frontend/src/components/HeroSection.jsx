import React from 'react';
import { useNavigate } from 'react-router-dom';
import officeImage from '../assets/office-work.jpg';



const HeroSection = () => {
  const navigate = useNavigate(); // ✅ You need this to use `navigate`
history
  return (
    <>
          {/* 💼 Layout Option 3: Split 2-column layout for large screens */}
      <section className="bg-white py-20 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Internships that match your ambition
            </h2>
            <p className="text-lg mt-4 text-gray-600">
              Discover top roles from leading companies and gain real experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/internships')}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Explore Opportunities
              </button>
              <a href="#recruiter" className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-100 transition">
                Hire Talent
              </a>
            </div>
          </div>
             <img
              src={officeImage}
              alt="Career"
              className="rounded-xl shadow-lg w-full"
            />
        </div>
      </section>
      
      <section className="bg-blue-50 py-20 px-6 md:px-16 lg:px-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Empower Your Career With <span className="text-blue-600">Nextintern</span>
          </h1>
          <p className="text-lg sm:text-xl mt-6 text-gray-600">
            Where professionals and recruiters connect with precision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
            <button
              onClick={() => navigate('/internships')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          
          </div>
        </div>
      </section>

      {/* 🌄 Layout Option 2: Background image with dark overlay */}
      <section
        className="bg-cover bg-center py-24 px-6 text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092334395-7d72fc55688a?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="bg-black/50 p-10 rounded-xl max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Shape Your Future With <span className="text-blue-300">Nextintern</span>
          </h1>
          <p className="text-xl mt-4 text-gray-200">
            Internships, jobs, and growth opportunities tailored for you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            
          </div>
        </div>
      </section>


    </>
  );
};

export default HeroSection;
