import React from "react";
import { ThreeDots } from "react-loader-spinner";

function SecondaryButton({
  buttonText = "",
  onClick = () => {},
  iconLeft = "",
  iconRight = "",
  className = "",
  isLoading = false,
}) {
  return (
    <button
      className={`button button-outline-secondary flex-center-horizontal-vertical ${className}`}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="button-loader">
          <ThreeDots color="#2d3092" height={"20px"} width={"40px"} />
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

export default SecondaryButton;
