import Calculator from './Calculator';

export default function CalculatorPage() {
  return (
    <div className="calculator-content">
      <h1>Math Magicians</h1>
      <div className="calculator-txt">
        <h2>Lets Do Some Math!</h2>
        <Calculator />
      </div>
    </div>
  );
}
