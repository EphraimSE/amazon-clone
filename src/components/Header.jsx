import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon logo"
      />
      <div className="header_search">
        <input className="header_input" type="text" placeholder="Search Amazon" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
            <span className="header_optionOne">Hello, sign in </span>
            <span className="header_optionTwo">Account & Lists</span>
        </div>
        <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_optionBasket">
            <span className="header_optionOne">
                <AddShoppingCartOutlinedIcon className="cart_icon"/>
                <span className="header_optionTwo header_basketCount">Cart</span>
            </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
