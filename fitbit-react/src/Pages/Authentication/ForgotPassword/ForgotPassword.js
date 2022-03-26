import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import AuthenticationBackground from "../AuthenticationBackground";
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication login">
          <div className="authentication-image-container">
            <img src="images/forgot-password.svg" alt="signup-image" />
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
}

export default ForgotPassword;
