import React from 'react';
//import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import "../nav/nav.css"






function Nav(props) {
    const logoutUser = () => {
        // props.history.push('/')
        axios.post('/api/logoutUser')
            .then((response) => {
                console.log(response.data)
                props.history.push('/')
            })
    }

    if (props.location.pathname !== '/' && props.location.pathname !== '/register') {
        return (
            <div className="nav-wrapper">
                <div className="nav-items">
                    <br></br>
                    {/* {console.log(props)} */}
                    <button
                        onClick={() => logoutUser()}>Logout</button>

                    <div>
                        
                        {/* <Link className="nav-link" to='/profile'>
                        <p>Profile</p>
                        </Link> */}
                        {/* <img className="profile-pic" src="https://images.homedepot-static.com/productImages/e350ef76-f7ff-46ee-83d2-606aab23453c/svn/mea-nursery-rose-bushes-62014-64_1000.jpg" alt="profile_pic"></img> */}
                        
                    </div>
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
    } else {
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