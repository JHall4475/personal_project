import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';




function Nav(props) {
   // if(props.location.pathname !== '/'){
        return (
            
            <div>
                nav
                {/* {console.log(props)}
            <Link className="home" to='/dashboard' username={props.username} profilePicture={props.profilePicture}>
            <span>Dashboard</span>
            
            </Link>
            <Link className="new-post" to='/post'>
            <span>New Post</span>
            </Link>
            <Link className="logout" to='/'>
            <span>Logout</span>
            </Link> */}
            </div>
        )
//  }else{
//      return null;
//  }
}



// const mapStateToProps = (state) =>{
//     return {
//         username: state.username,
//         profilePicture: state.profilePicture,
//     }
// }

// export default connect(mapStateToProps)(withRouter(Nav));

export default Nav;