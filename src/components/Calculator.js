import './calculator.css';
import PropTypes from 'prop-types';

function Calculator(props) {
  const { onClick } = props;

  return (
    <section className="calculator">
      <div className="container">
        <input value={0} className="display" />
        <button type="button" onClick={onClick} className="btn">AC</button>
        <button type="button" onClick={onClick} className="btn">+/-</button>
        <button type="button" onClick={onClick} className="btn">%</button>
        <button type="button" onClick={onClick} className="btn divide">÷</button>
        <button type="button" onClick={onClick} className="btn">7</button>
        <button type="button" onClick={onClick} className="btn">8</button>
        <button type="button" onClick={onClick} className="btn">9</button>
        <button type="button" onClick={onClick} className="btn multiply">×</button>
        <button type="button" onClick={onClick} className="btn">4</button>
        <button type="button" onClick={onClick} className="btn">5</button>
        <button type="button" onClick={onClick} className="btn">6</button>
        <button type="button" onClick={onClick} className="btn minus">-</button>
        <button type="button" onClick={onClick} className="btn">1</button>
        <button type="button" onClick={onClick} className="btn">2</button>
        <button type="button" onClick={onClick} className="btn">3</button>
        <button type="button" onClick={onClick} className="btn plus">+</button>
        <button type="button" onClick={onClick} className="btn zero">0</button>
        <button type="button" onClick={onClick} className="btn">.</button>
        <button type="button" onClick={onClick} className="btn equal">=</button>
      </div>
    </section>
  );
}

Calculator.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Calculator;
