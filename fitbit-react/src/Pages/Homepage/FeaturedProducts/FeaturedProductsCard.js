import React from "react";
import { BsFillHeartFill } from "../../../Assets/icons";
import { Link } from "react-router-dom";

function FeaturedProductsCard({ product, redirectUrl = "/products" }) {
  return (
    <Link to={redirectUrl} className="card card-vertical card-hover">
      <div className="image-container">
        <img
          alt="card-image"
          src={product.productImageUrl}
          className="img-responsive"
          loading="lazy"
        />
      </div>
      <div className="wrapper">
        <div className="text-container">
          <h5 className="font-medium-large weight-semi-bold primary-text-color card-vertical-heading">
            {product.productTitle}
            <BsFillHeartFill style={{ fontSize: "1.4rem" }} />
          </h5>
          <div className="margin-vertical-xs"></div>
          <p className="font-medium weight-semi-bold primary-text-color">
            &#8377;{product.discountedPrice}&nbsp;
            <span className="font-extra-small weight-semi-bold strike-through secondary-text-color">
              &#8377;{product.realPrice}&nbsp;
            </span>
            <span className="text-badge text-badge-rounded-border text-badge-small discount-percent-horizontal">
              {product.discountPercent} % off
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedProductsCard;
