import React, { useContext } from "react";
import "./Screen.scss";
import { CalculatorContext } from "../../context/CalculatorProvider";

const Screen = ({ className }) => {
  const { currentInput, operation } = useContext(CalculatorContext);
  return (
    <div className={`screen ${className || ""}`}>
      <div className="screen__result">{operation}</div>
      <div className="screen__current-value">{currentInput}</div>
    </div>
  );
};

export default Screen;
