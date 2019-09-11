import React, {Component} from 'react';
import './profile.css';
import axios from 'axios';
import{connect} from 'react-redux';


class Profile extends Component {
    state={
        username: this.props.userProfile.username,
        profilePic: this.props.userProfile.profile_pic
    }

    onInputChangeUsername= (e) => {
        this.setState({username: e.target.value})
    }
    OnChangeProfilePic = (e) => {
        this.setState({profilePic: e.target.value})
    }

    render(){
        return(
            <div className="profile-wrapper">
                <div className="profile-container">
                    <div>User Profile</div>
                        <img className="profile-img" src={this.props.userProfile.profile_pic} alt="profile chosen by user"></img>
                    <div>
                    Username: 
                    <input
                    onChange={this.onInputChangeUsername}
                    value={this.state.username}
                    ></input>
                    </div>
                    <div>
                        Password: <input></input>
                    </div>
                    <div>
                        Personal Goal Quote: <input></input>
                    </div>
                    <div>
                        Profile Picture: 
                        <input
                        onChange={this.OnChangeProfilePic}
                        value={this.state.profilePic}
                        ></input>
                    </div>
                    
                    
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return{ 
       userProfile: state.userProfile,
   }
}

export default connect(mapStateToProps)(Profile);