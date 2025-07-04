import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, FileText, GraduationCap, User, Users } from "lucide-react";

const services = [
  {
    label: "Jobs",
    icon: <Briefcase className="w-6 h-6" />,
    path: "/jobs",
    description: "Browse and apply for full-time job opportunities.",
  },
  {
    label: "Internships",
    icon: <GraduationCap className="w-6 h-6" />,
    path: "/internships",
    description: "Find internships for students and freshers.",
  },
  {
    label: "Campus Drives",
    icon: <Users className="w-6 h-6" />,
    path: "/campus",
    description: "Check upcoming campus recruitment events.",
  },
  {
    label: "Resume Builder",
    icon: <FileText className="w-6 h-6" />,
    path: "/resume",
    description: "Generate a professional resume in minutes.",
  },
  {
    label: "My Profile",
    icon: <User className="w-6 h-6" />,
    path: "/profile",
    description: "View and update your candidate profile.",
  },
];

export default function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
        Recruitment Portal Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-white shadow-md hover:shadow-xl p-6 rounded-xl cursor-pointer transition border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="text-blue-600">{item.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">{item.label}</h2>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

