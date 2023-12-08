import React from "react";
import { NavbarSection } from "./components/NavbarSection/NavbarSection";
import { HomeSection } from "./components/HomeSection/HomeSection";
import { AboutSection } from "./components/HomeSection/AboutSection/AboutSection";

const App = () => {
  return (
    <div>
      <NavbarSection />
      <HomeSection />
      <AboutSection />
    </div>
  );
};

export default App;
