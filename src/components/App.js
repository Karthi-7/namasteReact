import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import Usercontext from "../utils/Usercontext";
const About=lazy(()=>import('./About'))
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import AddtoCart from "./AddtoCart";




const AppLayout = () => {

  return (
    <Provider store={appStore}>
    <div>  
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>About page is loading</h1>}><About />
        </Suspense>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"/cart",
        element:<AddtoCart />
      }
    ]
  },
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
