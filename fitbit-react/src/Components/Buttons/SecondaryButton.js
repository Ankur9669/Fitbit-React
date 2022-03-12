import React from "react";

function SecondaryButton({
  buttonText = "",
  onClick = () => {},
  iconLeft = "",
  iconRight = "",
}) {
  return (
    <button
      className="button button-outline-secondary flex-center-horizontal-vertical"
      onClick={onClick}
    >
      {iconLeft !== "" ? iconLeft : <></>}
      {buttonText}
      {iconRight !== "" ? iconRight : <></>}
    </button>
  );
}

export default SecondaryButton;
