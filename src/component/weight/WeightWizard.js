import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import './weightWizard.css'


class WeightWizard extends Component {

    state = {
        date: '',
        weight: '',
        now:'',
    }

    componentDidMount() {
        this.dateOfToday();
        this.currentTime();
    
    }

    currentTime = () => {
        let moment  = require('moment');
        let now = moment().format("ddd, hA")
        this.setState({now: now})
    }

    dateOfToday = () => {
        var moment = require('moment');
        var today = moment().format('YYYY-MM-DD').toString();
        this.setState({ date: today })    }

    onInputChangeDate = (e) => {
        this.setState({ date: e.target.value })
    }

    onInputChangeWeight = (e) => {
        this.setState({ weight: e.target.value })
    }

    goBack(path) {
        this.props.history.push(path);
    }

    submitWeightEntry = () => {
        axios.post('/api/weight/post', {
            id: this.props.userProfile.id,
            date: this.state.date,
            weight: this.state.weight,
            timeStamp: this.state.now
        })
            .then(() => {
                this.goBack('../weight')
                toast.success(`Successfully added weight entry`)
            })
    }



    render() {
        return (
            <div className='ww-wrapper'>
                <div className='ww-container'>

                    <div> Add Weight Entry</div>
                    <img className="profile-img" src={this.props.userProfile.profile_pic} alt="profile chosen by user"></img>
                    <div>
                        <p>Date</p>
                        <input
                            onChange={this.onInputChangeDate}
                            value={this.state.date}
                            type='date'
                            name='date'
                        ></input>
                    </div>
                    <div>
                    <p>Current Weight</p>
                        <input
                            onChange={this.onInputChangeWeight}
                            value={this.state.weight}
                            type='number'
                            title='Weight'
                        ></input>
                    </div>
                    <div>
                        <button
                            onClick={this.submitWeightEntry}
                        >Submit</button>
                        <Link className="component-link" to='/weight'>
                            <p>Cancel</p>
                        </Link>

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile
    }
}

export default connect(mapStateToProps)(withRouter(WeightWizard));