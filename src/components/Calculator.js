import React, { useState } from "react";
import "../Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const inputDigit = (digit) => {
    setDisplayValue((prevDisplay) => {
      const display = prevDisplay === "0" ? String(digit) : prevDisplay + digit;
      return display;
    });
  };

  const formatDisplayValue = (value) => {
    const parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  };

  return (
    <div className="calculator">
      <div className="display">{formatDisplayValue(displayValue)}</div>
      <div className="keypad">
        <button className="key key-ac">AC</button>
        <button className="key">+/-</button>
        <button className="key">%</button>
        <button className="key">÷</button>
        <button className="key" onClick={() => inputDigit(7)}>
          7
        </button>
        <button className="key" onClick={() => inputDigit(8)}>
          8
        </button>
        <button className="key" onClick={() => inputDigit(9)}>
          9
        </button>
        <button className="key">x</button>
        <button className="key" onClick={() => inputDigit(4)}>
          4
        </button>
        <button className="key" onClick={() => inputDigit(5)}>
          5
        </button>
        <button className="key" onClick={() => inputDigit(6)}>
          6
        </button>
        <button className="key">-</button>
        <button className="key" onClick={() => inputDigit(1)}>
          1
        </button>
        <button className="key" onClick={() => inputDigit(2)}>
          2
        </button>
        <button className="key" onClick={() => inputDigit(3)}>
          3
        </button>
        <button className="key">+</button>
        <button className="key" onClick={() => inputDigit(0)}>
          0
        </button>
        <button className="key">.</button>
        <button className="key">x^y</button>
        <button className="key">√x</button>
        <button className="key">M+</button>
        <button className="key">M-</button>
        <button className="key key-equal">=</button>
      </div>
    </div>
  );
};

export default Calculator;
