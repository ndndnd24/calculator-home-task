import React, { useState } from "react";
import "../Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const clearDisplay = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue((prevDisplay) => {
        const display =
          prevDisplay === "0" ? String(digit) : prevDisplay + digit;
        return display;
      });
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue("0.");
      setWaitingForSecondOperand(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue((prevDisplay) => prevDisplay + ".");
    }
  };

  const toggleSign = () => {
    setDisplayValue((prevDisplay) =>
      prevDisplay.charAt(0) === "-" ? prevDisplay.slice(1) : "-" + prevDisplay
    );
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operator === null) {
      setPreviousValue(inputValue);
    } else {
      const currentResult = parseFloat(previousValue);
      let newResult;

      switch (operator) {
        case "+":
          newResult = currentResult + inputValue;
          break;
        case "-":
          newResult = currentResult - inputValue;
          break;
        case "*":
          newResult = currentResult * inputValue;
          break;
        case "/":
          newResult = currentResult / inputValue;
          break;
        case "x^y":
          newResult = Math.pow(currentResult, inputValue);
          break;
        case "%":
          newResult = currentResult * (inputValue / 100);
          break;
        default:
          return;
      }

      setPreviousValue(newResult);
      setDisplayValue(String(newResult));
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const handleEqual = () => {
    if (!operator) return;

    const inputValue = parseFloat(displayValue);

    if (waitingForSecondOperand && operator !== "√x") {
      setOperator(null);
      return;
    }

    if (operator === "√x") {
      const result = Math.sqrt(inputValue);
      setDisplayValue(String(result));
      setPreviousValue(result);
      setOperator(null);
      setWaitingForSecondOperand(true);
      return;
    }

    performOperation();
    setOperator(null);
  };

  const formatDisplayValue = (value) => {
    const parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  };

  const squareRoot = () => {
    const currentResult = parseFloat(displayValue);
    const newResult = Math.sqrt(currentResult);
    setPreviousValue(newResult);
    setDisplayValue(String(newResult));
    setWaitingForSecondOperand(true);
  };

  return (
    <div className="calculator">
      <div className="display">{formatDisplayValue(displayValue)}</div>
      <div className="keypad">
        <button className="key key-ac" onClick={clearDisplay}>
          AC
        </button>
        <button className="key" onClick={toggleSign}>
          +/-
        </button>
        <button className="key" onClick={() => performOperation("%")}>
          %
        </button>
        <button
          className="key key-colored"
          onClick={() => performOperation("/")}
        >
          ÷
        </button>
        <button className="key" onClick={() => inputDigit(7)}>
          7
        </button>
        <button className="key" onClick={() => inputDigit(8)}>
          8
        </button>
        <button className="key" onClick={() => inputDigit(9)}>
          9
        </button>
        <button
          className="key key-colored"
          onClick={() => performOperation("*")}
        >
          x
        </button>
        <button className="key" onClick={() => inputDigit(4)}>
          4
        </button>
        <button className="key" onClick={() => inputDigit(5)}>
          5
        </button>
        <button className="key" onClick={() => inputDigit(6)}>
          6
        </button>
        <button
          className="key key-colored"
          onClick={() => performOperation("-")}
        >
          -
        </button>
        <button className="key" onClick={() => inputDigit(1)}>
          1
        </button>
        <button className="key" onClick={() => inputDigit(2)}>
          2
        </button>
        <button className="key" onClick={() => inputDigit(3)}>
          3
        </button>
        <button
          className="key key-colored"
          onClick={() => performOperation("+")}
        >
          +
        </button>
        <button className="key" onClick={() => inputDigit(0)}>
          0
        </button>
        <button className="key" onClick={() => inputDecimal()}>
          .
        </button>
        <button className="key" onClick={() => performOperation("x^y")}>
          x^y
        </button>
        <button className="key" onClick={() => squareRoot()}>
          √x
        </button>
        <button className="key">M+</button>
        <button className="key">M-</button>
        <button className="key key-equal" onClick={() => handleEqual()}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
