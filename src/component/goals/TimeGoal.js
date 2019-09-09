import React, { Component } from 'react';
import './timeGoal.css';
import { connect } from 'react-redux';
import axios from 'axios';

class TimeGoal extends Component {
    state= {
        onePound: 3500,
        oneHalfPounds: 5250,
        twoPounds: 7000,
        currentWeight: 235,
        idealWeight: 183,
        weeks: 0,
    }

    componentDidMount = () => {
        this.weeksCalculator()
    }



    weeksCalculator = () => {
      let diff =  Number(this.state.currentWeight - this.state.idealWeight)
        if(diff >= 1){
            return this.setState({weeks: diff})
        } else{
            this.setState({weeks: 0})
        }
    }

    calorieCounter = (lbs) => {
        return(
        <div>
            <div>Your current weight is: {this.state.currentWeight}</div>
            <div>Your ideal weight is: {this.state.idealWeight}</div>
            <div>
            if you loose {lbs} calories/week or {lbs/3500} lb(s)/week
            </div>
            <div>
                {Number((lbs / 7))} calories per day
            </div>
            <div>
                {Number((lbs / 7) / 2)} calories from each diet and exercise
            </div>
            <div>To reach your ideal weight it will take {Math.round(this.state.weeks / (lbs/3500))} weeks</div>
        </div>
        )
    }
    

    render(){
        return(
            <div className="time-goal-wrapper">
                 <div className="time-options">
                    goal 1
                    {this.calorieCounter(this.state.onePound)}
                    <button>Set Goal</button>
                </div>
                <div className="time-options">
                    goal 2
                    {this.calorieCounter(this.state.oneHalfPounds)}
                    <button>Set Goal</button>
                </div>
                <div className="time-options">
                    goal 3
                    {this.calorieCounter(this.state.twoPounds)}
                    <button>Set Goal</button>
                 </div>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userid: state.userProfile.id,
    }
}

export default connect(mapStateToProps)(TimeGoal);