import React from "react";
import "./button.css";
import { ThreeDots } from "react-loader-spinner";

// Here onClick prop is a function which defines what to do on a button click
// If onCLick is not passed it takes a function which does nothing
function PrimaryButton({
  buttonText = "",
  onClick = () => {},
  iconLeft = "",
  iconRight = "",
  className = "",
  isLoading = false,
}) {
  return (
    <button
      className={`button button-primary flex-center-horizontal-vertical ${className}`}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="button-loader">
          <ThreeDots color="#2d3092" height={"20px"} width={"50px"} />
        </div>
      ) : (
        <>
          {iconLeft !== "" ? iconLeft : <></>}
          {buttonText}
          {iconRight !== "" ? iconRight : <></>}
        </>
      )}
    </button>
  );
}

export default PrimaryButton;
