import React, { useState } from "react";
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
  updateProductCountInCart,
  useToast,
} from "./index";
import "./horizontalcard.css";

function HorizontalCard({ product }) {
  const {
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
  } = product;
  const { cart, dispatch } = useCart();
  const { wishlist, dispatchWishList } = useWishList();
  const { showToast } = useToast();
  const [isCartLoading, setCartLoading] = useState(false);
  const [isWishListLoading, setWishListLoading] = useState(false);
  const [isProductUpdating, setProductUpdating] = useState(false);

  let ifProductExistsInWishList = findIfProductExistsInArray(wishlist, _id);

  const findIfProductExistsInCardAndUpdate = async (productId, type) => {
    if (!isProductUpdating) {
      setProductUpdating(true);
      let isPresent = cart.some((cartItem) => cartItem._id === productId);

      if (isPresent) {
        const cart = await updateProductCountInCart(productId, type);
        dispatch({ type: "SET_CART", payload: { value: cart.cart } });
        showToast("Item Updated", "SUCCESS");
      }
      setProductUpdating(false);
    }
  };

  const updateWishList = async () => {
    if (!isWishListLoading) {
      setWishListLoading(true);
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
      setWishListLoading(false);
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
            buttonText={
              ifProductExistsInWishList
                ? "Remove from Wishlist"
                : "Move to Wishlist"
            }
            className={"my-cart-cta-btn"}
            onClick={updateWishList}
            isLoading={isWishListLoading}
          />
          <SecondaryButton
            buttonText={"Remove From Cart"}
            className={"my-cart-cta-btn"}
            onClick={async () => {
              if (!isCartLoading) {
                setCartLoading(true);
                const cart = await removeFromCart(_id);
                dispatch({ type: "SET_CART", payload: { value: cart.cart } });
                setCartLoading(false);
              }
            }}
            isLoading={isCartLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
