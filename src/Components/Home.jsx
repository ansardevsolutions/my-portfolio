// src/components/Home.jsx
import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import profileImg from "../assets/ansar.jpeg";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "SaaS Development",
  "Advanced AI Integration",
  "Tailwind CSS",
  "Responsive Design",
  "Performance Optimization",
  "Mui Library",
  "Framer Motion",
  "Redux Toolkit",
  "Context API",
  "React Router",
  "Axios",
  "Git & GitHub",
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ansardevsolutions",
    icon: <FaLinkedinIn />,
    color: "bg-[#0077B5]",
    position: "-top-4 -left-4",
    delay: 0,
  },
  {
    href: "https://github.com/ansardevsolutions",
    icon: <FaGithub />,
    color: "bg-[#333]",
    position: "-bottom-4 -left-4",
    delay: 0.2,
  },
  {
    href: "https://wa.me/923098295120",
    icon: <FaWhatsapp />,
    color: "bg-[#25D366]",
    position: "-top-4 -right-4",
    delay: 0.4,
  },
  {
    href: "mailto:ansar.devsolutions@gmail.com",
    icon: <SiGmail />,
    color: "bg-[#EA4335]",
    position: "-bottom-4 -right-4",
    delay: 0.6,
  },
];

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-[#0B1120] text-white scroll-mt-20 overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] contrast-150 brightness-100" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-cyan-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight"
          >
            Building High-Performance
            <br />
            <motion.span 
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-[#00E5D0] bg-gradient-to-r from-[#00E5D0] via-[#00A3FF] to-[#00E5D0] bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              SaaS-Level Frontend Solutions
            </motion.span>
          </motion.h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-300">
            Professional Frontend Developer | React.js & TypeScript & Next.js Expert
          </p>

          <p className="mt-6 text-gray-300 max-w-xl text-lg leading-relaxed">
            I help businesses build stunning, scalable, and high-performance
            frontend applications that wow users and drive results. Specialized
            in React.js, Next.js, and TypeScript, with an advanced level of AI
            integration to streamline development and deliver SaaS-level quality.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            {skills.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-[#00E5D0]/10 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-[#00E5D0] text-black font-semibold px-8 h-12 rounded-lg hover:brightness-105 transition"
            >
              View Projects
            </button>

            <a
              href="/Portfolio/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-8 h-12 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              Download Resume <SaveAltIcon fontSize="small" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-row gap-6 text-center justify-center w-full max-w-full">
            <div className="p-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00E5D0]">1+ Years</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Experience
              </p>
            </div>
            <div className="p-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00E5D0]">5+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Projects Delivered
              </p>
            </div>
            <div className="p-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00E5D0]">30%</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Optimization
              </p>
            </div>
            <div className="p-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00E5D0]">50K+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Code Efficiency
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center mt-12 lg:mt-0 relative w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#111827] p-4 rounded-xl border border-white/10 hover:shadow-lg transition max-w-[calc(100vw-4rem)]"
          >
            <img
              src={profileImg}
              alt="Muhammad Ansar - Professional Frontend Developer"
              loading="lazy"
              className="w-56 sm:w-72 lg:w-[300px] aspect-[1/1.2] object-cover rounded-lg shadow-2xl mx-auto"
            />

            {/* Floating Icons */}
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: social.delay,
                }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className={`absolute ${social.position} scale-75 sm:scale-100 w-10 h-10 ${social.color} text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:brightness-110 transition-all`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}