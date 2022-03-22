import React from "react";
import {
  AiFillMinusCircle,
  IoIosAddCircle,
  PrimaryButton,
  SecondaryButton,
  removeFromCart,
} from "./index";
import "./horizontalcard.css";
function HorizontalCard({
  product: {
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
  },
}) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMWM3MmY1OC1jNTIzLTQwZGUtODBjNS03MTc5NmZhZGY5ZjUiLCJlbWFpbCI6ImFkYXJzaGJhbGFrQGdtYWlsLmNvbSIsImlhdCI6MTY0Nzc3NDM4OX0.OzZVopq6Zj7iUf8MmNSk50SUs9MzfTXtR-Uenl5B8b8";

  return (
    <div className="card card-horizontal my-cart-card">
      <div className="image-container">
        <img
          alt={productTitle}
          src={productImageUrl}
          className="img-responsive"
        />
      </div>
      <div className="wrapper">
        <div className="text-container">
          <h5 className="font-medium-large weight-semi-bold primary-text-color">
            {productTitle}
          </h5>
          <p className="font-large weight-semi-bold primary-text-color">
            &#8377;{discountedPrice}&nbsp;
            <span className="font-medium weight-semi-bold strike-through secondary-text-color">
              &#8377;{realPrice}
            </span>
          </p>
          <div className="margin-vertical-sm"></div>
          <span className="text-badge text-badge-rounded-border text-badge-medium">
            {discountPercent} % off
          </span>
          <div className="margin-vertical-sm"></div>
          <div
            className="quantity-btn-container"
            style={{ marginLeft: "-9px" }}
          >
            <button className="quantity-btn">
              <AiFillMinusCircle style={{ fontSize: "1.7rem" }} />
            </button>
            <span className="quantity-info">{qty}</span>
            <button className="quantity-btn">
              <IoIosAddCircle style={{ fontSize: "1.8rem" }} />
            </button>
          </div>
        </div>

        <div className="btn-container my-cart-cta-btn-container">
          <PrimaryButton
            buttonText={"Move to Wishlist"}
            className={"my-cart-cta-btn"}
          />
          <SecondaryButton
            buttonText={"Remove From Cart"}
            className={"my-cart-cta-btn"}
            onClick={async () => {
              const cart = await removeFromCart(_id, token);
              dispatch({ type: "SET_CART", payload: { value: cart.cart } });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
