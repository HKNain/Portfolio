import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Timeline Data (years and events)
const timelineData = [
  { year: "August, 2024", text: "Started learning Web Development" },
  { year: "October, 2024", text: "Learned JavaScript & React.js" },
  { year: "November, 2024", text: "Mastered Three.js & MERN Stack" },
  { year: "February, 2025", text: "Building futuristic projects 🚀" },
];

const numberFacts = [
  { title: "Cup of Coffee", number: "12" },
  { title: "LeetCode Problems Solved", number: 333 },
  { title: "GitHub Projects", number: 9 },
  { title: "Lines of Code Written", number: "100,000+" },
];

export default function About() {
  const timelineRef = useRef(null);
  const factsRef = useRef(null);

  // GSAP ScrollTrigger Animation for timeline
  useEffect(() => {
    gsap.from(".timeline-item", {
      opacity: 1,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // GSAP ScrollTrigger for number facts
    gsap.from(".fact-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: factsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id="about" ref={timelineRef} className="min-h-screen py-20 bg-gradient-to-r from-purple-400 via-blue-600 to-indigo-900 text-white">
      <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>

      {/* Personal Info Section */}
      <p className="text-center text-lg text-white mb-8 max-w-3xl mx-auto">
        I am a passionate Programmer with experience in JavaScript, React, and Three.js. I'm constantly learning and building futuristic projects to push the boundaries of web development. My journey started in 2024, and I aim to make a significant impact in the tech industry.
      </p>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 w-1 h-full bg-gray-800 transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="w-1/2 p-4">
              <div className="bg-cyan-600 text-black font-bold p-3 rounded-md shadow-lg text-center">
                {item.year}
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                <p className="text-gray-300">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Number Facts Section */}
      <div ref={factsRef} className="mt-20 bg-gradient-to-r from-purple-400 via-blue-600 to-indigo-900 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {numberFacts.map((fact, index) => (
            <div
              key={index}
              className="fact-item bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 opacity-0"
            >
              <h4 className="text-3xl font-semibold text-cyan-500 mb-4">{fact.title}</h4>
              <p className="text-white text-2xl">{fact.number}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
