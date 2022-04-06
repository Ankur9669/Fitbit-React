import React from "react";
import { AiOutlineHeart, FaShoppingCart, FaUser } from "../../Assets/icons";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
function NavbarIcons() {
  const { cart, dispatch } = useCart();
  return (
    <div className="navbar-icons-container">
      <Link to="/wishlist" className="badge-container">
        <AiOutlineHeart className="navbar-icon" />
        <span className="number-badge number-badge-md">24+</span>
      </Link>
      <Link to="/cart" className="badge-container">
        <FaShoppingCart className="navbar-icon" />
        <span className="number-badge number-badge-md">{cart.length}</span>
      </Link>
      <a href="userprofile.html">
        <FaUser className="navbar-icon" />
      </a>
    </div>
  );
}

export default NavbarIcons;
