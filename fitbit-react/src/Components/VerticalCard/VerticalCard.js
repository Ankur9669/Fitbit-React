import React from "react";
import "./verticalcard.css";
import {
  MdAddShoppingCart,
  AiFillHeart,
  PrimaryButton,
  SecondaryButton,
  useReducer,
  RatingBar,
  useCart,
} from "./index";

function VerticalCard({
  product: {
    _id,
    productTitle,
    discountedPrice,
    realPrice,
    discountPercent,
    productImageUrl,
    category,
    inStock,
    fastDelivery,
    rating,
  },
}) {
  const { cartReducer } = useCart();

  const [cart, dispatch] = useReducer(cartReducer, []);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        _id: _id,
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
        _id: _id,
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
            <AiFillHeart style={{ fontSize: "1.7rem" }} />
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
          <RatingBar rating={rating} style={{ marginLeft: "-3px" }} />
          <p className="font-medium inline-block weight-semi-bold primary-text-color">
            {inStock === true ? "InStock" : "Out Of Stock"}
          </p>
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
