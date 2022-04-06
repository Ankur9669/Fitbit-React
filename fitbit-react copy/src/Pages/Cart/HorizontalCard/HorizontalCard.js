import React from "react";
import {
  AiFillMinusCircle,
  IoIosAddCircle,
  PrimaryButton,
  SecondaryButton,
  removeFromCart,
  useCart,
  useWishList,
  addToWishList,
  removeFromWishList,
  findIfProductExistsInArray,
  useToast,
  useUser,
  uuid,
} from "./index";
import "./horizontalcard.css";
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
  const { wishlist, dispatchWishList } = useWishList();
  const { dispatchToast } = useToast();
  const { user, dispatchUser } = useUser();

  // Function to show Toast
  const showToast = (title, type) => {
    dispatchToast({
      type: "ADD_TOAST",
      payload: {
        value: { id: uuid(), title: title, type: type },
      },
    });
  };

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

  const findIfProductExistsInCardAndUpdate = async (productId, type) => {
    let isPresent = cart.some((cartItem) => cartItem._id === productId);

    if (isPresent) {
      const { data, success, message } = await updateProductCountInCart(
        productId,
        type
      );
      if (success) {
        dispatch({ type: "SET_CART", payload: { value: data.cart } });
        showToast(message, "SUCCESS");
      } else {
        showToast(message, "ERROR");
      }
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
            onClick={user.isUserLoggedIn ? updateWishList : redirectToLoginPage}
          />
          <SecondaryButton
            buttonText={"Remove From Cart"}
            className={"my-cart-cta-btn"}
            onClick={user.isUserLoggedIn ? updateCart : redirectToLoginPage}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
