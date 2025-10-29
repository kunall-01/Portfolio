import React from "react";
import PortfolioNavbar from "./components/Navbar";
import GalaxyHero from "./components/HeroSection";
import AboutSection from "./components/AboutMe";
import ProjectsSection from "./components/ProjectSection";

function App() {
  return (
    <div>
      <PortfolioNavbar />
      <GalaxyHero />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
