import { AiFillMinusCircle } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { PrimaryButton } from "../../../Components/Navbar";
import { SecondaryButton } from "../../../Components/VerticalCard";
import { removeFromCart } from "../../../Util/remove-from-cart";
import { useCart } from "../../../Context/cart-context";
<<<<<<< HEAD
import { useWishList } from "../../../Context/wishlist-context";
import { addToWishList } from "../../../Util/add-to-wishlist";
import { removeFromWishList } from "../../../Util/remove-from-wishlist";
import { findIfProductExistsInArray } from "../../../Util/find-if-product-exists-in-array";
import { useToast } from "../../../Context/toast-context";
import { useUser } from "../../../Context/user-context";
import { v4 as uuid } from "uuid";

=======
>>>>>>> parent of b460ecf (Wish list functionality (#14))
export {
  AiFillMinusCircle,
  IoIosAddCircle,
  PrimaryButton,
  SecondaryButton,
  removeFromCart,
  useCart,
<<<<<<< HEAD
  useWishList,
  useToast,
  addToWishList,
  removeFromWishList,
  findIfProductExistsInArray,
  useUser,
  uuid,
=======
>>>>>>> parent of b460ecf (Wish list functionality (#14))
};
