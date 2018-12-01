import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Weight(){

    return(
        <div>Weight
        <br></br>
        <Link className="weightwizard" to='/wizard'>
        
        <p>Add Weight Entry</p>
        </Link>
        

        </div>
    )
}

export default withRouter(Weight);