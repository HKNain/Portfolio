import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); 
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section)); 

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent py-6 px-10 z-50">
      <div className="flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <a href="#">My Portfolio</a>
        </div>
        <ul className="flex space-x-8 text-white text-lg">
          <li>
            <a
              href="#hero"
              className={`${
                activeSection === "hero" ? "text-blue-500" : "hover:text-blue-500"
              } transition duration-300`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${
                activeSection === "about" ? "text-blue-500" : "hover:text-blue-500"
              } transition duration-300`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${
                activeSection === "projects" ? "text-blue-500" : "hover:text-blue-500"
              } transition duration-300`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${
                activeSection === "projects" ? "text-blue-500" : "hover:text-blue-500"
              } transition duration-300`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${
                activeSection === "skills" ? "text-blue-500" : "hover:text-blue-500"
              } transition duration-300`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                activeSection === "contact" ? "text-blue-500" : "hover:text-blue-500"
              } transition duration-300`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
