import React from "react";

function SecondaryButton({
  buttonText = "",
  onClick = () => {},
  iconLeft = "",
  iconRight = "",
  className = "",
}) {
  return (
    <button
      className={`button button-outline-secondary flex-center-horizontal-vertical ${className}`}
      onClick={onClick}
    >
      {iconLeft !== "" ? iconLeft : <></>}
      {buttonText}
      {iconRight !== "" ? iconRight : <></>}
    </button>
  );
}

export default SecondaryButton;
