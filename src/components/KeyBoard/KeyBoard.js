import React from "react";
import "./KeyBoard.scss";
import Button from "../Button/Button";
const KeyBoard = ({ className, style }) => {
  return (
    <div style={{ ...style }} className={`keyboard ${className || ""}`}>
      <Button className={`ac-button`} style={{ gridArea: `AC` }}>
        AC
      </Button>
      <Button className={`operation-button`} style={{ gridArea: `divided` }}>
        /
      </Button>
      <Button className={`operation-button`} style={{ gridArea: `multiply` }}>
        X
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num7` }}>
        7
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num8` }}>
        8
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num9` }}>
        9
      </Button>
      <Button className={`operation-button`} style={{ gridArea: `minus` }}>
        -
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num4` }}>
        4
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num5` }}>
        5
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num6` }}>
        6
      </Button>
      <Button className={`operation-button`} style={{ gridArea: `plus` }}>
        +
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num1` }}>
        1
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num2` }}>
        2
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num3` }}>
        3
      </Button>
      <Button className={`equal-button`} style={{ gridArea: `equal` }}>
        =
      </Button>
      <Button className={`number-button`} style={{ gridArea: `num0` }}>
        0
      </Button>
      <Button className={`number-button`} style={{ gridArea: `dot` }}>
        .
      </Button>
    </div>
  );
};

export default KeyBoard;
