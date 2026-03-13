// src/components/Home.jsx
import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import profileImg from "../assets/ansar.jpeg";

const skills = [
  "React.js", "Next.js", "TypeScript", "SaaS Development",
  "Advanced AI Integration", "Tailwind CSS", "Responsive Design",
  "Performance Optimization", "Mui Library", "Framer Motion",
  "Redux Toolkit", "Context API", "React Router", "Axios", "Git & GitHub",
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/ansardevsolutions", icon: <FaLinkedinIn size={18} />, color: "#0077B5", glow: "rgba(0,119,181,0.5)", label: "LinkedIn", delay: 0 },
  { href: "https://github.com/ansardevsolutions", icon: <FaGithub size={18} />, color: "#24292e", glow: "rgba(80,80,80,0.5)", label: "GitHub", delay: 0.15 },
  { href: "https://wa.me/923098295120", icon: <FaWhatsapp size={18} />, color: "#25D366", glow: "rgba(37,211,102,0.5)", label: "WhatsApp", delay: 0.3 },
  { href: "mailto:ansar.devsolutions@gmail.com", icon: <SiGmail size={18} />, color: "#EA4335", glow: "rgba(234,67,53,0.5)", label: "Gmail", delay: 0.45 },
];

// ─── Arc geometry ────────────────────────────────────────────────────────────
//
// The profile wrapper has paddingTop = CARD_OFFSET so icons can float ABOVE
// the card's top edge, just like in the reference design.
//
// Coordinate system: (0,0) = top-left of the whole wrapper div
//
// Card starts at y = CARD_OFFSET inside the wrapper.
// Card lg size: image w=300 + p-4(16px×2) = 332px wide, 392px tall
//
// Arc circle:
//   Centre (CX, CY) = (53, CARD_OFFSET + 196) → left edge of card, card mid-height
//   Radius = 380px  → arc extends well outside the right edge of the card
//
// Four icon angles spread so:
//   icon[0] is ABOVE the card top  (negative y offset from CY)
//   icon[1] is in the upper portion of the card
//   icon[2] is in the lower portion of the card
//   icon[3] is near the bottom of the card
// ─────────────────────────────────────────────────────────────────────────────

const CARD_OFFSET = 0;   // px of space above the card in the wrapper
const ICON_SIZE = 40;
const HALF = ICON_SIZE / 2;

const CX = 83;
const CY = CARD_OFFSET + 100;   // = 286
const R = 350;

// Angles in degrees — negative = above centre, positive = below centre
const ANGLES_DEG = [-22, -12, 1, 12];

function toPos(deg) {
  const rad = (deg * Math.PI) / 90;
  return {
    x: Math.round(CX + R * Math.cos(rad)),
    y: Math.round(CY + R * Math.sin(rad)),
  };
}

const arcPositions = ANGLES_DEG.map(toPos);
// Results (approx):
//  [0] -42°  →  (335,  32)  — clearly ABOVE the card (card starts at y=90)
//  [1] -18°  →  (415, 168)  — upper portion inside card
//  [2]   6°  →  (434, 326)  — lower portion inside card
//  [3]  29°  →  (385, 470)  — near bottom of card (card ends at y=90+392=482)

const SVG_W = 500;  // wide enough for rightmost icon (x≈434 + 44/2 + margin)
const SVG_H = CARD_OFFSET + 392 + 60; // top space + card height + bottom buffer

const ARC_PATH =
  `M ${arcPositions[0].x} ${arcPositions[0].y}` +
  ` A ${R} ${R} 0 0 1` +
  ` ${arcPositions[3].x} ${arcPositions[3].y}`;

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-[#0B1120] text-white scroll-mt-20 overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Grain Overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] contrast-150"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

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

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between gap-12 w-full">

        {/* ── Left: Text ── */}
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
              className="bg-gradient-to-r from-[#00E5D0] via-[#00A3FF] to-[#00E5D0] bg-[length:200%_auto] bg-clip-text text-transparent"
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
            {[
              { value: "1+ Years", label: "Experience" },
              { value: "5+", label: "Projects Delivered" },
              { value: "30%", label: "Optimization" },
              { value: "50K+", label: "Code Efficiency" },
            ].map((stat) => (
              <div key={stat.label} className="p-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#00E5D0]">{stat.value}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            Right: Profile Image + Arc Social Icons
        ══════════════════════════════════════════════════════════════ */}
        <div className="flex-1 flex justify-center mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: "relative",
              // paddingTop creates empty space ABOVE the card so icons can float there
              paddingTop: `${CARD_OFFSET}px`,
              // Extra right space so icons don't get clipped
              paddingRight: "80px",
            }}
          >

            {/* ── Profile Card ── */}
            <div className="bg-[#111827] p-4 rounded-xl border border-white/10 shadow-2xl">
              <img
                src={profileImg}
                alt="Muhammad Ansar - Professional Frontend Developer"
                loading="lazy"
                className="w-56 sm:w-72 lg:w-[300px] aspect-[1/1.2] object-cover rounded-lg shadow-2xl block"
              />
            </div>

            {/* ── Arc connector line (desktop only, NO dot markers to avoid ghost circles) ── */}
            <svg
              className="hidden lg:block absolute inset-0 pointer-events-none"
              width={SVG_W}
              height={SVG_H}
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              style={{ overflow: "visible", top: 0, left: 0 }}
            >
              <motion.path
                d={ARC_PATH}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>

            {/* ── Social Icons along arc (desktop only) ── */}
            {socialLinks.map((social, i) => {
              const pos = arcPositions[i];
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hidden lg:flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.4, x: 30 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.8 + social.delay },
                    scale: { duration: 0.4, delay: 0.8 + social.delay, ease: "backOut" },
                    x: { duration: 0.4, delay: 0.8 + social.delay },
                    y: {
                      duration: 2.8 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.4 + social.delay,
                    },
                  }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.15 } }}
                  style={{
                    position: "absolute",
                    left: pos.x - HALF,
                    top: pos.y - HALF,
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    borderRadius: "50%",
                    backgroundColor: social.color,
                    color: "#fff",
                    boxShadow: `0 0 22px ${social.glow}, 0 4px 16px rgba(0,0,0,0.45)`,
                    border: "2px solid rgba(255,255,255,0.22)",
                    cursor: "pointer",
                    textDecoration: "none",
                    zIndex: 10,
                  }}
                >
                  {social.icon}
                </motion.a>
              );
            })}

            {/* ── Social Icons: horizontal row for mobile/tablet ── */}
            <div className="flex lg:hidden justify-center gap-5 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    backgroundColor: social.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 16px ${social.glow}`,
                    border: "2px solid rgba(255,255,255,0.18)",
                    textDecoration: "none",
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

          </motion.div>
        </div>
        {/* ══ end right column ══ */}

      </div>
    </section>
  );
}