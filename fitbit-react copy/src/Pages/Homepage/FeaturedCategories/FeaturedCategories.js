import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../Context/filter-context";
import NewArrivalCard from "../NewArrivals/NewArrivalCard";
import "./featuredcategories.css";

function FeaturedCategories() {
  const { dispatch } = useFilter();
  const navigate = useNavigate();
  const handleOnCardClick = (key) => {
    dispatch({
      type: "FILTER_BY",
      payload: { value: true, key: key },
    });
    navigate("/products");
  };

  return (
    <>
      <section className="home-section-width new-arrivals-section">
        <h2 className="h3 centered-text home-section-heading">
          Featured Categories
        </h2>
        <div className="spacer-3"></div>
        <NewArrivalCard
          imageUrl={"/images/fitbit-dumbells.jpg"}
          text={"Dumbells"}
          value={"dumbells"}
          handleOnCardClick={handleOnCardClick}
        />
        <NewArrivalCard
          imageUrl={"/images/fitbit-gloves.jpg"}
          text={"Hand Gloves"}
          value={"handGloves"}
          handleOnCardClick={handleOnCardClick}
        />
      </section>
    </>
  );
}

export default FeaturedCategories;
