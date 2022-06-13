import React from "react";
import { AiOutlineHeart, FaShoppingCart, FaUser } from "../../Assets/icons";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { useWishList } from "../../Context/wishlist-context";
function NavbarIcons() {
  const { cart, dispatch } = useCart();
  const { wishlist } = useWishList();
  return (
    <div className="navbar-icons-container">
      <Link to="/wishlist" className="badge-container">
        <AiOutlineHeart className="navbar-icon" />
        <span className="number-badge number-badge-md">{wishlist.length}</span>
      </Link>
      <Link to="/cart" className="badge-container">
        <FaShoppingCart className="navbar-icon" />
        <span className="number-badge number-badge-md">{cart.length}</span>
      </Link>
      <Link to="/user">
        <FaUser className="navbar-icon" />
      </Link>
    </div>
  );
}

export default NavbarIcons;
