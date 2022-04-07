import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin, BsTwitter } from "../../Assets/icons";

function Footer() {
  return (
    <footer>
      <p className="font-medium-large">Made with ♥ by Ankur Gupta</p>
      <div className="footer-icons-container">
        <a href="https://github.com/Ankur9669" target="_blank">
          <BsGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ankur-gupta-0805a11a7/"
          target="_blank"
        >
          <BsLinkedin className="footer-icon" />
        </a>
        <a href="https://twitter.com/a2beff5d6b694ad" target="_blank">
          <BsTwitter className="footer-icon" />
        </a>
      </div>
      <p className="font-medium-large">&copy;Copyright 2022</p>
    </footer>
  );
}

export default Footer;
