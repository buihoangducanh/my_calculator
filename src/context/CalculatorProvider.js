import React, { createContext, useState } from "react";

const CalculatorContext = createContext();
const numsArray = ["1", "2", "3", "4", "5", "6", "7", "9", "0"];
const operators = ["+", "-", "X", "/"];

const CalculatorContextProvider = ({ children }) => {
  const [currentOperation, setCurrentOperation] = useState("");
  const [currentInput, setCurrentInput] = useState(0);

  const getTheResult = () => {
    const result = eval(currentOperation);
    setCurrentInput(result);
    setCurrentOperation((currentOperation) =>
      currentOperation.concat(`=${result}`)
    );
  };
  const valueToShare = {
    currentInput,
    currentOperation,
    setCurrentInput,
    setCurrentOperation,
    getTheResult,
  };

  return (
    <CalculatorContext.Provider value={valueToShare}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
export { CalculatorContext };
