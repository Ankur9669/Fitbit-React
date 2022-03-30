import { MdAddShoppingCart, AiFillHeart } from "../../Assets/icons";
import { PrimaryButton } from "../Navbar";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useReducer } from "react";
import RatingBar from "../RatingBar/RatingBar";
import { useCart } from "../../Context/cart-context";
import { addToCart } from "../../Util/add-to-cart";
import { removeFromCart } from "../../Util/remove-from-cart";
import { useUser } from "../../Context/user-context";
import { useNavigate } from "react-router-dom";

import { findIfProductExistsInArray } from "../../Util/find-if-product-exists-in-array";
export {
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
  findIfProductExistsInArray,
};
