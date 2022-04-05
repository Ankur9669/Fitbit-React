import React from "react";
import { Navbar, Footer, HeroSection, NewArrivalsSection } from "./index";
import "./homepage.css";
import FeaturedProductsSection from "./FeaturedProducts/FeaturedProductsSection";
import FeaturedBrands from "./FeaturedBrands/FeaturedBrands";
import Axios from "axios";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
function Homepage() {
  //To remove

  // Axios.post("/api/auth/login", {
  //   email: "adarshbalak@gmail.com",
  //   password: "adarshBalaki123",
  // }).then((res) => console.log(res));

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
