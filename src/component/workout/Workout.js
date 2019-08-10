import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';
import './workout.css'
import Equipment from './Equipment';
import {connect} from 'react-redux';

class Workout extends Component {

    state = {
        workoutHolder: [],
        userProfile:[],
    }

    componentDidMount = () => {
        this.getUserProfile()
        this.getWorkout()
    }
    getUserProfile = () => {
        axios.get('/api/user')
        .then(user => {
            this.setState({userProfile: user.data})
        })
    }

    getWorkout = () => {
        axios.get('/api/workout/retrieve', {userId: this.state.userProfile.id}
        )
            .then(workouts => {
                console.log("workout:", workouts)
                this.setState({ workoutHolder: workouts.data })
            })
    }

    deleteWorkoutItem = (id) => {
        console.log("delete workout item id:", id)
        axios.delete(`/api/workout/${id}`)
            .then((response) => {
                console.log(response.data)
            })
            .then(this.getWorkout())
    }


    render() {
        return (
            <div className='workoutpg-wrapper'>
                <div className='workoutpg-container'>                   
                    <div className='w-current-workout'>
                        <h3 ><u>Current Workout</u></h3>
                        {this.props.workoutHolder.map(items => {
                            return (
                                <div key={items.name}>
                                    <WorkoutDisplay
                                        name={items.name}
                                        description={items.description}
                                        deleteWorkoutItem={() => this.deleteWorkoutItem(items.id)}
                                    >
                                    </WorkoutDisplay>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-add-to'>
                        <h3><u>Add to Workout</u></h3>
                        <Equipment></Equipment>
                    </div>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        userprofile:state.userprofile,
        id: state.userprofile.id,
        workoutHolder: state.workoutHolder,
    }
}

export default connect(mapStateToProps)(Workout);