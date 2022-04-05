import React from "react";
import NewArrivalCard from "../NewArrivals/NewArrivalCard";
import "./featuredcategories.css";

function FeaturedCategories() {
  return (
    <>
      <section className="home-section-width new-arrivals-section">
        <h2 className="h3 centered-text home-section-heading">
          Featured Categories
        </h2>
        <div className="spacer-3"></div>
        {/* <div className="featured-brand-card">
          <img
            src="/images/fitbit-clothes.jpg"
            alt="clothes"
            className="featured-brand-image img-responsive"
          />
        </div> */}
        <NewArrivalCard
          imageUrl={"/images/fitbit-dumbells.jpg"}
          text={"Dumbells"}
        />
        <NewArrivalCard
          imageUrl={"/images/fitbit-gloves.jpg"}
          text={"Hand Gloves"}
        />
      </section>
    </>
  );
}

export default FeaturedCategories;
