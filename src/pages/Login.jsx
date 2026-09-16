import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
        ALT="Amazon Page"
        className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>sign in or create account</h1>
        <form>
          <h5>Enter mobile number or email</h5>
          <input type="text"/>
          <button type="submit" className="login_signInButton">Continue</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <p>Need Help?</p>
        <hr className="a-divider-normal"></hr>
        <h5>Buying for work?</h5>
        <button className="login_registerButton">Create a free business account</button>
      </div>
    </div>
  );
};

export default Login;
