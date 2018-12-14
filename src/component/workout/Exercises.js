import React, {Component} from 'react';
import axios from 'axios';

class Exercises extends Component {

    state={
        exerciseList: [],
        muscles:[],
        specificMuscle:[],
    }
    
    getExercises = () => {
        axios.get('https://wger.de/api/v2/exerciseinfo')
        .then(exerciseList => {
            console.log(exerciseList.data.results)
            this.setState({exerciseList: exerciseList.data.results})
        })
    }

    getMuscles = () => {
        axios.get('https://wger.de/api/v2/muscle')
        .then(muscles => {
            console.log(muscles.data.results)
            this.setState({muscles: muscles.data.results})
        })
    }
    
    searchByMuscle = (id) => {
        axios.get(`https://wger.de/api/v2/exercise/?muscles=${id}&status=2&language=2&limit=50
        `)
        .then(specificMuscle => {
            console.log(specificMuscle)
            this.setState({specificMuscle: specificMuscle.data.results})
        })
    }



    render() {
        return (
            <div>
            <button onClick={() => this.getExercises()}>Get Exercises </button>
            Create Workout by Exercises
            {this.state.exerciseList.map(exercise => {
                return (
                    <div>
                        {/* {console.log(exerise)} */}
                    <p>{exercise.name}</p>
                    <p>{exercise.description}</p>
                    

                    </div>
                )
                
            })}

             <button onClick={() => this.getMuscles()}>Search by Muscles </button>
            Muscles
            {this.state.muscles.map(muscles => {
                return (
                    <div>
                        {console.log(muscles)}
                    <button onClick={() => this.searchByMuscle(muscles.id)}>{muscles.name}</button>
                    </div>
                )
                
            })}

            {this.state.specificMuscle.map(muscle => {
                return (
                    <div>
                        <p>{muscle.name}</p>
                        <p>{muscle.description}</p>
                        <button>Add to Workout</button>
                    </div>
                )
            })}

            </div>
        )
    
    }
}

export default Exercises;

