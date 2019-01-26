import React, {Component} from 'react';
import Nav from '../../../src/component/nav/Nav';
import route from '../../../src/route';
import './dashboard.css'
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';


class Dashboard extends Component {

    state = {
        workoutHolder: [],
        userProfile: [],
        quotes:[],
    }

componentDidMount = () => {
   this.getUserProfile()
    this.getWorkout()
    // this.getQuotes()
}

getUserProfile = () => {
    axios.get('/api/user')
    .then(user => {
        console.log(user.data)
        this.setState({userProfile: user.data})
       
    })
}

// getQuotes = () => {
//     axios.get('api/quotes')
//     .then( quotes => {
//         console.log("quotes:", quotes)
//         //this.setState({quotes: quotes.data})
//     })
// }

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


    render() {
        return (
            <div className="dashboard-wrapper">

                <div>Profile Pic</div>
                <div>Weight Entries</div>
                <div>Quotes

                </div>
                <div className="workout-wrapper">
               Current Workout
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
               
                
            </div>
        )
    }
}

export default Dashboard;