import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript and build real-world projects.",
    image: "https://images.pexels.com/photos/32342294/pexels-photo-32342294.jpeg",
  },
  {
    id: 2,
    title: "React Mastery",
    description: "Master React.js with hooks, context API, and real apps.",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
  },
  {
    id: 3,
    title: "Data Science with Python",
    description: "Dive into Pandas, NumPy, and Machine Learning.",
    image: "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Design beautiful, user-friendly interfaces from scratch.",
    image: "https://images.pexels.com/photos/6593545/pexels-photo-6593545.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Courses
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
