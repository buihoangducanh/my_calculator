import React, { useContext } from "react";
import "./Button.scss";
import { CalculatorContext } from "../../context/CalculatorProvider";

const Button = ({ children, className, style }) => {
  const { handleInputCharacter } = useContext(CalculatorContext);
  return (
    <button
      onClick={() => handleInputCharacter(children)}
      style={{ ...style }}
      className={`button ${className || ""}`}
    >
      <span className="button__content">{children}</span>
    </button>
  );
};

export default Button;
