import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../workout/muscles.css';

class Muscles extends Component {

    state = {
        exerciseList: [],
        muscles: [],
        specificMuscle: [],
    }

    componentDidMount(){
        this.getMuscles()
    }  
    

    getExercises = () => {
        axios.get('https://wger.de/api/v2/exerciseinfo')
            .then(exerciseList => {
                console.log(exerciseList.data.results)
                this.setState({ exerciseList: exerciseList.data.results })
            })
    }

    getMuscles = () => {
        axios.get('https://wger.de/api/v2/muscle')
            .then(muscles => {
                console.log("muscles list:", muscles.data.results)
                this.setState({ muscles: muscles.data.results })
            })
    }

    searchByMuscle = (id) => {
        axios.get(`https://wger.de/api/v2/exercise/?muscles=${id}&status=2&language=2&limit=50
        `)
            .then(specificMuscle => {
                console.log(specificMuscle)
                this.setState({ specificMuscle: specificMuscle.data.results })
            })
    }

    postToWorkout = (workout) => {
        console.log("muscles postToworkout wrkot:", workout)
        axios.put(`/api/workout/post`, {
            name: workout.name,
            description: workout.description,
            userId: this.props.userId

        })
    }



    render() {
        return (
            <div className="eqp-wrapper">

                {/* <button onClick={() => this.getExercises()}>Get Exercises </button> */}
                <h4>Muscles</h4>
                <div className="headerContainer">
            {this.state.muscles.map(muscles => {
                    return (
                        <div className="containerDivHeader" key={muscles.id}>
                            <button onClick={() => this.searchByMuscle(muscles.id)}>{muscles.name}</button>
                        </div>
                    )
                })}
                 </div>
            <div className="eqp-container-wrapper">
                {this.state.specificMuscle.map(muscle => {
                    return (
                        <div className="containerDiv" key={muscle.id}>
                            <div className="exerciseByEquipment">
                            <p>{muscle.name}</p>
                            <p>{muscle.description}</p>
                            <button>Add to Workout</button>
                            </div>
                        </div>
                    )
                })}
                </div>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return{
        userproile: state.userprofile,
        userId: state.userprofile.id
    }
}

export default connect(mapStateToProps)(Muscles);

