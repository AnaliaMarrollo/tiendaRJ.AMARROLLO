import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ textButton, disabled, handleClick }) {
  return (
    <>
      <button
        className="btn-custom m-1 rounded btn-dark"
        disabled={disabled}
        onClick={handleClick}
      >
        {textButton}
      </button>
    </>
  );
}
