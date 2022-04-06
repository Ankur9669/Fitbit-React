import React from "react";
import "./navbar.css";
import { SearchBar, PrimaryButton, Logo, NavbarIcons, GrMenu } from "./index";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/user-context";
import { useCart } from "../../Context/cart-context";

function Navbar() {
  const { user, dispatchUser } = useUser();
  const { cart, dispatch: dispatchCart } = useCart();
  // const { wishList, dispatchWishList } = useWishList();

  // Logout Functionality
  const logout = () => {
    dispatchUser({ type: "LOGOUT" });
    dispatchCart({ type: "SET_CART", payload: { value: [] } });
    // dispatchWishList({ type: "SET_CART", payload: { value: [] } });
    localStorage.removeItem("token");
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
          {!user.isUserLoggedIn ? (
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
