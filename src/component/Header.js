import { Link } from "react-router-dom";
import { logo } from "../../utils/constant";
import About from "./About";
import { useState } from "react";
import useStatusOnline from "../../utils/useStatusOnline";

const Header = () =>{
    const status = useStatusOnline();
    const [btnName,setBtnName] = useState("Login")
    return (
        <div className="flex justify-between item-center px-3 py-5 m-2 border border2-black-600">
            <div className="">
                <img className="logo" src={logo}/>
            </div>

            <div>
                <ul className="flex p-3 m-4 space-x-5">
                    <li>
                        Status {status? "🟢":"🔴"}
                    </li>
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/grocery">
                            Grocery
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnName == "Logout"? setBtnName("Login"):setBtnName("Logout");                        
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;