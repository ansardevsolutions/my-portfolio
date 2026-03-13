import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise MIS System",
    description:
      "Led the frontend architecture and user experience for a multi-department system, seamlessly integrated with a robust team-delivered backend using Clean Architecture.",
    impact: [
      "Reduced manual reporting time by approximately 40%",
      "User-centric dashboard for centralized operations",
      "Optimized for 1000+ concurrent frontend users",
    ],
  },
  {
    title: "Electronic Medical Records (EMR)",
    description:
      "Crafted secure, intuitive frontend interfaces for healthcare providers, integrated with team-built secure APIs using JWT and RBAC protection.",
    impact: [
      "Improved patient data access efficiency by 35%",
      "Seamless and HIPAA-aligned frontend data handling",
      "Professional UI designed for critical medical workflows",
    ],
  },
  {
    title: "MaxChat – Real-Time Platform",
    description:
      "Directed the real-time UI/UX design and messaging frontend, powered by a scalable backend API delivered by my professional team.",
    impact: [
      "Real-time messaging with ultra-responsive UI",
      "Frontend performance optimized for low-latency interactions",
      "Built for professional and scalable user growth",
    ],
  },
  {
    title: "UAV Disaster Monitoring (AI)",
    description:
      "Developed the intelligent monitoring dashboard for real-time UAV data, integrated with team-engineered AI backend processing.",
    impact: [
      "Accelerated response time through real-time data visualization",
      "Intuitive AI-driven insights for emergency coordination",
      "Professional frontend for complex data processing",
    ],
  },
  {
    title: "Bone Fracture Detection (AI)",
    description:
      "Implemented a high-fidelity diagnostic interface for X-ray analysis, integrated with advanced AI models provided by my expert backend team.",
    impact: [
      "Streamlined diagnostic workflow for radiologists",
      "High-performance frontend for medical image rendering",
      "Delivered through secure and structured architectural patterns",
    ],
  },

];

function Project() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#0f172a] text-white py-28 px-6 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Enterprise <span className="text-[#00E5D0]">Case Studies</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center max-w-3xl mx-auto mt-4"
        >
          I provide top-tier frontend leadership for complex projects. While I focus on creating exceptional user experiences, 
          my professional team provides the robust backend foundations — ensuring your vision is built for scale, security, and performance.
        </motion.p>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, borderColor: "#00E5D0", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              className="bg-[#1e293b] p-6 rounded-xl border border-white/10 transition-colors duration-300 shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#00E5D0] mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-2">
                {project.impact.map((point, i) => (
                  <li
                    key={i}
                    className="text-green-400 text-xs flex items-start gap-2"
                  >
                    <span>✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Project;