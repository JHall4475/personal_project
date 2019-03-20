import React from 'react';
import {Link} from 'react-router-dom';
import './goals.css'


function Goals(){

    return(
        <div className="goals-wrapper">
        <div className="goals-container">
        Goals
        <Link className="component-link" to="/basalmetrate">
        <p> Basal Metabolic Rate </p>
        </Link>
        
        <Link className="component-link" to="/caloricNeeds"><p>Caloric Needs</p></Link>
        {/* <Link className="component-link" to="/idealWeight"><p>Ideal Weight</p></Link> */}
        </div>
        </div>
    )
}

export default Goals;