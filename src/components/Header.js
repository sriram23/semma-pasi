import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const  [btnName, setBtnName] = useState("Login");
    const [city, setCity] = useState(sessionStorage.getItem("city") !== "undefined"? sessionStorage.getItem("city") : "Unable to fetch location");
    useEffect(() => {
        const setCurrentCity = () => {
            const cityString = sessionStorage.getItem("city")
            setCity(cityString !== "undefined" ? cityString : "Unable to fetch location")
        }
        window.addEventListener("storage", setCurrentCity)
        return () => {
            window.removeEventListener("storage", setCurrentCity)
        }
    },[])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg" alt="logo" />
                <div style={{padding: "1rem"}}>
                    Location: {city.charAt(0).toUpperCase()+city.slice(1)}
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => setBtnName(btnName === "Logout"? "Login" : "Logout")} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header