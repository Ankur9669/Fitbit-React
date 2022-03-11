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

      <div class="spacer-3"></div>
      <div class="spacer-3"></div>

      <NewArrivalsSection />

      <div class="spacer-3"></div>
      <div class="spacer-3"></div>

      <FeaturedProductsSection />

      <div class="spacer-3"></div>
      <div class="spacer-3"></div>

      <FeaturedBrands />

      <div class="spacer-3"></div>
      <div class="spacer-3"></div>

      <Footer />
    </div>
  );
}

export default Homepage;
