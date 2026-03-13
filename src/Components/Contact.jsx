import React, { useState } from "react";
import { motion } from "framer-motion";
import last from "../assets/last.png";
import SendIcon from "@mui/icons-material/Send";
import keyboardIcon from "../assets/keyboard.png";
import msgeIcon from "../assets/msgeIcon.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const sendEmail = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_a3hrtyd",
        "template_8vwmqbl",
        templateParams,
        "NMEQv3vLnm1K0IIPZ"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-[#1E1E2F] w-full py-20 px-6 border-t border-gray-700 min-h-screen"
    >
      {/* Top Icon Animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-10"
      >
        <img src={keyboardIcon} alt="Keyboard Icon" className="w-28 opacity-80" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Need a Professional <span className="text-[#00ADB5]">Frontend Developer?</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            If you're building a SaaS platform, modern web app, or complex dashboard —
            let's discuss how I can craft a stunning, high-performance frontend for you, 
            backed by my professional team for full-scale solutions.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-10 shadow-xl shadow-cyan-500/30 rounded-2xl"
          >
            <img src={last} alt="Contact Visual Illustration" loading="lazy" className="w-72 mx-auto" />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-xl bg-[#2A2A40] p-8 rounded-3xl shadow-2xl"
        >
          <div className="flex flex-col gap-5">

            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#3A3A55] text-white rounded-xl px-4 h-12 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />

            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-[#3A3A55] text-white rounded-xl px-4 h-12 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />

            <motion.textarea
              whileFocus={{ scale: 1.03 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="bg-[#3A3A55] text-white rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />

            {status && (
              <p
                className={`text-sm text-center ${
                  status === "Message sent successfully!"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendEmail}
              disabled={loading}
              className="bg-[#00ADB5] h-12 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-cyan-500 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
              <SendIcon />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6"
          >
            <img src={msgeIcon} alt="Message Icon" className="w-8 opacity-70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;