import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './workoutDisplay.css'

class WorkoutDisplay extends Component {

    buttonRender = () => {
        if (
            this.props.location.pathname === '/dashboard'
        ) {
            return <form>
                <input type="checkbox" name="checklist" value="checked"></input>
            </form>
        } else {
            return <button onClick={() => this.props.deleteWorkoutItem()}>Delete</button>
        }
    }




    render() {
        const { description, name } = this.props
        return (
            <div className='wod-wrp'>
                <div className='wod-cntr'>
                    <p>{name}</p>
                    <p>Description: {description}</p>
                    <div>{this.buttonRender()}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(WorkoutDisplay);