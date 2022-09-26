import {Link } from "react-router-dom"
import logo from "../@images/logo.png"
import "./navbar.css"

export function Navbar() {
    return (
        <div className="navbar-container">
            <img className="img-logo" src={logo} alt="starbucks logo" />
            <ul className="list-container">
            <li> <Link to="#" className="links"> Home </Link> </li>
            <li> <Link to="#" className="links"> Menu </Link> </li>
            <li> <Link to="#" className="links"> What's New </Link> </li>
            <li> <Link to="#" className="links"> Contact </Link> </li>
            
            </ul>
        </div>
    );
}
