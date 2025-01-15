import React from "react";

const educationData = [
  {
    title: "High School",
    year: "2022 - 2024",
    institution: "Delhi Public School, Hapur",
    description: "Completed my high school education with a focus on Science and Mathematics.",
  },
  {
    title: "College",
    year: "2024 - 2028",
    institution: "Indian Institute of Information Technology, Sonepat, Haryana",
    description: "Graduated with a degree in Computer Science, specializing in software engineering.",
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 bg-gradient-to-r from-purple-400 via-blue-600 to-indigo-900 text-white">
      <h2 className="text-5xl font-bold text-center mb-12">Education</h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Vertical Bar */}
        <div className="absolute left-10 w-1 h-full bg-gray-800"></div>

        {educationData.map((edu, index) => (
          <div key={index} className="education-item flex items-center mb-12">
            {/* Circle Indicator */}
            <div className="w-20 flex justify-center">
              <div className="w-6 h-6 bg-cyan-500 rounded-full z-10"></div>
            </div>

            {/* Education Content */}
            <div className="w-3/4 bg-gray-900 p-6 rounded-lg shadow-lg ml-8">
              <h3 className="text-3xl font-semibold text-cyan-500">{edu.title}</h3>
              <p className="text-gray-400 text-lg">{edu.year}</p>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="mt-2 text-gray-200">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
