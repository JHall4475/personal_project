import React from 'react';
import '../header/header.css';
import {withRouter} from 'react-router-dom'

function Header(props) {

    if (props.location.pathname !== '/') { return (
        <div className='header-container'>
            <div className='header-row'>
                <div className='title-container'>
                    <span className='header-e'>e</span>
                    <span className='header-rest'>| Workout Manager</span>
                </div>
                <div>
                    
                </div>

            </div>

        </div>
    )
} else {
    return null;
}
}


export default withRouter(Header);