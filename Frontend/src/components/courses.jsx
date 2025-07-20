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
  {
    id: 5,
    title: "DevOps Essentials",
    description: "Learn CI/CD, Docker, Kubernetes & modern deployment pipelines.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    description: "Explore neural networks, deep learning, and model training.",
    image: "https://images.pexels.com/photos/8369904/pexels-photo-8369904.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-16 md:px-16">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Trending Courses
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {course.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 w-full text-white py-3 rounded-xl text-lg font-semibold shadow hover:shadow-lg transition duration-300"
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

