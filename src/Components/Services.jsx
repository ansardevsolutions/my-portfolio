// src/Components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaLock, FaNetworkWired, FaDesktop, FaCode, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "SaaS Product Development",
    description:
      "Specialized in building end-to-end SaaS platforms using Next.js and TypeScript, focused on scalability, performance, and seamless user experiences.",
    icon: <FaCode size={32} />,
    gradient: "from-[#00E5D0] to-[#008C7E]",
  },
  {
    title: "Advanced AI Integration",
    description:
      "Leveraging state-of-the-art AI tools and APIs to enhance development workflows and build intelligent, automated features for modern web applications.",
    icon: <FaCogs size={32} />,
    gradient: "from-[#FF6A3D] to-[#FF3D6B]",
  },
  {
    title: "Team & Connections",
    description:
      "Backed by a professional team and a network of expert connections, I can handle large-scale projects at an advanced level from design to deployment.",
    icon: <FaNetworkWired size={32} />,
    gradient: "from-[#FFD700] to-[#FFA500]",
  },
  {
    title: "Professional UI/UX Implementation",
    description:
      "Transforming complex designs into high-fidelity, responsive, and accessible interfaces using React and Tailwind CSS for a premium feel.",
    icon: <FaDesktop size={32} />,
    gradient: "from-[#6A5ACD] to-[#483D8B]",
  },
  {
    title: "Performance Optimization",
    description:
      "Deep optimization of frontend applications for speed, SEO, and Core Web Vitals, ensuring your SaaS product performs at the highest level.",
    icon: <FaDatabase size={32} />,
    gradient: "from-[#00CED1] to-[#20B2AA]",
  },
  {
    title: "Secure & Scalable Frontend",
    description:
      "Implementing robust security patterns and scalable architecture to protect data and ensure your application grows with your business.",
    icon: <FaLock size={32} />,
    gradient: "from-[#FF8C00] to-[#FF4500]",
  },
];

function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#111827] py-20 px-6 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Frontend & Backend-Team <span className="text-[#00E5D0]">Services</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center max-w-3xl mx-auto mb-12"
        >
          I specialize in delivering premium frontend experiences. For clients requiring comprehensive backend solutions, 
          my professional team and I collaborate to provide high-performance, secure, and scalable backend architectures.
        </motion.p>


        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              className="relative p-6 rounded-xl border border-white/10 bg-[#1e293b] overflow-hidden shadow-md cursor-pointer group"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${service.gradient} group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 text-[#00E5D0]">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;