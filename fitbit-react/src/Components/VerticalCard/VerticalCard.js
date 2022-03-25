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
  addToCart,
} from "./index";
import Axios from "axios";
function VerticalCard({ product }) {
  const { cart, dispatch } = useCart();
  const {
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
  } = product;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMWM3MmY1OC1jNTIzLTQwZGUtODBjNS03MTc5NmZhZGY5ZjUiLCJlbWFpbCI6ImFkYXJzaGJhbGFrQGdtYWlsLmNvbSIsImlhdCI6MTY0Nzc3NDM4OX0.OzZVopq6Zj7iUf8MmNSk50SUs9MzfTXtR-Uenl5B8b8";

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
          <SecondaryButton
            buttonText={"Add to cart"}
            onClick={async () => {
              const cart = await addToCart(product, token);
              dispatch({ type: "SET_CART", payload: { value: cart.cart } });
            }}
            //This Token would be removed when implementing signup login
          />
        </div>
      </div>
    </a>
  );
}

export default VerticalCard;
