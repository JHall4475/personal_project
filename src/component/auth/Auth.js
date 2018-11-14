import React, {Component} from 'react';
import axios from 'axios';

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


    render(){
        return(
            <div>
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

                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}
export default Auth;