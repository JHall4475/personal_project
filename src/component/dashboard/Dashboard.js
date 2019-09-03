import React, {Component} from 'react';
import './dashboard.css'
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';
import WeightDisplay from '../weight/WeightDisplay';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import {connect} from 'react-redux'; 
import  store  from '../../ducks/store'



class Dashboard extends Component {

    state = {
        workoutHolder: [],
    }

componentDidMount = () => {
    this.getWeight()
    this.getWorkout()
}

getWorkout = () => {
   const id = this.props.userid
    axios.get(`/api/workout/retrieve/${id}`
    )
    .then(workouts => {
        store.dispatch({type:"GET_USER_WORKOUT", payload: workouts.data})
    })
}
getWeight = () => {
   const id = this.props.userid
    axios.get(`/api/weightretrieve/${id}`)
    .then(entries => {
        console.log("Dash weights", entries)
        store.dispatch({type:"GET_USER_WEIGHT", payload: entries.data})
        console.log("weight entries redux", this.props.weightEntries)
    })
    .then(this.getLabels)
}
getLabels= () => {
    const  finalDate = this.props.weightEntries.map( function(label){
          return label.date
      })
      const finalWeight = this.props.weightEntries.map(function(yaxis){
          return yaxis.weight
      })
      const labels ={
          date: finalDate,
          weight: finalWeight
      }
      store.dispatch({type:"GRAPH_LABELS", payload: labels})
      console.log("labels date:", this.props.date, "labels weight:", this.props.weight)
  }

deleteWorkoutItem = (id) => {
    console.log("Delete workout ID:", id)
    axios.delete(`/api/workout/${id}`)
    .then((response) => {
        console.log(response.data)
    })
    .then(this.getWorkout())
}
deleteWeightEntry = (id) => {
    console.log("delete weight ID:", id)
    axios.delete(`/api/weight/${id}`)
        .then((response) => {
            console.log(response.data)
        })
}


    render() {

        const options = {
           legend:{
               labels:{
                //    fontColor:"rgb(217, 229, 214)"
               }
           },
            gridLines:{
                // color:"rgb(217, 229, 214)",
            },
            scales: {
                xAxes: [{ 
                    gridLines: {
                        display: true,
                    },
                    ticks: {
                    //   fontColor: "rgb(217, 229, 214)", // this here
                    },
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                    },
                    ticks: {
                        // fontColor: "rgb(217, 229, 214)", // this here
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
           maintainAspectRation: true
        }
        const  data={  
            labels: this.props.date,
            datasets:[{
            label: "Weight Entry Log",
            backgroundColor: 'rgb(95, 158, 160)',
            borderColor: '#494949',
            data: this.props.weight,
            // zeroLineColor: 'rgb(217, 229, 214)',
            }]
        }

        return (
            <div className="dashboard-wrapper">
                <div className="display-container">
                
                <div className="workout-container">
               <h3>Current Workout</h3>
                    {this.props.workoutHolder.map(items => {
                    return(
                     <div key={items.workout_id}>
                        <WorkoutDisplay
                        name={items.name}
                        description={items.description}
                        deleteWorkoutItem={() => this.deleteWorkoutItem(items.workout_id)} >
                        </WorkoutDisplay>
                    </div>
                            )
                })}

            </div>
            

     <div className="dash-goals-container">
         <h3>Goals</h3>
         <div >
             <img className="dash-goals-img" src={this.props.profile_pic}></img>
         </div>
            <h3 className='goals-quote'>
                "A journey of a thousand miles begins with a single step."
                – Lao Tzu
            </h3>
            <div>
                Your current Basal Metabolic Rate: {this.props.bmr}
            </div>
            <div>
                Your current Caloric Needs: {this.props.calneeds}
            </div>
            <div>
                Your Ideal Weight: {this.props.idealweight}
            </div>

            
            </div>
            <div className="weight-container"><div><h3>Weight Entries</h3></div>
            <Line
                                data={data}
                                width={500}
                                height={500}
                                options={options}
                                />
                {this.props.weightEntries.map(entries => {
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

const mapStateToProps = (state) => {
    return {
        userprofile: state.userProfile,
        username: state.userprofile.username,
        userid: state.userprofile.id,
        profile_pic: state.userprofile.profile_pic,
        weightEntries: state.weightEntries,
        workoutHolder: state.workoutHolder,
        date: state.date,
        weight: state.weight,
        bmr: state.userprofile.bmr,
        calneeds: state.userprofile.caloric_needs,
        idealweight: state.userprofile.ideal_weight
    }
}

export default connect(mapStateToProps) (Dashboard);