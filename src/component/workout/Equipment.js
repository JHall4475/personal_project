import React, { Component } from 'react';
import axios from 'axios';
import { addToWorkout } from '../../ducks/actions';
import { getUserProfile } from '../../ducks/actions'
import { connect } from 'react-redux';
import '../workout/equipment.css';
import { toast } from 'react-toastify';

class Equipment extends Component {

    state = {
        equipmentList: [],
        specificExercise: [],
        muscles: [],
        userProfile: [],
    }


    componentDidMount() {
        this.getEquipmentList()
    }

    getEquipmentList = () => {
        axios.get('https://wger.de/api/v2/equipment')
            .then(equipmentList => {
                this.setState({ equipmentList: equipmentList.data.results })
            })
    }

    searchByEquipment = (id) => {
        axios.get(`https://wger.de/api/v2/exercise/?equipment=${id}&status=2&language=2&limit=50`)
            .then(specificExercise => {
                this.setState({ specificExercise: specificExercise.data.results })
            }
            )

    }

    postToWorkout = (workout) => {
        console.log("equip postToWorkout workout:", workout)
        axios.put('/api/workout/post', {
            name: workout.name,
            description: workout.description,
            userId: this.props.userId
        })
            .then((response) => {
                console.log(response.data)
                toast.success("Successfully added to workout")
            })

    }




    render() {
        return (
            <div className='eqp-wrapper'>
                <h4>Equipment</h4>
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
        userprofile: state.userprofile,
        username: state.userprofile.username,
        userId: state.userprofile.id,
        name: state.name,
        description: state.description,
    }
}

export default connect(mapStateToProps, { addToWorkout, getUserProfile })(Equipment);