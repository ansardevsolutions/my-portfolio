import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";
import Home from "./Components/Home";
import Aboutme from "./Components/Aboutme";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import ScrollDownButton from "./Components/ScrollDownButton";
import WhyWorkWithMe from "./Components/WhyWorkWithMe";
import StarBackground from "./Components/StarBackground";

function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <Home />
      <Aboutme />
      <Services />
      <Project />
      <WhyWorkWithMe />
      <Contact />
      <Footer />

      {/* Fixed Scroll Button on all pages */}
      <ScrollDownButton />
    </>
  );
}

export default App;