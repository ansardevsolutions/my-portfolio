import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import QuoteSection from "./components/QuoteSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PremiumLoader from "./components/PremiumLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PremiumLoader />;
  }

  return (
    <Box minHeight="100vh" sx={{ backgroundColor: '#282C33' }}>
      <Navigation />
      <HeroSection />
      <QuoteSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
