import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../workout/muscles.css';
import { toast } from 'react-toastify';


class Muscles extends Component {

    state = {
        specificMuscle: [],
    }

    searchByMuscle = (id) => {
        axios.get(`https://wger.de/api/v2/exercise/?muscles=${id}&status=2&language=2&limit=50
        `)
            .then(specificMuscle => {
                this.setState({ specificMuscle: specificMuscle.data.results })
            })
    }

    postToWorkout = (workout) => {
        axios.put(`/api/workout/post`, {
            name: workout.name,
            description: workout.description,
            userId: this.props.userId
        })
            .then(() => {
                toast.success("Successfully added to workout")
            })
    }

    render() {
        return (
            <div className="eqp-wrapper">
                {/* <h4>Muscles</h4> */}
                <div className="headerContainer">
                    {this.props.muscles.map(muscles => {
                        return (
                            <div className="containerDivHeader" key={muscles.id}>
                                <button onClick={() => this.searchByMuscle(muscles.id)}>{muscles.name}</button>
                            </div>
                        )
                    })}
                </div>
                <div className="eqp-container-wrapper">
                    {this.state.specificMuscle.map((muscle, index) => {
                        return (
                            <div className="containerDiv" key={muscle.id}>
                                <div className="exerciseByEquipment">
                                    <p>{muscle.name}</p>
                                    <p>{muscle.description}</p>
                                    <button onClick={() => this.postToWorkout(this.state.specificMuscle[index])}>Add to Workout</button>
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
        userproile: state.userProfile,
        userId: state.userProfile.id,
        muscles: state.muscles,
    }
}

export default connect(mapStateToProps)(Muscles);

