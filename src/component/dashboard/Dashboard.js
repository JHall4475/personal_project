import React, { Component } from 'react';
import './dashboard.css'
import axios from 'axios';
import WorkoutDisplay from '../workout/WorkoutDisplay';
import WeightDisplay from '../weight/WeightDisplay';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';



class Dashboard extends Component {

    state = {
        workoutHolder: [],

    }

    componentDidMount = () => {
        this.getWeight()
        this.getWorkout()
        this.getEquipmentList()
        this.getMuscles()
    }

    getEquipmentList = () => {
        axios.get('https://wger.de/api/v2/equipment')
            .then(equipmentList => {
                this.props.dispatch({ type: "EQUIPMENT_LIST", payload: equipmentList.data.results })
            })
    }
    getMuscles = () => {
        axios.get('https://wger.de/api/v2/muscle')
            .then(muscles => {
                this.props.dispatch({ type: "MUSCLE_LIST", payload: muscles.data.results })
            })
    }

    getWorkout = () => {
        const id = this.props.userid
        axios.get(`/api/workout/retrieve/${id}`
        )
            .then(workouts => {
                this.props.dispatch({ type: "GET_USER_WORKOUT", payload: workouts.data })
            })
    }
    getWeight = () => {
        const id = this.props.userid
        axios.get(`/api/weightretrieve/${id}`)
            .then(entries => {
                this.props.dispatch({ type: "GET_USER_WEIGHT", payload: entries.data })
            })
            .then(this.getLabels)
    }
    getLabels = () => {
        const finalDate = this.props.weightEntries.map(function (label) {
            return label.date
        })
        const finalWeight = this.props.weightEntries.map(function (yaxis) {
            return yaxis.weight
        })
        const labels = {
            date: finalDate,
            weight: finalWeight
        }
        this.props.dispatch({ type: "GRAPH_LABELS", payload: labels })
    }

    deleteWorkoutItem = (id) => {
        axios.delete(`/api/workout/${id}`)
            .then(this.getWorkout())
    }
    deleteWeightEntry = (id) => {
        axios.delete(`/api/weight/${id}`)
            .then(() => {
                toast.success("Successfully deleted")
            })
    }
    onClickProfilePic = () => {
        this.props.history.push('/profile')
    }


    render() {

        const options = {
            scales: {
                xAxes: [{
                    type: 'time',
                    display: true,
                    distribution: 'series',
                    bounds: 'data',
                    position: 'bottom',
                    ticks: {
                        reverse: false,
                        source: 'data',
                    },
                    time: {
                        displayFormats: {
                            'millisecond': 'MM/DD/YY',
                            'second': 'MM/DD/YY',
                            'minute': 'MM/DD/YY',
                            'hour': 'MM/DD/YY',
                            'day': 'MM/DD/YY',
                            'week': 'MM/DD/YY',
                            'month': 'MM/DD/YY',
                            'quarter': 'MM/DD/YY',
                            'year': 'MM/DD/YY'
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                    },
                    bounds: 'data',
                }],
            },
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    // mode: 'vertical',
                    // type: 'line',
                    // value: 10,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRation: true
        }
        const data = {
            labels: this.props.date,
            datasets: [{
                label: "Weight Entry Log",
                backgroundColor: 'rgb(95, 158, 160)',
                borderColor: '#494949',
                data: this.props.weight
            }]
        }

        return (
            <div className="dashboard-wrapper">
                <div className="display-container">

                    <div className="workout-container">
                        <h3>Current Workout</h3>
                        {this.props.workoutHolder.map(items => {
                            return (
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
                        <div className='dash-goals-wrapper'>
                            
                            <img className="dash-goals-img" src={this.props.profile_pic} alt="profile that is chosen by the user" onClick={() => { this.onClickProfilePic() }}></img>
                        
                        <h4 className='goals-quote'>
                            "A journey of a thousand miles begins with a single step."
                            <br></br>
                            – Lao Tzu
                        </h4>
                        <div>
                            Your current Basal Metabolic Rate: {this.props.bmr}
                        </div>
                        <div>
                            Your current Caloric Needs: {this.props.calneeds}
                        </div>
                        <div>
                            Your Ideal Weight: {this.props.userProfile.ideal_weight}
                        </div>
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
                            return (
                                <div key={entries.entry_number}>
                                    <WeightDisplay
                                        date={entries.date}
                                        weight={entries.weight}
                                        timeStamp={entries.time_stamp}
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
        userProfile: state.userProfile,
        username: state.userProfile.username,
        userid: state.userProfile.id,
        profile_pic: state.userProfile.profile_pic,
        weightEntries: state.weightEntries,
        workoutHolder: state.workoutHolder,
        date: state.date,
        weight: state.weight,
        bmr: state.userProfile.bmr,
        calneeds: state.userProfile.caloric_needs,
        idealweight: state.userProfile.ideal_weight,
        muscles: state.muscles
    }
}

export default connect(mapStateToProps)(Dashboard);