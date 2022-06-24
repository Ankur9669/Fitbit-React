import React from "react";
import "./checkout-product-card.css";

function CheckoutProductCard(props) {
  const { product } = props;
  const {
    _id,
    productTitle,
    discountedPrice,
    realPrice,
    discountPercent,
    productImageUrl,
    category,
    rating,
    inStock,
    fastDelivery,
    qty,
  } = product;
  return (
    <div className="checkout-product-card">
      <div className="checkout-product-image-container">
        <img
          src={productImageUrl}
          alt="product-image"
          className="img-responsive"
        />
      </div>
      <div className="checkout-product-content-container">
        <h5 className="font-medium-large weight-semi-bold primary-text-color">
          {productTitle}
        </h5>
        <p className="font-large weight-semi-bold primary-text-color">
          &#8377;{discountedPrice}&nbsp;
          <span className="font-medium weight-semi-bold strike-through secondary-text-color">
            &#8377;{realPrice}
          </span>
        </p>
        <p className="font-small weight-semi-bold primary-text-color">
          Quantity: {qty}
        </p>
        <div className="margin-vertical-sm"></div>
        <span className="text-badge text-badge-rounded-border text-badge-medium">
          {discountPercent} % off
        </span>
      </div>
    </div>
  );
}

export default CheckoutProductCard;
