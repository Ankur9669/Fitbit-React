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
  useToast,
  addToCart,
  removeFromCart,
  useNavigate,
  findIfProductExistInWishList,
  findIfProductExistsInArray,
  uuid,
  addToWishList,
  removeFromWishList,
  useWishList,
} from "./index";

function VerticalCard({ product }) {
  const { cart, dispatch } = useCart();
  const { user, dispatchUser } = useUser();
  const { wishlist, dispatchWishList } = useWishList();
  const { dispatchToast, showToast } = useToast();
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
    showToast("Please Login First", "ERROR");
    navigate("/login");
  };

  // Function to update cart
  const updateCart = async () => {
    let cart = [];
    if (!ifProductExistInCart) {
      const { data, success, message } = await addToCart(product);
      if (success) {
        cart = data;
        showToast(message, "SUCCESS");
      } else {
        showToast(message, "ERROR");
      }
    } else {
      const { data, success, message } = await removeFromCart(_id);
      if (success) {
        cart = data;
        showToast(message, "SUCCESS");
      } else {
        showToast(message, "ERROR");
      }
    }
    dispatch({
      type: "SET_CART",
      payload: { value: cart.cart },
    });
  };

  // Function to update wishlist
  const updateWishList = async () => {
    let wishList = [];
    if (!ifProductExistsInWishList) {
      const { data, success, message } = await addToWishList(product);
      if (success) {
        wishList = data;
        showToast(message, "SUCCESS");
      } else {
        showToast(message, "ERROR");
      }
    } else {
      const { data, success, message } = await removeFromWishList(_id);
      if (success) {
        wishList = data;
        showToast(message, "SUCCESS");
      } else {
        showToast(message, "ERROR");
      }
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
