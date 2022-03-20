import React from "react";
import { AiOutlineHeart, FaShoppingCart, FaUser } from "../../Assets/icons";
import { Link } from "react-router-dom";
function NavbarIcons() {
  return (
    <div className="navbar-icons-container">
      <Link to="/wishlist" className="badge-container">
        <AiOutlineHeart className="navbar-icon" />
        <span className="number-badge number-badge-md">24+</span>
      </Link>
      <Link to="/cart" className="badge-container">
        <FaShoppingCart className="navbar-icon" />
        <span className="number-badge number-badge-md">24+</span>
      </Link>
      <a href="userprofile.html">
        <FaUser className="navbar-icon" />
      </a>
    </div>
  );
}

export default NavbarIcons;
