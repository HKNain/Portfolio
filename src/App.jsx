import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Education from "./sections/Education";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
