import React, {Component} from 'react';
import axios from 'axios';

class Exercises extends Component {

    state={
        exerciseList: []
    }
    
    getExercises = () => {
        axios.get('https://wger.de/api/v2/exerciseinfo')
        .then(exerciseList => {
            console.log(exerciseList.data.results)
            this.setState({exerciseList: exerciseList.data.results})
        })
    }
    


    render() {
        return (
            <div>
            <button onClick={() => this.getExercises()}>Get Exercises </button>
            Exercises
            {this.state.exerciseList.map(exercise => {
                return (
                    <div>
                        {/* {console.log(exerise)} */}
                    <p>{exercise.name}</p>
                    <p>{exercise.description}</p>
                    

                    </div>
                )
                
            })}

            </div>
        )
    
    }
}

export default Exercises;

