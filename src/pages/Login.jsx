import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

// useReducer hook
const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }
  if (action.type === "PASSWORD_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
  return { emailValue: "", passwordValue: "" };
};

// login commponent destructures the onLogin prop 
const Login = ({onLogin}) => {
  const [formIsValid, setFormIsValid] = useState(false);

  // initialize reducer
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  // destructure state
  const {emailValue: email, passwordValue: password} = state;

  // useEffect
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
    setFormIsValid(
      email.includes("@)") && password.trim().length > 6);
    }, 500);
  return() => {
    console.log("CLEANUP HERE");
    clearTimeout(identifier);
  };
}, [email, password]);

  // validate email contains @ symbol
  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };
 
  // validate password contains 6 or more characters
  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASSWORD_INPUT", payload: e.target.value });
  };

  // function to log user in with email and password
  const signIn = (e) => {
    // prevent default form submit behavior
    e.preventDefault();
    console.log("Entered email: ", email);
    console.log("Entered password", password);
    onLogin(email, password);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>sign in or create account</h1>
        <form>
          <h5>Enter mobile number or email Address</h5>
          <input
            type="text"
            value={email}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Continue
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p>Need Help?</p>
        <hr className="a-divider-normal"></hr>
        <h5>Buying for work?</h5>
        <button className="login_registerButton">
          Create a free business account
        </button>
      </div>
    </div>
  );
};

export default Login;
