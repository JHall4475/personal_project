import React, {Component} from 'react';
import './dashboard.css'
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';
import WeightDisplay from '../weight/WeightDisplay';
import Weight from '../weight/Weight';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';



class Dashboard extends Component {

    state = {
        workoutHolder: [],
        userProfile: [],
        weightEntries:[],
        date:[],
        weight:[],

    }

componentDidMount = () => {
   this.getUserProfile()
    this.getWorkout()
    this.getWeight()
    
}

getUserProfile = () => {
    axios.get('/api/user')
    .then(user => {
        console.log("userData pulled in Dashboard.js:", user.data)
        this.setState({userProfile: user.data})
       
    })
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
getWeight = () => {
    axios.get('/api/weight/retrieve')
    .then(entries => {
        console.log("weight:", entries)
         this.setState({weightEntries: entries.data},
            () => {this.getLabels();})
    })
}
getLabels= () => {
    const  finalArray = this.state.weightEntries.map( function(label){
          return label.date
      })
      const finalWeight = this.state.weightEntries.map(function(yaxis){
          return yaxis.weight
      })
      this.setState({date: finalArray,
      weight: finalWeight
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
        const options = {
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderColor: 'red',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    type: 'line',
                    value: 10,
                    scaleID: 'x-axis-0',
                    ticks: {
                        fontColor: "rgb(217, 229, 214)", // this here
                      },
              }]
           },
           maintainAspectRation: false
        }
        const  data={   
            labels: this.state.date,
            datasets:[{
            label: "Weight Entry Log",
            color: 'rgb(217, 229, 214)',
            backgroundColor: 'rgb(95, 158, 160)',
            borderColor: '#494949',
            data: this.state.weight,
            zeroLineColor: 'rgb(217, 229, 214)',
            }]
        }

        return (
            <div className="dashboard-wrapper">

                <div></div>
                
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
            

            <div className="dash-goals-container">Goals
            <h3 className='goals-quote'>"A journey of a thousand miles begins with a single step."
– Lao Tzu</h3>
            
            </div>
            <div className="weight-container"><div>Weight Entries</div>
            <Line
                                data={data}
                                width={500}
                                height={500}
                                options={options}
                                />
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