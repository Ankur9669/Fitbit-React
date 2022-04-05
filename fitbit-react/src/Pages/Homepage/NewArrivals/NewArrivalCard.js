import React from "react";
import { Link } from "react-router-dom";

function NewArrivalCard({ imageUrl, text }) {
  return (
    <Link to="/products" className="card card-only-image card-new-arrival">
      <div className="text-overlay">
        <div className="text-overlay-text-container">
          <p className="font-medium-large weight-semi-bold">{text}</p>
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
    </Link>
  );
}

export default NewArrivalCard;
