import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Workout(){

    return(
        <div>Workout
        <br></br>
        <Link className="equipment" to='/equipment'>
        <p>Equipment</p>
        </Link>
        </div>
    )
}

export default withRouter(Workout);