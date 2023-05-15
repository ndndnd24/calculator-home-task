import React from 'react';
import './App.css';
import Calculator from './components/Calculator.js';

const App = () => {
  return (
    <div className="app">
      <div className="calculator-container">
        <Calculator />
      </div>
    </div>
  );
};

export default App;
