import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import "../nav/nav.css"


function Nav(props) {
    const logoutUser = () => {
        axios.post('/api/logoutUser')
            .then((response) => {
                console.log(response)
                props.history.push('/')
            })
    }

    if (props.location.pathname !== "/" && props.location.pathname !== "/register") {
        return (
            <div className="nav-wrapper">
                <div className="nav-items">
                    {/* {console.log("props:", props)} */}
                    <button
                        onClick={() => logoutUser()}>Logout
                    </button>
                    <Link className="nav-link" to='/profile'>
                    {/* <img className="profile-pic" 
                    src="https://image.flaticon.com/icons/png/512/21/21294.png"
                    ></img> */}
                    <p>Profile</p>
                    </Link>

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

export default withRouter(Nav);