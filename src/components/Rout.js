import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './Rout.css';
import Calculator from './Calculator';

export default function Rout() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote">Quote</Link>
          </li>
        </ul>
      </nav>
      {/* Used switch component to display different content on UI */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Calculator">
          <CalculatorPage />
        </Route>
        <Route path="/Quote">
          <Quote />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  const text = 'Welcome to Math Magicians, your one-stop destination for all things math!\n\n'
    + 'Whether you\'re a student, a teacher, or just someone who loves math, '
    + 'we\'ve got everything you need to enhance your math skills and knowledge. '
    + 'From basic arithmetic to advanced calculus, we\'ve got it all covered. '
    + 'So why wait? Start exploring our site today and take your math skills to '
    + 'the next level!';
  return (
    <div className="Home-content">
      <h1>Math Magicians</h1>
      <h2>Welcome to our page!</h2>
      <p>{text}</p>
    </div>
  );
}
function CalculatorPage() {
  return (
    <div className="calculator-content">
      <h1>Math Magicians</h1>
      <Calculator />
    </div>
  );
}
function Quote() {
  return (
    <div className="Quote-content">
      <h1>Math Magicians</h1>
      <h3 className="quote-txt">
        Mathematics is not about numbers, equtaion, computaion,
        or algorithms:it is about understanding. -William Paul Thurston
      </h3>
    </div>
  );
}
