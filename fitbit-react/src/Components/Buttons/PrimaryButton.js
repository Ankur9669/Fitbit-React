import React from "react";

// Here onClick prop is a function which defines what to do on a button click
// If onCLick is not passed it takes a function which does nothing
function PrimaryButton({ buttonText, onClick = () => {} }) {
  return (
    <button className="button button-primary" onClick={onClick()}>
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
