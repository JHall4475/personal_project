import React, {Component} from 'react';
import './idealWeight.css';
import {connect} from 'react-redux';


class IdealWeight extends Component{
    state={};

    componentDidMount= () => {
        console.log("ideal weight entries:", this.props.weightEntries.slice(-1))
        this.getLastWeight()
    }

   getLastWeight= () => {
    const lastWeightEntry = this.props.weightEntries.slice(-1)
    const finalEntry = lastWeightEntry.weight
    console.log("lastweightentry", lastWeightEntry)
    console.log("finalEntry", finalEntry)
   }

render(){
        return(
            <div>
                IdealWeight
                <p>Your Current Weight is: {this.props.weightEntries.weight}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        userprofile: state.userprofile,
        weightEntries: state.weightEntries,
    }
}

export default connect(mapStateToProps)(IdealWeight);