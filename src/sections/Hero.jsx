import React, { useEffect, useRef } from "react";  
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-black overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 animate-pulse"></div>

      <div ref={textRef} className="relative z-10 text-white">
        <h1 className="text-6xl font-extrabold neon-text">
          Hitesh Kumar
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Web Developer
        </p>
        
        <a href="../src/pages/resume.pdf" download>
          <button className="mt-6 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition duration-300">
            Download CV
          </button>
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-400">
        <div className="w-2 h-10 bg-cyan-400 rounded-full mt-2"></div>
      </div>
    </section>
  );
}
