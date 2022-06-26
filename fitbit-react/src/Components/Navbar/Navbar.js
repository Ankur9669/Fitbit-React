import React from "react";
import "./navbar.css";
import { SearchBar, PrimaryButton, Logo, NavbarIcons, GrMenu } from "./index";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/user-context";
import { useCart } from "../../Context/cart-context";
import { useWishList } from "../../Context/wishlist-context";
import { useToast } from "../../Context/toast-context";

function Navbar() {
  const { user, dispatchUser, isUserLoggedIn } = useUser();
  const { cart, dispatch: dispatchCart } = useCart();
  const { wishList, dispatchWishList } = useWishList();
  const { showToast } = useToast();

  // Logout Functionality
  const logout = () => {
    dispatchUser({ type: "LOGOUT" });
    dispatchCart({ type: "SET_CART", payload: { value: [] } });
    dispatchWishList({ type: "SET_CART", payload: { value: [] } });
    localStorage.removeItem("token");
    showToast("Logged Out Successfully", "SUCCESS");
  };

  return (
    <nav className="navbar">
      <div aria-label="menu-icon">
        <GrMenu className="hamburger-icon" />
      </div>
      <Link to="/">
        <Logo />
      </Link>

      <div className="nav-items-container-end">
        <div className="login-search-bar-container">
          {isUserLoggedIn ? (
            <Link to="/login">
              <PrimaryButton buttonText={"Login"} />
            </Link>
          ) : (
            <PrimaryButton buttonText={"Logout"} onClick={() => logout()} />
          )}

          <SearchBar />
        </div>
        <NavbarIcons />
      </div>
    </nav>
  );
}

export default Navbar;
