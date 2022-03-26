import React from "react";
import {
  AiFillMinusCircle,
  IoIosAddCircle,
  PrimaryButton,
  SecondaryButton,
  removeFromCart,
  useCart,
} from "./index";
import "./horizontalcard.css";
import { token } from "../../../Util/token";
import { updateProductCountInCart } from "../../../Util/update-product-in-cart";
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
  const { cart, dispatch } = useCart();

  const findIfProductExistsInCardAndUpdate = async (productId, type) => {
    let isPresent = cart.some((cartItem) => cartItem._id === productId);

    if (isPresent) {
      const cart = await updateProductCountInCart(productId, type);
      dispatch({ type: "SET_CART", payload: { value: cart.cart } });
    }
  };
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
            <button
              className="quantity-btn"
              disabled={qty === 1 ? true : false}
              onClick={() =>
                findIfProductExistsInCardAndUpdate(_id, "decrement")
              }
            >
              <AiFillMinusCircle style={{ fontSize: "1.7rem" }} />
            </button>
            <span className="quantity-info">{qty}</span>
            <button
              className="quantity-btn"
              onClick={() =>
                findIfProductExistsInCardAndUpdate(_id, "increment")
              }
            >
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
              const cart = await removeFromCart(_id);
              // console.log(cart.cart);
              dispatch({ type: "SET_CART", payload: { value: cart.cart } });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
