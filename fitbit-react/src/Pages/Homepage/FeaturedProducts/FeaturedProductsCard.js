import React from "react";
import { BsFillHeartFill } from "../../../Assets/icons";
function FeaturedProductsCard({
  imageUrl,
  cardTitle,
  price,
  discountedPrice,
  discountPercent,
  redirectUrl,
}) {
  return (
    <a className="card card-vertical card-hover">
      <div className="image-container">
        <img
          alt="card-image"
          src={imageUrl}
          className="img-responsive"
          loading="lazy"
        />
      </div>
      <div className="wrapper">
        <div className="text-container">
          <h5 className="font-medium-large weight-semi-bold primary-text-color card-vertical-heading">
            {cardTitle}
            <BsFillHeartFill style={{ fontSize: "1.4rem" }} />
          </h5>
          <div className="margin-vertical-xs"></div>
          <p className="font-medium weight-semi-bold primary-text-color">
            &#8377;{price}&nbsp;
            <span className="font-extra-small weight-semi-bold strike-through secondary-text-color">
              &#8377;{discountedPrice}&nbsp;
            </span>
            <span className="text-badge text-badge-rounded-border text-badge-small discount-percent-horizontal">
              {discountPercent} % off
            </span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default FeaturedProductsCard;
