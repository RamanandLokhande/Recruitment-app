import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Welcome laern new skills with us",
      content:
        "Balancing government exam preparation with coding can feel overwhelming. Here’s a realistic strategy to help you manage both...",
    },
    {
      id: 2,
      title: "How to Start with React.js After Learning HTML & CSS",
      content:
        "So you've learned HTML and CSS. Here's how you can level up into frontend development with React...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Latest Blogs</h1>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white p-6 mb-6 rounded-lg shadow hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
          <p className="text-gray-600 mt-3">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;