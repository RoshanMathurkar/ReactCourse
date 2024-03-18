import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import BodyComp from "./BodyComp";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import UserContext from "../../utils/UserContext";
//import Grocery from "../component/Grocery";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "./Cart";

//code spliting
//chunking
//lazy loading
//on demand loading
const Grocery = lazy(() => import("./Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    const data = {
      name: "Roshan Mathurkar",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      {/* store as a props */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* {if path = "/" then body component, if path = "/about" then about component etc} */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resID", //for making dynamic path we use ":" and res id will be unique for every restaurant.
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
