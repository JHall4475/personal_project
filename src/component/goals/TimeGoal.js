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
      let diff =  Number(this.props.userProfile.current_weight - this.props.userProfile.ideal_weight)
        if(diff >= 1){
            return this.setState({weeks: diff})
        } else{
            this.setState({weeks: 0})
        }
    }

    calorieCounter = (lbs) => {
        return(
        <div className="time-goal-body">
            <div>Your current weight is: {this.props.userProfile.current_weight}</div>
            <div>Your ideal weight is: {this.props.userProfile.ideal_weight}</div>
            <div>
            if you loose {lbs} calories/week or {lbs/3500} lb(s)/week
            </div>
            <div>
                {Number((lbs / 7))} calories per day
            </div>
            <div>
                {Number((lbs / 7) / 2)} calories from each diet and exercise
            </div>
            <div>It will take an estimated {Math.round(this.state.weeks / (lbs/3500))} weeks to reach your ideal weight</div>
        </div>
        )
    }
    

    render(){
        return(
            <div className="time-goal-wrapper">
                 <div className="time-options">
                 <div>Goal 1</div>  
                    {this.calorieCounter(this.state.onePound)}
                    {/* <button>Set Goal</button> */}
                </div>
                <div className="time-options">
                <div>Goal 2</div>  
                    {this.calorieCounter(this.state.oneHalfPounds)}
                    {/* <button>Set Goal</button> */}
                </div>
                <div className="time-options">
                   <div>Goal 3</div> 
                    {this.calorieCounter(this.state.twoPounds)}
                    {/* <button>Set Goal</button> */}
                 </div>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
        userid: state.userProfile.id,
    }
}

export default connect(mapStateToProps)(TimeGoal);