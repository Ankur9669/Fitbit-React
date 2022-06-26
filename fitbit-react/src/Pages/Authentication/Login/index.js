import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useUser } from "../../../Context/user-context";
import { useCart } from "../../../Context/cart-context";
import { useAddresses } from "../../../Context/address-context";
import { useToast } from "../../../Context/toast-context";
import { useLocation } from "react-router-dom";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "../../../Assets/icons";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../../Components/Buttons/SecondaryButton";
import { useWishList } from "../../../Context/wishlist-context";

export {
  Link,
  useNavigate,
  Axios,
  useUser,
  useCart,
  useAddresses,
  useToast,
  useLocation,
  useWishList,
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
};
