import React, { Component } from 'react';
import axios from 'axios';
import {addToWorkout} from '../../ducks/actions';
import{getUserProfile} from '../../ducks/actions'
import {connect} from 'react-redux';
import '../workout/equipment.scss';
import { toast } from 'react-toastify';

class Equipment extends Component {

    state = {
        equipmentList: [],
        specificExercise: [],
        muscles: [],
        userProfile:[],
    }


    componentDidMount() {
        this.getEquipmentList()
        this.getReduxProfile()
        // this.getUserProfile()
    }

    getReduxProfile= () => {
        this.props.getUserProfile()
    }
    // getUserProfile = () => {
    //     axios.get('/api/user')
    //     .then(user => {
    //         console.log(user.data)
    //         this.setState({userProfile: user.data})
           
    //     })
    // }

    getEquipmentList = () => {
        axios.get('https://wger.de/api/v2/equipment')
            .then(equipmentList => {
                // console.log(equipmentList.data.results)
                this.setState({ equipmentList: equipmentList.data.results })
            })
    }

    searchByEquipment = (id) => {
        axios.get(`https://wger.de/api/v2/exercise/?equipment=${id}&status=2&language=2&limit=50`)
            .then(specificExercise => {
                // console.log(specificExercise.data.results)
                this.setState({ specificExercise: specificExercise.data.results })
            }
            )
            
    }

    postToWorkout = (workout) => {
         console.log("userProfileId:", this.props.id )
        axios.put('/api/workout/post', {
            name: workout.name,
            description: workout.description,
            userId: workout.user_id
        })
        .then((response) => {
            console.log(response.data)
            toast.success("Successfully added to workout")
        })
    }
    



    render() {
        return (
            <div className='eqp-wrapper'>
                {/* <button onClick={() => this.getEquipmentList()}>Search by Equipment</button> */}
                
            <div className="headerContainer">
                    {this.state.equipmentList.map(equip => {
                        return (
                            <div className="containerDivHeader" key={equip.id}>
                                <div className="equipmentDiv">
                                    
                                    <button className="equip-btn" onClick={() => this.searchByEquipment(equip.id)}>{equip.name}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                    <div className='eqp-container-wrapper'>
                {this.state.specificExercise.map((exercise, index) => {
                    return (
                        <div className="containerDiv" key={exercise.id}>
                            <div className="exerciseByEquipment">
                            
                                <h4>{exercise.name}</h4>
                                <p>{exercise.description}</p>
                                <button onClick={() => this.postToWorkout(this.state.specificExercise[index])}>Add to workout</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        description: state.description,
        user_id: state.id,
    }
}

export default connect(mapStateToProps, {addToWorkout, getUserProfile})(Equipment);