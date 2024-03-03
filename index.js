import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Header from "./src/components/Header";
import Body from "./src/components/Body";


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
            <Body/>
            {/* Footer */}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)