import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory(); // it allows us to programmatically change the url (after login for example)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // some fancy firebase login stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully logged in with email and password
        console.log(auth);
        if (auth) {
          history.push("/"); // redirect to homepage
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // do some fancy Firebase register stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/"); // redirect to homepage
        }
      })
      .catch((error) => {
        // Handle Errors here.
        if (error.code === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(error.message);
        }
        console.log(error);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to ROBERT'S AMAZON CLONE's Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
