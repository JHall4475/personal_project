import React, {Component} from 'react';
import './dashboard.css'
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';
import WeightDisplay from '../weight/WeightDisplay';


class Dashboard extends Component {

    state = {
        workoutHolder: [],
        userProfile: [],
        quotes:[],
        weightEntries:[],

    }

componentDidMount = () => {
   this.getUserProfile()
    this.getWorkout()
    this.getWeight()
    // this.getQuotes()
}

getUserProfile = () => {
    axios.get('/api/user')
    .then(user => {
        console.log("userData pulled in Dashboard.js:", user.data)
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
getWeight = () => {
    axios.get('/api/weight/retrieve')
    .then(entries => {
        console.log("weight:", entries)
         this.setState({weightEntries: entries.data})
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

                <div></div>
                
                {/* <div>Quotes</div> */}
                <br></br>
                <div className="display-container">
                
                <div className="workout-container">
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
            

            <div className="dash-goals-container">Goals</div>
            <div className="weight-container">Weight Entries
                {this.state.weightEntries.map(entries => {
                    return(
                        <div key={entries.entry_number}> 
                        <WeightDisplay
                        
                        date={entries.date}
                        weight={entries.weight}
                        
                        ></WeightDisplay>
                        
                        </div>
                    )
                })}
            
            </div>
               
            </div>    
            </div>
        )
    }
}

export default Dashboard;