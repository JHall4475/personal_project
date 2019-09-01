import React, {Component} from 'react';
import './workoutDisplay.css'

// const DeleteButton = props => <div>{props.delete}</div>
const deleteButton =  <button onClick={() => this.props.deleteWorkoutItem()}>Delete</button>



class WorkoutDisplay extends Component {

    
    render(){
        const{description, name}=this.props
        return(
            <div className='wod-wrp'>
                <div className='wod-cntr'>
                <p>Name: {name}</p>
                <p>Description: {description}</p>
                {/* <div>{deleteButton}</div> */}
                {/* <button onClick={() => this.props.deleteWorkoutItem()}>Delete</button> */}
                </div>
            </div>
        )
    }
}

export default WorkoutDisplay;