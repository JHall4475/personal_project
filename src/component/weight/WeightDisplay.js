import React, {Component} from 'react';

class WeightDisplay extends Component {
    render(){
        const{date, weight}=this.props
        return(
            <div>
                <p>Date: {date}</p>
                <p>Weight: {weight}</p>
                <button onClick={() => this.props.deleteWeightEntry()}>Delete</button>
            </div>
        )
    }
}
export default WeightDisplay;