import React from "react";
import "./button.css";

// Here onClick prop is a function which defines what to do on a button click
// If onCLick is not passed it takes a function which does nothing
function PrimaryButton({
  buttonText = "",
  onClick = () => {},
  iconLeft = "",
  iconRight = "",
}) {
  return (
    <button
      className="button button-primary flex-center-horizontal-vertical"
      onClick={onClick}
    >
      {iconLeft !== "" ? iconLeft : <></>}
      {buttonText}
      {iconRight !== "" ? iconRight : <></>}
    </button>
  );
}

export default PrimaryButton;
