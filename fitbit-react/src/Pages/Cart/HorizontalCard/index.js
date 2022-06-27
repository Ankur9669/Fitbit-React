import { AiFillMinusCircle } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { PrimaryButton } from "../../../Components/Navbar";
import { SecondaryButton } from "../../../Components/VerticalCard";
import { removeFromCart } from "../../../Util/remove-from-cart";
import { useCart } from "../../../Context/cart-context";
import { useWishList } from "../../../Context/wishlist-context";
import { addToWishList } from "../../../Util/add-to-wishlist";
import { removeFromWishList } from "../../../Util/remove-from-wishlist";
import { findIfProductExistsInArray } from "../../../Util/find-if-product-exists-in-array";
import { updateProductCountInCart } from "../../../Util/update-product-in-cart";
import { useToast } from "../../../Context/toast-context";

export {
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
};
