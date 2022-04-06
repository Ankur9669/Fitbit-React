import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "../../../Assets/icons";
import { PrimaryButton, SecondaryButton } from "../../Cart/HorizontalCard";
import { Link } from "react-router-dom";
import "../authentication.css";
import Axios from "axios";
import { useUser } from "../../../Context/user-context";

function SignupForm() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { user, dispatchUser } = useUser();

  const onSubmitForm = (e) => {
    //TODO VALIDATIONS
    e.preventDefault();
    signUpUser();
  };

  const signUpUser = async () => {
    try {
      const response = await Axios.post("/api/auth/signup", {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        password: formDetails.password,
      });

      const token = response.data.encodedToken;
      localStorage.setItem("token", token);

      dispatchUser({
        type: "LOGIN",
        payload: { value: response.data.createdUser },
      });
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
          REGISTER WITH US
        </p>
        <div className="form-input-box">
          <input
            type="text"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, firstName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-input-box">
          <input
            type="text"
            placeholder="Last Name"
            value={formDetails.lastName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, lastName: e.target.value })
            }
            required
          />
        </div>

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

        <PrimaryButton
          buttonText="Create New Account"
          className="form-cta-button"
          onClick={(e) => onSubmitForm(e)}
        />

        <Link to="/login">
          <SecondaryButton
            buttonText="Already have an account!!!"
            className="form-cta-button"
          />
        </Link>
      </form>
    </div>
  );
}

export default SignupForm;
