import React, { useState } from "react";
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
  useWishList,
  addToWishList,
  removeFromWishList,
  useToast,
} from "./index";

function VerticalCard({ product }) {
  const { cart, dispatch } = useCart();
  const { user, dispatchUser } = useUser();
  const { wishlist, dispatchWishList } = useWishList();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [cartLoader, setCartLoader] = useState(false);
  const [wishListLoader, setWishListLoader] = useState(false);

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
    showToast("Please Login First", "SUCCESS");
    navigate("/cart");
  };
  const updateCart = async () => {
    if (cartLoader === false) {
      setCartLoader((cartLoader) => !cartLoader);
      let cart = [];
      if (!ifProductExistInCart) {
        cart = await addToCart(product);
        showToast("Item Added To Cart", "SUCCESS");
      } else {
        cart = await removeFromCart(_id);
        showToast("Item Removed From Cart", "SUCCESS");
      }
      dispatch({
        type: "SET_CART",
        payload: { value: cart.cart },
      });
      setCartLoader((cartLoader) => !cartLoader);
    }
  };

  const updateWishList = async () => {
    if (wishListLoader === false) {
      setWishListLoader((wishListLoader) => !wishListLoader);
      let wishList = [];
      if (!ifProductExistsInWishList) {
        wishList = await addToWishList(product);
        showToast("Item Added To WishList", "SUCCESS");
      } else {
        wishList = await removeFromWishList(_id);
        showToast("Item Removed From WishList", "SUCCESS");
      }
      dispatchWishList({
        type: "SET_WISHLIST",
        payload: { value: wishList.wishlist },
      });
      setWishListLoader((wishListLoader) => !wishListLoader);
    }
  };

  const handleBuyNowClick = async () => {
    if (user.isUserLoggedIn) {
      await updateCart();
      navigate("/cart");
    } else {
      redirectToLoginPage();
    }
  };

  return (
    <div className="card card-vertical card-hover">
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
                user.isUserLoggedIn
                  ? updateWishList
                  : () => navigate("/wishlist")
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
            onClick={handleBuyNowClick}
          />
          <SecondaryButton
            buttonText={
              ifProductExistInCart ? "Remove from cart" : "Add to Cart"
            }
            onClick={user.isUserLoggedIn ? updateCart : redirectToLoginPage}
            isLoading={cartLoader}
          />
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
