import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class WeightWizard extends Component {
    
    state ={
        date:'',
        weight:'',
    }

    componentDidMount(){
        this.dateOfToday();
        
    }

   

    dateOfToday = () => {
        var moment = require('moment');
        var today = moment().format('YYYY-MM-DD').toString();
        console.log(today)
            this.setState({date: today})
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
            date: this.state.date,
            weight: this.state.weight,
        })
        .then((response) => {
            console.log(response.data)
            this.goBack('../weight')
        })
    }


    
    render(){
        return (
            <div>
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

            </div>
        )
    }
}


export default withRouter(WeightWizard);