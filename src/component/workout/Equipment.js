import React, { Component } from 'react';
import axios from 'axios';
import {addToWorkout} from '../../ducks/actions';
import {connect} from 'react-redux';
import '../workout/equipment.scss';

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

    postToWorkout = () => {
        console.log("post to workout name:", this.state.specificExercise)
        axios.put('/api/workout/post', {
            name: this.state.specificExercise.name,
            description: this.state.specificExercise.description
            
        })
        .then((response) => {
            console.log(response.data)
        })
    }
    



    render() {
        return (
            <div >
                {/* <button onClick={() => this.getEquipmentList()}>Search by Equipment</button> */}
                Equipment
            <div className="headerContainer">
                    {this.state.equipmentList.map(equip => {
                        return (
                            <div className="containerDivHeader">
                                <div className="equipmentDiv">
                                    
                                    <button className="equip-btn" onClick={() => this.searchByEquipment(equip.id)}>{equip.name}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {this.state.specificExercise.map(exercise => {
                    return (
                        <div className="containerDiv">
                            <div className="exerciseByEquipment">
                            
                                <p>{exercise.name}</p>
                                <p>{exercise.description}</p>
                              
                                <button onClick={this.postToWorkout}>Add to workout</button>
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