import { MdAddShoppingCart, AiFillHeart } from "../../Assets/icons";
import { PrimaryButton } from "../Navbar";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useReducer } from "react";
import RatingBar from "../RatingBar/RatingBar";
import { useCart } from "../../Context/cart-context";
import { useToast } from "../../Context/toast-context";
import { addToCart } from "../../Util/add-to-cart";
import { useUser } from "../../Context/user-context";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { findIfProductExistsInArray } from "../../Util/find-if-product-exists-in-array";
import { addToWishList } from "../../Util/add-to-wishlist";
import { removeFromWishList } from "../../Util/remove-from-wishlist";
import { useWishList } from "../../Context/wishlist-context";

export {
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
  useNavigate,
  findIfProductExistsInArray,
  uuid,
  addToWishList,
  removeFromWishList,
  useWishList,
};
