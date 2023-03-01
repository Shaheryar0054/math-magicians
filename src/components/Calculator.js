import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState(calculate(state, event.target.textContent));
  };

  return (
    <section className="calculator">
      <div className="container">
        <div className="input">{state.next || state.total || '0'}</div>
        <button type="button" onClick={handleClick} className="button">AC</button>
        <button type="button" onClick={handleClick} className="button">+/-</button>
        <button type="button" onClick={handleClick} className="button">%</button>
        <button type="button" onClick={handleClick} className="button operator">÷</button>
        <button type="button" onClick={handleClick} className="button">7</button>
        <button type="button" onClick={handleClick} className="button">8</button>
        <button type="button" onClick={handleClick} className="button">9</button>
        <button type="button" onClick={handleClick} className="button operator">x</button>
        <button type="button" onClick={handleClick} className="button">4</button>
        <button type="button" onClick={handleClick} className="button">5</button>
        <button type="button" onClick={handleClick} className="button">6</button>
        <button type="button" onClick={handleClick} className="button operator">-</button>
        <button type="button" onClick={handleClick} className="button">1</button>
        <button type="button" onClick={handleClick} className="button">2</button>
        <button type="button" onClick={handleClick} className="button">3</button>
        <button type="button" onClick={handleClick} className="button operator">+</button>
        <button type="button" onClick={handleClick} className="button zero">0</button>
        <button type="button" onClick={handleClick} className="button">.</button>
        <button type="button" onClick={handleClick} className="button equal">=</button>
      </div>
    </section>
  );
}

export default Calculator;
