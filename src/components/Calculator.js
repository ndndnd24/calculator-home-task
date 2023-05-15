import React from "react";
import "../Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="keypad">
        <button className="key key-ac">AC</button>
        <button className="key">+/-</button>
        <button className="key">%</button>
        <button className="key key-colored">÷</button>
        <button className="key">7</button>
        <button className="key">8</button>
        <button className="key">9</button>
        <button className="key key-colored">x</button>
        <button className="key">4</button>
        <button className="key">5</button>
        <button className="key">6</button>
        <button className="key key-colored">-</button>
        <button className="key">1</button>
        <button className="key">2</button>
        <button className="key">3</button>
        <button className="key key-colored">+</button>
        <button className="key">0</button>
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
