import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

class Weight extends Component{
    
    state={
        weightEntries:[]
    }

    // componentDidMount(

    // )

    // getWeightEntries = () => {
    //     axios.get('/api/weight/entries')
    //      .then(entries => {
    //      console.log(entries)
    //      this.setState({weightEntries: entries})
    //})
    // }


    render(){
        return(
        <div>Weight
        <br></br>
        <Link className="component-link" to='/wizard'>
        
        <p>Add Weight Entry</p>
        </Link>
        

        </div>
        )
    
}
}

export default withRouter(Weight);