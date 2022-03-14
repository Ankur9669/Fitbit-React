import React from "react";
import { useCart } from "../../Context/cart-context";
import "./verticalcard.css";
import { MdAddShoppingCart } from "../../Assets/icons";
import { PrimaryButton } from "../Navbar";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useReducer } from "react";
function VerticalCard({
  productId,
  productTitle,
  discountedPrice,
  realPrice,
  discountPercent,
  productImageUrl,
}) {
  const { cartReducer } = useCart();

  const [cart, dispatch] = useReducer(cartReducer, []);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productId: productId,
        productTitle: productTitle,
        discountedPrice: discountedPrice,
        realPrice: realPrice,
        discountPercent: discountPercent,
        productImageUrl: productImageUrl,
      },
    });
  };
  const removefromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        productId: productId,
      },
    });
  };
  return (
    <a className="card card-vertical card-hover">
      <div className="image-container">
        <img
          alt="reebok-resistant-tube"
          src={productImageUrl}
          className="img-responsive"
          loading="lazy"
        />
      </div>
      <div className="wrapper">
        <div className="text-container">
          <h5 className="font-medium-large weight-semi-bold primary-text-color card-vertical-heading">
            {productTitle}
            <i
              className="fa fa-heart card-vertical-like-icon"
              aria-hidden="true"
            ></i>
          </h5>
          <div className="price-container">
            <p className="font-medium inline-block weight-semi-bold primary-text-color">
              &#8377;{discountedPrice}&nbsp;
            </p>
            <p className="font-extra-small inline-block weight-semi-bold strike-through secondary-text-color">
              &#8377;{realPrice}&nbsp;
            </p>
            <p className="text-badge inline-block text-badge-rounded-border text-badge-small discount-percent">
              {discountPercent} % off
            </p>
          </div>
        </div>
        <div className="btn-container">
          <PrimaryButton
            buttonText={"Buy Now"}
            iconLeft={
              <MdAddShoppingCart
                style={{ fontSize: "1.3rem", marginRight: "3px" }}
              />
            }
          />
          <SecondaryButton buttonText={"Add to cart"} onClick={addToCart} />
        </div>
      </div>
    </a>
  );
}

export default VerticalCard;
