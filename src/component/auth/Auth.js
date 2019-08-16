import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './auth.css';
import {addLoginUserId} from '../../ducks/actions';
import {connect} from 'react-redux';
import  store  from '../../ducks/store'

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

    login(){
        axios.post(`/api/login`, {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            store.dispatch({type: "GET_USER_PROFILE", payload: response.data})
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
                            <h3>Your body. Your workouts. Your data. Your progress.
                            </h3>
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
        userprofile: state.userprofile,
        username: state.userprofile.username,
        id: state.userprofile.id,
    }
}

export default connect(mapStateToProps)(Auth);