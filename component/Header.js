import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import About from "./About";
import { useState } from "react";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () =>{

    //let btnName = "Login"
    const status = useStatusOnline();
    const [btnName,setBtnName] = useState("Login")
    return (
        <div className="flex">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>

            <div className="nav-items">
                <ul>
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