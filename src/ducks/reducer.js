
export const initialState = {
    userProfile:[],
    heightFeet: 0,
    heightInches: 0,
    workoutHolder: [],
    weightEntries: [],
    date:[],
    weight:[],
    lastWeight: [],
    bmr:[],
    calNeeds:[],
    idealWeight:[],
    weeks:[],


};

const reducer = (state = initialState, actions) => {
    console.log("reducer state, action:", state, actions);
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
            userProfile: actions.payload
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
        case"GET_USER_LAST_WEIGHT":
        return{
            ...state,
            lastWeight: actions.payload

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