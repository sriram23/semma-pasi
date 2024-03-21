import { useState } from "react";
const Header = () => {
    const  [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => setBtnName(btnName === "Logout"? "Login" : "Logout")} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header