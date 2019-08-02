
export const initialState = {
    userprofile:[],
    heightFeet: 5,
    heightInches: 0,
    workoutHolder: [],
    weightEntries: [],
    date:[],
    weight:[],

};

const reducer = (state = initialState, actions) => {
   // console.log(state, action);
    switch (actions.type) {
        case"ADD_WORKOUT_LIST":
        return{
            ...state,
            name: actions.payload.name,
            description: actions.payload.description
        }
        case"GET_USER_PROFILE":
        return{
            ...state,
            userprofile: actions.payload
        }
        case"GET_USER_WORKOUT":
        return{
            ...state,
            workoutHolder: actions.payload
        }
        case"GET_USER_WEIGHT":
        return{
            ...state,
            weightEntries: actions.payload
        }
        case"GRAPH_LABELS":
        return{
            ...state,
            date: actions.payload.date,
            weight: actions.payload.weight
        }
        default: return state;
    }

}

export default reducer;