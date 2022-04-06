import React from "react";
import NewArrivalCard from "./NewArrivalCard";
import "./newarrivals.css";
import { useNavigate } from "react-router-dom";

function NewArrivalsSection() {
  const navigate = useNavigate();

  const handleOnCardClick = () => {
    navigate("/products");
  };
  return (
    <>
      <h2 className="h3 home-section-heading">New Arrivals</h2>
      <div className="spacer-3"></div>
      <section className="new-arrivals-section home-section-width">
        <NewArrivalCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0610/2882/7370/files/banner-v1-img1.jpg?v=1637419106"
          }
          text={"New Arrivals"}
          handleOnCardClick={handleOnCardClick}
        />
        <NewArrivalCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0610/2882/7370/files/banner-v1-img2.jpg?v=1637420182"
          }
          text={"New Arrivals"}
          handleOnCardClick={handleOnCardClick}
        />
      </section>
    </>
  );
}

export default NewArrivalsSection;
