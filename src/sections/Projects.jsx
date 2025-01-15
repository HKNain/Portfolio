import React from "react";
import vid1 from "../videos/vid1.mp4";
import vid2 from "../videos/vid2.mp4";
import vid3 from "../videos/vid3.mp4";
import vid4 from "../videos/vid4.mp4";

const projects = [
  { title: "Weather App", description: "A modern web app built with JS and fetch API.", link: "https://github.com/HKNain/52_Projects_52_Weeks/tree/main/3.%20Weather%20App", videoSrc: `${vid1}` },
  { title: "Solar System", description: "An interactive 3D model using Three.js.", link: "https://github.com/HKNain/52_Projects_52_Weeks/tree/main/5.%20Solar%20System", videoSrc: `${vid2}` },
  { title: "Bubble Sort Visualizer", description: "A web app for visualizing bubble sort.", link: "https://github.com/HKNain/52_Projects_52_Weeks/tree/main/6.%20Bubble%20Sort%20Visualizer", videoSrc: `${vid3}` },
  { title: "Flappy Bird", description: "A clone of famous game Flappy Bird.", link: "https://github.com/HKNain/52_Projects_52_Weeks/tree/main/4.%20Flappy%20Bird", videoSrc: `${vid4}` }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-r from-blue-800 to-purple-900 text-white transition-all duration-1">
      <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black p-10 rounded-lg shadow-lg transform hover:scale-150 hover:z-20 transition-transform duration-500 overflow-hidden"
          >
            <video
              src={project.videoSrc}
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            />
            <div className="relative z-10">
              <h3
                className={`text-3xl font-semibold mb-4 ${
                  index === 3 ? "text-black" : "text-gradient"
                }`}
              >
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:text-blue-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
