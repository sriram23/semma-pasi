import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";


/**
 * 
 * Components:
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Image
 *      - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 */




const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />

        </div>
    )
}

{/**
There are two types of routings:
- Client side routing - We are not making any network requests. It just loads the components.
- Server side routing - Reloads the page, make a network request to fetch the page contents.
*/}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);