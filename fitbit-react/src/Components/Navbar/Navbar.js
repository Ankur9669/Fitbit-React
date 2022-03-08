import React from "react";
import { GrMenu } from "react-icons/gr";
import "./navbar.css";
import SearchBar from "./SearchBar";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "./Logo";
import NavbarIcons from "./NavbarIcons";

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
