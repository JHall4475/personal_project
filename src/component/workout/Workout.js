import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay'

class  Workout extends Component{

        state= {
            workoutHolder:[],
        }

        componentDidMount = () => {
           
             this.getWorkout()
         }  

         getWorkout = () => {
            axios.get('/api/workout/retrieve'
            // , {userId: this.state.userProfile.id}
            
            )
            .then(workouts => {
                console.log("workout:", workouts)
                this.setState({workoutHolder: workouts.data})
            })
        }

        deleteWorkoutItem = (id) => {
            console.log(id)
            axios.delete(`/api/workout/${id}`)
            .then((response) => {
                console.log(response.data)
            })
            .then(this.getWorkout())
        }


    render(){
        return(
        <div>
            Workout
        <br></br>
        <Link className="component-link" to='/equipment'>
        <p>Create Workout by Equipment</p>
        </Link>
        <Link className="component-link" to='/exercises'>
        <p>Create Workout by Exercises</p>
        </Link>
        
        {this.state.workoutHolder.map(items => {
                return(
                    <div key={items.id}>
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
        )
    }
}

export default withRouter(Workout);