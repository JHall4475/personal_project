import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class WeightWizard extends Component {
    
    state ={
        date: '',
        weight:0,
    }

    
    componentDidMount(){
        this.dateOfToday();
        
    }

    dateOfToday = () => {
        var today = new Date(),
            dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            console.log(dateToday)
            this.setState({date: dateToday})
    }
    

    onInputChangeDate = (e) => {
        this.setState({date: e.target.value})
    }

    onInputChangeWeight = (e) => {
        this.setState({weight : e.target.value})
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
                <script></script>
                <br></br>
                <br></br>
                <div>Current Weight</div>
                <input
                    onChange={this.onInputChangeWeight}
                    value={this.state.weight}
                    type='number'
                    title='Weight'
                ></input>

                <br></br>
                <br></br>

                <button>Submit</button>

            </div>
        )
    }
}


export default withRouter(WeightWizard);