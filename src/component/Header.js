import { Link } from "react-router-dom";
import { logo } from "../../utils/constant";
import About from "./About";
import { useContext, useState } from "react";
import useStatusOnline from "../../utils/useStatusOnline";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useStatusOnline();
  const [btnName, setBtnName] = useState("Login");

  const data = useContext(UserContext);
  //console.log(data.loggedInUser);

  //subscribing the store using the useSelector.
  const cartitems = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cartitems);

  return (
    <div className="flex justify-between items-center border-2 border-black-200 h-28 p-4 m-3">
      <div className="">
        <img className="logo" src={logo} />
      </div>

      <div>
        <ul className="flex space-x-5">
          <li>Status {status ? "🟢" : "🔴"}</li>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="font-medium">
            <Link className="nav-link" to="/cart">
              Cart ({cartitems.length})
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName == "Logout" ? setBtnName("Login") : setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
