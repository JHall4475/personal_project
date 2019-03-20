
export const initialState = {
name:'',
description:'',
age:0,
bmr:0,
caloric_needs:0,
gender:"male",
height: 5,
id: 0,
ideal_weight: 0,
profile_pic:"",
username:"default_user",
heightFeet: 5,
heightInches: 0,
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
            age: actions.payload.age,
            bmr: actions.payload.bmr,
            caloric_needs: actions.payload.caloric_needs,
            gender: actions.payload.gender,
            height: actions.payload.height,
            id: actions.payload.id,
            ideal_weight: actions.payload.ideal_weight,
            profile_pic: actions.payload.profile_pic,
            username: actions.payload.username,

        }
        default: return state;
    }

}

export default reducer;