import React from 'react';
import {Link, withRouter} from 'react-router-dom';


function Workout(){

    return(
        <div>
            Workout
        <br></br>
        <Link className="equipment" to='/equipment'>
        <p>Create Workout by Equipment</p>
        </Link>
        <Link className="exercises" to='/exercises'>
        <p>Create Workout by Exercises</p>
        </Link>
        </div>
    )
}

export default withRouter(Workout);