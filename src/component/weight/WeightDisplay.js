import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import './weightDisplay.css';

class WeightDisplay extends Component {
    
    buttonRender = () => {
        if( this.props.location.pathname === '/dashboard'){ 
            return null
        }else{
            return <button onClick={() => this.props.deleteWeightEntry()}>Delete</button>
        }
    }

    render(){
        const{date, weight}=this.props
        return(
            <div className="wd-wpr">
                <div className="wd-cntr">
                <p>Date: {date}</p>
                <p>Weight: {weight}</p>
                <div>{this.buttonRender()}</div>
                </div>
            </div>
        )
    }
}
export default withRouter(WeightDisplay);