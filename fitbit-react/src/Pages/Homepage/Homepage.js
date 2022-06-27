import React, { useEffect } from "react";
import { Navbar, Footer, HeroSection, NewArrivalsSection } from "./index";
import "./homepage.css";
import FeaturedProductsSection from "./FeaturedProducts/FeaturedProductsSection";
import FeaturedBrands from "./FeaturedBrands/FeaturedBrands";

import { useDocumentTitle } from "../../Util/change-document-title";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
function Homepage() {
  // For scrolling to top
  useEffect(() => {
    window.scrollTo(0, 0);
    useDocumentTitle("FiTBiT-HomePage");
  }, []);

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

      <FeaturedCategories />

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
