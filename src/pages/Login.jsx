import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() =>{
    // check for for validity
    
    const identifier = setTimeout (() => {
    console.log("Checking form validity");
    setFormIsValid(email.includes("@") && password.trim().length > 6);
}, 500);

    return () => {
      console.log("Cleanup funtion before next side effect");
      clearTimeout(identifier);
    };
  }, [email, password]);

  // validate email contains @ symbol
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    
  };

  // validate password contains 6 or more characters
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);

};
  
  // prevent default form submit behavior
  const signIn = (e) => {
    e.preventDefault();
    console.log(formIsValid);
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
          value={email} 
          onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input type="password" 
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
}

export default Login
