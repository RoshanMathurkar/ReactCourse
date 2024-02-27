import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import BodyComp from "../component/BodyComp";
import Header from "../component/Header"
import About from "../component/About";
import Contact from "../component/Contact";
import Error from "../component/Error";
import RestaurantMenu from "../component/RestaurantMenu";
import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import { Suspense } from "react";
//import Grocery from "../component/Grocery";

//code spliting 
//chunking  
//lazy loading
//on demand loading
const Grocery = lazy(()=>import("../component/Grocery"));

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            {/* {if path = "/" then body component, if path = "/about" then about component etc} */}
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<BodyComp/>
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading.........</h1>}><Grocery /></Suspense>,
            },
            {
                path:"/restaurant/:resID", //for making dynamic path we use ":" and res id will be unique for every restaurant.
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error/>,
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);