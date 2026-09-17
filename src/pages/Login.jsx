import React, { useState, useReducer} from "react";
import { Link } from "react-router-dom";
import "./Login.css";


// useReducer hook
const reducer = (state, action) => {
  if(action.type === "EMAIL_INPUT") {
    return {...state, emailValue: action.payload}
  }
    if(action.type === "PASSWORD_INPUT") {
    return {...state, passwordValue: action.payload}
  }


  return{ emailValue: "", passwordValue:"" } 
};
const Login = () => {
  
  //const [formIsValid, setFormIsValid] = useState(false);

  // initialize reducer
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue:"",

  });
   // validate email contains @ symbol
  const emailChangeHandler = (e) => {
    dispatch({type: "EMAIL_INPUT", payload: e.target.value})
    //setEmail(e.target.value);
    //setFormIsValid(email.includes("@") && password.trim().length > 6);
  };

  // validate password contains 6 or more characters
  const passwordChangeHandler = (e) => {
   // setPassword(e.target.value);
    dispatch({type: "PASSWORD_INPUT", payload: e.target.value})
    // setFormIsValid(email.includes("@") && e.target.value.trim().length > 6);

};
  
  // prevent default form submit behavior
  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered email: ", state.emailValue)
    console.log("Entered password", state.passwordValue)
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
          <input type="text" 
          value={state.emailValue} 
          onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input type="password" 
          value={state.passwordValue}
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
}

export default Login
