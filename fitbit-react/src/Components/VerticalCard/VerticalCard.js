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
  removeFromCart,
  useNavigate,
  findIfProductExistInWishList,
  findIfProductExistsInArray,
} from "./index";
import { useWishList } from "../../Context/wishlist-context";
import { addToWishList } from "../../Util/add-to-wishlist";
import { removeFromWishList } from "../../Util/remove-from-wishlist";

import Axios from "axios";
function VerticalCard({ product }) {
  const { cart, dispatch } = useCart();
  const { user, dispatchUser } = useUser();
  const { wishlist, dispatchWishList } = useWishList();
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

  const ifProductExistInCart = findIfProductExistsInArray(cart, _id);
  const ifProductExistsInWishList = findIfProductExistsInArray(wishlist, _id);

  const redirectToLoginPage = () => {
    navigate("/login");
  };
  const updateCart = async () => {
    let cart = [];
    if (!ifProductExistInCart) {
      cart = await addToCart(product);
    } else {
      cart = await removeFromCart(_id);
    }
    dispatch({
      type: "SET_CART",
      payload: { value: cart.cart },
    });
  };

  const updateWishList = async () => {
    let wishList = [];
    if (!ifProductExistsInWishList) {
      wishList = await addToWishList(product);
    } else {
      wishList = await removeFromWishList(_id);
    }
    dispatchWishList({
      type: "SET_WISHLIST",
      payload: { value: wishList.wishlist },
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
            <AiFillHeart
              style={
                ifProductExistsInWishList
                  ? { fontSize: "1.7rem", color: "red" }
                  : { fontSize: "1.7rem" }
              }
              onClick={
                user.isUserLoggedIn ? updateWishList : redirectToLoginPage
              }
            />
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
            buttonText={
              ifProductExistInCart ? "Remove from cart" : "Add to Cart"
            }
            onClick={user.isUserLoggedIn ? updateCart : redirectToLoginPage}
          />
        </div>
      </div>
    </a>
  );
}

export default VerticalCard;
