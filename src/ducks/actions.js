import axios from "axios";

export function addToWorkout(workoutList) {
    return {
        type:"ADD_WORKOUT_LIST",
        payload: workoutList
    }
}
export const getUserProfile = () => {
 return dispatch => {
     axios.get('http://localhost:8080/api/user')
     .then(res => {
         console.log("actions res:", res)
         dispatch({
             type:"GET_USER_PROFILE",
             payload: res
         })
     })
 }
}
export const addLoginUserId = (loginUserId) => {
    return dispatch => {
        dispatch({ 
        type:"ADD_USER_ID",
        payload: loginUserId
    })
       
        
    }
}