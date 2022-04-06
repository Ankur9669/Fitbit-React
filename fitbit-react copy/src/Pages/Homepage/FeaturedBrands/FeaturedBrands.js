import React from "react";
import "./featuredbrands.css";
function FeaturedBrands() {
  return (
    <div>
      <h2 className="h3 centered-text home-section-heading">Featured Brands</h2>
      <div className="spacer-3"></div>
      <section className="home-section-width featured-brands-container">
        <img
          alt="helsinki"
          src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-02.png?v=1635838337"
        />
        <img
          alt="sterling"
          src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-03.png?v=1635838351"
        />
        <img
          alt="laurie reynolds"
          src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-04.png?v=1635838374"
        />
        <img
          alt="new york handcrafted"
          src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-07.png?v=1635838427"
        />
      </section>
    </div>
  );
}

export default FeaturedBrands;
