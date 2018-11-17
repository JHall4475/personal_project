import React, { Component } from 'react';
import axios from 'axios';

class Equipment extends Component {

    state ={
        equipmentList:[]
    }


// componentDidMount(){
//     this.getEquipmentList()
// }

getEquipmentList = () => {
    axios.get('https://wger.de/api/v2/equipment')
    .then(equipmentList => {
        console.log(equipmentList.data.results)
        this.setState({equipmentList: equipmentList.data.results})
    })
}

render() {
    return (
        <div>
            <button onClick={() => this.getEquipmentList()}>Get Equipment</button>
            Equipment
            {this.state.equipmentList.map(equip => {
                return (
                    <div>
                        <p>{equip.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

}

export default Equipment;