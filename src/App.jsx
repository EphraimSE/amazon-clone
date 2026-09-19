import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect hook
  useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn');

    if(userInfo === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  // function to handle user login
  const loginHandler = (email, Password) => {
    // store the login state in localStorage 
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  }
   // function to handle user logout
  const logoutHandler = () => {
    // remove the login state from localStorage 
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
    <>
      <Router>
        {/* pass user login props */}
        <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          <Navbar />
          <Routes>
            {/* Redirect user to home page */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              <Route path="username" element={<p>Welcome username!</p>} />
            </Route>

            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login onLogin={loginHandler}/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={< NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
 
//Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)