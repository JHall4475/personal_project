import React, { Component } from 'react';
import axios from 'axios';
import '../workout/equipment.css'

class Equipment extends Component {

    state ={
        equipmentList:[],
        specificExercise:[]
    }


componentDidMount(){
    this.getEquipmentList()
}

getEquipmentList = () => {
    axios.get('https://wger.de/api/v2/equipment')
    .then(equipmentList => {
        console.log(equipmentList.data.results)
        this.setState({equipmentList: equipmentList.data.results})
    })
}

searchByEquipment = (id) => {
    axios.get(`https://wger.de/api/v2/exercise/?equipment=${id}&status=2&language=2&limit=50`)
    .then(specificExercise => {
        console.log(specificExercise)
        this.setState({specificExercise: specificExercise.data.results})
    }
    )
}

render() {
    return (
        <div>
            {/* <button onClick={() => this.getEquipmentList()}>Search by Equipment</button> */}
            Equipment
            {this.state.equipmentList.map(equip => {
                return (
                    <div className="equipmentDiv">
                        {console.log(equip)}
                        <button className="equip-btn" onClick={() => this.searchByEquipment(equip.id) }>{equip.name}</button>
                    </div>
                )
            })}

            {this.state.specificExercise.map(exercise => {
                return (
                    <div>
                        <p>{exercise.name}</p>
                        <p>{exercise.description}</p>
                        <button>Add to workout</button>
                    </div>
                )
            })}
        </div>
    )
}

}

export default Equipment;