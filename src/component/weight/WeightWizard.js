import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './weightWizard.css'


class WeightWizard extends Component {
    
    state ={
        date:'',
        weight:'',
        userProfile:[],
    }

    componentDidMount(){
        this.dateOfToday();
        this.getUserProfile();
        
    }

   

    dateOfToday = () => {
        var moment = require('moment');
        var today = moment().format('YYYY-MM-DD').toString();
        console.log(today)
            this.setState({date: today})
            }

     getUserProfile = () => {
          axios.get('/api/user')
            .then(user => {
            console.log("user:", user.data)
             this.setState({userProfile: user.data})
                   
                })
            }
    

    onInputChangeDate = (e) => {
        this.setState({date: e.target.value})
    }

    onInputChangeWeight = (e) => {
        this.setState({weight : e.target.value})
    }

    goBack(path) {
        this.props.history.push(path);
    }

    submitWeightEntry = () => {
        axios.post('/api/weight/post', {
            id: this.state.userProfile.id,
            date: this.state.date,
            weight: this.state.weight,
           
        })
        .then((response) => {
            console.log(response.data)
            this.goBack('../weight')
            toast.success(`Successfully added weight entry`)
        })
    }


    
    render(){
        return (
            <div className='ww-wrapper'>
                <div className='ww-container'>
                <br></br>
                Add Weight Entry
                <br></br>
                <br></br>
                <div>Date</div>
                <input
                    onChange={this.onInputChangeDate}
                    value={this.state.date}
                    type='date'
                    name='date'
                    
                ></input>
                
                <br></br>
                <br></br>
                <div>Current Weight</div>
                <input
                    onChange={this.onInputChangeWeight}
                    value={this.state.weight}
                    type='number'
                    title='Weight'
                    // min='50'
                    // max='500'
                    
                ></input>

                <br></br>
                <br></br>

                <button
                onClick={this.submitWeightEntry}
                >Submit</button>
                {/* <button onClick={this.goBack('../weight')}>Cancel</button> */}
                <Link className="component-link" to='/weight'>
                <p>Cancel</p></Link>
            </div>
            </div>
        )
    }
}


export default withRouter(WeightWizard);