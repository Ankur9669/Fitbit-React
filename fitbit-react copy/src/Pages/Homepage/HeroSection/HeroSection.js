import React from "react";
import "./herosection.css";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <section className="hero-section">
      <img
        className="img-responsive"
        src="https://cdn.shopify.com/s/files/1/0610/2882/7370/files/slideshowV1-bg1.jpg?v=1637316417"
        alt="hero-image"
      />
      <div className="overlay-container">
        <p className="font-medium-large weight-semi-bold margin-vertical-xs">
          FITBIT COLLECTION 2022
        </p>
        <h1 className="h1 weight-semi-bold primary-text-color margin-vertical-xs">
          Fitness Club
        </h1>
        <Link to="/products" className="button button-primary shop-btn">
          Shop now
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
