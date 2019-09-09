import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './auth.css';
import {connect} from 'react-redux';

class Auth extends Component {

    state={
        username:'',
        password:'',
    }

    onInputChangeUsername= (e) => {
        this.setState({username: e.target.value})
    }
    onInputChangePassword = (e) => {
        this.setState({password: e.target.value})
    }
    onEnterDown= (e) => {
        if(e.which === 13) {
            this.login()
        }
    }

    login(){
        axios.post(`/api/login`, {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            console.log("auth login response:", response)
            this.props.dispatch({type: "GET_USER_PROFILE", payload: response.data})
            this.props.history.push('/dashboard')
            toast.success(`Welcome ${this.state.username}`)
        })
        .catch(() => {
            toast.error(`Invalid Username or Password`);
        })
    }

    registerNewUser(){
        this.props.history.push('/register')
    }


    render(){
        return(
            <div className="auth-wrapper">
             <div className="auth-container">
                 <div className="auth-content"> 
                     <div className="auth-header">
                        <h1>Welcome to eWorkoutManager</h1>
                            <h3>Your body.</h3>
                            <h3> Your workouts.</h3>
                            <h3> Your data.</h3>
                            <h3> Your progress.</h3>
                            
                    </div>
                <p>Please Sign in or Register</p>
                <input
                onChange={this.onInputChangeUsername}
                value={this.state.username}
                type="text"
                placeholder="Username"
                ></input>

                <input
                onChange={this.onInputChangePassword}
                value={this.state.password}
                onKeyDown={this.onEnterDown}
                type="password"
                placeholder="Password"
                ></input>
                <br></br>

                <button onClick={() => this.login()}>Login</button>
                <br></br>
                <br></br>
                <button onClick={() => this.registerNewUser()}>Register</button>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        userprofile: state.userProfile,
        username: state.userProfile.username,
        id: state.userProfile.id,
    }
}

export default connect(mapStateToProps)(Auth);