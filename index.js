import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/components/About";
// import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// Lazy Loading
const Grocery = lazy(() => import('./src/components/Grocery'))
const  Contact = lazy(() => import('./src/components/Contact'))
const About = lazy(() => import('./src/components/About'))
// import Grocery from "./src/components/Grocery";


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
                element: <Suspense fallback="Loading..."><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback="Loading..."><Contact/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback="Loading..."><Grocery/></Suspense>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChakraProvider><RouterProvider router={appRouter}/></ChakraProvider>);