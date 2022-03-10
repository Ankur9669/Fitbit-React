import React from "react";
import { Navbar, Footer, HeroSection, NewArrivalsSection } from "./index";
import "./homepage.css";
function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div class="spacer-3"></div>
      <div class="spacer-3"></div>

      <NewArrivalsSection />

      <div class="spacer-3"></div>
      <div class="spacer-3"></div>

      <Footer />
    </div>
  );
}

export default Homepage;
