import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './auth.css';
import { connect } from 'react-redux';

class Auth extends Component {

    state = {
        username: '',
        password: '',

    }

    onInputChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    onInputChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    onEnterDown = (e) => {
        if (e.which === 13) {
            this.login()
        }
    }

    login() {
        axios.post(`/api/login`, {
            username: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                this.props.dispatch({ type: "GET_USER_PROFILE", payload: response.data })
                this.props.history.push('/dashboard')
                toast.success(`Welcome ${this.state.username}`)
            })
            .catch(() => {
                toast.error(`Invalid Username or Password`);
            })
    }

    registerNewUser() {
        this.props.history.push('/register')
    }


    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-header">
                        <h1>Welcome to eWorkoutManager</h1>
                        <p>Your body.</p>
                        <p> Your workouts.</p>
                        <p> Your data.</p>
                        <p> Your progress.</p>
                    </div>
                    <div className="auth-body">
                    <div>Please Sign in or Register</div>
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
                    <div className="auth-btn-cntr">
                    <button className="auth-button" onClick={() => this.login()}>Login</button>
                    <button className="auth-button" onClick={() => this.registerNewUser()}>Register</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userprofile: state.userProfile,
        username: state.userProfile.username,
        id: state.userProfile.id,
    }
}

export default connect(mapStateToProps)(Auth);