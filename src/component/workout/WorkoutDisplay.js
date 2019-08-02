import React, {Component} from 'react';
import './workoutDisplay.css'

class WorkoutDisplay extends Component {
    
    render(){
        const{description, name}=this.props
        return(
            <div className='wod-wrp'>
                <div className='wod-cntr'>
                <p>Name: {name}</p>
                <p>Description: {description}</p>
                
                <button onClick={() => this.props.deleteWorkoutItem()}>Delete</button>
                </div>
            </div>
        )
    }
}

export default WorkoutDisplay;