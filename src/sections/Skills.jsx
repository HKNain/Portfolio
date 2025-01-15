import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import c from "../assets/c.png";
import cs from "../assets/cs.png";
import cpp from "../assets/cpp.png";
import sql from "../assets/sql.png";
import mongo from "../assets/mongo.png";
import python from "../assets/python.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import unity from "../assets/unity.png";
import tailwind from "../assets/tailwind.png";

const skills = [
  { name: "HTML", level: "Advanced", icon: `${html}` },
  { name: "CSS", level: "Advanced", icon: `${css}` },
  { name: "Javascript", level: "Intermediate", icon: `${js}` },
  { name: "React JS", level: "Intermediate", icon: `${react}` },
  { name: "Mongo DB", level: "Intermediate", icon: `${mongo}` },
  { name: "C", level: "Intermediate", icon: `${c}` },
  { name: "C++", level: "Intermediate", icon: `${cpp}` },
  { name: "C#", level: "Intermediate", icon: `${cs}` },
  { name: "MySQL", level: "Intermediate", icon: `${sql}` },
  { name: "Python", level: "Beginner", icon: `${python}` },
  { name: "Tailwind CSS", level: "Beginner", icon: `${tailwind}` },
  { name: "Unity", level: "Beginner", icon: `${unity}` },
  { name: "Git", level: "Advanced", icon: `${git}` },
  { name: "Github", level: "Intermediate", icon: `${github}` },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-r from-purple-900 to-black text-white">
      <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-gradient mb-4">{skill.name}</h3>
            <p className="text-gray-400">Level: {skill.level}</p>
            <img src={skill.icon} alt="html" className="h-32 w-32" />
          </div>
        ))}
      </div>
    </section>
  );
}
