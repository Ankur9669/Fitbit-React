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
  useUser,
  addToCart,
  useNavigate,
} from "./index";

import Axios from "axios";
function VerticalCard({ product }) {
  const { cart, dispatch } = useCart();
  const { user, dispatchUser } = useUser();
  const navigate = useNavigate();
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

  // Function to check if product exists in cart
  const findIfProductExistInCart = (productId) => {
    return cart.some((cartItem) => cartItem._id === productId);
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
            onClick={
              user.isUserLoggedIn
                ? async () => {
                    const productExistsInCart = findIfProductExistInCart(_id);
                    if (!productExistsInCart) {
                      const cart = await addToCart(product);
                      dispatch({
                        type: "SET_CART",
                        payload: { value: cart.cart },
                      });
                    }
                  }
                : () => navigate("/login")
            }
          />
        </div>
      </div>
    </a>
  );
}

export default VerticalCard;
