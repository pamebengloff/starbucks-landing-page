import {Link } from "react-router-dom"
import {useState} from "react"
import "./navbar.css"
import logo from "../@images/logo.png"
import {IoIosMenu as MenuIcon} from "react-icons/io"
import {IoIosClose as CloseIcon} from "react-icons/io"
import { useEffect } from "react"


export function Navbar() {

    const [isOpen, setIsOpen]= useState(true);

    const openCloseMenu = () => {
        setIsOpen(!isOpen);

    }

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 930);
    const updateMedia = () => {
        setIsDesktop(window.innerWidth >= 930);
    };
    useEffect( () => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia); 
    } )

    return (
<>    
    <div className="navbar-container">

        <div className="col-6 logo-container">
            <img className="img-logo" src={logo} alt="starbucks logo" /> 
        </div>

        {!isDesktop ? //si es falso es menor a 930, muestra el burger menu
        <>
        <div className="col-6 menu-container">  
                <button onClick={openCloseMenu} className="menu-icon"> {isOpen ? <MenuIcon/> : <CloseIcon/> } </button> 
        </div>
            {/*si isOpen es false muestra el burguer menu  */}
            { !isOpen ? 
                    <div className="list-container-small">
                        <ul >
                            <li> <Link to="#" className="links"> Home </Link> </li>
                            <li> <Link to="#" className="links"> Menu </Link> </li>
                            <li> <Link to="#" className="links"> What's New </Link> </li>
                            <li> <Link to="#" className="links"> Contact </Link> </li> 
                        </ul>
                    </div>

              : <></>
            }
        
        </>
         :      //si es true es mayor a 930, muestra el menu completo sin el burger menu
           
           <div className="col-6 list-container-large">
                <ul >
                    <li> <Link to="#" className="links"> Home </Link> </li>
                    <li> <Link to="#" className="links"> Menu </Link> </li>
                    <li> <Link to="#" className="links"> What's New </Link> </li>
                    <li> <Link to="#" className="links"> Contact </Link> </li> 
                </ul>
            </div>
        }
    </div>

</>

      
    );
}
