import React from "react";
import "./Calculator.scss";
import Screen from "../Screen/Screen";
import KeyBoard from "../KeyBoard/KeyBoard";
const Calculator = () => {
  return (
    <div className="calculator">
      <Screen />
      <KeyBoard style={{ marginTop: "1rem" }} />
    </div>
  );
};

export default Calculator;
