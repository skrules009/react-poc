import * as React from "react";
import * as ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent";
import Header from "./components/Header";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import ContatUs from "./components/ContactUs";
import Restaurants from './components/Restaurants';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = ()=> (
    <div className="app-container">
        {/* <BinarySearch/> */}
        <Header/>
        <Outlet/>
    </div>
    
);
 const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <BodyComponent/>
        },
        {
            path: "/about",
            element: <AboutUs/>
        },
        {
            path: "/contact",
            element: <ContatUs/>
        },
        {
            path: "/restaurants/:resId",
            element: <Restaurants/>
        }
    ],
    errorElement: <Error/>
 },
 ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
