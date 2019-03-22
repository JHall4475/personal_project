import React, {Component} from 'react';
import './profile.css';


class Profile extends Component {
    state={}

    render(){
        return(
            <div className="profile-wrapper">
                <div className="profile-container">
                    Username: <input></input>
                    
                </div>
            </div>
        )
    }
}

export default Profile;