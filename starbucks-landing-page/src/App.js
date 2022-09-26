import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Dashboard } from "./@dashboard/Dashboard"
import { Navbar } from "./@navbar/Navbar"

export const App = () => {
    return(
    <>

   <Router>
    <Navbar/>
    <Dashboard/>
    </Router>   
    
    
    </>
    )
}