import React from 'react';
import {Link, withRouter} from 'react-router-dom';


function Goals(){

    return(
        <div>Goals
        <br></br>
        <Link className="basalmetrate" to="/basalmetrate">
        <p>Basal Metabolic Rate </p>
        </Link>



        </div>
    )
}

export default Goals;