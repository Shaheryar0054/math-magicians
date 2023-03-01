import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './Rout.css';
import Home from './Home';
import CalculatorPage from './CalculatorPage';
import Quote from './Quote';

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
