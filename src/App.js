import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            {/* This is the default route, always rendered if path is wrong in URL. This Route is always at the bottom. */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
