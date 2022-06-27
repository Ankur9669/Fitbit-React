import React from "react";
import { v4 as uuid } from "uuid";
import "./featuredproductssection.css";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { useProduct } from "../../../Context/products-context";

function FeaturedProductsSection() {
  const { products } = useProduct();

  let productsToShow = products?.products;

  const featuredProducts =
    productsToShow != undefined
      ? [productsToShow?.[0], productsToShow?.[1], productsToShow?.[2]]
      : [];

  return (
    <div>
      <h2 className="h3 centered-text home-section-heading">
        Featured Products
      </h2>
      <div className="spacer-3"></div>
      <section className="featured-products-section home-section-width">
        {featuredProducts !== undefined &&
          featuredProducts.map((featuredProduct) => {
            return (
              <FeaturedProductsCard
                key={uuid()}
                product={featuredProduct}
                redirectUrl="/products"
              />
            );
          })}
      </section>
    </div>
  );
}

export default FeaturedProductsSection;
