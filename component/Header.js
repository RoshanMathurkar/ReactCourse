import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import About from "./About";
import { useState } from "react";


const Header = () =>{
    //let btnName = "Login"
    let [btnName,setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        //btnName = "Logout"? setBtnName("Logout"):setBtnName("Login");
                        setBtnName("Logout")
                        // if(btnName == "Logout"){
                        //     setBtnName("Logout");
                        // }
                        // else{
                        //     setBtnName("Login");
                        // }
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;