import React, { Component } from 'react';
import axios from 'axios';
import './register.css';

class Register extends Component {
    state = {
        username:'',
        password:'',

    }
    onInputChangeUsername = (e) => {
        this.setState({username: e.target.value})
    }
    onInputChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    onClickCancel = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='rgstr-main'>
                <div className='rgstr-wrapper'>
                    <div className='rgstr-title'>
                        <h2>Register</h2>
                </div>
                    <div className="rgstr-body-wrapper">
                        <div className='rgstr-body-container'>
                            <div>
                              <div> Username:  <input
                                onChange={this.onInputChangeUsername}
                                value={this.state.username}
                                type="text"
                                ></input>
                                </div> 
                                {/* Email:     <input></input> */}
                                <div>
                                Password: <input
                                onChange={this.onInputChangePassword}
                                value={this.state.password}
                                type="password"
                                ></input>
                                </div>
                                <button>Register</button>
                                <button onClick={() => this.onClickCancel()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;