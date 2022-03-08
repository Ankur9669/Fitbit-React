import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
function NavbarIcons() {
  return (
    <div className="navbar-icons-container">
      <a href="wishlist.html" className="badge-container">
        <AiOutlineHeart className="navbar-icon" />
        <span className="number-badge number-badge-md">24+</span>
      </a>
      <a href="mycart.html" className="badge-container">
        <FaShoppingCart className="navbar-icon" />
        <span className="number-badge number-badge-md">24+</span>
      </a>
      <a href="userprofile.html">
        <FaUser className="navbar-icon" />
      </a>
    </div>
  );
}

export default NavbarIcons;
