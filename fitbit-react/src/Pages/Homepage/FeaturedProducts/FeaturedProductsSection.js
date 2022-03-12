import React from "react";
import "./featuredproductssection.css";
import FeaturedProductsCard from "./FeaturedProductsCard";
function FeaturedProductsSection() {
  return (
    <div>
      <h2 class="h3 centered-text home-section-heading">Featured Products</h2>
      <div class="spacer-3"></div>
      <section class="featured-products-section home-section-width">
        <FeaturedProductsCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product38.jpg?v=1636690872"
          }
          cardTitle={"Reebok Resistant Tube"}
          price={"200"}
          discountedPrice={"300"}
          discountPercent="11"
          redirectUrl={""}
        />
        <FeaturedProductsCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product38.jpg?v=1636690872"
          }
          cardTitle={"Reebok Resistant Tube"}
          price={"200"}
          discountedPrice={"300"}
          discountPercent="11"
          redirectUrl={""}
        />
        <FeaturedProductsCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product38.jpg?v=1636690872"
          }
          cardTitle={"Reebok Resistant Tube"}
          price={"200"}
          discountedPrice={"300"}
          discountPercent="11"
          redirectUrl={""}
        />
      </section>
    </div>
  );
}

export default FeaturedProductsSection;
