import React, { Component } from 'react';
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';
import './workout.css'
import Equipment from './Equipment';
import { connect } from 'react-redux';
import Muscles from './Muscles';
import { toast } from 'react-toastify';

class Workout extends Component {

    state = {
        selectedOption: "equipment",
        workoutHolder: [],
        userProfile: [],
    }


    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value })
    }

    deleteWorkoutItem = (id) => {
        axios.delete(`/api/workout/${id}`)
            .then((response) => {
                toast.success("Successfully deleted")
            })
    }


    render() {

        return (
            <div className='workoutpg-wrapper'>
                <h2>Workout</h2>
                <div className='workoutpg-container'>
                    <div className='w-current-workout'>
                        <h3>Current Workout</h3>
                        {this.props.workoutHolder.map(items => {
                            return (
                                <div key={items.workout_id}>
                                    <WorkoutDisplay
                                        name={items.name}
                                        description={items.description}
                                       delete={<button>button</button>}
                                        deleteWorkoutItem={() => this.deleteWorkoutItem(items.workout_id)} >
                                    </WorkoutDisplay>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-add-to'>
                        <h3>Add to Workout</h3>
                        <div className="w-toggle-container">
                            <label>
                                Search by Equipment
                                <input
                                    type="radio"
                                    value="equipment"
                                    checked={this.state.selectedOption === "equipment"}
                                    onChange={this.handleOptionChange}
                                ></input>
                            </label>
                            <label>
                                Search by Muscles
                                <input
                                    type="radio"
                                    value="muscles"
                                    checked={this.state.selectedOption === "muscles"}
                                    onChange={this.handleOptionChange}
                                ></input>
                            </label>
                        </div>
                        <div>
                        {this.state.selectedOption === "equipment" ? <Equipment></Equipment> : <Muscles></Muscles>}
                        </div>

                       

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userprofile: state.userProfile,
        id: state.userProfile.id,
        workoutHolder: state.workoutHolder,
    }
}

export default connect(mapStateToProps)(Workout);