import React from "react";
import { Navbar, Footer, HeroSection, NewArrivalsSection } from "./index";
import "./homepage.css";
import FeaturedProductsSection from "./FeaturedProducts/FeaturedProductsSection";
import FeaturedBrands from "./FeaturedBrands/FeaturedBrands";
function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="spacer-3"></div>
      <div className="spacer-3"></div>

      <NewArrivalsSection />

      <div className="spacer-3"></div>
      <div className="spacer-3"></div>

      <FeaturedProductsSection />

      <div className="spacer-3"></div>
      <div className="spacer-3"></div>

      <FeaturedBrands />

      <div className="spacer-3"></div>
      <div className="spacer-3"></div>

      <Footer />
    </div>
  );
}

export default Homepage;
