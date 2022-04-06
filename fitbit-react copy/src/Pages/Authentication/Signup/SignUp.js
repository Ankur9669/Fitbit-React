import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import "../authentication.css";

import { AiFillMail } from "react-icons/ai";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "../../../Assets/icons";
import SignupForm from "./SignupForm";
import AuthenticationBackground from "../AuthenticationBackground";
import { useDocumentTitle } from "../../../Util/change-document-title";

function SignUp() {
  useDocumentTitle("FiTbiT-SignUp");
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication">
          <div className="authentication-image-container">
            <img src="images/signup.svg" alt="signup-image" />
          </div>
          <SignupForm />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
}

export default SignUp;
