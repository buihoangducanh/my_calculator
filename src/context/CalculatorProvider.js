import React, { createContext, useState } from "react";

const numsArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "x", "/"];

const CalculatorContext = createContext();

const CalculatorContextProvider = ({ children }) => {
  const [operation, setOperation] = useState("");
  const [currentInput, setCurrentInput] = useState("0");
  const [hitEqual, setHitEqual] = useState(false);

  const lastChar = operation.slice(-1);
  const firstChar = operation.slice(0, 1);

  const handleInputCharacter = (char) => {
    if (numsArray.includes(char)) {
      if (!hitEqual) {
        setOperation((prev) => prev.concat(char));
        if (!operators.includes(lastChar)) {
          if (currentInput === "0") {
            setCurrentInput(char);
          } else {
            setCurrentInput((prev) => prev.concat(char));
          }
        } else {
          setCurrentInput(char);
        }
      } else {
        setOperation(char);
        setCurrentInput(char);
        setHitEqual(false);
      }
    } else if (operators.includes(char)) {
      if (!operators.includes(lastChar)) {
        if (!hitEqual) {
          setOperation((prev) => prev.concat(char));
          setCurrentInput(char);
        } else {
          setOperation(currentInput + char);
          setCurrentInput(char);
          setHitEqual(false);
        }
      }
    } else if (char === "AC") {
      clearAll();
      setHitEqual(false);
    } else if (char === ".") {
      if (!hitEqual) {
        if (lastChar !== char) {
          setOperation((prev) => prev.concat(char));
          setCurrentInput((prev) => prev.concat(char));
        }
      }
    } else if (char === "=") {
      getResult();
    }
  };
  console.log(hitEqual);
  const regex = /^[\d+\-*/().\s]+$/;

  const getResult = () => {
    let op = operation.replace("x", "*");
    if (operators.includes(lastChar)) op = op.slice(0, op.length - 1);

    if (regex.test(op) && !operators.includes(firstChar)) {
      let result = eval(op);
      setCurrentInput(result);
      op = op.replace("*", "x");
      setOperation(op.concat(`=${result}`));
      setHitEqual(true);
    }
  };

  const clearAll = () => {
    setOperation("");
    setCurrentInput("0");
  };

  const valueToShare = {
    currentInput,
    operation,
    handleInputCharacter,
  };

  return (
    <CalculatorContext.Provider value={valueToShare}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
export { CalculatorContext };
