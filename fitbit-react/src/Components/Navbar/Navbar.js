import React from "react";
import "./navbar.css";
import { SearchBar, PrimaryButton, Logo, NavbarIcons, GrMenu } from "./index";

function Navbar() {
  return (
    <nav className="navbar">
      <div aria-label="menu-icon">
        <GrMenu className="hamburger-icon" />
      </div>
      <Logo />
      <div className="nav-items-container-end">
        <div className="login-search-bar-container">
          <PrimaryButton buttonText={"Login"} />
          <SearchBar />
        </div>
        <NavbarIcons />
      </div>
    </nav>
  );
}

export default Navbar;
