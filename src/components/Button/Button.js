import React from "react";
import "./Button.scss";
const Button = ({ children, className, style }) => {
  return (
    <button style={{ ...style }} className={`button ${className || ""}`}>
      <span className="button__content">{children}</span>
    </button>
  );
};

export default Button;
