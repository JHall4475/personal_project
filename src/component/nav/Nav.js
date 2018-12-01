import React from 'react';
//import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';






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
            <div>
                nav
                <br></br>
                {/* {console.log(props)} */}
            <Link className="workout" to='/workout' >
            <span>Workout</span>
            
            </Link>
            <Link className="weight" to='/weight'>
            <span>Weight</span>
            </Link>
            <Link className="goals" to='/goals'>
            <span>Goals</span>
            </Link>

            <button 
            onClick={() => logoutUser()}>Logout</button>
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