import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = ["home", "about", "services", "projects", "contact"];

  // Scroll detection for active link + navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      setIsScrolled(window.scrollY > 20);

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Proper scroll offset for fixed navbar
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const offsetTop = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-white">
        
        {/* Logo / Branding */}
        <motion.div 
          onClick={() => scrollToSection("home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer group select-none"
        >
          <div className="text-xl font-bold tracking-tight">
            Muhammad <span className="text-[#00E5D0] group-hover:text-white transition-colors duration-300">Ansar</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium group-hover:text-[#00E5D0] transition-colors duration-300">
            Frontend Developer
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium tracking-wide">
          {sections.map((item, idx) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item)}
                className={`relative px-2 py-1 cursor-pointer transition-colors duration-300 hover:text-white ${
                  activeSection === item ? "text-[#00E5D0]" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Animated active underline */}
                {activeSection === item && (
                  <motion.span 
                    layoutId="activeUnderline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00E5D0] shadow-[0_0_8px_rgba(0,229,208,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer hover:text-[#00E5D0] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-4 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0B1120]/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="flex flex-col gap-2 p-6 text-slate-300 font-medium">
              {sections.map((item, idx) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/5 hover:text-[#00E5D0] ${
                      activeSection === item ? "text-[#00E5D0] bg-white/5" : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

