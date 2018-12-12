import React, {Component} from 'react';
import axios from 'axios';

class WorkoutWizard extends Component {

    state={
        workoutName:'',
    }




    render() {
        return (
            <div>
                Workout Wizard
            <button onClick={() => this.createWorkout()}>Create a Workout</button>



            </div>

        )
    }

}

export default WorkoutWizard;