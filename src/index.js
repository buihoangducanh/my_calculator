import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import CalculatorContextProvider from "./context/CalculatorProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>
);
