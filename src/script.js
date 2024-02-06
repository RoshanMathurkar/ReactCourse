import React from "react";
import ReactDOM from "react-dom/client";
import BodyComp from "../component/BodyComp";
import Header from "../component/Header"

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