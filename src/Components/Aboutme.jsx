// src/Components/Aboutme.jsx
import React, { useEffect, useRef, useState } from "react";
import Aboutimg from "../assets/imgAbout.png";

function Aboutme() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll-triggered fade-in using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    "Next.js & React.js",
    "TypeScript & Professional UI",
    "Advanced AI-Powered Dev",
    "SaaS Architecture Design",
    "Responsive & Modern UX",
    "Scalable Frontend Systems",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#222831] text-white px-6 md:px-12 py-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div
          className={`flex-1 transition-all duration-1000 ease-out transform ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Frontend{" "}
            <span className="bg-gradient-to-r from-[#00E5D0] to-[#00ADB5] text-transparent bg-clip-text">
              Expertise
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Professional Frontend Developer with deep expertise in building
            SaaS-level applications using React, Next.js, and TypeScript. I
            leverage an advanced level of AI integration to deliver high-quality,
            maintainable code at scale. I specialize in crafting professional,
            user-centric interfaces that are fast, secure, and ready for production.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors duration-300"
              >
                <span className="text-[#00E5D0] font-bold">✔</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`flex-1 flex justify-center transition-all duration-1000 ease-out transform ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <img
            src={Aboutimg}
            alt="Muhammad Ansar Frontend Development Expertise"
            loading="lazy"
            className="w-80 rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;