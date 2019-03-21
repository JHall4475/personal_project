import React from 'react';
import './footer.css';
import {withRouter} from 'react-router-dom';

function Footer(props){
    // if (props.location.pathname !== '/') { 
        return(
        <div className='ftr-wrapper'>
            <div className='ftr-container'>
            <p>this is the footer</p>
            </div>
            
        </div>
    )

// } else {
//     return null
// }

}

export default withRouter(Footer);