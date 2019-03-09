
export const initialState = {
name:'',
description:''
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
        default: return state;
    }

}

export default reducer;