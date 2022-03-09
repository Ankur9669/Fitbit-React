import React from "react";

function NewArrivalCard({ imageUrl }) {
  return (
    <a href="products.html" className="card card-only-image card-new-arrival">
      <div className="text-overlay">
        <div className="text-overlay-text-container">
          <p className="font-medium-large weight-semi-bold">New Arrival</p>
          <p className="font-large secondary-text-color weight-semi-bold">
            JUST FOR YOU
          </p>
        </div>
      </div>
      <div className="image-container">
        <img
          alt="card-image"
          src={imageUrl}
          className="img-responsive"
          loading="lazy"
        />
      </div>
    </a>
  );
}

export default NewArrivalCard;
