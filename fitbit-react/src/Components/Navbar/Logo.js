import React from "react";

function Logo() {
  return (
    <div className="logo-container" aria-label="fitbit-logo">
      <div className="logo">
        <img className="logo-image" alt="logo" src="images/neatUI.svg" />
        <span className="logo-text">FiT</span>
        BiT
      </div>
    </div>
  );
}

export default Logo;
