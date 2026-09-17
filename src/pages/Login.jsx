import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  // run component once on component reload
  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");

    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  // prevent default form submit behavior
  const signIn = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log("Email:", enteredEmail + " Password:", enteredPassword);

    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  // sign out function and remove user off local storage
  const signOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="login">
      {/**user logged in status only if is logged in is true*/}
      {isLoggedIn && (
        <p>
          You are logged in <button onClick={signOut}>Sign out</button>
        </p>
      )}
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
          <input type="text" ref={emailRef} alt="Mobile or email address" />
          <h5>Password</h5>
          <input type="password" ref={passwordRef} alt="password" />

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
