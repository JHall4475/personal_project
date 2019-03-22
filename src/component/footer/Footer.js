import React from 'react';
import './footer.css';
import {withRouter} from 'react-router-dom';

function Footer(props){

    
    if (props.location.pathname !== '/') { 
        return(
        <div className='ftr-wrapper'>
            <div className='ftr-container'>
           <span>
               <img className="footer-img" src='https://image.flaticon.com/icons/png/512/61/61109.png' alt="linkedin"></img>
               <img className="footer-img" src ='https://image.flaticon.com/icons/svg/25/25231.svg' alt="github"></img>
           </span>
            </div>
            
        </div>
    )

} else {
    return null
}

}

export default withRouter(Footer);