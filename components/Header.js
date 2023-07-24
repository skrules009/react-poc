import { useEffect, useState } from "react";

const Header = ()=> {
    const [btnName, setBtnName] = useState('Login');
    let navAbout = "About Us";
    return (<div className="header-container">
        <div className="log-container">
            <img alt="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbt3rnHAabA8GEcf8kEwS7Rm66Py9qtMHGQYr-nT7tEg&s" />
        </div>
        <div className="menu-items">
            <ul className="ul-container">
                <li>Home</li>
                <li>{navAbout}</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="btn-login" onClick={
                    ()=>{
                        btnName === "Login" ? setBtnName('LogOut') : setBtnName('Login');
                        navAbout = "About";
                    }
                }>{btnName}</button>
            </ul>
        </div>
    </div>
)};

export default Header;