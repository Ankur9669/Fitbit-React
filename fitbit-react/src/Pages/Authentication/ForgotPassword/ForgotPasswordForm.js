import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "../../../Assets/icons";
import { PrimaryButton, SecondaryButton } from "../../Cart/HorizontalCard";
import { Link } from "react-router-dom";
function ForgotPasswordForm() {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="authentication-form-container">
      <form className="authentication-form">
        <h2 className="font-large weight-semi-bold authentication-form-heading">
          <span className="logo-text font-large">FiT</span>BiT
        </h2>
        <p className="font-medium-large weight-semi-bold authentication-form-sub-heading">
          FORGOT PASSWORD!!! NO WORRIES
        </p>
        <div className="form-input-box">
          <input
            type="email"
            placeholder="Email Address"
            value={formDetails.email}
            onChange={(e) =>
              setFormDetails({ ...formDetails, email: e.target.value })
            }
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
          buttonText="Reset Password"
          className="form-cta-button"
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

export default ForgotPasswordForm;
