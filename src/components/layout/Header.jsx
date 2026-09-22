import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "../layout/Header.css";
import AuthContext from "../../context/AuthContext";

const Header = ({ onLogout }) => {
  
  // get auth context
  const ctx = useContext(AuthContext); 
  
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>

      <div className="header_search">
        <input
          className="header_input"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        {ctx.isLoggedIn ? (
          <Link to="/">
            <div className="header_option" onClick={ctx.onLogout}>
              <span className="header_optionOne">Hello User </span>
              <span className="header_optionTwo">Sign out</span>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="header_option">
              <span className="header_optionOne">Hello, sign in </span>
              <span className="header_optionTwo">Account & Lists</span>
            </div>
          </Link>
        )}
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_optionBasket">
          <span className="header_optionOne">
            <AddShoppingCartOutlinedIcon className="cart_icon" />
            <span className="header_optionTwo header_basketCount">Cart</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
