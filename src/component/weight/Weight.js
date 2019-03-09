import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import WeightDisplay from '../weight/WeightDisplay';

class Weight extends Component{
    
    state={
        weightEntries:[]
    }

    componentDidMount = () => {
        this.getWeightEntries()
    }

    getWeightEntries = () => {
        axios.get('/api/weight/entries')
         .then(entries => {
         console.log(entries)
         this.setState({weightEntries: entries.data})
    })
    }

    deleteWeightEntry = (id) => {
        console.log(id)
        axios.delete(`/api/weight/${id}`)
        .then((response) => {
            console.log(response.data)
        })
    }


    render(){
        return(
        <div>Current Weight Log
        <br></br>

        {this.state.weightEntries.map (entries => {
            return(
                <div key={entries.id + entries.date}>
                <WeightDisplay
                date={entries.date}
                weight={entries.weight}
                deleteWeightEntry={() => this.deleteWeightEntry(entries.entry_number)}
                ></WeightDisplay>
                
                
                </div>
            )
        })}
         <Link className="component-link" to='/wizard'>
        <p>Add Weight Entry</p>
        </Link>

        </div>
        )
    
}
}

export default withRouter(Weight);