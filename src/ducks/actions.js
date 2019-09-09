
export function addToWorkout(workoutList) {
    return {
        type:"ADD_WORKOUT_LIST",
        payload: workoutList
    }
};

export function graphLabels(label){
    return{
        type:"GRAPH_LABELS",
        payload: label.data
    }
};
