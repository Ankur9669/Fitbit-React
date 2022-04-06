import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin, BsTwitter } from "../../Assets/icons";

function Footer() {
  return (
    <footer>
      <p className="font-medium-large">Made with ♥ by Ankur Gupta</p>
      <div className="footer-icons-container">
        <a href="#">
          <BsGithub className="footer-icon" />
        </a>
        <a href="#">
          <BsLinkedin className="footer-icon" />
        </a>
        <a href="#">
          <BsTwitter className="footer-icon" />
        </a>
      </div>
      <p className="font-medium-large">&copy;Copyright 2022</p>
    </footer>
  );
}

export default Footer;
