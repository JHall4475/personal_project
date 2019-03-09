import React from 'react';
import {Link} from 'react-router-dom';


function Goals(){

    return(
        <div>Goals
        <br></br>
        <Link className="component-link" to="/basalmetrate">
        <p>Basal Metabolic Rate </p>
        </Link>
        <Link className="component-link" to="/caloricNeeds"><p>Caloric Needs</p></Link>
        {/* <Link className="component-link" to="/idealWeight"><p>Ideal Weight</p></Link> */}

        </div>
    )
}

export default Goals;