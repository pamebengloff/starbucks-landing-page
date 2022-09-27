import React from 'react';
import "./dashboard.css"
import { Options } from './Options';

export function Dashboard() {
        
    return (
    <>
    <div className="dashboard-container">    
        <div className='description-container'> 
            <h1>It's not just Coffee <br /> It's <span> Starbucks</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
            <button className="btn-learn">Learn More</button> 
        </div>  
        <Options/>
    </div>
    </>
    );
}
