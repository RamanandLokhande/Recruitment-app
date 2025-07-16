import React from "react";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript and build real-world projects.",
    image: "https://source.unsplash.com/400x250/?coding,web",
  },
  {
    id: 2,
    title: "React Mastery",
    description: "Master React.js with hooks, context API, and real apps.",
    image: "https://source.unsplash.com/400x250/?react,code",
  },
  {
    id: 3,
    title: "Data Science with Python",
    description: "Dive into Pandas, NumPy, and Machine Learning.",
    image: "https://source.unsplash.com/400x250/?data,python",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Design beautiful, user-friendly interfaces from scratch.",
    image: "https://source.unsplash.com/400x250/?design,ui",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
