import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './auth.css';


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
        .then(() => {
            
            this.props.history.push('/dashboard')
            toast.success(`Welcome `)
        })
        .catch(() => {
            toast.error(`Invalid Username or Password`);
        })
    }

    registerNewUser(){
        axios.post(`/api/register`, {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            console.log(response.data)
            this.props.history.push('/dashboard')
        })
    }


    render(){
        return(
            <div className="auth-wrapper">
            <div className="auth-container">
            <div className="auth-content"> 
                
                <p>Auth</p>
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
                <button onClick={() => this.registerNewUser()}>Register</button>
                </div>
            </div>
            </div>
        )
    }
}
export default Auth;