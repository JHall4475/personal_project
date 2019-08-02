import React, {Component} from 'react';
import './weightDisplay.css';

class WeightDisplay extends Component {
    render(){
        const{date, weight}=this.props
        return(
            <div className="wd-wpr">
                <div className="wd-cntr">
                <p>Date: {date}</p>
                <p>Weight: {weight}</p>
                <button onClick={() => this.props.deleteWeightEntry()}>Delete</button>
                </div>
            </div>
        )
    }
}
export default WeightDisplay;