import React, {Component} from 'react';
import './profile.css';
import axios from 'axios';
import{connect} from 'react-redux';
import { toast } from 'react-toastify';


class Profile extends Component {
    state={
        userName: this.props.userProfile.username,
        profilePic: this.props.userProfile.profile_pic,
    }

    onInputChangeUsername= (e) => {
        this.setState({userName: e.target.value})
    }
    OnChangeProfilePic = (e) => {
        this.setState({profilePic: e.target.value})
    }
    updateUserProfile = () => {
        axios.post('/api/profile/update',{
            id: this.props.userProfile.id,
            userName: this.state.userName,
            profilePic: this.state.profilePic
        })
        .then(() => {
            this.props.history.push('/dashboard')
            toast.success("Successfully updated profile")
        })
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
                    type='text'
                    onChange={this.onInputChangeUsername}
                    value={this.state.userName}
                    ></input>
                    </div>
                    <div>
                        Profile Picture: 
                        <input
                        onChange={this.OnChangeProfilePic}
                        value={this.state.profilePic}
                        ></input>
                    </div>
                    <button onClick={() => this.updateUserProfile()}>Update</button>
                    
                    
                    
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