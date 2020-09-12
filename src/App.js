import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Footer from "./Footer";

// firebase
import { auth } from "./firebase";

// stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Init stripe with publishable key
const promise = loadStripe(
  "pk_test_51HQESUBUefnWIo5As3Lk53wdftcdEmxEpmlBRXeOvwm157A7KKllehk5t9QWCXmAqO2N1sWsix0PxDrVImFEYOrq00okfKD2kx"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  // a "listener"
  useEffect(() => {
    // will only run once when the app component loads, add the auth listener when user status changing
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        // the user just loggen in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is locked out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />

            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/">
            {/* This is the default route, always rendered if path is wrong in URL. This Route is always at the bottom. */}
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
