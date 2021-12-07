import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ textButton, disabled, onClick }) {
  return (
    <>
      <button
        className="btn-custom m-1 rounded btn-dark"
        disabled={disabled}
        onClick={onClick}
      >
        {textButton}
      </button>
    </>
  );
}
