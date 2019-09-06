import React, {Component} from 'react';
import './profile.css';


class Profile extends Component {
    state={}

    render(){
        return(
            <div className="profile-wrapper">
                <div className="profile-container">
                    <h3>User Profile</h3>
                    <div>
                    Username: <input></input>
                    </div>
                    <div>
                        Password: <input></input>
                    </div>
                    <div>
                        Personal Goal Quote: <input></input>
                    </div>
                    <div>
                        Profile Picture: <input></input>
                    </div>
                    
                    
                    
                </div>
            </div>
        )
    }
}

export default Profile;