import React, { Component } from 'react';
import axios from 'axios';
import {addToWorkout} from '../../ducks/actions';
import {connect} from 'react-redux';
import '../workout/equipment.scss';
import { toast } from 'react-toastify';

class Equipment extends Component {

    state = {
        equipmentList: [],
        specificExercise: [],
        muscles: [],
    }


    componentDidMount() {
        this.getEquipmentList()
    }

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
                console.log(specificExercise.data.results)
                this.setState({ specificExercise: specificExercise.data.results })
            }
            )
            
    }

    postToWorkout = (workout) => {
        console.log("post to workout name:", workout)
        axios.put('/api/workout/post', {
            name: workout.name,
            description: workout.description
        })
        .then((response) => {
            console.log(response.data)
            toast.success("Successfully added to workout")
        })
    }
    



    render() {
        return (
            <div >
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

                {this.state.specificExercise.map((exercise, index) => {
                    return (
                        <div className="containerDiv" key={exercise.id}>
                            <div className="exerciseByEquipment">
                            
                                <p>{exercise.name}</p>
                                <p>{exercise.description}</p>
                              
                                <button onClick={() => this.postToWorkout(this.state.specificExercise[index])}>Add to workout</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        description: state.description
    }
}

export default connect(mapStateToProps, {addToWorkout})(Equipment);