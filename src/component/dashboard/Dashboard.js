import React, {Component} from 'react';
import './dashboard.css'
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';
import WeightDisplay from '../weight/WeightDisplay';
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
   this.getWeight()
   this.getWorkout()
    
    
}

getUserProfile = () => {
    axios.get('/api/user')
    .then(user => {
        console.log('dash user:', user)
        this.setState({userProfile: user.data })}
    )}


getWorkout = () => {
    axios.get('/api/workout/retrieve', {userId: this.state.userProfile.id})
    .then(workouts => {
        console.log("Dash workout:", workouts)
        console.log("dash workout id", this.state.userProfile.id)
        this.setState({workoutHolder: workouts.data})
    })
}
getWeight = () => {
    axios.get('/api/weightretrieve', {userId: this.state.userProfile.id})
    .then(entries => {
        console.log("dash weight:", entries)
        console.log('dash weight id:', this.state.userProfile.id)
         this.setState({weightEntries: entries.data})
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
deleteWeightEntry = (id) => {
    console.log(id)
    axios.delete(`/api/weight/${id}`)
        .then((response) => {
            console.log(response.data)
        })
}


    render() {
        const options = {
            gridLines:{
                color:"rgb(217, 229, 214)",
            },
            scales: {
                xAxes: [{ 
                    gridLines: {
                        display: true,
                    },
                    ticks: {
                      fontColor: "rgb(217, 229, 214)", // this here
                    },
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                    },
                    ticks: {
                        fontColor: "rgb(217, 229, 214)", // this here
                      },
                }],
            },
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
               <h3>Current Workout</h3>
                    {this.state.workoutHolder.map(items => {
                    return(
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
            

            <div className="dash-goals-container"><h3>Goals</h3>
            <h3 className='goals-quote'>"A journey of a thousand miles begins with a single step."
– Lao Tzu</h3>

            
            </div>
            <div className="weight-container"><div><h3>Weight Entries</h3></div>
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
                        deleteWeightEntry={() => this.deleteWeightEntry(entries.entry_number)}
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