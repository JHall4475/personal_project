import React, { Component } from 'react';
import axios from 'axios';
import './register.css';
import { toast } from 'react-toastify';


class Register extends Component {
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
    registerNewUser = () => {
        axios.post('/api/register', {
            username: this.state.username,
            password: this.state.password,
        })
        .then(() => {
            this.props.history.push('/')
            toast.success("Successfully registered please login")
        })
        .catch((err) => {
            toast.error(`Username already exists! or ${err.data}`)
        })
    }
    onClickCancel = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='rgstr-wrapper'>
                <div className='rgstr-container'>
                    <div>Register</div>
                    <div>
                        Username:  <input
                            onChange={this.onInputChangeUsername}
                            value={this.state.username}
                            type="text"
                        ></input>
                    </div>
                    <div>
                        Password: <input
                            onChange={this.onInputChangePassword}
                            value={this.state.password}
                            type="password"
                        ></input>
                    </div>
                    <button onClick={() => this.registerNewUser()}>Register</button>
                    <button onClick={() => this.onClickCancel()}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Register;