import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const userInfo = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center backdrop-grayscale bg-green-300 p-1">
      <div className="image-container mx-2">
        <img
          data-testid="logo"
          className="w-[70px] rounded-full mx-2"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-3 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-3 font-semibold">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3 font-semibold">
            {" "}
            <Link data-testid="cart" to="/cart">
              Cart {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>
      <h1>{userInfo.user.name}</h1>
      <div className="mx-5">
        {isLogIn ? (
          <button
            className="px-3 py-1 bg-blue-100 shadow-lg rounded-sm"
            onClick={() => setIsLogIn(false)}
          >
            Log Out
          </button>
        ) : (
          <button
            className="px-3 py-1 bg-blue-100 shadow-lg rounded-sm"
            onClick={() => setIsLogIn(true)}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
