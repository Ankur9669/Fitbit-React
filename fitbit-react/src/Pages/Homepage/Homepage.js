import React from "react";
import { Navbar, Footer } from "./index";

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
