import React from "react";
import ReactDOM from "react-dom/client";

/*
    Food ordering App
    *Header
       - Logo
       - nav links
    *Body
        - search
        - restaurant container
            - restaurant cards
                -img
                -name of restaurant, star rating, delivery time....
    *footer
        - copyright
        - links
        - address
        - contact
*/

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// inline css - not recommended.
// const styleCard = {
//     backgroundColor : "#D3D3D3",
// }

const RestaurantCard = () =>{
    return (
        <div className="res-cards" style={{backgroundColor : "#D3D3D3"}}>
            <img 
                className="res-card-img" 
                alt="cardImg" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/iegvwgmimnzscztxg0rr"/>
            <h3>The Asanzo</h3>
            <h5>North Indian, Chinese</h5>
            <h5>Rating 4.5</h5>
            <h5>30 minutes</h5>
        </div>
    )
};

const BodyComp = () => {
    return (
        <div className="main-body">
            <div className="search">Search</div>

            <div className="restaurant-container">
            <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <BodyComp />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);