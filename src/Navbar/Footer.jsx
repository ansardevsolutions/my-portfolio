import React from "react";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaGithub, FaWhatsapp } from "react-icons/fa";


function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", icon: <HomeOutlinedIcon />, label: "Home" },
    { id: "about", icon: <PersonOutlineOutlinedIcon />, label: "About Me" },
    { id: "contact", icon: <CallOutlinedIcon />, label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "mailto:ansar.devsolutions@gmail.com",
      icon: <CgMail />,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/ansardevsolutions",
      icon: <CiLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/ansardevsolutions",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://wa.me/923098295120",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
    },
  ];

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#1E1E2F] w-full py-16 flex flex-col items-center gap-10 border-t border-gray-700"
    >
      {/* Navigation */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[#EEEEEE]">
        {navLinks.map((link) => (
          <motion.div
            key={link.id}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 cursor-pointer hover:text-[#00ADB5] transition-colors"
            onClick={() => scrollToSection(link.id)}
          >
            {link.icon}
            <span>{link.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {socialLinks.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center 
                       hover:bg-[#00ADB5] transition-all duration-300 shadow-md hover:shadow-cyan-500/40"
            aria-label={social.label}
          >
            {React.cloneElement(social.icon, {
              className: "text-white w-6 h-6",
            })}
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-[#EEEEEE80] text-sm text-center mt-6 leading-relaxed">
        © {new Date().getFullYear()} <span className="text-[#00ADB5] font-medium">Muhammad Ansar</span> <br />
        Frontend Developer | Building Professional SaaS-Level Solutions <br />
        All Rights Reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;