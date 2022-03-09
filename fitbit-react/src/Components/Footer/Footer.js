import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <p class="font-medium-large">Made with ♥ by Ankur Gupta</p>
      <div class="footer-icons-container">
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
      <p class="font-medium-large">&copy;Copyright 2022</p>
    </footer>
  );
}

export default Footer;
