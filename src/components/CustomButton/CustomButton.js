import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ textButton, disabled, onClick, className }) {
  return (
    <>
      <button
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {textButton}
      </button>
    </>
  );
}
