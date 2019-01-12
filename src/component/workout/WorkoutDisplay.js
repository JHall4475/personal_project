import React, {Component} from 'react';

class WorkoutDisplay extends Component {
    
    render(){
        const{description, name}=this.props
        return(
            <div>
                <p>Name: {name}</p>
                <p>Description: {description}</p>
                
                <button onClick={() => this.props.deleteWorkoutItem()}>Delete</button>
            </div>
        )
    }
}

export default WorkoutDisplay;