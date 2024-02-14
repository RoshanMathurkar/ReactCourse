import React from "react";
import ReactDOM from "react-dom/client";
import BodyComp from "../component/BodyComp";
import Header from "../component/Header"
import About from "../component/About";
import Contact from "../component/Contact";
import Error from "../component/Error";
import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";


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
        ],        
        errorElement:<Error/>,
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);