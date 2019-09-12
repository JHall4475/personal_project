
export const initialState = {
    userProfile:[],
    heightFeet: 0,
    heightInches: 0,
    workoutHolder: [],
    weightEntries: [],
    date:[],
    weight:[],
    bmr:[],
    calNeeds:[],
    idealWeight:[],
    weeksFinal:[],
    muscles:[],
    equipmentList:[],
    
};

const reducer = (state = initialState, actions) => {
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
        case"GRAPH_LABELS":
        return{
            ...state,
            date: actions.payload.date,
            weight: actions.payload.weight
        }
        case"MUSCLE_LIST":
        return{
            ...state,
            muscles: actions.payload
        }
        case"EQUIPMENT_LIST":
        return{
            ...state,
            equipmentList: actions.payload
        }
        default: return state;
    }

}

export default reducer;