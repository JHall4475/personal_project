import React from 'react';
//import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import "../nav/nav.css"






function Nav(props) {
    const logoutUser = () => {
        axios.post('/api/logoutUser')
        .then((response) => {
            console.log(response.data)
            props.history.push('/')
        })
        }

    if(props.location.pathname !== '/'){
        return (
            <div className="nav-wrapper">
                <div className="nav-items">
                <br></br>
                {/* {console.log(props)} */}
                <button 
            onClick={() => logoutUser()}>Logout</button>
            <br></br>
            <Link className="nav-link" to='/workout' >
            <p>Workout</p>
            
            </Link>
            <Link className="nav-link" to='/weight' boolean="/">
            <p>Weight</p>
            </Link>
            <Link className="nav-link" to='/goals'>
            <p>Goals</p>
            </Link>
            <Link className="nav-link" to='/dashboard'>
            <p>Dashboard</p>
            </Link>

            
            </div>
            </div>
        )
 }else{
     return null;
 }
}



// const mapStateToProps = (state) =>{
//     return {
//         username: state.username,
//         profilePicture: state.profilePicture,
//     }
// }

//export default connect(mapStateToProps)(withRouter(Nav));
export default withRouter(Nav);