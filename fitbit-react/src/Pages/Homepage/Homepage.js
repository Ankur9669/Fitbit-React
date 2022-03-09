import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import NewArrivalsSection from "./NewArrivals/NewArrivalsSection";
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
