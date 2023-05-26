import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userInfo = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const logoStyles = "w-[70px] rounded-full mx-2";
  const navItemStyles = "px-3 font-semibold";
  const buttonStyles = "px-3 py-1 bg-blue-300 shadow-lg rounded-sm";
  const mobileMenuButtonStyles = "p-2";
  const mobileMenuStyles = "flex flex-col mt-2 md:hidden";

  return (
    <div className="flex justify-between items-center backdrop-grayscale bg-blue-100  p-2 md:p-4">
      <div className="image-container mx-2">
        <img
          data-testid="logo"
          className={logoStyles}
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items hidden md:flex">
        <ul className="flex">
          <li className={navItemStyles}>
            <Link to="/">Home</Link>
          </li>
          <li className={navItemStyles}>
            <Link to="/about">About us</Link>
          </li>
          <li className={navItemStyles}>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className={navItemStyles}>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className={navItemStyles}>
            <Link data-testid="cart" to="/cart">
              Cart ({cartItems.length} items)
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-5 md:hidden">
        <button
          className={`${buttonStyles} ${mobileMenuButtonStyles}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          Menu
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className={mobileMenuStyles}>
          <ul>
            <li className={navItemStyles}>
              <Link to="/">Home</Link>
            </li>
            <li className={navItemStyles}>
              <Link to="/about">About us</Link>
            </li>
            <li className={navItemStyles}>
              <Link to="/contact">Contact us</Link>
            </li>
            <li className={navItemStyles}>
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className={navItemStyles}>
              <Link data-testid="cart" to="/cart">
                Cart ({cartItems.length} items)
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="hidden md:block">
        {isLogIn ? (
          <button className={buttonStyles} onClick={() => setIsLogIn(false)}>
            Log Out
          </button>
        ) : (
          <button className={buttonStyles} onClick={() => setIsLogIn(true)}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
