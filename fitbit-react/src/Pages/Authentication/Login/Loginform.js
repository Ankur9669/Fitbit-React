import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "../../../Assets/icons";
import {
  PrimaryButton,
  SecondaryButton,
  useWishList,
} from "../../Cart/HorizontalCard";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useUser } from "../../../Context/user-context";
import { useCart } from "../../../Context/cart-context";
import { useToast } from "../../../Context/toast-context";

function Loginform() {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { user, dispatchUser } = useUser();
  const { cart, dispatch: dispatchCart } = useCart();
  const { wishlist, dispatchWishList } = useWishList();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const onSubmitForm = (e) => {
    //TODO VALIDATIONS
    e.preventDefault();
    loginUser();
  };
  const loginUser = async () => {
    if (formDetails.email === "" || formDetails.password === "") {
      showToast("Please Enter the details first", "ERROR");
      return;
    }
    try {
      const response = await Axios.post("/api/auth/login", {
        email: formDetails.email,
        password: formDetails.password,
      });

      // console.log(response);
      const token = response.data.encodedToken;
      localStorage.setItem("token", token);

      dispatchUser({
        type: "LOGIN",
        payload: { value: response.data.foundUser },
      });

      dispatchCart({
        type: "SET_CART",
        payload: {
          value: response.data.foundUser.cart,
        },
      });

      dispatchWishList({
        type: "SET_WISHLIST",
        payload: { value: response.data.foundUser.wishlist },
      });

      showToast("Logged In Successfully", "SUCCESS");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const loginAsGuest = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });

      const token = response.data.encodedToken;
      localStorage.setItem("token", token);

      dispatchUser({
        type: "LOGIN",
        payload: { value: response.data.foundUser },
      });

      dispatchCart({
        type: "SET_CART",
        payload: {
          value: response.data.foundUser.cart,
        },
      });

      dispatchWishList({
        type: "SET_WISHLIST",
        payload: { value: response.data.foundUser.wishlist },
      });

      showToast("Logged In Successfully", "SUCCESS");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="authentication-form-container">
      <form className="authentication-form">
        <h2 className="font-large weight-semi-bold authentication-form-heading">
          <span className="logo-text font-large">FiT</span>BiT
        </h2>
        <p className="font-medium-large weight-semi-bold authentication-form-sub-heading">
          LOGIN INTO YOUR ACCOUNT
        </p>
        <div className="form-input-box">
          <input
            type="email"
            placeholder="Email Address"
            value={formDetails.email}
            onChange={(e) =>
              setFormDetails({ ...formDetails, email: e.target.value })
            }
            required
          />
          <AiOutlineMail className="mail-icon" />
        </div>
        <div className="form-input-box">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={formDetails.password}
            onChange={(e) =>
              setFormDetails({ ...formDetails, password: e.target.value })
            }
            required
          />
          {isPasswordVisible ? (
            <AiFillEye
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          ) : (
            <AiFillEyeInvisible
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          )}
        </div>
        <div className="checkbox-container">
          <span>
            <input type="checkbox" value="Remember Box" id="remember-box" />
            <label
              htmlFor="remember-box"
              className="font-medium remember-me-checkbox"
            >
              Remember Me
            </label>
          </span>
          <Link
            to="/forgotpassword"
            className="forgot-password-btn font-medium"
          >
            Forgot Password
          </Link>
        </div>

        <PrimaryButton
          buttonText="Login As Guest"
          className="form-cta-button"
          onClick={(e) => loginAsGuest(e)}
        />

        <PrimaryButton
          buttonText="Login"
          className="form-cta-button"
          onClick={(e) => onSubmitForm(e)}
        />

        <Link to="/signup">
          <SecondaryButton
            buttonText="SignUp With Us"
            className="form-cta-button"
          />
        </Link>
      </form>
    </div>
  );
}

export default Loginform;
