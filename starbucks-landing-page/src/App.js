import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Dashboard } from "./@dashboard/Dashboard"
import { Navbar } from "./@navbar/Navbar"
import "./app.css"
import Circulo from "./Circulo"

export const App = () => {
    return(
    <>
   { /*  <Circulo/>  */}

   <Router>
    <Navbar/>
    <Dashboard/>
    </Router>   
    
    
    </>
    )
}